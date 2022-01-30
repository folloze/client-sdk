import {
  CampaignElementsTypes,
  ImageBankCategory,
  ImageBankType,
  ImageGalleryTypes
} from "./chunks/chunk.FPDLHEHA.js";
import {
  require_axios
} from "./chunks/chunk.NG7TLSQO.js";
import {
  __commonJS,
  __decorateClass,
  __require,
  __spreadProps,
  __spreadValues,
  __toModule
} from "./chunks/chunk.Z3GS5MY4.js";

// node_modules/lodash/lodash.js
var require_lodash = __commonJS({
  "node_modules/lodash/lodash.js"(exports, module) {
    (function() {
      var undefined2;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e5) {
        }
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined2 : object[key];
        };
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined2 : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined2) {
            result = result === undefined2 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n5, iteratee) {
        var index = -1, result = Array(n5);
        while (++index < n5) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined2 : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = function runInContext2(context) {
        context = context == null ? root : _3.defaults(root.Object(), context, _3.pick(root, contextProps));
        var Array2 = context.Array, Date = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        var Buffer = moduleExports ? context.Buffer : undefined2, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
        var defineProperty = function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e5) {
          }
        }();
        var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date && Date.now !== root.Date.now && Date.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined2, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView = getNative(context, "DataView"), Map2 = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set2 = getNative(context, "Set"), WeakMap2 = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap2 && new WeakMap2();
        var realNames = {};
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap2);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
        function lodash(value) {
          if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = function() {
          function object() {
          }
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined2;
            return result2;
          };
        }();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined2;
        }
        lodash.templateSettings = {
          "escape": reEscape,
          "evaluate": reEvaluate,
          "interpolate": reInterpolate,
          "variable": "",
          "imports": {
            "_": lodash
          }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                if (type == LAZY_MAP_FLAG) {
                  value = computed;
                } else if (!computed) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined2 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined2;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined2 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined2;
        }
        function arraySampleSize(array, n5) {
          return shuffleSelf(copyArray(array), baseClamp(n5, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index < length) {
            result2[index] = skip ? undefined2 : get(object, paths[index]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined2) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined2) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined2) {
            return result2;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined2 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source[key], value = object[key];
            if (value === undefined2 && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return setTimeout2(function() {
            func.apply(undefined2, args);
          }, wait);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined2 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys);
        }
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction(object[key]);
          });
        }
        function baseGet(object, path) {
          path = castPath(path, object);
          var index = 0, length = path.length;
          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined2;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined2 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        function baseInvoke(object, path, args) {
          path = castPath(path, object);
          object = parent(object, path);
          var func = object == null ? object : object[toKey(last(path))];
          return func == null ? undefined2 : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined2 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return objValue === undefined2 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
              if (newValue === undefined2) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
          var isCommon = newValue === undefined2;
          if (isCommon) {
            var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n5) {
          var length = array.length;
          if (!length) {
            return;
          }
          n5 += n5 < 0 ? length : 0;
          return isIndex(n5, length) ? array[n5] : undefined2;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index, "value": value };
          });
          return baseSortBy(result2, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path) {
            return hasIn(object, path);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path = paths[index], value = baseGet(object, path);
            if (predicate(value, path)) {
              baseSet(result2, castPath(path, object), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string, n5) {
          var result2 = "";
          if (!string || n5 < 1 || n5 > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n5 % 2) {
              result2 += string;
            }
            n5 = nativeFloor(n5 / 2);
            if (n5) {
              string += string;
            }
          } while (n5);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n5) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n5, 0, array.length));
        }
        function baseSet(object, path, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path = castPath(path, object);
          var index = -1, length = path.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined2;
              if (newValue === undefined2) {
                newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty ? identity : function(func, string) {
          return defineProperty(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed);
                }
                result2.push(value);
              } else if (!includes2(seen, computed, comparator)) {
                if (seen !== result2) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object, path) {
          path = castPath(path, object);
          object = parent(object, path);
          return object == null || delete object[toKey(last(path))];
        }
        function baseUpdate(object, path, updater, customizer) {
          return baseSet(object, path, updater(baseGet(object, path)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined2;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined2 ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
            if (newValue === undefined2) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined2 : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined2, args, holders, undefined2, undefined2, arity - length);
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary2, arity - length);
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined2 && other === undefined2) {
              return defaultValue;
            }
            if (value !== undefined2) {
              result2 = value;
            }
            if (other !== undefined2) {
              if (result2 === undefined2) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined2 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined2;
            }
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined2, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set2(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined2;
          }
          ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined2 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined2;
          }
          var data = isBindKey ? undefined2 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined2, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined2 : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined2) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined2, flatten), func + "");
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result2 = lodash.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map2, key) {
          var data = map2.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object) {
          var result2 = keys(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined2;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined2;
            var unmasked = true;
          } catch (e5) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result2 = [];
          while (object) {
            arrayPush(result2, getSymbols(object));
            object = getPrototype(object);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax(start, end - size2);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);
          var index = -1, length = path.length, result2 = false;
          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path) {
          return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout2 = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined2, arguments);
          };
        }
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined2 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e5) {
            }
            try {
              return func + "";
            } catch (e5) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
        });
        function drop(array, n5, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n5 = guard || n5 === undefined2 ? 1 : toInteger(n5);
          return baseSlice(array, n5 < 0 ? 0 : n5, length);
        }
        function dropRight(array, n5, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n5 = guard || n5 === undefined2 ? 1 : toInteger(n5);
          n5 = length - n5;
          return baseSlice(array, 0, n5 < 0 ? 0 : n5);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined2;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined2;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
        });
        function join(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined2;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n5) {
          return array && array.length ? baseNth(array, toInteger(n5)) : undefined2;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined2 ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n5, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n5 = guard || n5 === undefined2 ? 1 : toInteger(n5);
          return baseSlice(array, 0, n5 < 0 ? 0 : n5);
        }
        function takeRight(array, n5, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n5 = guard || n5 === undefined2 ? 1 : toInteger(n5);
          n5 = length - n5;
          return baseSlice(array, n5 < 0 ? 0 : n5, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return array && array.length ? baseUniq(array, undefined2, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined2, group);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined2
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined2);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined2) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone2 = wrapperClone(parent2);
            clone2.__index__ = 0;
            clone2.__values__ = undefined2;
            if (result2) {
              previous.__wrapped__ = clone2;
            } else {
              result2 = clone2;
            }
            var previous = clone2;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined2
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path, args) {
          var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map(collection, iteratee2) {
          var func = isArray(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined2 : orders;
          if (!isArray(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n5, guard) {
          if (guard ? isIterateeCall(collection, n5, guard) : n5 === undefined2) {
            n5 = 1;
          } else {
            n5 = toInteger(n5);
          }
          var func = isArray(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n5);
        }
        function shuffle(collection) {
          var func = isArray(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n5, func) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n5 = toInteger(n5);
          return function() {
            if (--n5 < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n5, guard) {
          n5 = guard ? undefined2 : n5;
          n5 = func && n5 == null ? func.length : n5;
          return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n5);
        }
        function before(n5, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n5 = toInteger(n5);
          return function() {
            if (--n5 > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n5 <= 1) {
              func = undefined2;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined2;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout2(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout2(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined2;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined2;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined2) {
              clearTimeout(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined2;
          }
          function flush() {
            return timerId === undefined2 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined2) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout(timerId);
                timerId = setTimeout2(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined2) {
              timerId = setTimeout2(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start === undefined2 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray(value) ? value : [value];
        }
        function clone(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(function() {
          return arguments;
        }()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          var result2 = customizer ? customizer(value, other) : undefined2;
          return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite2(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN2(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined2;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign = createAssigner(function(object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at = flatRest(baseAt);
        function create(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object, sources) {
          object = Object2(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined2;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined2, customDefaultsMerge);
          return apply(mergeWith, undefined2, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path, defaultValue) {
          var result2 = object == null ? undefined2 : baseGet(object, path);
          return result2 === undefined2 ? defaultValue : result2;
        }
        function has(object, path) {
          return object != null && hasPath(object, path, baseHas);
        }
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys2(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path) {
            path = castPath(path, object);
            isDeep || (isDeep = path.length > 1);
            return path;
          });
          copyObject(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path) {
            return predicate(value, path[0]);
          });
        }
        function result(object, path, defaultValue) {
          path = castPath(path, object);
          var index = -1, length = path.length;
          if (!length) {
            length = 1;
            object = undefined2;
          }
          while (++index < length) {
            var value = object == null ? undefined2 : object[toKey(path[index])];
            if (value === undefined2) {
              index = length;
              value = defaultValue;
            }
            object = isFunction(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path, value) {
          return object == null ? object : baseSet(object, path, value);
        }
        function setWith(object, path, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseSet(object, path, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee2, accumulator) {
          var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object)) {
              accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
            return iteratee2(accumulator, value, index, object2);
          });
          return accumulator;
        }
        function unset(object, path) {
          return object == null ? true : baseUnset(object, path);
        }
        function update(object, path, updater) {
          return object == null ? object : baseUpdate(object, path, castFunction(updater));
        }
        function updateWith(object, path, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp(number, lower, upper) {
          if (upper === undefined2) {
            upper = lower;
            lower = undefined2;
          }
          if (upper !== undefined2) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined2) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined2) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined2;
          }
          if (floating === undefined2) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined2;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined2;
            }
          }
          if (lower === undefined2 && upper === undefined2) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined2) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string, n5, guard) {
          if (guard ? isIterateeCall(string, n5, guard) : n5 === undefined2) {
            n5 = 1;
          } else {
            n5 = toInteger(n5);
          }
          return baseRepeat(toString(string), n5);
        }
        function replace() {
          var args = arguments, string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase2 = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined2;
          }
          limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined2;
          }
          string = toString(string);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g");
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined2) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined2 : pattern;
          if (pattern === undefined2) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined2, args);
          } catch (e5) {
            return isError(e5) ? e5 : new Error2(e5);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path, srcValue) {
          return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path, args) {
          return function(object) {
            return baseInvoke(object, path, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path) {
            return baseInvoke(object, path, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n5) {
          n5 = toInteger(n5);
          return baseRest(function(args) {
            return baseNth(args, n5);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path) {
          return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
        }
        function propertyOf(object) {
          return function(path) {
            return object == null ? undefined2 : baseGet(object, path);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n5, iteratee2) {
          n5 = toInteger(n5);
          if (n5 < 1 || n5 > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n5, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n5 -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n5) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys2;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp;
        lodash.clone = clone;
        lodash.cloneDeep = cloneDeep;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite2;
        lodash.isFunction = isFunction;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN2;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt2;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext2;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase2;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), { "chain": false });
        lodash.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n5) {
            n5 = n5 === undefined2 ? 1 : nativeMax(toInteger(n5), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n5, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n5, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n5) {
            return this.reverse()[methodName](n5).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
          if (typeof path == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined2) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined2
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
          lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
      };
      var _3 = runInContext();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root._ = _3;
        define(function() {
          return _3;
        });
      } else if (freeModule) {
        (freeModule.exports = _3)._ = _3;
        freeExports._ = _3;
      } else {
        root._ = _3;
      }
    }).call(exports);
  }
});

// node_modules/object-hash/dist/object_hash.js
var require_object_hash = __commonJS({
  "node_modules/object-hash/dist/object_hash.js"(exports, module) {
    !function(e5) {
      var t3;
      typeof exports == "object" ? module.exports = e5() : typeof define == "function" && define.amd ? define(e5) : (typeof window != "undefined" ? t3 = window : typeof global != "undefined" ? t3 = global : typeof self != "undefined" && (t3 = self), t3.objectHash = e5());
    }(function() {
      return function o6(i5, u2, a3) {
        function s5(n5, e6) {
          if (!u2[n5]) {
            if (!i5[n5]) {
              var t3 = typeof __require == "function" && __require;
              if (!e6 && t3)
                return t3(n5, true);
              if (f2)
                return f2(n5, true);
              throw new Error("Cannot find module '" + n5 + "'");
            }
            var r4 = u2[n5] = { exports: {} };
            i5[n5][0].call(r4.exports, function(e7) {
              var t4 = i5[n5][1][e7];
              return s5(t4 || e7);
            }, r4, r4.exports, o6, i5, u2, a3);
          }
          return u2[n5].exports;
        }
        for (var f2 = typeof __require == "function" && __require, e5 = 0; e5 < a3.length; e5++)
          s5(a3[e5]);
        return s5;
      }({ 1: [function(w2, b2, m2) {
        (function(e5, t3, f2, n5, r4, o6, i5, u2, a3) {
          "use strict";
          var s5 = w2("crypto");
          function c2(e6, t4) {
            return function(e7, t5) {
              var n6;
              n6 = t5.algorithm !== "passthrough" ? s5.createHash(t5.algorithm) : new y2();
              n6.write === void 0 && (n6.write = n6.update, n6.end = n6.update);
              g2(t5, n6).dispatch(e7), n6.update || n6.end("");
              if (n6.digest)
                return n6.digest(t5.encoding === "buffer" ? void 0 : t5.encoding);
              var r5 = n6.read();
              return t5.encoding !== "buffer" ? r5.toString(t5.encoding) : r5;
            }(e6, t4 = h3(e6, t4));
          }
          (m2 = b2.exports = c2).sha1 = function(e6) {
            return c2(e6);
          }, m2.keys = function(e6) {
            return c2(e6, { excludeValues: true, algorithm: "sha1", encoding: "hex" });
          }, m2.MD5 = function(e6) {
            return c2(e6, { algorithm: "md5", encoding: "hex" });
          }, m2.keysMD5 = function(e6) {
            return c2(e6, { algorithm: "md5", encoding: "hex", excludeValues: true });
          };
          var l4 = s5.getHashes ? s5.getHashes().slice() : ["sha1", "md5"];
          l4.push("passthrough");
          var d2 = ["buffer", "hex", "binary", "base64"];
          function h3(e6, t4) {
            t4 = t4 || {};
            var n6 = {};
            if (n6.algorithm = t4.algorithm || "sha1", n6.encoding = t4.encoding || "hex", n6.excludeValues = !!t4.excludeValues, n6.algorithm = n6.algorithm.toLowerCase(), n6.encoding = n6.encoding.toLowerCase(), n6.ignoreUnknown = t4.ignoreUnknown === true, n6.respectType = t4.respectType !== false, n6.respectFunctionNames = t4.respectFunctionNames !== false, n6.respectFunctionProperties = t4.respectFunctionProperties !== false, n6.unorderedArrays = t4.unorderedArrays === true, n6.unorderedSets = t4.unorderedSets !== false, n6.unorderedObjects = t4.unorderedObjects !== false, n6.replacer = t4.replacer || void 0, n6.excludeKeys = t4.excludeKeys || void 0, e6 === void 0)
              throw new Error("Object argument required.");
            for (var r5 = 0; r5 < l4.length; ++r5)
              l4[r5].toLowerCase() === n6.algorithm.toLowerCase() && (n6.algorithm = l4[r5]);
            if (l4.indexOf(n6.algorithm) === -1)
              throw new Error('Algorithm "' + n6.algorithm + '"  not supported. supported values: ' + l4.join(", "));
            if (d2.indexOf(n6.encoding) === -1 && n6.algorithm !== "passthrough")
              throw new Error('Encoding "' + n6.encoding + '"  not supported. supported values: ' + d2.join(", "));
            return n6;
          }
          function p2(e6) {
            if (typeof e6 == "function") {
              return /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e6)) != null;
            }
          }
          function g2(u3, t4, a4) {
            a4 = a4 || [];
            function s6(e6) {
              return t4.update ? t4.update(e6, "utf8") : t4.write(e6, "utf8");
            }
            return { dispatch: function(e6) {
              return u3.replacer && (e6 = u3.replacer(e6)), this["_" + (e6 === null ? "null" : typeof e6)](e6);
            }, _object: function(t5) {
              var e6 = Object.prototype.toString.call(t5), n6 = /\[object (.*)\]/i.exec(e6);
              n6 = (n6 = n6 ? n6[1] : "unknown:[" + e6 + "]").toLowerCase();
              var r5;
              if (0 <= (r5 = a4.indexOf(t5)))
                return this.dispatch("[CIRCULAR:" + r5 + "]");
              if (a4.push(t5), f2 !== void 0 && f2.isBuffer && f2.isBuffer(t5))
                return s6("buffer:"), s6(t5);
              if (n6 === "object" || n6 === "function" || n6 === "asyncfunction") {
                var o7 = Object.keys(t5);
                u3.unorderedObjects && (o7 = o7.sort()), u3.respectType === false || p2(t5) || o7.splice(0, 0, "prototype", "__proto__", "constructor"), u3.excludeKeys && (o7 = o7.filter(function(e7) {
                  return !u3.excludeKeys(e7);
                })), s6("object:" + o7.length + ":");
                var i6 = this;
                return o7.forEach(function(e7) {
                  i6.dispatch(e7), s6(":"), u3.excludeValues || i6.dispatch(t5[e7]), s6(",");
                });
              }
              if (!this["_" + n6]) {
                if (u3.ignoreUnknown)
                  return s6("[" + n6 + "]");
                throw new Error('Unknown object type "' + n6 + '"');
              }
              this["_" + n6](t5);
            }, _array: function(e6, t5) {
              t5 = t5 !== void 0 ? t5 : u3.unorderedArrays !== false;
              var n6 = this;
              if (s6("array:" + e6.length + ":"), !t5 || e6.length <= 1)
                return e6.forEach(function(e7) {
                  return n6.dispatch(e7);
                });
              var r5 = [], o7 = e6.map(function(e7) {
                var t6 = new y2(), n7 = a4.slice();
                return g2(u3, t6, n7).dispatch(e7), r5 = r5.concat(n7.slice(a4.length)), t6.read().toString();
              });
              return a4 = a4.concat(r5), o7.sort(), this._array(o7, false);
            }, _date: function(e6) {
              return s6("date:" + e6.toJSON());
            }, _symbol: function(e6) {
              return s6("symbol:" + e6.toString());
            }, _error: function(e6) {
              return s6("error:" + e6.toString());
            }, _boolean: function(e6) {
              return s6("bool:" + e6.toString());
            }, _string: function(e6) {
              s6("string:" + e6.length + ":"), s6(e6.toString());
            }, _function: function(e6) {
              s6("fn:"), p2(e6) ? this.dispatch("[native]") : this.dispatch(e6.toString()), u3.respectFunctionNames !== false && this.dispatch("function-name:" + String(e6.name)), u3.respectFunctionProperties && this._object(e6);
            }, _number: function(e6) {
              return s6("number:" + e6.toString());
            }, _xml: function(e6) {
              return s6("xml:" + e6.toString());
            }, _null: function() {
              return s6("Null");
            }, _undefined: function() {
              return s6("Undefined");
            }, _regexp: function(e6) {
              return s6("regex:" + e6.toString());
            }, _uint8array: function(e6) {
              return s6("uint8array:"), this.dispatch(Array.prototype.slice.call(e6));
            }, _uint8clampedarray: function(e6) {
              return s6("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(e6));
            }, _int8array: function(e6) {
              return s6("uint8array:"), this.dispatch(Array.prototype.slice.call(e6));
            }, _uint16array: function(e6) {
              return s6("uint16array:"), this.dispatch(Array.prototype.slice.call(e6));
            }, _int16array: function(e6) {
              return s6("uint16array:"), this.dispatch(Array.prototype.slice.call(e6));
            }, _uint32array: function(e6) {
              return s6("uint32array:"), this.dispatch(Array.prototype.slice.call(e6));
            }, _int32array: function(e6) {
              return s6("uint32array:"), this.dispatch(Array.prototype.slice.call(e6));
            }, _float32array: function(e6) {
              return s6("float32array:"), this.dispatch(Array.prototype.slice.call(e6));
            }, _float64array: function(e6) {
              return s6("float64array:"), this.dispatch(Array.prototype.slice.call(e6));
            }, _arraybuffer: function(e6) {
              return s6("arraybuffer:"), this.dispatch(new Uint8Array(e6));
            }, _url: function(e6) {
              return s6("url:" + e6.toString());
            }, _map: function(e6) {
              s6("map:");
              var t5 = Array.from(e6);
              return this._array(t5, u3.unorderedSets !== false);
            }, _set: function(e6) {
              s6("set:");
              var t5 = Array.from(e6);
              return this._array(t5, u3.unorderedSets !== false);
            }, _file: function(e6) {
              return s6("file:"), this.dispatch([e6.name, e6.size, e6.type, e6.lastModfied]);
            }, _blob: function() {
              if (u3.ignoreUnknown)
                return s6("[blob]");
              throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n');
            }, _domwindow: function() {
              return s6("domwindow");
            }, _bigint: function(e6) {
              return s6("bigint:" + e6.toString());
            }, _process: function() {
              return s6("process");
            }, _timer: function() {
              return s6("timer");
            }, _pipe: function() {
              return s6("pipe");
            }, _tcp: function() {
              return s6("tcp");
            }, _udp: function() {
              return s6("udp");
            }, _tty: function() {
              return s6("tty");
            }, _statwatcher: function() {
              return s6("statwatcher");
            }, _securecontext: function() {
              return s6("securecontext");
            }, _connection: function() {
              return s6("connection");
            }, _zlib: function() {
              return s6("zlib");
            }, _context: function() {
              return s6("context");
            }, _nodescript: function() {
              return s6("nodescript");
            }, _httpparser: function() {
              return s6("httpparser");
            }, _dataview: function() {
              return s6("dataview");
            }, _signal: function() {
              return s6("signal");
            }, _fsevent: function() {
              return s6("fsevent");
            }, _tlswrap: function() {
              return s6("tlswrap");
            } };
          }
          function y2() {
            return { buf: "", write: function(e6) {
              this.buf += e6;
            }, end: function(e6) {
              this.buf += e6;
            }, read: function() {
              return this.buf;
            } };
          }
          m2.writeToStream = function(e6, t4, n6) {
            return n6 === void 0 && (n6 = t4, t4 = {}), g2(t4 = h3(e6, t4), n6).dispatch(e6);
          };
        }).call(this, w2("lYpoI2"), typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, w2("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_7eac155c.js", "/");
      }, { buffer: 3, crypto: 5, lYpoI2: 10 }], 2: [function(e5, t3, f2) {
        (function(e6, t4, n5, r4, o6, i5, u2, a3, s5) {
          !function(e7) {
            "use strict";
            var f3 = typeof Uint8Array != "undefined" ? Uint8Array : Array, n6 = "+".charCodeAt(0), r5 = "/".charCodeAt(0), o7 = "0".charCodeAt(0), i6 = "a".charCodeAt(0), u3 = "A".charCodeAt(0), a4 = "-".charCodeAt(0), s6 = "_".charCodeAt(0);
            function c2(e8) {
              var t5 = e8.charCodeAt(0);
              return t5 === n6 || t5 === a4 ? 62 : t5 === r5 || t5 === s6 ? 63 : t5 < o7 ? -1 : t5 < o7 + 10 ? t5 - o7 + 26 + 26 : t5 < u3 + 26 ? t5 - u3 : t5 < i6 + 26 ? t5 - i6 + 26 : void 0;
            }
            e7.toByteArray = function(e8) {
              var t5, n7;
              if (0 < e8.length % 4)
                throw new Error("Invalid string. Length must be a multiple of 4");
              var r6 = e8.length, o8 = e8.charAt(r6 - 2) === "=" ? 2 : e8.charAt(r6 - 1) === "=" ? 1 : 0, i7 = new f3(3 * e8.length / 4 - o8), u4 = 0 < o8 ? e8.length - 4 : e8.length, a5 = 0;
              function s7(e9) {
                i7[a5++] = e9;
              }
              for (t5 = 0; t5 < u4; t5 += 4, 0)
                s7((16711680 & (n7 = c2(e8.charAt(t5)) << 18 | c2(e8.charAt(t5 + 1)) << 12 | c2(e8.charAt(t5 + 2)) << 6 | c2(e8.charAt(t5 + 3)))) >> 16), s7((65280 & n7) >> 8), s7(255 & n7);
              return o8 == 2 ? s7(255 & (n7 = c2(e8.charAt(t5)) << 2 | c2(e8.charAt(t5 + 1)) >> 4)) : o8 == 1 && (s7((n7 = c2(e8.charAt(t5)) << 10 | c2(e8.charAt(t5 + 1)) << 4 | c2(e8.charAt(t5 + 2)) >> 2) >> 8 & 255), s7(255 & n7)), i7;
            }, e7.fromByteArray = function(e8) {
              var t5, n7, r6, o8, i7 = e8.length % 3, u4 = "";
              function a5(e9) {
                return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e9);
              }
              for (t5 = 0, r6 = e8.length - i7; t5 < r6; t5 += 3)
                n7 = (e8[t5] << 16) + (e8[t5 + 1] << 8) + e8[t5 + 2], u4 += a5((o8 = n7) >> 18 & 63) + a5(o8 >> 12 & 63) + a5(o8 >> 6 & 63) + a5(63 & o8);
              switch (i7) {
                case 1:
                  u4 += a5((n7 = e8[e8.length - 1]) >> 2), u4 += a5(n7 << 4 & 63), u4 += "==";
                  break;
                case 2:
                  u4 += a5((n7 = (e8[e8.length - 2] << 8) + e8[e8.length - 1]) >> 10), u4 += a5(n7 >> 4 & 63), u4 += a5(n7 << 2 & 63), u4 += "=";
              }
              return u4;
            };
          }(f2 === void 0 ? this.base64js = {} : f2);
        }).call(this, e5("lYpoI2"), typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, e5("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js", "/node_modules/gulp-browserify/node_modules/base64-js/lib");
      }, { buffer: 3, lYpoI2: 10 }], 3: [function(O, e5, H2) {
        (function(e6, t3, g2, n5, r4, o6, i5, u2, a3) {
          var s5 = O("base64-js"), f2 = O("ieee754");
          function g2(e7, t4, n6) {
            if (!(this instanceof g2))
              return new g2(e7, t4, n6);
            var r5, o7, i6, u3, a4, s6 = typeof e7;
            if (t4 === "base64" && s6 == "string")
              for (e7 = (r5 = e7).trim ? r5.trim() : r5.replace(/^\s+|\s+$/g, ""); e7.length % 4 != 0; )
                e7 += "=";
            if (s6 == "number")
              o7 = x2(e7);
            else if (s6 == "string")
              o7 = g2.byteLength(e7, t4);
            else {
              if (s6 != "object")
                throw new Error("First argument needs to be a number, array or string.");
              o7 = x2(e7.length);
            }
            if (g2._useTypedArrays ? i6 = g2._augment(new Uint8Array(o7)) : ((i6 = this).length = o7, i6._isBuffer = true), g2._useTypedArrays && typeof e7.byteLength == "number")
              i6._set(e7);
            else if (S3(a4 = e7) || g2.isBuffer(a4) || a4 && typeof a4 == "object" && typeof a4.length == "number")
              for (u3 = 0; u3 < o7; u3++)
                g2.isBuffer(e7) ? i6[u3] = e7.readUInt8(u3) : i6[u3] = e7[u3];
            else if (s6 == "string")
              i6.write(e7, 0, t4);
            else if (s6 == "number" && !g2._useTypedArrays && !n6)
              for (u3 = 0; u3 < o7; u3++)
                i6[u3] = 0;
            return i6;
          }
          function y2(e7, t4, n6, r5) {
            return g2._charsWritten = T2(function(e8) {
              for (var t5 = [], n7 = 0; n7 < e8.length; n7++)
                t5.push(255 & e8.charCodeAt(n7));
              return t5;
            }(t4), e7, n6, r5);
          }
          function w2(e7, t4, n6, r5) {
            return g2._charsWritten = T2(function(e8) {
              for (var t5, n7, r6, o7 = [], i6 = 0; i6 < e8.length; i6++)
                t5 = e8.charCodeAt(i6), n7 = t5 >> 8, r6 = t5 % 256, o7.push(r6), o7.push(n7);
              return o7;
            }(t4), e7, n6, r5);
          }
          function c2(e7, t4, n6) {
            var r5 = "";
            n6 = Math.min(e7.length, n6);
            for (var o7 = t4; o7 < n6; o7++)
              r5 += String.fromCharCode(e7[o7]);
            return r5;
          }
          function l4(e7, t4, n6, r5) {
            r5 || (D(typeof n6 == "boolean", "missing or invalid endian"), D(t4 != null, "missing offset"), D(t4 + 1 < e7.length, "Trying to read beyond buffer length"));
            var o7, i6 = e7.length;
            if (!(i6 <= t4))
              return n6 ? (o7 = e7[t4], t4 + 1 < i6 && (o7 |= e7[t4 + 1] << 8)) : (o7 = e7[t4] << 8, t4 + 1 < i6 && (o7 |= e7[t4 + 1])), o7;
          }
          function d2(e7, t4, n6, r5) {
            r5 || (D(typeof n6 == "boolean", "missing or invalid endian"), D(t4 != null, "missing offset"), D(t4 + 3 < e7.length, "Trying to read beyond buffer length"));
            var o7, i6 = e7.length;
            if (!(i6 <= t4))
              return n6 ? (t4 + 2 < i6 && (o7 = e7[t4 + 2] << 16), t4 + 1 < i6 && (o7 |= e7[t4 + 1] << 8), o7 |= e7[t4], t4 + 3 < i6 && (o7 += e7[t4 + 3] << 24 >>> 0)) : (t4 + 1 < i6 && (o7 = e7[t4 + 1] << 16), t4 + 2 < i6 && (o7 |= e7[t4 + 2] << 8), t4 + 3 < i6 && (o7 |= e7[t4 + 3]), o7 += e7[t4] << 24 >>> 0), o7;
          }
          function h3(e7, t4, n6, r5) {
            if (r5 || (D(typeof n6 == "boolean", "missing or invalid endian"), D(t4 != null, "missing offset"), D(t4 + 1 < e7.length, "Trying to read beyond buffer length")), !(e7.length <= t4)) {
              var o7 = l4(e7, t4, n6, true);
              return 32768 & o7 ? -1 * (65535 - o7 + 1) : o7;
            }
          }
          function p2(e7, t4, n6, r5) {
            if (r5 || (D(typeof n6 == "boolean", "missing or invalid endian"), D(t4 != null, "missing offset"), D(t4 + 3 < e7.length, "Trying to read beyond buffer length")), !(e7.length <= t4)) {
              var o7 = d2(e7, t4, n6, true);
              return 2147483648 & o7 ? -1 * (4294967295 - o7 + 1) : o7;
            }
          }
          function b2(e7, t4, n6, r5) {
            return r5 || (D(typeof n6 == "boolean", "missing or invalid endian"), D(t4 + 3 < e7.length, "Trying to read beyond buffer length")), f2.read(e7, t4, n6, 23, 4);
          }
          function m2(e7, t4, n6, r5) {
            return r5 || (D(typeof n6 == "boolean", "missing or invalid endian"), D(t4 + 7 < e7.length, "Trying to read beyond buffer length")), f2.read(e7, t4, n6, 52, 8);
          }
          function v2(e7, t4, n6, r5, o7) {
            o7 || (D(t4 != null, "missing value"), D(typeof r5 == "boolean", "missing or invalid endian"), D(n6 != null, "missing offset"), D(n6 + 1 < e7.length, "trying to write beyond buffer length"), N2(t4, 65535));
            var i6 = e7.length;
            if (!(i6 <= n6))
              for (var u3 = 0, a4 = Math.min(i6 - n6, 2); u3 < a4; u3++)
                e7[n6 + u3] = (t4 & 255 << 8 * (r5 ? u3 : 1 - u3)) >>> 8 * (r5 ? u3 : 1 - u3);
          }
          function _3(e7, t4, n6, r5, o7) {
            o7 || (D(t4 != null, "missing value"), D(typeof r5 == "boolean", "missing or invalid endian"), D(n6 != null, "missing offset"), D(n6 + 3 < e7.length, "trying to write beyond buffer length"), N2(t4, 4294967295));
            var i6 = e7.length;
            if (!(i6 <= n6))
              for (var u3 = 0, a4 = Math.min(i6 - n6, 4); u3 < a4; u3++)
                e7[n6 + u3] = t4 >>> 8 * (r5 ? u3 : 3 - u3) & 255;
          }
          function E2(e7, t4, n6, r5, o7) {
            o7 || (D(t4 != null, "missing value"), D(typeof r5 == "boolean", "missing or invalid endian"), D(n6 != null, "missing offset"), D(n6 + 1 < e7.length, "Trying to write beyond buffer length"), Y(t4, 32767, -32768)), e7.length <= n6 || v2(e7, 0 <= t4 ? t4 : 65535 + t4 + 1, n6, r5, o7);
          }
          function I2(e7, t4, n6, r5, o7) {
            o7 || (D(t4 != null, "missing value"), D(typeof r5 == "boolean", "missing or invalid endian"), D(n6 != null, "missing offset"), D(n6 + 3 < e7.length, "Trying to write beyond buffer length"), Y(t4, 2147483647, -2147483648)), e7.length <= n6 || _3(e7, 0 <= t4 ? t4 : 4294967295 + t4 + 1, n6, r5, o7);
          }
          function A2(e7, t4, n6, r5, o7) {
            o7 || (D(t4 != null, "missing value"), D(typeof r5 == "boolean", "missing or invalid endian"), D(n6 != null, "missing offset"), D(n6 + 3 < e7.length, "Trying to write beyond buffer length"), F(t4, 34028234663852886e22, -34028234663852886e22)), e7.length <= n6 || f2.write(e7, t4, n6, r5, 23, 4);
          }
          function B(e7, t4, n6, r5, o7) {
            o7 || (D(t4 != null, "missing value"), D(typeof r5 == "boolean", "missing or invalid endian"), D(n6 != null, "missing offset"), D(n6 + 7 < e7.length, "Trying to write beyond buffer length"), F(t4, 17976931348623157e292, -17976931348623157e292)), e7.length <= n6 || f2.write(e7, t4, n6, r5, 52, 8);
          }
          H2.Buffer = g2, H2.SlowBuffer = g2, H2.INSPECT_MAX_BYTES = 50, g2.poolSize = 8192, g2._useTypedArrays = function() {
            try {
              var e7 = new ArrayBuffer(0), t4 = new Uint8Array(e7);
              return t4.foo = function() {
                return 42;
              }, t4.foo() === 42 && typeof t4.subarray == "function";
            } catch (e8) {
              return false;
            }
          }(), g2.isEncoding = function(e7) {
            switch (String(e7).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "raw":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return true;
              default:
                return false;
            }
          }, g2.isBuffer = function(e7) {
            return !(e7 == null || !e7._isBuffer);
          }, g2.byteLength = function(e7, t4) {
            var n6;
            switch (e7 += "", t4 || "utf8") {
              case "hex":
                n6 = e7.length / 2;
                break;
              case "utf8":
              case "utf-8":
                n6 = C2(e7).length;
                break;
              case "ascii":
              case "binary":
              case "raw":
                n6 = e7.length;
                break;
              case "base64":
                n6 = k2(e7).length;
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                n6 = 2 * e7.length;
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return n6;
          }, g2.concat = function(e7, t4) {
            if (D(S3(e7), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), e7.length === 0)
              return new g2(0);
            if (e7.length === 1)
              return e7[0];
            if (typeof t4 != "number")
              for (o7 = t4 = 0; o7 < e7.length; o7++)
                t4 += e7[o7].length;
            for (var n6 = new g2(t4), r5 = 0, o7 = 0; o7 < e7.length; o7++) {
              var i6 = e7[o7];
              i6.copy(n6, r5), r5 += i6.length;
            }
            return n6;
          }, g2.prototype.write = function(e7, t4, n6, r5) {
            var o7;
            isFinite(t4) ? isFinite(n6) || (r5 = n6, n6 = void 0) : (o7 = r5, r5 = t4, t4 = n6, n6 = o7), t4 = Number(t4) || 0;
            var i6, u3, a4, s6, f3, c3, l5, d3, h4, p3 = this.length - t4;
            switch ((!n6 || p3 < (n6 = Number(n6))) && (n6 = p3), r5 = String(r5 || "utf8").toLowerCase()) {
              case "hex":
                i6 = function(e8, t5, n7, r6) {
                  n7 = Number(n7) || 0;
                  var o8 = e8.length - n7;
                  (!r6 || o8 < (r6 = Number(r6))) && (r6 = o8);
                  var i7 = t5.length;
                  D(i7 % 2 == 0, "Invalid hex string"), i7 / 2 < r6 && (r6 = i7 / 2);
                  for (var u4 = 0; u4 < r6; u4++) {
                    var a5 = parseInt(t5.substr(2 * u4, 2), 16);
                    D(!isNaN(a5), "Invalid hex string"), e8[n7 + u4] = a5;
                  }
                  return g2._charsWritten = 2 * u4, u4;
                }(this, e7, t4, n6);
                break;
              case "utf8":
              case "utf-8":
                c3 = this, l5 = e7, d3 = t4, h4 = n6, i6 = g2._charsWritten = T2(C2(l5), c3, d3, h4);
                break;
              case "ascii":
              case "binary":
                i6 = y2(this, e7, t4, n6);
                break;
              case "base64":
                u3 = this, a4 = e7, s6 = t4, f3 = n6, i6 = g2._charsWritten = T2(k2(a4), u3, s6, f3);
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                i6 = w2(this, e7, t4, n6);
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return i6;
          }, g2.prototype.toString = function(e7, t4, n6) {
            var r5, o7, i6, u3, a4 = this;
            if (e7 = String(e7 || "utf8").toLowerCase(), t4 = Number(t4) || 0, (n6 = n6 !== void 0 ? Number(n6) : n6 = a4.length) === t4)
              return "";
            switch (e7) {
              case "hex":
                r5 = function(e8, t5, n7) {
                  var r6 = e8.length;
                  (!t5 || t5 < 0) && (t5 = 0);
                  (!n7 || n7 < 0 || r6 < n7) && (n7 = r6);
                  for (var o8 = "", i7 = t5; i7 < n7; i7++)
                    o8 += j(e8[i7]);
                  return o8;
                }(a4, t4, n6);
                break;
              case "utf8":
              case "utf-8":
                r5 = function(e8, t5, n7) {
                  var r6 = "", o8 = "";
                  n7 = Math.min(e8.length, n7);
                  for (var i7 = t5; i7 < n7; i7++)
                    e8[i7] <= 127 ? (r6 += M2(o8) + String.fromCharCode(e8[i7]), o8 = "") : o8 += "%" + e8[i7].toString(16);
                  return r6 + M2(o8);
                }(a4, t4, n6);
                break;
              case "ascii":
              case "binary":
                r5 = c2(a4, t4, n6);
                break;
              case "base64":
                o7 = a4, u3 = n6, r5 = (i6 = t4) === 0 && u3 === o7.length ? s5.fromByteArray(o7) : s5.fromByteArray(o7.slice(i6, u3));
                break;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                r5 = function(e8, t5, n7) {
                  for (var r6 = e8.slice(t5, n7), o8 = "", i7 = 0; i7 < r6.length; i7 += 2)
                    o8 += String.fromCharCode(r6[i7] + 256 * r6[i7 + 1]);
                  return o8;
                }(a4, t4, n6);
                break;
              default:
                throw new Error("Unknown encoding");
            }
            return r5;
          }, g2.prototype.toJSON = function() {
            return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
          }, g2.prototype.copy = function(e7, t4, n6, r5) {
            if (n6 = n6 || 0, r5 || r5 === 0 || (r5 = this.length), t4 = t4 || 0, r5 !== n6 && e7.length !== 0 && this.length !== 0) {
              D(n6 <= r5, "sourceEnd < sourceStart"), D(0 <= t4 && t4 < e7.length, "targetStart out of bounds"), D(0 <= n6 && n6 < this.length, "sourceStart out of bounds"), D(0 <= r5 && r5 <= this.length, "sourceEnd out of bounds"), r5 > this.length && (r5 = this.length), e7.length - t4 < r5 - n6 && (r5 = e7.length - t4 + n6);
              var o7 = r5 - n6;
              if (o7 < 100 || !g2._useTypedArrays)
                for (var i6 = 0; i6 < o7; i6++)
                  e7[i6 + t4] = this[i6 + n6];
              else
                e7._set(this.subarray(n6, n6 + o7), t4);
            }
          }, g2.prototype.slice = function(e7, t4) {
            var n6 = this.length;
            if (e7 = U(e7, n6, 0), t4 = U(t4, n6, n6), g2._useTypedArrays)
              return g2._augment(this.subarray(e7, t4));
            for (var r5 = t4 - e7, o7 = new g2(r5, void 0, true), i6 = 0; i6 < r5; i6++)
              o7[i6] = this[i6 + e7];
            return o7;
          }, g2.prototype.get = function(e7) {
            return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e7);
          }, g2.prototype.set = function(e7, t4) {
            return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e7, t4);
          }, g2.prototype.readUInt8 = function(e7, t4) {
            if (t4 || (D(e7 != null, "missing offset"), D(e7 < this.length, "Trying to read beyond buffer length")), !(e7 >= this.length))
              return this[e7];
          }, g2.prototype.readUInt16LE = function(e7, t4) {
            return l4(this, e7, true, t4);
          }, g2.prototype.readUInt16BE = function(e7, t4) {
            return l4(this, e7, false, t4);
          }, g2.prototype.readUInt32LE = function(e7, t4) {
            return d2(this, e7, true, t4);
          }, g2.prototype.readUInt32BE = function(e7, t4) {
            return d2(this, e7, false, t4);
          }, g2.prototype.readInt8 = function(e7, t4) {
            if (t4 || (D(e7 != null, "missing offset"), D(e7 < this.length, "Trying to read beyond buffer length")), !(e7 >= this.length))
              return 128 & this[e7] ? -1 * (255 - this[e7] + 1) : this[e7];
          }, g2.prototype.readInt16LE = function(e7, t4) {
            return h3(this, e7, true, t4);
          }, g2.prototype.readInt16BE = function(e7, t4) {
            return h3(this, e7, false, t4);
          }, g2.prototype.readInt32LE = function(e7, t4) {
            return p2(this, e7, true, t4);
          }, g2.prototype.readInt32BE = function(e7, t4) {
            return p2(this, e7, false, t4);
          }, g2.prototype.readFloatLE = function(e7, t4) {
            return b2(this, e7, true, t4);
          }, g2.prototype.readFloatBE = function(e7, t4) {
            return b2(this, e7, false, t4);
          }, g2.prototype.readDoubleLE = function(e7, t4) {
            return m2(this, e7, true, t4);
          }, g2.prototype.readDoubleBE = function(e7, t4) {
            return m2(this, e7, false, t4);
          }, g2.prototype.writeUInt8 = function(e7, t4, n6) {
            n6 || (D(e7 != null, "missing value"), D(t4 != null, "missing offset"), D(t4 < this.length, "trying to write beyond buffer length"), N2(e7, 255)), t4 >= this.length || (this[t4] = e7);
          }, g2.prototype.writeUInt16LE = function(e7, t4, n6) {
            v2(this, e7, t4, true, n6);
          }, g2.prototype.writeUInt16BE = function(e7, t4, n6) {
            v2(this, e7, t4, false, n6);
          }, g2.prototype.writeUInt32LE = function(e7, t4, n6) {
            _3(this, e7, t4, true, n6);
          }, g2.prototype.writeUInt32BE = function(e7, t4, n6) {
            _3(this, e7, t4, false, n6);
          }, g2.prototype.writeInt8 = function(e7, t4, n6) {
            n6 || (D(e7 != null, "missing value"), D(t4 != null, "missing offset"), D(t4 < this.length, "Trying to write beyond buffer length"), Y(e7, 127, -128)), t4 >= this.length || (0 <= e7 ? this.writeUInt8(e7, t4, n6) : this.writeUInt8(255 + e7 + 1, t4, n6));
          }, g2.prototype.writeInt16LE = function(e7, t4, n6) {
            E2(this, e7, t4, true, n6);
          }, g2.prototype.writeInt16BE = function(e7, t4, n6) {
            E2(this, e7, t4, false, n6);
          }, g2.prototype.writeInt32LE = function(e7, t4, n6) {
            I2(this, e7, t4, true, n6);
          }, g2.prototype.writeInt32BE = function(e7, t4, n6) {
            I2(this, e7, t4, false, n6);
          }, g2.prototype.writeFloatLE = function(e7, t4, n6) {
            A2(this, e7, t4, true, n6);
          }, g2.prototype.writeFloatBE = function(e7, t4, n6) {
            A2(this, e7, t4, false, n6);
          }, g2.prototype.writeDoubleLE = function(e7, t4, n6) {
            B(this, e7, t4, true, n6);
          }, g2.prototype.writeDoubleBE = function(e7, t4, n6) {
            B(this, e7, t4, false, n6);
          }, g2.prototype.fill = function(e7, t4, n6) {
            if (e7 = e7 || 0, t4 = t4 || 0, n6 = n6 || this.length, typeof e7 == "string" && (e7 = e7.charCodeAt(0)), D(typeof e7 == "number" && !isNaN(e7), "value is not a number"), D(t4 <= n6, "end < start"), n6 !== t4 && this.length !== 0) {
              D(0 <= t4 && t4 < this.length, "start out of bounds"), D(0 <= n6 && n6 <= this.length, "end out of bounds");
              for (var r5 = t4; r5 < n6; r5++)
                this[r5] = e7;
            }
          }, g2.prototype.inspect = function() {
            for (var e7 = [], t4 = this.length, n6 = 0; n6 < t4; n6++)
              if (e7[n6] = j(this[n6]), n6 === H2.INSPECT_MAX_BYTES) {
                e7[n6 + 1] = "...";
                break;
              }
            return "<Buffer " + e7.join(" ") + ">";
          }, g2.prototype.toArrayBuffer = function() {
            if (typeof Uint8Array == "undefined")
              throw new Error("Buffer.toArrayBuffer not supported in this browser");
            if (g2._useTypedArrays)
              return new g2(this).buffer;
            for (var e7 = new Uint8Array(this.length), t4 = 0, n6 = e7.length; t4 < n6; t4 += 1)
              e7[t4] = this[t4];
            return e7.buffer;
          };
          var L2 = g2.prototype;
          function U(e7, t4, n6) {
            return typeof e7 != "number" ? n6 : t4 <= (e7 = ~~e7) ? t4 : 0 <= e7 || 0 <= (e7 += t4) ? e7 : 0;
          }
          function x2(e7) {
            return (e7 = ~~Math.ceil(+e7)) < 0 ? 0 : e7;
          }
          function S3(e7) {
            return (Array.isArray || function(e8) {
              return Object.prototype.toString.call(e8) === "[object Array]";
            })(e7);
          }
          function j(e7) {
            return e7 < 16 ? "0" + e7.toString(16) : e7.toString(16);
          }
          function C2(e7) {
            for (var t4 = [], n6 = 0; n6 < e7.length; n6++) {
              var r5 = e7.charCodeAt(n6);
              if (r5 <= 127)
                t4.push(e7.charCodeAt(n6));
              else {
                var o7 = n6;
                55296 <= r5 && r5 <= 57343 && n6++;
                for (var i6 = encodeURIComponent(e7.slice(o7, n6 + 1)).substr(1).split("%"), u3 = 0; u3 < i6.length; u3++)
                  t4.push(parseInt(i6[u3], 16));
              }
            }
            return t4;
          }
          function k2(e7) {
            return s5.toByteArray(e7);
          }
          function T2(e7, t4, n6, r5) {
            for (var o7 = 0; o7 < r5 && !(o7 + n6 >= t4.length || o7 >= e7.length); o7++)
              t4[o7 + n6] = e7[o7];
            return o7;
          }
          function M2(e7) {
            try {
              return decodeURIComponent(e7);
            } catch (e8) {
              return String.fromCharCode(65533);
            }
          }
          function N2(e7, t4) {
            D(typeof e7 == "number", "cannot write a non-number as a number"), D(0 <= e7, "specified a negative value for writing an unsigned value"), D(e7 <= t4, "value is larger than maximum value for type"), D(Math.floor(e7) === e7, "value has a fractional component");
          }
          function Y(e7, t4, n6) {
            D(typeof e7 == "number", "cannot write a non-number as a number"), D(e7 <= t4, "value larger than maximum allowed value"), D(n6 <= e7, "value smaller than minimum allowed value"), D(Math.floor(e7) === e7, "value has a fractional component");
          }
          function F(e7, t4, n6) {
            D(typeof e7 == "number", "cannot write a non-number as a number"), D(e7 <= t4, "value larger than maximum allowed value"), D(n6 <= e7, "value smaller than minimum allowed value");
          }
          function D(e7, t4) {
            if (!e7)
              throw new Error(t4 || "Failed assertion");
          }
          g2._augment = function(e7) {
            return e7._isBuffer = true, e7._get = e7.get, e7._set = e7.set, e7.get = L2.get, e7.set = L2.set, e7.write = L2.write, e7.toString = L2.toString, e7.toLocaleString = L2.toString, e7.toJSON = L2.toJSON, e7.copy = L2.copy, e7.slice = L2.slice, e7.readUInt8 = L2.readUInt8, e7.readUInt16LE = L2.readUInt16LE, e7.readUInt16BE = L2.readUInt16BE, e7.readUInt32LE = L2.readUInt32LE, e7.readUInt32BE = L2.readUInt32BE, e7.readInt8 = L2.readInt8, e7.readInt16LE = L2.readInt16LE, e7.readInt16BE = L2.readInt16BE, e7.readInt32LE = L2.readInt32LE, e7.readInt32BE = L2.readInt32BE, e7.readFloatLE = L2.readFloatLE, e7.readFloatBE = L2.readFloatBE, e7.readDoubleLE = L2.readDoubleLE, e7.readDoubleBE = L2.readDoubleBE, e7.writeUInt8 = L2.writeUInt8, e7.writeUInt16LE = L2.writeUInt16LE, e7.writeUInt16BE = L2.writeUInt16BE, e7.writeUInt32LE = L2.writeUInt32LE, e7.writeUInt32BE = L2.writeUInt32BE, e7.writeInt8 = L2.writeInt8, e7.writeInt16LE = L2.writeInt16LE, e7.writeInt16BE = L2.writeInt16BE, e7.writeInt32LE = L2.writeInt32LE, e7.writeInt32BE = L2.writeInt32BE, e7.writeFloatLE = L2.writeFloatLE, e7.writeFloatBE = L2.writeFloatBE, e7.writeDoubleLE = L2.writeDoubleLE, e7.writeDoubleBE = L2.writeDoubleBE, e7.fill = L2.fill, e7.inspect = L2.inspect, e7.toArrayBuffer = L2.toArrayBuffer, e7;
          };
        }).call(this, O("lYpoI2"), typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, O("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer");
      }, { "base64-js": 2, buffer: 3, ieee754: 11, lYpoI2: 10 }], 4: [function(l4, d2, e5) {
        (function(e6, t3, u2, n5, r4, o6, i5, a3, s5) {
          var u2 = l4("buffer").Buffer, f2 = 4, c2 = new u2(f2);
          c2.fill(0);
          d2.exports = { hash: function(e7, t4, n6, r5) {
            return u2.isBuffer(e7) || (e7 = new u2(e7)), function(e8, t5, n7) {
              for (var r6 = new u2(t5), o7 = n7 ? r6.writeInt32BE : r6.writeInt32LE, i6 = 0; i6 < e8.length; i6++)
                o7.call(r6, e8[i6], 4 * i6, true);
              return r6;
            }(t4(function(e8, t5) {
              var n7;
              e8.length % f2 != 0 && (n7 = e8.length + (f2 - e8.length % f2), e8 = u2.concat([e8, c2], n7));
              for (var r6 = [], o7 = t5 ? e8.readInt32BE : e8.readInt32LE, i6 = 0; i6 < e8.length; i6 += f2)
                r6.push(o7.call(e8, i6));
              return r6;
            }(e7, r5), 8 * e7.length), n6, r5);
          } };
        }).call(this, l4("lYpoI2"), typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, l4("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { buffer: 3, lYpoI2: 10 }], 5: [function(w2, e5, b2) {
        (function(e6, t3, a3, n5, r4, o6, i5, u2, s5) {
          var a3 = w2("buffer").Buffer, f2 = w2("./sha"), c2 = w2("./sha256"), l4 = w2("./rng"), d2 = { sha1: f2, sha256: c2, md5: w2("./md5") }, h3 = 64, p2 = new a3(h3);
          function g2(e7, r5) {
            var o7 = d2[e7 = e7 || "sha1"], i6 = [];
            return o7 || y2("algorithm:", e7, "is not yet supported"), { update: function(e8) {
              return a3.isBuffer(e8) || (e8 = new a3(e8)), i6.push(e8), e8.length, this;
            }, digest: function(e8) {
              var t4 = a3.concat(i6), n6 = r5 ? function(e9, t5, n7) {
                a3.isBuffer(t5) || (t5 = new a3(t5)), a3.isBuffer(n7) || (n7 = new a3(n7)), t5.length > h3 ? t5 = e9(t5) : t5.length < h3 && (t5 = a3.concat([t5, p2], h3));
                for (var r6 = new a3(h3), o8 = new a3(h3), i7 = 0; i7 < h3; i7++)
                  r6[i7] = 54 ^ t5[i7], o8[i7] = 92 ^ t5[i7];
                var u3 = e9(a3.concat([r6, n7]));
                return e9(a3.concat([o8, u3]));
              }(o7, r5, t4) : o7(t4);
              return i6 = null, e8 ? n6.toString(e8) : n6;
            } };
          }
          function y2() {
            var e7 = [].slice.call(arguments).join(" ");
            throw new Error([e7, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join("\n"));
          }
          p2.fill(0), b2.createHash = function(e7) {
            return g2(e7);
          }, b2.createHmac = g2, b2.randomBytes = function(e7, t4) {
            if (!t4 || !t4.call)
              return new a3(l4(e7));
            try {
              t4.call(this, void 0, new a3(l4(e7)));
            } catch (e8) {
              t4(e8);
            }
          }, function(e7, t4) {
            for (var n6 in e7)
              t4(e7[n6], n6);
          }(["createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv", "createSign", "createVerify", "createDiffieHellman", "pbkdf2"], function(e7) {
            b2[e7] = function() {
              y2("sorry,", e7, "is not implemented yet");
            };
          });
        }).call(this, w2("lYpoI2"), typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, w2("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./md5": 6, "./rng": 7, "./sha": 8, "./sha256": 9, buffer: 3, lYpoI2: 10 }], 6: [function(w2, b2, e5) {
        (function(e6, t3, n5, r4, o6, i5, u2, a3, s5) {
          var f2 = w2("./helpers");
          function c2(e7, t4) {
            e7[t4 >> 5] |= 128 << t4 % 32, e7[14 + (t4 + 64 >>> 9 << 4)] = t4;
            for (var n6 = 1732584193, r5 = -271733879, o7 = -1732584194, i6 = 271733878, u3 = 0; u3 < e7.length; u3 += 16) {
              var a4 = n6, s6 = r5, f3 = o7, c3 = i6, n6 = d2(n6, r5, o7, i6, e7[u3 + 0], 7, -680876936), i6 = d2(i6, n6, r5, o7, e7[u3 + 1], 12, -389564586), o7 = d2(o7, i6, n6, r5, e7[u3 + 2], 17, 606105819), r5 = d2(r5, o7, i6, n6, e7[u3 + 3], 22, -1044525330);
              n6 = d2(n6, r5, o7, i6, e7[u3 + 4], 7, -176418897), i6 = d2(i6, n6, r5, o7, e7[u3 + 5], 12, 1200080426), o7 = d2(o7, i6, n6, r5, e7[u3 + 6], 17, -1473231341), r5 = d2(r5, o7, i6, n6, e7[u3 + 7], 22, -45705983), n6 = d2(n6, r5, o7, i6, e7[u3 + 8], 7, 1770035416), i6 = d2(i6, n6, r5, o7, e7[u3 + 9], 12, -1958414417), o7 = d2(o7, i6, n6, r5, e7[u3 + 10], 17, -42063), r5 = d2(r5, o7, i6, n6, e7[u3 + 11], 22, -1990404162), n6 = d2(n6, r5, o7, i6, e7[u3 + 12], 7, 1804603682), i6 = d2(i6, n6, r5, o7, e7[u3 + 13], 12, -40341101), o7 = d2(o7, i6, n6, r5, e7[u3 + 14], 17, -1502002290), n6 = h3(n6, r5 = d2(r5, o7, i6, n6, e7[u3 + 15], 22, 1236535329), o7, i6, e7[u3 + 1], 5, -165796510), i6 = h3(i6, n6, r5, o7, e7[u3 + 6], 9, -1069501632), o7 = h3(o7, i6, n6, r5, e7[u3 + 11], 14, 643717713), r5 = h3(r5, o7, i6, n6, e7[u3 + 0], 20, -373897302), n6 = h3(n6, r5, o7, i6, e7[u3 + 5], 5, -701558691), i6 = h3(i6, n6, r5, o7, e7[u3 + 10], 9, 38016083), o7 = h3(o7, i6, n6, r5, e7[u3 + 15], 14, -660478335), r5 = h3(r5, o7, i6, n6, e7[u3 + 4], 20, -405537848), n6 = h3(n6, r5, o7, i6, e7[u3 + 9], 5, 568446438), i6 = h3(i6, n6, r5, o7, e7[u3 + 14], 9, -1019803690), o7 = h3(o7, i6, n6, r5, e7[u3 + 3], 14, -187363961), r5 = h3(r5, o7, i6, n6, e7[u3 + 8], 20, 1163531501), n6 = h3(n6, r5, o7, i6, e7[u3 + 13], 5, -1444681467), i6 = h3(i6, n6, r5, o7, e7[u3 + 2], 9, -51403784), o7 = h3(o7, i6, n6, r5, e7[u3 + 7], 14, 1735328473), n6 = p2(n6, r5 = h3(r5, o7, i6, n6, e7[u3 + 12], 20, -1926607734), o7, i6, e7[u3 + 5], 4, -378558), i6 = p2(i6, n6, r5, o7, e7[u3 + 8], 11, -2022574463), o7 = p2(o7, i6, n6, r5, e7[u3 + 11], 16, 1839030562), r5 = p2(r5, o7, i6, n6, e7[u3 + 14], 23, -35309556), n6 = p2(n6, r5, o7, i6, e7[u3 + 1], 4, -1530992060), i6 = p2(i6, n6, r5, o7, e7[u3 + 4], 11, 1272893353), o7 = p2(o7, i6, n6, r5, e7[u3 + 7], 16, -155497632), r5 = p2(r5, o7, i6, n6, e7[u3 + 10], 23, -1094730640), n6 = p2(n6, r5, o7, i6, e7[u3 + 13], 4, 681279174), i6 = p2(i6, n6, r5, o7, e7[u3 + 0], 11, -358537222), o7 = p2(o7, i6, n6, r5, e7[u3 + 3], 16, -722521979), r5 = p2(r5, o7, i6, n6, e7[u3 + 6], 23, 76029189), n6 = p2(n6, r5, o7, i6, e7[u3 + 9], 4, -640364487), i6 = p2(i6, n6, r5, o7, e7[u3 + 12], 11, -421815835), o7 = p2(o7, i6, n6, r5, e7[u3 + 15], 16, 530742520), n6 = g2(n6, r5 = p2(r5, o7, i6, n6, e7[u3 + 2], 23, -995338651), o7, i6, e7[u3 + 0], 6, -198630844), i6 = g2(i6, n6, r5, o7, e7[u3 + 7], 10, 1126891415), o7 = g2(o7, i6, n6, r5, e7[u3 + 14], 15, -1416354905), r5 = g2(r5, o7, i6, n6, e7[u3 + 5], 21, -57434055), n6 = g2(n6, r5, o7, i6, e7[u3 + 12], 6, 1700485571), i6 = g2(i6, n6, r5, o7, e7[u3 + 3], 10, -1894986606), o7 = g2(o7, i6, n6, r5, e7[u3 + 10], 15, -1051523), r5 = g2(r5, o7, i6, n6, e7[u3 + 1], 21, -2054922799), n6 = g2(n6, r5, o7, i6, e7[u3 + 8], 6, 1873313359), i6 = g2(i6, n6, r5, o7, e7[u3 + 15], 10, -30611744), o7 = g2(o7, i6, n6, r5, e7[u3 + 6], 15, -1560198380), r5 = g2(r5, o7, i6, n6, e7[u3 + 13], 21, 1309151649), n6 = g2(n6, r5, o7, i6, e7[u3 + 4], 6, -145523070), i6 = g2(i6, n6, r5, o7, e7[u3 + 11], 10, -1120210379), o7 = g2(o7, i6, n6, r5, e7[u3 + 2], 15, 718787259), r5 = g2(r5, o7, i6, n6, e7[u3 + 9], 21, -343485551), n6 = y2(n6, a4), r5 = y2(r5, s6), o7 = y2(o7, f3), i6 = y2(i6, c3);
            }
            return Array(n6, r5, o7, i6);
          }
          function l4(e7, t4, n6, r5, o7, i6) {
            return y2((u3 = y2(y2(t4, e7), y2(r5, i6))) << (a4 = o7) | u3 >>> 32 - a4, n6);
            var u3, a4;
          }
          function d2(e7, t4, n6, r5, o7, i6, u3) {
            return l4(t4 & n6 | ~t4 & r5, e7, t4, o7, i6, u3);
          }
          function h3(e7, t4, n6, r5, o7, i6, u3) {
            return l4(t4 & r5 | n6 & ~r5, e7, t4, o7, i6, u3);
          }
          function p2(e7, t4, n6, r5, o7, i6, u3) {
            return l4(t4 ^ n6 ^ r5, e7, t4, o7, i6, u3);
          }
          function g2(e7, t4, n6, r5, o7, i6, u3) {
            return l4(n6 ^ (t4 | ~r5), e7, t4, o7, i6, u3);
          }
          function y2(e7, t4) {
            var n6 = (65535 & e7) + (65535 & t4);
            return (e7 >> 16) + (t4 >> 16) + (n6 >> 16) << 16 | 65535 & n6;
          }
          b2.exports = function(e7) {
            return f2.hash(e7, c2, 16);
          };
        }).call(this, w2("lYpoI2"), typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, w2("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 10 }], 7: [function(e5, l4, t3) {
        (function(e6, t4, n5, r4, o6, i5, u2, a3, s5) {
          var f2, c2;
          c2 = function(e7) {
            for (var t5, n6 = new Array(e7), r5 = 0; r5 < e7; r5++)
              (3 & r5) == 0 && (t5 = 4294967296 * Math.random()), n6[r5] = t5 >>> ((3 & r5) << 3) & 255;
            return n6;
          }, l4.exports = f2 || c2;
        }).call(this, e5("lYpoI2"), typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, e5("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { buffer: 3, lYpoI2: 10 }], 8: [function(l4, d2, e5) {
        (function(e6, t3, n5, r4, o6, i5, u2, a3, s5) {
          var f2 = l4("./helpers");
          function c2(e7, t4) {
            e7[t4 >> 5] |= 128 << 24 - t4 % 32, e7[15 + (t4 + 64 >> 9 << 4)] = t4;
            for (var n6, r5, o7, i6, u3, a4 = Array(80), s6 = 1732584193, f3 = -271733879, c3 = -1732584194, l5 = 271733878, d3 = -1009589776, h3 = 0; h3 < e7.length; h3 += 16) {
              for (var p2 = s6, g2 = f3, y2 = c3, w2 = l5, b2 = d3, m2 = 0; m2 < 80; m2++) {
                a4[m2] = m2 < 16 ? e7[h3 + m2] : E2(a4[m2 - 3] ^ a4[m2 - 8] ^ a4[m2 - 14] ^ a4[m2 - 16], 1);
                var v2 = _3(_3(E2(s6, 5), (o7 = f3, i6 = c3, u3 = l5, (r5 = m2) < 20 ? o7 & i6 | ~o7 & u3 : !(r5 < 40) && r5 < 60 ? o7 & i6 | o7 & u3 | i6 & u3 : o7 ^ i6 ^ u3)), _3(_3(d3, a4[m2]), (n6 = m2) < 20 ? 1518500249 : n6 < 40 ? 1859775393 : n6 < 60 ? -1894007588 : -899497514)), d3 = l5, l5 = c3, c3 = E2(f3, 30), f3 = s6, s6 = v2;
              }
              s6 = _3(s6, p2), f3 = _3(f3, g2), c3 = _3(c3, y2), l5 = _3(l5, w2), d3 = _3(d3, b2);
            }
            return Array(s6, f3, c3, l5, d3);
          }
          function _3(e7, t4) {
            var n6 = (65535 & e7) + (65535 & t4);
            return (e7 >> 16) + (t4 >> 16) + (n6 >> 16) << 16 | 65535 & n6;
          }
          function E2(e7, t4) {
            return e7 << t4 | e7 >>> 32 - t4;
          }
          d2.exports = function(e7) {
            return f2.hash(e7, c2, 20, true);
          };
        }).call(this, l4("lYpoI2"), typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, l4("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 10 }], 9: [function(l4, d2, e5) {
        (function(e6, t3, n5, r4, o6, i5, u2, a3, s5) {
          function B(e7, t4) {
            var n6 = (65535 & e7) + (65535 & t4);
            return (e7 >> 16) + (t4 >> 16) + (n6 >> 16) << 16 | 65535 & n6;
          }
          function L2(e7, t4) {
            return e7 >>> t4 | e7 << 32 - t4;
          }
          function f2(e7, t4) {
            var n6, r5, o7, i6, u3, a4, s6, f3, c3, l5, d3 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298), h3 = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225), p2 = new Array(64);
            e7[t4 >> 5] |= 128 << 24 - t4 % 32, e7[15 + (t4 + 64 >> 9 << 4)] = t4;
            for (var g2, y2, w2, b2, m2, v2, _3, E2, I2 = 0; I2 < e7.length; I2 += 16) {
              n6 = h3[0], r5 = h3[1], o7 = h3[2], i6 = h3[3], u3 = h3[4], a4 = h3[5], s6 = h3[6], f3 = h3[7];
              for (var A2 = 0; A2 < 64; A2++)
                p2[A2] = A2 < 16 ? e7[A2 + I2] : B(B(B((E2 = p2[A2 - 2], L2(E2, 17) ^ L2(E2, 19) ^ E2 >>> 10), p2[A2 - 7]), (_3 = p2[A2 - 15], L2(_3, 7) ^ L2(_3, 18) ^ _3 >>> 3)), p2[A2 - 16]), c3 = B(B(B(B(f3, L2(v2 = u3, 6) ^ L2(v2, 11) ^ L2(v2, 25)), (m2 = u3) & a4 ^ ~m2 & s6), d3[A2]), p2[A2]), l5 = B(L2(b2 = n6, 2) ^ L2(b2, 13) ^ L2(b2, 22), (g2 = n6) & (y2 = r5) ^ g2 & (w2 = o7) ^ y2 & w2), f3 = s6, s6 = a4, a4 = u3, u3 = B(i6, c3), i6 = o7, o7 = r5, r5 = n6, n6 = B(c3, l5);
              h3[0] = B(n6, h3[0]), h3[1] = B(r5, h3[1]), h3[2] = B(o7, h3[2]), h3[3] = B(i6, h3[3]), h3[4] = B(u3, h3[4]), h3[5] = B(a4, h3[5]), h3[6] = B(s6, h3[6]), h3[7] = B(f3, h3[7]);
            }
            return h3;
          }
          var c2 = l4("./helpers");
          d2.exports = function(e7) {
            return c2.hash(e7, f2, 32, true);
          };
        }).call(this, l4("lYpoI2"), typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, l4("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
      }, { "./helpers": 4, buffer: 3, lYpoI2: 10 }], 10: [function(e5, c2, t3) {
        (function(e6, t4, n5, r4, o6, i5, u2, a3, s5) {
          function f2() {
          }
          (e6 = c2.exports = {}).nextTick = function() {
            var e7 = typeof window != "undefined" && window.setImmediate, t5 = typeof window != "undefined" && window.postMessage && window.addEventListener;
            if (e7)
              return function(e8) {
                return window.setImmediate(e8);
              };
            if (t5) {
              var n6 = [];
              return window.addEventListener("message", function(e8) {
                var t6 = e8.source;
                t6 !== window && t6 !== null || e8.data !== "process-tick" || (e8.stopPropagation(), 0 < n6.length && n6.shift()());
              }, true), function(e8) {
                n6.push(e8), window.postMessage("process-tick", "*");
              };
            }
            return function(e8) {
              setTimeout(e8, 0);
            };
          }(), e6.title = "browser", e6.browser = true, e6.env = {}, e6.argv = [], e6.on = f2, e6.addListener = f2, e6.once = f2, e6.off = f2, e6.removeListener = f2, e6.removeAllListeners = f2, e6.emit = f2, e6.binding = function(e7) {
            throw new Error("process.binding is not supported");
          }, e6.cwd = function() {
            return "/";
          }, e6.chdir = function(e7) {
            throw new Error("process.chdir is not supported");
          };
        }).call(this, e5("lYpoI2"), typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, e5("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process");
      }, { buffer: 3, lYpoI2: 10 }], 11: [function(e5, t3, f2) {
        (function(e6, t4, n5, r4, o6, i5, u2, a3, s5) {
          f2.read = function(e7, t5, n6, r5, o7) {
            var i6, u3, a4 = 8 * o7 - r5 - 1, s6 = (1 << a4) - 1, f3 = s6 >> 1, c2 = -7, l4 = n6 ? o7 - 1 : 0, d2 = n6 ? -1 : 1, h3 = e7[t5 + l4];
            for (l4 += d2, i6 = h3 & (1 << -c2) - 1, h3 >>= -c2, c2 += a4; 0 < c2; i6 = 256 * i6 + e7[t5 + l4], l4 += d2, c2 -= 8)
              ;
            for (u3 = i6 & (1 << -c2) - 1, i6 >>= -c2, c2 += r5; 0 < c2; u3 = 256 * u3 + e7[t5 + l4], l4 += d2, c2 -= 8)
              ;
            if (i6 === 0)
              i6 = 1 - f3;
            else {
              if (i6 === s6)
                return u3 ? NaN : 1 / 0 * (h3 ? -1 : 1);
              u3 += Math.pow(2, r5), i6 -= f3;
            }
            return (h3 ? -1 : 1) * u3 * Math.pow(2, i6 - r5);
          }, f2.write = function(e7, t5, n6, r5, o7, i6) {
            var u3, a4, s6, f3 = 8 * i6 - o7 - 1, c2 = (1 << f3) - 1, l4 = c2 >> 1, d2 = o7 === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h3 = r5 ? 0 : i6 - 1, p2 = r5 ? 1 : -1, g2 = t5 < 0 || t5 === 0 && 1 / t5 < 0 ? 1 : 0;
            for (t5 = Math.abs(t5), isNaN(t5) || t5 === 1 / 0 ? (a4 = isNaN(t5) ? 1 : 0, u3 = c2) : (u3 = Math.floor(Math.log(t5) / Math.LN2), t5 * (s6 = Math.pow(2, -u3)) < 1 && (u3--, s6 *= 2), 2 <= (t5 += 1 <= u3 + l4 ? d2 / s6 : d2 * Math.pow(2, 1 - l4)) * s6 && (u3++, s6 /= 2), c2 <= u3 + l4 ? (a4 = 0, u3 = c2) : 1 <= u3 + l4 ? (a4 = (t5 * s6 - 1) * Math.pow(2, o7), u3 += l4) : (a4 = t5 * Math.pow(2, l4 - 1) * Math.pow(2, o7), u3 = 0)); 8 <= o7; e7[n6 + h3] = 255 & a4, h3 += p2, a4 /= 256, o7 -= 8)
              ;
            for (u3 = u3 << o7 | a4, f3 += o7; 0 < f3; e7[n6 + h3] = 255 & u3, h3 += p2, u3 /= 256, f3 -= 8)
              ;
            e7[n6 + h3 - p2] |= 128 * g2;
          };
        }).call(this, e5("lYpoI2"), typeof self != "undefined" ? self : typeof window != "undefined" ? window : {}, e5("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/ieee754/index.js", "/node_modules/ieee754");
      }, { buffer: 3, lYpoI2: 10 }] }, {}, [1])(1);
    });
  }
});

// src/analytics/Analytics.ts
var EventSources = /* @__PURE__ */ ((EventSources2) => {
  EventSources2["desginer"] = "api";
  EventSources2["liveboard"] = "live_board";
  return EventSources2;
})(EventSources || {});
var eventPlatformBySource = {
  ["api" /* desginer */]: "App",
  ["live_board" /* liveboard */]: "Campaign"
};
var LiveBoardEventTypes = /* @__PURE__ */ ((LiveBoardEventTypes2) => {
  LiveBoardEventTypes2[LiveBoardEventTypes2["viewed_board"] = 1] = "viewed_board";
  LiveBoardEventTypes2[LiveBoardEventTypes2["viewed_item"] = 2] = "viewed_item";
  LiveBoardEventTypes2[LiveBoardEventTypes2["clicked_on_next_item"] = 3] = "clicked_on_next_item";
  LiveBoardEventTypes2[LiveBoardEventTypes2["clicked_on_previous_item"] = 4] = "clicked_on_previous_item";
  LiveBoardEventTypes2[LiveBoardEventTypes2["confirmed_cookie_usage"] = 5] = "confirmed_cookie_usage";
  LiveBoardEventTypes2[LiveBoardEventTypes2["clicked_on_share_button"] = 6] = "clicked_on_share_button";
  LiveBoardEventTypes2[LiveBoardEventTypes2["shared_a_campaign"] = 7] = "shared_a_campaign";
  LiveBoardEventTypes2[LiveBoardEventTypes2["liked_an_item"] = 8] = "liked_an_item";
  LiveBoardEventTypes2[LiveBoardEventTypes2["clicked_on_cta"] = 9] = "clicked_on_cta";
  LiveBoardEventTypes2[LiveBoardEventTypes2["downloaded_an_item"] = 10] = "downloaded_an_item";
  LiveBoardEventTypes2[LiveBoardEventTypes2["changed_category"] = 11] = "changed_category";
  LiveBoardEventTypes2[LiveBoardEventTypes2["searched_items"] = 12] = "searched_items";
  return LiveBoardEventTypes2;
})(LiveBoardEventTypes || {});
var DesignerEventTypes = /* @__PURE__ */ ((DesignerEventTypes2) => {
  DesignerEventTypes2[DesignerEventTypes2["clicked_on_logo"] = 17] = "clicked_on_logo";
  DesignerEventTypes2[DesignerEventTypes2["clicked_on_campaign_preview"] = 18] = "clicked_on_campaign_preview";
  DesignerEventTypes2[DesignerEventTypes2["viewed_design_tab"] = 19] = "viewed_design_tab";
  DesignerEventTypes2[DesignerEventTypes2["viewed_content_tab"] = 20] = "viewed_content_tab";
  DesignerEventTypes2[DesignerEventTypes2["changed_board_privacy_settings"] = 47] = "changed_board_privacy_settings";
  DesignerEventTypes2[DesignerEventTypes2["clicked_on_find_more_images"] = 51] = "clicked_on_find_more_images";
  DesignerEventTypes2[DesignerEventTypes2["clicked_on_search_image"] = 52] = "clicked_on_search_image";
  DesignerEventTypes2[DesignerEventTypes2["clicked_on_upload_an_image"] = 53] = "clicked_on_upload_an_image";
  DesignerEventTypes2[DesignerEventTypes2["uploaded_an_image"] = 54] = "uploaded_an_image";
  DesignerEventTypes2[DesignerEventTypes2["saved_campaign_design"] = 76] = "saved_campaign_design";
  DesignerEventTypes2[DesignerEventTypes2["discarded_campaign_design_changes"] = 77] = "discarded_campaign_design_changes";
  DesignerEventTypes2[DesignerEventTypes2["configured_personalization"] = 261] = "configured_personalization";
  DesignerEventTypes2[DesignerEventTypes2["deleted_personalization"] = 262] = "deleted_personalization";
  DesignerEventTypes2[DesignerEventTypes2["created_new_block"] = 282] = "created_new_block";
  DesignerEventTypes2[DesignerEventTypes2["added_rule"] = 283] = "added_rule";
  DesignerEventTypes2[DesignerEventTypes2["added_items_to_visible_to_everyone"] = 284] = "added_items_to_visible_to_everyone";
  DesignerEventTypes2[DesignerEventTypes2["changed_rule"] = 285] = "changed_rule";
  DesignerEventTypes2[DesignerEventTypes2["changed_block_title"] = 286] = "changed_block_title";
  DesignerEventTypes2[DesignerEventTypes2["saved_personalization_changes"] = 290] = "saved_personalization_changes";
  DesignerEventTypes2[DesignerEventTypes2["discarded_personalization_changes"] = 291] = "discarded_personalization_changes";
  DesignerEventTypes2[DesignerEventTypes2["change_rule_set_priority"] = 292] = "change_rule_set_priority";
  return DesignerEventTypes2;
})(DesignerEventTypes || {});
var Analytics = class {
  constructor(fetch) {
    this.fetcher = fetch.fetcher;
  }
  sendLeadBoardView(boardId) {
    return new Promise((resolve, reject) => {
      this.fetcher.post(`/live_board/v2/boards/${boardId}/lead_views`).then(() => {
        resolve();
      }).catch((e5) => {
        console.error("could not track lead board view", e5);
        reject(e5);
      });
    });
  }
  sendLeadItemView(itemId, guid) {
    return new Promise((resolve, reject) => {
      this.fetcher.post(`/live_board/v2/items/${itemId}/lead_views`, { guid }).then(() => {
        resolve();
      }).catch((e5) => {
        console.error("could not track lead item view", e5);
        reject(e5);
      });
    });
  }
  trackEvent(eventId, data, source) {
    return new Promise((resolve, reject) => {
      this.fetcher.post(`/${source}/v1/tracking`, {
        event: {
          id: eventId,
          data,
          platform: eventPlatformBySource[source]
        }
      }).then(() => {
        resolve();
      }).catch((e5) => {
        console.error("could not track action", e5);
        reject(e5);
      });
    });
  }
  sendPing(payload) {
    return this.fetcher.post("/url-for-ping", payload);
  }
};

// src/common/FetchService.ts
var import_axios = __toModule(require_axios());

// src/common/MockConnector.ts
var MockConnector = class {
  static async bindLiveBoard(mock) {
    await import("./chunks/mocks.MY55IBBF.js").then((module) => module.rules(mock)).catch((e5) => console.error("could not import liveboard mocks", e5));
  }
  static async bindDesigner(mock) {
    await import("./chunks/mocks.IPHNIVFC.js").then((module) => module.rules(mock)).catch((e5) => console.error("could not import designer mocks", e5));
  }
  static async bindAnalytics(mock) {
    await import("./chunks/mocks.LF7HGLSV.js").then((module) => module.rules(mock)).catch((e5) => console.error("could not import analytics mocks", e5));
  }
};

// src/common/FetchService.ts
var defaultFetcherOptions = {
  useMock: false,
  config: {
    baseURL: "/",
    headers: {}
  }
};
var FetchService = class {
  constructor(options) {
    this.useMock = options.useMock;
    this.options = options;
  }
  static async create(options) {
    options = Object.assign(defaultFetcherOptions, options);
    const instance = new FetchService(options);
    if (options.useMock) {
      await instance.createMockFetcher(options);
    } else {
      instance.createAxiosFetcher(options);
    }
    return instance;
  }
  async createMockFetcher(options) {
    return await import("./chunks/src.QMSX7QCF.js").then(async (module) => {
      this.createAxiosFetcher(options);
      this.mock = new module.default(this.fetcher);
      await Promise.all([
        MockConnector.bindLiveBoard(this.mock),
        MockConnector.bindDesigner(this.mock),
        MockConnector.bindAnalytics(this.mock)
      ]);
    }).catch((e5) => console.error(e5));
  }
  createAxiosFetcher(options) {
    this.fetcher = import_axios.default.create(options.config);
  }
};

// src/common/helpers/helpers.ts
var import_lodash = __toModule(require_lodash());
var import_object_hash = __toModule(require_object_hash());
var keysToSnakeCase = (params) => {
  return (0, import_lodash.mapKeys)(params, (value, key) => {
    return (0, import_lodash.snakeCase)(key);
  });
};
function fileUpload(file, params, progressCallback) {
  return new Promise((resolve, reject) => {
    const url = params.url;
    const headers = params.headers;
    const data = params.data;
    const method = params.method || "POST";
    let payload = file;
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    if (headers) {
      for (const key in headers) {
        xhr.setRequestHeader(key, headers[key]);
      }
    }
    if (data) {
      const formData = new FormData();
      formData.append("file", file);
      for (const key in data) {
        formData.append(key, data[key]);
      }
      payload = formData;
    }
    xhr.onloadstart = function() {
      progressCallback(file, 0);
    };
    xhr.onload = function() {
      if (xhr.status == 200 || xhr.status == 201) {
        const response = xhr.responseText && JSON.parse(xhr.responseText);
        progressCallback(file, 100);
        resolve(response);
      } else {
        reject("did not receive server conformation for upload i.e: status 200 or 201");
      }
    };
    xhr.onerror = function(e5) {
      reject(e5);
    };
    xhr.upload.onprogress = function(evt) {
      if (evt.lengthComputable) {
        const percent = Math.floor(100 * evt.loaded / evt.total);
        progressCallback(file, percent);
      }
    };
    xhr.send(payload);
  });
}
function isObjsEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  if (!obj1 || !obj2) {
    return false;
  }
  return (0, import_object_hash.sha1)(obj1) === (0, import_object_hash.sha1)(obj2);
}

// src/designer/Designer.ts
var Designer = class {
  constructor(fetch) {
    this.fetcher = fetch.fetcher;
  }
  getImageGallery(payload) {
    return new Promise((resolve, reject) => {
      this.fetcher.post("/api/imagegallery", __spreadValues({}, keysToSnakeCase(payload))).then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not get image gallery", e5);
        reject(e5);
      });
    });
  }
  getQueryImageGallery(query) {
    return this.getImageGallery({ type: ImageGalleryTypes.search, query });
  }
  getImageBankGallery(organizationId, bankCategory) {
    return this.getImageGallery({
      type: ImageGalleryTypes.imageBank,
      organizationId,
      bankCategory
    });
  }
  getCampaignImageGallery() {
    return this.getImageGallery({ type: ImageGalleryTypes.campaign });
  }
  getImageUploadUrl(uploadType) {
    return new Promise((resolve, reject) => {
      this.fetcher.post("/api/v1/upload_urls", { type: uploadType }).then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not get upload url", e5);
        reject(e5);
      });
    });
  }
  getImageBankSettings(organizationId) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`/api/v1/organizations/${organizationId}/settings/image_bank`).then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not get image bank settings", e5);
        reject(e5);
      });
    });
  }
  saveImageBankSettings(organizationId, categoryName, source) {
    return new Promise((resolve, reject) => {
      this.fetcher.put(`/api/v1/organizations/${organizationId}/settings/image_bank`, {
        params: {
          category_name: categoryName,
          value: source
        }
      }).then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not set image bank settings", e5);
        reject(e5);
      });
    });
  }
  getForms(boardId) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`api/v1/boards/${boardId}/forms`).then((result) => resolve(result.data)).catch((e5) => {
        console.error("could not get forms", e5);
        reject(e5);
      });
    });
  }
  createForm(boardId, form) {
    return new Promise((resolve, reject) => {
      this.fetcher.post(`api/v1/boards/${boardId}/forms`, keysToSnakeCase(form)).then((result) => resolve(result.data)).catch((e5) => {
        console.error("could not save form", e5);
        reject(e5);
      });
    });
  }
  updateForm(boardId, form) {
    return new Promise((resolve, reject) => {
      this.fetcher.put(`api/v1/boards/${boardId}/forms`, keysToSnakeCase(form)).then((result) => resolve(result.data)).catch((e5) => {
        console.error("could not save form", e5);
        reject(e5);
      });
    });
  }
  getCampaignElements(boardId, elementType) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`prism/${boardId}/campaign_elements`, { params: { element_type: elementType } }).then((result) => resolve(result.data)).catch((e5) => {
        console.error("could not get campaign elements", e5);
        reject(e5);
      });
    });
  }
  getFooters(boardId) {
    return this.getCampaignElements(boardId, CampaignElementsTypes.footer);
  }
  getPrivacyMessages(boardId) {
    return this.getCampaignElements(boardId, CampaignElementsTypes.privacy_message);
  }
  getFormPrivacyMessages(boardId) {
    return this.getCampaignElements(boardId, CampaignElementsTypes.form_privacy_message);
  }
  getPrivacySettings(organizationId) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`/api/v1/organizations/${organizationId}/settings/privacy`).then((result) => resolve(result.data)).catch((e5) => {
        console.error("could not get privacy settings", e5);
        reject(e5);
      });
    });
  }
  getBoardHasPersonalization(organizationId, boardId) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`api/v1/organizations/${organizationId}/settings/personalizations`, { params: { board_id: boardId } }).then((result) => resolve(result.data)).catch((e5) => {
        console.error("could not get personalization setting", e5);
        reject(e5);
      });
    });
  }
  getFeatureSettings(organizationId) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`/api/v1/organizations/${organizationId}/settings/features`).then((result) => resolve(result.data)).catch((e5) => {
        console.error("could not get feature settings", e5);
        reject(e5);
      });
    });
  }
  getBoardHasItems(boardId, leadingItemId) {
    return new Promise((resolve, reject) => {
      this.fetcher.get("/api/v1/preview/board_items_presence", {
        params: {
          board_id: boardId,
          leading_item_id: leadingItemId
        }
      }).then((result) => resolve(result.data)).catch((e5) => {
        console.error("could not get board has items", e5);
        reject(e5);
      });
    });
  }
  getPersonalization(boardId) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`/prism/${boardId}/personalization`).then((result) => resolve(result.data)).catch((e5) => {
        console.error("could not get personalization", e5);
        reject(e5);
      });
    });
  }
  savePersonalization(boardId, personalization) {
    return new Promise((resolve, reject) => {
      this.fetcher.put(`/prism/${boardId}/personalization`, personalization).then((result) => resolve(result.data)).catch((e5) => {
        console.error("could not save personalization", e5);
        reject(e5);
      });
    });
  }
  saveLiveBoard(payload) {
    return new Promise((resolve, reject) => {
      this.fetcher.post("/url-for-saving-live-board", payload).then((result) => {
        resolve(result);
      }).catch((e5) => {
        console.error("could not save liveboard", e5);
        reject(e5);
      });
    });
  }
};

