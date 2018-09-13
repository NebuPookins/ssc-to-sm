import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLTextAreaElement
import kotlin.browser.document

data class SscHeader(
		val version: String? = null,
		val title: String? = null,
		val artist: String? = null,
		val banner: String? = null,
		val background: String? = null,
		val cdTitle: String? = null,
		val music: String? = null,
		val sampleStart: String? = null,
		val sampleLength: String? = null,
		val displayBpm: String? = null,
		val bpms: String? = null
)

data class SscNoteData(
		val stepStyle: String? = null,
		val difficulty: String? = null,
		val meter: String? = null,
		val notes: String? = null,
		val bpms: String? = null,
		val stops: String? = null,
		val displayBpm: String? = null
)

data class SscModel(
		val header: SscHeader,
		val noteData: List<SscNoteData>
)

data class SmHeader(
		val title: String,
		val artist: String?,
		val banner: String?,
		val background: String?,
		val cdTitle: String?,
		val music: String?,
		val sampleStart: String?,
		val sampleLength: String?,
		val displayBpm: String?,
		val bpms: String?,
		val stops: String?
)

data class SmNoteData(
		val stepStyle: String,
		val difficulty: String,
		val meter: String,
		val notes: String
)

data class SmModel(
		val header: SmHeader,
		val noteData: List<SmNoteData>
) {
	fun toFileContents(): String {
		val retVal = StringBuilder()
		fun addFieldIfNonNull(key: String, value: String?) {
			if (value != null) {
				retVal.append("#$key:$value;\n")
			}
		}
		retVal.append("#TITLE:${header.title};\n")
		addFieldIfNonNull("ARTIST", header.artist)
		addFieldIfNonNull("BANNER", header.banner)
		addFieldIfNonNull("BACKGROUND", header.background)
		addFieldIfNonNull("CDTITLE", header.cdTitle)
		addFieldIfNonNull("MUSIC", header.music)
		addFieldIfNonNull("SAMPLESTART", header.sampleStart)
		addFieldIfNonNull("SAMPLELENGTH", header.sampleLength)
		addFieldIfNonNull("DISPLAYBPM", header.displayBpm)
		addFieldIfNonNull("BPMS", header.bpms)
		addFieldIfNonNull("STOPS", header.stops)
		noteData.forEach {
			retVal.append("\n")
			retVal.append("//---------------${it.stepStyle} - ----------------\n")
			retVal.append("#NOTES:\n")
			retVal.append("     ${it.stepStyle}:\n")
			retVal.append("     :\n")
			retVal.append("     ${it.difficulty}:\n")
			retVal.append("     ${it.meter}:\n")
			retVal.append("     0,0,0,0,0:\n")
			retVal.append(it.notes)
			retVal.append(";\n")
		}
		return retVal.toString()
	}
}

fun guessSuffixFromNoteData(noteData: List<SscNoteData>): String {
	val difficultyVotes = noteData.map { it.difficulty!! }.groupBy { it }.mapValues { it.value.size }
	val maxVote = difficultyVotes.values.max()
	return difficultyVotes.entries.find { it.value == maxVote }!!.key
}

fun convert(sscContents: String): Map<String, String> {
	val sscModel = Parsers.parseSscModel(sscContents)
	val grouped = sscModel.noteData
			.groupBy { Pair(it.bpms, it.stops) }
			.values
			.map {
				val header = SmHeader(
						title = "${sscModel.header.title} [${guessSuffixFromNoteData(it)}]",
						artist = sscModel.header.artist,
						banner = sscModel.header.banner,
						background = sscModel.header.background,
						cdTitle = sscModel.header.cdTitle,
						music = sscModel.header.music,
						sampleStart = sscModel.header.sampleStart,
						sampleLength = sscModel.header.sampleLength,
						displayBpm = sscModel.header.displayBpm,
						bpms = it.first().bpms ?: sscModel.header.bpms,
						stops = it.first().stops
				)
				SmModel(header, it.map {
					SmNoteData(
							stepStyle = it.stepStyle!!,
							difficulty = it.difficulty!!,
							meter = it.meter!!,
							notes = it.notes!!
					)
				})
			}
	val oldNameToNewName = mutableMapOf<String, String>()
	val newNameToOldName = mutableMapOf<String, String>()
	grouped.forEach {
		val oldName = it.header.title
		if (newNameToOldName.containsKey(oldName)) {
			TODO("Found duplicate name for $oldName")
		} else {
			newNameToOldName[oldName] = oldName
			oldNameToNewName[oldName] = oldName
		}
	}
	val smWithDistinctNames = grouped.map { it.copy(header = it.header.copy(title = oldNameToNewName[it.header.title]!!)) }
	return smWithDistinctNames
			.associateBy { "${it.header.title}.sm" }
			.mapValues { it.value.toFileContents() }
}

@JsName("hookUpHtmlElements")
fun hookUpHtmlElements(sscInputTextArea: HTMLTextAreaElement, outputDiv: HTMLDivElement) {
	sscInputTextArea.onchange = {
		console.log("Reacting to sscInput change")
		outputDiv.innerHTML = ""
		val result = convert(sscInputTextArea.value)

		result.forEach {
			val fileName = document.createElement("h1")
			fileName.textContent = it.key
			outputDiv.appendChild(fileName)
			val fileContents = document.createElement("textarea") as HTMLTextAreaElement
			fileContents.classList.add("file-contents")
			fileContents.readOnly = true
			fileContents.value = it.value
			outputDiv.appendChild(fileContents)
		}
		null
	}
}
