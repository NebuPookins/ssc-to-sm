if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'ssc-to-sm_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'ssc-to-sm_main'.");
}
this['ssc-to-sm_main'] = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var indexOf = Kotlin.kotlin.text.indexOf_8eortd$;
  var equals = Kotlin.equals;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var toString = Kotlin.toString;
  var ensureNotNull = Kotlin.ensureNotNull;
  var max = Kotlin.kotlin.collections.max_exjks8$;
  var Pair = Kotlin.kotlin.Pair;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var throwCCE = Kotlin.throwCCE;
  Parsers$ParseResult$Success.prototype = Object.create(Parsers$ParseResult.prototype);
  Parsers$ParseResult$Success.prototype.constructor = Parsers$ParseResult$Success;
  Parsers$ParseResult$Failure.prototype = Object.create(Parsers$ParseResult.prototype);
  Parsers$ParseResult$Failure.prototype.constructor = Parsers$ParseResult$Failure;
  function Parsers() {
    Parsers_instance = this;
    this.comment_0 = this.terminal_61zpoe$('//').followedBy_6hn76v$(this.everythingUpUntil_s8itvh$(10), Parsers$comment$lambda);
    this.optionalWhitespace_0 = this.zeroOrMore_pvf76m$(this.anyOf_j0fx17$([this.terminal_61zpoe$(' '), this.terminal_61zpoe$('\n'), this.terminal_61zpoe$('\r'), this.comment_0]));
    this.sscFields = this.zeroOrMore_pvf76m$(this.anyOf_j0fx17$([this.sscKeyValuePair_61zpoe$('VERSION'), this.sscKeyValuePair_61zpoe$('TITLE'), this.sscKeyValuePair_61zpoe$('ARTIST'), this.sscKeyValuePair_61zpoe$('BANNER'), this.sscKeyValuePair_61zpoe$('BACKGROUND'), this.sscKeyValuePair_61zpoe$('CDTITLE'), this.sscKeyValuePair_61zpoe$('MUSIC'), this.sscKeyValuePair_61zpoe$('SAMPLESTART'), this.sscKeyValuePair_61zpoe$('SAMPLELENGTH'), this.sscKeyValuePair_61zpoe$('DISPLAYBPM'), this.sscKeyValuePair_61zpoe$('BPMS'), this.sscKeyValuePair_61zpoe$('NOTEDATA'), this.sscKeyValuePair_61zpoe$('STEPSTYPE'), this.sscKeyValuePair_61zpoe$('DIFFICULTY'), this.sscKeyValuePair_61zpoe$('METER'), this.sscKeyValuePair_61zpoe$('NOTES'), this.sscKeyValuePair_61zpoe$('STOPS')]));
    this.sscHeader = this.zeroOrMore_pvf76m$(this.anyOf_j0fx17$([this.sscKeyValuePair2_61zpoe$('VERSION'), this.sscKeyValuePair2_61zpoe$('TITLE'), this.sscKeyValuePair2_61zpoe$('ARTIST'), this.sscKeyValuePair2_61zpoe$('BANNER'), this.sscKeyValuePair2_61zpoe$('BACKGROUND'), this.sscKeyValuePair2_61zpoe$('CDTITLE'), this.sscKeyValuePair2_61zpoe$('MUSIC'), this.sscKeyValuePair2_61zpoe$('SAMPLESTART'), this.sscKeyValuePair2_61zpoe$('SAMPLELENGTH'), this.sscKeyValuePair2_61zpoe$('DISPLAYBPM'), this.sscKeyValuePair2_61zpoe$('BPMS')])).map_r1ursk$(Parsers$sscHeader$lambda);
    this.noteData_0 = this.sscKeyValuePair2_61zpoe$('NOTEDATA').followedBy_6hn76v$(this.zeroOrMore_pvf76m$(this.anyOf_j0fx17$([this.sscKeyValuePair2_61zpoe$('STEPSTYPE'), this.sscKeyValuePair2_61zpoe$('DIFFICULTY'), this.sscKeyValuePair2_61zpoe$('METER'), this.sscKeyValuePair2_61zpoe$('NOTES'), this.sscKeyValuePair2_61zpoe$('BPMS'), this.sscKeyValuePair2_61zpoe$('STOPS'), this.sscKeyValuePair2_61zpoe$('DISPLAYBPM')])), Parsers$noteData$lambda).map_r1ursk$(Parsers$noteData$lambda_0);
    this.sscModelFromKeyValuePair_0 = this.sscHeader.followedBy_6hn76v$(this.zeroOrMore_pvf76m$(this.noteData_0), Parsers$sscModelFromKeyValuePair$lambda);
  }
  function Parsers$ParseResult() {
  }
  function Parsers$ParseResult$Success(result, remaining) {
    Parsers$ParseResult.call(this);
    this.result = result;
    this.remaining_qlcvrt$_0 = remaining;
  }
  Object.defineProperty(Parsers$ParseResult$Success.prototype, 'remaining', {
    get: function () {
      return this.remaining_qlcvrt$_0;
    }
  });
  Parsers$ParseResult$Success.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Success',
    interfaces: [Parsers$ParseResult]
  };
  Parsers$ParseResult$Success.prototype.component1 = function () {
    return this.result;
  };
  Parsers$ParseResult$Success.prototype.component2 = function () {
    return this.remaining;
  };
  Parsers$ParseResult$Success.prototype.copy_xwfjod$ = function (result, remaining) {
    return new Parsers$ParseResult$Success(result === void 0 ? this.result : result, remaining === void 0 ? this.remaining : remaining);
  };
  Parsers$ParseResult$Success.prototype.toString = function () {
    return 'Success(result=' + Kotlin.toString(this.result) + (', remaining=' + Kotlin.toString(this.remaining)) + ')';
  };
  Parsers$ParseResult$Success.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.result) | 0;
    result = result * 31 + Kotlin.hashCode(this.remaining) | 0;
    return result;
  };
  Parsers$ParseResult$Success.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.result, other.result) && Kotlin.equals(this.remaining, other.remaining)))));
  };
  function Parsers$ParseResult$Failure(remaining) {
    Parsers$ParseResult.call(this);
    this.remaining_vu9d4w$_0 = remaining;
  }
  Object.defineProperty(Parsers$ParseResult$Failure.prototype, 'remaining', {
    get: function () {
      return this.remaining_vu9d4w$_0;
    }
  });
  Parsers$ParseResult$Failure.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Failure',
    interfaces: [Parsers$ParseResult]
  };
  Parsers$ParseResult$Failure.prototype.component1 = function () {
    return this.remaining;
  };
  Parsers$ParseResult$Failure.prototype.copy_11rb$ = function (remaining) {
    return new Parsers$ParseResult$Failure(remaining === void 0 ? this.remaining : remaining);
  };
  Parsers$ParseResult$Failure.prototype.toString = function () {
    return 'Failure(remaining=' + Kotlin.toString(this.remaining) + ')';
  };
  Parsers$ParseResult$Failure.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.remaining) | 0;
    return result;
  };
  Parsers$ParseResult$Failure.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.remaining, other.remaining))));
  };
  Parsers$ParseResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParseResult',
    interfaces: []
  };
  function Parsers$Parser() {
  }
  function Parsers$Parser$followedBy$ObjectLiteral(closure$me, closure$nextParser, closure$combiner) {
    this.closure$me = closure$me;
    this.closure$nextParser = closure$nextParser;
    this.closure$combiner = closure$combiner;
  }
  Parsers$Parser$followedBy$ObjectLiteral.prototype.parse_11rb$ = function (input) {
    var tmp$;
    var firstResult = this.closure$me.parse_11rb$(input);
    if (Kotlin.isType(firstResult, Parsers$ParseResult$Success)) {
      var secondResult = this.closure$nextParser.parse_11rb$(firstResult.remaining);
      if (Kotlin.isType(secondResult, Parsers$ParseResult$Success)) {
        tmp$ = new Parsers$ParseResult$Success(this.closure$combiner(firstResult.result, secondResult.result), secondResult.remaining);
      }
       else {
        tmp$ = new Parsers$ParseResult$Failure(input);
      }
    }
     else {
      tmp$ = new Parsers$ParseResult$Failure(input);
    }
    return tmp$;
  };
  Parsers$Parser$followedBy$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Parsers$Parser]
  };
  Parsers$Parser.prototype.followedBy_6hn76v$ = function (nextParser, combiner) {
    var me = this;
    return new Parsers$Parser$followedBy$ObjectLiteral(me, nextParser, combiner);
  };
  function Parsers$Parser$map$ObjectLiteral(closure$me, closure$transform) {
    this.closure$me = closure$me;
    this.closure$transform = closure$transform;
  }
  Parsers$Parser$map$ObjectLiteral.prototype.parse_11rb$ = function (input) {
    var tmp$;
    var results = this.closure$me.parse_11rb$(input);
    if (Kotlin.isType(results, Parsers$ParseResult$Success))
      tmp$ = new Parsers$ParseResult$Success(this.closure$transform(results.result), results.remaining);
    else if (Kotlin.isType(results, Parsers$ParseResult$Failure))
      tmp$ = results;
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  Parsers$Parser$map$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Parsers$Parser]
  };
  Parsers$Parser.prototype.map_r1ursk$ = function (transform) {
    var me = this;
    return new Parsers$Parser$map$ObjectLiteral(me, transform);
  };
  Parsers$Parser.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Parser',
    interfaces: []
  };
  function Parsers$terminal$ObjectLiteral(closure$image) {
    this.closure$image = closure$image;
  }
  Parsers$terminal$ObjectLiteral.prototype.parse_11rb$ = function (input) {
    var tmp$;
    if (startsWith(input, this.closure$image)) {
      var tmp$_0 = this.closure$image;
      var startIndex = this.closure$image.length;
      tmp$ = new Parsers$ParseResult$Success(tmp$_0, input.substring(startIndex));
    }
     else {
      tmp$ = new Parsers$ParseResult$Failure(input);
    }
    return tmp$;
  };
  Parsers$terminal$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Parsers$Parser]
  };
  Parsers.prototype.terminal_61zpoe$ = function (image) {
    return new Parsers$terminal$ObjectLiteral(image);
  };
  function Parsers$everythingUpUntil$ObjectLiteral(closure$delimiter) {
    this.closure$delimiter = closure$delimiter;
  }
  Parsers$everythingUpUntil$ObjectLiteral.prototype.parse_11rb$ = function (input) {
    var tmp$;
    var index = indexOf(input, this.closure$delimiter);
    if (index === -1)
      tmp$ = new Parsers$ParseResult$Failure(input);
    else {
      tmp$ = new Parsers$ParseResult$Success(input.substring(0, index), input.substring(index));
    }
    return tmp$;
  };
  Parsers$everythingUpUntil$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Parsers$Parser]
  };
  Parsers.prototype.everythingUpUntil_s8itvh$ = function (delimiter) {
    return new Parsers$everythingUpUntil$ObjectLiteral(delimiter);
  };
  function Parsers$zeroOrMore$ObjectLiteral(closure$p) {
    this.closure$p = closure$p;
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  Parsers$zeroOrMore$ObjectLiteral.prototype.parse_11rb$ = function (input) {
    var retVal = ArrayList_init();
    var remaining = input;
    do {
      var parseResult = this.closure$p.parse_11rb$(remaining);
      if (Kotlin.isType(parseResult, Parsers$ParseResult$Success)) {
        retVal.add_11rb$(parseResult.result);
        remaining = parseResult.remaining;
      }
       else if (Kotlin.isType(parseResult, Parsers$ParseResult$Failure))
        return new Parsers$ParseResult$Success(retVal, remaining);
    }
     while (true);
  };
  Parsers$zeroOrMore$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Parsers$Parser]
  };
  Parsers.prototype.zeroOrMore_pvf76m$ = function (p) {
    return new Parsers$zeroOrMore$ObjectLiteral(p);
  };
  function Parsers$anyOf$ObjectLiteral(closure$parsers) {
    this.closure$parsers = closure$parsers;
  }
  Parsers$anyOf$ObjectLiteral.prototype.parse_11rb$ = function (input) {
    var i = 0;
    while (i < this.closure$parsers.length) {
      var parser = this.closure$parsers[i];
      var result = parser.parse_11rb$(input);
      if (Kotlin.isType(result, Parsers$ParseResult$Success)) {
        return result;
      }
      i = i + 1 | 0;
    }
    return new Parsers$ParseResult$Failure(input);
  };
  Parsers$anyOf$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Parsers$Parser]
  };
  Parsers.prototype.anyOf_j0fx17$ = function (parsers) {
    return new Parsers$anyOf$ObjectLiteral(parsers);
  };
  function Parsers$KeyValuePair(key, value) {
    this.key = key;
    this.value = value;
  }
  Parsers$KeyValuePair.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyValuePair',
    interfaces: []
  };
  Parsers$KeyValuePair.prototype.component1 = function () {
    return this.key;
  };
  Parsers$KeyValuePair.prototype.component2 = function () {
    return this.value;
  };
  Parsers$KeyValuePair.prototype.copy_puj7f4$ = function (key, value) {
    return new Parsers$KeyValuePair(key === void 0 ? this.key : key, value === void 0 ? this.value : value);
  };
  Parsers$KeyValuePair.prototype.toString = function () {
    return 'KeyValuePair(key=' + Kotlin.toString(this.key) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  Parsers$KeyValuePair.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  Parsers$KeyValuePair.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.key, other.key) && Kotlin.equals(this.value, other.value)))));
  };
  function Parsers$sscKeyValuePair$lambda(f, f_0) {
    return null;
  }
  function Parsers$sscKeyValuePair$lambda_0(f, f_0) {
    return null;
  }
  function Parsers$sscKeyValuePair$lambda_1(closure$keyName) {
    return function (f, value) {
      return new Parsers$KeyValuePair(closure$keyName, value);
    };
  }
  function Parsers$sscKeyValuePair$lambda_2(v, f) {
    return v;
  }
  function Parsers$sscKeyValuePair$lambda_3(v, f) {
    return v;
  }
  Parsers.prototype.sscKeyValuePair_61zpoe$ = function (keyName) {
    return this.terminal_61zpoe$('#').followedBy_6hn76v$(this.terminal_61zpoe$(keyName), Parsers$sscKeyValuePair$lambda).followedBy_6hn76v$(this.terminal_61zpoe$(':'), Parsers$sscKeyValuePair$lambda_0).followedBy_6hn76v$(this.everythingUpUntil_s8itvh$(59), Parsers$sscKeyValuePair$lambda_1(keyName)).followedBy_6hn76v$(this.terminal_61zpoe$(';'), Parsers$sscKeyValuePair$lambda_2).followedBy_6hn76v$(this.optionalWhitespace_0, Parsers$sscKeyValuePair$lambda_3);
  };
  function Parsers$sscKeyValuePair2$ObjectLiteral(closure$keyName) {
    this.closure$keyName = closure$keyName;
  }
  Parsers$sscKeyValuePair2$ObjectLiteral.prototype.parse_11rb$ = function (input) {
    var tmp$;
    if (input.isEmpty()) {
      return new Parsers$ParseResult$Failure(input);
    }
    if (equals(input.get_za3lpa$(0).key, this.closure$keyName)) {
      tmp$ = new Parsers$ParseResult$Success(input.get_za3lpa$(0), drop(input, 1));
    }
     else {
      tmp$ = new Parsers$ParseResult$Failure(input);
    }
    return tmp$;
  };
  Parsers$sscKeyValuePair2$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Parsers$Parser]
  };
  Parsers.prototype.sscKeyValuePair2_61zpoe$ = function (keyName) {
    return new Parsers$sscKeyValuePair2$ObjectLiteral(keyName);
  };
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  Parsers.prototype.parseSscModel_61zpoe$ = function (input) {
    var intermediateResult = this.sscFields.parse_11rb$(input);
    if (Kotlin.isType(intermediateResult, Parsers$ParseResult$Failure)) {
      throw new NotImplementedError_init('An operation is not implemented: ' + ('Could not parse: ' + intermediateResult));
    }
     else if (Kotlin.isType(intermediateResult, Parsers$ParseResult$Success)) {
      if (!isBlank(intermediateResult.remaining)) {
        throw new NotImplementedError_init('An operation is not implemented: ' + ('Could not parse ' + intermediateResult.remaining));
      }
      var finalResult = this.sscModelFromKeyValuePair_0.parse_11rb$(intermediateResult.result);
      if (Kotlin.isType(finalResult, Parsers$ParseResult$Failure)) {
        throw new NotImplementedError_init('An operation is not implemented: ' + ('Could not parse ' + finalResult));
      }
       else if (Kotlin.isType(finalResult, Parsers$ParseResult$Success)) {
        if (!finalResult.remaining.isEmpty()) {
          throw new NotImplementedError_init('An operation is not implemented: ' + ('Could not parse ' + finalResult.remaining));
        }
        return finalResult.result;
      }
       else
        Kotlin.noWhenBranchMatched();
    }
     else
      Kotlin.noWhenBranchMatched();
  };
  function Parsers$comment$lambda(f, comment) {
    return comment;
  }
  function Parsers$sscHeader$lambda(it) {
    var tmp$;
    var accumulator = new SscHeader();
    tmp$ = it.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var accum = accumulator;
      var operation$result;
      operation$break: do {
        switch (element.key) {
          case 'VERSION':
            operation$result = accum.copy_hcwmn3$(element.value);
            break operation$break;
          case 'TITLE':
            operation$result = accum.copy_hcwmn3$(void 0, element.value);
            break operation$break;
          case 'ARTIST':
            operation$result = accum.copy_hcwmn3$(void 0, void 0, element.value);
            break operation$break;
          case 'BANNER':
            operation$result = accum.copy_hcwmn3$(void 0, void 0, void 0, element.value);
            break operation$break;
          case 'BACKGROUND':
            operation$result = accum.copy_hcwmn3$(void 0, void 0, void 0, void 0, element.value);
            break operation$break;
          case 'CDTITLE':
            operation$result = accum.copy_hcwmn3$(void 0, void 0, void 0, void 0, void 0, element.value);
            break operation$break;
          case 'MUSIC':
            operation$result = accum.copy_hcwmn3$(void 0, void 0, void 0, void 0, void 0, void 0, element.value);
            break operation$break;
          case 'SAMPLESTART':
            operation$result = accum.copy_hcwmn3$(void 0, void 0, void 0, void 0, void 0, void 0, void 0, element.value);
            break operation$break;
          case 'SAMPLELENGTH':
            operation$result = accum.copy_hcwmn3$(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, element.value);
            break operation$break;
          case 'DISPLAYBPM':
            operation$result = accum.copy_hcwmn3$(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, element.value);
            break operation$break;
          case 'BPMS':
            operation$result = accum.copy_hcwmn3$(void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, element.value);
            break operation$break;
          default:throw new NotImplementedError_init('An operation is not implemented: ' + ("Don't know how to handle " + element.key));
        }
      }
       while (false);
      accumulator = operation$result;
    }
    return accumulator;
  }
  function Parsers$noteData$lambda(f, v) {
    return v;
  }
  function Parsers$noteData$lambda_0(it) {
    var tmp$;
    var accumulator = new SscNoteData();
    tmp$ = it.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var accum = accumulator;
      var operation$result;
      operation$break: do {
        switch (element.key) {
          case 'STEPSTYPE':
            operation$result = accum.copy_3qlw69$(element.value);
            break operation$break;
          case 'DIFFICULTY':
            operation$result = accum.copy_3qlw69$(void 0, element.value);
            break operation$break;
          case 'METER':
            operation$result = accum.copy_3qlw69$(void 0, void 0, element.value);
            break operation$break;
          case 'NOTES':
            operation$result = accum.copy_3qlw69$(void 0, void 0, void 0, element.value);
            break operation$break;
          case 'BPMS':
            operation$result = accum.copy_3qlw69$(void 0, void 0, void 0, void 0, element.value);
            break operation$break;
          case 'STOPS':
            operation$result = accum.copy_3qlw69$(void 0, void 0, void 0, void 0, void 0, element.value);
            break operation$break;
          case 'DISPLAYBPM':
            operation$result = accum.copy_3qlw69$(void 0, void 0, void 0, void 0, void 0, void 0, element.value);
            break operation$break;
          default:throw new NotImplementedError_init('An operation is not implemented: ' + ("Don't know how to handle " + element.key));
        }
      }
       while (false);
      accumulator = operation$result;
    }
    return accumulator;
  }
  function Parsers$sscModelFromKeyValuePair$lambda(header, noteDatas) {
    return new SscModel(header, noteDatas);
  }
  Parsers.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Parsers',
    interfaces: []
  };
  var Parsers_instance = null;
  function Parsers_getInstance() {
    if (Parsers_instance === null) {
      new Parsers();
    }
    return Parsers_instance;
  }
  function SscHeader(version, title, artist, banner, background, cdTitle, music, sampleStart, sampleLength, displayBpm, bpms) {
    if (version === void 0)
      version = null;
    if (title === void 0)
      title = null;
    if (artist === void 0)
      artist = null;
    if (banner === void 0)
      banner = null;
    if (background === void 0)
      background = null;
    if (cdTitle === void 0)
      cdTitle = null;
    if (music === void 0)
      music = null;
    if (sampleStart === void 0)
      sampleStart = null;
    if (sampleLength === void 0)
      sampleLength = null;
    if (displayBpm === void 0)
      displayBpm = null;
    if (bpms === void 0)
      bpms = null;
    this.version = version;
    this.title = title;
    this.artist = artist;
    this.banner = banner;
    this.background = background;
    this.cdTitle = cdTitle;
    this.music = music;
    this.sampleStart = sampleStart;
    this.sampleLength = sampleLength;
    this.displayBpm = displayBpm;
    this.bpms = bpms;
  }
  SscHeader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SscHeader',
    interfaces: []
  };
  SscHeader.prototype.component1 = function () {
    return this.version;
  };
  SscHeader.prototype.component2 = function () {
    return this.title;
  };
  SscHeader.prototype.component3 = function () {
    return this.artist;
  };
  SscHeader.prototype.component4 = function () {
    return this.banner;
  };
  SscHeader.prototype.component5 = function () {
    return this.background;
  };
  SscHeader.prototype.component6 = function () {
    return this.cdTitle;
  };
  SscHeader.prototype.component7 = function () {
    return this.music;
  };
  SscHeader.prototype.component8 = function () {
    return this.sampleStart;
  };
  SscHeader.prototype.component9 = function () {
    return this.sampleLength;
  };
  SscHeader.prototype.component10 = function () {
    return this.displayBpm;
  };
  SscHeader.prototype.component11 = function () {
    return this.bpms;
  };
  SscHeader.prototype.copy_hcwmn3$ = function (version, title, artist, banner, background, cdTitle, music, sampleStart, sampleLength, displayBpm, bpms) {
    return new SscHeader(version === void 0 ? this.version : version, title === void 0 ? this.title : title, artist === void 0 ? this.artist : artist, banner === void 0 ? this.banner : banner, background === void 0 ? this.background : background, cdTitle === void 0 ? this.cdTitle : cdTitle, music === void 0 ? this.music : music, sampleStart === void 0 ? this.sampleStart : sampleStart, sampleLength === void 0 ? this.sampleLength : sampleLength, displayBpm === void 0 ? this.displayBpm : displayBpm, bpms === void 0 ? this.bpms : bpms);
  };
  SscHeader.prototype.toString = function () {
    return 'SscHeader(version=' + Kotlin.toString(this.version) + (', title=' + Kotlin.toString(this.title)) + (', artist=' + Kotlin.toString(this.artist)) + (', banner=' + Kotlin.toString(this.banner)) + (', background=' + Kotlin.toString(this.background)) + (', cdTitle=' + Kotlin.toString(this.cdTitle)) + (', music=' + Kotlin.toString(this.music)) + (', sampleStart=' + Kotlin.toString(this.sampleStart)) + (', sampleLength=' + Kotlin.toString(this.sampleLength)) + (', displayBpm=' + Kotlin.toString(this.displayBpm)) + (', bpms=' + Kotlin.toString(this.bpms)) + ')';
  };
  SscHeader.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.version) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.artist) | 0;
    result = result * 31 + Kotlin.hashCode(this.banner) | 0;
    result = result * 31 + Kotlin.hashCode(this.background) | 0;
    result = result * 31 + Kotlin.hashCode(this.cdTitle) | 0;
    result = result * 31 + Kotlin.hashCode(this.music) | 0;
    result = result * 31 + Kotlin.hashCode(this.sampleStart) | 0;
    result = result * 31 + Kotlin.hashCode(this.sampleLength) | 0;
    result = result * 31 + Kotlin.hashCode(this.displayBpm) | 0;
    result = result * 31 + Kotlin.hashCode(this.bpms) | 0;
    return result;
  };
  SscHeader.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.version, other.version) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.artist, other.artist) && Kotlin.equals(this.banner, other.banner) && Kotlin.equals(this.background, other.background) && Kotlin.equals(this.cdTitle, other.cdTitle) && Kotlin.equals(this.music, other.music) && Kotlin.equals(this.sampleStart, other.sampleStart) && Kotlin.equals(this.sampleLength, other.sampleLength) && Kotlin.equals(this.displayBpm, other.displayBpm) && Kotlin.equals(this.bpms, other.bpms)))));
  };
  function SscNoteData(stepStyle, difficulty, meter, notes, bpms, stops, displayBpm) {
    if (stepStyle === void 0)
      stepStyle = null;
    if (difficulty === void 0)
      difficulty = null;
    if (meter === void 0)
      meter = null;
    if (notes === void 0)
      notes = null;
    if (bpms === void 0)
      bpms = null;
    if (stops === void 0)
      stops = null;
    if (displayBpm === void 0)
      displayBpm = null;
    this.stepStyle = stepStyle;
    this.difficulty = difficulty;
    this.meter = meter;
    this.notes = notes;
    this.bpms = bpms;
    this.stops = stops;
    this.displayBpm = displayBpm;
  }
  SscNoteData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SscNoteData',
    interfaces: []
  };
  SscNoteData.prototype.component1 = function () {
    return this.stepStyle;
  };
  SscNoteData.prototype.component2 = function () {
    return this.difficulty;
  };
  SscNoteData.prototype.component3 = function () {
    return this.meter;
  };
  SscNoteData.prototype.component4 = function () {
    return this.notes;
  };
  SscNoteData.prototype.component5 = function () {
    return this.bpms;
  };
  SscNoteData.prototype.component6 = function () {
    return this.stops;
  };
  SscNoteData.prototype.component7 = function () {
    return this.displayBpm;
  };
  SscNoteData.prototype.copy_3qlw69$ = function (stepStyle, difficulty, meter, notes, bpms, stops, displayBpm) {
    return new SscNoteData(stepStyle === void 0 ? this.stepStyle : stepStyle, difficulty === void 0 ? this.difficulty : difficulty, meter === void 0 ? this.meter : meter, notes === void 0 ? this.notes : notes, bpms === void 0 ? this.bpms : bpms, stops === void 0 ? this.stops : stops, displayBpm === void 0 ? this.displayBpm : displayBpm);
  };
  SscNoteData.prototype.toString = function () {
    return 'SscNoteData(stepStyle=' + Kotlin.toString(this.stepStyle) + (', difficulty=' + Kotlin.toString(this.difficulty)) + (', meter=' + Kotlin.toString(this.meter)) + (', notes=' + Kotlin.toString(this.notes)) + (', bpms=' + Kotlin.toString(this.bpms)) + (', stops=' + Kotlin.toString(this.stops)) + (', displayBpm=' + Kotlin.toString(this.displayBpm)) + ')';
  };
  SscNoteData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.stepStyle) | 0;
    result = result * 31 + Kotlin.hashCode(this.difficulty) | 0;
    result = result * 31 + Kotlin.hashCode(this.meter) | 0;
    result = result * 31 + Kotlin.hashCode(this.notes) | 0;
    result = result * 31 + Kotlin.hashCode(this.bpms) | 0;
    result = result * 31 + Kotlin.hashCode(this.stops) | 0;
    result = result * 31 + Kotlin.hashCode(this.displayBpm) | 0;
    return result;
  };
  SscNoteData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.stepStyle, other.stepStyle) && Kotlin.equals(this.difficulty, other.difficulty) && Kotlin.equals(this.meter, other.meter) && Kotlin.equals(this.notes, other.notes) && Kotlin.equals(this.bpms, other.bpms) && Kotlin.equals(this.stops, other.stops) && Kotlin.equals(this.displayBpm, other.displayBpm)))));
  };
  function SscModel(header, noteData) {
    this.header = header;
    this.noteData = noteData;
  }
  SscModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SscModel',
    interfaces: []
  };
  SscModel.prototype.component1 = function () {
    return this.header;
  };
  SscModel.prototype.component2 = function () {
    return this.noteData;
  };
  SscModel.prototype.copy_6rkcs6$ = function (header, noteData) {
    return new SscModel(header === void 0 ? this.header : header, noteData === void 0 ? this.noteData : noteData);
  };
  SscModel.prototype.toString = function () {
    return 'SscModel(header=' + Kotlin.toString(this.header) + (', noteData=' + Kotlin.toString(this.noteData)) + ')';
  };
  SscModel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.header) | 0;
    result = result * 31 + Kotlin.hashCode(this.noteData) | 0;
    return result;
  };
  SscModel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.header, other.header) && Kotlin.equals(this.noteData, other.noteData)))));
  };
  function SmHeader(title, artist, banner, background, cdTitle, music, sampleStart, sampleLength, displayBpm, bpms, stops) {
    this.title = title;
    this.artist = artist;
    this.banner = banner;
    this.background = background;
    this.cdTitle = cdTitle;
    this.music = music;
    this.sampleStart = sampleStart;
    this.sampleLength = sampleLength;
    this.displayBpm = displayBpm;
    this.bpms = bpms;
    this.stops = stops;
  }
  SmHeader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SmHeader',
    interfaces: []
  };
  SmHeader.prototype.component1 = function () {
    return this.title;
  };
  SmHeader.prototype.component2 = function () {
    return this.artist;
  };
  SmHeader.prototype.component3 = function () {
    return this.banner;
  };
  SmHeader.prototype.component4 = function () {
    return this.background;
  };
  SmHeader.prototype.component5 = function () {
    return this.cdTitle;
  };
  SmHeader.prototype.component6 = function () {
    return this.music;
  };
  SmHeader.prototype.component7 = function () {
    return this.sampleStart;
  };
  SmHeader.prototype.component8 = function () {
    return this.sampleLength;
  };
  SmHeader.prototype.component9 = function () {
    return this.displayBpm;
  };
  SmHeader.prototype.component10 = function () {
    return this.bpms;
  };
  SmHeader.prototype.component11 = function () {
    return this.stops;
  };
  SmHeader.prototype.copy_hgcgki$ = function (title, artist, banner, background, cdTitle, music, sampleStart, sampleLength, displayBpm, bpms, stops) {
    return new SmHeader(title === void 0 ? this.title : title, artist === void 0 ? this.artist : artist, banner === void 0 ? this.banner : banner, background === void 0 ? this.background : background, cdTitle === void 0 ? this.cdTitle : cdTitle, music === void 0 ? this.music : music, sampleStart === void 0 ? this.sampleStart : sampleStart, sampleLength === void 0 ? this.sampleLength : sampleLength, displayBpm === void 0 ? this.displayBpm : displayBpm, bpms === void 0 ? this.bpms : bpms, stops === void 0 ? this.stops : stops);
  };
  SmHeader.prototype.toString = function () {
    return 'SmHeader(title=' + Kotlin.toString(this.title) + (', artist=' + Kotlin.toString(this.artist)) + (', banner=' + Kotlin.toString(this.banner)) + (', background=' + Kotlin.toString(this.background)) + (', cdTitle=' + Kotlin.toString(this.cdTitle)) + (', music=' + Kotlin.toString(this.music)) + (', sampleStart=' + Kotlin.toString(this.sampleStart)) + (', sampleLength=' + Kotlin.toString(this.sampleLength)) + (', displayBpm=' + Kotlin.toString(this.displayBpm)) + (', bpms=' + Kotlin.toString(this.bpms)) + (', stops=' + Kotlin.toString(this.stops)) + ')';
  };
  SmHeader.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.artist) | 0;
    result = result * 31 + Kotlin.hashCode(this.banner) | 0;
    result = result * 31 + Kotlin.hashCode(this.background) | 0;
    result = result * 31 + Kotlin.hashCode(this.cdTitle) | 0;
    result = result * 31 + Kotlin.hashCode(this.music) | 0;
    result = result * 31 + Kotlin.hashCode(this.sampleStart) | 0;
    result = result * 31 + Kotlin.hashCode(this.sampleLength) | 0;
    result = result * 31 + Kotlin.hashCode(this.displayBpm) | 0;
    result = result * 31 + Kotlin.hashCode(this.bpms) | 0;
    result = result * 31 + Kotlin.hashCode(this.stops) | 0;
    return result;
  };
  SmHeader.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.title, other.title) && Kotlin.equals(this.artist, other.artist) && Kotlin.equals(this.banner, other.banner) && Kotlin.equals(this.background, other.background) && Kotlin.equals(this.cdTitle, other.cdTitle) && Kotlin.equals(this.music, other.music) && Kotlin.equals(this.sampleStart, other.sampleStart) && Kotlin.equals(this.sampleLength, other.sampleLength) && Kotlin.equals(this.displayBpm, other.displayBpm) && Kotlin.equals(this.bpms, other.bpms) && Kotlin.equals(this.stops, other.stops)))));
  };
  function SmNoteData(stepStyle, difficulty, meter, notes) {
    this.stepStyle = stepStyle;
    this.difficulty = difficulty;
    this.meter = meter;
    this.notes = notes;
  }
  SmNoteData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SmNoteData',
    interfaces: []
  };
  SmNoteData.prototype.component1 = function () {
    return this.stepStyle;
  };
  SmNoteData.prototype.component2 = function () {
    return this.difficulty;
  };
  SmNoteData.prototype.component3 = function () {
    return this.meter;
  };
  SmNoteData.prototype.component4 = function () {
    return this.notes;
  };
  SmNoteData.prototype.copy_w74nik$ = function (stepStyle, difficulty, meter, notes) {
    return new SmNoteData(stepStyle === void 0 ? this.stepStyle : stepStyle, difficulty === void 0 ? this.difficulty : difficulty, meter === void 0 ? this.meter : meter, notes === void 0 ? this.notes : notes);
  };
  SmNoteData.prototype.toString = function () {
    return 'SmNoteData(stepStyle=' + Kotlin.toString(this.stepStyle) + (', difficulty=' + Kotlin.toString(this.difficulty)) + (', meter=' + Kotlin.toString(this.meter)) + (', notes=' + Kotlin.toString(this.notes)) + ')';
  };
  SmNoteData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.stepStyle) | 0;
    result = result * 31 + Kotlin.hashCode(this.difficulty) | 0;
    result = result * 31 + Kotlin.hashCode(this.meter) | 0;
    result = result * 31 + Kotlin.hashCode(this.notes) | 0;
    return result;
  };
  SmNoteData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.stepStyle, other.stepStyle) && Kotlin.equals(this.difficulty, other.difficulty) && Kotlin.equals(this.meter, other.meter) && Kotlin.equals(this.notes, other.notes)))));
  };
  function SmModel(header, noteData) {
    this.header = header;
    this.noteData = noteData;
  }
  function SmModel$toFileContents$addFieldIfNonNull(closure$retVal) {
    return function (key, value) {
      if (value != null) {
        closure$retVal.append_gw00v9$('#' + key + ':' + toString(value) + ';' + '\n');
      }
    };
  }
  SmModel.prototype.toFileContents = function () {
    var retVal = new StringBuilder();
    var addFieldIfNonNull = SmModel$toFileContents$addFieldIfNonNull(retVal);
    retVal.append_gw00v9$('#TITLE:' + this.header.title + ';' + '\n');
    addFieldIfNonNull('ARTIST', this.header.artist);
    addFieldIfNonNull('BANNER', this.header.banner);
    addFieldIfNonNull('BACKGROUND', this.header.background);
    addFieldIfNonNull('CDTITLE', this.header.cdTitle);
    addFieldIfNonNull('MUSIC', this.header.music);
    addFieldIfNonNull('SAMPLESTART', this.header.sampleStart);
    addFieldIfNonNull('SAMPLELENGTH', this.header.sampleLength);
    addFieldIfNonNull('DISPLAYBPM', this.header.displayBpm);
    addFieldIfNonNull('BPMS', this.header.bpms);
    addFieldIfNonNull('STOPS', this.header.stops);
    var tmp$;
    tmp$ = this.noteData.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      retVal.append_gw00v9$('\n');
      retVal.append_gw00v9$('//---------------' + element.stepStyle + ' - ----------------' + '\n');
      retVal.append_gw00v9$('#NOTES:\n');
      retVal.append_gw00v9$('     ' + element.stepStyle + ':' + '\n');
      retVal.append_gw00v9$('     :\n');
      retVal.append_gw00v9$('     ' + element.difficulty + ':' + '\n');
      retVal.append_gw00v9$('     ' + element.meter + ':' + '\n');
      retVal.append_gw00v9$('     0,0,0,0,0:\n');
      retVal.append_gw00v9$(element.notes);
      retVal.append_gw00v9$(';\n');
    }
    return retVal.toString();
  };
  SmModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SmModel',
    interfaces: []
  };
  SmModel.prototype.component1 = function () {
    return this.header;
  };
  SmModel.prototype.component2 = function () {
    return this.noteData;
  };
  SmModel.prototype.copy_fny8hy$ = function (header, noteData) {
    return new SmModel(header === void 0 ? this.header : header, noteData === void 0 ? this.noteData : noteData);
  };
  SmModel.prototype.toString = function () {
    return 'SmModel(header=' + Kotlin.toString(this.header) + (', noteData=' + Kotlin.toString(this.noteData)) + ')';
  };
  SmModel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.header) | 0;
    result = result * 31 + Kotlin.hashCode(this.noteData) | 0;
    return result;
  };
  SmModel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.header, other.header) && Kotlin.equals(this.noteData, other.noteData)))));
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$;
  function guessSuffixFromNoteData(noteData) {
    var destination = ArrayList_init(collectionSizeOrDefault(noteData, 10));
    var tmp$;
    tmp$ = noteData.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(ensureNotNull(item.difficulty));
    }
    var destination_0 = LinkedHashMap_init();
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var key = element;
      var tmp$_0_0;
      var value = destination_0.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination_0.put_xwzc9p$(key, answer);
        tmp$_0_0 = answer;
      }
       else {
        tmp$_0_0 = value;
      }
      var list = tmp$_0_0;
      list.add_11rb$(element);
    }
    var destination_1 = LinkedHashMap_init_0(mapCapacity(destination_0.size));
    var tmp$_1;
    tmp$_1 = destination_0.entries.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      destination_1.put_xwzc9p$(element_0.key, element_0.value.size);
    }
    var difficultyVotes = destination_1;
    var maxVote = max(difficultyVotes.values);
    var $receiver = difficultyVotes.entries;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_2;
      tmp$_2 = $receiver.iterator();
      while (tmp$_2.hasNext()) {
        var element_1 = tmp$_2.next();
        if (element_1.value === maxVote) {
          firstOrNull$result = element_1;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return ensureNotNull(firstOrNull$result).key;
  }
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  function convert(sscContents) {
    var sscModel = Parsers_getInstance().parseSscModel_61zpoe$(sscContents);
    var $receiver = sscModel.noteData;
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = new Pair(element.bpms, element.stops);
      var tmp$_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination.put_xwzc9p$(key, answer);
        tmp$_0 = answer;
      }
       else {
        tmp$_0 = value;
      }
      var list = tmp$_0;
      list.add_11rb$(element);
    }
    var $receiver_0 = destination.values;
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      var tmp$_2 = destination_0.add_11rb$;
      var tmp$_3;
      var header = new SmHeader(toString(sscModel.header.title) + ' [' + guessSuffixFromNoteData(item) + ']', sscModel.header.artist, sscModel.header.banner, sscModel.header.background, sscModel.header.cdTitle, sscModel.header.music, sscModel.header.sampleStart, sscModel.header.sampleLength, sscModel.header.displayBpm, (tmp$_3 = first(item).bpms) != null ? tmp$_3 : sscModel.header.bpms, first(item).stops);
      var destination_1 = ArrayList_init(collectionSizeOrDefault(item, 10));
      var tmp$_4;
      tmp$_4 = item.iterator();
      while (tmp$_4.hasNext()) {
        var item_0 = tmp$_4.next();
        destination_1.add_11rb$(new SmNoteData(ensureNotNull(item_0.stepStyle), ensureNotNull(item_0.difficulty), ensureNotNull(item_0.meter), ensureNotNull(item_0.notes)));
      }
      tmp$_2.call(destination_0, new SmModel(header, destination_1));
    }
    var grouped = destination_0;
    var oldNameToNewName = LinkedHashMap_init();
    var newNameToOldName = LinkedHashMap_init();
    var tmp$_5;
    tmp$_5 = grouped.iterator();
    while (tmp$_5.hasNext()) {
      var element_0 = tmp$_5.next();
      var oldName = element_0.header.title;
      if (newNameToOldName.containsKey_11rb$(oldName)) {
        throw new NotImplementedError_init('An operation is not implemented: ' + ('Found duplicate name for ' + oldName));
      }
       else {
        newNameToOldName.put_xwzc9p$(oldName, oldName);
        oldNameToNewName.put_xwzc9p$(oldName, oldName);
      }
    }
    var destination_2 = ArrayList_init(collectionSizeOrDefault(grouped, 10));
    var tmp$_6;
    tmp$_6 = grouped.iterator();
    while (tmp$_6.hasNext()) {
      var item_1 = tmp$_6.next();
      destination_2.add_11rb$(item_1.copy_fny8hy$(item_1.header.copy_hgcgki$(ensureNotNull(oldNameToNewName.get_11rb$(item_1.header.title)))));
    }
    var smWithDistinctNames = destination_2;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(smWithDistinctNames, 10)), 16);
    var destination_3 = LinkedHashMap_init_0(capacity);
    var tmp$_7;
    tmp$_7 = smWithDistinctNames.iterator();
    while (tmp$_7.hasNext()) {
      var element_1 = tmp$_7.next();
      destination_3.put_xwzc9p$(element_1.header.title + '.sm', element_1);
    }
    var destination_4 = LinkedHashMap_init_0(mapCapacity(destination_3.size));
    var tmp$_8;
    tmp$_8 = destination_3.entries.iterator();
    while (tmp$_8.hasNext()) {
      var element_2 = tmp$_8.next();
      destination_4.put_xwzc9p$(element_2.key, element_2.value.toFileContents());
    }
    return destination_4;
  }
  function hookUpHtmlElements$lambda(closure$outputDiv, closure$sscInputTextArea) {
    return function (it) {
      console.log('Reacting to sscInput change');
      closure$outputDiv.innerHTML = '';
      var result = convert(closure$sscInputTextArea.value);
      var tmp$;
      tmp$ = result.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var closure$outputDiv_0 = closure$outputDiv;
        var tmp$_0;
        var fileName = document.createElement('h1');
        fileName.textContent = element.key;
        closure$outputDiv_0.appendChild(fileName);
        var fileContents = Kotlin.isType(tmp$_0 = document.createElement('textarea'), HTMLTextAreaElement) ? tmp$_0 : throwCCE();
        fileContents.classList.add('file-contents');
        fileContents.readOnly = true;
        fileContents.value = element.value;
        closure$outputDiv_0.appendChild(fileContents);
      }
      return null;
    };
  }
  function hookUpHtmlElements(sscInputTextArea, outputDiv) {
    sscInputTextArea.onchange = hookUpHtmlElements$lambda(outputDiv, sscInputTextArea);
  }
  Parsers$ParseResult.Success = Parsers$ParseResult$Success;
  Parsers$ParseResult.Failure = Parsers$ParseResult$Failure;
  Parsers.prototype.ParseResult = Parsers$ParseResult;
  Parsers.prototype.Parser = Parsers$Parser;
  Parsers.prototype.KeyValuePair = Parsers$KeyValuePair;
  Object.defineProperty(_, 'Parsers', {
    get: Parsers_getInstance
  });
  _.SscHeader = SscHeader;
  _.SscNoteData = SscNoteData;
  _.SscModel = SscModel;
  _.SmHeader = SmHeader;
  _.SmNoteData = SmNoteData;
  _.SmModel = SmModel;
  _.guessSuffixFromNoteData_k1mxaq$ = guessSuffixFromNoteData;
  _.convert_61zpoe$ = convert;
  _.hookUpHtmlElements = hookUpHtmlElements;
  Parsers$Parser$followedBy$ObjectLiteral.prototype.followedBy_6hn76v$ = Parsers$Parser.prototype.followedBy_6hn76v$;
  Parsers$Parser$followedBy$ObjectLiteral.prototype.map_r1ursk$ = Parsers$Parser.prototype.map_r1ursk$;
  Parsers$Parser$map$ObjectLiteral.prototype.followedBy_6hn76v$ = Parsers$Parser.prototype.followedBy_6hn76v$;
  Parsers$Parser$map$ObjectLiteral.prototype.map_r1ursk$ = Parsers$Parser.prototype.map_r1ursk$;
  Parsers$terminal$ObjectLiteral.prototype.followedBy_6hn76v$ = Parsers$Parser.prototype.followedBy_6hn76v$;
  Parsers$terminal$ObjectLiteral.prototype.map_r1ursk$ = Parsers$Parser.prototype.map_r1ursk$;
  Parsers$everythingUpUntil$ObjectLiteral.prototype.followedBy_6hn76v$ = Parsers$Parser.prototype.followedBy_6hn76v$;
  Parsers$everythingUpUntil$ObjectLiteral.prototype.map_r1ursk$ = Parsers$Parser.prototype.map_r1ursk$;
  Parsers$zeroOrMore$ObjectLiteral.prototype.followedBy_6hn76v$ = Parsers$Parser.prototype.followedBy_6hn76v$;
  Parsers$zeroOrMore$ObjectLiteral.prototype.map_r1ursk$ = Parsers$Parser.prototype.map_r1ursk$;
  Parsers$anyOf$ObjectLiteral.prototype.followedBy_6hn76v$ = Parsers$Parser.prototype.followedBy_6hn76v$;
  Parsers$anyOf$ObjectLiteral.prototype.map_r1ursk$ = Parsers$Parser.prototype.map_r1ursk$;
  Parsers$sscKeyValuePair2$ObjectLiteral.prototype.followedBy_6hn76v$ = Parsers$Parser.prototype.followedBy_6hn76v$;
  Parsers$sscKeyValuePair2$ObjectLiteral.prototype.map_r1ursk$ = Parsers$Parser.prototype.map_r1ursk$;
  Kotlin.defineModule('ssc-to-sm_main', _);
  return _;
}(typeof this['ssc-to-sm_main'] === 'undefined' ? {} : this['ssc-to-sm_main'], kotlin);