// src/liveboard/Liveboard.ts
var Liveboard = class {
  constructor(fetch) {
    this.fetcher = fetch.fetcher;
  }
  getBoard(boardSlug) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`/live_board/v1/boards/${boardSlug}/`).then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not get board");
        reject(e5);
      });
    });
  }
  getSellerInformation(boardId, token) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`/live_board/v1/boards/${boardId}/presenter`, { params: { token } }).then((result) => {
        if (result.status == 206) {
          setTimeout(() => {
            this.getSellerInformation(boardId, token).then(resolve).catch(reject);
          }, 2e3);
        } else {
          resolve(result.data);
        }
      }).catch((e5) => {
        console.error("could not get seller");
        reject(e5);
      });
    });
  }
  getCategory(categoryIdOrSlug, boardId, bySlug) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`/live_board/v2/categories/${categoryIdOrSlug}`, {
        params: {
          board_id: boardId,
          by_slug: bySlug
        }
      }).then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not get category", e5);
        reject(e5);
      });
    });
  }
  getCategories(boardId) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`/live_board/v2/boards/${boardId}/categories`).then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not get categories", e5);
        reject(e5);
      });
    });
  }
  getUserChat(boardId, leadId) {
    return new Promise((resolve, reject) => {
      this.fetcher.post("/live_board/v1/chat/user_chat", {
        board_id: boardId,
        lead_id: leadId
      }).then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not get user chat", e5);
        reject(e5);
      });
    });
  }
  getItem(itemId, boardId, bySlug) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`/live_board/v2/items/${itemId}`, {
        params: { by_slug: bySlug, board_id: boardId }
      }).then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not get item", e5);
        reject(e5);
      });
    });
  }
  getItems(params) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`/live_board/v2/boards/${params.boardId}/items`, { params: __spreadValues({}, keysToSnakeCase(params)) }).then((result) => {
        if (result.status == 206) {
          setTimeout(() => {
            this.getItems(params).then(resolve).catch(reject);
          }, 2e3);
        } else {
          resolve(result.data);
        }
      }).catch((e5) => {
        console.error("could not get items");
        reject(e5);
      });
    });
  }
  getHasItems(boardId) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`/live_board/v2/boards/${boardId}/items_presence`).then((result) => {
        if (result.status == 206) {
          setTimeout(() => {
            this.getHasItems(boardId).then(resolve).catch(reject);
          }, 2e3);
        } else {
          resolve(result.data);
        }
      }).catch((e5) => {
        console.error("could not get has items");
        reject(e5);
      });
    });
  }
  likeItem(itemId) {
    return new Promise((resolve, reject) => {
      this.fetcher.post(`/live_board/v2/items/${itemId}/likes`).then(() => {
        resolve();
      }).catch((e5) => {
        console.error("could not like item", e5);
        reject(e5);
      });
    });
  }
  getJourneyItems(itemId, options) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`/live_board/v2/journeys/${itemId}`, { params: keysToSnakeCase(options) }).then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not get journey items", e5);
        reject(e5);
      });
    });
  }
  getItemDownloadUrl(itemId) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`/live_board/v2/items/${itemId}/downloads`).then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not get download url", e5);
        reject(e5);
      });
    });
  }
  createSnapshotUrl(contentItemId, guid) {
    return new Promise((resolve, reject) => {
      this.fetcher.post(`/live_board/v1/content_items/${contentItemId}/snapshots`, { guid }).then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not create snapshot", e5);
        reject(e5);
      });
    });
  }
  createItemAnalysis(contentItemId) {
    return new Promise((resolve, reject) => {
      this.fetcher.post(`/live_board/v1/content_items/${contentItemId}/analyses`).then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not create analysis", e5);
        reject(e5);
      });
    });
  }
  getFileMetadata(contentItemId) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`/live_board/v1/content_items/${contentItemId}/files`).then((result) => {
        if (result.status == 206) {
          setTimeout(() => {
            this.getFileMetadata(contentItemId).then(resolve).catch(reject);
          }, 2e3);
        } else {
          resolve(result.data);
        }
      }).catch((e5) => {
        console.error("could not get file url", e5);
        reject(e5);
      });
    });
  }
  setCookiesConsent(boardId, options) {
    return new Promise((resolve, reject) => {
      this.fetcher.post(`/live_board/v1/boards/${boardId}/cookies_consents`, __spreadValues({}, keysToSnakeCase(options))).then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not get file url", e5);
        reject(e5);
      });
    });
  }
  saveMessageCta(boardId, options) {
    return new Promise((resolve, reject) => {
      this.fetcher.post(`/live_board/v1/boards/${boardId}/campaign/message`, __spreadValues({}, keysToSnakeCase(options))).then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not submit cta", e5);
        reject(e5);
      });
    });
  }
  saveContactCta(boardId, options) {
    return new Promise((resolve, reject) => {
      this.fetcher.post(`/live_board/v1/boards/${boardId}/campaign/contact`, __spreadValues({}, keysToSnakeCase(options))).then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not submit cta", e5);
        reject(e5);
      });
    });
  }
  saveFormCta(boardId, options) {
    return new Promise((resolve, reject) => {
      this.fetcher.post(`/live_board/v1/boards/${boardId}/campaign/form`, __spreadValues({}, keysToSnakeCase(options))).then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not submit cta", e5);
        reject(e5);
      });
    });
  }
  saveLinkCta(boardId, options) {
    return new Promise((resolve, reject) => {
      this.fetcher.post(`/live_board/v1/boards/${boardId}/campaign/link`, __spreadValues({}, keysToSnakeCase(options))).then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not submit cta", e5);
        reject(e5);
      });
    });
  }
  saveShareCta(boardId, options) {
    return new Promise((resolve, reject) => {
      this.fetcher.post(`/live_board/v1/boards/${boardId}/campaign/share`, __spreadValues({}, keysToSnakeCase(options))).then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not submit cta", e5);
        reject(e5);
      });
    });
  }
  saveShareByEmailCta(boardId, email, invitationId) {
    return new Promise((resolve, reject) => {
      this.fetcher.post(`/live_board/v1/boards/${boardId}/shares`, {
        email,
        invitation_id: invitationId
      }).then(() => {
        resolve();
      }).catch((e5) => {
        console.error("could not submit cta", e5);
        reject(e5);
      });
    });
  }
  updateEnrichment(type, enrichmentData) {
    return new Promise((resolve, reject) => {
      this.fetcher.post("/live_board/v2/enrichments", {
        type,
        enrichment_data: enrichmentData
      }).then(() => {
        resolve();
      }).catch((e5) => {
        console.error("could not update enrichment", e5);
        reject(e5);
      });
    });
  }
  getGeoLocation() {
    return new Promise((resolve, reject) => {
      this.fetcher.get("/live_board/v1/geo_location").then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not get geolocation", e5);
        reject(e5);
      });
    });
  }
  updateInvitationUsed(token) {
    return new Promise((resolve, reject) => {
      this.fetcher.post(`/live_board/v2/invitation_wrappers/${token}`).then(() => {
        resolve();
      }).catch((e5) => {
        console.error("could not update invitation wrapper", e5);
        reject(e5);
      });
    });
  }
  getCurrentLead() {
    return new Promise((resolve, reject) => {
      this.fetcher.get("/live_board/v1/leads/me").then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not get current lead", e5);
        reject(e5);
      });
    });
  }
  validateLead(boardId) {
    return new Promise((resolve, reject) => {
      this.fetcher.post("/live_board/v2/lead_validations", { board_id: boardId }).then(() => {
        resolve();
      }).catch((e5) => {
        console.error("could not validate lead", e5);
        reject(e5);
      });
    });
  }
  stopTrackingForSession() {
    return new Promise((resolve, reject) => {
      this.fetcher.delete("/live_board/v2/track_leads").then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not get stop tracking lead", e5);
        reject(e5);
      });
    });
  }
  getLiveEventUrls(boardId) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`/live_board/v2/boards/${boardId}/live_event`).then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not get current lead", e5);
        reject(e5);
      });
    });
  }
  getOrganizationSettings(boardId) {
    return new Promise((resolve, reject) => {
      this.fetcher.get(`/live_board/v1/boards/${boardId}/organization_settings`).then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not get organization settings", e5);
        reject(e5);
      });
    });
  }
  createSession() {
    return new Promise((resolve, reject) => {
      this.fetcher.post("/live_board/v1/sessions").then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not create session", e5);
        reject(e5);
      });
    });
  }
  validateSession() {
    return new Promise((resolve, reject) => {
      this.fetcher.post("/live_board/v1/session_validations").then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not validate session", e5);
        reject(e5);
      });
    });
  }
  setSessionCookie(boardId) {
    return new Promise((resolve, reject) => {
      this.fetcher.post(`/live_board/v1/boards/${boardId}/session_cookies`).then((result) => {
        resolve(result.data);
      }).catch((e5) => {
        console.error("could not create session cookie", e5);
        reject(e5);
      });
    });
  }
};

