object Parsers {
	sealed class ParseResult<out I, out T> {
		abstract val remaining: I

		data class Success<out I, out T>(
				val result: T,
				override val remaining: I
		) : ParseResult<I, T>()

		data class Failure<out I>(
				override val remaining: I
		) : ParseResult<I, Nothing>()
	}

	interface Parser<I, out T> {
		fun parse(input: I): ParseResult<I, T>

		fun <U, V> followedBy(nextParser: Parser<I, U>, combiner: (T, U) -> V): Parser<I, V> {
			val me = this
			return object : Parser<I, V> {
				override fun parse(input: I): ParseResult<I, V> {
					val firstResult = me.parse(input)
					return if (firstResult is ParseResult.Success) {
						val secondResult = nextParser.parse(firstResult.remaining)
						if (secondResult is ParseResult.Success) {
							ParseResult.Success(combiner(firstResult.result, secondResult.result), secondResult.remaining)
						} else {
							ParseResult.Failure(input)
						}
					} else {
						ParseResult.Failure(input)
					}
				}
			}
		}

		fun <U> map(transform: (T) -> U): Parser<I, U> {
			val me = this
			return object : Parser<I, U> {
				override fun parse(input: I): ParseResult<I, U> {
					val results = me.parse(input)
					return when (results) {
						is ParseResult.Success -> ParseResult.Success(transform.invoke(results.result), results.remaining)
						is ParseResult.Failure -> results
					}
				}
			}
		}
	}

	fun terminal(image: String): Parser<String, String> {
		return object : Parser<String, String> {
			override fun parse(input: String): ParseResult<String, String> {
				return if (input.startsWith(image)) {
					ParseResult.Success(image, input.substring(image.length))
				} else {
					ParseResult.Failure(input)
				}
			}
		}
	}

	fun everythingUpUntil(delimiter: Char): Parser<String, String> {
		return object : Parser<String, String> {
			override fun parse(input: String): ParseResult<String, String> {
				val index = input.indexOf(delimiter)
				return when (index) {
					-1 -> ParseResult.Failure(input)
					else -> ParseResult.Success(input.substring(0, index), input.substring(index))
				}
			}
		}
	}

	fun <I, T> zeroOrMore(p: Parser<I, T>): Parser<I, List<T>> {
		return object : Parser<I, List<T>> {
			override fun parse(input: I): ParseResult<I, List<T>> {
				val retVal = mutableListOf<T>()
				var remaining = input
				do {
					var parseResult = p.parse(remaining)
					when (parseResult) {
						is ParseResult.Success -> {
							retVal.add(parseResult.result)
							remaining = parseResult.remaining
						}
						is ParseResult.Failure ->
							return ParseResult.Success(retVal, remaining)
					}
				} while (true)
			}
		}
	}

	fun <I, T> anyOf(vararg parsers: Parser<I, T>): Parser<I, T> {
		return object : Parser<I, T> {
			override fun parse(input: I): ParseResult<I, T> {
				var i = 0
				while (i < parsers.size) {
					val parser = parsers[i]
					val result = parser.parse(input)
					if (result is ParseResult.Success) {
						return result
					}
					i++
				}
				return ParseResult.Failure(input)
			}
		}
	}

	private val comment = terminal("//")
			.followedBy(everythingUpUntil('\n')) { _, comment -> comment }

	private val optionalWhitespace = zeroOrMore(anyOf(
			terminal(" "),
			terminal("\n"),
			terminal("\r"),
			comment
	))


	data class KeyValuePair(
			val key: String,
			val value: String
	)

	fun sscKeyValuePair(keyName: String): Parser<String, KeyValuePair> {
		return terminal("#")
				.followedBy(terminal(keyName)) { _, _ -> null }
				.followedBy(terminal(":")) { _, _ -> null }
				.followedBy(everythingUpUntil(';')) { _, value -> KeyValuePair(keyName, value) }
				.followedBy(terminal(";")) { v, _ -> v }
				.followedBy(optionalWhitespace) { v, _ -> v }

	}

	val sscFields = zeroOrMore(anyOf(
			sscKeyValuePair("VERSION"),
			sscKeyValuePair("TITLE"),
			sscKeyValuePair("ARTIST"),
			sscKeyValuePair("BANNER"),
			sscKeyValuePair("BACKGROUND"),
			sscKeyValuePair("CDTITLE"),
			sscKeyValuePair("MUSIC"),
			sscKeyValuePair("SAMPLESTART"),
			sscKeyValuePair("SAMPLELENGTH"),
			sscKeyValuePair("DISPLAYBPM"),
			sscKeyValuePair("BPMS"),
			sscKeyValuePair("NOTEDATA"),
			sscKeyValuePair("STEPSTYPE"),
			sscKeyValuePair("DIFFICULTY"),
			sscKeyValuePair("METER"),
			sscKeyValuePair("NOTES"),
			sscKeyValuePair("STOPS")
	))

