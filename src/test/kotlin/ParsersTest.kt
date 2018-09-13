import kotlin.browser.document
import kotlin.test.assertEquals

object ParsersTest {
	fun everythingUpUntil_happyCase() {
		val underTest = Parsers.everythingUpUntil(';')
		assertEquals(Parsers.ParseResult.Failure("abc"), underTest.parse("abc"))
		assertEquals(Parsers.ParseResult.Success("abc", ";efg"), underTest.parse("abc;efg"))
	}

	fun terminal_happyCase() {
		val underTest = Parsers.terminal("#")
		assertEquals(Parsers.ParseResult.Failure("abc"), underTest.parse("abc"))
		assertEquals(Parsers.ParseResult.Success("#", "VERSION:123;"), underTest.parse("#VERSION:123;"))
	}

	fun sscKeyValuePair_happyCase() {
		val underTest = Parsers.sscKeyValuePair("VERSION")
		assertEquals(Parsers.ParseResult.Failure("abc"), underTest.parse("abc"))
		assertEquals(Parsers.ParseResult.Success(Parsers.KeyValuePair("VERSION", "123"), "abc"), underTest.parse("#VERSION:123;abc"))
	}

	fun zeroOrMore_happyCase() {
		val underTest = Parsers.zeroOrMore(Parsers.terminal("abc"))
		assertEquals(Parsers.ParseResult.Success(listOf(), "def"), underTest.parse("def"))
		assertEquals(Parsers.ParseResult.Success(listOf("abc"), "def"), underTest.parse("abcdef"))
		assertEquals(Parsers.ParseResult.Success(listOf("abc", "abc"), "def"), underTest.parse("abcabcdef"))
	}

	fun twoSscKeyValuePair_happyCase() {
		val first = Parsers.sscKeyValuePair("VERSION")
		val second = Parsers.sscKeyValuePair("TITLE")
		val underTest = first.followedBy(second) { u, v -> Pair(u, v) }
		assertEquals(Parsers.ParseResult.Failure("abc"), underTest.parse("abc"))
		assertEquals(Parsers.ParseResult.Success(Pair(
				Parsers.KeyValuePair("VERSION", "123"),
				Parsers.KeyValuePair("TITLE", "abc")),
				"def"),
				underTest.parse("#VERSION:123;#TITLE:abc;def"))
	}

	fun listOfSscKeyValuePair_happyCase() {
		val first = Parsers.sscKeyValuePair("VERSION")
		val second = Parsers.sscKeyValuePair("TITLE")
		val underTest = Parsers.zeroOrMore(Parsers.anyOf(first, second))
		assertEquals(Parsers.ParseResult.Success(listOf(), "abc"), underTest.parse("abc"))
		assertEquals(Parsers.ParseResult.Success(listOf(
				Parsers.KeyValuePair("VERSION", "123"),
				Parsers.KeyValuePair("TITLE", "abc")),
				"def"),
				underTest.parse("#VERSION:123;\n#TITLE:abc;def"))
	}
}

fun main(args: Array<String>) {
	console.log("Running tests...")
	ParsersTest.everythingUpUntil_happyCase()
	ParsersTest.terminal_happyCase()
	ParsersTest.sscKeyValuePair_happyCase()
	ParsersTest.zeroOrMore_happyCase()
	ParsersTest.twoSscKeyValuePair_happyCase()
	ParsersTest.listOfSscKeyValuePair_happyCase()
	document.bgColor = "green"
}