// src/sdk.ts
var ClientSDK = class {
  constructor() {
  }
  static async create(options) {
    const instance = new ClientSDK();
    const fetcher = await FetchService.create(options);
    instance.fetcher = fetcher;
    instance.analytics = new Analytics(fetcher);
    instance.designer = new Designer(fetcher);
    instance.liveboard = new Liveboard(fetcher);
    return instance;
  }
};

// node_modules/@lit/reactive-element/css-tag.js
var t = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var e = Symbol();
var n = /* @__PURE__ */ new Map();
var s = class {
  constructor(t3, n5) {
    if (this._$cssResult$ = true, n5 !== e)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t3;
  }
  get styleSheet() {
    let e5 = n.get(this.cssText);
    return t && e5 === void 0 && (n.set(this.cssText, e5 = new CSSStyleSheet()), e5.replaceSync(this.cssText)), e5;
  }
  toString() {
    return this.cssText;
  }
};
var o = (t3) => new s(typeof t3 == "string" ? t3 : t3 + "", e);
var r = (t3, ...n5) => {
  const o6 = t3.length === 1 ? t3[0] : n5.reduce((e5, n6, s5) => e5 + ((t4) => {
    if (t4._$cssResult$ === true)
      return t4.cssText;
    if (typeof t4 == "number")
      return t4;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n6) + t3[s5 + 1], t3[0]);
  return new s(o6, e);
};
var i = (e5, n5) => {
  t ? e5.adoptedStyleSheets = n5.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet) : n5.forEach((t3) => {
    const n6 = document.createElement("style"), s5 = window.litNonce;
    s5 !== void 0 && n6.setAttribute("nonce", s5), n6.textContent = t3.cssText, e5.appendChild(n6);
  });
};
var S = t ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
  let e5 = "";
  for (const n5 of t4.cssRules)
    e5 += n5.cssText;
  return o(e5);
})(t3) : t3;