	fun sscKeyValuePair2(keyName: String): Parser<List<KeyValuePair>, KeyValuePair> {
		return object : Parser<List<KeyValuePair>, KeyValuePair> {
			override fun parse(input: List<KeyValuePair>): ParseResult<List<KeyValuePair>, KeyValuePair> {
				if (input.isEmpty()) {
					return ParseResult.Failure(input)
				}
				return if (input[0].key == keyName) {
					ParseResult.Success(input[0], input.drop(1))
				} else {
					ParseResult.Failure(input)
				}
			}
		}
	}

	val sscHeader = zeroOrMore(anyOf(
			sscKeyValuePair2("VERSION"),
			sscKeyValuePair2("TITLE"),
			sscKeyValuePair2("ARTIST"),
			sscKeyValuePair2("BANNER"),
			sscKeyValuePair2("BACKGROUND"),
			sscKeyValuePair2("CDTITLE"),
			sscKeyValuePair2("MUSIC"),
			sscKeyValuePair2("SAMPLESTART"),
			sscKeyValuePair2("SAMPLELENGTH"),
			sscKeyValuePair2("DISPLAYBPM"),
			sscKeyValuePair2("BPMS")
	)).map {
		it.fold(SscHeader()) { accum, elem ->
			when (elem.key) {
				"VERSION" -> accum.copy(version = elem.value)
				"TITLE" -> accum.copy(title = elem.value)
				"ARTIST" -> accum.copy(artist = elem.value)
				"BANNER" -> accum.copy(banner = elem.value)
				"BACKGROUND" -> accum.copy(background = elem.value)
				"CDTITLE" -> accum.copy(cdTitle = elem.value)
				"MUSIC" -> accum.copy(music = elem.value)
				"SAMPLESTART" -> accum.copy(sampleStart = elem.value)
				"SAMPLELENGTH" -> accum.copy(sampleLength = elem.value)
				"DISPLAYBPM" -> accum.copy(displayBpm = elem.value)
				"BPMS" -> accum.copy(bpms = elem.value)
				else -> TODO("Don't know how to handle ${elem.key}")
			}
		}
	}

	private val noteData =
			sscKeyValuePair2("NOTEDATA")
					.followedBy(zeroOrMore(anyOf(
							sscKeyValuePair2("STEPSTYPE"),
							sscKeyValuePair2("DIFFICULTY"),
							sscKeyValuePair2("METER"),
							sscKeyValuePair2("NOTES"),
							sscKeyValuePair2("BPMS"),
							sscKeyValuePair2("STOPS"),
							sscKeyValuePair2("DISPLAYBPM")
					))) { _, v -> v}
					.map {
						it.fold(SscNoteData()) { accum, elem ->
							when (elem.key) {
								"STEPSTYPE" -> accum.copy(stepStyle = elem.value)
								"DIFFICULTY" -> accum.copy(difficulty = elem.value)
								"METER" -> accum.copy(meter = elem.value)
								"NOTES" -> accum.copy(notes = elem.value)
								"BPMS" -> accum.copy(bpms = elem.value)
								"STOPS" -> accum.copy(stops = elem.value)
								"DISPLAYBPM" -> accum.copy(displayBpm = elem.value)
								else -> TODO("Don't know how to handle ${elem.key}")
							}
						}
					}

	private val sscModelFromKeyValuePair = sscHeader.followedBy(zeroOrMore(noteData)) { header, noteDatas ->
		SscModel(header, noteDatas)
	}

	fun parseSscModel(input: String): SscModel { //TODO: either
		val intermediateResult = sscFields.parse(input)
		when (intermediateResult) {
			is ParseResult.Failure -> TODO("Could not parse: $intermediateResult")
			is ParseResult.Success -> {
				if (intermediateResult.remaining.isNotBlank()) {
					TODO("Could not parse ${intermediateResult.remaining}")
				}
				val finalResult = sscModelFromKeyValuePair.parse(intermediateResult.result)
				when (finalResult) {
					is ParseResult.Failure -> TODO("Could not parse $finalResult")
					is ParseResult.Success -> {
						if (finalResult.remaining.isNotEmpty()) {
							TODO("Could not parse ${finalResult.remaining}")
						}
						return finalResult.result
					}
				}
			}
		}
	}
}