// node_modules/@lit/reactive-element/reactive-element.js
var s2;
var e2 = window.trustedTypes;
var r2 = e2 ? e2.emptyScript : "";
var h = window.reactiveElementPolyfillSupport;
var o2 = { toAttribute(t3, i5) {
  switch (i5) {
    case Boolean:
      t3 = t3 ? r2 : null;
      break;
    case Object:
    case Array:
      t3 = t3 == null ? t3 : JSON.stringify(t3);
  }
  return t3;
}, fromAttribute(t3, i5) {
  let s5 = t3;
  switch (i5) {
    case Boolean:
      s5 = t3 !== null;
      break;
    case Number:
      s5 = t3 === null ? null : Number(t3);
      break;
    case Object:
    case Array:
      try {
        s5 = JSON.parse(t3);
      } catch (t4) {
        s5 = null;
      }
  }
  return s5;
} };
var n2 = (t3, i5) => i5 !== t3 && (i5 == i5 || t3 == t3);
var l = { attribute: true, type: String, converter: o2, reflect: false, hasChanged: n2 };
var a = class extends HTMLElement {
  constructor() {
    super(), this._$Et = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
  }
  static addInitializer(t3) {
    var i5;
    (i5 = this.l) !== null && i5 !== void 0 || (this.l = []), this.l.push(t3);
  }
  static get observedAttributes() {
    this.finalize();
    const t3 = [];
    return this.elementProperties.forEach((i5, s5) => {
      const e5 = this._$Eh(s5, i5);
      e5 !== void 0 && (this._$Eu.set(e5, s5), t3.push(e5));
    }), t3;
  }
  static createProperty(t3, i5 = l) {
    if (i5.state && (i5.attribute = false), this.finalize(), this.elementProperties.set(t3, i5), !i5.noAccessor && !this.prototype.hasOwnProperty(t3)) {
      const s5 = typeof t3 == "symbol" ? Symbol() : "__" + t3, e5 = this.getPropertyDescriptor(t3, s5, i5);
      e5 !== void 0 && Object.defineProperty(this.prototype, t3, e5);
    }
  }
  static getPropertyDescriptor(t3, i5, s5) {
    return { get() {
      return this[i5];
    }, set(e5) {
      const r4 = this[t3];
      this[i5] = e5, this.requestUpdate(t3, r4, s5);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t3) {
    return this.elementProperties.get(t3) || l;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return false;
    this.finalized = true;
    const t3 = Object.getPrototypeOf(this);
    if (t3.finalize(), this.elementProperties = new Map(t3.elementProperties), this._$Eu = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t4 = this.properties, i5 = [...Object.getOwnPropertyNames(t4), ...Object.getOwnPropertySymbols(t4)];
      for (const s5 of i5)
        this.createProperty(s5, t4[s5]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i5) {
    const s5 = [];
    if (Array.isArray(i5)) {
      const e5 = new Set(i5.flat(1 / 0).reverse());
      for (const i6 of e5)
        s5.unshift(S(i6));
    } else
      i5 !== void 0 && s5.push(S(i5));
    return s5;
  }
  static _$Eh(t3, i5) {
    const s5 = i5.attribute;
    return s5 === false ? void 0 : typeof s5 == "string" ? s5 : typeof t3 == "string" ? t3.toLowerCase() : void 0;
  }
  o() {
    var t3;
    this._$Ep = new Promise((t4) => this.enableUpdating = t4), this._$AL = /* @__PURE__ */ new Map(), this._$Em(), this.requestUpdate(), (t3 = this.constructor.l) === null || t3 === void 0 || t3.forEach((t4) => t4(this));
  }
  addController(t3) {
    var i5, s5;
    ((i5 = this._$Eg) !== null && i5 !== void 0 ? i5 : this._$Eg = []).push(t3), this.renderRoot !== void 0 && this.isConnected && ((s5 = t3.hostConnected) === null || s5 === void 0 || s5.call(t3));
  }
  removeController(t3) {
    var i5;
    (i5 = this._$Eg) === null || i5 === void 0 || i5.splice(this._$Eg.indexOf(t3) >>> 0, 1);
  }
  _$Em() {
    this.constructor.elementProperties.forEach((t3, i5) => {
      this.hasOwnProperty(i5) && (this._$Et.set(i5, this[i5]), delete this[i5]);
    });
  }
  createRenderRoot() {
    var t3;
    const s5 = (t3 = this.shadowRoot) !== null && t3 !== void 0 ? t3 : this.attachShadow(this.constructor.shadowRootOptions);
    return i(s5, this.constructor.elementStyles), s5;
  }
  connectedCallback() {
    var t3;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t3 = this._$Eg) === null || t3 === void 0 || t3.forEach((t4) => {
      var i5;
      return (i5 = t4.hostConnected) === null || i5 === void 0 ? void 0 : i5.call(t4);
    });
  }
  enableUpdating(t3) {
  }
  disconnectedCallback() {
    var t3;
    (t3 = this._$Eg) === null || t3 === void 0 || t3.forEach((t4) => {
      var i5;
      return (i5 = t4.hostDisconnected) === null || i5 === void 0 ? void 0 : i5.call(t4);
    });
  }
  attributeChangedCallback(t3, i5, s5) {
    this._$AK(t3, s5);
  }
  _$ES(t3, i5, s5 = l) {
    var e5, r4;
    const h3 = this.constructor._$Eh(t3, s5);
    if (h3 !== void 0 && s5.reflect === true) {
      const n5 = ((r4 = (e5 = s5.converter) === null || e5 === void 0 ? void 0 : e5.toAttribute) !== null && r4 !== void 0 ? r4 : o2.toAttribute)(i5, s5.type);
      this._$Ei = t3, n5 == null ? this.removeAttribute(h3) : this.setAttribute(h3, n5), this._$Ei = null;
    }
  }
  _$AK(t3, i5) {
    var s5, e5, r4;
    const h3 = this.constructor, n5 = h3._$Eu.get(t3);
    if (n5 !== void 0 && this._$Ei !== n5) {
      const t4 = h3.getPropertyOptions(n5), l4 = t4.converter, a3 = (r4 = (e5 = (s5 = l4) === null || s5 === void 0 ? void 0 : s5.fromAttribute) !== null && e5 !== void 0 ? e5 : typeof l4 == "function" ? l4 : null) !== null && r4 !== void 0 ? r4 : o2.fromAttribute;
      this._$Ei = n5, this[n5] = a3(i5, t4.type), this._$Ei = null;
    }
  }
  requestUpdate(t3, i5, s5) {
    let e5 = true;
    t3 !== void 0 && (((s5 = s5 || this.constructor.getPropertyOptions(t3)).hasChanged || n2)(this[t3], i5) ? (this._$AL.has(t3) || this._$AL.set(t3, i5), s5.reflect === true && this._$Ei !== t3 && (this._$E_ === void 0 && (this._$E_ = /* @__PURE__ */ new Map()), this._$E_.set(t3, s5))) : e5 = false), !this.isUpdatePending && e5 && (this._$Ep = this._$EC());
  }
  async _$EC() {
    this.isUpdatePending = true;
    try {
      await this._$Ep;
    } catch (t4) {
      Promise.reject(t4);
    }
    const t3 = this.scheduleUpdate();
    return t3 != null && await t3, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t3;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Et && (this._$Et.forEach((t4, i6) => this[i6] = t4), this._$Et = void 0);
    let i5 = false;
    const s5 = this._$AL;
    try {
      i5 = this.shouldUpdate(s5), i5 ? (this.willUpdate(s5), (t3 = this._$Eg) === null || t3 === void 0 || t3.forEach((t4) => {
        var i6;
        return (i6 = t4.hostUpdate) === null || i6 === void 0 ? void 0 : i6.call(t4);
      }), this.update(s5)) : this._$EU();
    } catch (t4) {
      throw i5 = false, this._$EU(), t4;
    }
    i5 && this._$AE(s5);
  }
  willUpdate(t3) {
  }
  _$AE(t3) {
    var i5;
    (i5 = this._$Eg) === null || i5 === void 0 || i5.forEach((t4) => {
      var i6;
      return (i6 = t4.hostUpdated) === null || i6 === void 0 ? void 0 : i6.call(t4);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Ep;
  }
  shouldUpdate(t3) {
    return true;
  }
  update(t3) {
    this._$E_ !== void 0 && (this._$E_.forEach((t4, i5) => this._$ES(i5, this[i5], t4)), this._$E_ = void 0), this._$EU();
  }
  updated(t3) {
  }
  firstUpdated(t3) {
  }
};
a.finalized = true, a.elementProperties = /* @__PURE__ */ new Map(), a.elementStyles = [], a.shadowRootOptions = { mode: "open" }, h == null || h({ ReactiveElement: a }), ((s2 = globalThis.reactiveElementVersions) !== null && s2 !== void 0 ? s2 : globalThis.reactiveElementVersions = []).push("1.0.2");

// node_modules/lit-html/lit-html.js
var t2;
var i2 = globalThis.trustedTypes;
var s3 = i2 ? i2.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
var e3 = `lit$${(Math.random() + "").slice(9)}$`;
var o3 = "?" + e3;
var n3 = `<${o3}>`;
var l2 = document;
var h2 = (t3 = "") => l2.createComment(t3);
var r3 = (t3) => t3 === null || typeof t3 != "object" && typeof t3 != "function";
var d = Array.isArray;
var u = (t3) => {
  var i5;
  return d(t3) || typeof ((i5 = t3) === null || i5 === void 0 ? void 0 : i5[Symbol.iterator]) == "function";
};
var c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var v = /-->/g;
var a2 = />/g;
var f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
var _ = /'/g;
var m = /"/g;
var g = /^(?:script|style|textarea)$/i;
var $ = (t3) => (i5, ...s5) => ({ _$litType$: t3, strings: i5, values: s5 });
var p = $(1);
var y = $(2);
var b = Symbol.for("lit-noChange");
var T = Symbol.for("lit-nothing");
var x = new WeakMap();
var w = (t3, i5, s5) => {
  var e5, o6;
  const n5 = (e5 = s5 == null ? void 0 : s5.renderBefore) !== null && e5 !== void 0 ? e5 : i5;
  let l4 = n5._$litPart$;
  if (l4 === void 0) {
    const t4 = (o6 = s5 == null ? void 0 : s5.renderBefore) !== null && o6 !== void 0 ? o6 : null;
    n5._$litPart$ = l4 = new N(i5.insertBefore(h2(), t4), t4, void 0, s5 != null ? s5 : {});
  }
  return l4._$AI(t3), l4;
};
var A = l2.createTreeWalker(l2, 129, null, false);
var C = (t3, i5) => {
  const o6 = t3.length - 1, l4 = [];
  let h3, r4 = i5 === 2 ? "<svg>" : "", d2 = c;
  for (let i6 = 0; i6 < o6; i6++) {
    const s5 = t3[i6];
    let o7, u3, $2 = -1, p2 = 0;
    for (; p2 < s5.length && (d2.lastIndex = p2, u3 = d2.exec(s5), u3 !== null); )
      p2 = d2.lastIndex, d2 === c ? u3[1] === "!--" ? d2 = v : u3[1] !== void 0 ? d2 = a2 : u3[2] !== void 0 ? (g.test(u3[2]) && (h3 = RegExp("</" + u3[2], "g")), d2 = f) : u3[3] !== void 0 && (d2 = f) : d2 === f ? u3[0] === ">" ? (d2 = h3 != null ? h3 : c, $2 = -1) : u3[1] === void 0 ? $2 = -2 : ($2 = d2.lastIndex - u3[2].length, o7 = u3[1], d2 = u3[3] === void 0 ? f : u3[3] === '"' ? m : _) : d2 === m || d2 === _ ? d2 = f : d2 === v || d2 === a2 ? d2 = c : (d2 = f, h3 = void 0);
    const y2 = d2 === f && t3[i6 + 1].startsWith("/>") ? " " : "";
    r4 += d2 === c ? s5 + n3 : $2 >= 0 ? (l4.push(o7), s5.slice(0, $2) + "$lit$" + s5.slice($2) + e3 + y2) : s5 + e3 + ($2 === -2 ? (l4.push(void 0), i6) : y2);
  }
  const u2 = r4 + (t3[o6] || "<?>") + (i5 === 2 ? "</svg>" : "");
  return [s3 !== void 0 ? s3.createHTML(u2) : u2, l4];
};
var P = class {
  constructor({ strings: t3, _$litType$: s5 }, n5) {
    let l4;
    this.parts = [];
    let r4 = 0, d2 = 0;
    const u2 = t3.length - 1, c2 = this.parts, [v2, a3] = C(t3, s5);
    if (this.el = P.createElement(v2, n5), A.currentNode = this.el.content, s5 === 2) {
      const t4 = this.el.content, i5 = t4.firstChild;
      i5.remove(), t4.append(...i5.childNodes);
    }
    for (; (l4 = A.nextNode()) !== null && c2.length < u2; ) {
      if (l4.nodeType === 1) {
        if (l4.hasAttributes()) {
          const t4 = [];
          for (const i5 of l4.getAttributeNames())
            if (i5.endsWith("$lit$") || i5.startsWith(e3)) {
              const s6 = a3[d2++];
              if (t4.push(i5), s6 !== void 0) {
                const t5 = l4.getAttribute(s6.toLowerCase() + "$lit$").split(e3), i6 = /([.?@])?(.*)/.exec(s6);
                c2.push({ type: 1, index: r4, name: i6[2], strings: t5, ctor: i6[1] === "." ? M : i6[1] === "?" ? H : i6[1] === "@" ? I : S2 });
              } else
                c2.push({ type: 6, index: r4 });
            }
          for (const i5 of t4)
            l4.removeAttribute(i5);
        }
        if (g.test(l4.tagName)) {
          const t4 = l4.textContent.split(e3), s6 = t4.length - 1;
          if (s6 > 0) {
            l4.textContent = i2 ? i2.emptyScript : "";
            for (let i5 = 0; i5 < s6; i5++)
              l4.append(t4[i5], h2()), A.nextNode(), c2.push({ type: 2, index: ++r4 });
            l4.append(t4[s6], h2());
          }
        }
      } else if (l4.nodeType === 8)
        if (l4.data === o3)
          c2.push({ type: 2, index: r4 });
        else {
          let t4 = -1;
          for (; (t4 = l4.data.indexOf(e3, t4 + 1)) !== -1; )
            c2.push({ type: 7, index: r4 }), t4 += e3.length - 1;
        }
      r4++;
    }
  }
  static createElement(t3, i5) {
    const s5 = l2.createElement("template");
    return s5.innerHTML = t3, s5;
  }
};
function V(t3, i5, s5 = t3, e5) {
  var o6, n5, l4, h3;
  if (i5 === b)
    return i5;
  let d2 = e5 !== void 0 ? (o6 = s5._$Cl) === null || o6 === void 0 ? void 0 : o6[e5] : s5._$Cu;
  const u2 = r3(i5) ? void 0 : i5._$litDirective$;
  return (d2 == null ? void 0 : d2.constructor) !== u2 && ((n5 = d2 == null ? void 0 : d2._$AO) === null || n5 === void 0 || n5.call(d2, false), u2 === void 0 ? d2 = void 0 : (d2 = new u2(t3), d2._$AT(t3, s5, e5)), e5 !== void 0 ? ((l4 = (h3 = s5)._$Cl) !== null && l4 !== void 0 ? l4 : h3._$Cl = [])[e5] = d2 : s5._$Cu = d2), d2 !== void 0 && (i5 = V(t3, d2._$AS(t3, i5.values), d2, e5)), i5;
}
var E = class {
  constructor(t3, i5) {
    this.v = [], this._$AN = void 0, this._$AD = t3, this._$AM = i5;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(t3) {
    var i5;
    const { el: { content: s5 }, parts: e5 } = this._$AD, o6 = ((i5 = t3 == null ? void 0 : t3.creationScope) !== null && i5 !== void 0 ? i5 : l2).importNode(s5, true);
    A.currentNode = o6;
    let n5 = A.nextNode(), h3 = 0, r4 = 0, d2 = e5[0];
    for (; d2 !== void 0; ) {
      if (h3 === d2.index) {
        let i6;
        d2.type === 2 ? i6 = new N(n5, n5.nextSibling, this, t3) : d2.type === 1 ? i6 = new d2.ctor(n5, d2.name, d2.strings, this, t3) : d2.type === 6 && (i6 = new L(n5, this, t3)), this.v.push(i6), d2 = e5[++r4];
      }
      h3 !== (d2 == null ? void 0 : d2.index) && (n5 = A.nextNode(), h3++);
    }
    return o6;
  }
  m(t3) {
    let i5 = 0;
    for (const s5 of this.v)
      s5 !== void 0 && (s5.strings !== void 0 ? (s5._$AI(t3, s5, i5), i5 += s5.strings.length - 2) : s5._$AI(t3[i5])), i5++;
  }
};
var N = class {
  constructor(t3, i5, s5, e5) {
    var o6;
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t3, this._$AB = i5, this._$AM = s5, this.options = e5, this._$Cg = (o6 = e5 == null ? void 0 : e5.isConnected) === null || o6 === void 0 || o6;
  }
  get _$AU() {
    var t3, i5;
    return (i5 = (t3 = this._$AM) === null || t3 === void 0 ? void 0 : t3._$AU) !== null && i5 !== void 0 ? i5 : this._$Cg;
  }
  get parentNode() {
    let t3 = this._$AA.parentNode;
    const i5 = this._$AM;
    return i5 !== void 0 && t3.nodeType === 11 && (t3 = i5.parentNode), t3;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t3, i5 = this) {
    t3 = V(this, t3, i5), r3(t3) ? t3 === T || t3 == null || t3 === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : t3 !== this._$AH && t3 !== b && this.$(t3) : t3._$litType$ !== void 0 ? this.T(t3) : t3.nodeType !== void 0 ? this.S(t3) : u(t3) ? this.M(t3) : this.$(t3);
  }
  A(t3, i5 = this._$AB) {
    return this._$AA.parentNode.insertBefore(t3, i5);
  }
  S(t3) {
    this._$AH !== t3 && (this._$AR(), this._$AH = this.A(t3));
  }
  $(t3) {
    this._$AH !== T && r3(this._$AH) ? this._$AA.nextSibling.data = t3 : this.S(l2.createTextNode(t3)), this._$AH = t3;
  }
  T(t3) {
    var i5;
    const { values: s5, _$litType$: e5 } = t3, o6 = typeof e5 == "number" ? this._$AC(t3) : (e5.el === void 0 && (e5.el = P.createElement(e5.h, this.options)), e5);
    if (((i5 = this._$AH) === null || i5 === void 0 ? void 0 : i5._$AD) === o6)
      this._$AH.m(s5);
    else {
      const t4 = new E(o6, this), i6 = t4.p(this.options);
      t4.m(s5), this.S(i6), this._$AH = t4;
    }
  }
  _$AC(t3) {
    let i5 = x.get(t3.strings);
    return i5 === void 0 && x.set(t3.strings, i5 = new P(t3)), i5;
  }
  M(t3) {
    d(this._$AH) || (this._$AH = [], this._$AR());
    const i5 = this._$AH;
    let s5, e5 = 0;
    for (const o6 of t3)
      e5 === i5.length ? i5.push(s5 = new N(this.A(h2()), this.A(h2()), this, this.options)) : s5 = i5[e5], s5._$AI(o6), e5++;
    e5 < i5.length && (this._$AR(s5 && s5._$AB.nextSibling, e5), i5.length = e5);
  }
  _$AR(t3 = this._$AA.nextSibling, i5) {
    var s5;
    for ((s5 = this._$AP) === null || s5 === void 0 || s5.call(this, false, true, i5); t3 && t3 !== this._$AB; ) {
      const i6 = t3.nextSibling;
      t3.remove(), t3 = i6;
    }
  }
  setConnected(t3) {
    var i5;
    this._$AM === void 0 && (this._$Cg = t3, (i5 = this._$AP) === null || i5 === void 0 || i5.call(this, t3));
  }
};
var S2 = class {
  constructor(t3, i5, s5, e5, o6) {
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t3, this.name = i5, this._$AM = e5, this.options = o6, s5.length > 2 || s5[0] !== "" || s5[1] !== "" ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = T;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t3, i5 = this, s5, e5) {
    const o6 = this.strings;
    let n5 = false;
    if (o6 === void 0)
      t3 = V(this, t3, i5, 0), n5 = !r3(t3) || t3 !== this._$AH && t3 !== b, n5 && (this._$AH = t3);
    else {
      const e6 = t3;
      let l4, h3;
      for (t3 = o6[0], l4 = 0; l4 < o6.length - 1; l4++)
        h3 = V(this, e6[s5 + l4], i5, l4), h3 === b && (h3 = this._$AH[l4]), n5 || (n5 = !r3(h3) || h3 !== this._$AH[l4]), h3 === T ? t3 = T : t3 !== T && (t3 += (h3 != null ? h3 : "") + o6[l4 + 1]), this._$AH[l4] = h3;
    }
    n5 && !e5 && this.k(t3);
  }
  k(t3) {
    t3 === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 != null ? t3 : "");
  }
};
var M = class extends S2 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  k(t3) {
    this.element[this.name] = t3 === T ? void 0 : t3;
  }
};
var k = i2 ? i2.emptyScript : "";
var H = class extends S2 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  k(t3) {
    t3 && t3 !== T ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
  }
};
var I = class extends S2 {
  constructor(t3, i5, s5, e5, o6) {
    super(t3, i5, s5, e5, o6), this.type = 5;
  }
  _$AI(t3, i5 = this) {
    var s5;
    if ((t3 = (s5 = V(this, t3, i5, 0)) !== null && s5 !== void 0 ? s5 : T) === b)
      return;
    const e5 = this._$AH, o6 = t3 === T && e5 !== T || t3.capture !== e5.capture || t3.once !== e5.once || t3.passive !== e5.passive, n5 = t3 !== T && (e5 === T || o6);
    o6 && this.element.removeEventListener(this.name, this, e5), n5 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
  }
  handleEvent(t3) {
    var i5, s5;
    typeof this._$AH == "function" ? this._$AH.call((s5 = (i5 = this.options) === null || i5 === void 0 ? void 0 : i5.host) !== null && s5 !== void 0 ? s5 : this.element, t3) : this._$AH.handleEvent(t3);
  }
};
var L = class {
  constructor(t3, i5, s5) {
    this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i5, this.options = s5;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t3) {
    V(this, t3);
  }
};
var z = window.litHtmlPolyfillSupport;
z == null || z(P, N), ((t2 = globalThis.litHtmlVersions) !== null && t2 !== void 0 ? t2 : globalThis.litHtmlVersions = []).push("2.0.2");

// node_modules/lit-element/lit-element.js
var l3;
var o4;
var s4 = class extends a {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
  }
  createRenderRoot() {
    var t3, e5;
    const i5 = super.createRenderRoot();
    return (t3 = (e5 = this.renderOptions).renderBefore) !== null && t3 !== void 0 || (e5.renderBefore = i5.firstChild), i5;
  }
  update(t3) {
    const i5 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Dt = w(i5, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t3;
    super.connectedCallback(), (t3 = this._$Dt) === null || t3 === void 0 || t3.setConnected(true);
  }
  disconnectedCallback() {
    var t3;
    super.disconnectedCallback(), (t3 = this._$Dt) === null || t3 === void 0 || t3.setConnected(false);
  }
  render() {
    return b;
  }
};
s4.finalized = true, s4._$litElement$ = true, (l3 = globalThis.litElementHydrateSupport) === null || l3 === void 0 || l3.call(globalThis, { LitElement: s4 });
var n4 = globalThis.litElementPolyfillSupport;
n4 == null || n4({ LitElement: s4 });
((o4 = globalThis.litElementVersions) !== null && o4 !== void 0 ? o4 : globalThis.litElementVersions = []).push("3.0.2");

// src/common/LiveDraggable.ts
var LiveDraggable = class extends s4 {
  constructor() {
    super();
    this.zIndex = 10;
    this.xOffset = 0;
    this.yOffset = 0;
    this.currentX = 0;
    this.currentY = 0;
    this.initialX = 0;
    this.initialY = 0;
    this.isDraggable = true;
  }
  resetPosition() {
    this.zIndex = 10;
    this.xOffset = 0;
    this.yOffset = 0;
    this.currentX = 0;
    this.currentY = 0;
    this.initialX = 0;
    this.initialY = 0;
    this.setAttribute("style", "");
  }
  set pos(pos) {
    if (pos) {
      this._pos = pos;
    } else {
      this._pos = { x: 0, y: 0 };
    }
    this.currentX = this.xOffset = this.initialX = this._pos.x;
    this.currentY = this.yOffset = this.initialY = this._pos.y;
    this.moveTo(this._pos);
  }
  get pos() {
    return this._pos;
  }
  moveTo(pos) {
    this.setAttribute("style", `transform: translate(${pos.x}px, ${pos.y}px); z-index: ${this.zIndex}`);
  }
  onDragStart(e5) {
    console.log(e5);
  }
  onDragEnd(e5) {
    this._pos = { x: Math.round(this.currentX), y: Math.round(this.currentY) };
    console.log("new pos", this._pos);
  }
  onDrag(e5) {
    this.setAttribute("style", `transform: translate(${this.currentX}px, ${this.currentY}px);`);
  }
  onClick(e5) {
    console.log("inner ckick", e5);
  }
  refreshPos() {
    this.onDragEnd();
  }
};

// node_modules/uuid/dist/esm-browser/rng.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}

// node_modules/uuid/dist/esm-browser/regex.js
var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

// node_modules/uuid/dist/esm-browser/validate.js
function validate(uuid) {
  return typeof uuid === "string" && regex_default.test(uuid);
}
var validate_default = validate;

// node_modules/uuid/dist/esm-browser/stringify.js
var byteToHex = [];
for (i5 = 0; i5 < 256; ++i5) {
  byteToHex.push((i5 + 256).toString(16).substr(1));
}
var i5;
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate_default(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
var stringify_default = stringify;

// node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i5 = 0; i5 < 16; ++i5) {
      buf[offset + i5] = rnds[i5];
    }
    return buf;
  }
  return stringify_default(rnds);
}
var v4_default = v4;

// src/common/interfaces/IWidgetCommunication.ts
var FLZ_WIDGET_EVENT_TYPE = "flz-widget-event-type";
var FLZ_EVENTS_ACTIONS = {
  ctaClick: "ctaClick",
  ctaSubmit: "ctaSubmit",
  consentGiven: "consentGiven",
  stopTrackingForVisit: "stopTrackingForVisit",
  openItemViewer: "openItemViewer",
  closeItemViewer: "closeItemViewer",
  itemViewerLoaded: "itemViewerLoaded",
  liveEventMounted: "liveEventMounted"
};

// src/common/FlzEvent.ts
var FlzEvent = class extends Event {
  constructor(emitter, action, payload, cb) {
    super(FLZ_WIDGET_EVENT_TYPE, { bubbles: true, composed: true });
    this.action = action;
    this.payload = payload;
    this.emitter = emitter;
    this.callback = cb;
  }
};

// src/common/LiveWidget.ts
var LiveWidget = class extends LiveDraggable {
  constructor() {
    super();
    this._widgetId = v4_default();
  }
  willUpdate(_changedProperties) {
    super.willUpdate(_changedProperties);
    this.dispatchEvent(new CustomEvent("widget-update", { detail: {
      widgetEl: this
    }, bubbles: true, composed: true }));
  }
  set config(data) {
    this._widgetId = data.id;
    this._config = data;
    this._data = data == null ? void 0 : data.data;
    this.requestUpdate();
  }
  get config() {
    return this._config;
  }
  set data(x2) {
    this._data = x2;
    this.requestUpdate();
  }
  get data() {
    return this._data;
  }
  get widgetId() {
    return this._widgetId;
  }
  emit(action, payload, cb) {
    this.dispatchEvent(new FlzEvent(this, action, payload, cb));
  }
  incomingEvents(e5) {
    return;
  }
};

// src/common/LiveWidgetEdit.ts
var LiveWidgetEdit = class extends s4 {
  set widget(w2) {
    this._widget = w2;
    this.data = w2.data;
  }
  get widget() {
    return this._widget;
  }
  set propertyPath(path) {
    this._propPath = path;
  }
  get propertyPath() {
    return this._propPath;
  }
  get widgetId() {
    return this._widget.id;
  }
  updateWidget() {
    this._widget.data = this._data;
  }
  set data(x2) {
    this._data = x2;
  }
  get data() {
    return this._data;
  }
};

// src/common/LiveWidgetComponentEdit.ts
var import_lodash2 = __toModule(require_lodash());
var LiveWidgetComponentEdit = class extends LiveWidgetEdit {
  set propertyPath(path) {
    this._propPath = path;
  }
  get propertyPath() {
    return this._propPath;
  }
  firstUpdated() {
    this.data = import_lodash2.default.get(this.widget.data, this.propertyPath);
  }
};

// src/common/makeDraggable.ts
function makeDragElement(dom, el, handleEl) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (handleEl) {
    dom.querySelector(handleEl).onmousedown = dragMouseDown;
  } else {
    el.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e5) {
    e5 = e5 || window.event;
    e5.preventDefault();
    pos3 = e5.clientX;
    pos4 = e5.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e5) {
    e5 = e5 || window.event;
    e5.preventDefault();
    pos1 = pos3 - e5.clientX;
    pos2 = pos4 - e5.clientY;
    pos3 = e5.clientX;
    pos4 = e5.clientY;
    const newTop = el.offsetTop - pos2;
    const newLeft = el.offsetLeft - pos1;
    if (newTop <= 0 || newTop >= window.innerHeight - el.offsetHeight) {
      return;
    }
    if (newLeft <= 0 || newLeft >= window.innerWidth - el.offsetWidth) {
      return;
    }
    el.style.top = newTop + "px";
    el.style.left = newLeft + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// node_modules/@lit/reactive-element/decorators/property.js
var i3 = (i5, e5) => e5.kind === "method" && e5.descriptor && !("value" in e5.descriptor) ? __spreadProps(__spreadValues({}, e5), { finisher(n5) {
  n5.createProperty(e5.key, i5);
} }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e5.key, initializer() {
  typeof e5.initializer == "function" && (this[e5.key] = e5.initializer.call(this));
}, finisher(n5) {
  n5.createProperty(e5.key, i5);
} };
function e4(e5) {
  return (n5, t3) => t3 !== void 0 ? ((i5, e6, n6) => {
    e6.constructor.createProperty(n6, i5);
  })(e5, n5, t3) : i3(e5, n5);
}

// node_modules/@lit/reactive-element/decorators/base.js
var o5 = ({ finisher: e5, descriptor: t3 }) => (o6, n5) => {
  var r4;
  if (n5 === void 0) {
    const n6 = (r4 = o6.originalKey) !== null && r4 !== void 0 ? r4 : o6.key, i5 = t3 != null ? { kind: "method", placement: "prototype", key: n6, descriptor: t3(o6.key) } : __spreadProps(__spreadValues({}, o6), { key: n6 });
    return e5 != null && (i5.finisher = function(t4) {
      e5(t4, n6);
    }), i5;
  }
  {
    const r5 = o6.constructor;
    t3 !== void 0 && Object.defineProperty(o6, n5, t3(n5)), e5 == null || e5(r5, n5);
  }
};

// node_modules/@lit/reactive-element/decorators/query.js
function i4(i5, n5) {
  return o5({ descriptor: (o6) => {
    const t3 = { get() {
      var o7, n6;
      return (n6 = (o7 = this.renderRoot) === null || o7 === void 0 ? void 0 : o7.querySelector(i5)) !== null && n6 !== void 0 ? n6 : null;
    }, enumerable: true, configurable: true };
    if (n5) {
      const n6 = typeof o6 == "symbol" ? Symbol() : "__" + o6;
      t3.get = function() {
        var o7, t4;
        return this[n6] === void 0 && (this[n6] = (t4 = (o7 = this.renderRoot) === null || o7 === void 0 ? void 0 : o7.querySelector(i5)) !== null && t4 !== void 0 ? t4 : null), this[n6];
      };
    }
    return t3;
  } });
}

// src/common/FloatEditor.ts
var FloatEditor = class extends s4 {
  constructor(el) {
    super();
    this.isLoading = true;
    this.childEl = el;
  }
  firstUpdated() {
    this.isLoading = false;
    this.body.appendChild(this.childEl);
    makeDragElement(this.shadowRoot, this, "#handle");
    setTimeout(() => {
      this.moveToPos();
      this.style.opacity = "1";
    });
  }
  close(e5) {
    e5.stopPropagation();
    this.remove();
  }
  setStartPos(x2, y2) {
    this.x = x2;
    this.y = y2;
  }
  moveToPos() {
    if (!this.x || !this.y) {
      return;
    }
    const rect = this.getBoundingClientRect();
    const width = rect.width;
    const viewPortWidth = document.body.getBoundingClientRect().width;
    let newX = this.x - width / 2;
    if (newX < 5) {
      newX = 5;
    } else if (newX + width > viewPortWidth - 5) {
      newX = viewPortWidth - width - 5;
    }
    this.style.top = `${this.y + 30 + window.scrollY}px`;
    this.style.left = `${newX}px`;
  }
  render() {
    return p`
            ${this.isLoading ? p`<div class="loading"></div>` : ""}
            <div id="handle">
                <span class="conf-name">
                    ${this.childEl.widget.tagName.toLowerCase()} ${this.childEl.id ? `#${this.childEl.id}` : ""}
                </span>
                <div class="close" @click=${this.close}>X</div>
            </div>
            <div id="body"></div>
        `;
  }
};
FloatEditor.styles = [
  r`
          :host {
            --floatBoxShadow: 0.1px 1.1px 1.9px -13px rgba(0, 0, 0, 0.045), 0.3px 2.5px 4.7px -13px rgba(0, 0, 0, 0.065),
            0.5px 4.8px 8.8px -13px rgba(0, 0, 0, 0.08), 0.9px 8.5px 15.6px -13px rgba(0, 0, 0, 0.095),
            1.7px 15.9px 29.2px -13px rgba(0, 0, 0, 0.115), 4px 38px 70px -13px rgba(0, 0, 0, 0.16);

            --floatBoxBorder: thin solid rgb(103 103 103 / 78%);
            --outlineShadow: 1px 1px 3px #ccc;

            resize: both;
            pointer-events: all;

            opacity: 0;
            transition: opacity 500ms ease-in;
            position: absolute;
            top: 100px;
            left: 150px;
            z-index: 110;
            box-shadow: var(--floatBoxShadow);
            background-color: rgb(var(--sys-color-neutral-0));
            //overflow: hidden;
            min-width: 235px;
            min-height: 150px;

            overflow: visible;
            max-width: 300px;
          }

          .close {
            font-size: 14px;
            cursor: pointer;
            color: rgb(var(--sys-color-neutral-500));
            border: none;
            background: none;

            &:hover {
              color: black;
            }
          }

          .save {
            position: absolute;
            right: 60px;
            font-size: 14px;
            cursor: pointer;
            color: rgb(var(--sys-color-neutral-500));
            border: none;
            background: none;
          }

          .save[disabled] {
            cursor: default;
            color: gray;
          }

          #handle {
            background-color: rgb(var(--sys-color-primary-100));
            height: 2em;
            display: flex;
            align-items: center;
            padding-left: 10px;
            padding-right: 10px;
            justify-content: space-between;
          }

          #body {
            padding: var(--fz-spacing-small);
          }
          .loading {
            width: 100%;
            height: calc(100% - 2em);
            background: var(--loading-bg-color, rgba(0, 0, 0, 0.4));
            /* min-height: 100px; */
            position: absolute;
            z-index: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .loading::after {
            content: "autorenew";
            font-family: "Material Icons", sans-serif;
            font-size: 40px;
            text-shadow: 0 0 14px #fff, 0 0 14px #fff, 0 0 20px #fff;
            animation: rotating 2s ease-in-out infinite;
          }
          @keyframes rotating {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .btn {
            margin: 0 1em;
            width: 10%;
            text-align: center;
          }

          input,
          select {
            background: transparent;
            border: none;
            color: rgb(var(--sys-color-neutral-500));
            outline: none;
            padding: 0.6em;
            margin: 0.4em;
            width: 40%;
          }

          input:focus {
            outline: none;
            border: 1px thin var(--subCardSelectedColor);
            background: var(--subCardBgColor);
          }
        `
];
__decorateClass([
  i4("#body")
], FloatEditor.prototype, "body", 2);
__decorateClass([
  e4()
], FloatEditor.prototype, "isLoading", 2);
export {
  Analytics,
  CampaignElementsTypes,
  ClientSDK,
  Designer,
  DesignerEventTypes,
  EventSources,
  FLZ_EVENTS_ACTIONS,
  FLZ_WIDGET_EVENT_TYPE,
  FetchService,
  FloatEditor,
  FlzEvent,
  ImageBankCategory,
  ImageBankType,
  ImageGalleryTypes,
  LiveBoardEventTypes,
  LiveDraggable,
  LiveWidget,
  LiveWidgetComponentEdit,
  LiveWidgetEdit,
  Liveboard,
  fileUpload,
  isObjsEqual,
  keysToSnakeCase,
  makeDragElement
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
