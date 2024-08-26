'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/* eslint-disable */
var prettierRules = function (rules) {
    if (rules === void 0) { rules = {}; }
    return (__assign({ printWidth: 120, proseWrap: 'never', semi: true, singleQuote: true, jsxSingleQuote: false, bracketSpacing: true, bracketSameLine: false, arrowParens: 'always', insertPragma: false, tabWidth: 2, useTabs: false, endOfLine: 'lf', trailingComma: 'all', htmlWhitespaceSensitivity: 'ignore', 
        // 每个文件格式化的范围是文件的全部内容
        rangeStart: 0, rangeEnd: Infinity, quoteProps: 'as-needed' }, (rules !== null && rules !== void 0 ? rules : {})));
};
var eslintRules = function (skipWords, rules) {
    if (skipWords === void 0) { skipWords = []; }
    if (rules === void 0) { rules = {}; }
    return (__assign({ 'zob/comment': 'error', '@typescript-eslint/ban-ts-comment': 'off', 'no-useless-escape': 'warn', 'prettier/prettier': [
            'error',
            {
            // trailingComma: 'all',
            // arrowParens: 'always',
            // htmlWhitespaceSensitivity: 'ignore',
            },
            { usePrettierrc: true },
        ], 'no-undef': ['error'], 'spaced-comment': ['error', 'always'], 'space-before-blocks': ['error', 'always'], 'no-multiple-empty-lines': ['error', { max: 5 }], 'no-mixed-spaces-and-tabs': ['error', false], 'comma-dangle': ['error', 'only-multiline'], indent: ['error', 2, { SwitchCase: 1 }], 'linebreak-style': ['error', 'unix'], quotes: ['error', 'single'], semi: ['error', 'always'], 
        // 'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }], // @typescript-eslint/no-unused-vars
        '@typescript-eslint/no-explicit-any': ['off'], 'no-irregular-whitespace': [
            'error',
            { skipStrings: true, skipComments: true, skipRegExps: true, skipTemplates: true },
        ], 'no-multi-spaces': ['error', { ignoreEOLComments: true }], 'no-trailing-spaces': ['error', { skipBlankLines: false }], 'brace-style': ['error', '1tbs', { allowSingleLine: false }], 'key-spacing': ['warn', { beforeColon: false, afterColon: true }], 'object-curly-spacing': ['error', 'always'], 'array-bracket-spacing': ['error', 'never'], 'max-lines': ['error', 800], 'max-statements': ['error', 100], 'spellcheck/spell-checker': [
            // 拼写检查警告
            'warn',
            {
                comments: false,
                strings: true,
                identifiers: true,
                lang: 'en_US',
                skipWords: __spreadArray([
                    // npm i modules-words // 常用词库
                    'javascript',
                    'debounce',
                    'pathname',
                    'minify',
                    'charset',
                    'unmount',
                    'poweroff',
                    'resize',
                    'linux',
                    'darwin',
                    'resizable',
                    'renderer',
                    'biugle',
                    'unordered',
                    'dropdown',
                    'checkbox',
                    'tooltip',
                    'namespaced',
                    'echarts',
                    'onopen',
                    'formatter',
                    'xlocation',
                    'xcall',
                    'utils',
                    'cordova',
                    'ionics',
                    'lodash',
                    'dayjs',
                    'splashscreen',
                    'uglify',
                    'jsonp',
                    'async',
                    'bcrypt',
                    'werbs',
                    'navbar',
                    'popover',
                    'substr',
                    'zindex',
                    'viewport',
                    'validator',
                    'webserver',
                    'whitelist',
                    'runtime',
                    'proto',
                    'popup',
                    'polyfill',
                    'preload',
                    'mixin',
                    'middleware',
                    'lifecycle',
                    'linter',
                    'hostname',
                    'dirname',
                    'autocomplete',
                    'sourcemap',
                    'dicts',
                    'undef',
                    'asyncfunction',
                    'xxxxx',
                    'keydown',
                    'keyup',
                    'keypress',
                    'webkit',
                    'uint8',
                    'radix',
                    'storage',
                    'favicon',
                    'compat',
                    'keyframes',
                    'padlen',
                    'tring',
                    'xhtml',
                    'xmind',
                    'decrypt',
                    'decrypted',
                    'multipart',
                    'contextmenu',
                    'loadend',
                    'callee',
                    'slugify',
                    'ciphertext',
                    'urlencoded',
                    'cancelable',
                    'ascii',
                    'unicode',
                    'rollup',
                    'axios',
                    'redux',
                    'unlink',
                    'macos',
                    'submenu',
                    'nodemon',
                    'hhiiss',
                    'hhmmss',
                    'hhmmdd',
                    'whitesmoke',
                    'esbuild',
                    'commonjs',
                    'preset',
                    'presets',
                    'browsers',
                    'iframe',
                    'contenttype',
                    'immer',
                    'ahooks',
                    'devtool',
                    'devtools',
                    'register',
                    'unregister',
                    'maximize',
                    'unmaximize',
                    'unminimize',
                    'minimize'
                ], __read((skipWords !== null && skipWords !== void 0 ? skipWords : [])), false),
                skipIfMatch: [
                    // http url
                    'http://[^s]*',
                    // Auxiliary werbs
                    // see: https://github.com/aotaduy/eslint-plugin-spellcheck/issues/7
                    // eslint-disable-next-line quotes
                    "(\\s|^)\\w+'t(\\s|$)",
                    // ordinals
                    // https://github.com/aotaduy/eslint-plugin-spellcheck/issues/8
                    '(\\s|^|\\w+)\\d+(st|nd|rd|th)(\\s|[A-Z][a-zA-Z]+|$)',
                    // pre/post prefixes both in kebab case and camel case
                    '(\\s|^)(pre|post)([-\\w]|[A-Z])[a-zA-Z]+(\\s|$)',
                    // xml tags
                    '<(?:/)?[\\w-]+>',
                    // cryptographic octal hashes
                    '^[0-9a-f]{5,999}$',
                    // hex colors
                    '^#[0-9a-f]{3,6}$',
                    // For MIME Types
                    '^[-\\w]+/[-\\w\\.]+$',
                ],
                skipWordIfMatch: [
                    '^foobar.*$', // words that begin with foobar will not be checked
                ],
                minLength: 5, // >=5 个字符以上才监测
            },
        ], 'import/first': ['error'], 'import/exports-last': ['error'], 'import/newline-after-import': ['error'], 'import/no-duplicates': ['error'], 'import/order': ['error', { 'newlines-between': 'never' }] }, (rules !== null && rules !== void 0 ? rules : {})));
};
var sortJSON = function (obj) {
    // 去重并获取对象的键数组
    var keys = Object.keys(obj);
    // 按键的首字符进行排序
    var sortedKeys = keys.sort(function (a, b) {
        var aKey = a[0];
        var bKey = b[0];
        return aKey.localeCompare(bKey);
    });
    // 构建分类和排序后的对象
    var sortedAndGroupedObject = sortedKeys.reduce(function (result, key) {
        var firstChar = key[0];
        if (!result[firstChar]) {
            result[firstChar] = [];
        }
        result[firstChar].push(key);
        return result;
    }, {});
    // 在每个分类中按键的长度进行排序
    for (var group in sortedAndGroupedObject) {
        sortedAndGroupedObject[group].sort(function (a, b) { return a.length - b.length; });
    }
    // 拼接分类后的键数组
    var finalKeys = Object.values(sortedAndGroupedObject).flat();
    // 构建排序后的对象
    var sortedObject = finalKeys.reduce(function (result, key) {
        result[key] = obj[key];
        return result;
    }, {});
    // 转换为 JSON 字符串并输出
    var jsonString = JSON.stringify(sortedObject);
    return jsonString;
};

/*
 * @Author: HxB
 * @Date: 2022-04-26 14:10:35
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-01-17 18:09:40
 * @Description: 类型校验等函数
 * @FilePath: \js-xxx\src\Types\index.ts
 */
/**
 * 获取变量类型
 * @example
 * getType(1); /// 'number'
 * getType(async function(){}); /// 'asyncfunction'
 * @param variable 变量
 * @returns
 * @category Types-类型相关
 */
function getType(variable) {
    return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
}
/**
 * 任意值转换为字符串
 * @example
 * toStr({}); /// '{}'
 * toStr([1, 2]); /// '[1,2]'
 * toStr(null); /// ''
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
function toStr(value) {
    if (value == null) {
        return '';
    }
    if (typeof value == 'object') {
        return JSON.stringify(value);
    }
    return value.toString();
}
/**
 * 任意值转换为数字
 * @example
 * toNum({}); /// 0
 * toNum([2]); /// 2
 * toNum('-123'); /// -123
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
function toNum(value) {
    value = Number(value);
    return isNaN$1(value) ? 0 : value;
}
/**
 * 任意值转换为布尔类型
 * @example
 * toBool(0); /// true
 * toBool(''); /// true
 * toBool('', [0, '']); /// false
 * toBool(0, [0, '']); /// false
 * toBool('0'); /// true
 * toBool(1); /// true
 * toBool('false'); /// false
 * toBool('null'); /// false
 * toBool('undefined'); /// false
 * toBool('NaN'); /// false
 * toBool(null); /// false
 * @param value 值
 * @param falseList 判断为 false 的值列表
 * @returns
 * @category Types-类型相关
 */
function toBool(value, falseList) {
    if (falseList === void 0) { falseList = []; }
    if (__spreadArray(['false', 'null', 'undefined', 'NaN'], __read(falseList), false).includes(value)) {
        return false;
    }
    if (value === '') {
        return true;
    }
    if (value === 0) {
        return true;
    }
    return !!value;
}
/**
 * 检查字符串是否为有效的 JSON
 * @example
 * isJSON('{"name":"leo", "age":20}'); /// true
 * isJSON('{"name":"leo", age:"20"}'); /// false
 * isJSON(null); /// true
 * @param str 字符串
 * @returns
 * @category Types-类型相关
 */
function isJSON(str) {
    try {
        JSON.parse(str);
        return true;
    }
    catch (e) {
        return false;
    }
}
/**
 * 检查是否为 boolean 类型
 * @example
 * isBool(true); /// true
 * isBool(null); /// false
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
function isBool(value) {
    return getType(value) === 'boolean';
}
/**
 * 检查是否 date 类型
 * @example
 * isDate(new Date()); /// true
 * isDate(null); /// false
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
function isDate(value) {
    return getType(value) === 'date';
}
/**
 * 检查是否 Invalid Date 类型
 * @example
 * isInvalidDate(new Date()); /// false
 * isInvalidDate(null); /// false
 * isInvalidDate(undefined); /// true
 * isInvalidDate(new Date('invalid date')); /// true
 * @param date 值
 * @returns
 * @category Types-类型相关
 */
function isInvalidDate(date) {
    return isNaN$1(new Date(date).getTime());
}
/**
 * 检查是否字符串类型
 * @example
 * isStr('test'); /// true
 * isStr(null); /// false
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
function isStr(value) {
    return getType(value) === 'string';
}
/**
 * 检查是否 undefined
 * @example
 * isUndef(undefined); /// true
 * isUndef(null); /// false
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
function isUndef(value) {
    return getType(value) === 'undefined';
}
/**
 * 检查是否 null
 * @example
 * isNull(undefined); /// false
 * isNull(null); /// true
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
function isNull(value) {
    return getType(value) === 'null';
}
/**
 * 检查是否 number 类型
 * @example
 * isNum(NaN); /// false
 * isNum(1); /// true
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
function isNum(value) {
    return getType(value) === 'number' && !Object.is(NaN, value);
}
/**
 * 检查是否数组
 * @example
 * isArr([]); /// true
 * isArr({}); /// false
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
function isArr(value) {
    return Array.isArray(value);
}
/**
 * 检查是否对象
 * @example
 * isObj({}); /// true
 * isObj(null); /// false
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
function isObj(value) {
    return getType(value) === 'object';
}
/**
 * 检查是否为 dom 元素
 * @example
 * isElement(document.body); /// true
 * isElement(document); /// false
 * isElement({}); /// false
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
function isElement(value) {
    return !!(value && value.nodeType === 1);
}
/**
 * 检查是否为 function
 * @example
 * isFn(function(){}); /// true
 * isFn(async function(){}); /// true
 * isFn(new Promise((resolve, reject) => resolve()); /// false
 * isFn({}); /// false
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
function isFn(value) {
    var type = getType(value);
    return type === 'function' || type === 'generatorfunction' || type === 'asyncfunction';
}
/**
 * 检查是否为 Promise
 * @example
 * isPromise(function(){}); /// false
 * isPromise(async function(){}); /// false
 * isPromise(new Promise((resolve, reject) => resolve())); /// true
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
function isPromise(value) {
    return getType(value) === 'promise' || (isFn(value === null || value === void 0 ? void 0 : value.then) && isFn(value === null || value === void 0 ? void 0 : value.catch));
}
/**
 * 检查是否为 NaN
 * @example
 * isNaN(1); /// false
 * isNaN(NaN); /// true
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
function isNaN$1(value) {
    return Object.is(NaN, value);
}
/**
 * 检查是否为 Blob
 * @example
 * isBlob(new Blob()); /// true
 * isBlob(null); /// false
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
function isBlob(value) {
    return getType(value) === 'blob';
}
/**
 * 检查是否为 ArrayBuffer
 * @example
 * isArrayBuffer(new ArrayBuffer()); /// true
 * isArrayBuffer(null); /// false
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
function isArrayBuffer(value) {
    return getType(value) === 'arraybuffer';
}

/*
 * @Author: HxB
 * @Date: 2022-04-26 11:52:01
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-08-23 10:44:23
 * @Description: 数组常用函数
 * @FilePath: \js-xxx\src\Array\index.ts
 */
/**
 * 数组对象转对象，按照指定的 key 分组。
 * @example
 * data2Obj([{a: 1, b: 2}, {a: 3}, {b: 1}, {c: 1}], 'a'); /// {1: {a: 1, b: 2}, 3: {a: 3}, undefined: {c: 1}}
 * data2Obj([{a: 1, b: 'b1'}, {a: 3}, {a: 2, b: 'b2'}], 'a', 'b'); /// { '1': 'b1', '2': 'b2', '3': undefined }
 * @param sourceData 源数据
 * @param key 分组的 key
 * @param vKey 值的 key，默认为整个值。
 * @returns
 * @category Array-数组相关
 */
function data2Obj(sourceData, key, vKey) {
    var obj = {};
    if (!Array.isArray(sourceData)) {
        return obj;
    }
    sourceData.forEach(function (item) {
        obj[item[key]] = vKey ? item[vKey] : item;
    });
    return obj;
}
/**
 * 数组对象转数组值
 * @example
 * data2Arr([{a: 1, b: 2}, {a: 3}, {b: 1}], 'a'); /// [1, 3]
 * @param sourceData 源数据
 * @param key 取值的 key
 * @returns
 * @category Array-数组相关
 */
function data2Arr(sourceData, key) {
    var _a;
    var arr = [];
    if (sourceData.length === 0) {
        return arr;
    }
    for (var k in sourceData) {
        ((_a = sourceData[k]) === null || _a === void 0 ? void 0 : _a[key]) && arr.push(sourceData[k][key]);
    }
    return arr;
}
/**
 * 数组对象转换为对象数组，需确保源数据已经去重哦，否则会暴力去重，最后一条数据有效。
 * 一般图表类插件需要此类转换
 * @example
 * const data = [{ id: 1, name: '张三', score: 98, remark: '语文成绩' }, { id: 3, name: '王五', score: 98 }, { id: 3, name: '王五', score: 99, remark: '最后一条有效成绩' }, { id: 2, name: '李四', score: 100 }];
 * arrObj2objArr(data, 'id'); /// {"id": [1, 2, 3], "name": ["张三", "李四", "王五"], "score": [98, 100, 99], "remark": ["语文成绩", null, "最后一条有效成绩"]}
 * @param data 源数据
 * @param key 用于转换的 key
 * @returns
 * @category Array-数组相关
 */
function arrObj2objArr(data, key) {
    var result = {};
    try {
        var keys_1 = [];
        data.forEach(function (item) {
            var itemKeys = Object.keys(item);
            keys_1 = itemKeys.length > keys_1.length ? itemKeys : keys_1;
        });
        unique(data, function (a, b) { return a[key] === b[key]; })
            .sort(sortBy(key))
            .forEach(function (item) {
            keys_1.forEach(function (objKey) {
                var _a;
                if (!result[objKey]) {
                    result[objKey] = [];
                }
                result[objKey].push((_a = item[objKey]) !== null && _a !== void 0 ? _a : null);
            });
        });
    }
    catch (e) {
        console.log('js-xxx:arrObj2objArrError--->', e);
    }
    return result;
}
/**
 * 数组去重
 * @example
 * unique([1, 2, 3, 1, 2, 3]); /// [1, 2, 3]
 * unique([{id: 1, value: 'hello'}, {id: 2, value: 'world'}, {id: 2, value: 'world', others: true}], (a, b) => a.id === b.id); /// [id1, id2 带 true]
 * @param arr 数组
 * @param filter 过滤逻辑
 * @returns
 * @category Array-数组相关
 */
function unique(arr, filter) {
    if (arr.length == 1) {
        return arr;
    }
    if (!filter) {
        filter = function (a, b) { return a === b; };
    }
    var len = arr.length;
    return arr.filter(function (item, idx, arr) {
        while (++idx < len) {
            if (filter(item, arr[idx]))
                return false;
        }
        // arr.indexOf(item) === idx;
        return true;
    });
}
/**
 * 返回排序回调函数(支持中文，不支持一级数据与混合类型。)
 * @example
 * sortCallBack('createDt', true); /// 按照 createDt 升序排列
 * const arr = [{name: '666'}, {name: '333'}]
 * arr.sort(sortCallBack('name')); /// [{name: '333'}, {name: '666'}]
 * arr.sort(sortCallBack('name', false)); /// [{name: '666'}, {name: '333'}]
 * @param key 排序的字段
 * @param isAscend 是否升序
 * @returns
 * @category Array-数组相关
 */
function sortCallBack(key, isAscend) {
    if (isAscend === void 0) { isAscend = true; }
    return function (a, b) { return (a[key] > b[key] ? (isAscend ? 1 : -1) : isAscend ? -1 : 1); };
}
/**
 * 数组乱序
 * @example
 * arrayShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); /// [5, 9, 1, 10, 2, 6, 4, 8, 3, 7]
 * @param arr 数组
 * @returns
 * @category Array-数组相关
 */
function arrayShuffle(arr) {
    return arr.sort(function () { return Math.random() - 0.5; });
}
/**
 * 数组排序(支持多条件排序+中文)
 * @example
 * arraySort(["a", "3", 1, 2, "b"]); /// [1, 2, '3', 'a', 'b']
 * arraySort(["a", "3", 1, 2, "b"], 'asc'); /// [1, 2, '3', 'a', 'b']
 * arraySort(["a", "3", 1, 2, "b"], false); /// ['b', 'a', '3', 2, 1]
 * arraySort(["a", "3", 1, 2, "b"], 'desc'); /// ['b', 'a', '3', 2, 1]
 * let arr1 = [{ a: 'a', b: 'b', c: '张三', d: 1 }, { a: 'c', b: 'd', c: '李四', d: 2 }, { a: 'e', b: 'f', c: '王五', d: 3 }];
 * arraySort(arr1, false, 'a'); /// e - c - a
 * arraySort(arr1, false, ['d', 'c']); /// 3 - 2 - 1
 * arraySort(arr1, 'DESC', ['c']); /// 张三 - 王五 - 李四
 * @param arr 数组
 * @param type 类型
 * @param keys 关键字/集合
 * @returns
 * @category Array-数组相关
 */
function arraySort(arr, type, keys) {
    if (type === void 0) { type = 'asc'; }
    var isAscend = type == 'asc' || type == 'ASC' || type == true;
    try {
        if (!keys) {
            return arr.sort(function (a, b) {
                return isAscend ? toStr(a).localeCompare(toStr(b)) : toStr(b).localeCompare(toStr(a));
            });
        }
        if (isStr(keys)) {
            return arr.sort(function (a, b) {
                var aSort = toStr(a[keys]);
                var bSort = toStr(b[keys]);
                return isAscend ? aSort.localeCompare(bSort) : bSort.localeCompare(aSort);
            });
        }
        return arr.sort(function (a, b) {
            var _a, _b;
            var aSort = (_a = keys === null || keys === void 0 ? void 0 : keys.reduce(function (total, currentValue) { return toStr(total).concat(a[currentValue]); }, '')) !== null && _a !== void 0 ? _a : '0';
            var bSort = (_b = keys === null || keys === void 0 ? void 0 : keys.reduce(function (total, currentValue) { return toStr(total).concat(b[currentValue]); }, '')) !== null && _b !== void 0 ? _b : '0';
            return isAscend ? aSort.localeCompare(bSort) : bSort.localeCompare(aSort);
        });
    }
    catch (e) {
        return arr;
    }
}
/**
 * 返回排序回调函数(也支持中文、多个字段、混合类型)
 * @example
 * ['a', '3', 1, 2, 'b'].sort(sortBy('', false)); /// ['b', 'a', '3', 2, 1]
 * ['a', '3', 1, 2, 'b'].sort(sortBy()); /// [1, 2, '3', 'a', 'b']
 * sortBy('createDt'); /// 按照 createDt 升序排列
 * sortBy(['name', 'age'], false); /// 按照 name + age 降序排列
 * @param keys 排序的字段/集合
 * @param isAscend 是否升序
 * @returns
 * @category Array-数组相关
 */
function sortBy(keys, isAscend) {
    if (isAscend === void 0) { isAscend = true; }
    if (!keys) {
        return function (a, b) {
            return isAscend ? toStr(a).localeCompare(toStr(b)) : toStr(b).localeCompare(toStr(a));
        };
    }
    var transferKeys = isStr(keys) ? [keys] : keys;
    return function (a, b) {
        var _a, _b;
        var aSort = (_a = transferKeys === null || transferKeys === void 0 ? void 0 : transferKeys.reduce(function (total, currentValue) { return toStr(total).concat(a[currentValue]); }, '')) !== null && _a !== void 0 ? _a : '0';
        var bSort = (_b = transferKeys === null || transferKeys === void 0 ? void 0 : transferKeys.reduce(function (total, currentValue) { return toStr(total).concat(b[currentValue]); }, '')) !== null && _b !== void 0 ? _b : '0';
        return isAscend ? aSort.localeCompare(bSort) : bSort.localeCompare(aSort);
    };
}
/**
 * 填充数组空值，取前后值得中间数。
 * @example
 * arrayFill([1, undefined, 3, undefined, 4]); /// [1, 2, 3, 3.5, 4]
 * arrayFill([1, undefined, 3, undefined, 4], 0); ///  [1, 2, 3, 4, 4]
 * arrayFill([1, undefined, 3, undefined, 10.55], 2); /// [1, 2, 3, 6.78, 10.55]
 * @param arr 数组
 * @param n 保留小数位
 * @returns
 * @category Array-数组相关
 */
function arrayFill(arr, n) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            // 寻找前一个非空值的索引
            var prevIndex = i - 1;
            while (!arr[prevIndex]) {
                prevIndex--;
            }
            // 寻找后一个非空值的索引
            var nextIndex = i + 1;
            while (!arr[nextIndex]) {
                nextIndex++;
            }
            // 计算前后两个非空值的中间值
            var prevValue = arr[prevIndex];
            var nextValue = arr[nextIndex];
            var middleValue = (prevValue + nextValue) / 2;
            result.push(Number(n === undefined ? middleValue : Number(middleValue).toFixed(n)));
        }
        else {
            result.push(arr[i]);
        }
    }
    return result;
}

/*
 * @Author: HxB
 * @Date: 2022-04-26 16:29:18
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-08-23 10:38:45
 * @Description: Cookies 常用函数
 * @FilePath: \js-xxx\src\Cookies\index.ts
 */
/**
 * Get Cookie
 * @example
 * getCookie('name'); /// 获取 name 对应的 Cookie 值
 * @param key Cookie key
 * @returns
 * @category Storage-存储相关
 */
function getCookie(key) {
    var reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
    // @ts-ignore
    var arr = document.cookie.match(reg) ? unescape(document.cookie.match(reg)[2]) : null;
    return arr;
}
/**
 * Set Cookie
 * @example
 * setCookie('name', 'value', 1); /// 设置 name 对应的 Cookie 值
 * @param key Cookie key
 * @param value Cookie value
 * @param expires Cookie expires
 * @returns
 * @category Storage-存储相关
 */
function setCookie(key, value, expires) {
    // 没有设置有效期，默认有效期是 30 天。
    expires = expires || 30;
    // 获取当前日期
    var exp = new Date();
    // 设置过期日期
    exp.setTime(exp.getTime() + expires * 24 * 60 * 60 * 1000);
    document.cookie = key + '=' + escape(value) + ';expires=' + exp.toUTCString() + ';path=/';
}
/**
 * Remove Cookie
 * @example
 * removeCookie('name'); /// 删除 name 对应的 Cookie
 * @param key Cookie key
 * @returns
 * @category Storage-存储相关
 */
function removeCookie(key) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cVal = getCookie(key);
    if (cVal !== null) {
        document.cookie = key + '=' + cVal + ';expires=' + exp.toUTCString() + ';path=/';
    }
}
/**
 * Clear Cookie
 * @example
 * clearCookies(); /// 删除所有的 Cookie
 * @returns
 * @category Storage-存储相关
 */
function clearCookies() {
    document.cookie
        .split(';')
        .forEach(function (cookie) {
        return (document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, "=;expires=".concat(new Date(0).toUTCString(), ";path=/")));
    });
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire (path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var cryptoJs = {exports: {}};

var core = {exports: {}};

(function (module, exports) {
(function (root, factory) {
	{
		// CommonJS
		module.exports = factory();
	}
}(commonjsGlobal, function () {

	/*globals window, global, require*/

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined$1) {

	    var crypto;

	    // Native crypto from window (Browser)
	    if (typeof window !== 'undefined' && window.crypto) {
	        crypto = window.crypto;
	    }

	    // Native crypto in web worker (Browser)
	    if (typeof self !== 'undefined' && self.crypto) {
	        crypto = self.crypto;
	    }

	    // Native crypto from worker
	    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
	        crypto = globalThis.crypto;
	    }

	    // Native (experimental IE 11) crypto from window (Browser)
	    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
	        crypto = window.msCrypto;
	    }

	    // Native crypto from global (NodeJS)
	    if (!crypto && typeof commonjsGlobal !== 'undefined' && commonjsGlobal.crypto) {
	        crypto = commonjsGlobal.crypto;
	    }

	    // Native crypto import via require (NodeJS)
	    if (!crypto && typeof commonjsRequire === 'function') {
	        try {
	            crypto = require('crypto');
	        } catch (err) {}
	    }

	    /*
	     * Cryptographically secure pseudorandom number generator
	     *
	     * As Math.random() is cryptographically not safe to use
	     */
	    var cryptoSecureRandomInt = function () {
	        if (crypto) {
	            // Use getRandomValues method (Browser)
	            if (typeof crypto.getRandomValues === 'function') {
	                try {
	                    return crypto.getRandomValues(new Uint32Array(1))[0];
	                } catch (err) {}
	            }

	            // Use randomBytes method (NodeJS)
	            if (typeof crypto.randomBytes === 'function') {
	                try {
	                    return crypto.randomBytes(4).readInt32LE();
	                } catch (err) {}
	            }
	        }

	        throw new Error('Native crypto module could not be used to get secure random number.');
	    };

	    /*
	     * Local polyfill of Object.create

	     */
	    var create = Object.create || (function () {
	        function F() {}

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }());

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined$1) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var j = 0; j < thatSigBytes; j += 4) {
	                    thisWords[(thisSigBytes + j) >>> 2] = thatWords[j >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            for (var i = 0; i < nBytes; i += 4) {
	                words.push(cryptoSecureRandomInt());
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            var processedWords;

	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));
}(core));

var x64Core = {exports: {}};

(function (module, exports) {
(function (root, factory) {
	{
		// CommonJS
		module.exports = factory(core.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	(function (undefined$1) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var X32WordArray = C_lib.WordArray;

	    /**
	     * x64 namespace.
	     */
	    var C_x64 = C.x64 = {};

	    /**
	     * A 64-bit word.
	     */
	    C_x64.Word = Base.extend({
	        /**
	         * Initializes a newly created 64-bit word.
	         *
	         * @param {number} high The high 32 bits.
	         * @param {number} low The low 32 bits.
	         *
	         * @example
	         *
	         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
	         */
	        init: function (high, low) {
	            this.high = high;
	            this.low = low;
	        }

	        /**
	         * Bitwise NOTs this word.
	         *
	         * @return {X64Word} A new x64-Word object after negating.
	         *
	         * @example
	         *
	         *     var negated = x64Word.not();
	         */
	        // not: function () {
	            // var high = ~this.high;
	            // var low = ~this.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise ANDs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to AND with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ANDing.
	         *
	         * @example
	         *
	         *     var anded = x64Word.and(anotherX64Word);
	         */
	        // and: function (word) {
	            // var high = this.high & word.high;
	            // var low = this.low & word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise ORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to OR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ORing.
	         *
	         * @example
	         *
	         *     var ored = x64Word.or(anotherX64Word);
	         */
	        // or: function (word) {
	            // var high = this.high | word.high;
	            // var low = this.low | word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise XORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to XOR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after XORing.
	         *
	         * @example
	         *
	         *     var xored = x64Word.xor(anotherX64Word);
	         */
	        // xor: function (word) {
	            // var high = this.high ^ word.high;
	            // var low = this.low ^ word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Shifts this word n bits to the left.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftL(25);
	         */
	        // shiftL: function (n) {
	            // if (n < 32) {
	                // var high = (this.high << n) | (this.low >>> (32 - n));
	                // var low = this.low << n;
	            // } else {
	                // var high = this.low << (n - 32);
	                // var low = 0;
	            // }

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Shifts this word n bits to the right.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftR(7);
	         */
	        // shiftR: function (n) {
	            // if (n < 32) {
	                // var low = (this.low >>> n) | (this.high << (32 - n));
	                // var high = this.high >>> n;
	            // } else {
	                // var low = this.high >>> (n - 32);
	                // var high = 0;
	            // }

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Rotates this word n bits to the left.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotL(25);
	         */
	        // rotL: function (n) {
	            // return this.shiftL(n).or(this.shiftR(64 - n));
	        // },

	        /**
	         * Rotates this word n bits to the right.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotR(7);
	         */
	        // rotR: function (n) {
	            // return this.shiftR(n).or(this.shiftL(64 - n));
	        // },

	        /**
	         * Adds this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to add with this word.
	         *
	         * @return {X64Word} A new x64-Word object after adding.
	         *
	         * @example
	         *
	         *     var added = x64Word.add(anotherX64Word);
	         */
	        // add: function (word) {
	            // var low = (this.low + word.low) | 0;
	            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
	            // var high = (this.high + word.high + carry) | 0;

	            // return X64Word.create(high, low);
	        // }
	    });

	    /**
	     * An array of 64-bit words.
	     *
	     * @property {Array} words The array of CryptoJS.x64.Word objects.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    C_x64.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create();
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ]);
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ], 10);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined$1) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 8;
	            }
	        },

	        /**
	         * Converts this 64-bit word array to a 32-bit word array.
	         *
	         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
	         *
	         * @example
	         *
	         *     var x32WordArray = x64WordArray.toX32();
	         */
	        toX32: function () {
	            // Shortcuts
	            var x64Words = this.words;
	            var x64WordsLength = x64Words.length;

	            // Convert
	            var x32Words = [];
	            for (var i = 0; i < x64WordsLength; i++) {
	                var x64Word = x64Words[i];
	                x32Words.push(x64Word.high);
	                x32Words.push(x64Word.low);
	            }

	            return X32WordArray.create(x32Words, this.sigBytes);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {X64WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = x64WordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);

	            // Clone "words" array
	            var words = clone.words = this.words.slice(0);

	            // Clone each X64Word object
	            var wordsLength = words.length;
	            for (var i = 0; i < wordsLength; i++) {
	                words[i] = words[i].clone();
	            }

	            return clone;
	        }
	    });
	}());


	return CryptoJS;

}));
}(x64Core));

var libTypedarrays = {exports: {}};

(function (module, exports) {
(function (root, factory) {
	{
		// CommonJS
		module.exports = factory(core.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	(function () {
	    // Check if typed arrays are supported
	    if (typeof ArrayBuffer != 'function') {
	        return;
	    }

	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;

	    // Reference original init
	    var superInit = WordArray.init;

	    // Augment WordArray.init to handle typed arrays
	    var subInit = WordArray.init = function (typedArray) {
	        // Convert buffers to uint8
	        if (typedArray instanceof ArrayBuffer) {
	            typedArray = new Uint8Array(typedArray);
	        }

	        // Convert other array views to uint8
	        if (
	            typedArray instanceof Int8Array ||
	            (typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray) ||
	            typedArray instanceof Int16Array ||
	            typedArray instanceof Uint16Array ||
	            typedArray instanceof Int32Array ||
	            typedArray instanceof Uint32Array ||
	            typedArray instanceof Float32Array ||
	            typedArray instanceof Float64Array
	        ) {
	            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
	        }

	        // Handle Uint8Array
	        if (typedArray instanceof Uint8Array) {
	            // Shortcut
	            var typedArrayByteLength = typedArray.byteLength;

	            // Extract bytes
	            var words = [];
	            for (var i = 0; i < typedArrayByteLength; i++) {
	                words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
	            }

	            // Initialize this word array
	            superInit.call(this, words, typedArrayByteLength);
	        } else {
	            // Else call normal init
	            superInit.apply(this, arguments);
	        }
	    };

	    subInit.prototype = WordArray;
	}());


	return CryptoJS.lib.WordArray;

}));
}(libTypedarrays));

var encUtf16 = {exports: {}};

(function (module, exports) {
(function (root, factory) {
	{
		// CommonJS
		module.exports = factory(core.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * UTF-16 BE encoding strategy.
	     */
	    C_enc.Utf16 = C_enc.Utf16BE = {
	        /**
	         * Converts a word array to a UTF-16 BE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 BE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 BE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 BE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    /**
	     * UTF-16 LE encoding strategy.
	     */
	    C_enc.Utf16LE = {
	        /**
	         * Converts a word array to a UTF-16 LE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 LE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 LE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 LE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    function swapEndian(word) {
	        return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
	    }
	}());


	return CryptoJS.enc.Utf16;

}));
}(encUtf16));

var encBase64 = {exports: {}};

(function (module, exports) {
(function (root, factory) {
	{
		// CommonJS
		module.exports = factory(core.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * Base64 encoding strategy.
	     */
	    C_enc.Base64 = {
	        /**
	         * Converts a word array to a Base64 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Base64 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = this._map;

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                while (base64Chars.length % 4) {
	                    base64Chars.push(paddingChar);
	                }
	            }

	            return base64Chars.join('');
	        },

	        /**
	         * Converts a Base64 string to a word array.
	         *
	         * @param {string} base64Str The Base64 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	         */
	        parse: function (base64Str) {
	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = this._map;
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	                    reverseMap = this._reverseMap = [];
	                    for (var j = 0; j < map.length; j++) {
	                        reverseMap[map.charCodeAt(j)] = j;
	                    }
	            }

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex !== -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            return parseLoop(base64Str, base64StrLength, reverseMap);

	        },

	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
	    };

	    function parseLoop(base64Str, base64StrLength, reverseMap) {
	      var words = [];
	      var nBytes = 0;
	      for (var i = 0; i < base64StrLength; i++) {
	          if (i % 4) {
	              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
	              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
	              var bitsCombined = bits1 | bits2;
	              words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
	              nBytes++;
	          }
	      }
	      return WordArray.create(words, nBytes);
	    }
	}());


	return CryptoJS.enc.Base64;

}));
}(encBase64));

var encBase64url = {exports: {}};

(function (module, exports) {
(function (root, factory) {
	{
		// CommonJS
		module.exports = factory(core.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * Base64url encoding strategy.
	     */
	    C_enc.Base64url = {
	        /**
	         * Converts a word array to a Base64url string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @param {boolean} urlSafe Whether to use url safe
	         *
	         * @return {string} The Base64url string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
	         */
	        stringify: function (wordArray, urlSafe) {
	            if (urlSafe === undefined) {
	                urlSafe = true;
	            }
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = urlSafe ? this._safe_map : this._map;

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                while (base64Chars.length % 4) {
	                    base64Chars.push(paddingChar);
	                }
	            }

	            return base64Chars.join('');
	        },

	        /**
	         * Converts a Base64url string to a word array.
	         *
	         * @param {string} base64Str The Base64url string.
	         *
	         * @param {boolean} urlSafe Whether to use url safe
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
	         */
	        parse: function (base64Str, urlSafe) {
	            if (urlSafe === undefined) {
	                urlSafe = true;
	            }

	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = urlSafe ? this._safe_map : this._map;
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	                reverseMap = this._reverseMap = [];
	                for (var j = 0; j < map.length; j++) {
	                    reverseMap[map.charCodeAt(j)] = j;
	                }
	            }

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex !== -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            return parseLoop(base64Str, base64StrLength, reverseMap);

	        },

	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
	        _safe_map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
	    };

	    function parseLoop(base64Str, base64StrLength, reverseMap) {
	        var words = [];
	        var nBytes = 0;
	        for (var i = 0; i < base64StrLength; i++) {
	            if (i % 4) {
	                var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
	                var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
	                var bitsCombined = bits1 | bits2;
	                words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
	                nBytes++;
	            }
	        }
	        return WordArray.create(words, nBytes);
	    }
	}());


	return CryptoJS.enc.Base64url;

}));
}(encBase64url));

var md5$1 = {exports: {}};

(function (module, exports) {
(function (root, factory) {
	{
		// CommonJS
		module.exports = factory(core.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var T = [];

	    // Compute constants
	    (function () {
	        for (var i = 0; i < 64; i++) {
	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
	        }
	    }());

	    /**
	     * MD5 hash algorithm.
	     */
	    var MD5 = C_algo.MD5 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }

	            // Shortcuts
	            var H = this._hash.words;

	            var M_offset_0  = M[offset + 0];
	            var M_offset_1  = M[offset + 1];
	            var M_offset_2  = M[offset + 2];
	            var M_offset_3  = M[offset + 3];
	            var M_offset_4  = M[offset + 4];
	            var M_offset_5  = M[offset + 5];
	            var M_offset_6  = M[offset + 6];
	            var M_offset_7  = M[offset + 7];
	            var M_offset_8  = M[offset + 8];
	            var M_offset_9  = M[offset + 9];
	            var M_offset_10 = M[offset + 10];
	            var M_offset_11 = M[offset + 11];
	            var M_offset_12 = M[offset + 12];
	            var M_offset_13 = M[offset + 13];
	            var M_offset_14 = M[offset + 14];
	            var M_offset_15 = M[offset + 15];

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];

	            // Computation
	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
	            var nBitsTotalL = nBitsTotal;
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
	            );
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
	            );

	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                // Shortcut
	                var H_i = H[i];

	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    function FF(a, b, c, d, x, s, t) {
	        var n = a + ((b & c) | (~b & d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function GG(a, b, c, d, x, s, t) {
	        var n = a + ((b & d) | (c & ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function HH(a, b, c, d, x, s, t) {
	        var n = a + (b ^ c ^ d) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function II(a, b, c, d, x, s, t) {
	        var n = a + (c ^ (b | ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */
	    C.MD5 = Hasher._createHelper(MD5);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */
	    C.HmacMD5 = Hasher._createHmacHelper(MD5);
	}(Math));


	return CryptoJS.MD5;

}));
}(md5$1));

var sha1$1 = {exports: {}};

(function (module, exports) {
(function (root, factory) {
	{
		// CommonJS
		module.exports = factory(core.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-1 hash algorithm.
	     */
	    var SHA1 = C_algo.SHA1 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476,
	                0xc3d2e1f0
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];

	            // Computation
	            for (var i = 0; i < 80; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
	                    W[i] = (n << 1) | (n >>> 31);
	                }

	                var t = ((a << 5) | (a >>> 27)) + e + W[i];
	                if (i < 20) {
	                    t += ((b & c) | (~b & d)) + 0x5a827999;
	                } else if (i < 40) {
	                    t += (b ^ c ^ d) + 0x6ed9eba1;
	                } else if (i < 60) {
	                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
	                } else /* if (i < 80) */ {
	                    t += (b ^ c ^ d) - 0x359d3e2a;
	                }

	                e = d;
	                d = c;
	                c = (b << 30) | (b >>> 2);
	                b = a;
	                a = t;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA1('message');
	     *     var hash = CryptoJS.SHA1(wordArray);
	     */
	    C.SHA1 = Hasher._createHelper(SHA1);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA1(message, key);
	     */
	    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
	}());


	return CryptoJS.SHA1;

}));
}(sha1$1));

var sha256$1 = {exports: {}};

(function (module, exports) {
(function (root, factory) {
	{
		// CommonJS
		module.exports = factory(core.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }

	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

	                nPrime++;
	            }

	            n++;
	        }
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	return CryptoJS.SHA256;

}));
}(sha256$1));

var sha224 = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, sha256$1.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var SHA256 = C_algo.SHA256;

	    /**
	     * SHA-224 hash algorithm.
	     */
	    var SHA224 = C_algo.SHA224 = SHA256.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
	                0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
	            ]);
	        },

	        _doFinalize: function () {
	            var hash = SHA256._doFinalize.call(this);

	            hash.sigBytes -= 4;

	            return hash;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA224('message');
	     *     var hash = CryptoJS.SHA224(wordArray);
	     */
	    C.SHA224 = SHA256._createHelper(SHA224);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA224(message, key);
	     */
	    C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
	}());


	return CryptoJS.SHA224;

}));
}(sha224));

var sha512 = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, x64Core.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var X64WordArray = C_x64.WordArray;
	    var C_algo = C.algo;

	    function X64Word_create() {
	        return X64Word.create.apply(X64Word, arguments);
	    }

	    // Constants
	    var K = [
	        X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
	        X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
	        X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
	        X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
	        X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
	        X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
	        X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
	        X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
	        X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
	        X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
	        X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
	        X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
	        X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
	        X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
	        X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
	        X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
	        X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
	        X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
	        X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
	        X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
	        X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
	        X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
	        X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
	        X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
	        X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
	        X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
	        X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
	        X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
	        X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
	        X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
	        X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
	        X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
	        X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
	        X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
	        X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
	        X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
	        X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
	        X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
	        X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
	        X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
	    ];

	    // Reusable objects
	    var W = [];
	    (function () {
	        for (var i = 0; i < 80; i++) {
	            W[i] = X64Word_create();
	        }
	    }());

	    /**
	     * SHA-512 hash algorithm.
	     */
	    var SHA512 = C_algo.SHA512 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
	                new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
	                new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
	                new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var H = this._hash.words;

	            var H0 = H[0];
	            var H1 = H[1];
	            var H2 = H[2];
	            var H3 = H[3];
	            var H4 = H[4];
	            var H5 = H[5];
	            var H6 = H[6];
	            var H7 = H[7];

	            var H0h = H0.high;
	            var H0l = H0.low;
	            var H1h = H1.high;
	            var H1l = H1.low;
	            var H2h = H2.high;
	            var H2l = H2.low;
	            var H3h = H3.high;
	            var H3l = H3.low;
	            var H4h = H4.high;
	            var H4l = H4.low;
	            var H5h = H5.high;
	            var H5l = H5.low;
	            var H6h = H6.high;
	            var H6l = H6.low;
	            var H7h = H7.high;
	            var H7l = H7.low;

	            // Working variables
	            var ah = H0h;
	            var al = H0l;
	            var bh = H1h;
	            var bl = H1l;
	            var ch = H2h;
	            var cl = H2l;
	            var dh = H3h;
	            var dl = H3l;
	            var eh = H4h;
	            var el = H4l;
	            var fh = H5h;
	            var fl = H5l;
	            var gh = H6h;
	            var gl = H6l;
	            var hh = H7h;
	            var hl = H7l;

	            // Rounds
	            for (var i = 0; i < 80; i++) {
	                var Wil;
	                var Wih;

	                // Shortcut
	                var Wi = W[i];

	                // Extend message
	                if (i < 16) {
	                    Wih = Wi.high = M[offset + i * 2]     | 0;
	                    Wil = Wi.low  = M[offset + i * 2 + 1] | 0;
	                } else {
	                    // Gamma0
	                    var gamma0x  = W[i - 15];
	                    var gamma0xh = gamma0x.high;
	                    var gamma0xl = gamma0x.low;
	                    var gamma0h  = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
	                    var gamma0l  = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

	                    // Gamma1
	                    var gamma1x  = W[i - 2];
	                    var gamma1xh = gamma1x.high;
	                    var gamma1xl = gamma1x.low;
	                    var gamma1h  = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
	                    var gamma1l  = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

	                    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
	                    var Wi7  = W[i - 7];
	                    var Wi7h = Wi7.high;
	                    var Wi7l = Wi7.low;

	                    var Wi16  = W[i - 16];
	                    var Wi16h = Wi16.high;
	                    var Wi16l = Wi16.low;

	                    Wil = gamma0l + Wi7l;
	                    Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
	                    Wil = Wil + gamma1l;
	                    Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
	                    Wil = Wil + Wi16l;
	                    Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

	                    Wi.high = Wih;
	                    Wi.low  = Wil;
	                }

	                var chh  = (eh & fh) ^ (~eh & gh);
	                var chl  = (el & fl) ^ (~el & gl);
	                var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
	                var majl = (al & bl) ^ (al & cl) ^ (bl & cl);

	                var sigma0h = ((ah >>> 28) | (al << 4))  ^ ((ah << 30)  | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
	                var sigma0l = ((al >>> 28) | (ah << 4))  ^ ((al << 30)  | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
	                var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
	                var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));

	                // t1 = h + sigma1 + ch + K[i] + W[i]
	                var Ki  = K[i];
	                var Kih = Ki.high;
	                var Kil = Ki.low;

	                var t1l = hl + sigma1l;
	                var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
	                var t1l = t1l + chl;
	                var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
	                var t1l = t1l + Kil;
	                var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
	                var t1l = t1l + Wil;
	                var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

	                // t2 = sigma0 + maj
	                var t2l = sigma0l + majl;
	                var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

	                // Update working variables
	                hh = gh;
	                hl = gl;
	                gh = fh;
	                gl = fl;
	                fh = eh;
	                fl = el;
	                el = (dl + t1l) | 0;
	                eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
	                dh = ch;
	                dl = cl;
	                ch = bh;
	                cl = bl;
	                bh = ah;
	                bl = al;
	                al = (t1l + t2l) | 0;
	                ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
	            }

	            // Intermediate hash value
	            H0l = H0.low  = (H0l + al);
	            H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
	            H1l = H1.low  = (H1l + bl);
	            H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
	            H2l = H2.low  = (H2l + cl);
	            H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
	            H3l = H3.low  = (H3l + dl);
	            H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
	            H4l = H4.low  = (H4l + el);
	            H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
	            H5l = H5.low  = (H5l + fl);
	            H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
	            H6l = H6.low  = (H6l + gl);
	            H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
	            H7l = H7.low  = (H7l + hl);
	            H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Convert hash to 32-bit word array before returning
	            var hash = this._hash.toX32();

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        },

	        blockSize: 1024/32
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA512('message');
	     *     var hash = CryptoJS.SHA512(wordArray);
	     */
	    C.SHA512 = Hasher._createHelper(SHA512);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA512(message, key);
	     */
	    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
	}());


	return CryptoJS.SHA512;

}));
}(sha512));

var sha384 = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, x64Core.exports, sha512.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var X64WordArray = C_x64.WordArray;
	    var C_algo = C.algo;
	    var SHA512 = C_algo.SHA512;

	    /**
	     * SHA-384 hash algorithm.
	     */
	    var SHA384 = C_algo.SHA384 = SHA512.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507),
	                new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939),
	                new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511),
	                new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)
	            ]);
	        },

	        _doFinalize: function () {
	            var hash = SHA512._doFinalize.call(this);

	            hash.sigBytes -= 16;

	            return hash;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA384('message');
	     *     var hash = CryptoJS.SHA384(wordArray);
	     */
	    C.SHA384 = SHA512._createHelper(SHA384);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA384(message, key);
	     */
	    C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
	}());


	return CryptoJS.SHA384;

}));
}(sha384));

var sha3 = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, x64Core.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var C_algo = C.algo;

	    // Constants tables
	    var RHO_OFFSETS = [];
	    var PI_INDEXES  = [];
	    var ROUND_CONSTANTS = [];

	    // Compute Constants
	    (function () {
	        // Compute rho offset constants
	        var x = 1, y = 0;
	        for (var t = 0; t < 24; t++) {
	            RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;

	            var newX = y % 5;
	            var newY = (2 * x + 3 * y) % 5;
	            x = newX;
	            y = newY;
	        }

	        // Compute pi index constants
	        for (var x = 0; x < 5; x++) {
	            for (var y = 0; y < 5; y++) {
	                PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
	            }
	        }

	        // Compute round constants
	        var LFSR = 0x01;
	        for (var i = 0; i < 24; i++) {
	            var roundConstantMsw = 0;
	            var roundConstantLsw = 0;

	            for (var j = 0; j < 7; j++) {
	                if (LFSR & 0x01) {
	                    var bitPosition = (1 << j) - 1;
	                    if (bitPosition < 32) {
	                        roundConstantLsw ^= 1 << bitPosition;
	                    } else /* if (bitPosition >= 32) */ {
	                        roundConstantMsw ^= 1 << (bitPosition - 32);
	                    }
	                }

	                // Compute next LFSR
	                if (LFSR & 0x80) {
	                    // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
	                    LFSR = (LFSR << 1) ^ 0x71;
	                } else {
	                    LFSR <<= 1;
	                }
	            }

	            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
	        }
	    }());

	    // Reusable objects for temporary values
	    var T = [];
	    (function () {
	        for (var i = 0; i < 25; i++) {
	            T[i] = X64Word.create();
	        }
	    }());

	    /**
	     * SHA-3 hash algorithm.
	     */
	    var SHA3 = C_algo.SHA3 = Hasher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} outputLength
	         *   The desired number of bits in the output hash.
	         *   Only values permitted are: 224, 256, 384, 512.
	         *   Default: 512
	         */
	        cfg: Hasher.cfg.extend({
	            outputLength: 512
	        }),

	        _doReset: function () {
	            var state = this._state = [];
	            for (var i = 0; i < 25; i++) {
	                state[i] = new X64Word.init();
	            }

	            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var state = this._state;
	            var nBlockSizeLanes = this.blockSize / 2;

	            // Absorb
	            for (var i = 0; i < nBlockSizeLanes; i++) {
	                // Shortcuts
	                var M2i  = M[offset + 2 * i];
	                var M2i1 = M[offset + 2 * i + 1];

	                // Swap endian
	                M2i = (
	                    (((M2i << 8)  | (M2i >>> 24)) & 0x00ff00ff) |
	                    (((M2i << 24) | (M2i >>> 8))  & 0xff00ff00)
	                );
	                M2i1 = (
	                    (((M2i1 << 8)  | (M2i1 >>> 24)) & 0x00ff00ff) |
	                    (((M2i1 << 24) | (M2i1 >>> 8))  & 0xff00ff00)
	                );

	                // Absorb message into state
	                var lane = state[i];
	                lane.high ^= M2i1;
	                lane.low  ^= M2i;
	            }

	            // Rounds
	            for (var round = 0; round < 24; round++) {
	                // Theta
	                for (var x = 0; x < 5; x++) {
	                    // Mix column lanes
	                    var tMsw = 0, tLsw = 0;
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        tMsw ^= lane.high;
	                        tLsw ^= lane.low;
	                    }

	                    // Temporary values
	                    var Tx = T[x];
	                    Tx.high = tMsw;
	                    Tx.low  = tLsw;
	                }
	                for (var x = 0; x < 5; x++) {
	                    // Shortcuts
	                    var Tx4 = T[(x + 4) % 5];
	                    var Tx1 = T[(x + 1) % 5];
	                    var Tx1Msw = Tx1.high;
	                    var Tx1Lsw = Tx1.low;

	                    // Mix surrounding columns
	                    var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
	                    var tLsw = Tx4.low  ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        lane.high ^= tMsw;
	                        lane.low  ^= tLsw;
	                    }
	                }

	                // Rho Pi
	                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
	                    var tMsw;
	                    var tLsw;

	                    // Shortcuts
	                    var lane = state[laneIndex];
	                    var laneMsw = lane.high;
	                    var laneLsw = lane.low;
	                    var rhoOffset = RHO_OFFSETS[laneIndex];

	                    // Rotate lanes
	                    if (rhoOffset < 32) {
	                        tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
	                        tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
	                    } else /* if (rhoOffset >= 32) */ {
	                        tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
	                        tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
	                    }

	                    // Transpose lanes
	                    var TPiLane = T[PI_INDEXES[laneIndex]];
	                    TPiLane.high = tMsw;
	                    TPiLane.low  = tLsw;
	                }

	                // Rho pi at x = y = 0
	                var T0 = T[0];
	                var state0 = state[0];
	                T0.high = state0.high;
	                T0.low  = state0.low;

	                // Chi
	                for (var x = 0; x < 5; x++) {
	                    for (var y = 0; y < 5; y++) {
	                        // Shortcuts
	                        var laneIndex = x + 5 * y;
	                        var lane = state[laneIndex];
	                        var TLane = T[laneIndex];
	                        var Tx1Lane = T[((x + 1) % 5) + 5 * y];
	                        var Tx2Lane = T[((x + 2) % 5) + 5 * y];

	                        // Mix rows
	                        lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
	                        lane.low  = TLane.low  ^ (~Tx1Lane.low  & Tx2Lane.low);
	                    }
	                }

	                // Iota
	                var lane = state[0];
	                var roundConstant = ROUND_CONSTANTS[round];
	                lane.high ^= roundConstant.high;
	                lane.low  ^= roundConstant.low;
	            }
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;
	            var blockSizeBits = this.blockSize * 32;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
	            dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var state = this._state;
	            var outputLengthBytes = this.cfg.outputLength / 8;
	            var outputLengthLanes = outputLengthBytes / 8;

	            // Squeeze
	            var hashWords = [];
	            for (var i = 0; i < outputLengthLanes; i++) {
	                // Shortcuts
	                var lane = state[i];
	                var laneMsw = lane.high;
	                var laneLsw = lane.low;

	                // Swap endian
	                laneMsw = (
	                    (((laneMsw << 8)  | (laneMsw >>> 24)) & 0x00ff00ff) |
	                    (((laneMsw << 24) | (laneMsw >>> 8))  & 0xff00ff00)
	                );
	                laneLsw = (
	                    (((laneLsw << 8)  | (laneLsw >>> 24)) & 0x00ff00ff) |
	                    (((laneLsw << 24) | (laneLsw >>> 8))  & 0xff00ff00)
	                );

	                // Squeeze state to retrieve hash
	                hashWords.push(laneLsw);
	                hashWords.push(laneMsw);
	            }

	            // Return final computed hash
	            return new WordArray.init(hashWords, outputLengthBytes);
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);

	            var state = clone._state = this._state.slice(0);
	            for (var i = 0; i < 25; i++) {
	                state[i] = state[i].clone();
	            }

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA3('message');
	     *     var hash = CryptoJS.SHA3(wordArray);
	     */
	    C.SHA3 = Hasher._createHelper(SHA3);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA3(message, key);
	     */
	    C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
	}(Math));


	return CryptoJS.SHA3;

}));
}(sha3));

var ripemd160 = {exports: {}};

(function (module, exports) {
(function (root, factory) {
	{
		// CommonJS
		module.exports = factory(core.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var _zl = WordArray.create([
	        0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
	        7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
	        3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
	        1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
	        4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13]);
	    var _zr = WordArray.create([
	        5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
	        6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
	        15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
	        8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
	        12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11]);
	    var _sl = WordArray.create([
	         11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
	        7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
	        11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
	          11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
	        9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ]);
	    var _sr = WordArray.create([
	        8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
	        9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
	        9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
	        15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
	        8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ]);

	    var _hl =  WordArray.create([ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
	    var _hr =  WordArray.create([ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

	    /**
	     * RIPEMD160 hash algorithm.
	     */
	    var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
	        _doReset: function () {
	            this._hash  = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
	        },

	        _doProcessBlock: function (M, offset) {

	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                // Swap
	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }
	            // Shortcut
	            var H  = this._hash.words;
	            var hl = _hl.words;
	            var hr = _hr.words;
	            var zl = _zl.words;
	            var zr = _zr.words;
	            var sl = _sl.words;
	            var sr = _sr.words;

	            // Working variables
	            var al, bl, cl, dl, el;
	            var ar, br, cr, dr, er;

	            ar = al = H[0];
	            br = bl = H[1];
	            cr = cl = H[2];
	            dr = dl = H[3];
	            er = el = H[4];
	            // Computation
	            var t;
	            for (var i = 0; i < 80; i += 1) {
	                t = (al +  M[offset+zl[i]])|0;
	                if (i<16){
		            t +=  f1(bl,cl,dl) + hl[0];
	                } else if (i<32) {
		            t +=  f2(bl,cl,dl) + hl[1];
	                } else if (i<48) {
		            t +=  f3(bl,cl,dl) + hl[2];
	                } else if (i<64) {
		            t +=  f4(bl,cl,dl) + hl[3];
	                } else {// if (i<80) {
		            t +=  f5(bl,cl,dl) + hl[4];
	                }
	                t = t|0;
	                t =  rotl(t,sl[i]);
	                t = (t+el)|0;
	                al = el;
	                el = dl;
	                dl = rotl(cl, 10);
	                cl = bl;
	                bl = t;

	                t = (ar + M[offset+zr[i]])|0;
	                if (i<16){
		            t +=  f5(br,cr,dr) + hr[0];
	                } else if (i<32) {
		            t +=  f4(br,cr,dr) + hr[1];
	                } else if (i<48) {
		            t +=  f3(br,cr,dr) + hr[2];
	                } else if (i<64) {
		            t +=  f2(br,cr,dr) + hr[3];
	                } else {// if (i<80) {
		            t +=  f1(br,cr,dr) + hr[4];
	                }
	                t = t|0;
	                t =  rotl(t,sr[i]) ;
	                t = (t+er)|0;
	                ar = er;
	                er = dr;
	                dr = rotl(cr, 10);
	                cr = br;
	                br = t;
	            }
	            // Intermediate hash value
	            t    = (H[1] + cl + dr)|0;
	            H[1] = (H[2] + dl + er)|0;
	            H[2] = (H[3] + el + ar)|0;
	            H[3] = (H[4] + al + br)|0;
	            H[4] = (H[0] + bl + cr)|0;
	            H[0] =  t;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
	            );
	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 5; i++) {
	                // Shortcut
	                var H_i = H[i];

	                // Swap
	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });


	    function f1(x, y, z) {
	        return ((x) ^ (y) ^ (z));

	    }

	    function f2(x, y, z) {
	        return (((x)&(y)) | ((~x)&(z)));
	    }

	    function f3(x, y, z) {
	        return (((x) | (~(y))) ^ (z));
	    }

	    function f4(x, y, z) {
	        return (((x) & (z)) | ((y)&(~(z))));
	    }

	    function f5(x, y, z) {
	        return ((x) ^ ((y) |(~(z))));

	    }

	    function rotl(x,n) {
	        return (x<<n) | (x>>>(32-n));
	    }


	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.RIPEMD160('message');
	     *     var hash = CryptoJS.RIPEMD160(wordArray);
	     */
	    C.RIPEMD160 = Hasher._createHelper(RIPEMD160);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
	     */
	    C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
	}());


	return CryptoJS.RIPEMD160;

}));
}(ripemd160));

var hmac = {exports: {}};

(function (module, exports) {
(function (root, factory) {
	{
		// CommonJS
		module.exports = factory(core.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var C_algo = C.algo;

	    /**
	     * HMAC algorithm.
	     */
	    C_algo.HMAC = Base.extend({
	        /**
	         * Initializes a newly created HMAC.
	         *
	         * @param {Hasher} hasher The hash algorithm to use.
	         * @param {WordArray|string} key The secret key.
	         *
	         * @example
	         *
	         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
	         */
	        init: function (hasher, key) {
	            // Init hasher
	            hasher = this._hasher = new hasher.init();

	            // Convert string to WordArray, else assume WordArray already
	            if (typeof key == 'string') {
	                key = Utf8.parse(key);
	            }

	            // Shortcuts
	            var hasherBlockSize = hasher.blockSize;
	            var hasherBlockSizeBytes = hasherBlockSize * 4;

	            // Allow arbitrary length keys
	            if (key.sigBytes > hasherBlockSizeBytes) {
	                key = hasher.finalize(key);
	            }

	            // Clamp excess bits
	            key.clamp();

	            // Clone key for inner and outer pads
	            var oKey = this._oKey = key.clone();
	            var iKey = this._iKey = key.clone();

	            // Shortcuts
	            var oKeyWords = oKey.words;
	            var iKeyWords = iKey.words;

	            // XOR keys with pad constants
	            for (var i = 0; i < hasherBlockSize; i++) {
	                oKeyWords[i] ^= 0x5c5c5c5c;
	                iKeyWords[i] ^= 0x36363636;
	            }
	            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this HMAC to its initial state.
	         *
	         * @example
	         *
	         *     hmacHasher.reset();
	         */
	        reset: function () {
	            // Shortcut
	            var hasher = this._hasher;

	            // Reset
	            hasher.reset();
	            hasher.update(this._iKey);
	        },

	        /**
	         * Updates this HMAC with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {HMAC} This HMAC instance.
	         *
	         * @example
	         *
	         *     hmacHasher.update('message');
	         *     hmacHasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            this._hasher.update(messageUpdate);

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the HMAC computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The HMAC.
	         *
	         * @example
	         *
	         *     var hmac = hmacHasher.finalize();
	         *     var hmac = hmacHasher.finalize('message');
	         *     var hmac = hmacHasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Shortcut
	            var hasher = this._hasher;

	            // Compute HMAC
	            var innerHash = hasher.finalize(messageUpdate);
	            hasher.reset();
	            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

	            return hmac;
	        }
	    });
	}());


}));
}(hmac));

var pbkdf2 = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, sha256$1.exports, hmac.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var SHA256 = C_algo.SHA256;
	    var HMAC = C_algo.HMAC;

	    /**
	     * Password-Based Key Derivation Function 2 algorithm.
	     */
	    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hasher to use. Default: SHA256
	         * @property {number} iterations The number of iterations to perform. Default: 250000
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: SHA256,
	            iterations: 250000
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.PBKDF2.create();
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Computes the Password-Based Key Derivation Function 2.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            // Shortcut
	            var cfg = this.cfg;

	            // Init HMAC
	            var hmac = HMAC.create(cfg.hasher, password);

	            // Initial values
	            var derivedKey = WordArray.create();
	            var blockIndex = WordArray.create([0x00000001]);

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var blockIndexWords = blockIndex.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                var block = hmac.update(salt).finalize(blockIndex);
	                hmac.reset();

	                // Shortcuts
	                var blockWords = block.words;
	                var blockWordsLength = blockWords.length;

	                // Iterations
	                var intermediate = block;
	                for (var i = 1; i < iterations; i++) {
	                    intermediate = hmac.finalize(intermediate);
	                    hmac.reset();

	                    // Shortcut
	                    var intermediateWords = intermediate.words;

	                    // XOR intermediate with block
	                    for (var j = 0; j < blockWordsLength; j++) {
	                        blockWords[j] ^= intermediateWords[j];
	                    }
	                }

	                derivedKey.concat(block);
	                blockIndexWords[0]++;
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Computes the Password-Based Key Derivation Function 2.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.PBKDF2(password, salt);
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.PBKDF2 = function (password, salt, cfg) {
	        return PBKDF2.create(cfg).compute(password, salt);
	    };
	}());


	return CryptoJS.PBKDF2;

}));
}(pbkdf2));

var evpkdf = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, sha1$1.exports, hmac.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var MD5 = C_algo.MD5;

	    /**
	     * This key derivation function is meant to conform with EVP_BytesToKey.
	     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
	     */
	    var EvpKDF = C_algo.EvpKDF = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: MD5,
	            iterations: 1
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.EvpKDF.create();
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Derives a key from a password.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            var block;

	            // Shortcut
	            var cfg = this.cfg;

	            // Init hasher
	            var hasher = cfg.hasher.create();

	            // Initial values
	            var derivedKey = WordArray.create();

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                if (block) {
	                    hasher.update(block);
	                }
	                block = hasher.update(password).finalize(salt);
	                hasher.reset();

	                // Iterations
	                for (var i = 1; i < iterations; i++) {
	                    block = hasher.finalize(block);
	                    hasher.reset();
	                }

	                derivedKey.concat(block);
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Derives a key from a password.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.EvpKDF(password, salt);
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.EvpKDF = function (password, salt, cfg) {
	        return EvpKDF.create(cfg).compute(password, salt);
	    };
	}());


	return CryptoJS.EvpKDF;

}));
}(evpkdf));

var cipherCore = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, evpkdf.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	/**
	 * Cipher core components.
	 */
	CryptoJS.lib.Cipher || (function (undefined$1) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
	    var C_enc = C.enc;
	    C_enc.Utf8;
	    var Base64 = C_enc.Base64;
	    var C_algo = C.algo;
	    var EvpKDF = C_algo.EvpKDF;

	    /**
	     * Abstract base cipher template.
	     *
	     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
	     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
	     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
	     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
	     */
	    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {WordArray} iv The IV to use for this operation.
	         */
	        cfg: Base.extend(),

	        /**
	         * Creates this cipher in encryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createEncryptor: function (key, cfg) {
	            return this.create(this._ENC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Creates this cipher in decryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createDecryptor: function (key, cfg) {
	            return this.create(this._DEC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Initializes a newly created cipher.
	         *
	         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
	         */
	        init: function (xformMode, key, cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Store transform mode and key
	            this._xformMode = xformMode;
	            this._key = key;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this cipher to its initial state.
	         *
	         * @example
	         *
	         *     cipher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-cipher logic
	            this._doReset();
	        },

	        /**
	         * Adds data to be encrypted or decrypted.
	         *
	         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.process('data');
	         *     var encrypted = cipher.process(wordArray);
	         */
	        process: function (dataUpdate) {
	            // Append
	            this._append(dataUpdate);

	            // Process available blocks
	            return this._process();
	        },

	        /**
	         * Finalizes the encryption or decryption process.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after final processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.finalize();
	         *     var encrypted = cipher.finalize('data');
	         *     var encrypted = cipher.finalize(wordArray);
	         */
	        finalize: function (dataUpdate) {
	            // Final data update
	            if (dataUpdate) {
	                this._append(dataUpdate);
	            }

	            // Perform concrete-cipher logic
	            var finalProcessedData = this._doFinalize();

	            return finalProcessedData;
	        },

	        keySize: 128/32,

	        ivSize: 128/32,

	        _ENC_XFORM_MODE: 1,

	        _DEC_XFORM_MODE: 2,

	        /**
	         * Creates shortcut functions to a cipher's object interface.
	         *
	         * @param {Cipher} cipher The cipher to create a helper for.
	         *
	         * @return {Object} An object with encrypt and decrypt shortcut functions.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
	         */
	        _createHelper: (function () {
	            function selectCipherStrategy(key) {
	                if (typeof key == 'string') {
	                    return PasswordBasedCipher;
	                } else {
	                    return SerializableCipher;
	                }
	            }

	            return function (cipher) {
	                return {
	                    encrypt: function (message, key, cfg) {
	                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
	                    },

	                    decrypt: function (ciphertext, key, cfg) {
	                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
	                    }
	                };
	            };
	        }())
	    });

	    /**
	     * Abstract base stream cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
	     */
	    C_lib.StreamCipher = Cipher.extend({
	        _doFinalize: function () {
	            // Process partial blocks
	            var finalProcessedBlocks = this._process(!!'flush');

	            return finalProcessedBlocks;
	        },

	        blockSize: 1
	    });

	    /**
	     * Mode namespace.
	     */
	    var C_mode = C.mode = {};

	    /**
	     * Abstract base block cipher mode template.
	     */
	    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
	        /**
	         * Creates this mode for encryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
	         */
	        createEncryptor: function (cipher, iv) {
	            return this.Encryptor.create(cipher, iv);
	        },

	        /**
	         * Creates this mode for decryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
	         */
	        createDecryptor: function (cipher, iv) {
	            return this.Decryptor.create(cipher, iv);
	        },

	        /**
	         * Initializes a newly created mode.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
	         */
	        init: function (cipher, iv) {
	            this._cipher = cipher;
	            this._iv = iv;
	        }
	    });

	    /**
	     * Cipher Block Chaining mode.
	     */
	    var CBC = C_mode.CBC = (function () {
	        /**
	         * Abstract base CBC mode.
	         */
	        var CBC = BlockCipherMode.extend();

	        /**
	         * CBC encryptor.
	         */
	        CBC.Encryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // XOR and encrypt
	                xorBlock.call(this, words, offset, blockSize);
	                cipher.encryptBlock(words, offset);

	                // Remember this block to use with next block
	                this._prevBlock = words.slice(offset, offset + blockSize);
	            }
	        });

	        /**
	         * CBC decryptor.
	         */
	        CBC.Decryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // Remember this block to use with next block
	                var thisBlock = words.slice(offset, offset + blockSize);

	                // Decrypt and XOR
	                cipher.decryptBlock(words, offset);
	                xorBlock.call(this, words, offset, blockSize);

	                // This block becomes the previous block
	                this._prevBlock = thisBlock;
	            }
	        });

	        function xorBlock(words, offset, blockSize) {
	            var block;

	            // Shortcut
	            var iv = this._iv;

	            // Choose mixing block
	            if (iv) {
	                block = iv;

	                // Remove IV for subsequent blocks
	                this._iv = undefined$1;
	            } else {
	                block = this._prevBlock;
	            }

	            // XOR blocks
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= block[i];
	            }
	        }

	        return CBC;
	    }());

	    /**
	     * Padding namespace.
	     */
	    var C_pad = C.pad = {};

	    /**
	     * PKCS #5/7 padding strategy.
	     */
	    var Pkcs7 = C_pad.Pkcs7 = {
	        /**
	         * Pads data using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to pad.
	         * @param {number} blockSize The multiple that the data should be padded to.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
	         */
	        pad: function (data, blockSize) {
	            // Shortcut
	            var blockSizeBytes = blockSize * 4;

	            // Count padding bytes
	            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	            // Create padding word
	            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

	            // Create padding
	            var paddingWords = [];
	            for (var i = 0; i < nPaddingBytes; i += 4) {
	                paddingWords.push(paddingWord);
	            }
	            var padding = WordArray.create(paddingWords, nPaddingBytes);

	            // Add padding
	            data.concat(padding);
	        },

	        /**
	         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to unpad.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
	         */
	        unpad: function (data) {
	            // Get number of padding bytes from last byte
	            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	            // Remove padding
	            data.sigBytes -= nPaddingBytes;
	        }
	    };

	    /**
	     * Abstract base block cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
	     */
	    C_lib.BlockCipher = Cipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Mode} mode The block mode to use. Default: CBC
	         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
	         */
	        cfg: Cipher.cfg.extend({
	            mode: CBC,
	            padding: Pkcs7
	        }),

	        reset: function () {
	            var modeCreator;

	            // Reset cipher
	            Cipher.reset.call(this);

	            // Shortcuts
	            var cfg = this.cfg;
	            var iv = cfg.iv;
	            var mode = cfg.mode;

	            // Reset block mode
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                modeCreator = mode.createEncryptor;
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                modeCreator = mode.createDecryptor;
	                // Keep at least one block in the buffer for unpadding
	                this._minBufferSize = 1;
	            }

	            if (this._mode && this._mode.__creator == modeCreator) {
	                this._mode.init(this, iv && iv.words);
	            } else {
	                this._mode = modeCreator.call(mode, this, iv && iv.words);
	                this._mode.__creator = modeCreator;
	            }
	        },

	        _doProcessBlock: function (words, offset) {
	            this._mode.processBlock(words, offset);
	        },

	        _doFinalize: function () {
	            var finalProcessedBlocks;

	            // Shortcut
	            var padding = this.cfg.padding;

	            // Finalize
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                // Pad data
	                padding.pad(this._data, this.blockSize);

	                // Process final blocks
	                finalProcessedBlocks = this._process(!!'flush');
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                // Process final blocks
	                finalProcessedBlocks = this._process(!!'flush');

	                // Unpad data
	                padding.unpad(finalProcessedBlocks);
	            }

	            return finalProcessedBlocks;
	        },

	        blockSize: 128/32
	    });

	    /**
	     * A collection of cipher parameters.
	     *
	     * @property {WordArray} ciphertext The raw ciphertext.
	     * @property {WordArray} key The key to this ciphertext.
	     * @property {WordArray} iv The IV used in the ciphering operation.
	     * @property {WordArray} salt The salt used with a key derivation function.
	     * @property {Cipher} algorithm The cipher algorithm.
	     * @property {Mode} mode The block mode used in the ciphering operation.
	     * @property {Padding} padding The padding scheme used in the ciphering operation.
	     * @property {number} blockSize The block size of the cipher.
	     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
	     */
	    var CipherParams = C_lib.CipherParams = Base.extend({
	        /**
	         * Initializes a newly created cipher params object.
	         *
	         * @param {Object} cipherParams An object with any of the possible cipher parameters.
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.lib.CipherParams.create({
	         *         ciphertext: ciphertextWordArray,
	         *         key: keyWordArray,
	         *         iv: ivWordArray,
	         *         salt: saltWordArray,
	         *         algorithm: CryptoJS.algo.AES,
	         *         mode: CryptoJS.mode.CBC,
	         *         padding: CryptoJS.pad.PKCS7,
	         *         blockSize: 4,
	         *         formatter: CryptoJS.format.OpenSSL
	         *     });
	         */
	        init: function (cipherParams) {
	            this.mixIn(cipherParams);
	        },

	        /**
	         * Converts this cipher params object to a string.
	         *
	         * @param {Format} formatter (Optional) The formatting strategy to use.
	         *
	         * @return {string} The stringified cipher params.
	         *
	         * @throws Error If neither the formatter nor the default formatter is set.
	         *
	         * @example
	         *
	         *     var string = cipherParams + '';
	         *     var string = cipherParams.toString();
	         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
	         */
	        toString: function (formatter) {
	            return (formatter || this.formatter).stringify(this);
	        }
	    });

	    /**
	     * Format namespace.
	     */
	    var C_format = C.format = {};

	    /**
	     * OpenSSL formatting strategy.
	     */
	    var OpenSSLFormatter = C_format.OpenSSL = {
	        /**
	         * Converts a cipher params object to an OpenSSL-compatible string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The OpenSSL-compatible string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            var wordArray;

	            // Shortcuts
	            var ciphertext = cipherParams.ciphertext;
	            var salt = cipherParams.salt;

	            // Format
	            if (salt) {
	                wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
	            } else {
	                wordArray = ciphertext;
	            }

	            return wordArray.toString(Base64);
	        },

	        /**
	         * Converts an OpenSSL-compatible string to a cipher params object.
	         *
	         * @param {string} openSSLStr The OpenSSL-compatible string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
	         */
	        parse: function (openSSLStr) {
	            var salt;

	            // Parse base64
	            var ciphertext = Base64.parse(openSSLStr);

	            // Shortcut
	            var ciphertextWords = ciphertext.words;

	            // Test for salt
	            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
	                // Extract salt
	                salt = WordArray.create(ciphertextWords.slice(2, 4));

	                // Remove salt from ciphertext
	                ciphertextWords.splice(0, 4);
	                ciphertext.sigBytes -= 16;
	            }

	            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
	        }
	    };

	    /**
	     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
	     */
	    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
	         */
	        cfg: Base.extend({
	            format: OpenSSLFormatter
	        }),

	        /**
	         * Encrypts a message.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Encrypt
	            var encryptor = cipher.createEncryptor(key, cfg);
	            var ciphertext = encryptor.finalize(message);

	            // Shortcut
	            var cipherCfg = encryptor.cfg;

	            // Create and return serializable cipher params
	            return CipherParams.create({
	                ciphertext: ciphertext,
	                key: key,
	                iv: cipherCfg.iv,
	                algorithm: cipher,
	                mode: cipherCfg.mode,
	                padding: cipherCfg.padding,
	                blockSize: cipher.blockSize,
	                formatter: cfg.format
	            });
	        },

	        /**
	         * Decrypts serialized ciphertext.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Decrypt
	            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

	            return plaintext;
	        },

	        /**
	         * Converts serialized ciphertext to CipherParams,
	         * else assumed CipherParams already and returns ciphertext unchanged.
	         *
	         * @param {CipherParams|string} ciphertext The ciphertext.
	         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
	         *
	         * @return {CipherParams} The unserialized ciphertext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
	         */
	        _parse: function (ciphertext, format) {
	            if (typeof ciphertext == 'string') {
	                return format.parse(ciphertext, this);
	            } else {
	                return ciphertext;
	            }
	        }
	    });

	    /**
	     * Key derivation function namespace.
	     */
	    var C_kdf = C.kdf = {};

	    /**
	     * OpenSSL key derivation function.
	     */
	    var OpenSSLKdf = C_kdf.OpenSSL = {
	        /**
	         * Derives a key and IV from a password.
	         *
	         * @param {string} password The password to derive from.
	         * @param {number} keySize The size in words of the key to generate.
	         * @param {number} ivSize The size in words of the IV to generate.
	         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
	         *
	         * @return {CipherParams} A cipher params object with the key, IV, and salt.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
	         */
	        execute: function (password, keySize, ivSize, salt, hasher) {
	            // Generate random salt
	            if (!salt) {
	                salt = WordArray.random(64/8);
	            }

	            // Derive key and IV
	            if (!hasher) {
	                var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);
	            } else {
	                var key = EvpKDF.create({ keySize: keySize + ivSize, hasher: hasher }).compute(password, salt);
	            }


	            // Separate key and IV
	            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
	            key.sigBytes = keySize * 4;

	            // Return params
	            return CipherParams.create({ key: key, iv: iv, salt: salt });
	        }
	    };

	    /**
	     * A serializable cipher wrapper that derives the key from a password,
	     * and returns ciphertext as a serializable cipher params object.
	     */
	    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
	         */
	        cfg: SerializableCipher.cfg.extend({
	            kdf: OpenSSLKdf
	        }),

	        /**
	         * Encrypts a message using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, cfg.salt, cfg.hasher);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Encrypt
	            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

	            // Mix in derived params
	            ciphertext.mixIn(derivedParams);

	            return ciphertext;
	        },

	        /**
	         * Decrypts serialized ciphertext using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt, cfg.hasher);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Decrypt
	            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

	            return plaintext;
	        }
	    });
	}());


}));
}(cipherCore));

var modeCfb = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, cipherCore.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	/**
	 * Cipher Feedback block mode.
	 */
	CryptoJS.mode.CFB = (function () {
	    var CFB = CryptoJS.lib.BlockCipherMode.extend();

	    CFB.Encryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // Remember this block to use with next block
	            this._prevBlock = words.slice(offset, offset + blockSize);
	        }
	    });

	    CFB.Decryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            // Remember this block to use with next block
	            var thisBlock = words.slice(offset, offset + blockSize);

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // This block becomes the previous block
	            this._prevBlock = thisBlock;
	        }
	    });

	    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
	        var keystream;

	        // Shortcut
	        var iv = this._iv;

	        // Generate keystream
	        if (iv) {
	            keystream = iv.slice(0);

	            // Remove IV for subsequent blocks
	            this._iv = undefined;
	        } else {
	            keystream = this._prevBlock;
	        }
	        cipher.encryptBlock(keystream, 0);

	        // Encrypt
	        for (var i = 0; i < blockSize; i++) {
	            words[offset + i] ^= keystream[i];
	        }
	    }

	    return CFB;
	}());


	return CryptoJS.mode.CFB;

}));
}(modeCfb));

var modeCtr = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, cipherCore.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	/**
	 * Counter block mode.
	 */
	CryptoJS.mode.CTR = (function () {
	    var CTR = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = CTR.Encryptor = CTR.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Increment counter
	            counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0;

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTR.Decryptor = Encryptor;

	    return CTR;
	}());


	return CryptoJS.mode.CTR;

}));
}(modeCtr));

var modeCtrGladman = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, cipherCore.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	/** @preserve
	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
	 * derived from CryptoJS.mode.CTR
	 * Jan Hruby jhruby.web@gmail.com
	 */
	CryptoJS.mode.CTRGladman = (function () {
	    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

		function incWord(word)
		{
			if (((word >> 24) & 0xff) === 0xff) { //overflow
			var b1 = (word >> 16)&0xff;
			var b2 = (word >> 8)&0xff;
			var b3 = word & 0xff;

			if (b1 === 0xff) // overflow b1
			{
			b1 = 0;
			if (b2 === 0xff)
			{
				b2 = 0;
				if (b3 === 0xff)
				{
					b3 = 0;
				}
				else
				{
					++b3;
				}
			}
			else
			{
				++b2;
			}
			}
			else
			{
			++b1;
			}

			word = 0;
			word += (b1 << 16);
			word += (b2 << 8);
			word += b3;
			}
			else
			{
			word += (0x01 << 24);
			}
			return word;
		}

		function incCounter(counter)
		{
			if ((counter[0] = incWord(counter[0])) === 0)
			{
				// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
				counter[1] = incWord(counter[1]);
			}
			return counter;
		}

	    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }

				incCounter(counter);

				var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTRGladman.Decryptor = Encryptor;

	    return CTRGladman;
	}());




	return CryptoJS.mode.CTRGladman;

}));
}(modeCtrGladman));

var modeOfb = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, cipherCore.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	/**
	 * Output Feedback block mode.
	 */
	CryptoJS.mode.OFB = (function () {
	    var OFB = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = OFB.Encryptor = OFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var keystream = this._keystream;

	            // Generate keystream
	            if (iv) {
	                keystream = this._keystream = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    OFB.Decryptor = Encryptor;

	    return OFB;
	}());


	return CryptoJS.mode.OFB;

}));
}(modeOfb));

var modeEcb = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, cipherCore.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	/**
	 * Electronic Codebook block mode.
	 */
	CryptoJS.mode.ECB = (function () {
	    var ECB = CryptoJS.lib.BlockCipherMode.extend();

	    ECB.Encryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.encryptBlock(words, offset);
	        }
	    });

	    ECB.Decryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.decryptBlock(words, offset);
	        }
	    });

	    return ECB;
	}());


	return CryptoJS.mode.ECB;

}));
}(modeEcb));

var padAnsix923 = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, cipherCore.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	/**
	 * ANSI X.923 padding strategy.
	 */
	CryptoJS.pad.AnsiX923 = {
	    pad: function (data, blockSize) {
	        // Shortcuts
	        var dataSigBytes = data.sigBytes;
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

	        // Compute last byte position
	        var lastBytePos = dataSigBytes + nPaddingBytes - 1;

	        // Pad
	        data.clamp();
	        data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
	        data.sigBytes += nPaddingBytes;
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	return CryptoJS.pad.Ansix923;

}));
}(padAnsix923));

var padIso10126 = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, cipherCore.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	/**
	 * ISO 10126 padding strategy.
	 */
	CryptoJS.pad.Iso10126 = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	        // Pad
	        data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).
	             concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	return CryptoJS.pad.Iso10126;

}));
}(padIso10126));

var padIso97971 = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, cipherCore.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	/**
	 * ISO/IEC 9797-1 Padding Method 2.
	 */
	CryptoJS.pad.Iso97971 = {
	    pad: function (data, blockSize) {
	        // Add 0x80 byte
	        data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

	        // Zero pad the rest
	        CryptoJS.pad.ZeroPadding.pad(data, blockSize);
	    },

	    unpad: function (data) {
	        // Remove zero padding
	        CryptoJS.pad.ZeroPadding.unpad(data);

	        // Remove one more byte -- the 0x80 byte
	        data.sigBytes--;
	    }
	};


	return CryptoJS.pad.Iso97971;

}));
}(padIso97971));

var padZeropadding = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, cipherCore.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	/**
	 * Zero padding strategy.
	 */
	CryptoJS.pad.ZeroPadding = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Pad
	        data.clamp();
	        data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
	    },

	    unpad: function (data) {
	        // Shortcut
	        var dataWords = data.words;

	        // Unpad
	        var i = data.sigBytes - 1;
	        for (var i = data.sigBytes - 1; i >= 0; i--) {
	            if (((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
	                data.sigBytes = i + 1;
	                break;
	            }
	        }
	    }
	};


	return CryptoJS.pad.ZeroPadding;

}));
}(padZeropadding));

var padNopadding = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, cipherCore.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	/**
	 * A noop padding strategy.
	 */
	CryptoJS.pad.NoPadding = {
	    pad: function () {
	    },

	    unpad: function () {
	    }
	};


	return CryptoJS.pad.NoPadding;

}));
}(padNopadding));

var formatHex = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, cipherCore.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	(function (undefined$1) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var CipherParams = C_lib.CipherParams;
	    var C_enc = C.enc;
	    var Hex = C_enc.Hex;
	    var C_format = C.format;

	    C_format.Hex = {
	        /**
	         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The hexadecimally encoded string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            return cipherParams.ciphertext.toString(Hex);
	        },

	        /**
	         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
	         *
	         * @param {string} input The hexadecimally encoded string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
	         */
	        parse: function (input) {
	            var ciphertext = Hex.parse(input);
	            return CipherParams.create({ ciphertext: ciphertext });
	        }
	    };
	}());


	return CryptoJS.format.Hex;

}));
}(formatHex));

var aes = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, encBase64.exports, md5$1.exports, evpkdf.exports, cipherCore.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Lookup tables
	    var SBOX = [];
	    var INV_SBOX = [];
	    var SUB_MIX_0 = [];
	    var SUB_MIX_1 = [];
	    var SUB_MIX_2 = [];
	    var SUB_MIX_3 = [];
	    var INV_SUB_MIX_0 = [];
	    var INV_SUB_MIX_1 = [];
	    var INV_SUB_MIX_2 = [];
	    var INV_SUB_MIX_3 = [];

	    // Compute lookup tables
	    (function () {
	        // Compute double table
	        var d = [];
	        for (var i = 0; i < 256; i++) {
	            if (i < 128) {
	                d[i] = i << 1;
	            } else {
	                d[i] = (i << 1) ^ 0x11b;
	            }
	        }

	        // Walk GF(2^8)
	        var x = 0;
	        var xi = 0;
	        for (var i = 0; i < 256; i++) {
	            // Compute sbox
	            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
	            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
	            SBOX[x] = sx;
	            INV_SBOX[sx] = x;

	            // Compute multiplication
	            var x2 = d[x];
	            var x4 = d[x2];
	            var x8 = d[x4];

	            // Compute sub bytes, mix columns tables
	            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
	            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
	            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
	            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
	            SUB_MIX_3[x] = t;

	            // Compute inv sub bytes, inv mix columns tables
	            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
	            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
	            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
	            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
	            INV_SUB_MIX_3[sx] = t;

	            // Compute next counter
	            if (!x) {
	                x = xi = 1;
	            } else {
	                x = x2 ^ d[d[d[x8 ^ x2]]];
	                xi ^= d[d[xi]];
	            }
	        }
	    }());

	    // Precomputed Rcon lookup
	    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

	    /**
	     * AES block cipher algorithm.
	     */
	    var AES = C_algo.AES = BlockCipher.extend({
	        _doReset: function () {
	            var t;

	            // Skip reset of nRounds has been set before and key did not change
	            if (this._nRounds && this._keyPriorReset === this._key) {
	                return;
	            }

	            // Shortcuts
	            var key = this._keyPriorReset = this._key;
	            var keyWords = key.words;
	            var keySize = key.sigBytes / 4;

	            // Compute number of rounds
	            var nRounds = this._nRounds = keySize + 6;

	            // Compute number of key schedule rows
	            var ksRows = (nRounds + 1) * 4;

	            // Compute key schedule
	            var keySchedule = this._keySchedule = [];
	            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
	                if (ksRow < keySize) {
	                    keySchedule[ksRow] = keyWords[ksRow];
	                } else {
	                    t = keySchedule[ksRow - 1];

	                    if (!(ksRow % keySize)) {
	                        // Rot word
	                        t = (t << 8) | (t >>> 24);

	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

	                        // Mix Rcon
	                        t ^= RCON[(ksRow / keySize) | 0] << 24;
	                    } else if (keySize > 6 && ksRow % keySize == 4) {
	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
	                    }

	                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
	                }
	            }

	            // Compute inv key schedule
	            var invKeySchedule = this._invKeySchedule = [];
	            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
	                var ksRow = ksRows - invKsRow;

	                if (invKsRow % 4) {
	                    var t = keySchedule[ksRow];
	                } else {
	                    var t = keySchedule[ksRow - 4];
	                }

	                if (invKsRow < 4 || ksRow <= 4) {
	                    invKeySchedule[invKsRow] = t;
	                } else {
	                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
	                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
	                }
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
	        },

	        decryptBlock: function (M, offset) {
	            // Swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;

	            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

	            // Inv swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;
	        },

	        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
	            // Shortcut
	            var nRounds = this._nRounds;

	            // Get input, add round key
	            var s0 = M[offset]     ^ keySchedule[0];
	            var s1 = M[offset + 1] ^ keySchedule[1];
	            var s2 = M[offset + 2] ^ keySchedule[2];
	            var s3 = M[offset + 3] ^ keySchedule[3];

	            // Key schedule row counter
	            var ksRow = 4;

	            // Rounds
	            for (var round = 1; round < nRounds; round++) {
	                // Shift rows, sub bytes, mix columns, add round key
	                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
	                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
	                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
	                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

	                // Update state
	                s0 = t0;
	                s1 = t1;
	                s2 = t2;
	                s3 = t3;
	            }

	            // Shift rows, sub bytes, add round key
	            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
	            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
	            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
	            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

	            // Set output
	            M[offset]     = t0;
	            M[offset + 1] = t1;
	            M[offset + 2] = t2;
	            M[offset + 3] = t3;
	        },

	        keySize: 256/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
	     */
	    C.AES = BlockCipher._createHelper(AES);
	}());


	return CryptoJS.AES;

}));
}(aes));

var tripledes = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, encBase64.exports, md5$1.exports, evpkdf.exports, cipherCore.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Permuted Choice 1 constants
	    var PC1 = [
	        57, 49, 41, 33, 25, 17, 9,  1,
	        58, 50, 42, 34, 26, 18, 10, 2,
	        59, 51, 43, 35, 27, 19, 11, 3,
	        60, 52, 44, 36, 63, 55, 47, 39,
	        31, 23, 15, 7,  62, 54, 46, 38,
	        30, 22, 14, 6,  61, 53, 45, 37,
	        29, 21, 13, 5,  28, 20, 12, 4
	    ];

	    // Permuted Choice 2 constants
	    var PC2 = [
	        14, 17, 11, 24, 1,  5,
	        3,  28, 15, 6,  21, 10,
	        23, 19, 12, 4,  26, 8,
	        16, 7,  27, 20, 13, 2,
	        41, 52, 31, 37, 47, 55,
	        30, 40, 51, 45, 33, 48,
	        44, 49, 39, 56, 34, 53,
	        46, 42, 50, 36, 29, 32
	    ];

	    // Cumulative bit shift constants
	    var BIT_SHIFTS = [1,  2,  4,  6,  8,  10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

	    // SBOXes and round permutation constants
	    var SBOX_P = [
	        {
	            0x0: 0x808200,
	            0x10000000: 0x8000,
	            0x20000000: 0x808002,
	            0x30000000: 0x2,
	            0x40000000: 0x200,
	            0x50000000: 0x808202,
	            0x60000000: 0x800202,
	            0x70000000: 0x800000,
	            0x80000000: 0x202,
	            0x90000000: 0x800200,
	            0xa0000000: 0x8200,
	            0xb0000000: 0x808000,
	            0xc0000000: 0x8002,
	            0xd0000000: 0x800002,
	            0xe0000000: 0x0,
	            0xf0000000: 0x8202,
	            0x8000000: 0x0,
	            0x18000000: 0x808202,
	            0x28000000: 0x8202,
	            0x38000000: 0x8000,
	            0x48000000: 0x808200,
	            0x58000000: 0x200,
	            0x68000000: 0x808002,
	            0x78000000: 0x2,
	            0x88000000: 0x800200,
	            0x98000000: 0x8200,
	            0xa8000000: 0x808000,
	            0xb8000000: 0x800202,
	            0xc8000000: 0x800002,
	            0xd8000000: 0x8002,
	            0xe8000000: 0x202,
	            0xf8000000: 0x800000,
	            0x1: 0x8000,
	            0x10000001: 0x2,
	            0x20000001: 0x808200,
	            0x30000001: 0x800000,
	            0x40000001: 0x808002,
	            0x50000001: 0x8200,
	            0x60000001: 0x200,
	            0x70000001: 0x800202,
	            0x80000001: 0x808202,
	            0x90000001: 0x808000,
	            0xa0000001: 0x800002,
	            0xb0000001: 0x8202,
	            0xc0000001: 0x202,
	            0xd0000001: 0x800200,
	            0xe0000001: 0x8002,
	            0xf0000001: 0x0,
	            0x8000001: 0x808202,
	            0x18000001: 0x808000,
	            0x28000001: 0x800000,
	            0x38000001: 0x200,
	            0x48000001: 0x8000,
	            0x58000001: 0x800002,
	            0x68000001: 0x2,
	            0x78000001: 0x8202,
	            0x88000001: 0x8002,
	            0x98000001: 0x800202,
	            0xa8000001: 0x202,
	            0xb8000001: 0x808200,
	            0xc8000001: 0x800200,
	            0xd8000001: 0x0,
	            0xe8000001: 0x8200,
	            0xf8000001: 0x808002
	        },
	        {
	            0x0: 0x40084010,
	            0x1000000: 0x4000,
	            0x2000000: 0x80000,
	            0x3000000: 0x40080010,
	            0x4000000: 0x40000010,
	            0x5000000: 0x40084000,
	            0x6000000: 0x40004000,
	            0x7000000: 0x10,
	            0x8000000: 0x84000,
	            0x9000000: 0x40004010,
	            0xa000000: 0x40000000,
	            0xb000000: 0x84010,
	            0xc000000: 0x80010,
	            0xd000000: 0x0,
	            0xe000000: 0x4010,
	            0xf000000: 0x40080000,
	            0x800000: 0x40004000,
	            0x1800000: 0x84010,
	            0x2800000: 0x10,
	            0x3800000: 0x40004010,
	            0x4800000: 0x40084010,
	            0x5800000: 0x40000000,
	            0x6800000: 0x80000,
	            0x7800000: 0x40080010,
	            0x8800000: 0x80010,
	            0x9800000: 0x0,
	            0xa800000: 0x4000,
	            0xb800000: 0x40080000,
	            0xc800000: 0x40000010,
	            0xd800000: 0x84000,
	            0xe800000: 0x40084000,
	            0xf800000: 0x4010,
	            0x10000000: 0x0,
	            0x11000000: 0x40080010,
	            0x12000000: 0x40004010,
	            0x13000000: 0x40084000,
	            0x14000000: 0x40080000,
	            0x15000000: 0x10,
	            0x16000000: 0x84010,
	            0x17000000: 0x4000,
	            0x18000000: 0x4010,
	            0x19000000: 0x80000,
	            0x1a000000: 0x80010,
	            0x1b000000: 0x40000010,
	            0x1c000000: 0x84000,
	            0x1d000000: 0x40004000,
	            0x1e000000: 0x40000000,
	            0x1f000000: 0x40084010,
	            0x10800000: 0x84010,
	            0x11800000: 0x80000,
	            0x12800000: 0x40080000,
	            0x13800000: 0x4000,
	            0x14800000: 0x40004000,
	            0x15800000: 0x40084010,
	            0x16800000: 0x10,
	            0x17800000: 0x40000000,
	            0x18800000: 0x40084000,
	            0x19800000: 0x40000010,
	            0x1a800000: 0x40004010,
	            0x1b800000: 0x80010,
	            0x1c800000: 0x0,
	            0x1d800000: 0x4010,
	            0x1e800000: 0x40080010,
	            0x1f800000: 0x84000
	        },
	        {
	            0x0: 0x104,
	            0x100000: 0x0,
	            0x200000: 0x4000100,
	            0x300000: 0x10104,
	            0x400000: 0x10004,
	            0x500000: 0x4000004,
	            0x600000: 0x4010104,
	            0x700000: 0x4010000,
	            0x800000: 0x4000000,
	            0x900000: 0x4010100,
	            0xa00000: 0x10100,
	            0xb00000: 0x4010004,
	            0xc00000: 0x4000104,
	            0xd00000: 0x10000,
	            0xe00000: 0x4,
	            0xf00000: 0x100,
	            0x80000: 0x4010100,
	            0x180000: 0x4010004,
	            0x280000: 0x0,
	            0x380000: 0x4000100,
	            0x480000: 0x4000004,
	            0x580000: 0x10000,
	            0x680000: 0x10004,
	            0x780000: 0x104,
	            0x880000: 0x4,
	            0x980000: 0x100,
	            0xa80000: 0x4010000,
	            0xb80000: 0x10104,
	            0xc80000: 0x10100,
	            0xd80000: 0x4000104,
	            0xe80000: 0x4010104,
	            0xf80000: 0x4000000,
	            0x1000000: 0x4010100,
	            0x1100000: 0x10004,
	            0x1200000: 0x10000,
	            0x1300000: 0x4000100,
	            0x1400000: 0x100,
	            0x1500000: 0x4010104,
	            0x1600000: 0x4000004,
	            0x1700000: 0x0,
	            0x1800000: 0x4000104,
	            0x1900000: 0x4000000,
	            0x1a00000: 0x4,
	            0x1b00000: 0x10100,
	            0x1c00000: 0x4010000,
	            0x1d00000: 0x104,
	            0x1e00000: 0x10104,
	            0x1f00000: 0x4010004,
	            0x1080000: 0x4000000,
	            0x1180000: 0x104,
	            0x1280000: 0x4010100,
	            0x1380000: 0x0,
	            0x1480000: 0x10004,
	            0x1580000: 0x4000100,
	            0x1680000: 0x100,
	            0x1780000: 0x4010004,
	            0x1880000: 0x10000,
	            0x1980000: 0x4010104,
	            0x1a80000: 0x10104,
	            0x1b80000: 0x4000004,
	            0x1c80000: 0x4000104,
	            0x1d80000: 0x4010000,
	            0x1e80000: 0x4,
	            0x1f80000: 0x10100
	        },
	        {
	            0x0: 0x80401000,
	            0x10000: 0x80001040,
	            0x20000: 0x401040,
	            0x30000: 0x80400000,
	            0x40000: 0x0,
	            0x50000: 0x401000,
	            0x60000: 0x80000040,
	            0x70000: 0x400040,
	            0x80000: 0x80000000,
	            0x90000: 0x400000,
	            0xa0000: 0x40,
	            0xb0000: 0x80001000,
	            0xc0000: 0x80400040,
	            0xd0000: 0x1040,
	            0xe0000: 0x1000,
	            0xf0000: 0x80401040,
	            0x8000: 0x80001040,
	            0x18000: 0x40,
	            0x28000: 0x80400040,
	            0x38000: 0x80001000,
	            0x48000: 0x401000,
	            0x58000: 0x80401040,
	            0x68000: 0x0,
	            0x78000: 0x80400000,
	            0x88000: 0x1000,
	            0x98000: 0x80401000,
	            0xa8000: 0x400000,
	            0xb8000: 0x1040,
	            0xc8000: 0x80000000,
	            0xd8000: 0x400040,
	            0xe8000: 0x401040,
	            0xf8000: 0x80000040,
	            0x100000: 0x400040,
	            0x110000: 0x401000,
	            0x120000: 0x80000040,
	            0x130000: 0x0,
	            0x140000: 0x1040,
	            0x150000: 0x80400040,
	            0x160000: 0x80401000,
	            0x170000: 0x80001040,
	            0x180000: 0x80401040,
	            0x190000: 0x80000000,
	            0x1a0000: 0x80400000,
	            0x1b0000: 0x401040,
	            0x1c0000: 0x80001000,
	            0x1d0000: 0x400000,
	            0x1e0000: 0x40,
	            0x1f0000: 0x1000,
	            0x108000: 0x80400000,
	            0x118000: 0x80401040,
	            0x128000: 0x0,
	            0x138000: 0x401000,
	            0x148000: 0x400040,
	            0x158000: 0x80000000,
	            0x168000: 0x80001040,
	            0x178000: 0x40,
	            0x188000: 0x80000040,
	            0x198000: 0x1000,
	            0x1a8000: 0x80001000,
	            0x1b8000: 0x80400040,
	            0x1c8000: 0x1040,
	            0x1d8000: 0x80401000,
	            0x1e8000: 0x400000,
	            0x1f8000: 0x401040
	        },
	        {
	            0x0: 0x80,
	            0x1000: 0x1040000,
	            0x2000: 0x40000,
	            0x3000: 0x20000000,
	            0x4000: 0x20040080,
	            0x5000: 0x1000080,
	            0x6000: 0x21000080,
	            0x7000: 0x40080,
	            0x8000: 0x1000000,
	            0x9000: 0x20040000,
	            0xa000: 0x20000080,
	            0xb000: 0x21040080,
	            0xc000: 0x21040000,
	            0xd000: 0x0,
	            0xe000: 0x1040080,
	            0xf000: 0x21000000,
	            0x800: 0x1040080,
	            0x1800: 0x21000080,
	            0x2800: 0x80,
	            0x3800: 0x1040000,
	            0x4800: 0x40000,
	            0x5800: 0x20040080,
	            0x6800: 0x21040000,
	            0x7800: 0x20000000,
	            0x8800: 0x20040000,
	            0x9800: 0x0,
	            0xa800: 0x21040080,
	            0xb800: 0x1000080,
	            0xc800: 0x20000080,
	            0xd800: 0x21000000,
	            0xe800: 0x1000000,
	            0xf800: 0x40080,
	            0x10000: 0x40000,
	            0x11000: 0x80,
	            0x12000: 0x20000000,
	            0x13000: 0x21000080,
	            0x14000: 0x1000080,
	            0x15000: 0x21040000,
	            0x16000: 0x20040080,
	            0x17000: 0x1000000,
	            0x18000: 0x21040080,
	            0x19000: 0x21000000,
	            0x1a000: 0x1040000,
	            0x1b000: 0x20040000,
	            0x1c000: 0x40080,
	            0x1d000: 0x20000080,
	            0x1e000: 0x0,
	            0x1f000: 0x1040080,
	            0x10800: 0x21000080,
	            0x11800: 0x1000000,
	            0x12800: 0x1040000,
	            0x13800: 0x20040080,
	            0x14800: 0x20000000,
	            0x15800: 0x1040080,
	            0x16800: 0x80,
	            0x17800: 0x21040000,
	            0x18800: 0x40080,
	            0x19800: 0x21040080,
	            0x1a800: 0x0,
	            0x1b800: 0x21000000,
	            0x1c800: 0x1000080,
	            0x1d800: 0x40000,
	            0x1e800: 0x20040000,
	            0x1f800: 0x20000080
	        },
	        {
	            0x0: 0x10000008,
	            0x100: 0x2000,
	            0x200: 0x10200000,
	            0x300: 0x10202008,
	            0x400: 0x10002000,
	            0x500: 0x200000,
	            0x600: 0x200008,
	            0x700: 0x10000000,
	            0x800: 0x0,
	            0x900: 0x10002008,
	            0xa00: 0x202000,
	            0xb00: 0x8,
	            0xc00: 0x10200008,
	            0xd00: 0x202008,
	            0xe00: 0x2008,
	            0xf00: 0x10202000,
	            0x80: 0x10200000,
	            0x180: 0x10202008,
	            0x280: 0x8,
	            0x380: 0x200000,
	            0x480: 0x202008,
	            0x580: 0x10000008,
	            0x680: 0x10002000,
	            0x780: 0x2008,
	            0x880: 0x200008,
	            0x980: 0x2000,
	            0xa80: 0x10002008,
	            0xb80: 0x10200008,
	            0xc80: 0x0,
	            0xd80: 0x10202000,
	            0xe80: 0x202000,
	            0xf80: 0x10000000,
	            0x1000: 0x10002000,
	            0x1100: 0x10200008,
	            0x1200: 0x10202008,
	            0x1300: 0x2008,
	            0x1400: 0x200000,
	            0x1500: 0x10000000,
	            0x1600: 0x10000008,
	            0x1700: 0x202000,
	            0x1800: 0x202008,
	            0x1900: 0x0,
	            0x1a00: 0x8,
	            0x1b00: 0x10200000,
	            0x1c00: 0x2000,
	            0x1d00: 0x10002008,
	            0x1e00: 0x10202000,
	            0x1f00: 0x200008,
	            0x1080: 0x8,
	            0x1180: 0x202000,
	            0x1280: 0x200000,
	            0x1380: 0x10000008,
	            0x1480: 0x10002000,
	            0x1580: 0x2008,
	            0x1680: 0x10202008,
	            0x1780: 0x10200000,
	            0x1880: 0x10202000,
	            0x1980: 0x10200008,
	            0x1a80: 0x2000,
	            0x1b80: 0x202008,
	            0x1c80: 0x200008,
	            0x1d80: 0x0,
	            0x1e80: 0x10000000,
	            0x1f80: 0x10002008
	        },
	        {
	            0x0: 0x100000,
	            0x10: 0x2000401,
	            0x20: 0x400,
	            0x30: 0x100401,
	            0x40: 0x2100401,
	            0x50: 0x0,
	            0x60: 0x1,
	            0x70: 0x2100001,
	            0x80: 0x2000400,
	            0x90: 0x100001,
	            0xa0: 0x2000001,
	            0xb0: 0x2100400,
	            0xc0: 0x2100000,
	            0xd0: 0x401,
	            0xe0: 0x100400,
	            0xf0: 0x2000000,
	            0x8: 0x2100001,
	            0x18: 0x0,
	            0x28: 0x2000401,
	            0x38: 0x2100400,
	            0x48: 0x100000,
	            0x58: 0x2000001,
	            0x68: 0x2000000,
	            0x78: 0x401,
	            0x88: 0x100401,
	            0x98: 0x2000400,
	            0xa8: 0x2100000,
	            0xb8: 0x100001,
	            0xc8: 0x400,
	            0xd8: 0x2100401,
	            0xe8: 0x1,
	            0xf8: 0x100400,
	            0x100: 0x2000000,
	            0x110: 0x100000,
	            0x120: 0x2000401,
	            0x130: 0x2100001,
	            0x140: 0x100001,
	            0x150: 0x2000400,
	            0x160: 0x2100400,
	            0x170: 0x100401,
	            0x180: 0x401,
	            0x190: 0x2100401,
	            0x1a0: 0x100400,
	            0x1b0: 0x1,
	            0x1c0: 0x0,
	            0x1d0: 0x2100000,
	            0x1e0: 0x2000001,
	            0x1f0: 0x400,
	            0x108: 0x100400,
	            0x118: 0x2000401,
	            0x128: 0x2100001,
	            0x138: 0x1,
	            0x148: 0x2000000,
	            0x158: 0x100000,
	            0x168: 0x401,
	            0x178: 0x2100400,
	            0x188: 0x2000001,
	            0x198: 0x2100000,
	            0x1a8: 0x0,
	            0x1b8: 0x2100401,
	            0x1c8: 0x100401,
	            0x1d8: 0x400,
	            0x1e8: 0x2000400,
	            0x1f8: 0x100001
	        },
	        {
	            0x0: 0x8000820,
	            0x1: 0x20000,
	            0x2: 0x8000000,
	            0x3: 0x20,
	            0x4: 0x20020,
	            0x5: 0x8020820,
	            0x6: 0x8020800,
	            0x7: 0x800,
	            0x8: 0x8020000,
	            0x9: 0x8000800,
	            0xa: 0x20800,
	            0xb: 0x8020020,
	            0xc: 0x820,
	            0xd: 0x0,
	            0xe: 0x8000020,
	            0xf: 0x20820,
	            0x80000000: 0x800,
	            0x80000001: 0x8020820,
	            0x80000002: 0x8000820,
	            0x80000003: 0x8000000,
	            0x80000004: 0x8020000,
	            0x80000005: 0x20800,
	            0x80000006: 0x20820,
	            0x80000007: 0x20,
	            0x80000008: 0x8000020,
	            0x80000009: 0x820,
	            0x8000000a: 0x20020,
	            0x8000000b: 0x8020800,
	            0x8000000c: 0x0,
	            0x8000000d: 0x8020020,
	            0x8000000e: 0x8000800,
	            0x8000000f: 0x20000,
	            0x10: 0x20820,
	            0x11: 0x8020800,
	            0x12: 0x20,
	            0x13: 0x800,
	            0x14: 0x8000800,
	            0x15: 0x8000020,
	            0x16: 0x8020020,
	            0x17: 0x20000,
	            0x18: 0x0,
	            0x19: 0x20020,
	            0x1a: 0x8020000,
	            0x1b: 0x8000820,
	            0x1c: 0x8020820,
	            0x1d: 0x20800,
	            0x1e: 0x820,
	            0x1f: 0x8000000,
	            0x80000010: 0x20000,
	            0x80000011: 0x800,
	            0x80000012: 0x8020020,
	            0x80000013: 0x20820,
	            0x80000014: 0x20,
	            0x80000015: 0x8020000,
	            0x80000016: 0x8000000,
	            0x80000017: 0x8000820,
	            0x80000018: 0x8020820,
	            0x80000019: 0x8000020,
	            0x8000001a: 0x8000800,
	            0x8000001b: 0x0,
	            0x8000001c: 0x20800,
	            0x8000001d: 0x820,
	            0x8000001e: 0x20020,
	            0x8000001f: 0x8020800
	        }
	    ];

	    // Masks that select the SBOX input
	    var SBOX_MASK = [
	        0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
	        0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f
	    ];

	    /**
	     * DES block cipher algorithm.
	     */
	    var DES = C_algo.DES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;

	            // Select 56 bits according to PC1
	            var keyBits = [];
	            for (var i = 0; i < 56; i++) {
	                var keyBitPos = PC1[i] - 1;
	                keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - keyBitPos % 32)) & 1;
	            }

	            // Assemble 16 subkeys
	            var subKeys = this._subKeys = [];
	            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
	                // Create subkey
	                var subKey = subKeys[nSubKey] = [];

	                // Shortcut
	                var bitShift = BIT_SHIFTS[nSubKey];

	                // Select 48 bits according to PC2
	                for (var i = 0; i < 24; i++) {
	                    // Select from the left 28 key bits
	                    subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - i % 6);

	                    // Select from the right 28 key bits
	                    subKey[4 + ((i / 6) | 0)] |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)] << (31 - i % 6);
	                }

	                // Since each subkey is applied to an expanded 32-bit input,
	                // the subkey can be broken into 8 values scaled to 32-bits,
	                // which allows the key to be used without expansion
	                subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
	                for (var i = 1; i < 7; i++) {
	                    subKey[i] = subKey[i] >>> ((i - 1) * 4 + 3);
	                }
	                subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
	            }

	            // Compute inverse subkeys
	            var invSubKeys = this._invSubKeys = [];
	            for (var i = 0; i < 16; i++) {
	                invSubKeys[i] = subKeys[15 - i];
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._subKeys);
	        },

	        decryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._invSubKeys);
	        },

	        _doCryptBlock: function (M, offset, subKeys) {
	            // Get input
	            this._lBlock = M[offset];
	            this._rBlock = M[offset + 1];

	            // Initial permutation
	            exchangeLR.call(this, 4,  0x0f0f0f0f);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeLR.call(this, 1,  0x55555555);

	            // Rounds
	            for (var round = 0; round < 16; round++) {
	                // Shortcuts
	                var subKey = subKeys[round];
	                var lBlock = this._lBlock;
	                var rBlock = this._rBlock;

	                // Feistel function
	                var f = 0;
	                for (var i = 0; i < 8; i++) {
	                    f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
	                }
	                this._lBlock = rBlock;
	                this._rBlock = lBlock ^ f;
	            }

	            // Undo swap from last round
	            var t = this._lBlock;
	            this._lBlock = this._rBlock;
	            this._rBlock = t;

	            // Final permutation
	            exchangeLR.call(this, 1,  0x55555555);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeLR.call(this, 4,  0x0f0f0f0f);

	            // Set output
	            M[offset] = this._lBlock;
	            M[offset + 1] = this._rBlock;
	        },

	        keySize: 64/32,

	        ivSize: 64/32,

	        blockSize: 64/32
	    });

	    // Swap bits across the left and right words
	    function exchangeLR(offset, mask) {
	        var t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
	        this._rBlock ^= t;
	        this._lBlock ^= t << offset;
	    }

	    function exchangeRL(offset, mask) {
	        var t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
	        this._lBlock ^= t;
	        this._rBlock ^= t << offset;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
	     */
	    C.DES = BlockCipher._createHelper(DES);

	    /**
	     * Triple-DES block cipher algorithm.
	     */
	    var TripleDES = C_algo.TripleDES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;
	            // Make sure the key length is valid (64, 128 or >= 192 bit)
	            if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
	                throw new Error('Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.');
	            }

	            // Extend the key according to the keying options defined in 3DES standard
	            var key1 = keyWords.slice(0, 2);
	            var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
	            var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);

	            // Create DES instances
	            this._des1 = DES.createEncryptor(WordArray.create(key1));
	            this._des2 = DES.createEncryptor(WordArray.create(key2));
	            this._des3 = DES.createEncryptor(WordArray.create(key3));
	        },

	        encryptBlock: function (M, offset) {
	            this._des1.encryptBlock(M, offset);
	            this._des2.decryptBlock(M, offset);
	            this._des3.encryptBlock(M, offset);
	        },

	        decryptBlock: function (M, offset) {
	            this._des3.decryptBlock(M, offset);
	            this._des2.encryptBlock(M, offset);
	            this._des1.decryptBlock(M, offset);
	        },

	        keySize: 192/32,

	        ivSize: 64/32,

	        blockSize: 64/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
	     */
	    C.TripleDES = BlockCipher._createHelper(TripleDES);
	}());


	return CryptoJS.TripleDES;

}));
}(tripledes));

var rc4 = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, encBase64.exports, md5$1.exports, evpkdf.exports, cipherCore.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    /**
	     * RC4 stream cipher algorithm.
	     */
	    var RC4 = C_algo.RC4 = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;
	            var keySigBytes = key.sigBytes;

	            // Init sbox
	            var S = this._S = [];
	            for (var i = 0; i < 256; i++) {
	                S[i] = i;
	            }

	            // Key setup
	            for (var i = 0, j = 0; i < 256; i++) {
	                var keyByteIndex = i % keySigBytes;
	                var keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;

	                j = (j + S[i] + keyByte) % 256;

	                // Swap
	                var t = S[i];
	                S[i] = S[j];
	                S[j] = t;
	            }

	            // Counters
	            this._i = this._j = 0;
	        },

	        _doProcessBlock: function (M, offset) {
	            M[offset] ^= generateKeystreamWord.call(this);
	        },

	        keySize: 256/32,

	        ivSize: 0
	    });

	    function generateKeystreamWord() {
	        // Shortcuts
	        var S = this._S;
	        var i = this._i;
	        var j = this._j;

	        // Generate keystream word
	        var keystreamWord = 0;
	        for (var n = 0; n < 4; n++) {
	            i = (i + 1) % 256;
	            j = (j + S[i]) % 256;

	            // Swap
	            var t = S[i];
	            S[i] = S[j];
	            S[j] = t;

	            keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
	        }

	        // Update counters
	        this._i = i;
	        this._j = j;

	        return keystreamWord;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
	     */
	    C.RC4 = StreamCipher._createHelper(RC4);

	    /**
	     * Modified RC4 stream cipher algorithm.
	     */
	    var RC4Drop = C_algo.RC4Drop = RC4.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} drop The number of keystream words to drop. Default 192
	         */
	        cfg: RC4.cfg.extend({
	            drop: 192
	        }),

	        _doReset: function () {
	            RC4._doReset.call(this);

	            // Drop
	            for (var i = this.cfg.drop; i > 0; i--) {
	                generateKeystreamWord.call(this);
	            }
	        }
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
	     */
	    C.RC4Drop = StreamCipher._createHelper(RC4Drop);
	}());


	return CryptoJS.RC4;

}));
}(rc4));

var rabbit = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, encBase64.exports, md5$1.exports, evpkdf.exports, cipherCore.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm
	     */
	    var Rabbit = C_algo.Rabbit = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                K[i] = (((K[i] << 8)  | (K[i] >>> 24)) & 0x00ff00ff) |
	                       (((K[i] << 24) | (K[i] >>> 8))  & 0xff00ff00);
	            }

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
	     */
	    C.Rabbit = StreamCipher._createHelper(Rabbit);
	}());


	return CryptoJS.Rabbit;

}));
}(rabbit));

var rabbitLegacy = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, encBase64.exports, md5$1.exports, evpkdf.exports, cipherCore.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm.
	     *
	     * This is a legacy version that neglected to convert the key to little-endian.
	     * This error doesn't affect the cipher's security,
	     * but it does affect its compatibility with other implementations.
	     */
	    var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
	     */
	    C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
	}());


	return CryptoJS.RabbitLegacy;

}));
}(rabbitLegacy));

var blowfish = {exports: {}};

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, encBase64.exports, md5$1.exports, evpkdf.exports, cipherCore.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    const N = 16;

	    //Origin pbox and sbox, derived from PI
	    const ORIG_P = [
	        0x243F6A88, 0x85A308D3, 0x13198A2E, 0x03707344,
	        0xA4093822, 0x299F31D0, 0x082EFA98, 0xEC4E6C89,
	        0x452821E6, 0x38D01377, 0xBE5466CF, 0x34E90C6C,
	        0xC0AC29B7, 0xC97C50DD, 0x3F84D5B5, 0xB5470917,
	        0x9216D5D9, 0x8979FB1B
	    ];

	    const ORIG_S = [
	        [   0xD1310BA6, 0x98DFB5AC, 0x2FFD72DB, 0xD01ADFB7,
	            0xB8E1AFED, 0x6A267E96, 0xBA7C9045, 0xF12C7F99,
	            0x24A19947, 0xB3916CF7, 0x0801F2E2, 0x858EFC16,
	            0x636920D8, 0x71574E69, 0xA458FEA3, 0xF4933D7E,
	            0x0D95748F, 0x728EB658, 0x718BCD58, 0x82154AEE,
	            0x7B54A41D, 0xC25A59B5, 0x9C30D539, 0x2AF26013,
	            0xC5D1B023, 0x286085F0, 0xCA417918, 0xB8DB38EF,
	            0x8E79DCB0, 0x603A180E, 0x6C9E0E8B, 0xB01E8A3E,
	            0xD71577C1, 0xBD314B27, 0x78AF2FDA, 0x55605C60,
	            0xE65525F3, 0xAA55AB94, 0x57489862, 0x63E81440,
	            0x55CA396A, 0x2AAB10B6, 0xB4CC5C34, 0x1141E8CE,
	            0xA15486AF, 0x7C72E993, 0xB3EE1411, 0x636FBC2A,
	            0x2BA9C55D, 0x741831F6, 0xCE5C3E16, 0x9B87931E,
	            0xAFD6BA33, 0x6C24CF5C, 0x7A325381, 0x28958677,
	            0x3B8F4898, 0x6B4BB9AF, 0xC4BFE81B, 0x66282193,
	            0x61D809CC, 0xFB21A991, 0x487CAC60, 0x5DEC8032,
	            0xEF845D5D, 0xE98575B1, 0xDC262302, 0xEB651B88,
	            0x23893E81, 0xD396ACC5, 0x0F6D6FF3, 0x83F44239,
	            0x2E0B4482, 0xA4842004, 0x69C8F04A, 0x9E1F9B5E,
	            0x21C66842, 0xF6E96C9A, 0x670C9C61, 0xABD388F0,
	            0x6A51A0D2, 0xD8542F68, 0x960FA728, 0xAB5133A3,
	            0x6EEF0B6C, 0x137A3BE4, 0xBA3BF050, 0x7EFB2A98,
	            0xA1F1651D, 0x39AF0176, 0x66CA593E, 0x82430E88,
	            0x8CEE8619, 0x456F9FB4, 0x7D84A5C3, 0x3B8B5EBE,
	            0xE06F75D8, 0x85C12073, 0x401A449F, 0x56C16AA6,
	            0x4ED3AA62, 0x363F7706, 0x1BFEDF72, 0x429B023D,
	            0x37D0D724, 0xD00A1248, 0xDB0FEAD3, 0x49F1C09B,
	            0x075372C9, 0x80991B7B, 0x25D479D8, 0xF6E8DEF7,
	            0xE3FE501A, 0xB6794C3B, 0x976CE0BD, 0x04C006BA,
	            0xC1A94FB6, 0x409F60C4, 0x5E5C9EC2, 0x196A2463,
	            0x68FB6FAF, 0x3E6C53B5, 0x1339B2EB, 0x3B52EC6F,
	            0x6DFC511F, 0x9B30952C, 0xCC814544, 0xAF5EBD09,
	            0xBEE3D004, 0xDE334AFD, 0x660F2807, 0x192E4BB3,
	            0xC0CBA857, 0x45C8740F, 0xD20B5F39, 0xB9D3FBDB,
	            0x5579C0BD, 0x1A60320A, 0xD6A100C6, 0x402C7279,
	            0x679F25FE, 0xFB1FA3CC, 0x8EA5E9F8, 0xDB3222F8,
	            0x3C7516DF, 0xFD616B15, 0x2F501EC8, 0xAD0552AB,
	            0x323DB5FA, 0xFD238760, 0x53317B48, 0x3E00DF82,
	            0x9E5C57BB, 0xCA6F8CA0, 0x1A87562E, 0xDF1769DB,
	            0xD542A8F6, 0x287EFFC3, 0xAC6732C6, 0x8C4F5573,
	            0x695B27B0, 0xBBCA58C8, 0xE1FFA35D, 0xB8F011A0,
	            0x10FA3D98, 0xFD2183B8, 0x4AFCB56C, 0x2DD1D35B,
	            0x9A53E479, 0xB6F84565, 0xD28E49BC, 0x4BFB9790,
	            0xE1DDF2DA, 0xA4CB7E33, 0x62FB1341, 0xCEE4C6E8,
	            0xEF20CADA, 0x36774C01, 0xD07E9EFE, 0x2BF11FB4,
	            0x95DBDA4D, 0xAE909198, 0xEAAD8E71, 0x6B93D5A0,
	            0xD08ED1D0, 0xAFC725E0, 0x8E3C5B2F, 0x8E7594B7,
	            0x8FF6E2FB, 0xF2122B64, 0x8888B812, 0x900DF01C,
	            0x4FAD5EA0, 0x688FC31C, 0xD1CFF191, 0xB3A8C1AD,
	            0x2F2F2218, 0xBE0E1777, 0xEA752DFE, 0x8B021FA1,
	            0xE5A0CC0F, 0xB56F74E8, 0x18ACF3D6, 0xCE89E299,
	            0xB4A84FE0, 0xFD13E0B7, 0x7CC43B81, 0xD2ADA8D9,
	            0x165FA266, 0x80957705, 0x93CC7314, 0x211A1477,
	            0xE6AD2065, 0x77B5FA86, 0xC75442F5, 0xFB9D35CF,
	            0xEBCDAF0C, 0x7B3E89A0, 0xD6411BD3, 0xAE1E7E49,
	            0x00250E2D, 0x2071B35E, 0x226800BB, 0x57B8E0AF,
	            0x2464369B, 0xF009B91E, 0x5563911D, 0x59DFA6AA,
	            0x78C14389, 0xD95A537F, 0x207D5BA2, 0x02E5B9C5,
	            0x83260376, 0x6295CFA9, 0x11C81968, 0x4E734A41,
	            0xB3472DCA, 0x7B14A94A, 0x1B510052, 0x9A532915,
	            0xD60F573F, 0xBC9BC6E4, 0x2B60A476, 0x81E67400,
	            0x08BA6FB5, 0x571BE91F, 0xF296EC6B, 0x2A0DD915,
	            0xB6636521, 0xE7B9F9B6, 0xFF34052E, 0xC5855664,
	            0x53B02D5D, 0xA99F8FA1, 0x08BA4799, 0x6E85076A   ],
	        [   0x4B7A70E9, 0xB5B32944, 0xDB75092E, 0xC4192623,
	            0xAD6EA6B0, 0x49A7DF7D, 0x9CEE60B8, 0x8FEDB266,
	            0xECAA8C71, 0x699A17FF, 0x5664526C, 0xC2B19EE1,
	            0x193602A5, 0x75094C29, 0xA0591340, 0xE4183A3E,
	            0x3F54989A, 0x5B429D65, 0x6B8FE4D6, 0x99F73FD6,
	            0xA1D29C07, 0xEFE830F5, 0x4D2D38E6, 0xF0255DC1,
	            0x4CDD2086, 0x8470EB26, 0x6382E9C6, 0x021ECC5E,
	            0x09686B3F, 0x3EBAEFC9, 0x3C971814, 0x6B6A70A1,
	            0x687F3584, 0x52A0E286, 0xB79C5305, 0xAA500737,
	            0x3E07841C, 0x7FDEAE5C, 0x8E7D44EC, 0x5716F2B8,
	            0xB03ADA37, 0xF0500C0D, 0xF01C1F04, 0x0200B3FF,
	            0xAE0CF51A, 0x3CB574B2, 0x25837A58, 0xDC0921BD,
	            0xD19113F9, 0x7CA92FF6, 0x94324773, 0x22F54701,
	            0x3AE5E581, 0x37C2DADC, 0xC8B57634, 0x9AF3DDA7,
	            0xA9446146, 0x0FD0030E, 0xECC8C73E, 0xA4751E41,
	            0xE238CD99, 0x3BEA0E2F, 0x3280BBA1, 0x183EB331,
	            0x4E548B38, 0x4F6DB908, 0x6F420D03, 0xF60A04BF,
	            0x2CB81290, 0x24977C79, 0x5679B072, 0xBCAF89AF,
	            0xDE9A771F, 0xD9930810, 0xB38BAE12, 0xDCCF3F2E,
	            0x5512721F, 0x2E6B7124, 0x501ADDE6, 0x9F84CD87,
	            0x7A584718, 0x7408DA17, 0xBC9F9ABC, 0xE94B7D8C,
	            0xEC7AEC3A, 0xDB851DFA, 0x63094366, 0xC464C3D2,
	            0xEF1C1847, 0x3215D908, 0xDD433B37, 0x24C2BA16,
	            0x12A14D43, 0x2A65C451, 0x50940002, 0x133AE4DD,
	            0x71DFF89E, 0x10314E55, 0x81AC77D6, 0x5F11199B,
	            0x043556F1, 0xD7A3C76B, 0x3C11183B, 0x5924A509,
	            0xF28FE6ED, 0x97F1FBFA, 0x9EBABF2C, 0x1E153C6E,
	            0x86E34570, 0xEAE96FB1, 0x860E5E0A, 0x5A3E2AB3,
	            0x771FE71C, 0x4E3D06FA, 0x2965DCB9, 0x99E71D0F,
	            0x803E89D6, 0x5266C825, 0x2E4CC978, 0x9C10B36A,
	            0xC6150EBA, 0x94E2EA78, 0xA5FC3C53, 0x1E0A2DF4,
	            0xF2F74EA7, 0x361D2B3D, 0x1939260F, 0x19C27960,
	            0x5223A708, 0xF71312B6, 0xEBADFE6E, 0xEAC31F66,
	            0xE3BC4595, 0xA67BC883, 0xB17F37D1, 0x018CFF28,
	            0xC332DDEF, 0xBE6C5AA5, 0x65582185, 0x68AB9802,
	            0xEECEA50F, 0xDB2F953B, 0x2AEF7DAD, 0x5B6E2F84,
	            0x1521B628, 0x29076170, 0xECDD4775, 0x619F1510,
	            0x13CCA830, 0xEB61BD96, 0x0334FE1E, 0xAA0363CF,
	            0xB5735C90, 0x4C70A239, 0xD59E9E0B, 0xCBAADE14,
	            0xEECC86BC, 0x60622CA7, 0x9CAB5CAB, 0xB2F3846E,
	            0x648B1EAF, 0x19BDF0CA, 0xA02369B9, 0x655ABB50,
	            0x40685A32, 0x3C2AB4B3, 0x319EE9D5, 0xC021B8F7,
	            0x9B540B19, 0x875FA099, 0x95F7997E, 0x623D7DA8,
	            0xF837889A, 0x97E32D77, 0x11ED935F, 0x16681281,
	            0x0E358829, 0xC7E61FD6, 0x96DEDFA1, 0x7858BA99,
	            0x57F584A5, 0x1B227263, 0x9B83C3FF, 0x1AC24696,
	            0xCDB30AEB, 0x532E3054, 0x8FD948E4, 0x6DBC3128,
	            0x58EBF2EF, 0x34C6FFEA, 0xFE28ED61, 0xEE7C3C73,
	            0x5D4A14D9, 0xE864B7E3, 0x42105D14, 0x203E13E0,
	            0x45EEE2B6, 0xA3AAABEA, 0xDB6C4F15, 0xFACB4FD0,
	            0xC742F442, 0xEF6ABBB5, 0x654F3B1D, 0x41CD2105,
	            0xD81E799E, 0x86854DC7, 0xE44B476A, 0x3D816250,
	            0xCF62A1F2, 0x5B8D2646, 0xFC8883A0, 0xC1C7B6A3,
	            0x7F1524C3, 0x69CB7492, 0x47848A0B, 0x5692B285,
	            0x095BBF00, 0xAD19489D, 0x1462B174, 0x23820E00,
	            0x58428D2A, 0x0C55F5EA, 0x1DADF43E, 0x233F7061,
	            0x3372F092, 0x8D937E41, 0xD65FECF1, 0x6C223BDB,
	            0x7CDE3759, 0xCBEE7460, 0x4085F2A7, 0xCE77326E,
	            0xA6078084, 0x19F8509E, 0xE8EFD855, 0x61D99735,
	            0xA969A7AA, 0xC50C06C2, 0x5A04ABFC, 0x800BCADC,
	            0x9E447A2E, 0xC3453484, 0xFDD56705, 0x0E1E9EC9,
	            0xDB73DBD3, 0x105588CD, 0x675FDA79, 0xE3674340,
	            0xC5C43465, 0x713E38D8, 0x3D28F89E, 0xF16DFF20,
	            0x153E21E7, 0x8FB03D4A, 0xE6E39F2B, 0xDB83ADF7   ],
	        [   0xE93D5A68, 0x948140F7, 0xF64C261C, 0x94692934,
	            0x411520F7, 0x7602D4F7, 0xBCF46B2E, 0xD4A20068,
	            0xD4082471, 0x3320F46A, 0x43B7D4B7, 0x500061AF,
	            0x1E39F62E, 0x97244546, 0x14214F74, 0xBF8B8840,
	            0x4D95FC1D, 0x96B591AF, 0x70F4DDD3, 0x66A02F45,
	            0xBFBC09EC, 0x03BD9785, 0x7FAC6DD0, 0x31CB8504,
	            0x96EB27B3, 0x55FD3941, 0xDA2547E6, 0xABCA0A9A,
	            0x28507825, 0x530429F4, 0x0A2C86DA, 0xE9B66DFB,
	            0x68DC1462, 0xD7486900, 0x680EC0A4, 0x27A18DEE,
	            0x4F3FFEA2, 0xE887AD8C, 0xB58CE006, 0x7AF4D6B6,
	            0xAACE1E7C, 0xD3375FEC, 0xCE78A399, 0x406B2A42,
	            0x20FE9E35, 0xD9F385B9, 0xEE39D7AB, 0x3B124E8B,
	            0x1DC9FAF7, 0x4B6D1856, 0x26A36631, 0xEAE397B2,
	            0x3A6EFA74, 0xDD5B4332, 0x6841E7F7, 0xCA7820FB,
	            0xFB0AF54E, 0xD8FEB397, 0x454056AC, 0xBA489527,
	            0x55533A3A, 0x20838D87, 0xFE6BA9B7, 0xD096954B,
	            0x55A867BC, 0xA1159A58, 0xCCA92963, 0x99E1DB33,
	            0xA62A4A56, 0x3F3125F9, 0x5EF47E1C, 0x9029317C,
	            0xFDF8E802, 0x04272F70, 0x80BB155C, 0x05282CE3,
	            0x95C11548, 0xE4C66D22, 0x48C1133F, 0xC70F86DC,
	            0x07F9C9EE, 0x41041F0F, 0x404779A4, 0x5D886E17,
	            0x325F51EB, 0xD59BC0D1, 0xF2BCC18F, 0x41113564,
	            0x257B7834, 0x602A9C60, 0xDFF8E8A3, 0x1F636C1B,
	            0x0E12B4C2, 0x02E1329E, 0xAF664FD1, 0xCAD18115,
	            0x6B2395E0, 0x333E92E1, 0x3B240B62, 0xEEBEB922,
	            0x85B2A20E, 0xE6BA0D99, 0xDE720C8C, 0x2DA2F728,
	            0xD0127845, 0x95B794FD, 0x647D0862, 0xE7CCF5F0,
	            0x5449A36F, 0x877D48FA, 0xC39DFD27, 0xF33E8D1E,
	            0x0A476341, 0x992EFF74, 0x3A6F6EAB, 0xF4F8FD37,
	            0xA812DC60, 0xA1EBDDF8, 0x991BE14C, 0xDB6E6B0D,
	            0xC67B5510, 0x6D672C37, 0x2765D43B, 0xDCD0E804,
	            0xF1290DC7, 0xCC00FFA3, 0xB5390F92, 0x690FED0B,
	            0x667B9FFB, 0xCEDB7D9C, 0xA091CF0B, 0xD9155EA3,
	            0xBB132F88, 0x515BAD24, 0x7B9479BF, 0x763BD6EB,
	            0x37392EB3, 0xCC115979, 0x8026E297, 0xF42E312D,
	            0x6842ADA7, 0xC66A2B3B, 0x12754CCC, 0x782EF11C,
	            0x6A124237, 0xB79251E7, 0x06A1BBE6, 0x4BFB6350,
	            0x1A6B1018, 0x11CAEDFA, 0x3D25BDD8, 0xE2E1C3C9,
	            0x44421659, 0x0A121386, 0xD90CEC6E, 0xD5ABEA2A,
	            0x64AF674E, 0xDA86A85F, 0xBEBFE988, 0x64E4C3FE,
	            0x9DBC8057, 0xF0F7C086, 0x60787BF8, 0x6003604D,
	            0xD1FD8346, 0xF6381FB0, 0x7745AE04, 0xD736FCCC,
	            0x83426B33, 0xF01EAB71, 0xB0804187, 0x3C005E5F,
	            0x77A057BE, 0xBDE8AE24, 0x55464299, 0xBF582E61,
	            0x4E58F48F, 0xF2DDFDA2, 0xF474EF38, 0x8789BDC2,
	            0x5366F9C3, 0xC8B38E74, 0xB475F255, 0x46FCD9B9,
	            0x7AEB2661, 0x8B1DDF84, 0x846A0E79, 0x915F95E2,
	            0x466E598E, 0x20B45770, 0x8CD55591, 0xC902DE4C,
	            0xB90BACE1, 0xBB8205D0, 0x11A86248, 0x7574A99E,
	            0xB77F19B6, 0xE0A9DC09, 0x662D09A1, 0xC4324633,
	            0xE85A1F02, 0x09F0BE8C, 0x4A99A025, 0x1D6EFE10,
	            0x1AB93D1D, 0x0BA5A4DF, 0xA186F20F, 0x2868F169,
	            0xDCB7DA83, 0x573906FE, 0xA1E2CE9B, 0x4FCD7F52,
	            0x50115E01, 0xA70683FA, 0xA002B5C4, 0x0DE6D027,
	            0x9AF88C27, 0x773F8641, 0xC3604C06, 0x61A806B5,
	            0xF0177A28, 0xC0F586E0, 0x006058AA, 0x30DC7D62,
	            0x11E69ED7, 0x2338EA63, 0x53C2DD94, 0xC2C21634,
	            0xBBCBEE56, 0x90BCB6DE, 0xEBFC7DA1, 0xCE591D76,
	            0x6F05E409, 0x4B7C0188, 0x39720A3D, 0x7C927C24,
	            0x86E3725F, 0x724D9DB9, 0x1AC15BB4, 0xD39EB8FC,
	            0xED545578, 0x08FCA5B5, 0xD83D7CD3, 0x4DAD0FC4,
	            0x1E50EF5E, 0xB161E6F8, 0xA28514D9, 0x6C51133C,
	            0x6FD5C7E7, 0x56E14EC4, 0x362ABFCE, 0xDDC6C837,
	            0xD79A3234, 0x92638212, 0x670EFA8E, 0x406000E0  ],
	        [   0x3A39CE37, 0xD3FAF5CF, 0xABC27737, 0x5AC52D1B,
	            0x5CB0679E, 0x4FA33742, 0xD3822740, 0x99BC9BBE,
	            0xD5118E9D, 0xBF0F7315, 0xD62D1C7E, 0xC700C47B,
	            0xB78C1B6B, 0x21A19045, 0xB26EB1BE, 0x6A366EB4,
	            0x5748AB2F, 0xBC946E79, 0xC6A376D2, 0x6549C2C8,
	            0x530FF8EE, 0x468DDE7D, 0xD5730A1D, 0x4CD04DC6,
	            0x2939BBDB, 0xA9BA4650, 0xAC9526E8, 0xBE5EE304,
	            0xA1FAD5F0, 0x6A2D519A, 0x63EF8CE2, 0x9A86EE22,
	            0xC089C2B8, 0x43242EF6, 0xA51E03AA, 0x9CF2D0A4,
	            0x83C061BA, 0x9BE96A4D, 0x8FE51550, 0xBA645BD6,
	            0x2826A2F9, 0xA73A3AE1, 0x4BA99586, 0xEF5562E9,
	            0xC72FEFD3, 0xF752F7DA, 0x3F046F69, 0x77FA0A59,
	            0x80E4A915, 0x87B08601, 0x9B09E6AD, 0x3B3EE593,
	            0xE990FD5A, 0x9E34D797, 0x2CF0B7D9, 0x022B8B51,
	            0x96D5AC3A, 0x017DA67D, 0xD1CF3ED6, 0x7C7D2D28,
	            0x1F9F25CF, 0xADF2B89B, 0x5AD6B472, 0x5A88F54C,
	            0xE029AC71, 0xE019A5E6, 0x47B0ACFD, 0xED93FA9B,
	            0xE8D3C48D, 0x283B57CC, 0xF8D56629, 0x79132E28,
	            0x785F0191, 0xED756055, 0xF7960E44, 0xE3D35E8C,
	            0x15056DD4, 0x88F46DBA, 0x03A16125, 0x0564F0BD,
	            0xC3EB9E15, 0x3C9057A2, 0x97271AEC, 0xA93A072A,
	            0x1B3F6D9B, 0x1E6321F5, 0xF59C66FB, 0x26DCF319,
	            0x7533D928, 0xB155FDF5, 0x03563482, 0x8ABA3CBB,
	            0x28517711, 0xC20AD9F8, 0xABCC5167, 0xCCAD925F,
	            0x4DE81751, 0x3830DC8E, 0x379D5862, 0x9320F991,
	            0xEA7A90C2, 0xFB3E7BCE, 0x5121CE64, 0x774FBE32,
	            0xA8B6E37E, 0xC3293D46, 0x48DE5369, 0x6413E680,
	            0xA2AE0810, 0xDD6DB224, 0x69852DFD, 0x09072166,
	            0xB39A460A, 0x6445C0DD, 0x586CDECF, 0x1C20C8AE,
	            0x5BBEF7DD, 0x1B588D40, 0xCCD2017F, 0x6BB4E3BB,
	            0xDDA26A7E, 0x3A59FF45, 0x3E350A44, 0xBCB4CDD5,
	            0x72EACEA8, 0xFA6484BB, 0x8D6612AE, 0xBF3C6F47,
	            0xD29BE463, 0x542F5D9E, 0xAEC2771B, 0xF64E6370,
	            0x740E0D8D, 0xE75B1357, 0xF8721671, 0xAF537D5D,
	            0x4040CB08, 0x4EB4E2CC, 0x34D2466A, 0x0115AF84,
	            0xE1B00428, 0x95983A1D, 0x06B89FB4, 0xCE6EA048,
	            0x6F3F3B82, 0x3520AB82, 0x011A1D4B, 0x277227F8,
	            0x611560B1, 0xE7933FDC, 0xBB3A792B, 0x344525BD,
	            0xA08839E1, 0x51CE794B, 0x2F32C9B7, 0xA01FBAC9,
	            0xE01CC87E, 0xBCC7D1F6, 0xCF0111C3, 0xA1E8AAC7,
	            0x1A908749, 0xD44FBD9A, 0xD0DADECB, 0xD50ADA38,
	            0x0339C32A, 0xC6913667, 0x8DF9317C, 0xE0B12B4F,
	            0xF79E59B7, 0x43F5BB3A, 0xF2D519FF, 0x27D9459C,
	            0xBF97222C, 0x15E6FC2A, 0x0F91FC71, 0x9B941525,
	            0xFAE59361, 0xCEB69CEB, 0xC2A86459, 0x12BAA8D1,
	            0xB6C1075E, 0xE3056A0C, 0x10D25065, 0xCB03A442,
	            0xE0EC6E0E, 0x1698DB3B, 0x4C98A0BE, 0x3278E964,
	            0x9F1F9532, 0xE0D392DF, 0xD3A0342B, 0x8971F21E,
	            0x1B0A7441, 0x4BA3348C, 0xC5BE7120, 0xC37632D8,
	            0xDF359F8D, 0x9B992F2E, 0xE60B6F47, 0x0FE3F11D,
	            0xE54CDA54, 0x1EDAD891, 0xCE6279CF, 0xCD3E7E6F,
	            0x1618B166, 0xFD2C1D05, 0x848FD2C5, 0xF6FB2299,
	            0xF523F357, 0xA6327623, 0x93A83531, 0x56CCCD02,
	            0xACF08162, 0x5A75EBB5, 0x6E163697, 0x88D273CC,
	            0xDE966292, 0x81B949D0, 0x4C50901B, 0x71C65614,
	            0xE6C6C7BD, 0x327A140A, 0x45E1D006, 0xC3F27B9A,
	            0xC9AA53FD, 0x62A80F00, 0xBB25BFE2, 0x35BDD2F6,
	            0x71126905, 0xB2040222, 0xB6CBCF7C, 0xCD769C2B,
	            0x53113EC0, 0x1640E3D3, 0x38ABBD60, 0x2547ADF0,
	            0xBA38209C, 0xF746CE76, 0x77AFA1C5, 0x20756060,
	            0x85CBFE4E, 0x8AE88DD8, 0x7AAAF9B0, 0x4CF9AA7E,
	            0x1948C25C, 0x02FB8A8C, 0x01C36AE4, 0xD6EBE1F9,
	            0x90D4F869, 0xA65CDEA0, 0x3F09252D, 0xC208E69F,
	            0xB74E6132, 0xCE77E25B, 0x578FDFE3, 0x3AC372E6  ]
	    ];

	    var BLOWFISH_CTX = {
	        pbox: [],
	        sbox: []
	    };

	    function F(ctx, x){
	        let a = (x >> 24) & 0xFF;
	        let b = (x >> 16) & 0xFF;
	        let c = (x >> 8) & 0xFF;
	        let d = x & 0xFF;

	        let y = ctx.sbox[0][a] + ctx.sbox[1][b];
	        y = y ^ ctx.sbox[2][c];
	        y = y + ctx.sbox[3][d];

	        return y;
	    }

	    function BlowFish_Encrypt(ctx, left, right){
	        let Xl = left;
	        let Xr = right;
	        let temp;

	        for(let i = 0; i < N; ++i){
	            Xl = Xl ^ ctx.pbox[i];
	            Xr = F(ctx, Xl) ^ Xr;

	            temp = Xl;
	            Xl = Xr;
	            Xr = temp;
	        }

	        temp = Xl;
	        Xl = Xr;
	        Xr = temp;

	        Xr = Xr ^ ctx.pbox[N];
	        Xl = Xl ^ ctx.pbox[N + 1];

	        return {left: Xl, right: Xr};
	    }

	    function BlowFish_Decrypt(ctx, left, right){
	        let Xl = left;
	        let Xr = right;
	        let temp;

	        for(let i = N + 1; i > 1; --i){
	            Xl = Xl ^ ctx.pbox[i];
	            Xr = F(ctx, Xl) ^ Xr;

	            temp = Xl;
	            Xl = Xr;
	            Xr = temp;
	        }

	        temp = Xl;
	        Xl = Xr;
	        Xr = temp;

	        Xr = Xr ^ ctx.pbox[1];
	        Xl = Xl ^ ctx.pbox[0];

	        return {left: Xl, right: Xr};
	    }

	    /**
	     * Initialization ctx's pbox and sbox.
	     *
	     * @param {Object} ctx The object has pbox and sbox.
	     * @param {Array} key An array of 32-bit words.
	     * @param {int} keysize The length of the key.
	     *
	     * @example
	     *
	     *     BlowFishInit(BLOWFISH_CTX, key, 128/32);
	     */
	    function BlowFishInit(ctx, key, keysize)
	    {
	        for(let Row = 0; Row < 4; Row++)
	        {
	            ctx.sbox[Row] = [];
	            for(let Col = 0; Col < 256; Col++)
	            {
	                ctx.sbox[Row][Col] = ORIG_S[Row][Col];
	            }
	        }

	        let keyIndex = 0;
	        for(let index = 0; index < N + 2; index++)
	        {
	            ctx.pbox[index] = ORIG_P[index] ^ key[keyIndex];
	            keyIndex++;
	            if(keyIndex >= keysize)
	            {
	                keyIndex = 0;
	            }
	        }

	        let Data1 = 0;
	        let Data2 = 0;
	        let res = 0;
	        for(let i = 0; i < N + 2; i += 2)
	        {
	            res = BlowFish_Encrypt(ctx, Data1, Data2);
	            Data1 = res.left;
	            Data2 = res.right;
	            ctx.pbox[i] = Data1;
	            ctx.pbox[i + 1] = Data2;
	        }

	        for(let i = 0; i < 4; i++)
	        {
	            for(let j = 0; j < 256; j += 2)
	            {
	                res = BlowFish_Encrypt(ctx, Data1, Data2);
	                Data1 = res.left;
	                Data2 = res.right;
	                ctx.sbox[i][j] = Data1;
	                ctx.sbox[i][j + 1] = Data2;
	            }
	        }

	        return true;
	    }

	    /**
	     * Blowfish block cipher algorithm.
	     */
	    var Blowfish = C_algo.Blowfish = BlockCipher.extend({
	        _doReset: function () {
	            // Skip reset of nRounds has been set before and key did not change
	            if (this._keyPriorReset === this._key) {
	                return;
	            }

	            // Shortcuts
	            var key = this._keyPriorReset = this._key;
	            var keyWords = key.words;
	            var keySize = key.sigBytes / 4;

	            //Initialization pbox and sbox
	            BlowFishInit(BLOWFISH_CTX, keyWords, keySize);
	        },

	        encryptBlock: function (M, offset) {
	            var res = BlowFish_Encrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
	            M[offset] = res.left;
	            M[offset + 1] = res.right;
	        },

	        decryptBlock: function (M, offset) {
	            var res = BlowFish_Decrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
	            M[offset] = res.left;
	            M[offset + 1] = res.right;
	        },

	        blockSize: 64/32,

	        keySize: 128/32,

	        ivSize: 64/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.Blowfish.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.Blowfish.decrypt(ciphertext, key, cfg);
	     */
	    C.Blowfish = BlockCipher._createHelper(Blowfish);
	}());


	return CryptoJS.Blowfish;

}));
}(blowfish));

(function (module, exports) {
(function (root, factory, undef) {
	{
		// CommonJS
		module.exports = factory(core.exports, x64Core.exports, libTypedarrays.exports, encUtf16.exports, encBase64.exports, encBase64url.exports, md5$1.exports, sha1$1.exports, sha256$1.exports, sha224.exports, sha512.exports, sha384.exports, sha3.exports, ripemd160.exports, hmac.exports, pbkdf2.exports, evpkdf.exports, cipherCore.exports, modeCfb.exports, modeCtr.exports, modeCtrGladman.exports, modeOfb.exports, modeEcb.exports, padAnsix923.exports, padIso10126.exports, padIso97971.exports, padZeropadding.exports, padNopadding.exports, formatHex.exports, aes.exports, tripledes.exports, rc4.exports, rabbit.exports, rabbitLegacy.exports, blowfish.exports);
	}
}(commonjsGlobal, function (CryptoJS) {

	return CryptoJS;

}));
}(cryptoJs));

var CryptoJS = cryptoJs.exports;

/* eslint-disable spellcheck/spell-checker */
// 十六位十六进制数作为密钥
var SECRET_KEY = CryptoJS.enc.Utf8.parse('1998092819980608');
// 十六位十六进制数作为密钥偏移量
var SECRET_IV = CryptoJS.enc.Utf8.parse('2017040220220130');
// 密钥测试正则表达式
var SECRET_KEY_REG = /^[0-9a-fA-F]{16}$/i;
/**
 * 加密函数
 * 防君子不防小人，也可以通过后台获取密钥。
 * @example
 * encrypt("value"); /// 加密后的字符串
 * encrypt("value", "1234567887654321","1234567887654321"); /// 自定义密钥加密后的字符串
 * @param data 需要加密的数据
 * @param secretKey [可选] 十六位十六进制数作为密钥
 * @param secretIv [可选] 十六位十六进制数作为密钥偏移量
 * @returns
 * @category Crypto-密码学
 */
function encrypt(data, secretKey, secretIv) {
    if (!data) {
        return '';
    }
    if (secretKey && !SECRET_KEY_REG.test(secretKey)) {
        throw new Error('secretKey 必须是十六位十六进制数');
    }
    if (secretIv && !SECRET_KEY_REG.test(secretIv)) {
        throw new Error('secretIv 必须是十六位十六进制数');
    }
    if (typeof data == 'object') {
        try {
            data = JSON.stringify(data);
        }
        catch (error) {
            throw new Error('encrypt error' + JSON.stringify(error));
        }
    }
    var KEY = !secretKey ? SECRET_KEY : CryptoJS.enc.Utf8.parse(secretKey);
    var IV = !secretIv ? SECRET_IV : CryptoJS.enc.Utf8.parse(secretIv);
    var dataHex = CryptoJS.enc.Utf8.parse(data);
    var encrypted = CryptoJS.AES.encrypt(dataHex, KEY, {
        iv: IV,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.ciphertext.toString();
}
/**
 * 解密函数
 * 防君子不防小人，也可以通过后台获取密钥。
 * @example
 * decrypt("加密后的字符串"); /// 解密后的字符串
 * decrypt("加密后的字符串", true); /// 解密后的字符串并转换为 JSON 对象
 * decrypt("加密后的字符串", "1234567887654321","1234567887654321"); /// 自定义密钥解密后的字符串
 * @param dataStr 加密后的字符串
 * @param jsonDecode 是否需要解析成 json
 * @param secretKey [可选] 十六位十六进制数作为密钥
 * @param secretIv [可选] 十六位十六进制数作为密钥偏移量
 * @returns
 * @category Crypto-密码学
 */
function decrypt(dataStr, jsonDecode, secretKey, secretIv) {
    if (jsonDecode === void 0) { jsonDecode = false; }
    if (!dataStr) {
        return '';
    }
    if (secretKey && !SECRET_KEY_REG.test(secretKey)) {
        throw new Error('secretKey 必须是十六位十六进制数');
    }
    if (secretIv && !SECRET_KEY_REG.test(secretIv)) {
        throw new Error('secretIv 必须是十六位十六进制数');
    }
    var KEY = !secretKey ? SECRET_KEY : CryptoJS.enc.Utf8.parse(secretKey);
    var IV = !secretIv ? SECRET_IV : CryptoJS.enc.Utf8.parse(secretIv);
    var encryptedHexStr = CryptoJS.enc.Hex.parse(dataStr);
    var str = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    var decrypt = CryptoJS.AES.decrypt(str, KEY, {
        iv: IV,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });
    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    var result = decryptedStr.toString();
    return jsonDecode ? JSON.parse(result) : result;
}
/**
 * 配合使用 Java 加密算法对字符串进行对称加密
 * @example
 * javaEncrypt("需要加密的字符串"); /// 'SotKrdjNkEIvnQ0OBImYuViSs+WdpjjILvxE1UpNedA='
 * javaDecrypt("SotKrdjNkEIvnQ0OBImYuViSs+WdpjjILvxE1UpNedA="); /// '需要加密的字符串'
 * // java 实例代码
 * import javax.crypto.Cipher;
 * import javax.crypto.spec.IvParameterSpec;
 * import javax.crypto.spec.SecretKeySpec;
 * import java.nio.charset.StandardCharsets;
 * import java.util.Base64;
 *
 * public class EncryptionUtils {
 *     private static final String SECRET_KEY = "自定义的密钥";
 *     private static final String SECRET_IV = "自定义的偏移量";
 *
 *     public static String encrypt(String data, String secretKey, String secretIV) throws Exception {
 *         SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "AES");
 *         IvParameterSpec ivParameterSpec = new IvParameterSpec(secretIV.getBytes(StandardCharsets.UTF_8));
 *
 *         Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
 *         cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec, ivParameterSpec);
 *
 *         byte[] encryptedBytes = cipher.doFinal(data.getBytes(StandardCharsets.UTF_8));
 *         return Base64.getEncoder().encodeToString(encryptedBytes);
 *     }
 *
 *     public static String decrypt(String encryptedData) throws Exception {
 *         SecretKeySpec secretKeySpec = new SecretKeySpec(SECRET_KEY.getBytes(StandardCharsets.UTF_8), "AES");
 *         IvParameterSpec ivParameterSpec = new IvParameterSpec(SECRET_IV.getBytes(StandardCharsets.UTF_8));
 *
 *         Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
 *         cipher.init(Cipher.DECRYPT_MODE, secretKeySpec, ivParameterSpec);
 *
 *         byte[] encryptedBytes = Base64.getDecoder().decode(encryptedData);
 *         byte[] decryptedBytes = cipher.doFinal(encryptedBytes);
 *         return new String(decryptedBytes, StandardCharsets.UTF_8);
 *     }
 *
 *     public static void main(String[] args) {
 *         try {
 *             String encryptedData = encrypt("需要加密的字符串", SECRET_KEY, SECRET_IV);
 *             System.out.println("Encrypted data: " + encryptedData); // SotKrdjNkEIvnQ0OBImYuViSs+WdpjjILvxE1UpNedA=
 *
 *             String decryptedData = decrypt(encryptedData);
 *             System.out.println("Decrypted data: " + decryptedData); // 需要加密的字符串
 *         } catch (Exception e) {
 *             e.printStackTrace();
 *         }
 *     }
 * }
 * @param dataStr 待加密的字符串
 * @param secretKey 可选的加密密钥，默认为 SECRET_KEY
 * @param secretIv 可选的加密向量，默认为 SECRET_IV
 * @returns
 * @category Crypto-密码学
 */
function javaEncrypt(dataStr, secretKey, secretIv) {
    if (!dataStr) {
        return '';
    }
    var key = !secretKey ? SECRET_KEY : CryptoJS.enc.Utf8.parse(secretKey);
    var iv = !secretIv ? SECRET_IV : CryptoJS.enc.Utf8.parse(secretIv);
    var encrypted = CryptoJS.AES.encrypt(dataStr, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString();
}
/**
 * 配合使用 Java 对称解密函数
 * @example
 * javaEncrypt("需要加密的字符串"); /// 'SotKrdjNkEIvnQ0OBImYuViSs+WdpjjILvxE1UpNedA='
 * javaDecrypt("SotKrdjNkEIvnQ0OBImYuViSs+WdpjjILvxE1UpNedA="); /// '需要加密的字符串'
 * @param encryptedData 待解密数据
 * @param secretKey 可选参数，密钥，若不传入则使用默认密钥 SECRET_KEY
 * @param secretIv 可选参数，向量，若不传入则使用默认向量 SECRET_IV
 * @returns
 * @category Crypto-密码学
 */
function javaDecrypt(encryptedData, secretKey, secretIv) {
    if (!encryptedData) {
        return '';
    }
    var key = !secretKey ? SECRET_KEY : CryptoJS.enc.Utf8.parse(secretKey);
    var iv = !secretIv ? SECRET_IV : CryptoJS.enc.Utf8.parse(secretIv);
    var decrypted = CryptoJS.AES.decrypt(encryptedData, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}
/**
 * md5 加密函数
 * @example
 * md5("value"); /// 加密后的字符串
 * @param str 需要加密的字符串
 * @returns
 * @category Crypto-密码学
 */
function md5(str) {
    return CryptoJS.MD5(str).toString();
}
/**
 * sha1 加密函数
 * @example
 * sha1("value"); /// 加密后的字符串
 * @param str 需要加密的字符串
 * @returns
 * @category Crypto-密码学
 */
function sha1(str) {
    return CryptoJS.SHA1(str).toString();
}
/**
 * sha256 加密函数
 * @example
 * sha256("value"); /// 加密后的字符串
 * @param str 需要加密的字符串
 * @returns
 * @category Crypto-密码学
 */
function sha256(str) {
    return CryptoJS.SHA256(str).toString();
}
/**
 * base64 加密函数
 * `使用 url 中时建议使用 encodeURIComponent 再次编码，因为单独 + 号在 url 中会被解析成空格。`
 * `使用 encodeURIComponent 会把 + 解析为 %2B 与空格 %20 区分`
 * @example
 * base64Encode("value"); /// 加密后的字符串
 * base64Encode("value", true); /// 加密后的字符串并替换 +/=
 * @param str 需要加密的字符串
 * @param replaceChar 是否替换结果字符串中的特殊字符 '+/='，适用于 url 编码。
 * @returns
 * @category Crypto-密码学
 */
function base64Encode(str, replaceChar) {
    if (replaceChar === void 0) { replaceChar = false; }
    var result = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(str));
    return replaceChar ? result.replace(/\+\//g, '-_').replace(/\=/g, '') : result;
}
/**
 * base64 解密函数
 * @example
 * base64Decode("加密后的字符串"); /// 解密后的字符串
 * @param str 需要加密的字符串
 * @returns
 * @category Crypto-密码学
 */
function base64Decode(str) {
    return CryptoJS.enc.Base64.parse(str).toString(CryptoJS.enc.Utf8);
}
/**
 * 获取 CryptoJS
 * @example
 * getCryptoJS(); /// CryptoJS
 * getCryptoJS().MD5(str).toString(); /// md5 加密后的字符串
 * @returns
 * @category Crypto-密码学
 */
function getCryptoJS() {
    return CryptoJS;
}

/* eslint-disable spellcheck/spell-checker, max-lines */
/*
 * @Author: HxB
 * @Date: 2022-08-15 15:54:41
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-08-21 11:45:01
 * @property: 常用共用的一些常量
 * @FilePath: \js-xxx\src\Data\index.ts
 */
/**
 * @enum
 * Http Methods
 * @category 常量
 */
exports.HttpMethod = void 0;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
    HttpMethod["PUT"] = "PUT";
    HttpMethod["PATCH"] = "PATCH";
    HttpMethod["DELETE"] = "DELETE";
    HttpMethod["OPTIONS"] = "OPTIONS";
    HttpMethod["get"] = "GET";
    HttpMethod["post"] = "POST";
    HttpMethod["put"] = "PUT";
    HttpMethod["patch"] = "PATCH";
    HttpMethod["delete"] = "DELETE";
    HttpMethod["options"] = "OPTIONS";
})(exports.HttpMethod || (exports.HttpMethod = {}));
/**
 * @category 常量
 * @property
 * 常用返回状态码 code message
 */
var CODE_MSG = {
    200: '成功',
    201: '操作成功',
    202: '请求已进入队列（异步任务）',
    204: '删除成功',
    301: '重定向-资源永久移动',
    302: '重定向-资源临时移动',
    303: '重定向-查看其它地址',
    304: '缓存-资源未修改',
    400: '客户端请求错误',
    401: '用户校验不通过（令牌、用户名、密码错误）',
    403: '用户权限不足',
    404: '请求不存在',
    410: '资源永久删除',
    422: '创建资源-验证错误',
    500: '服务器发生错误',
    502: '网关错误',
    503: '服务不可用（暂时过载或维护）',
    504: '网关超时',
};
/**
 * @category 常量
 * @property
 * content types
 */
var CONTENT_TYPES = {
    '7z': 'application/octet-stream',
    avi: 'video/x-msvideo',
    bmp: 'image/bmp',
    css: 'text/css',
    csv: 'text/csv',
    conf: 'text/plain',
    class: 'application/x-java',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    doc: 'application/msword',
    dv: 'video/dv',
    dwg: 'image/vnd.dwg',
    exe: 'application/x-msdownload',
    fig: 'image/x-xfig',
    flac: 'audio/x-flac',
    flv: 'video/x-flv',
    gif: 'image/gif',
    html: 'text/html',
    ico: 'image/x-icon',
    ini: 'text/plain',
    jpeg: 'image/jpeg',
    jpg: 'image/jpg',
    js: 'text/javascript',
    jsonp: 'application/jsonp',
    json: 'application/json',
    log: 'text/plain',
    lock: 'text/plain',
    m4a: 'audio/mp4',
    mkv: 'video/x-matroska',
    mp3: 'audio/mpeg',
    mp4: 'video/mp4',
    m4v: 'video/mp4',
    moov: 'video/quicktime',
    mov: 'video/quicktime',
    movie: 'video/x-sgi-movie',
    md: 'text/plain',
    ogg: 'video/x-theora+ogg',
    oga: 'audio/ogg',
    ppk: 'text/plain',
    php: 'application/x-php',
    py: 'text/x-python',
    png: 'image/png',
    pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    ppt: 'application/vnd.ms-powerpoint',
    pdf: 'application/pdf',
    reg: 'text/x-ms-regedit',
    rar: 'application/octet-stream',
    so: 'application/x-sharedlib',
    svg: 'image/svg+xml',
    sql: 'text/x-sql',
    'tar.gz': 'application/x-compressed-tar',
    tgz: 'application/x-compressed-tar',
    ttf: 'application/x-font-ttf',
    tif: 'image/tiff',
    txt: 'text/plain',
    ts: 'text/plain',
    tsx: 'text/plain',
    jsx: 'text/plain',
    vue: 'text/plain',
    scss: 'text/plain',
    less: 'text/plain',
    uri: 'text/x-uri',
    url: 'text/x-uri',
    wav: 'audio/x-wav',
    wbmp: 'image/vnd.wap.wbmp',
    webm: 'video/webm',
    wmv: 'video/x-ms-wmv',
    xls: 'application/vnd.ms-excel',
    xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    xhtml: 'application/xhtml+xml',
    xml: 'application/xml',
    xmind: 'application/octet-stream',
    yml: 'text/plain',
    yaml: 'text/plain',
    zip: 'application/x-zip-compressed',
    binary: 'application/octet-stream',
    form: 'application/x-www-form-urlencoded',
    file: 'multipart/form-data',
    utf8: 'charset=utf-8',
};
/**
 * @category 常量
 * @property
 * 根据年份求生肖数据，年 % 12 。
 */
var ANIMALS = ['猴', '鸡', '狗', '猪', '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊'];
/**
 * @category 常量
 * @property
 * 星座数据
 */
var CONSTELLATION = {
    Capricorn: { cn: '魔羯', en: 'Capricorn', date: '12.22-1.19' },
    Aquarius: { cn: '水瓶', en: 'Aquarius', date: '1.20-2.18' },
    Pisces: { cn: '双鱼', en: 'Pisces', date: '2.19-3.20' },
    Aries: { cn: '白羊', en: 'Aries', date: '3.21-4.19' },
    Taurus: { cn: '金牛', en: 'Taurus', date: '4.20-5.20' },
    Gemini: { cn: '双子', en: 'Gemini', date: '5.21-6.21' },
    Cancer: { cn: '巨蟹', en: 'Cancer', date: '6.22-7.22' },
    Leo: { cn: '狮子', en: 'Leo', date: '7.23-8.22' },
    Virgo: { cn: '处女', en: 'Virgo', date: '8.23-9.22' },
    Libra: { cn: '天秤', en: 'Libra', date: '9.23-10.23' },
    Scorpio: { cn: '天蝎', en: 'Scorpio', date: '10.24-11.22' },
    Sagittarius: { cn: '射手', en: 'Sagittarius', date: '11.23-12.21' },
};
/**
 * @category 常量
 * @property
 * 星期数据
 */
var WEEKS = [
    {
        key: 'Monday',
        name: '星期一',
        abbr: 'Mon',
        id: 1,
        others: 'Day of the Moon.(月亮日)',
    },
    {
        key: 'Tuesday',
        name: '星期二',
        abbr: 'Tues',
        id: 2,
        others: 'Day of the Mars.(火星日)',
    },
    {
        key: 'Wednesday',
        name: '星期三',
        abbr: 'Wed',
        id: 3,
        others: 'Day of the Mercury.(水星日)',
    },
    {
        key: 'Thursday',
        name: '星期四',
        abbr: 'Thur',
        id: 4,
        others: 'Day of Jupiter.(木星日)',
    },
    {
        key: 'Friday',
        name: '星期五',
        abbr: 'Fri',
        id: 5,
        others: 'Day of Venus.(金星日)',
    },
    {
        key: 'Saturday',
        name: '星期六',
        abbr: 'Sat',
        id: 6,
        others: 'Day of Saturn.(土星日)',
    },
    {
        key: 'Sunday',
        name: '星期日',
        abbr: 'Sun',
        id: 7,
        others: 'Day of the Sun.(太阳日)',
    },
];
/**
 * @category 常量
 * @property
 * 月份数据
 */
var MONTHS = [
    {
        key: 'January',
        name: '一月',
        abbr: 'Jan',
        id: 1,
        others: '寅.虎',
    },
    {
        key: 'February',
        name: '二月',
        abbr: 'Feb',
        id: 2,
        others: '卯.兔',
    },
    {
        key: 'March',
        name: '三月',
        abbr: 'March',
        id: 3,
        others: '辰.龙',
    },
    {
        key: 'April',
        name: '四月',
        abbr: 'Apr',
        id: 4,
        others: '巳.蛇',
    },
    {
        key: 'May',
        name: '五月',
        abbr: 'May',
        id: 5,
        others: '午.马',
    },
    {
        key: 'June',
        name: '六月',
        abbr: 'Jun',
        id: 6,
        others: '未.羊',
    },
    {
        key: 'July',
        name: '七月',
        abbr: 'Jul',
        id: 7,
        others: '申.猴',
    },
    {
        key: 'August',
        name: '八月',
        abbr: 'Aug',
        id: 8,
        others: '酉.鸡',
    },
    {
        key: 'September',
        name: '九月',
        abbr: 'Sept',
        id: 9,
        others: '戌.狗',
    },
    {
        key: 'October',
        name: '十月',
        abbr: 'Oct',
        id: 10,
        others: '亥.猪',
    },
    {
        key: 'November',
        name: '十一月',
        abbr: 'Nov',
        id: 11,
        others: '子.鼠',
    },
    {
        key: 'December',
        name: '十二月',
        abbr: 'Dec',
        id: 12,
        others: '丑.牛',
    },
];
/**
 * @category 常量
 * @property
 * 常用键盘控制键
 */
var KEYBOARD_CODE = {
    BACK_SPACE: 8,
    TAB: 9,
    ENTER: 13,
    ENTER_S: 108,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    CAPS_LOCK: 20,
    ESC: 27,
    SPACE: 32,
    END: 35,
    HOME: 36,
    INSERT: 45,
    DELETE: 46,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    CONTEXT_MENU: 93,
    DOT: 110,
    ADD: 107,
    SUB: 109,
    MULTIPLY: 106,
    DIVIDE: 111,
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
};
/**
 * @category 常量
 * @property
 * 性别常量女(0)
 */
var WOMAN = 0;
/**
 * @category 常量
 * @property
 * 性别常量男(1)
 */
var MAN = 1;
/**
 * @category 常量
 * @property
 * 血型
 */
var BLOOD_GROUP = {
    A: 'A 型',
    B: 'B 型',
    O: 'O 型',
    AB: 'AB 型',
};
/**
 * @category 常量
 * @property
 * 血型基础信息
 */
var BLOOD_GROUP_INFO = {
    A: {
        value: 'A',
        label: 'A型',
        color: '#1890FF',
        lower: 'a',
        upper: 'A',
    },
    B: {
        value: 'B',
        label: 'B型',
        color: '#36AE7C',
        lower: 'b',
        upper: 'B',
    },
    O: {
        value: 'O',
        label: 'O型',
        color: '#E64848',
        lower: 'o',
        upper: 'O',
    },
    AB: {
        value: 'AB',
        label: 'AB型',
        color: '#A575F2',
        lower: 'a',
        upper: 'A',
    },
    unknown: {
        value: 'unknown',
        label: '未知',
        color: '#CB9D83',
        lower: 'unknown',
        upper: 'UNKNOWN',
    },
};
/**
 * @category 常量
 * @property
 * 角色管理对象
 */
var ROLES = {
    guest: '访客',
    viewer: '只读用户',
    user: '用户',
    manager: '管理员',
    admin: '超级管理员',
};
/**
 * @category 常量
 * @property
 * 身份证省份
 */
var ID_CARD_PROVINCE = {
    '11': '北京',
    '12': '天津',
    '13': '河北',
    '14': '山西',
    '15': '内蒙古',
    '21': '辽宁',
    '22': '吉林',
    '23': '黑龙江',
    '31': '上海',
    '32': '江苏',
    '33': '浙江',
    '34': '安徽',
    '35': '福建',
    '36': '江西',
    '37': '山东',
    '41': '河南',
    '42': '湖北',
    '43': '湖南',
    '44': '广东',
    '45': '广西',
    '46': '海南',
    '50': '重庆',
    '51': '四川',
    '52': '贵州',
    '53': '云南',
    '54': '西藏',
    '61': '陕西',
    '62': '甘肃',
    '63': '青海',
    '64': '宁夏',
    '65': '新疆',
    '71': '台湾',
    '81': '香港',
    '82': '澳门',
    '91': '国外',
};
/**
 * @category 常量
 * @property
 * 数字基础数据
 */
var BASE_NUMBER = '0123456789';
/**
 * @category 常量
 * @property
 * 小写字母基础数据
 */
var BASE_CHAR_LOW = 'abcdefghijklmnopqrstuvwxyz';
/**
 * @category 常量
 * @property
 * 大写字母基础数据
 */
var BASE_CHAR_UP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
/**
 * @category 常量
 * @property
 * 进制转换基础数据
 */
var TRANSFER_STR = BASE_NUMBER + BASE_CHAR_LOW + BASE_CHAR_UP + '_@';
/**
 * @category 常量
 * @property
 * 颜色数据
 */
var BS_COLORS = {
    dark: '#343a40',
    black: '#343a40',
    light: '#f8f9fa',
    white: '#f8f9fa',
    info: '#17a2b8',
    cyan: '#17a2b8',
    success: '#28a745',
    green: '#28a745',
    warning: '#ffc107',
    yellow: '#ffc107',
    danger: '#dc3545',
    red: '#dc3545',
    primary: '#007bff',
    blue: '#007bff',
    secondary: '#6c757d',
    default: '#6c757d',
    grey: '#6c757d',
};
/**
 * @category 常量
 * @property
 * ICONS 通用小图标
 */
var ICONS = {
    // eslint-disable-next-line spellcheck/spell-checker
    info: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAABwJJREFUeF7tW2lsVFUUPnfagiAwJrYz1YJ1SURpDYgrJiqJigUUIqGAmhhGgxuJ0ylCxB9aJcYN2xkiUSSxmKDIoqIgVDRRqiLFH1ZsXZFQqNKZ4UdborLYuX7ndQqzvDdvmWmZefUm02XeWb937rnnboL6ublfli5RQLOlpEuhqhCfIhH9Hf2fLTiCT1hGf/P/QtCv8iRtCi4Wof40EbZkvilO51MlJFfCqRvhjMOKFoAWgYFfkqAN/QVGRgFw+eV98PQBOHuTFYcN8DRGiFaHqsRaA7SGSDICgNsvZ0DbcxBWbkhrmkSIjB+ga2mHT3ycpigEVxoNjl8Hdj+EXJ+GGMusAOJr6aAlIa/YZVWINQBWyQLX31TnELTQquJM8iHPvBrspEVUI06YlWsaAHedvBhJbQMUXWVWWX/SIxr2RCTdG64W+8zoMQWAOyBnkqS1YBphRslA0QKEo1KQB0nyPaM6jQFQL89yddLybAl5PeeULhGhJVQt/tGj1QWAQx5CPkLYl+kJy6bnPFKgS8zS6xK6ABT7Jfd3LmpyriES1gerxLxUhqcEAMPcEyB4Puc8jzEYICwFCC9o+aAJgKtWTkHYb7daxmYLaFxORxw0PewVDWo2qQLgWiHHiwg14uGobHEkHTsAQhdK6Mlhn2hOlKMKABLfXrz5K9JRmoW8jR1V4mZdADDWzxOS1mWhA2mbhFHhrpBPbI4VFB8BNdLhPof24cuL0taWhQLQFb4PdtFElMzoEb0tDoDiOjkf39Rnoe2ZM0mSB7PINckArJBD3RH6ya5vv89hRMH+YB6No8fE8bgIQOKrQuKryxzU2SsJIPiCPuGPB8Avd+Pt8/ze9g3FUROKI2UNQ8kBRStlseMk/Yl/dEtjO6ADAGSPpJIjPnFYcdgVkA87JL1mB+eM+oDV1kewkvS6AgAmPFwm3m6U2SZ0n6AwqhCFL8qR+UOwLi9oiE0cM+aGpBMdw2mEsHPlp4dEj6CpAsVPDd7+03rEtnwu6RmBOT8ngoesOjhqKFEZNrxuGE20q52oFZtc3UqJkbqVFfXycWOe1rAeB6amFnVpScZosEqgANqMAmimvvpkCnai/g6iMTGT5i44X/UpUcPv6hLZiUWoNh68Mv75G98RvdKkDV7FJdiAuI3ICf6+dqibyLPVGHhq1qAg+pAjwFIBxI7s8cQbFKvk1nfUDXsWE9IFE9TBWY3Z+lM71YH+7B51Hgb8WsxejERdogQuiDgHHEAOKDUbAYEpRHMu1+Zq2I+3syX+OUeMliN9lGrAvT+baFKJti4t4HR9ktQmUAMcA2FMYOmyKQR6RjHNeYF4WXPH9YZxqsbdZ/2P8RSHval5vvmDaNYmY3YnUB3nHNCJHOA0y24HAHipjCPgZzg/1iwAqfoyy8pkF6i/k6iCdyc0muUuQPQL54AvkAOS1sr0AOEk+O39GJo06seBSoLd2A695k1rSRDbfDt5FHgXdcBcPYfVnnNSW4O3M3rk6adskHdH6mHwcUxEE0cCfovLd6ceBjnxxgLefpRoPhKtkRpCzX7eOOEc4EcO0Ekz2vBwJJQDiL5CqAUFjZEhicFjPm7MY8QJq7q0rEcOCHAE5Pzuj5XoZR5eGRJFAVmRJ2m7VSG5zKdMhqhGDnE7KWRlKMxl59H/u4PDqFBZEEknEeYqCH07x70rQoNhPyDxTUX3BxQAzq2VJfkOOjSYFkUjBXR+eKHoOLUKbHVWmItdIGlZPNoNBs3KUOyhidP7AINkawwv+0CHgy5L2hobNMlQc3OUEeDtcSc12/BwhJKqEPotOFE6XnN7nInsXBly5Zd4Vkh1L9DqFDmrRwRMfXEuYHKijaoAFPrlWMwPmuxSHnPZi73Aq/H2fzMEgJIQA3KajNAWOxyTw6xvaqhaYJUiuf1/UFKv36JCfBsoaazK63Gf8ecbsQM8J5UV+gciauWwYkFfYd1w4hl3x4QB6PfNQSdNIo/gZX/Npg8AswIEt6B1VrfQTNidEVI4vxXOV+o5z8qMAaBUERLLZ/QkOJZl66yRj77gUxPy0jISOO5poBkHICqMb4iBiU+SDjcgf+BIJPHliEqzN8lMA8AeFdXJCXmCPsCfFw6chyk0YY8P4/wMXJXZa9YeSwCwEtwOPRtXYh9FnFVDSLFZxZmgh+4gAr1W/ksrccX2LysyLQNwShnuE7k7aQEELUZ+GGPFCLM8fNoTl6NeCjnpLSOJLpX89AGIkY7q0QPj7oZQnT1gsy4r9Mcwnfsct5A3dnhFxs4zZxSAPre4e1AB3QKDp2PonIbvcYDGUmsHoNvg9LZgD+0wcgvMrJZ+ASDRCJxEKxc9OKDsoFKc2S+F0guUQxn4W6EV1IafB+FsG67mtaFvH8R3rUGvaDHrkFn6/wBmy2rRSkHjtgAAAABJRU5ErkJggg==',
    success: 
    // eslint-disable-next-line spellcheck/spell-checker
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAFEtJREFUeF7tXXlcE2fefyYJJFwhgUCAyE24EVRutWgvrVbdd2372q3drUd17WFrtXa72i29tra29ai2dd2+fd0etnV3W7VV64UH9yGg4Qa5IZCQhARIIMe8n8kWX0XIzCSTZBJm/uMzv+d3fJ8vk5nf83t+DwSc8NpVk5/AhGgPjGp1GcO6sTiVViPQ6HUsrUHP0MIGutagp4/q9ZBGr4OQ8Fl0Bsyk02EXGl3vAtH0LjS6jkVnaNgurE4PF9d6FoNRooV157Yl3FPrbHAZAXDka9GZv/ssCBRuVuvGFvVphuP7NcNeo79OLNFxIUThu3mq/FgeNR4M19NXBjsP/Dz/CTnRdmypz+EIsL/pit+w2vC8QqNZIhkdjhWrhzxsCdhEWwFunsN8lmedN5N5ksH0/GRbTKrUnv7gte0QBMiF8xi8eubLbarBdY1KaYTOYCCl3y40OhzD5jWHsLmHpTEje3KhhTq8E2JreVICiYAAwzDtVFfTqmpZ71aRXJysGNPQbQ2OJfa4rm76JJ+AqhSfwPcXCaL+CUGQwRJ91hpLSgL8s1W0pbi/87XawX6utQK3pd54jr8s0z/k9UfCEg7Y0i4WW6QhAAzD9B87ancW9LVvrVVIvLA472gyiRx/1byA8PeWBcfsgiBITwb/SUGAfzRVbamS9bxdPyhxJwMo1vYhnuM/PNM3YOfvI2fttbYtNP12JcB3baKFlZLuo9flYj6ao854P8UnoDeGy3/sD5Ep+faKzy4E+LKtPLBDrjpZIu2ao4NJ+W5ks/lwodFAGi+4MILt+9vfRST12czwr4ZsSgDkzX5PTcH/lPR3PqnSjdFsHSyZ7XFcmYZ0v5AvXojP2mDLLwabEeB8X3vE2Y66EpG8j0fmibC3byk+gZIsfuisZcEx3bbwxSYEONpStfZMd8shiWaIYYugHN0G381Tu0ggfGJVxMxj1o7FqgSAYRj6uK7oh/PdLSum+2893ol0pTPgxUGRR/4Yl7kG71g88lYjAPJd/0r5L/UieV8UHoco2TsRSOUJ6t6YdV+StfIGViHA/qZidtOApKVFKaN+7wlgdJy3X1+EZ2jUswkJQwSou0MF4QQ4VFMeUqnovtExrGAT7ex01hfmyRlM8uBFb0qe208kDoQS4HBjRVxRX9s1sXqIRaSTlK7/IBDkzh7J8A9JfTp6Th1RmBBGgEON5RkF4tarUs2IC1HOUXruRsCf5aHNCgibvzE6tYQIfAghwIG6kugySYdIQk0+EXOCqsOP5a5N8wtJfC4uoxFVGEXAYgJ8VFUoEKl6m8TqITdLnaHGY0cg0N1rZB53RuSahHQx9lF3S1pEgNzyk+79WkNPm0rhbYkT1FjzEEBeDP1daUG5qctGzNMAgNkEyM3LY8jchjualQOB5hqnxlmOQKSXT484Ux1yDHrMrPoCswmwvexMhUjeN9vyECgNliKQzA0sezftwXRz9JhFgHeq814v6OvINccgNcY6CCwICHtt+8yct/Fqx02AD65fnZPf3142ZtDjHovXOUoeOwJudIYhhx81e3NiRjX2UTjfATaUl7sY1B2yHrXKE48RStY2CIR4cJQBY2zf3IXYy9Fx/Rf/5dr5snJpd6ptwqGsmINAhl9w/uuz7p2PdSxmAuy+nr8xT9zyGVbFlJz9EHhohnD98/HZn2PxABMBcmtqXG9Ka5XS0REmFqWUjH0R4Lt5qkPn+bCx7EzCRIC3qi/+XNTXucS+YVHW8SAwPyD82Ksz73kMbQwqAXbXFiRe7Wm9rqPe+tGwJNV941dBQHDSZpQt7agE2Fz8U2ezcmAGqaKjnMGEQBI3oPW9tEURpoRNEmCPqGD7uZ7m9zBZo4RIicBvwuJe3BCdvm8q50wSYEP+j0NdI4N23X9PSlQdyKloNk+5N3PplIt1UxJgX03htl+6m3Y7UKyUq1MgsDI0/rl1MWkHJ7s9JQE2FRyXtw8rOBSqjo9ANNt3YG/mw5MW6E5KgA9FBU9f6Gn+m+OHTkUwjsDK8MTV64Rzvp6IyKQEeL7opLhFJZuWO3adlTJCNq93X+bSIFQCHGkuX/jdzZqLzgrEdI5rVUTKfb+PSr5jbu96ArxVdfFqUX/nvOkMlLPGnu0XemXnrAU5t8d3FwEev/SddnBMQ23idEIWcJlu2q9zHnOdkgDvi66sv9TTetgJY7dqSPcHRYItCXNRbXxaXwJ+6mxAlbOmwP2CqLUvJcz9YtzGHU+AP5Wfqbku64u3pgPOpjvAzRMczFqOtJtFDe2H9lrw98ZyVDlrCqT4BIr+mvpg0l0E2F39i0eBVKoas1KbVWsGZS/dNAgCe9OXgki2D6oLg2MasKHgRzCkG0OVtaYAi84wyGhBzEu/Vg3degLsvpH/al5vy1+tadzZdD8lnA0eDUvEFNbOinOgUtaLSdbaQg/OEG5/MT7bmOW9RYC/XDtfWC7tzrK2cWfRn8DxB++lLgIQhLqgCn7uagCf1BGylY8Q+G4vG7vl/dP5P6i6R5RUsScGiD0ZruCz7BWAy0TfDdc7ogKbio4DrYE83dBCPTnKT7NXGBeIjATIrczjlEo7ZQCG0emMASBnF3k95V6Q7odeIqE3GMCW0lOgRSUjFSQ0iAavChNyVgszlcYJ333j6o683pu4NxWQKiobOfNwcAzYFJuBydqXzVXg29brmGRtLTT+HmAkAFXujQ3+UA8O2JuxFLjS0RuX1yskYFvZaQBjU21zqfH3ACMBnik8Mdw2JJ8WfXotQfrT7BUgxAN9I7RGrwPPFp0AYjXhLX0scf+OsVFsH8X+zGVcCOneuTLvqE6j01K//ybgRR77yOMfy7WvthCc7W7GImo3Ga4rC3yV8xgD+leHKO3z+opSu3niAIbTeAKQO+s+TJ6WSDrBm1V5mGTtLbRj5sIk6LP60hdOdNTZvW25vcGYyj7HlWX85PNyQd8TQ5ZsH1YsH49I/iP04Y38ry70tjyBddB0k0OSPYlcbLUxZMr2YZmnxQLhIeitqosVRf2dVKOHSRB7JCwRrBFig4Zs2T4sBJjLD7kMbSs93VOr6KfavExATMj2NX7yYbm6R5TGhR5Hu1J8AtuhF4p/UjYpB5zyjB5zJ4RJY4BPspeBADd0WMia7cMSewLHXwZtKjw+3D6kIE0OgOvqBjbGpgFv16mbjephGPzUUQ+KJZ1Y4sQtszVxHrg30OSOqls6v2ypAt/eJGe2Dy3wKLavElqX/+/R3hHVHWVCaAOteT/bPwTsSF6AycTprkZwoK4YkyxWoZyAcLA9CVt/hbpBCdhWehqratLJhXhwNNDqy9/rZaNq0hzfwoBoYF/mUhDmie3IwI9ri8CZ7iZCwOUx3QGS7XNnoHe71ei1YGPBcSAdNbtFHyE+W6KEz/LUQY9c/MYwQrIsYJC7FziYuRxTzn1Mrzcut1qadkXSoB+mPwRivP0wYbq3phCc6yF3tg8tEG9XpgFacvYIKdcrFguE4Pl4bPUpzcoB47KrATY/lCejUsCq8JlomBnvO1K2z1RATBodQMvPfQmT9TiXP8/MAXP5oZgm5VibCPxv0zVMshOF8FT3OFq2zxQgyM8t9OjFo4Zh3RgpF4Lc6Azjb7IfC32HOgzD4E/lZ4FIge/oPTzVPQiYjpbtM0UALxcmDD15+ZhuYHQEfYHbrP8tywdFs3nG32akAhftko2OgA0Fx4Far0UTvXUfa3UPMsARs32mgOCxPHTQ+vx/j/aQ6DNwMoefiEwGv4tIxjSpV/vawK7rVzDJ4nnPIGNtH6YgTQjNcPcehZ4pPK5qG1KQuhgU7xv6R6ICcKG3xSQ+eL40HDnbZwqEcC+uCtpcfFLarJT5Wsoma4/H+43+bNHJKT8N8eYayFzbZwnusd48KbSt5FRb7aAE26u2JdYIGIsnS9gwKAUvlZ6a1OrGmDSwPCQOk0em9GBSQGKhRC6/FcqtvJBfKulC39lIkkA2x2eBRQIhJm++uVkNvm65s3l2ik8AeGfOg5jGO0O2z1SgyHZx6IMbVz+/2HtzLSZESCCEHLeOZAkFHujHEiKJIaQyF/kvRi62C9NY3WNqoen2EB2hts+SKbkvKPIgdKCueMOpzoZDliiy9VikPBtZL3ChoX+9SjTDxpz9qEEH3p79AJjli630wVmyfabmZmlI9GroYE1h1M/dTcSsptiQCStC4sCGmDRMFpF1AiQ3EI5xgUk+pgabCk8AlXYUk35HFdoYmyEwZldWXvjGoNY7Xlk4nv9oPJPkTNm+qeLmuDIN3yxYRTcSYFPh8cH2Icc76xf5Tf8E2aRpongEz8Qjsqe6GsFBgmsM8PpgC3kh21exL/NhrpEAOyvOFV8b6MG24c0W3uGwgeetHk2tM2b7poo5yz84/7WUe+cbCfD+9cs7L4nb3kIDiKz310bPAStDEyxyz1mzfVOBslgQs21zQuaHRgK8XPpzQI1CSo72FWZMI55WLVOpd9Zs32TxItvD/ys4zXtdbKzq1hLb+qs/DPWolejrrmZMkC2G8FmexkpeFh29nGuiP2TfyUs0fuFeXOXBrOX/3yDC0d8DxgHC2q7tdkCdPds3GXlubxh56wnwkSj/jfM9LX8hmm221oenigjxzdmzfZPhvyQ4eutzcVkfIfduEeCV8nPe9Yo+udbBzwbCU0U0HbJ9EwngwXAxLAnP8lgTHq65gwDIH6+Wn22plvVi2xFh639tHPawVBE5U20fDmhAKk9Q++bs+299Mt1RZ7W/rnjrmc6GD/AoJKsssmKIrBxOdiFp4Z0V50H9oISs7lvNr0dCE59fGzPnwLiBuwrtnrj0vVY+pkbve2o1F4lTHOrJAfP5YSCW4wfoEAQ0Oh24LheDy+JWIBtVE2fIQTT5sdy1R+55dOpm0UgcjlYf4CDYk8LNbH7olZ3JKO3i99YWP3C2q+EsKTymnCAUgZWhCfPXxaTm3650qiNjeltUsgBCrVPK7IpAJNtH/HHmsruKISYlwB5R/vpzPS3UuQF2nTJijS8OEv5hc2L2PyZqnfrYuMITsvYhObYtusT6SmkjGIFwL670YNbySXe9TkmA/TXFW890O8cnIcF4Opy6B4KEz21JzMZ3cCQSJXV0rMPN9V0O394ZfLJoTG64O1Bb9MqprsZdjg/D9I1gQWD4M9uT7vl0KgRQd1y+VHqqu14huevAwekLqeNEHu/t1/5BxpIwUx6jEuBIQ1n6vzobinUOvkjkONNGjKcuNDr8ID8y4dmkrDqLCIAMfqfq0tmC/vYHiHGN0mILBObzw068mpyzAs0W6hMAUXCyp8f9WHOBXKoZIU03MbTApvN9vpvnWKhPrFduQgLqEWWYCICAeaiu7M/HO2vfmc7AOkrsvwmJe3FDbPo+LP5iJgCi7I3KC6ISSZdl5bdYvKJkzEZgrl9IxY5ZC1OxKsBFgI86C91Ebb0DYvUQ+nFZWD2g5AhDINSTM7zML953iVCIeU8bLgIgnn5SV5hztqc1jzphlLB5I0QRi86AfxsWn7E6clYZHoW4CYAof7f68t6rfW0v4DFEyVoXgcVB0W9vTsx6Da8VswiAGHm57ExdjbwvFq9BSp54BFJ5guo3Z9+fYo5mswmQ25rHkopVXTdVctL3FzIHGEcZI/T2lcSnBwg2QqnYe+PdFpzZBEB07Kms5DSqO7rahxQOu6PIUSZ6Mj/DvDiD2Tx+CHICqLlxWEQAxOjR1sqwC92tdT0jqqkb/JvrHTVuSgQE7uyRbK4gck1CutgSmCwmAGL82+bqxJNdDZXOUk1sCaC2GItU9y4MDI97SphquhkiBmcIIQBi50hL1byL3c15Es2wU5SUY8DOLiJIj/+coIgFT0XNKiDCAcIIgDhzuLEirqS/o7xnREmaI2iIAIksOoLc2SNpfsFzNsak1hPlE6EEQJzae6OY36Dqa2gfUqAfsktUFNNAzwwPb0Wim0/05tn3ELqdiXACIHOxv6mY3TIgrWtSDlCFJASQM4rtK9Yw4Mi/pS4j/HwaqxAAiRmGYejlsjMltYp+bL3cCADKGVUkcPzL309bnA5BkPnHoZgAxmoEGLf5bvXlHeXSrjfVeh1pDqZyBKK4010M6X6CHdtn5li1JtPqBEDA/qyhJPm6rO9ym0pOvRdgYF+El48sxS8gZ31UmgiDuEUiNiEA4uEhuNxFJdKcvSy+uQA5+JG67kYAaWM/PzDszHDCvKW5EGSwBUY2I8B4MN+1ih6/LL55uE0lp9LHt81whBd3aGFA+PqV4Unf2WLix23YnACI4e9hmN5bV/xVvrjtv8l6YJWtJgE5uCknIPzoptj0JyEb/dffHptdCDDuwLdtN+JuDPSeqhzoNVm7bqvJsLWdVJ6gcQ5/xvIVgtgGW9u26xNgYrB7agrXtg/JdzUOSrEd22kvtAiyG8/xk0SwfV56JjbzK4JUmq3Grk+AiV4faihZXyeXvNuoHOCZHRGJB8Z4+0mSuPxX1kbP+YIsbpKKAOOgfN5Y8VStvP+DusF+pyg2SeTwB+K4/lvWCGd/SZaJJ9VPwFSgHO+sX92ulL1TJu0OGXCwU7p9me4gjSfoiGTzXl0aHP0N2SbeIQgw7mQe3MpqaRrY0aIceKpW0T9Da7DJJzLuOXOl0UEcx78jzIv7RXQ0b9dC6D/NGMl8kfInwBRgH9dfC9LpR7YMjo4+1DmsiO5VD+HvDk3gjAS5e2mDPTiNbFfWaY4748M14ZZV6BDoGiZVDkeAiVFdFbdm3FQpNopHVPd2qweDu4aVNI1ehyl4vEJIG9pgT29DkLt3Z6C71/kob9/DWbzgErx6yCTv8ASYCCYMwyFX+ttTO4YU6TLNcKJsVB2hGNP4j+p1TK1Bz9DCBrrWoKeP6vWQRq8zxs+iu8AsOg1m0Oh6F4imd6HRdSwGQ8N1devnMt1afZnuolBPTulc/9AKCILayTSBlvryf/jJJ8pT0zvIAAAAAElFTkSuQmCC',
    error: 
    // eslint-disable-next-line spellcheck/spell-checker
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAADGRJREFUeF7tXU+MW0cZ/77nTbLrtxLpAZUbTukR1O0JJJBiLxJUxVY2cEE9kI1KiwRSswGpiFYQL1KCqETiVAKJlKq7HAIXyEbrVgUJ25UA0VMd4Ng2zo2KQ4O03k121+9D87xv1+u1/ebzm/fevOfxIYfsNzPffN/vzXx/5ptBSOlvq1A63SEnhxbmAGCOCE56U0XAHCCI/z/4EbQIqLVPg3AfAJrkUCuDVmumvv5OGkWFaZhUu1A6Qwh5IJoDwDnEA2WrnB+RAAU1AbGJBA27vn5bZf9x9JVIAIiv20HKE0EeEfNxCM4bk4gaiNCwCBtJXCUSA4CN/NNzYGXOAcFiWF94UCC5KwTCCjid1dnGW82g/UXRXmsAbOWfyhFMnSHEpSN7dhTSCTIGQQuJKgi7t2cab+/bFkG6DKOtlgAQXztamQsAsBjGpGPoc8VydpZ1BIJWANjKF/MdhEtx7+thAUTYCxmC5ZlGtRHWGNx+tQBA2hXfrxSdgBArACi/cHLT2n0DABe4yE0J/UrWyVzExpqIOcTyiw0Am/niBQexrKtFH5U2hOdgEZWzjer1qMbsHSdyAIjl3kG4BohzcUxY2zGJmhbBxajtg0gB0J4vXgLAsrZK0IIxKtu16nJUrEQCALHXt3H3Vlqte9XKEkaiTVNno7ANQgdA18LHW5O+13NBImyDDNHZsLeEUAFglnyu2gfRh7slhAaA9nzpjRRF8lRoMkgfK3Zt/XyQDoa1VQ4A49uHoSbRJ61lnanzqu0CpQBwlY+7dePihQQComaWpgoqQaAMAEb5ISn9aBxZKQiUAMAoPyLle8MoXAkCA8AoP2LlKwZBYAC054u3JjiZE5P291GwZteqZ4MwEQgAxtULInplbQO5iGMDoD1fLAPgJWXTMB0FkAAt27XqWDmWsQDgZvQsrAfg2DRVLAHLocI4YWM2ALqJnc5dE9tXrMGA3YncgU2ZU9wYARsAG4Vi3WT1AmorpOYiizhbrxY43bMAYPZ9jmjjouXZA9IAMPt+XArlj8uxB6QB0C4U3zMxfr4yYmlB1LTr1SdlxpYCwOb815YIrGsyHRoaPSSA4FzM1t6s+HHjCwBj9fuJUM+/y3oFvgAwoV49FSzFFcGqXV8fWV43EgDG8JMSs9ZEfgbhSAAYn19r3Uox5xcbGAoA8/VLyTcRRKNWgaEAMF9/InQrxeSoVWAgAPbq89+T6t0QJUIClrNzatD9BAMB0C6UVgDhXCJmZpiUk8AQj+AIAMS1LI517K5cr4YqSRIYtAocAYBOUb+pr8zD1Fe/7Ctj2mjDw1cqAO1NX1olBHYWTry4BDhr+3a3vfo7cP75b1+6KAgGRQePAKBdKN3V5UKm6V9cBmvuc1Kycd7/EB58/6XwQWBnYfrqFbAef0yOr+a/4MEPXpaiDZ2IoGXX10/1jnMIALoZf9ZnTsH0Dfl7E3b/9BfYfkWefhyBH3/xgtSq5Pa90XZB6Xygz45KTufJ3ivsDgNgvlhBQHE7lzY/sQUIocv+dlZvws5vfy9LzqI79q1vwrFzz0i3EWAUoNTpR0DXZ2vVJY+nwwAolD7W8ajX8e8+C1PfOCMtx+2fV2D3zzVpehlCYY8c/+G+3HybhAlE38FHEIgk0Wx9/ZEjANA98ndi+SXIfOkLcnMXS+/FH4HzoZr7Ga3HcjB97WcAEkafYDCKrUhOEIOpeiOD+yuA9se9bBumr16WNr7E/rv5zLPBjUI7C9mbr0srv2uMvgzQbgfRUchtD46N7QNgo1ASlx6fDnnkYN3bNmRv/oapjACeAdPi74Lu25orH4AI3pmtr7uXbLsA6Nb0dz4Opp1oWruewdUr0iAIshwn3eIfpRG7tu7q3v2nnS8tgAW3olFh8FGi8AzYhqeGFv9ISTtw1m6sr7kA2NDQ/fODCdslY3gGXIt/+5evwe4f1/1Y1urvnjvYBUAS9v8B4mMt0QDw4LkXfD0D1+J/7VVpZQXZYqQHCYHQswM8AGjp/8vMe/rXFZZnsPX8C0Af/Xdg1/joJ2HmxqvS9oVr8X9HPjYgM5+oaLx4QNcGmC9RVAMrH8e2YeZGBfBTj0p1PTRnwLT46T8fwdbzS9pb/H6GIOoeAJLRKtcz6Pz1H/Dw0pVDXbMDTZrF+GXk1E8jAkK4MV9aRABxp1+if5kvfh5O/FQ+67b7h9uw/avX3TlzLf6HP7kMnb+9m2h5CeYJ4DxqHwFkiHnq6yU4/r3npFuInIELAEaMP4kW/3CB0DK2C6U1QJDPtEiLNx5CrmfA4TKpFv/QORLcxqS6gKMUxzlIIgsAR6eDHbJM+9AJVzCVAABu4shHUMlI8PBRkV4AAADXMxgqPg1P9fBVPbiFCwCdzgCqmpjXj/XEZ7uJowA/90jXHT0OdQaYxhAEQAsTHQSSkAg3cdTbpY5HuiSmzCJJPQBcN49zkHNPfKmz+IfAYiIAwE3wCFnJJI5Yn5qmxOkHgJ2FmRvXpXMFnp66sf4LwY+Uaap4jy0RCWwB4Kc153Ns9ljZwr5RkpztkxMY3UtnHGBv9uPs/f2CS7MtkOo4ADcvMOqLSVf8/2CmqQUA90iXzHL58MeXofP35GcAe+fqBYJSlQziFnHIKN+lUVxsIj1umIQiGZSmdDCMUcQh5Ctb6Zs+z4CWU3MgRCifU7YtvmjXzQNw3UTZsq/IytDD/PL3+nYPhKThSBg72teX4NGxDD0C/YN7JEwMlPR8ALtGYEARBzdnoGv1Lwc4ojrIKwy5j4Cf4DTWhZZr8Y9SHBtIjGITXeS1H+kE+t9srXoy0YUhXItfJqjDCh4l2DM4XBiSwNKwsYo4ZMq2uaeJVJWhR7xEHCoNS1px6DgWP6tsO+oy9IiV77q+e6+M9VwQkZzqoCiKOLhHymS2lxj0PHTIQ+XhbqArIQWi3CKOIKd6uJ5Bb7GJTsru5+XIBRFdV1D/l0C5Fr+KJE46PYMBV8ToHhDinupRuSSzPIMEnCYaeEmUuw3MF7WMB3DdvTAOcrAOlrhh5uFl6HFuD7Tn/3s8aH9RJNfiD61sW1UZepzadwtCR10UmX96Dq2MVu8EsMq8Qi7i4HoGg8rQY9Y/jLwqds8Y1OaMINfij6Jsm1uGrlfOgO7ZtWquF4RaXxfP8fdVWPyyXyfnuJlOq4DUdfFaPRhh22A9fuh286E6irp8S5Sdyfyc9+9qc42M1IMR7jZgnoyR0W2yaGSfjHHdQQ2NwWRJWz9uWY9GJSk0rJ+o9eOoN/Tbz515OFI/fSnnaKyHI80qoFwPsXQ46usXDJnHo2NRS3SDBno8es8jSFXhSHSi12CkoM/HiymItwTa1m4rqYdGNVBDLCyIpI/tTOWwsXZ/FAMjtwCvoU6PScYizQQOOijqN2gaUgDobgXFJiA+kUBZTB7LRHfsenVOZuLSAND9wIjMZCeFxs/w65WDNADcVSABx8YmRcnD53lw3EtGFiwAmNiAjEjjo/Hz+QPZAF5j4xXEp+BRI8ta/f19sFcA0YGxB/QDAWffH9sG6G1o7AGdQMDb95UAoOsallYA4ZxOopg4XiSifaNkMtYWcGglSNmDE4kCUEDli7kGBoD77CzuNkyQKGLoEN3J0lTeL9Trx1VgAIgBDAj8xKz474qUr2QF6HUPzUqgWNGDulOofKUAMCtB8pSvHAAHIOgI7yA1L5FFoFr/IQhWs5RZCrrnKwkE+XNrXEQZGUnTKLD2h42lxAgc1rkJFkmreATh+EEemdFDBYBgQISNOxasmRNFMuo4oBGx/YwDCzONaoPXkkcdOgA8u6CNnTVEOM1jbzKpRVbPpsyC6v1+kDQjAYA3sNkSZAAd7pIfmRE4bKpuJhGhYiKHfRIiumMRLIW95McOAI8BcdDUASxPum0g9noLqJytvdl9yjziX6RbQP/cuiHkTmViM4oh+fYcDMUKAI9R11NALE+KkSiMvAxROerlPnYj0A+ZaQeCTor3dKHFCtAPDPeWEjxWTs3WQLBq0U55pvF2y+8jiPrvWgLgYGt4KkdWZoEAl5L3uCXdQ6AKOp01HRWv9Qow6CsQt5aAZS0CwKKunoOw6AFgBRxnZbbxVjPqr3mc8bReAUbGEizIE2E+bsPRfXsPqWE50NDBqOOCIJEA6J+keO+ALMoD4RwgzYW1QrhfOGETkJoZB9aSqHBtAkFcpHLpu0kozCFQTgCDAE7u73tIuaM2Bd0jwn0jDQHuC0UTYCvjUCsNyh4kw/8DzSIc8BPfQo8AAAAASUVORK5CYII=',
    warning: 
    // eslint-disable-next-line spellcheck/spell-checker
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAD7dJREFUeF7tnXl0Tdcex7+/IITIIIghNyFIYkxEBHlac6mp9FXrtaZ6NXTwqunr4KmHl+rAW4alVcrTUqy+ZfVJi6KUKCWEoBFETBkQYxKJhEiy39o3bmS4yT3n3HNzzzn3nLX8I7+992/43H323mfv3yZo8GFn57XCw5vDwYq6oeh+EPLTWqMozwVwqgVyckJ+ujPy02qVM93FUAQXnwKw4mKguAi16ufDxXAZtRqcA5yOIWTFJiLK1Jq7SO0GsS3wgGH8W3h4axgKbgbi/kUPPMq2jV113BkatMmCc9MkOHttQ/rGL2k0stTsQ9s4yoYeYYzVQ0Lk63hw9TncvxiMrOMeNmzOctUe3bLQoM0p1G0RjS5LVhLRA8uFlCOhCgAYY05I/nwKbu6JRFZcO5v9wq2NC+8hPMLOo8nAxQj4cA0RFVtbpa3LKxYAY9DT1o/Brb3v4tbe0ErvbFt7xtr6+ZiiSf94NO67CL6TflAqDIoEgCV+OAuZR3ngvayNgyLKN+l/Bx5hi6jTws8VoU8ZJRQDAGOsFpI+no+MbTOReaSB0hwliz6ePXLRbNhSBM6ZR0RFstRpZSWKAICdfu993DkwF3dj61tpjzqKN+qZB6+n5lOnRQvtrbBdAWBJCwbg5i8bcXu/t70dYZf2G/e5Aa/eL1KHBb/ZpX0AdgGAMdYQxyfsRsbWHnik6mm09XGr4wF4P3sQYZuGElGO9RWKq6FGASiZzi38DJe+iFTdqF6cX8VLu3UuhOGVxWj3wayanDHUGACMsWY4PjEOaet9xHvHgUoYJqSj27pgIrpbE1bXCAAsdd1LSF70He6drlMTRqm+jYYdC9BmxovUevqPtrbFpgAwxghJUetxYfE4h3/Xi40kHxv4v7maOiyYKraoGHmbAcAYq40jz8fj+pbOYhTSZSt4oPnoBPT4XygRFdrCNzYBgDFWF7EjkpGxzWALpR2uzmbD09Bzazsieii37bIDwM7M9sPVzaeRe95VbmUduj7XgFx49Q6k0LXX5PSDrACwi8va4fJXp5BzzkVOJfW6HnvANSgP/q+HUJu3k+XyiWwAsKNjhuBeYjRyztSVSzm9HjMeaNjhIdw6jqLwzTvl8I8sALDzn/oj9bszevDlCImAOjgEvuM7UMCsSwKkqxWxGgB2aoYPbu5OQu45x/iQY63H5SrPXwdNBwVS8PJ0a6q0CgDjVG9PYKY+4LMmBFaUdW2Xg4HnG1kzRZQMgHFd/9Czybi5098KE/Si1nqg6eCLiNgZIPX7gXQADg2OxY1dPazVXy8vgwe8Bx+hiF09pdQkCQB27OWPkLYpSkqDdi/j4ge0nQk07gu4h5Sok30SuB0DXFgK5KfYXUVJChjG/ZPCNoiOiWgAWPzkMFz74ahid+ZW573OS4A2M6v378WlQMI7kmJg10J8R3KLP4dT6NpjYvQQBYDxvb8nMFuVg77QbwDfScJ8k/otEP+qMFklSfHVwoFJ7mLGA+IAODQ0Djd+DlOSzYJ0CZoLBM0TJFoqdG4ecG6+uDJKkBY5HhAMADs+cSpS161Sgo2idKjtDgy+AvDPq2IevlVtVyugMFtMKWXI+k1+nULXrhSijCAAjFu2d/rk4cFVZyGVKkrGdyIQ+q00leInAanrpJW1Zym+SDTwrJuQrefCAIgduRPXfxpsT5skty3m3V+xEbUOCLkd3kO3U8TPwy35zSIALG5sV9zYcVyVo35ufe99JVM+KQ+fGh7sJ6Wk/cvwWUGzEWEUtiG+OmUsA7C/VwruHva1v0USNXBUALi7GvVKpT6H/SQDwE7NmIlLy5dIdL0yijkyADwCbWa+S12WLq4qGNX2ACymezYy49yUEUmJWlgDgFrXA8q6yrP7Peob5y4aAE38+rnVPbYAzUdJo0etawEVrfWf8Q4FL19qzglV9gBsb9c7yD7RSJrnFFRKyiKQSX2tAODe9S71P2H2qL1ZANjxV6ch9RtBCwkKCrV5VXQASvxSxeKQeQBiItKReail4oMrREEdgBIveUZcpb6HKh3LqwQAOze/H87O3SvEt6qQ0QF4Eqb2UQMoaE652FYG4OiYGFzd3EcVwRWipA7AEy/5vbaLQtcMKeu2ygDs9ClAfrp2DnHqADyJt4vPIxqSXu57TjkAWELkS7iw+HshPyzVyFgDwIG+wJ39qjFVkKJtI8dS58X/NcmWB+BAn0Tc3t9BUEVqEWr2HNAzWpq2WgSgcZ8z9NT+jpUAYIzVwXaPh6r96FNViL36AE/F6ACYPMA/Eg3LqktEj/h/lfYAmln5qxhqHYDK8JdZGXwCgNZG/yazdQAqA9ByzH4K32z8Rv4EgN0BOarc7Gmpc9cBqOwh99As6h/vWQoAix3pjes/ZVjypSr/rgNgPmwtxzSn8M0Zxh5A1Qc9LFFpDQD7upYcGtHiY3h5DoVt+rgEALVu9xYSGH76p98JIZKVZaItbpiSVq8SSj3ePl4CwL7wHGQd1W5Kl1FMmsu1DMDjcQAZt3xv9yzUdBo3HYDKP4A67oyGZzsRS9vUBcdePiXtJ6KSUjoA5gM1inmSZheAypqsA2AegFZT3iR2Yto6XFk1QSW/ZWlq6gCY95vf5P8QO/bKYaRtlJRcQFo07FBKB8C8033GHiS2v/c13D3Y3A5hqbkmpQDA5/98HUDLT6Pe14ntDctG9jF17/23FKRnLgP1W1mSKv93NR8LE2qpe9g90vwaAHeGlMMhjgCAR3gusZge95F5RNs5/nQAzPcJnj3yiO00FGr++hYdAPMAuBiKiG2BxHVSoS8aBcjpAFQZBB2AqlzjCGMAviFE7wGqIOB6NHBktAK6L9uqoANQlX+1cjDUAj/EdrR8hAdXa9uWMzvXLuVsgCMAUM+nyDGmgToA1UwDHWElUAfAPADGlcBfQ+7g3kn1J4Ko7i2jA2DeO24hd4nF9ExBZqx6s4AJGV5IASBhJnBxmZDa1Svj2TOVmFYPhJQNi5SdwVo8F1gRVX5AhMVPXoOUtX9VL8YCNOd5gvkXQaH5gnme4O3GcxPafgzjVxI7MeUNXFn9pbYtBSDmNeAIU0AecMO4KWS86TNpwRXNA8ANFJI3WAu5AYUGk28K5bJsq1sxCu9p+BREGY/wewN4b1Dx4d0+H/TxX78jPLXdGI2451QCwN7QTGTHi0yor2Iv8bEATx5p2iWUdwXga/8cAkd5TAdDjADoN4A5Stif2NlsxAnqtTVU+4dDHS+0wixuPf0zClk5qwSAo2Oa4erm68JK6lKa8AAfABJlPUkQ4WjjAE1EUaIR/BtA/2PGDOLaTxEj0UeaLmY2Rczp995H8qLPNW24blyJB8wmieJp4ra5P3SY9QBHhaG2G8Pw7Mpp4oyDwd8HJePm7raO6huHsLuqRJFGAJIWvIYzs1c7hCMc1cjAOROpQ9R6k/nlU8UyRuDJorW+R9BRg1+vZSGGpDsTUelZEO2ni3fUYJuzW1C6+DOzn0bSAo2lyC7jDbdgwG9SyWWSPIMYf/hRcP7vwlLgnoaz5QTMepo6fnqgLBvavzLGZC2/RLr9PH6PXvV9gpqvi63OMu/Blylil39FEe1fGsUt5sHnGcNNv3hLrwXeG/AtYWq8Obwq23wnTqNu674WBIBxRqCl3cJCNoJU9IyWegK34Ns04FQTc2xUfW+gFq6N5RZL2RBq8pRWNobybGBdV68QBYCxF9DCoREpv36Tp7SwPaxMZnDxACRE/h0XFi+y9MpU9N+l5AcyGcR3Cv3SWtHmWVTO99Xp1O2bVVXJWdwHyNR+iaSUDGFlvaXmfMH84EffWOnXxxtfAwmREbiy5qBqPxI5KgD8o0/zkWEUtiG+ul7CYg9ghODI6D24tmWAxe5GiQI8VbzQ6V9F/dWcK9AwLprCNljMcCEMAMbqYk/7LOSeq6fEGFerU+cllhd/qqpArVNB1/YPMfBMAyIqshQvQQAYewG1bhjhW7/5QFDKwweAfCCotqfN25HUZdkSIWoLBsAIQeyoP3A9urOQihUlI+ZYmElxtR4PM7wSS2Ebewn1vzgA+K6h3UFZuJ+kvsSSYtYD1Dr/9+ieg75HvUyXQgqBQBQAxl4g8YPeuPTVb6qcFfhOAviYoKpTwvxkUMI7AAdAbQ8f9YesCCbDuAQxqosGwAjBiWmf4MqqWWIaUoys6VgY/xxc9mgYzwuo5uNhraZ+Ql2/ni3Wz5IAMEJweEQ8MrZqPJ+6WHfaSf7xMS8prUsHgLHaiB12CRk/G6Q0rJeRyQPNhqah53Z/IiqUUqNkAIy9AGP1EBN+E1lxDaU0rpex0gPuoVnod7w5ET2QWpNVABghOP+pP1LWJapykUiq15RQrkFgHryfCaTg5enWqGM1AEYILq8KwoVlp5B7xtkaZfSyAj3g2qEAfuPbU8CsSwJLVCkmCwBGCPhm0mvRe5CTWMdapfTy1XigYcdHCJobTj4vynKpsWwAGCG4uKwdLq44qcqFIjVQx7t9/2nB1DbyglzqygqAEYL4yS2QdTLRoVLOyBWN6upxC7kL906dKGyDrHkcZAfg8eygLg4POYsbu1S+naYmIiugDe8hV9BrR1shX/cE1FZOxCYAPIaA8PugA7i1509ildLly3ig6aBDiPild9njXHL6x2YAmJRkcX+ZjYztUar8diCnp8XWxdf2fSe8Q8Ff2DRhsc0BMPYGJ6Z0x62Yvbif7CrWDw4pz9/3radGkP8bSba2v0YAePxKqIXDQw/jxo7utjZK1fW3eH4vwn8YaKsuv6JvagyA0lfCyelv4da+hchNclF1oORW3jUwH036vU8hK7+Qu+rq6qtxAB73Bk6IHbENt38b4vBjA+Pu3RHR6LbhBSIqrsng87bsAkBpb8DHBtmJW5B5qGVNG66I9jx7psK98wvUdXWcvfSxKwClIBwfPwVZCZ9p/uoak8F8kOfR+UPq9p3d0/EoAoAyPcIbuBsXpVkQeOAbdZ9T1UFNe/QCigKgHAg5yfNxJ6axPZwie5vNR2agrneUkgJvslGRAJSCkLp+LHKTo5C6vi3yU2SPi00rdPEDfCdcgGu7OeQ74XubtmVF5YoGoBQExpxxecUMZGz/G+787qvYzB18RO8VkQLvocvgP2MFERVYEZsaKaoKAMp6gjHmirMfzUR+2nPISe6EzMP2Pa7m2esBGgYkwsXwI9pHLSGi3BqJnEyNqA6Ainaz61vDkXl0GvIuDUBeqgHZfzjZrIfguYbcuxSjvm8a6vv/ivb/+jcRnZUpFnapRvUAVAKCMX4Jph/OLxiCgjtBKMhshfuXfFCYVw/kVAvk5IT8dGc8SK9Vrmw9nyK4+BSAFReDFRehdv0HaOCfDudGKXD2OoeAf+wEkEJEKhuMVM/V/wE4LoXBFr1haAAAAABJRU5ErkJggg==',
    loading: 
    // eslint-disable-next-line spellcheck/spell-checker
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAACa1JREFUeF7dW32MXFUVP/fNbAvd+YCwNbsiXVqJbLCkUDUtKWqJEfuRYDG2tLvb2o1RUWN0YXZD/YchxGiYkdaoscQ/yscuC4uERaWU/lMoVFtNoEKNi9bSXY2tshjmzWy73d15x3Pe27d98/bN3Ps+Zku8CWnpnHvPOb977jnnnnOfgDqPxzPFD2kIXxYafAzAaEKAxcSySSD/KZos9jiGAt6lv4wJ4D+1MTTgr4aAX+3IJ/9TTxGJX/TDVFrAZgG4mRT+NDHRgnChuYQBvIqGGKwXGJEC0N9T2AEovgoCPhNEYekchMMI+MvOfLpPSqtIEAkAT/TqdwgDfiAELFfkG4qMLOMtRNy1PZ9+IdRCNDkUAAOZwqqyEHtokdVhBQkyn4A4EitD77aHU78LMp/nBALgka9jQyKt76bp3w7KONJ5iD9rSKTu3ZIVk37X9Q1Af/fEMohdGAQhPuGXWX3p8Q/GNHRs350+6YePLwD6M/oXKWT1kfIJP0zmi5YcZFEDras9l3xWlacSAPuyeNmCcT3/gTF5mXZ8JMqp3i27xXkZqRQA0+Tjk7+mhT4uW0z193SLBovSAOkWi/17pxHefcdQna5EZ0aKafyS7EjIAejRB4njZiWuNYgWXSGgba0GzW0CFlxeyXb4UBmGX44WABaFjsTTnbn01lqy1wSgr0e/jwh+GFb55es0uO6WWNVl6gWABQLs6sylflSNeVUA+npKt1Mm+mLQNJYZ8k6v+YpGpl6ZCRfOWLtt/3udATDIMW5szyUOeIHgCcAT95RWCK18WAiRCrr7XsqfGTbgrRcNOPc+mseh7TbLKuoJgCU/FgBiaztyieNufTwBINN/k364MajyPG/Vthi0tFk7PzWB8PpzBjAA9phfAMyzcLgjn/qsFID+THErCBwIo/ySmzVYuenimT+0twy22V8yAIgx3VXubH8oNeTUrcICslnUrivpJ8n0l4YB4PbuOLDXr2Xe824BbAQIfzqZSK7MZunqNjMqAOjv0XfSv+8LozybPZs/Dz7rB3dPey53KQCYEaSrI5d6dA4A+7+DC/+7UP9L2N2/cb0GH11tAXDigAEnf1/+gAGAp66cSN2w4afiAgs2awF9mcL3SHm64YUbt3bFoelaa1mvs38pfYDNm2oJ3VRU2eMCQD9KTmJVOPUBNtwXn830hu6fqrqc7AhwjnDNCsoVmjVovBJMnzJ5HqFwFug/A84OI4xRCh1kkC841plPmTUMc6sGe0rNU2j8i/5PmhrLGG56oGGWJAgA7EP4GNlOtBY/9jGcVzjDq0w+83fKkY3p2NXb9zSeMRXuu7d4t9DwF0qTJUTOCOAHgFPHED51VwwWL/W/BwzAG0OGaSGqgwqt3+z8cXKvya0/UzhAQfILqpNr0QXxAX8/WoamVlGRMvPusmKjlLs5cwg+GovJxyxbLSqshGmOPOYDBMSXOvLpdeL5XkyWsDhGSi2IAgBnFKiV4jp9gJuvamrsXoNBYMerOCZLhWRCRJH5ORnyDt12t788wDn/9aEyjL6hfjVmfrfu1KDhMuvosDWxX1AZArT1BEAhS+Z/v8oEVRq/maC9rl/l7Xnu1JuTLz5C0oH4gOjL6Hsp/H1DSuyDYPFSDdbsvHgX8FLMbb583o8NKJvvHGmcly+2IOYpGxQOHyEL0Ico+FGxM9rhFIhXdoPgBqBW0qQiGYdNtjwetVLwirUQnmcLiCQBcgtZrR5w6qhV/3MCoCywBAn2PXaRRQVQTojYB5wmH9Baa2026atm0luV3bBp4gvRsxTGCk9RzLaFZe995m0/K3vTtlx/scrEx0maICGO8BGYoCOwsBb7WiErvNj1WUEplCJcENTRfZ8yYipSVx//twBQqUxQ+WuYIigZT/XhvOOb5koXkbCjhcrjziPQQAVUr/yf4/qUtL0xV5r3RuilhaTXQFq8TRagv0zT59TKnEs6kxuf2VZVnLxyBfY1nOLatUSe7DvF9bczr5AFFJ6iS+Bdsnkbd8Vnsy3lRKPKou48wX1e3YlN2Byhmm7cOCELKFJhAL8rA4CLnCwYj7ACrdkZr7j1eTksNwhHHi1LTVqmw9zfxU/YByh1f5yJBi8UVdrKa1Xz2PXIFZwgcGVIPNlTWofUAVJBz3nT47v3H582fO2Ke1dtnrVClvPoqSQ3KnrYNOZlaDCLC6bGdXqKVjsU2pOc2Za5e9TUZAVkg7tAvKNeoxYATtD93PRk8tDu6+N6qsmqCCk6Qqb1SnE5sxs9TjU6CjvOOp1d11tyk1bREWbPPjaCs9XjWgA4IxCv/do+7zK7TGH373bn2KoI+ewHMAg3b9IqwpWqAHb5atkqapcr9gbtOmNUd4YZWc3+gFUU7T539VRs+h9+i6J+C5hct7OTE1lV2AmoaqFVdRO4KNogtA9vySXOOvoCwW+FHNeb26wS9qIrrBI279Y5SrK5hO2u67GgQQCIygLmlMXNY1CHylCtHVEFwJk0ReUDnI8mZi0gqtaYqhmqAuCkiyYK4GlqjbXNaY0FcYaqynrRqQLgvDNElA16N0dZSLM9Pl48HvZxhAowKgBEnQnS2T9B7fEVVdvjLLifzFBF0Wo0MgDcFyalCo9EIM783G+FPPtQKlfkMMrLokCdboOvUNxf65bb+5FUr369hnhMNT0OAoaXBXD45NQ36noAp71U+v9kRy79NyUALIdY2IAgfhPmmZxqGHQ/m7PnRVEM4a9O6IOV9Z25xEEveebloaQsCnj9rlTUVDC9wA8l7bXp5Ug/vRxpV+Dli8Sr0MqZ3tg7aN4wlVpbco7P0LnfUotM2owf7MbLJ+P6a1Q2Wynnp05h9hpmuhH86uMcPWV0P6VTX82LEo9PNqZu6cqKiVAA8GQGYSpWHKhHCy2cklVn/3ayMblZpjzPllqAzYIuUNREKX2fPoV70O+tsU5Kzl2WhEQhsvQk9kGyWKXavTIANjfzCzHEAWKwaN4UU2GEcN6g7xT9fknmGwArRJZuAig/RwZ0rYpsdafhHh/E7mjPJ970yysQAMzk8Qw2xqH4Lfqi8x5apNkv44jo/012/rCByZ/vyIvxIGsGBsBmxt8TNYzrX6MT10Nd5muCCOF/Dp4SqD10IZF4TMXRhY4CqgI+mdG7UOA2OhqfV52jSkc7PUEu7pAG4pn2fCrUe2Ynz9AW4KUAHw+hFT9HX41vJME3EJOPqCrqpKO5/6S5+6mGt7+hnDyo8hWYXz51AcAtxFOZ4nJKyG+gFlwrWUgrRdQlRNNKkcpKhVCMUGgdpb+MCPq7IcRoHOHPW/PJE34V8kv/P9Ob1EmINNSiAAAAAElFTkSuQmCC',
};
/**
 * @category 常量
 * @property
 * 拼音转换数据
 */
var PY_MAPS = {
    a: '\u554a\u963f\u9515',
    ai: '\u57c3\u6328\u54ce\u5509\u54c0\u7691\u764c\u853c\u77ee\u827e\u788d\u7231\u9698\u8bf6\u6371\u55f3\u55cc\u5ad2\u7477\u66a7\u7839\u953f\u972d',
    an: '\u978d\u6c28\u5b89\u4ffa\u6309\u6697\u5cb8\u80fa\u6848\u8c19\u57ef\u63de\u72b4\u5eb5\u6849\u94f5\u9e4c\u9878\u9eef',
    ang: '\u80ae\u6602\u76ce',
    ao: '\u51f9\u6556\u71ac\u7ff1\u8884\u50b2\u5965\u61ca\u6fb3\u5773\u62d7\u55f7\u5662\u5c99\u5ed2\u9068\u5aaa\u9a9c\u8071\u87af\u93ca\u9ccc\u93d6',
    ba: '\u82ad\u634c\u6252\u53ed\u5427\u7b06\u516b\u75a4\u5df4\u62d4\u8dcb\u9776\u628a\u8019\u575d\u9738\u7f62\u7238\u8307\u83dd\u8406\u636d\u5c9c\u705e\u6777\u94af\u7c91\u9c85\u9b43',
    bai: '\u767d\u67cf\u767e\u6446\u4f70\u8d25\u62dc\u7a17\u859c\u63b0\u97b4',
    ban: '\u6591\u73ed\u642c\u6273\u822c\u9881\u677f\u7248\u626e\u62cc\u4f34\u74e3\u534a\u529e\u7eca\u962a\u5742\u8c73\u94a3\u7622\u764d\u8228',
    bang: '\u90a6\u5e2e\u6886\u699c\u8180\u7ed1\u68d2\u78c5\u868c\u9551\u508d\u8c24\u84a1\u8783',
    bao: '\u82de\u80de\u5305\u8912\u96f9\u4fdd\u5821\u9971\u5b9d\u62b1\u62a5\u66b4\u8c79\u9c8d\u7206\u52f9\u8446\u5b80\u5b62\u7172\u9e28\u8913\u8db5\u9f85',
    bo: '\u5265\u8584\u73bb\u83e0\u64ad\u62e8\u94b5\u6ce2\u535a\u52c3\u640f\u94c2\u7b94\u4f2f\u5e1b\u8236\u8116\u818a\u6e24\u6cca\u9a73\u4eb3\u8543\u5575\u997d\u6a97\u64d8\u7934\u94b9\u9e41\u7c38\u8ddb',
    bei: '\u676f\u7891\u60b2\u5351\u5317\u8f88\u80cc\u8d1d\u94a1\u500d\u72c8\u5907\u60eb\u7119\u88ab\u5b5b\u9642\u90b6\u57e4\u84d3\u5457\u602b\u6096\u789a\u9e4e\u8919\u943e',
    ben: '\u5954\u82ef\u672c\u7b28\u755a\u574c\u951b',
    beng: '\u5d29\u7ef7\u752d\u6cf5\u8e66\u8ff8\u552a\u5623\u750f',
    bi: '\u903c\u9f3b\u6bd4\u9119\u7b14\u5f7c\u78a7\u84d6\u853d\u6bd5\u6bd9\u6bd6\u5e01\u5e87\u75f9\u95ed\u655d\u5f0a\u5fc5\u8f9f\u58c1\u81c2\u907f\u965b\u5315\u4ef3\u4ffe\u8298\u835c\u8378\u5421\u54d4\u72f4\u5eb3\u610e\u6ed7\u6fde\u5f3c\u59a3\u5a62\u5b16\u74a7\u8d32\u7540\u94cb\u79d5\u88e8\u7b5a\u7b85\u7be6\u822d\u895e\u8df8\u9ac0',
    bian: '\u97ad\u8fb9\u7f16\u8d2c\u6241\u4fbf\u53d8\u535e\u8fa8\u8fa9\u8fab\u904d\u533e\u5f01\u82c4\u5fed\u6c74\u7f0f\u7178\u782d\u78a5\u7a39\u7a86\u8759\u7b3e\u9cca',
    biao: '\u6807\u5f6a\u8198\u8868\u5a4a\u9aa0\u98d1\u98d9\u98da\u706c\u9556\u9573\u762d\u88f1\u9cd4',
    bie: '\u9cd6\u618b\u522b\u762a\u8e69\u9cd8',
    bin: '\u5f6c\u658c\u6fd2\u6ee8\u5bbe\u6448\u50a7\u6d5c\u7f24\u73a2\u6ba1\u8191\u9554\u9acc\u9b13',
    bing: '\u5175\u51b0\u67c4\u4e19\u79c9\u997c\u70b3\u75c5\u5e76\u7980\u90b4\u6452\u7ee0\u678b\u69df\u71f9',
    bu: '\u6355\u535c\u54fa\u8865\u57e0\u4e0d\u5e03\u6b65\u7c3f\u90e8\u6016\u62ca\u535f\u900b\u74ff\u6661\u949a\u91ad',
    ca: '\u64e6\u5693\u7924',
    cai: '\u731c\u88c1\u6750\u624d\u8d22\u776c\u8e29\u91c7\u5f69\u83dc\u8521',
    can: '\u9910\u53c2\u8695\u6b8b\u60ed\u60e8\u707f\u9a96\u74a8\u7cb2\u9eea',
    cang: '\u82cd\u8231\u4ed3\u6ca7\u85cf\u4f27',
    cao: '\u64cd\u7cd9\u69fd\u66f9\u8349\u8279\u5608\u6f15\u87ac\u825a',
    ce: '\u5395\u7b56\u4fa7\u518c\u6d4b\u5202\u5e3b\u607b',
    ceng: '\u5c42\u8e6d\u564c',
    cha: '\u63d2\u53c9\u832c\u8336\u67e5\u78b4\u643d\u5bdf\u5c94\u5dee\u8be7\u7339\u9987\u6c4a\u59f9\u6748\u6942\u69ce\u6aab\u9497\u9538\u9572\u8869',
    chai: '\u62c6\u67f4\u8c7a\u4faa\u8308\u7625\u867f\u9f87',
    chan: '\u6400\u63ba\u8749\u998b\u8c17\u7f20\u94f2\u4ea7\u9610\u98a4\u5181\u8c04\u8c36\u8487\u5edb\u5fcf\u6f7a\u6fb6\u5b71\u7fbc\u5a75\u5b17\u9aa3\u89c7\u7985\u9561\u88e3\u87fe\u8e94',
    chang: '\u660c\u7316\u573a\u5c1d\u5e38\u957f\u507f\u80a0\u5382\u655e\u7545\u5531\u5021\u4f25\u9b2f\u82cc\u83d6\u5f9c\u6005\u60dd\u960a\u5a3c\u5ae6\u6636\u6c05\u9cb3',
    chao: '\u8d85\u6284\u949e\u671d\u5632\u6f6e\u5de2\u5435\u7092\u600a\u7ec9\u6641\u8016',
    che: '\u8f66\u626f\u64a4\u63a3\u5f7b\u6f88\u577c\u5c6e\u7817',
    chen: '\u90f4\u81e3\u8fb0\u5c18\u6668\u5ff1\u6c89\u9648\u8d81\u886c\u79f0\u8c0c\u62bb\u55d4\u5bb8\u741b\u6987\u809c\u80c2\u789c\u9f80',
    cheng: '\u6491\u57ce\u6a59\u6210\u5448\u4e58\u7a0b\u60e9\u6f84\u8bda\u627f\u901e\u9a8b\u79e4\u57d5\u5d4a\u5fb5\u6d48\u67a8\u67fd\u6a18\u665f\u584d\u77a0\u94d6\u88ce\u86cf\u9172',
    chi: '\u5403\u75f4\u6301\u5319\u6c60\u8fdf\u5f1b\u9a70\u803b\u9f7f\u4f88\u5c3a\u8d64\u7fc5\u65a5\u70bd\u50ba\u5880\u82aa\u830c\u640b\u53f1\u54e7\u557b\u55e4\u5f73\u996c\u6cb2\u5ab8\u6555\u80dd\u7719\u7735\u9e31\u761b\u892b\u86a9\u87ad\u7b1e\u7bea\u8c49\u8e05\u8e1f\u9b51',
    chong: '\u5145\u51b2\u866b\u5d07\u5ba0\u833a\u5fe1\u61a7\u94f3\u825f',
    chou: '\u62bd\u916c\u7574\u8e0c\u7a20\u6101\u7b79\u4ec7\u7ef8\u7785\u4e11\u4fe6\u5733\u5e31\u60c6\u6eb4\u59af\u7633\u96e0\u9c8b',
    chu: '\u81ed\u521d\u51fa\u6a71\u53a8\u8e87\u9504\u96cf\u6ec1\u9664\u695a\u7840\u50a8\u77d7\u6410\u89e6\u5904\u4e8d\u520d\u61b7\u7ecc\u6775\u696e\u6a17\u870d\u8e70\u9edc',
    chuan: '\u63e3\u5ddd\u7a7f\u693d\u4f20\u8239\u5598\u4e32\u63be\u821b\u60f4\u9044\u5ddb\u6c1a\u948f\u9569\u8221',
    chuang: '\u75ae\u7a97\u5e62\u5e8a\u95ef\u521b\u6006',
    chui: '\u5439\u708a\u6376\u9524\u5782\u9672\u68f0\u69cc',
    chun: '\u6625\u693f\u9187\u5507\u6df3\u7eaf\u8822\u4fc3\u83bc\u6c8c\u80ab\u6710\u9e51\u877d',
    chuo: '\u6233\u7ef0\u851f\u8fb6\u8f8d\u955e\u8e14\u9f8a',
    ci: '\u75b5\u8328\u78c1\u96cc\u8f9e\u6148\u74f7\u8bcd\u6b64\u523a\u8d50\u6b21\u8360\u5472\u5d6f\u9e5a\u8785\u7ccd\u8d91',
    cong: '\u806a\u8471\u56f1\u5306\u4ece\u4e1b\u506c\u82c1\u6dd9\u9aa2\u742e\u7481\u679e',
    cu: '\u51d1\u7c97\u918b\u7c07\u731d\u6b82\u8e59',
    cuan: '\u8e7f\u7be1\u7a9c\u6c46\u64ba\u6615\u7228',
    cui: '\u6467\u5d14\u50ac\u8106\u7601\u7cb9\u6dec\u7fe0\u8403\u60b4\u7480\u69b1\u96b9',
    cun: '\u6751\u5b58\u5bf8\u78cb\u5fd6\u76b4',
    cuo: '\u64ae\u6413\u63aa\u632b\u9519\u539d\u811e\u9509\u77ec\u75e4\u9e7e\u8e49\u8e9c',
    da: '\u642d\u8fbe\u7b54\u7629\u6253\u5927\u8037\u54d2\u55d2\u601b\u59b2\u75b8\u8921\u7b2a\u977c\u9791',
    dai: '\u5446\u6b79\u50a3\u6234\u5e26\u6b86\u4ee3\u8d37\u888b\u5f85\u902e\u6020\u57ed\u7519\u5454\u5cb1\u8fe8\u902f\u9a80\u7ed0\u73b3\u9edb',
    dan: '\u803d\u62c5\u4e39\u5355\u90f8\u63b8\u80c6\u65e6\u6c2e\u4f46\u60ee\u6de1\u8bde\u5f39\u86cb\u4ebb\u510b\u5369\u840f\u5556\u6fb9\u6a90\u6b9a\u8d55\u7708\u7605\u8043\u7baa',
    dang: '\u5f53\u6321\u515a\u8361\u6863\u8c20\u51fc\u83ea\u5b95\u7800\u94db\u88c6',
    dao: '\u5200\u6363\u8e48\u5012\u5c9b\u7977\u5bfc\u5230\u7a3b\u60bc\u9053\u76d7\u53e8\u5541\u5fc9\u6d2e\u6c18\u7118\u5fd1\u7e9b',
    de: '\u5fb7\u5f97\u7684\u951d',
    deng: '\u8e6c\u706f\u767b\u7b49\u77aa\u51f3\u9093\u5654\u5d9d\u6225\u78f4\u956b\u7c26',
    di: '\u5824\u4f4e\u6ef4\u8fea\u654c\u7b1b\u72c4\u6da4\u7fdf\u5ae1\u62b5\u5e95\u5730\u8482\u7b2c\u5e1d\u5f1f\u9012\u7f14\u6c10\u7c74\u8bcb\u8c1b\u90b8\u577b\u839c\u837b\u5600\u5a23\u67e2\u68e3\u89cc\u7825\u78b2\u7747\u955d\u7f9d\u9ab6',
    dian: '\u98a0\u6382\u6ec7\u7898\u70b9\u5178\u975b\u57ab\u7535\u4f43\u7538\u5e97\u60e6\u5960\u6dc0\u6bbf\u4e36\u963d\u576b\u57dd\u5dc5\u73b7\u765c\u766b\u7c1f\u8e2e',
    diao: '\u7889\u53fc\u96d5\u51cb\u5201\u6389\u540a\u9493\u8c03\u8f7a\u94de\u8729\u7c9c\u8c82',
    die: '\u8dcc\u7239\u789f\u8776\u8fed\u8c0d\u53e0\u4f5a\u57a4\u581e\u63f2\u558b\u6e2b\u8f76\u7252\u74de\u8936\u800b\u8e40\u9cbd\u9cce',
    ding: '\u4e01\u76ef\u53ee\u9489\u9876\u9f0e\u952d\u5b9a\u8ba2\u4e22\u4ec3\u5576\u738e\u815a\u7887\u753a\u94e4\u7594\u8035\u914a',
    dong: '\u4e1c\u51ac\u8463\u61c2\u52a8\u680b\u4f97\u606b\u51bb\u6d1e\u578c\u549a\u5cbd\u5cd2\u5902\u6c21\u80e8\u80f4\u7850\u9e2b',
    dou: '\u515c\u6296\u6597\u9661\u8c46\u9017\u75d8\u8538\u94ad\u7aa6\u7aac\u86aa\u7bfc\u9161',
    du: '\u90fd\u7763\u6bd2\u728a\u72ec\u8bfb\u5835\u7779\u8d4c\u675c\u9540\u809a\u5ea6\u6e21\u5992\u828f\u561f\u6e0e\u691f\u6a50\u724d\u8839\u7b03\u9ad1\u9ee9',
    duan: '\u7aef\u77ed\u953b\u6bb5\u65ad\u7f0e\u5f56\u6934\u7145\u7c16',
    dui: '\u5806\u5151\u961f\u5bf9\u603c\u619d\u7893',
    dun: '\u58a9\u5428\u8e72\u6566\u987f\u56e4\u949d\u76fe\u9041\u7096\u7818\u7905\u76f9\u9566\u8db8',
    duo: '\u6387\u54c6\u591a\u593a\u579b\u8eb2\u6735\u8dfa\u8235\u5241\u60f0\u5815\u5484\u54da\u7f0d\u67c1\u94ce\u88f0\u8e31',
    e: '\u86fe\u5ce8\u9e45\u4fc4\u989d\u8bb9\u5a25\u6076\u5384\u627c\u904f\u9102\u997f\u5669\u8c14\u57a9\u57ad\u82ca\u83aa\u843c\u5443\u6115\u5c59\u5a40\u8f6d\u66f7\u816d\u786a\u9507\u9537\u9e57\u989a\u9cc4',
    en: '\u6069\u84bd\u6441\u5514\u55ef',
    er: '\u800c\u513f\u8033\u5c14\u9975\u6d31\u4e8c\u8d30\u8fe9\u73e5\u94d2\u9e38\u9c95',
    fa: '\u53d1\u7f5a\u7b4f\u4f10\u4e4f\u9600\u6cd5\u73d0\u57a1\u781d',
    fan: '\u85e9\u5e06\u756a\u7ffb\u6a0a\u77fe\u9492\u7e41\u51e1\u70e6\u53cd\u8fd4\u8303\u8d29\u72af\u996d\u6cdb\u8629\u5e61\u72ad\u68b5\u6535\u71d4\u7548\u8e6f',
    fang: '\u574a\u82b3\u65b9\u80aa\u623f\u9632\u59a8\u4eff\u8bbf\u7eba\u653e\u531a\u90a1\u5f77\u94ab\u822b\u9c82',
    fei: '\u83f2\u975e\u5561\u98de\u80a5\u532a\u8bfd\u5420\u80ba\u5e9f\u6cb8\u8d39\u82be\u72d2\u60b1\u6ddd\u5983\u7ecb\u7eef\u69a7\u8153\u6590\u6249\u7953\u7829\u9544\u75f1\u871a\u7bda\u7fe1\u970f\u9cb1',
    fen: '\u82ac\u915a\u5429\u6c1b\u5206\u7eb7\u575f\u711a\u6c7e\u7c89\u594b\u4efd\u5fff\u6124\u7caa\u507e\u7035\u68fc\u610d\u9cbc\u9f22',
    feng: '\u4e30\u5c01\u67ab\u8702\u5cf0\u950b\u98ce\u75af\u70fd\u9022\u51af\u7f1d\u8bbd\u5949\u51e4\u4ff8\u9146\u8451\u6ca3\u781c',
    fu: '\u4f5b\u5426\u592b\u6577\u80a4\u5b75\u6276\u62c2\u8f90\u5e45\u6c1f\u7b26\u4f0f\u4fd8\u670d\u6d6e\u6daa\u798f\u88b1\u5f17\u752b\u629a\u8f85\u4fef\u91dc\u65a7\u812f\u8151\u5e9c\u8150\u8d74\u526f\u8986\u8d4b\u590d\u5085\u4ed8\u961c\u7236\u8179\u8d1f\u5bcc\u8ba3\u9644\u5987\u7f1a\u5490\u5310\u51eb\u90db\u8299\u82fb\u832f\u83a9\u83d4\u544b\u5e5e\u6ecf\u8274\u5b5a\u9a78\u7ec2\u6874\u8d59\u9efb\u9efc\u7f58\u7a03\u99a5\u864d\u86a8\u8709\u8760\u876e\u9eb8\u8dba\u8dd7\u9cc6',
    ga: '\u5676\u560e\u86e4\u5c2c\u5477\u5c15\u5c1c\u65ee\u9486',
    gai: '\u8be5\u6539\u6982\u9499\u76d6\u6e89\u4e10\u9654\u5793\u6224\u8d45\u80f2',
    gan: '\u5e72\u7518\u6746\u67d1\u7aff\u809d\u8d76\u611f\u79c6\u6562\u8d63\u5769\u82f7\u5c34\u64c0\u6cd4\u6de6\u6f89\u7ec0\u6a44\u65f0\u77f8\u75b3\u9150',
    gang: '\u5188\u521a\u94a2\u7f38\u809b\u7eb2\u5c97\u6e2f\u6206\u7f61\u9883\u7b7b',
    gong: '\u6760\u5de5\u653b\u529f\u606d\u9f9a\u4f9b\u8eac\u516c\u5bab\u5f13\u5de9\u6c5e\u62f1\u8d21\u5171\u857b\u5efe\u54a3\u73d9\u80b1\u86a3\u86e9\u89e5',
    gao: '\u7bd9\u768b\u9ad8\u818f\u7f94\u7cd5\u641e\u9550\u7a3f\u544a\u777e\u8bf0\u90dc\u84bf\u85c1\u7f1f\u69d4\u69c1\u6772\u9506',
    ge: '\u54e5\u6b4c\u6401\u6208\u9e3d\u80f3\u7599\u5272\u9769\u845b\u683c\u9601\u9694\u94ec\u4e2a\u5404\u9b32\u4ee1\u54ff\u5865\u55dd\u7ea5\u643f\u8188\u784c\u94ea\u9549\u88bc\u988c\u867c\u8238\u9abc\u9ac2',
    gei: '\u7ed9',
    gen: '\u6839\u8ddf\u4e98\u831b\u54cf\u826e',
    geng: '\u8015\u66f4\u5e9a\u7fb9\u57c2\u803f\u6897\u54fd\u8d53\u9ca0',
    gou: '\u94a9\u52fe\u6c9f\u82df\u72d7\u57a2\u6784\u8d2d\u591f\u4f5d\u8bdf\u5ca3\u9058\u5abe\u7f11\u89cf\u5f40\u9e32\u7b31\u7bdd\u97b2',
    gu: '\u8f9c\u83c7\u5495\u7b8d\u4f30\u6cbd\u5b64\u59d1\u9f13\u53e4\u86ca\u9aa8\u8c37\u80a1\u6545\u987e\u56fa\u96c7\u560f\u8bc2\u83f0\u54cc\u5d2e\u6c69\u688f\u8f71\u726f\u727f\u80cd\u81cc\u6bc2\u77bd\u7f5f\u94b4\u9522\u74e0\u9e2a\u9e44\u75fc\u86c4\u9164\u89da\u9cb4\u9ab0\u9e58',
    gua: '\u522e\u74dc\u5250\u5be1\u6302\u8902\u5366\u8bd6\u5471\u681d\u9e39',
    guai: '\u4e56\u62d0\u602a\u54d9',
    guan: '\u68fa\u5173\u5b98\u51a0\u89c2\u7ba1\u9986\u7f50\u60ef\u704c\u8d2f\u500c\u839e\u63bc\u6dab\u76e5\u9e73\u9ccf',
    guang: '\u5149\u5e7f\u901b\u72b7\u6844\u80f1\u7592',
    gui: '\u7470\u89c4\u572d\u7845\u5f52\u9f9f\u95fa\u8f68\u9b3c\u8be1\u7678\u6842\u67dc\u8dea\u8d35\u523d\u5326\u523f\u5e8b\u5b84\u59ab\u6867\u7085\u6677\u7688\u7c0b\u9c91\u9cdc',
    gun: '\u8f8a\u6eda\u68cd\u4e28\u886e\u7ef2\u78d9\u9ca7',
    guo: '\u9505\u90ed\u56fd\u679c\u88f9\u8fc7\u9998\u8803\u57da\u63b4\u5459\u56d7\u5e3c\u5d1e\u7313\u6901\u8662\u951e\u8052\u872e\u873e\u8748',
    ha: '\u54c8',
    hai: '\u9ab8\u5b69\u6d77\u6c26\u4ea5\u5bb3\u9a87\u54b4\u55e8\u988f\u91a2',
    han: '\u9163\u61a8\u90af\u97e9\u542b\u6db5\u5bd2\u51fd\u558a\u7f55\u7ff0\u64bc\u634d\u65f1\u61be\u608d\u710a\u6c57\u6c49\u9097\u83e1\u6496\u961a\u701a\u6657\u7113\u9894\u86b6\u9f3e',
    hen: '\u592f\u75d5\u5f88\u72e0\u6068',
    hang: '\u676d\u822a\u6c86\u7ed7\u73e9\u6841',
    hao: '\u58d5\u568e\u8c6a\u6beb\u90dd\u597d\u8017\u53f7\u6d69\u8585\u55e5\u5686\u6fe0\u704f\u660a\u7693\u98a2\u869d',
    he: '\u5475\u559d\u8377\u83cf\u6838\u79be\u548c\u4f55\u5408\u76d2\u8c89\u9602\u6cb3\u6db8\u8d6b\u8910\u9e64\u8d3a\u8bc3\u52be\u58d1\u85ff\u55d1\u55ec\u9616\u76cd\u86b5\u7fee',
    hei: '\u563f\u9ed1',
    heng: '\u54fc\u4ea8\u6a2a\u8861\u6052\u8a07\u8605',
    hong: '\u8f70\u54c4\u70d8\u8679\u9e3f\u6d2a\u5b8f\u5f18\u7ea2\u9ec9\u8ba7\u836d\u85a8\u95f3\u6cd3',
    hou: '\u5589\u4faf\u7334\u543c\u539a\u5019\u540e\u5820\u5f8c\u9005\u760a\u7bcc\u7cc7\u9c8e\u9aba',
    hu: '\u547c\u4e4e\u5ffd\u745a\u58f6\u846b\u80e1\u8774\u72d0\u7cca\u6e56\u5f27\u864e\u552c\u62a4\u4e92\u6caa\u6237\u51b1\u553f\u56eb\u5cb5\u7322\u6019\u60da\u6d52\u6ef9\u7425\u69f2\u8f77\u89f3\u70c0\u7173\u623d\u6248\u795c\u9e55\u9e71\u7b0f\u9190\u659b',
    hua: '\u82b1\u54d7\u534e\u733e\u6ed1\u753b\u5212\u5316\u8bdd\u5290\u6d4d\u9a85\u6866\u94e7\u7a1e',
    huai: '\u69d0\u5f8a\u6000\u6dee\u574f\u8fd8\u8e1d',
    huan: '\u6b22\u73af\u6853\u7f13\u6362\u60a3\u5524\u75ea\u8c62\u7115\u6da3\u5ba6\u5e7b\u90c7\u5942\u57b8\u64d0\u571c\u6d39\u6d63\u6f36\u5bf0\u902d\u7f33\u953e\u9ca9\u9b1f',
    huang: '\u8352\u614c\u9ec4\u78fa\u8757\u7c27\u7687\u51f0\u60f6\u714c\u6643\u5e4c\u604d\u8c0e\u968d\u5fa8\u6e5f\u6f62\u9051\u749c\u8093\u7640\u87e5\u7bc1\u9cc7',
    hui: '\u7070\u6325\u8f89\u5fbd\u6062\u86d4\u56de\u6bc1\u6094\u6167\u5349\u60e0\u6666\u8d3f\u79fd\u4f1a\u70e9\u6c47\u8bb3\u8bf2\u7ed8\u8bd9\u8334\u835f\u8559\u54d5\u5599\u96b3\u6d04\u5f57\u7f0b\u73f2\u6656\u605a\u867a\u87ea\u9ebe',
    hun: '\u8364\u660f\u5a5a\u9b42\u6d51\u6df7\u8be8\u9984\u960d\u6eb7\u7f17',
    huo: '\u8c41\u6d3b\u4f19\u706b\u83b7\u6216\u60d1\u970d\u8d27\u7978\u6509\u56af\u5925\u94ac\u952a\u956c\u8020\u8816',
    ji: '\u51fb\u573e\u57fa\u673a\u7578\u7a3d\u79ef\u7b95\u808c\u9965\u8ff9\u6fc0\u8ba5\u9e21\u59ec\u7ee9\u7f09\u5409\u6781\u68d8\u8f91\u7c4d\u96c6\u53ca\u6025\u75be\u6c72\u5373\u5ac9\u7ea7\u6324\u51e0\u810a\u5df1\u84df\u6280\u5180\u5b63\u4f0e\u796d\u5242\u60b8\u6d4e\u5bc4\u5bc2\u8ba1\u8bb0\u65e2\u5fcc\u9645\u5993\u7ee7\u7eaa\u5c45\u4e0c\u4e69\u525e\u4f76\u4f74\u8114\u58bc\u82a8\u82b0\u8401\u84ba\u857a\u638e\u53fd\u54ad\u54dc\u5527\u5c8c\u5d74\u6d0e\u5f50\u5c50\u9aa5\u757f\u7391\u696b\u6b9b\u621f\u6222\u8d4d\u89ca\u7284\u9f51\u77f6\u7f81\u5d47\u7a37\u7620\u7635\u866e\u7b08\u7b04\u66a8\u8dfb\u8dfd\u9701\u9c9a\u9cab\u9afb\u9e82',
    jia: '\u5609\u67b7\u5939\u4f73\u5bb6\u52a0\u835a\u988a\u8d3e\u7532\u94be\u5047\u7a3c\u4ef7\u67b6\u9a7e\u5ac1\u4f3d\u90cf\u62ee\u5cac\u6d43\u8fe6\u73c8\u621b\u80db\u605d\u94d7\u9553\u75c2\u86f1\u7b33\u8888\u8dcf',
    jian: '\u6b7c\u76d1\u575a\u5c16\u7b3a\u95f4\u714e\u517c\u80a9\u8270\u5978\u7f04\u8327\u68c0\u67ec\u78b1\u7877\u62e3\u6361\u7b80\u4fed\u526a\u51cf\u8350\u69db\u9274\u8df5\u8d31\u89c1\u952e\u7bad\u4ef6\u5065\u8230\u5251\u996f\u6e10\u6e85\u6da7\u5efa\u50ed\u8c0f\u8c2b\u83c5\u84b9\u641b\u56dd\u6e54\u8e47\u8b07\u7f23\u67a7\u67d9\u6957\u620b\u622c\u726e\u728d\u6bfd\u8171\u7751\u950f\u9e63\u88e5\u7b15\u7bb4\u7fe6\u8dbc\u8e3a\u9ca3\u97af',
    jiang: '\u50f5\u59dc\u5c06\u6d46\u6c5f\u7586\u848b\u6868\u5956\u8bb2\u5320\u9171\u964d\u8333\u6d1a\u7edb\u7f30\u729f\u7913\u8029\u7ce8\u8c47',
    jiao: '\u8549\u6912\u7901\u7126\u80f6\u4ea4\u90ca\u6d47\u9a84\u5a07\u56bc\u6405\u94f0\u77eb\u4fa5\u811a\u72e1\u89d2\u997a\u7f34\u7ede\u527f\u6559\u9175\u8f7f\u8f83\u53eb\u4f7c\u50ec\u832d\u6322\u564d\u5ce4\u5fbc\u59e3\u7e9f\u656b\u768e\u9e6a\u86df\u91ae\u8de4\u9c9b',
    jie: '\u7a96\u63ed\u63a5\u7686\u79f8\u8857\u9636\u622a\u52ab\u8282\u6854\u6770\u6377\u776b\u7aed\u6d01\u7ed3\u89e3\u59d0\u6212\u85c9\u82a5\u754c\u501f\u4ecb\u75a5\u8beb\u5c4a\u5048\u8ba6\u8bd8\u5588\u55df\u736c\u5a55\u5b51\u6840\u7352\u78a3\u9534\u7596\u88b7\u9889\u86a7\u7faf\u9c92\u9ab1\u9aeb',
    jin: '\u5dfe\u7b4b\u65a4\u91d1\u4eca\u6d25\u895f\u7d27\u9526\u4ec5\u8c28\u8fdb\u9773\u664b\u7981\u8fd1\u70ec\u6d78\u5c3d\u537a\u8369\u5807\u5664\u9991\u5ed1\u5997\u7f19\u747e\u69ff\u8d46\u89d0\u9485\u9513\u887f\u77dc',
    jing: '\u52b2\u8346\u5162\u830e\u775b\u6676\u9cb8\u4eac\u60ca\u7cbe\u7cb3\u7ecf\u4e95\u8b66\u666f\u9888\u9759\u5883\u656c\u955c\u5f84\u75c9\u9756\u7adf\u7ade\u51c0\u522d\u5106\u9631\u83c1\u734d\u61ac\u6cfe\u8ff3\u5f2a\u5a67\u80bc\u80eb\u8148\u65cc',
    jiong: '\u70af\u7a98\u5182\u8fe5\u6243',
    jiu: '\u63ea\u7a76\u7ea0\u7396\u97ed\u4e45\u7078\u4e5d\u9152\u53a9\u6551\u65e7\u81fc\u8205\u548e\u5c31\u759a\u50e6\u557e\u9604\u67e9\u6855\u9e6b\u8d73\u9b0f',
    ju: '\u97a0\u62d8\u72d9\u75bd\u9a79\u83ca\u5c40\u5480\u77e9\u4e3e\u6cae\u805a\u62d2\u636e\u5de8\u5177\u8ddd\u8e1e\u952f\u4ff1\u53e5\u60e7\u70ac\u5267\u5028\u8bb5\u82e3\u82f4\u8392\u63ac\u907d\u5c66\u741a\u67b8\u6910\u6998\u6989\u6a58\u728b\u98d3\u949c\u9514\u7aad\u88fe\u8d84\u91b5\u8e3d\u9f83\u96ce\u97ab',
    juan: '\u6350\u9e43\u5a1f\u5026\u7737\u5377\u7ee2\u9104\u72f7\u6d93\u684a\u8832\u9529\u954c\u96bd',
    jue: '\u6485\u652b\u6289\u6398\u5014\u7235\u89c9\u51b3\u8bc0\u7edd\u53a5\u5282\u8c32\u77cd\u8568\u5658\u5d1b\u7357\u5b53\u73cf\u6877\u6a5b\u721d\u9562\u8e76\u89d6',
    jun: '\u5747\u83cc\u94a7\u519b\u541b\u5cfb\u4fca\u7ae3\u6d5a\u90e1\u9a8f\u6343\u72fb\u76b2\u7b60\u9e87',
    ka: '\u5580\u5496\u5361\u4f67\u5494\u80e9',
    ke: '\u54af\u5777\u82db\u67ef\u68f5\u78d5\u9897\u79d1\u58f3\u54b3\u53ef\u6e34\u514b\u523b\u5ba2\u8bfe\u5ca2\u606a\u6e98\u9a92\u7f02\u73c2\u8f72\u6c2a\u778c\u94b6\u75b4\u7aa0\u874c\u9ac1',
    kai: '\u5f00\u63e9\u6977\u51ef\u6168\u5240\u57b2\u8488\u5ffe\u607a\u94e0\u950e',
    kan: '\u520a\u582a\u52d8\u574e\u780d\u770b\u4f83\u51f5\u83b0\u83b6\u6221\u9f9b\u77b0',
    kang: '\u5eb7\u6177\u7ce0\u625b\u6297\u4ea2\u7095\u5751\u4f09\u95f6\u94aa',
    kao: '\u8003\u62f7\u70e4\u9760\u5c3b\u6832\u7292\u94d0',
    ken: '\u80af\u5543\u57a6\u6073\u57a0\u88c9\u9880',
    keng: '\u542d\u5fd0\u94ff',
    kong: '\u7a7a\u6050\u5b54\u63a7\u5025\u5d06\u7b9c',
    kou: '\u62a0\u53e3\u6263\u5bc7\u82a4\u853b\u53e9\u770d\u7b58',
    ku: '\u67af\u54ed\u7a9f\u82e6\u9177\u5e93\u88e4\u5233\u5800\u55be\u7ed4\u9ab7',
    kua: '\u5938\u57ae\u630e\u8de8\u80ef\u4f89',
    kuai: '\u5757\u7b77\u4fa9\u5feb\u84af\u90d0\u8489\u72ef\u810d',
    kuan: '\u5bbd\u6b3e\u9acb',
    kuang: '\u5321\u7b50\u72c2\u6846\u77ff\u7736\u65f7\u51b5\u8bd3\u8bf3\u909d\u5739\u593c\u54d0\u7ea9\u8d36',
    kui: '\u4e8f\u76d4\u5cbf\u7aa5\u8475\u594e\u9b41\u5080\u9988\u6127\u6e83\u9997\u532e\u5914\u9697\u63c6\u55b9\u559f\u609d\u6126\u9615\u9035\u668c\u777d\u8069\u8770\u7bd1\u81fe\u8dec',
    kun: '\u5764\u6606\u6346\u56f0\u6083\u9603\u7428\u951f\u918c\u9cb2\u9ae1',
    kuo: '\u62ec\u6269\u5ed3\u9614\u86de',
    la: '\u5783\u62c9\u5587\u8721\u814a\u8fa3\u5566\u524c\u647a\u908b\u65ef\u782c\u760c',
    lai: '\u83b1\u6765\u8d56\u5d03\u5f95\u6d9e\u6fd1\u8d49\u7750\u94fc\u765e\u7c41',
    lan: '\u84dd\u5a6a\u680f\u62e6\u7bee\u9611\u5170\u6f9c\u8c30\u63fd\u89c8\u61d2\u7f06\u70c2\u6ee5\u5549\u5c9a\u61d4\u6f24\u6984\u6593\u7f71\u9567\u8934',
    lang: '\u7405\u6994\u72fc\u5eca\u90ce\u6717\u6d6a\u83a8\u8497\u5577\u9606\u9512\u7a02\u8782',
    lao: '\u635e\u52b3\u7262\u8001\u4f6c\u59e5\u916a\u70d9\u6d9d\u5520\u5d02\u6833\u94d1\u94f9\u75e8\u91aa',
    le: '\u52d2\u4e50\u808b\u4ec2\u53fb\u561e\u6cd0\u9cd3',
    lei: '\u96f7\u956d\u857e\u78ca\u7d2f\u5121\u5792\u64c2\u7c7b\u6cea\u7fb8\u8bd4\u837d\u54a7\u6f2f\u5ad8\u7f27\u6a91\u8012\u9179',
    ling: '\u68f1\u51b7\u62ce\u73b2\u83f1\u96f6\u9f84\u94c3\u4f36\u7f9a\u51cc\u7075\u9675\u5cad\u9886\u53e6\u4ee4\u9143\u5844\u82d3\u5464\u56f9\u6ce0\u7eeb\u67c3\u68c2\u74f4\u8046\u86c9\u7fce\u9cae',
    leng: '\u695e\u6123',
    li: '\u5398\u68a8\u7281\u9ece\u7bf1\u72f8\u79bb\u6f13\u7406\u674e\u91cc\u9ca4\u793c\u8389\u8354\u540f\u6817\u4e3d\u5389\u52b1\u783e\u5386\u5229\u5088\u4f8b\u4fd0\u75e2\u7acb\u7c92\u6ca5\u96b6\u529b\u7483\u54e9\u4fea\u4fda\u90e6\u575c\u82c8\u8385\u84e0\u85dc\u6369\u5456\u5533\u55b1\u7301\u6ea7\u6fa7\u9026\u5a0c\u5ae0\u9a8a\u7f21\u73de\u67a5\u680e\u8f79\u623e\u783a\u8a48\u7f79\u9502\u9e42\u75a0\u75ac\u86ce\u870a\u8821\u7b20\u7be5\u7c9d\u91b4\u8dde\u96f3\u9ca1\u9ce2\u9ee7',
    lian: '\u4fe9\u8054\u83b2\u8fde\u9570\u5ec9\u601c\u6d9f\u5e18\u655b\u8138\u94fe\u604b\u70bc\u7ec3\u631b\u8539\u5941\u6f4b\u6fc2\u5a08\u740f\u695d\u6b93\u81c1\u81a6\u88e2\u880a\u9ca2',
    liang: '\u7cae\u51c9\u6881\u7cb1\u826f\u4e24\u8f86\u91cf\u667e\u4eae\u8c05\u589a\u690b\u8e09\u9753\u9b49',
    liao: '\u64a9\u804a\u50da\u7597\u71ce\u5be5\u8fbd\u6f66\u4e86\u6482\u9563\u5ed6\u6599\u84fc\u5c25\u5639\u7360\u5bee\u7f2d\u948c\u9e69\u8022',
    lie: '\u5217\u88c2\u70c8\u52a3\u730e\u51bd\u57d2\u6d0c\u8d94\u8e90\u9b23',
    lin: '\u7433\u6797\u78f7\u9716\u4e34\u90bb\u9cde\u6dcb\u51db\u8d41\u541d\u853a\u5d99\u5eea\u9074\u6aa9\u8f9a\u77b5\u7cbc\u8e8f\u9e9f',
    liu: '\u6e9c\u7409\u69b4\u786b\u998f\u7559\u5218\u7624\u6d41\u67f3\u516d\u62a1\u507b\u848c\u6cd6\u6d4f\u905b\u9a9d\u7efa\u65d2\u7198\u950d\u954f\u9e68\u938f',
    long: '\u9f99\u804b\u5499\u7b3c\u7abf\u9686\u5784\u62e2\u9647\u5f04\u5785\u830f\u6cf7\u73d1\u680a\u80e7\u783b\u7643',
    lou: '\u697c\u5a04\u6402\u7bd3\u6f0f\u964b\u55bd\u5d5d\u9542\u7618\u8027\u877c\u9ac5',
    lu: '\u82a6\u5362\u9885\u5e90\u7089\u63b3\u5364\u864f\u9c81\u9e93\u788c\u9732\u8def\u8d42\u9e7f\u6f5e\u7984\u5f55\u9646\u622e\u5786\u6445\u64b8\u565c\u6cf8\u6e0c\u6f09\u7490\u680c\u6a79\u8f73\u8f82\u8f98\u6c07\u80ea\u9565\u9e2c\u9e6d\u7c0f\u823b\u9c88',
    lv: '\u9a74\u5415\u94dd\u4fa3\u65c5\u5c65\u5c61\u7f15\u8651\u6c2f\u5f8b\u7387\u6ee4\u7eff\u634b\u95fe\u6988\u8182\u7a06\u891b',
    luan: '\u5ce6\u5b6a\u6ee6\u5375\u4e71\u683e\u9e3e\u92ae',
    lue: '\u63a0\u7565\u950a',
    lun: '\u8f6e\u4f26\u4ed1\u6ca6\u7eb6\u8bba\u56f5',
    luo: '\u841d\u87ba\u7f57\u903b\u9523\u7ba9\u9aa1\u88f8\u843d\u6d1b\u9a86\u7edc\u502e\u8366\u645e\u7321\u6cfa\u6924\u8136\u9559\u7630\u96d2',
    ma: '\u5988\u9ebb\u739b\u7801\u8682\u9a6c\u9a82\u561b\u5417\u551b\u72b8\u5b37\u6769\u9ebd',
    mai: '\u57cb\u4e70\u9ea6\u5356\u8fc8\u8109\u52a2\u836c\u54aa\u973e',
    man: '\u7792\u9992\u86ee\u6ee1\u8513\u66fc\u6162\u6f2b\u8c29\u5881\u5e54\u7f26\u71b3\u9558\u989f\u87a8\u9cd7\u9794',
    mang: '\u8292\u832b\u76f2\u5fd9\u83bd\u9099\u6f2d\u6726\u786d\u87d2',
    meng: '\u6c13\u840c\u8499\u6aac\u76df\u9530\u731b\u68a6\u5b5f\u52d0\u750d\u77a2\u61f5\u791e\u867b\u8722\u8813\u824b\u8268\u9efe',
    miao: '\u732b\u82d7\u63cf\u7784\u85d0\u79d2\u6e3a\u5e99\u5999\u55b5\u9088\u7f08\u7f2a\u676a\u6dfc\u7707\u9e4b\u8731',
    mao: '\u8305\u951a\u6bdb\u77db\u94c6\u536f\u8302\u5192\u5e3d\u8c8c\u8d38\u4f94\u88a4\u52d6\u8306\u5cc1\u7441\u6634\u7266\u8004\u65c4\u61cb\u7780\u86d1\u8765\u87ca\u9ae6',
    me: '\u4e48',
    mei: '\u73ab\u679a\u6885\u9176\u9709\u7164\u6ca1\u7709\u5a92\u9541\u6bcf\u7f8e\u6627\u5bd0\u59b9\u5a9a\u5776\u8393\u5d4b\u7338\u6d7c\u6e44\u6963\u9545\u9e5b\u8882\u9b45',
    men: '\u95e8\u95f7\u4eec\u626a\u739f\u7116\u61d1\u9494',
    mi: '\u772f\u919a\u9761\u7cdc\u8ff7\u8c1c\u5f25\u7c73\u79d8\u89c5\u6ccc\u871c\u5bc6\u5e42\u8288\u5196\u8c27\u863c\u5627\u7315\u736f\u6c68\u5b93\u5f2d\u8112\u6549\u7cf8\u7e3b\u9e8b',
    mian: '\u68c9\u7720\u7ef5\u5195\u514d\u52c9\u5a29\u7f05\u9762\u6c94\u6e4e\u817c\u7704',
    mie: '\u8511\u706d\u54a9\u881b\u7bfe',
    min: '\u6c11\u62bf\u76bf\u654f\u60af\u95fd\u82e0\u5cb7\u95f5\u6cef\u73c9',
    ming: '\u660e\u879f\u9e23\u94ed\u540d\u547d\u51a5\u8317\u6e9f\u669d\u7791\u9169',
    miu: '\u8c2c',
    mo: '\u6478\u6479\u8611\u6a21\u819c\u78e8\u6469\u9b54\u62b9\u672b\u83ab\u58a8\u9ed8\u6cab\u6f20\u5bde\u964c\u8c1f\u8309\u84e6\u998d\u5aeb\u9546\u79e3\u763c\u8031\u87c6\u8c8a\u8c98',
    mou: '\u8c0b\u725f\u67d0\u53b6\u54de\u5a7a\u7738\u936a',
    mu: '\u62c7\u7261\u4ea9\u59c6\u6bcd\u5893\u66ae\u5e55\u52df\u6155\u6728\u76ee\u7766\u7267\u7a46\u4eeb\u82dc\u5452\u6c90\u6bea\u94bc',
    na: '\u62ff\u54ea\u5450\u94a0\u90a3\u5a1c\u7eb3\u5185\u637a\u80ad\u954e\u8872\u7bac',
    nai: '\u6c16\u4e43\u5976\u8010\u5948\u9f10\u827f\u8418\u67f0',
    nan: '\u5357\u7537\u96be\u56ca\u5583\u56e1\u6960\u8169\u877b\u8d67',
    nao: '\u6320\u8111\u607c\u95f9\u5b6c\u57b4\u7331\u7459\u7847\u94d9\u86f2',
    ne: '\u6dd6\u5462\u8bb7',
    nei: '\u9981',
    nen: '\u5ae9\u80fd\u6798\u6041',
    ni: '\u59ae\u9713\u502a\u6ce5\u5c3c\u62df\u4f60\u533f\u817b\u9006\u6eba\u4f32\u576d\u730a\u6029\u6ee0\u6635\u65ce\u7962\u615d\u7768\u94cc\u9cb5',
    nian: '\u852b\u62c8\u5e74\u78be\u64b5\u637b\u5ff5\u5eff\u8f87\u9ecf\u9c87\u9cb6',
    niang: '\u5a18\u917f',
    niao: '\u9e1f\u5c3f\u8311\u5b32\u8132\u8885',
    nie: '\u634f\u8042\u5b7d\u556e\u954a\u954d\u6d85\u4e5c\u9667\u8616\u55eb\u8080\u989e\u81ec\u8e51',
    nin: '\u60a8\u67e0',
    ning: '\u72de\u51dd\u5b81\u62e7\u6cde\u4f5e\u84e5\u549b\u752f\u804d',
    niu: '\u725b\u626d\u94ae\u7ebd\u72c3\u5ff8\u599e\u86b4',
    nong: '\u8113\u6d53\u519c\u4fac',
    nu: '\u5974\u52aa\u6012\u5476\u5e11\u5f29\u80ec\u5b65\u9a7d',
    nv: '\u5973\u6067\u9495\u8844',
    nuan: '\u6696',
    nuenue: '\u8650',
    nue: '\u759f\u8c11',
    nuo: '\u632a\u61e6\u7cef\u8bfa\u50a9\u6426\u558f\u9518',
    ou: '\u54e6\u6b27\u9e25\u6bb4\u85d5\u5455\u5076\u6ca4\u6004\u74ef\u8026',
    pa: '\u556a\u8db4\u722c\u5e15\u6015\u7436\u8469\u7b62',
    pai: '\u62cd\u6392\u724c\u5f98\u6e43\u6d3e\u4ff3\u848e',
    pan: '\u6500\u6f58\u76d8\u78d0\u76fc\u7554\u5224\u53db\u723f\u6cee\u88a2\u897b\u87e0\u8e52',
    pang: '\u4e53\u5e9e\u65c1\u802a\u80d6\u6ec2\u9004',
    pao: '\u629b\u5486\u5228\u70ae\u888d\u8dd1\u6ce1\u530f\u72cd\u5e96\u812c\u75b1',
    pei: '\u5478\u80da\u57f9\u88f4\u8d54\u966a\u914d\u4f69\u6c9b\u638a\u8f94\u5e14\u6de0\u65c6\u952b\u9185\u9708',
    pen: '\u55b7\u76c6\u6e53',
    peng: '\u7830\u62a8\u70f9\u6f8e\u5f6d\u84ec\u68da\u787c\u7bf7\u81a8\u670b\u9e4f\u6367\u78b0\u576f\u580b\u562d\u6026\u87db',
    pi: '\u7812\u9739\u6279\u62ab\u5288\u7435\u6bd7\u5564\u813e\u75b2\u76ae\u5339\u75de\u50fb\u5c41\u8b6c\u4e15\u9674\u90b3\u90eb\u572e\u9f19\u64d7\u567c\u5e80\u5ab2\u7eb0\u6787\u7513\u7765\u7f74\u94cd\u75e6\u7656\u758b\u868d\u8c94',
    pian: '\u7bc7\u504f\u7247\u9a97\u8c1d\u9a88\u728f\u80fc\u890a\u7fe9\u8e41',
    piao: '\u98d8\u6f02\u74e2\u7968\u527d\u560c\u5ad6\u7f25\u6b8d\u779f\u87b5',
    pie: '\u6487\u77a5\u4e3f\u82e4\u6c15',
    pin: '\u62fc\u9891\u8d2b\u54c1\u8058\u62da\u59d8\u5ad4\u6980\u725d\u98a6',
    ping: '\u4e52\u576a\u82f9\u840d\u5e73\u51ed\u74f6\u8bc4\u5c4f\u4fdc\u5a09\u67b0\u9c86',
    po: '\u5761\u6cfc\u9887\u5a46\u7834\u9b44\u8feb\u7c95\u53f5\u9131\u6ea5\u73c0\u948b\u94b7\u76a4\u7b38',
    pou: '\u5256\u88d2\u8e23',
    pu: '\u6251\u94fa\u4ec6\u8386\u8461\u83e9\u84b2\u57d4\u6734\u5703\u666e\u6d66\u8c31\u66dd\u7011\u530d\u5657\u6fee\u749e\u6c06\u9564\u9568\u8e7c',
    qi: '\u671f\u6b3a\u6816\u621a\u59bb\u4e03\u51c4\u6f06\u67d2\u6c8f\u5176\u68cb\u5947\u6b67\u7566\u5d0e\u8110\u9f50\u65d7\u7948\u7941\u9a91\u8d77\u5c82\u4e5e\u4f01\u542f\u5951\u780c\u5668\u6c14\u8fc4\u5f03\u6c7d\u6ce3\u8bab\u4e9f\u4e93\u573b\u8291\u840b\u847a\u5601\u5c7a\u5c90\u6c54\u6dc7\u9a90\u7eee\u742a\u7426\u675e\u6864\u69ed\u6b39\u797a\u61a9\u789b\u86f4\u871e\u7da6\u7dae\u8dbf\u8e4a\u9ccd\u9e92',
    qia: '\u6390\u6070\u6d3d\u845c',
    qian: '\u7275\u6266\u948e\u94c5\u5343\u8fc1\u7b7e\u4edf\u8c26\u4e7e\u9ed4\u94b1\u94b3\u524d\u6f5c\u9063\u6d45\u8c34\u5811\u5d4c\u6b20\u6b49\u4f65\u9621\u828a\u82a1\u8368\u63ae\u5c8d\u60ad\u614a\u9a9e\u6434\u8930\u7f31\u6920\u80b7\u6106\u94a4\u8654\u7b9d',
    qiang: '\u67aa\u545b\u8154\u7f8c\u5899\u8537\u5f3a\u62a2\u5af1\u6a2f\u6217\u709d\u9516\u9535\u956a\u8941\u8723\u7f9f\u8deb\u8dc4',
    qiao: '\u6a47\u9539\u6572\u6084\u6865\u77a7\u4e54\u4fa8\u5de7\u9798\u64ac\u7fd8\u5ced\u4fcf\u7a8d\u5281\u8bee\u8c2f\u835e\u6100\u6194\u7f32\u6a35\u6bf3\u7857\u8df7\u9792',
    qie: '\u5207\u8304\u4e14\u602f\u7a83\u90c4\u553c\u60ec\u59be\u6308\u9532\u7ba7',
    qin: '\u94a6\u4fb5\u4eb2\u79e6\u7434\u52e4\u82b9\u64d2\u79bd\u5bdd\u6c81\u82a9\u84c1\u8572\u63ff\u5423\u55ea\u5659\u6eb1\u6a8e\u8793\u887e',
    qing: '\u9752\u8f7b\u6c22\u503e\u537f\u6e05\u64ce\u6674\u6c30\u60c5\u9877\u8bf7\u5e86\u5029\u82d8\u570a\u6aa0\u78ec\u873b\u7f44\u7b90\u8b26\u9cad\u9ee5',
    qiong: '\u743c\u7a77\u909b\u8315\u7a79\u7b47\u928e',
    qiu: '\u79cb\u4e18\u90b1\u7403\u6c42\u56da\u914b\u6cc5\u4fc5\u6c3d\u5def\u827d\u72b0\u6e6b\u9011\u9052\u6978\u8d47\u9e20\u866c\u86af\u8764\u88d8\u7cd7\u9cc5\u9f3d',
    qu: '\u8d8b\u533a\u86c6\u66f2\u8eaf\u5c48\u9a71\u6e20\u53d6\u5a36\u9f8b\u8da3\u53bb\u8bce\u52ac\u8556\u8627\u5c96\u8862\u9612\u74a9\u89d1\u6c0d\u795b\u78f2\u766f\u86d0\u883c\u9eb4\u77bf\u9ee2',
    quan: '\u5708\u98a7\u6743\u919b\u6cc9\u5168\u75ca\u62f3\u72ac\u5238\u529d\u8be0\u8343\u737e\u609b\u7efb\u8f81\u754e\u94e8\u8737\u7b4c\u9b08',
    que: '\u7f3a\u7094\u7638\u5374\u9e4a\u69b7\u786e\u96c0\u9619\u60ab',
    qun: '\u88d9\u7fa4\u9021',
    ran: '\u7136\u71c3\u5189\u67d3\u82d2\u9aef',
    rang: '\u74e4\u58e4\u6518\u56b7\u8ba9\u79b3\u7a70',
    rao: '\u9976\u6270\u7ed5\u835b\u5a06\u6861',
    ruo: '\u60f9\u82e5\u5f31',
    re: '\u70ed\u504c',
    ren: '\u58ec\u4ec1\u4eba\u5fcd\u97e7\u4efb\u8ba4\u5203\u598a\u7eab\u4ede\u834f\u845a\u996a\u8f6b\u7a14\u887d',
    reng: '\u6254\u4ecd',
    ri: '\u65e5',
    rong: '\u620e\u8338\u84c9\u8363\u878d\u7194\u6eb6\u5bb9\u7ed2\u5197\u5d58\u72e8\u7f1b\u6995\u877e',
    rou: '\u63c9\u67d4\u8089\u7cc5\u8e42\u97a3',
    ru: '\u8339\u8815\u5112\u5b7a\u5982\u8fb1\u4e73\u6c5d\u5165\u8925\u84d0\u85b7\u5685\u6d33\u6ebd\u6fe1\u94f7\u8966\u98a5',
    ruan: '\u8f6f\u962e\u670a',
    rui: '\u854a\u745e\u9510\u82ae\u8564\u777f\u868b',
    run: '\u95f0\u6da6',
    sa: '\u6492\u6d12\u8428\u5345\u4ee8\u6332\u98d2',
    sai: '\u816e\u9cc3\u585e\u8d5b\u567b',
    san: '\u4e09\u53c1\u4f1e\u6563\u5f61\u9993\u6c35\u6bf5\u7cc1\u9730',
    sang: '\u6851\u55d3\u4e27\u6421\u78c9\u98a1',
    sao: '\u6414\u9a9a\u626b\u5ac2\u57fd\u81ca\u7619\u9ccb',
    se: '\u745f\u8272\u6da9\u556c\u94e9\u94ef\u7a51',
    sen: '\u68ee',
    seng: '\u50e7',
    sha: '\u838e\u7802\u6740\u5239\u6c99\u7eb1\u50bb\u5565\u715e\u810e\u6b43\u75e7\u88df\u970e\u9ca8',
    shai: '\u7b5b\u6652\u917e',
    shan: '\u73ca\u82eb\u6749\u5c71\u5220\u717d\u886b\u95ea\u9655\u64c5\u8d61\u81b3\u5584\u6c55\u6247\u7f2e\u5261\u8baa\u912f\u57cf\u829f\u6f78\u59d7\u9a9f\u81bb\u9490\u759d\u87ee\u8222\u8dda\u9cdd',
    shang: '\u5892\u4f24\u5546\u8d4f\u664c\u4e0a\u5c1a\u88f3\u57a7\u7ef1\u6b87\u71b5\u89de',
    shao: '\u68a2\u634e\u7a0d\u70e7\u828d\u52fa\u97f6\u5c11\u54e8\u90b5\u7ecd\u52ad\u82d5\u6f72\u86f8\u7b24\u7b72\u8244',
    she: '\u5962\u8d4a\u86c7\u820c\u820d\u8d66\u6444\u5c04\u6151\u6d89\u793e\u8bbe\u538d\u4f58\u731e\u7572\u9e9d',
    shen: '\u7837\u7533\u547b\u4f38\u8eab\u6df1\u5a20\u7ec5\u795e\u6c88\u5ba1\u5a76\u751a\u80be\u614e\u6e17\u8bdc\u8c02\u5432\u54c2\u6e16\u6939\u77e7\u8703',
    sheng: '\u58f0\u751f\u7525\u7272\u5347\u7ef3\u7701\u76db\u5269\u80dc\u5723\u4e1e\u6e11\u5ab5\u771a\u7b19',
    shi: '\u5e08\u5931\u72ee\u65bd\u6e7f\u8bd7\u5c38\u8671\u5341\u77f3\u62fe\u65f6\u4ec0\u98df\u8680\u5b9e\u8bc6\u53f2\u77e2\u4f7f\u5c4e\u9a76\u59cb\u5f0f\u793a\u58eb\u4e16\u67ff\u4e8b\u62ed\u8a93\u901d\u52bf\u662f\u55dc\u566c\u9002\u4ed5\u4f8d\u91ca\u9970\u6c0f\u5e02\u6043\u5ba4\u89c6\u8bd5\u8c25\u57d8\u83b3\u84cd\u5f11\u5511\u9963\u8f7c\u8006\u8d33\u70bb\u793b\u94c8\u94ca\u87ab\u8210\u7b6e\u8c55\u9ca5\u9cba',
    shou: '\u6536\u624b\u9996\u5b88\u5bff\u6388\u552e\u53d7\u7626\u517d\u624c\u72e9\u7ef6\u824f',
    shu: '\u852c\u67a2\u68b3\u6b8a\u6292\u8f93\u53d4\u8212\u6dd1\u758f\u4e66\u8d4e\u5b70\u719f\u85af\u6691\u66d9\u7f72\u8700\u9ecd\u9f20\u5c5e\u672f\u8ff0\u6811\u675f\u620d\u7ad6\u5885\u5eb6\u6570\u6f31\u6055\u500f\u587e\u83fd\u5fc4\u6cad\u6d91\u6f8d\u59dd\u7ebe\u6bf9\u8167\u6bb3\u956f\u79eb\u9e6c',
    shua: '\u5237\u800d\u5530\u6dae',
    shuai: '\u6454\u8870\u7529\u5e05\u87c0',
    shuan: '\u6813\u62f4\u95e9',
    shuang: '\u971c\u53cc\u723d\u5b40',
    shui: '\u8c01\u6c34\u7761\u7a0e',
    shun: '\u542e\u77ac\u987a\u821c\u6042',
    shuo: '\u8bf4\u7855\u6714\u70c1\u84b4\u6420\u55cd\u6fef\u5981\u69ca\u94c4',
    si: '\u65af\u6495\u5636\u601d\u79c1\u53f8\u4e1d\u6b7b\u8086\u5bfa\u55e3\u56db\u4f3a\u4f3c\u9972\u5df3\u53ae\u4fdf\u5155\u83e5\u549d\u6c5c\u6cd7\u6f8c\u59d2\u9a77\u7f0c\u7940\u7960\u9536\u9e36\u801c\u86f3\u7b25',
    song: '\u677e\u8038\u6002\u9882\u9001\u5b8b\u8bbc\u8bf5\u51c7\u83d8\u5d27\u5d69\u5fea\u609a\u6dde\u7ae6',
    sou: '\u641c\u8258\u64de\u55fd\u53df\u55d6\u55fe\u998a\u6eb2\u98d5\u778d\u953c\u878b',
    su: '\u82cf\u9165\u4fd7\u7d20\u901f\u7c9f\u50f3\u5851\u6eaf\u5bbf\u8bc9\u8083\u5919\u8c21\u850c\u55c9\u612b\u7c0c\u89eb\u7a23',
    suan: '\u9178\u849c\u7b97',
    sui: '\u867d\u968b\u968f\u7ee5\u9ad3\u788e\u5c81\u7a57\u9042\u96a7\u795f\u84d1\u51ab\u8c07\u6fc9\u9083\u71e7\u772d\u7762',
    sun: '\u5b59\u635f\u7b0b\u836a\u72f2\u98e7\u69ab\u8de3\u96bc',
    suo: '\u68ad\u5506\u7f29\u7410\u7d22\u9501\u6240\u5522\u55e6\u5a11\u686b\u7743\u7fa7',
    ta: '\u584c\u4ed6\u5b83\u5979\u5854\u736d\u631e\u8e4b\u8e0f\u95fc\u6ebb\u9062\u69bb\u6c93',
    tai: '\u80ce\u82d4\u62ac\u53f0\u6cf0\u915e\u592a\u6001\u6c70\u90b0\u85b9\u80bd\u70b1\u949b\u8dc6\u9c90',
    tan: '\u574d\u644a\u8d2a\u762b\u6ee9\u575b\u6a80\u75f0\u6f6d\u8c2d\u8c08\u5766\u6bef\u8892\u78b3\u63a2\u53f9\u70ad\u90ef\u8548\u6619\u94bd\u952c\u8983',
    tang: '\u6c64\u5858\u642a\u5802\u68e0\u819b\u5510\u7cd6\u50a5\u9967\u6e8f\u746d\u94f4\u9557\u8025\u8797\u87b3\u7fb0\u91a3',
    thang: '\u5018\u8eba\u6dcc',
    theng: '\u8d9f\u70eb',
    tao: '\u638f\u6d9b\u6ed4\u7ee6\u8404\u6843\u9003\u6dd8\u9676\u8ba8\u5957\u6311\u9f17\u5555\u97ec\u9955',
    te: '\u7279',
    teng: '\u85e4\u817e\u75bc\u8a8a\u6ed5',
    ti: '\u68af\u5254\u8e22\u9511\u63d0\u9898\u8e44\u557c\u4f53\u66ff\u568f\u60d5\u6d95\u5243\u5c49\u8351\u608c\u9016\u7ee8\u7f07\u9e48\u88fc\u918d',
    tian: '\u5929\u6dfb\u586b\u7530\u751c\u606c\u8214\u8146\u63ad\u5fdd\u9617\u6b84\u754b\u94bf\u86ba',
    tiao: '\u6761\u8fe2\u773a\u8df3\u4f7b\u7967\u94eb\u7a95\u9f86\u9ca6',
    tie: '\u8d34\u94c1\u5e16\u841c\u992e',
    ting: '\u5385\u542c\u70c3\u6c40\u5ef7\u505c\u4ead\u5ead\u633a\u8247\u839b\u8476\u5a77\u6883\u8713\u9706',
    tong: '\u901a\u6850\u916e\u77b3\u540c\u94dc\u5f64\u7ae5\u6876\u6345\u7b52\u7edf\u75db\u4f5f\u50ee\u4edd\u833c\u55f5\u6078\u6f7c\u783c',
    tou: '\u5077\u6295\u5934\u900f\u4ea0',
    tu: '\u51f8\u79c3\u7a81\u56fe\u5f92\u9014\u6d82\u5c60\u571f\u5410\u5154\u580d\u837c\u83df\u948d\u9174',
    tuan: '\u6e4d\u56e2\u7583',
    tui: '\u63a8\u9893\u817f\u8715\u892a\u9000\u5fd2\u717a',
    tun: '\u541e\u5c6f\u81c0\u9968\u66be\u8c5a\u7a80',
    tuo: '\u62d6\u6258\u8131\u9e35\u9640\u9a6e\u9a7c\u692d\u59a5\u62d3\u553e\u4e47\u4f57\u5768\u5eb9\u6cb1\u67dd\u7823\u7ba8\u8204\u8dce\u9f0d',
    wa: '\u6316\u54c7\u86d9\u6d3c\u5a03\u74e6\u889c\u4f64\u5a32\u817d',
    wai: '\u6b6a\u5916',
    wan: '\u8c4c\u5f2f\u6e7e\u73a9\u987d\u4e38\u70f7\u5b8c\u7897\u633d\u665a\u7696\u60cb\u5b9b\u5a49\u4e07\u8155\u525c\u8284\u82cb\u83c0\u7ea8\u7efe\u742c\u8118\u7579\u873f\u7ba2',
    wang: '\u6c6a\u738b\u4ea1\u6789\u7f51\u5f80\u65fa\u671b\u5fd8\u5984\u7f54\u5c22\u60d8\u8f8b\u9b4d',
    wei: '\u5a01\u5dcd\u5fae\u5371\u97e6\u8fdd\u6845\u56f4\u552f\u60df\u4e3a\u6f4d\u7ef4\u82c7\u840e\u59d4\u4f1f\u4f2a\u5c3e\u7eac\u672a\u851a\u5473\u754f\u80c3\u5582\u9b4f\u4f4d\u6e2d\u8c13\u5c09\u6170\u536b\u502d\u504e\u8bff\u9688\u8473\u8587\u5e0f\u5e37\u5d34\u5d6c\u7325\u732c\u95f1\u6ca9\u6d27\u6da0\u9036\u5a13\u73ae\u97ea\u8ece\u709c\u7168\u71a8\u75ff\u8249\u9c94',
    wen: '\u761f\u6e29\u868a\u6587\u95fb\u7eb9\u543b\u7a33\u7d0a\u95ee\u520e\u6120\u960c\u6c76\u74ba\u97eb\u6b81\u96ef',
    weng: '\u55e1\u7fc1\u74ee\u84ca\u8579',
    wo: '\u631d\u8717\u6da1\u7a9d\u6211\u65a1\u5367\u63e1\u6c83\u83b4\u5e44\u6e25\u674c\u809f\u9f8c',
    wu: '\u5deb\u545c\u94a8\u4e4c\u6c61\u8bec\u5c4b\u65e0\u829c\u68a7\u543e\u5434\u6bcb\u6b66\u4e94\u6342\u5348\u821e\u4f0d\u4fae\u575e\u620a\u96fe\u6664\u7269\u52ff\u52a1\u609f\u8bef\u5140\u4ef5\u9622\u90ac\u572c\u82b4\u5e91\u6003\u5fe4\u6d6f\u5be4\u8fd5\u59a9\u9a9b\u727e\u7110\u9e49\u9e5c\u8708\u92c8\u9f2f',
    xi: '\u6614\u7199\u6790\u897f\u7852\u77fd\u6670\u563b\u5438\u9521\u727a\u7a00\u606f\u5e0c\u6089\u819d\u5915\u60dc\u7184\u70ef\u6eaa\u6c50\u7280\u6a84\u88ad\u5e2d\u4e60\u5ab3\u559c\u94e3\u6d17\u7cfb\u9699\u620f\u7ec6\u50d6\u516e\u96b0\u90d7\u831c\u8478\u84f0\u595a\u550f\u5f99\u9969\u960b\u6d60\u6dc5\u5c63\u5b09\u73ba\u6a28\u66e6\u89cb\u6b37\u71b9\u798a\u79a7\u94b8\u7699\u7a78\u8725\u87cb\u823e\u7fb2\u7c9e\u7fd5\u91af\u9f37',
    xia: '\u778e\u867e\u5323\u971e\u8f96\u6687\u5ce1\u4fa0\u72ed\u4e0b\u53a6\u590f\u5413\u6380\u846d\u55c4\u72ce\u9050\u7455\u7856\u7615\u7f45\u9ee0',
    xian: '\u9528\u5148\u4ed9\u9c9c\u7ea4\u54b8\u8d24\u8854\u8237\u95f2\u6d8e\u5f26\u5acc\u663e\u9669\u73b0\u732e\u53bf\u817a\u9985\u7fa1\u5baa\u9677\u9650\u7ebf\u51bc\u85d3\u5c98\u7303\u66b9\u5a34\u6c19\u7946\u9e47\u75eb\u86ac\u7b45\u7c7c\u9170\u8df9',
    xiang: '\u76f8\u53a2\u9576\u9999\u7bb1\u8944\u6e58\u4e61\u7fd4\u7965\u8be6\u60f3\u54cd\u4eab\u9879\u5df7\u6a61\u50cf\u5411\u8c61\u8297\u8459\u9977\u5ea0\u9aa7\u7f03\u87d3\u9c9e\u98e8',
    xiao: '\u8427\u785d\u9704\u524a\u54ee\u56a3\u9500\u6d88\u5bb5\u6dc6\u6653\u5c0f\u5b5d\u6821\u8096\u5578\u7b11\u6548\u54d3\u54bb\u5d24\u6f47\u900d\u9a81\u7ee1\u67ad\u67b5\u7b71\u7bab\u9b48',
    xie: '\u6954\u4e9b\u6b47\u874e\u978b\u534f\u631f\u643a\u90aa\u659c\u80c1\u8c10\u5199\u68b0\u5378\u87f9\u61c8\u6cc4\u6cfb\u8c22\u5c51\u5055\u4eb5\u52f0\u71ee\u85a4\u64b7\u5ee8\u7023\u9082\u7ec1\u7f2c\u69ad\u698d\u6b59\u8e9e',
    xin: '\u85aa\u82af\u950c\u6b23\u8f9b\u65b0\u5ffb\u5fc3\u4fe1\u8845\u56df\u99a8\u8398\u6b46\u94fd\u946b',
    xing: '\u661f\u8165\u7329\u60fa\u5174\u5211\u578b\u5f62\u90a2\u884c\u9192\u5e78\u674f\u6027\u59d3\u9649\u8347\u8365\u64e4\u60bb\u784e',
    xiong: '\u5144\u51f6\u80f8\u5308\u6c79\u96c4\u718a\u828e',
    xiu: '\u4f11\u4fee\u7f9e\u673d\u55c5\u9508\u79c0\u8896\u7ee3\u83a0\u5cab\u9990\u5ea5\u9e3a\u8c85\u9af9',
    xu: '\u589f\u620c\u9700\u865a\u5618\u987b\u5f90\u8bb8\u84c4\u9157\u53d9\u65ed\u5e8f\u755c\u6064\u7d6e\u5a7f\u7eea\u7eed\u8bb4\u8be9\u5729\u84ff\u6035\u6d2b\u6e86\u987c\u6829\u7166\u7809\u76f1\u80e5\u7cc8\u9191',
    xuan: '\u8f69\u55a7\u5ba3\u60ac\u65cb\u7384\u9009\u7663\u7729\u7eda\u5107\u8c16\u8431\u63ce\u9994\u6ceb\u6d35\u6e32\u6f29\u7487\u6966\u6684\u70ab\u714a\u78b9\u94c9\u955f\u75c3',
    xue: '\u9774\u859b\u5b66\u7a74\u96ea\u8840\u5671\u6cf6\u9cd5',
    xun: '\u52cb\u718f\u5faa\u65ec\u8be2\u5bfb\u9a6f\u5de1\u6b89\u6c5b\u8bad\u8baf\u900a\u8fc5\u5dfd\u57d9\u8340\u85b0\u5ccb\u5f87\u6d54\u66db\u7aa8\u91ba\u9c9f',
    ya: '\u538b\u62bc\u9e26\u9e2d\u5440\u4e2b\u82bd\u7259\u869c\u5d16\u8859\u6daf\u96c5\u54d1\u4e9a\u8bb6\u4f22\u63e0\u5416\u5c88\u8fd3\u5a05\u740a\u6860\u6c29\u7811\u775a\u75d6',
    yan: '\u7109\u54bd\u9609\u70df\u6df9\u76d0\u4e25\u7814\u8712\u5ca9\u5ef6\u8a00\u989c\u960e\u708e\u6cbf\u5944\u63a9\u773c\u884d\u6f14\u8273\u5830\u71d5\u538c\u781a\u96c1\u5501\u5f66\u7130\u5bb4\u8c1a\u9a8c\u53a3\u9765\u8d5d\u4fe8\u5043\u5156\u8ba0\u8c33\u90fe\u9122\u82ab\u83f8\u5d26\u6079\u95eb\u960f\u6d07\u6e6e\u6edf\u598d\u5ae3\u7430\u664f\u80ed\u814c\u7131\u7f68\u7b75\u917d\u9b47\u990d\u9f39',
    yang: '\u6b83\u592e\u9e2f\u79e7\u6768\u626c\u4f6f\u75a1\u7f8a\u6d0b\u9633\u6c27\u4ef0\u75d2\u517b\u6837\u6f3e\u5f89\u600f\u6cf1\u7080\u70ca\u6059\u86d8\u9785',
    yao: '\u9080\u8170\u5996\u7476\u6447\u5c27\u9065\u7a91\u8c23\u59da\u54ac\u8200\u836f\u8981\u8000\u592d\u723b\u5406\u5d3e\u5fad\u7039\u5e7a\u73e7\u6773\u66dc\u80b4\u9e5e\u7a88\u7e47\u9cd0',
    ye: '\u6930\u564e\u8036\u7237\u91ce\u51b6\u4e5f\u9875\u6396\u4e1a\u53f6\u66f3\u814b\u591c\u6db2\u8c12\u90ba\u63f6\u9980\u6654\u70e8\u94d8',
    yi: '\u4e00\u58f9\u533b\u63d6\u94f1\u4f9d\u4f0a\u8863\u9890\u5937\u9057\u79fb\u4eea\u80f0\u7591\u6c82\u5b9c\u59e8\u5f5d\u6905\u8681\u501a\u5df2\u4e59\u77e3\u4ee5\u827a\u6291\u6613\u9091\u5c79\u4ebf\u5f79\u81c6\u9038\u8084\u75ab\u4ea6\u88d4\u610f\u6bc5\u5fc6\u4e49\u76ca\u6ea2\u8be3\u8bae\u8c0a\u8bd1\u5f02\u7ffc\u7fcc\u7ece\u5208\u5293\u4f7e\u8bd2\u572a\u572f\u57f8\u61ff\u82e1\u858f\u5f08\u5955\u6339\u5f0b\u5453\u54a6\u54bf\u566b\u5cc4\u5db7\u7317\u9974\u603f\u6021\u6092\u6f2a\u8fe4\u9a7f\u7f22\u6baa\u8d3b\u65d6\u71a0\u9487\u9552\u9571\u75cd\u7617\u7654\u7fca\u8864\u8734\u8223\u7fbf\u7ff3\u914f\u9edf',
    yin: '\u8335\u836b\u56e0\u6bb7\u97f3\u9634\u59fb\u541f\u94f6\u6deb\u5bc5\u996e\u5c39\u5f15\u9690\u5370\u80e4\u911e\u5819\u831a\u5591\u72fa\u5924\u6c24\u94df\u763e\u8693\u972a\u9f88',
    ying: '\u82f1\u6a31\u5a74\u9e70\u5e94\u7f28\u83b9\u8424\u8425\u8367\u8747\u8fce\u8d62\u76c8\u5f71\u9896\u786c\u6620\u5b34\u90e2\u8314\u83ba\u8426\u6484\u5624\u81ba\u6ee2\u6f46\u701b\u745b\u748e\u6979\u9e66\u763f\u988d\u7f42',
    yo: '\u54df\u5537',
    yong: '\u62e5\u4f63\u81c3\u75c8\u5eb8\u96cd\u8e0a\u86f9\u548f\u6cf3\u6d8c\u6c38\u607f\u52c7\u7528\u4fd1\u58c5\u5889\u6175\u9095\u955b\u752c\u9cd9\u9954',
    you: '\u5e7d\u4f18\u60a0\u5fe7\u5c24\u7531\u90ae\u94c0\u72b9\u6cb9\u6e38\u9149\u6709\u53cb\u53f3\u4f51\u91c9\u8bf1\u53c8\u5e7c\u5363\u6538\u4f91\u83b8\u5466\u56ff\u5ba5\u67da\u7337\u7256\u94d5\u75a3\u8763\u9c7f\u9edd\u9f2c',
    yu: '\u8fc2\u6de4\u4e8e\u76c2\u6986\u865e\u611a\u8206\u4f59\u4fde\u903e\u9c7c\u6109\u6e1d\u6e14\u9685\u4e88\u5a31\u96e8\u4e0e\u5c7f\u79b9\u5b87\u8bed\u7fbd\u7389\u57df\u828b\u90c1\u5401\u9047\u55bb\u5cea\u5fa1\u6108\u6b32\u72f1\u80b2\u8a89\u6d74\u5bd3\u88d5\u9884\u8c6b\u9a6d\u79ba\u6bd3\u4f1b\u4fe3\u8c00\u8c15\u8438\u84e3\u63c4\u5581\u5704\u5709\u5d5b\u72f3\u996b\u5ebe\u9608\u59aa\u59a4\u7ea1\u745c\u6631\u89ce\u8174\u6b24\u65bc\u715c\u71e0\u807f\u94b0\u9e46\u7610\u7600\u7ab3\u8753\u7afd\u8201\u96e9\u9f89',
    yuan: '\u9e33\u6e0a\u51a4\u5143\u57a3\u8881\u539f\u63f4\u8f95\u56ed\u5458\u5706\u733f\u6e90\u7f18\u8fdc\u82d1\u613f\u6028\u9662\u586c\u6c85\u5a9b\u7457\u6a7c\u7230\u7722\u9e22\u8788\u9f0b',
    yue: '\u66f0\u7ea6\u8d8a\u8dc3\u94a5\u5cb3\u7ca4\u6708\u60a6\u9605\u9fa0\u6a3e\u5216\u94ba',
    yun: '\u8018\u4e91\u90e7\u5300\u9668\u5141\u8fd0\u8574\u915d\u6655\u97f5\u5b55\u90d3\u82b8\u72c1\u607d\u7ead\u6b92\u6600\u6c32',
    za: '\u531d\u7838\u6742\u62f6\u5482',
    zai: '\u683d\u54c9\u707e\u5bb0\u8f7d\u518d\u5728\u54b1\u5d3d\u753e',
    zan: '\u6512\u6682\u8d5e\u74d2\u661d\u7c2a\u7ccc\u8db1\u933e',
    zang: '\u8d43\u810f\u846c\u5958\u6215\u81e7',
    zao: '\u906d\u7cdf\u51ff\u85fb\u67a3\u65e9\u6fa1\u86a4\u8e81\u566a\u9020\u7682\u7076\u71e5\u5523\u7f2b',
    ze: '\u8d23\u62e9\u5219\u6cfd\u4ec4\u8d5c\u5567\u8fee\u6603\u7b2e\u7ba6\u8234',
    zei: '\u8d3c',
    zen: '\u600e\u8c2e',
    zeng: '\u589e\u618e\u66fe\u8d60\u7f2f\u7511\u7f7e\u9503',
    zha: '\u624e\u55b3\u6e23\u672d\u8f67\u94e1\u95f8\u7728\u6805\u69a8\u548b\u4e4d\u70b8\u8bc8\u63f8\u5412\u54a4\u54f3\u600d\u781f\u75c4\u86b1\u9f44',
    zhai: '\u6458\u658b\u5b85\u7a84\u503a\u5be8\u7826',
    zhan: '\u77bb\u6be1\u8a79\u7c98\u6cbe\u76cf\u65a9\u8f97\u5d2d\u5c55\u8638\u6808\u5360\u6218\u7ad9\u6e5b\u7efd\u8c35\u640c\u65c3',
    zhang: '\u6a1f\u7ae0\u5f70\u6f33\u5f20\u638c\u6da8\u6756\u4e08\u5e10\u8d26\u4ed7\u80c0\u7634\u969c\u4ec9\u9123\u5e5b\u5d82\u7350\u5adc\u748b\u87d1',
    zhao: '\u62db\u662d\u627e\u6cbc\u8d75\u7167\u7f69\u5146\u8087\u53ec\u722a\u8bcf\u68f9\u948a\u7b0a',
    zhe: '\u906e\u6298\u54f2\u86f0\u8f99\u8005\u9517\u8517\u8fd9\u6d59\u8c2a\u966c\u67d8\u8f84\u78d4\u9e67\u891a\u8707\u8d6d',
    zhen: '\u73cd\u659f\u771f\u7504\u7827\u81fb\u8d1e\u9488\u4fa6\u6795\u75b9\u8bca\u9707\u632f\u9547\u9635\u7f1c\u6862\u699b\u8f78\u8d48\u80d7\u6715\u796f\u755b\u9e29',
    zheng: '\u84b8\u6323\u7741\u5f81\u72f0\u4e89\u6014\u6574\u62ef\u6b63\u653f\u5e27\u75c7\u90d1\u8bc1\u8be4\u5ce5\u94b2\u94ee\u7b5d',
    zhi: '\u829d\u679d\u652f\u5431\u8718\u77e5\u80a2\u8102\u6c41\u4e4b\u7ec7\u804c\u76f4\u690d\u6b96\u6267\u503c\u4f84\u5740\u6307\u6b62\u8dbe\u53ea\u65e8\u7eb8\u5fd7\u631a\u63b7\u81f3\u81f4\u7f6e\u5e1c\u5cd9\u5236\u667a\u79e9\u7a1a\u8d28\u7099\u75d4\u6ede\u6cbb\u7a92\u536e\u965f\u90c5\u57f4\u82b7\u646d\u5e19\u5fee\u5f58\u54ab\u9a98\u6809\u67b3\u6800\u684e\u8f75\u8f7e\u6534\u8d3d\u81a3\u7949\u7957\u9ef9\u96c9\u9e37\u75e3\u86ed\u7d77\u916f\u8dd6\u8e2c\u8e2f\u8c78\u89ef',
    zhong: '\u4e2d\u76c5\u5fe0\u949f\u8877\u7ec8\u79cd\u80bf\u91cd\u4ef2\u4f17\u51a2\u953a\u87bd\u8202\u822f\u8e35',
    zhou: '\u821f\u5468\u5dde\u6d32\u8bcc\u7ca5\u8f74\u8098\u5e1a\u5492\u76b1\u5b99\u663c\u9aa4\u5544\u7740\u501c\u8bf9\u836e\u9b3b\u7ea3\u80c4\u78a1\u7c40\u8233\u914e\u9cb7',
    zhu: '\u73e0\u682a\u86db\u6731\u732a\u8bf8\u8bdb\u9010\u7af9\u70db\u716e\u62c4\u77a9\u5631\u4e3b\u8457\u67f1\u52a9\u86c0\u8d2e\u94f8\u7b51\u4f4f\u6ce8\u795d\u9a7b\u4f2b\u4f8f\u90be\u82ce\u8331\u6d19\u6e1a\u6f74\u9a7a\u677c\u69e0\u6a65\u70b7\u94e2\u75b0\u7603\u86b0\u7afa\u7bb8\u7fe5\u8e85\u9e88',
    zhua: '\u6293',
    zhuai: '\u62fd',
    zhuan: '\u4e13\u7816\u8f6c\u64b0\u8d5a\u7bc6\u629f\u556d\u989b',
    zhuang: '\u6869\u5e84\u88c5\u5986\u649e\u58ee\u72b6\u4e2c',
    zhui: '\u690e\u9525\u8ffd\u8d58\u5760\u7f00\u8411\u9a93\u7f12',
    zhun: '\u8c06\u51c6',
    zhuo: '\u6349\u62d9\u5353\u684c\u7422\u8301\u914c\u707c\u6d4a\u502c\u8bfc\u5ef4\u855e\u64e2\u555c\u6d5e\u6dbf\u6753\u712f\u799a\u65ab',
    zi: '\u5179\u54a8\u8d44\u59ff\u6ecb\u6dc4\u5b5c\u7d2b\u4ed4\u7c7d\u6ed3\u5b50\u81ea\u6e0d\u5b57\u8c18\u5d6b\u59ca\u5b73\u7f01\u6893\u8f8e\u8d40\u6063\u7726\u9531\u79ed\u8014\u7b2b\u7ca2\u89dc\u8a3e\u9cbb\u9aed',
    zong: '\u9b03\u68d5\u8e2a\u5b97\u7efc\u603b\u7eb5\u8159\u7cbd',
    zou: '\u90b9\u8d70\u594f\u63cd\u9139\u9cb0',
    zu: '\u79df\u8db3\u5352\u65cf\u7956\u8bc5\u963b\u7ec4\u4fce\u83f9\u5550\u5f82\u9a75\u8e74',
    zuan: '\u94bb\u7e82\u6525\u7f35',
    zui: '\u5634\u9189\u6700\u7f6a',
    zun: '\u5c0a\u9075\u6499\u6a3d\u9cdf',
    zuo: '\u6628\u5de6\u4f50\u67de\u505a\u4f5c\u5750\u5ea7\u961d\u963c\u80d9\u795a\u9162',
    cou: '\u85ae\u6971\u8f8f\u8160',
    nang: '\u652e\u54dd\u56d4\u9995\u66e9',
    o: '\u5594',
    dia: '\u55f2',
    chuai: '\u562c\u81aa\u8e39',
    cen: '\u5c91\u6d94',
    diu: '\u94e5',
    nou: '\u8028',
    fou: '\u7f36',
    bia: '\u9adf',
};

/**
 * 对象转 queryString 暂时只支持两层数据，第二层对象与与数组值不能为引用类型。
 * @example
 * qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3] }); /// 'start=0&count=20&obj[a]=1&arr[]=1&arr[]=2&arr[]=3'
 * qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3] }, { arr2str: true }); /// 'start=0&count=20&obj[a]=1&arr=1,2,3'
 * qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3], str: '1' }, { hasIndex: true }); /// 'start=0&count=20&obj[a]=1&arr[0]=1&arr[1]=2&arr[2]=3&str=1'
 * @param obj 源数据
 * @returns
 * @category Request-请求相关
 */
function qsStringify(obj, options) {
    if (!obj) {
        return '';
    }
    var queryString = new URLSearchParams();
    // 不用 for...in，避免污染原对象，且数组遍历效率高。
    Object.keys(obj).forEach(function (key) {
        var val = obj[key];
        switch (getType(val)) {
            case 'object':
                Object.keys(val).forEach(function (objKey) {
                    queryString.append("".concat(key, "[").concat(objKey, "]"), getType(val[objKey]) == 'object' ? JSON.stringify(val[objKey]) : val[objKey]);
                });
                break;
            case 'array':
                if (options === null || options === void 0 ? void 0 : options.arr2str) {
                    queryString.append(key, val.join(','));
                }
                else {
                    // val.filter(Boolean)
                    val.filter(toBool).forEach(function (arrVal, arrIndex) {
                        var newArrVal = getType(arrVal) == 'object' ? JSON.stringify(arrVal) : arrVal;
                        (options === null || options === void 0 ? void 0 : options.hasBrackets)
                            ? queryString.append((options === null || options === void 0 ? void 0 : options.hasIndex) ? "".concat(key, "[").concat(arrIndex, "]") : "".concat(key, "[]"), newArrVal)
                            : queryString.append(key, newArrVal);
                    });
                }
                break;
            default:
                queryString.append(key, val);
                break;
        }
    });
    return (options === null || options === void 0 ? void 0 : options.urlEncode) ? queryString.toString() : safeDecodeURI(queryString.toString());
}
/**
 * 获取 query string 参数转对象
 * @example
 * qsParse('start=0&count=20&x=1&x=2&x=3', 'x'); /// [1, 2, 3]
 * qsParse('http://a.cn/123/test?start=0&count=20&x=1&x=2&x=3#123'); /// { start: '0', count: '20', x: [1, 2, 3], '#': 123, '_': 'test', '/': 'test?start=0&count=20&x=1&x=2&x=3#123' }
 * @param url query string
 * @param key 参数名
 * @returns
 * @category Request-请求相关
 */
function qsParse(url, key) {
    var _a, _b, _c, _d, _e;
    // 也可使用 new URL(url) 或者 new URLSearchParams(params) API 获取
    var pathname = (_a = url !== null && url !== void 0 ? url : window.location.pathname) !== null && _a !== void 0 ? _a : '';
    url = (_b = url !== null && url !== void 0 ? url : window.location.search) !== null && _b !== void 0 ? _b : '';
    var filename = pathname.substring(pathname.lastIndexOf('/') + 1);
    var paramMap = {
        '/': filename,
        _: (_d = (_c = filename === null || filename === void 0 ? void 0 : filename.split('?')) === null || _c === void 0 ? void 0 : _c[0]) !== null && _d !== void 0 ? _d : '',
    };
    var queryString = url.includes('?') ? url.split('?')[1] : url;
    var queryStringList = queryString.split('#');
    paramMap['#'] = (_e = queryStringList === null || queryStringList === void 0 ? void 0 : queryStringList[1]) !== null && _e !== void 0 ? _e : '';
    if (queryString.length !== 0) {
        var parts = queryStringList[0].split('&');
        for (var i = 0; i < parts.length; i++) {
            var component = parts[i].split('=');
            var paramKey = safeDecodeURI(component[0]);
            var paramVal = safeDecodeURI(component[1]);
            if (!paramMap[paramKey]) {
                paramMap[paramKey] = paramVal;
                continue;
            }
            !Array.isArray(paramMap[paramKey]) && (paramMap[paramKey] = Array(paramMap[paramKey]));
            paramMap[paramKey].push(paramVal);
        }
    }
    return key ? paramMap === null || paramMap === void 0 ? void 0 : paramMap[key] : paramMap;
}
/**
 * 获取不带任何参数或片段标识符的当前 URL
 * @example
 * getBaseURL('https://test.com/index?name=leo&org=biugle#test'); /// 'https://test.com/index'
 * getBaseURL(''); /// ''
 * getBaseURL(); /// 当前页面 BaseURL
 * getBaseURL('https://test.com/#/test?name=leo&org=biugle', true); /// 'https://test.com/#/test'
 * getBaseURL(null); /// 相当于 window.location.origin
 * @param url 地址/链接
 * @param hashRoute 是否为 hash 路由，默认为 false 。
 * @returns
 * @category Request-请求相关
 */
function getBaseURL(url, hashRoute) {
    if (hashRoute === void 0) { hashRoute = false; }
    if (url === null) {
        return window.location.origin;
    }
    url = url !== null && url !== void 0 ? url : window.location.href;
    if (hashRoute) {
        return url.split('?')[0];
    }
    return url.replace(/[?#].*$/, '');
}
/**
 * 获取 url 查询参数字符串
 * @example
 * getQueryString('https://test.com/index?name=leo&org=biugle#test'); /// 'name=leo&org=biugle'
 * getQueryString(''); /// ''
 * getQueryString(); /// 当前页面 QueryString 字符串部分
 * @param url 地址/链接
 * @returns
 * @category Request-请求相关
 */
function getQueryString(url) {
    var _a, _b, _c, _d, _e;
    return toBool(url) ? (_d = (_c = (_b = (_a = url === null || url === void 0 ? void 0 : url.split('?')) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b.split('#')) === null || _c === void 0 ? void 0 : _c[0]) !== null && _d !== void 0 ? _d : '' : (_e = window.location.search) === null || _e === void 0 ? void 0 : _e.replace('?', '');
}
/**
 * 改变 URL 地址而不刷新页面，并且支持保留或替换历史记录
 * @example
 * 假如当前地址为：https://test.com/user
 * changeURL('leo'); /// url 变为 'https://test.com/user/leo'
 * changeURL('./leo'); /// url 变为 'https://test.com/user/leo'
 * changeURL('/users'); /// url 变为 'https://test.com/users'
 * changeURL('https://test.com/test'); /// url 变为 'https://test.com/test' (若域名不同，会报错中断。)
 * changeURL('/users', false); /// url 变为 'https://test.com/users' (不覆盖历史记录，返回时会再显示 'https://test.com/user'，而上面的例子返回时是直接显示 'https://test.com/user' 的上一条。)
 * @param url URL 地址
 * @param replaceHistory 是否替换历史记录，默认为 true 。
 * @returns
 * @category Request-请求相关
 */
function changeURL(url, replaceHistory) {
    if (replaceHistory === void 0) { replaceHistory = true; }
    if (replaceHistory) {
        window.history.replaceState({}, '', url);
    }
    else {
        window.history.pushState({}, '', url);
    }
}
/**
 * 获取查询地址/链接中的参数对象
 * @example
 * getSearchParams('https://test.com/index?name=leo&org=biugle#test'); /// {name: 'leo', org: 'biugle'}
 * getSearchParams(''); /// {}
 * getSearchParams(); /// 当前页面 SearchParams 对象
 * @param url 地址/链接
 * @returns
 * @category Request-请求相关
 */
function getSearchParams(url) {
    var e_1, _a;
    var searchPar = new URLSearchParams(getQueryString(url));
    var paramsObj = {};
    try {
        for (var _b = __values(searchPar.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
            paramsObj[key] = value;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return paramsObj;
}
/**
 * ajax 简单封装
 * @example
 * xAjax('get', 'https://test.cn', { params: { test: 123, hello: 456 }, success: (data) => console.log('success', data), fail: (error) => console.log('fail', error) }); /// ajax
 * xAjax('POST', 'https://test.cn', { contentType: 'application/json', data: { test: 123 }, success: (data) => console.log('success', data), fail: (error) => console.log('fail', error) }); /// ajax
 * @param method Http Method
 * @param url 地址/链接
 * @param options 请求配置
 * @returns
 * @category xAjax-请求封装
 */
function xAjax(method, url, options) {
    var _a, _b, _c, _d;
    var xhr;
    method = method.toUpperCase();
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    else {
        // @ts-ignore
        // eslint-disable-next-line no-undef
        xhr = new ActiveXObject('Microsoft.XMLHttp');
    }
    // eslint-disable-next-line spellcheck/spell-checker
    xhr.onreadystatechange = function () {
        var _a, _b;
        if (xhr.readyState === 4) {
            if (xhr.status < 400) {
                (_a = options === null || options === void 0 ? void 0 : options.success) === null || _a === void 0 ? void 0 : _a.call(options, xhr.response);
            }
            else if (xhr.status >= 400) {
                (_b = options === null || options === void 0 ? void 0 : options.fail) === null || _b === void 0 ? void 0 : _b.call(options, xhr.response);
            }
        }
    };
    var async = (_a = options === null || options === void 0 ? void 0 : options.async) !== null && _a !== void 0 ? _a : true;
    // setting after open for compatibility with IE versions <=10
    xhr.withCredentials = (_b = options === null || options === void 0 ? void 0 : options.withCredentials) !== null && _b !== void 0 ? _b : false;
    if (options === null || options === void 0 ? void 0 : options.data) {
        options.data = !(options === null || options === void 0 ? void 0 : options.raw) && isObj(options.data) ? JSON.stringify(options.data) : options.data;
    }
    if (method == 'GET') {
        xhr.open('GET', !(options === null || options === void 0 ? void 0 : options.params)
            ? url
            : "".concat(url).concat(url.includes('?') ? '&' : '?').concat(new URLSearchParams(options.params).toString()), async);
        xhr.send();
    }
    else {
        xhr.open(method, url, async);
        xhr.setRequestHeader('Content-Type', (_c = options === null || options === void 0 ? void 0 : options.contentType) !== null && _c !== void 0 ? _c : 'application/x-www-form-urlencoded;charset=UTF-8');
        xhr.send((_d = options === null || options === void 0 ? void 0 : options.data) !== null && _d !== void 0 ? _d : null);
    }
    return xhr;
}
/**
 * fetch 简单封装
 * @example
 * xFetch('get', 'https://api.uomg.com/api/rand.qinghua?x=1', { params: { format: 'json', hello: 456 } }).then(data => console.log(data)); /// fetchXPromise
 * xFetch('POST', 'https://test.cn', { headers: { contentType: 'application/json' }, data: { test: 123 } }).catch(error => console.log(error)); /// fetchXPromise
 * @param method Http Method
 * @param url 地址/链接
 * @param options 请求配置
 * @returns
 * @category xFetch-封装
 */
function xFetch(method, url, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (options === null || options === void 0 ? void 0 : options.params) {
        url = "".concat(url).concat(url.includes('?') ? '&' : '?').concat(new URLSearchParams(options.params).toString());
    }
    if (options === null || options === void 0 ? void 0 : options.data) {
        options.data = !(options === null || options === void 0 ? void 0 : options.raw) && isObj(options.data) ? JSON.stringify(options.data) : options.data;
    }
    var headers = (_a = options === null || options === void 0 ? void 0 : options.headers) !== null && _a !== void 0 ? _a : {};
    var contentType = (_h = (_g = (_f = (_e = (_d = (_c = (_b = headers.contenttype) !== null && _b !== void 0 ? _b : headers.contentType) !== null && _c !== void 0 ? _c : headers.ContentType) !== null && _d !== void 0 ? _d : headers.Contenttype) !== null && _e !== void 0 ? _e : headers['content-type']) !== null && _f !== void 0 ? _f : headers['content-Type']) !== null && _g !== void 0 ? _g : headers === null || headers === void 0 ? void 0 : headers['Content-Type']) !== null && _h !== void 0 ? _h : headers === null || headers === void 0 ? void 0 : headers['Content-type'];
    return fetch(url, {
        // 文件请求相关处理时需注意别写 content-type
        headers: __assign(__assign({}, headers), (!contentType || (options === null || options === void 0 ? void 0 : options.isFile)
            ? {}
            : {
                'content-type': contentType !== null && contentType !== void 0 ? contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
                // ?? 'application/json;charset=UTF-8',
            })),
        method: method,
        body: options === null || options === void 0 ? void 0 : options.data,
    })
        .then(function (res) {
        var type = res.headers.get('content-type');
        if (type === null || type === void 0 ? void 0 : type.includes('json')) {
            return res.json();
        }
        else if (type === null || type === void 0 ? void 0 : type.includes('text')) {
            return res.text();
        }
        else if (type === null || type === void 0 ? void 0 : type.includes('form')) {
            return res.formData();
        }
        else if ((type === null || type === void 0 ? void 0 : type.includes('video')) || (type === null || type === void 0 ? void 0 : type.includes('image'))) {
            return res.blob();
        }
        else if (type === null || type === void 0 ? void 0 : type.includes('arrayBuffer')) {
            return res.arrayBuffer();
        }
        else {
            try {
                if (options === null || options === void 0 ? void 0 : options.callback) {
                    return options === null || options === void 0 ? void 0 : options.callback(res);
                }
                return res;
            }
            catch (e) {
                return res;
            }
        }
    })
        .catch(function (error) {
        return Promise.reject(error);
    });
}
// eslint-disable-next-line spellcheck/spell-checker
/**
 * 获取常见的 content-type
 * @example
 * getContentType('form'); /// 'application/x-www-form-urlencoded'
 * getContentType('file'); /// 'multipart/form-data'
 * getContentType('pdf'); /// 'application/pdf'
 * getContentType('PDF'); /// 'application/pdf'
 * getContentType('unknown'); /// 'application/octet-stream'
 * @param fileType 文件类型
 * @returns
 * @category Request-请求相关
 */
function getContentType(fileType) {
    var _a;
    return (_a = CONTENT_TYPES[fileType.toLowerCase()]) !== null && _a !== void 0 ? _a : 'application/octet-stream';
}
/**
 * 安全编码 URI，遇到错误时返回原始字符串。
 * @example
 * safeEncodeURI('Hello World'); // 'Hello%20World'
 * safeEncodeURI('你好'); // '%E4%BD%A0%E5%A5%BD'
 * safeEncodeURI('https://example.com?param=1&param=2'); // 'https%3A%2F%2Fexample.com%3Fparam%3D1%26param%3D2'
 * safeEncodeURI('特殊字符 !@#'); // '%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%20%21%40%23'
 * @param s 要编码的字符串。
 * @returns
 * @category Custom-转码
 */
function safeEncodeURI(s) {
    try {
        return encodeURIComponent(s);
    }
    catch (e) {
        console.warn("Failed to encode URI component: ".concat(s), e);
        return s;
    }
}
/**
 * 安全解码 URI，遇到错误时返回原始字符串。
 * @example
 * safeDecodeURI('Hello%20World'); // 'Hello World'
 * safeDecodeURI('%E4%BD%A0%E5%A5%BD'); // '你好'
 * safeDecodeURI('%E4%BD%A0%E5%A5'); // '%E4%BD%A0%E5%A5' （无效的 URI 片段）
 * safeDecodeURI('%'); // '%' （无效的 URI 片段）
 * @param s 要解码的 URI 。
 * @returns
 * @category Custom-转码
 */
function safeDecodeURI(s) {
    try {
        return decodeURIComponent(s);
    }
    catch (e) {
        console.warn("Failed to decode URI component: ".concat(s), e);
        return s;
    }
}

/**
 * 获取 16 位可读时间戳
 * @example
 * getTimeCode(); /// '2036551026042022'
 * @returns
 * @category Tools-工具方法
 */
function getTimeCode() {
    var dateObj = new Date();
    return "".concat((Math.random() * 100).toFixed().padEnd(2, '0')).concat(dateObj.getSeconds().toString().padStart(2, '0')).concat(dateObj
        .getMinutes()
        .toString()
        .padStart(2, '0')).concat(dateObj.getHours().toString().padStart(2, '0')).concat(dateObj
        .getDate()
        .toString()
        .padStart(2, '0')).concat(String(dateObj.getMonth() + 1).padStart(2, '0')).concat(dateObj.getFullYear());
}
/**
 * 判断值是否为空
 * @example
 * empty(''); /// true
 * empty(null); /// true
 * empty('null'); /// true
 * empty('undefined'); /// true
 * empty(undefined); /// true
 * empty(0); /// false
 * empty('0'); /// false
 * empty(NaN); /// true
 * empty('NaN'); /// true
 * empty({}); /// true
 * empty([]); /// true
 * @param variable 变量
 * @returns
 * @category Tools-工具方法
 */
function empty(variable) {
    if (typeof variable === 'boolean') {
        // 此处函数定义布尔型不算空
        return false;
    }
    if (variable === 'null') {
        // 检验字符串类型的 null
        return true;
    }
    if (variable === 'undefined') {
        // 检验字符串类型的 undefined
        return true;
    }
    if (variable === 'NaN') {
        // 检验字符串类型的 NaN
        return true;
    }
    if (!variable && variable !== 0 && variable !== '0') {
        // 检验 undefined 和 null "" NaN
        return true;
    }
    if (Array.isArray(variable) && variable.length === 0) {
        // 检验空数组
        return true;
    }
    if (Object.prototype.toString.call(variable) === '[object Object]' && Object.keys(variable).length === 0) {
        // 检验空对象，仅判断普通对象，不考虑字符串对象、时间、等等。
        return true;
    }
    return false;
}
/**
 * 获取对象/数组第一个值
 * @example
 * getFirstVar([1, 2]); /// 1
 * getFirstVar({a: 2,b: 1}); /// 2
 * @param data 源数据
 * @returns
 * @category Tools-工具方法
 */
function getFirstVar(data) {
    if (getType(data) !== 'object' && !Array.isArray(data)) {
        return data;
    }
    for (var key in data) {
        var result = data[key];
        return result;
    }
}
/**
 * 获取对象/数组最后一个值(对象为 Object.keys 的顺序)
 * @example
 * getLastVar([1, 2]); /// 2
 * getLastVar({a: 2, b: 1}); /// b
 * @param data 源数据
 * @returns
 * @category Tools-工具方法
 */
function getLastVar(data) {
    var isObj = getType(data) == 'object';
    if (!isObj && !Array.isArray(data)) {
        return data;
    }
    if (isObj) {
        var newArr = Object.keys(data);
        return newArr.length ? data[newArr[newArr.length - 1]] : undefined;
    }
    return data.length ? data[data.length - 1] : undefined;
}
/**
 * 获取数组或对象随机数据
 * @example
 * getRandVar({ a: 1, b: 3 }); /// 1
 * getRandVar([1, 2, 3, 4], 2); /// [2, 4]
 * @param value 值
 * @param count 获取数据量
 * @returns
 * @category Tools-工具方法
 */
function getRandVar(value, count) {
    if (count === void 0) { count = 1; }
    var sample = Array.isArray(value) ? JSON.parse(JSON.stringify(value)) : Object.values(value);
    var len = sample.length;
    count = Math.max(Math.min(count, len), 0);
    var last = len - 1;
    var result = [];
    for (var i = 0; i < count; i++) {
        var rand = getRandNum(i, last);
        result.push(sample[rand]);
    }
    return result.length == 1 ? result[0] : result;
}
/**
 * 防抖函数-最后一次有效（抢购）
 * @example
 * debounce(() => {}, 1000); /// 防抖执行
 * @param fn 执行的函数
 * @param delay 延迟时间
 * @returns
 * @category Tools-工具方法
 */
function debounce(fn, delay) {
    if (delay === void 0) { delay = 1000; }
    var timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            // @ts-ignore
            // eslint-disable-next-line prefer-rest-params
            fn.apply(this, arguments);
        }, delay);
    };
}
/**
 * 节流函数-第一次有效（游戏开枪间隔）
 * @example
 * throttle(() => {}, 1000); /// 节流执行
 * @param fn 执行的函数
 * @param delay 延迟时间
 * @returns
 * @category Tools-工具方法
 */
function throttle(fn, delay) {
    if (delay === void 0) { delay = 2000; }
    var canRun = true;
    return function () {
        if (!canRun)
            return;
        canRun = false;
        // @ts-ignore
        // eslint-disable-next-line prefer-rest-params
        fn.apply(this, arguments);
        setTimeout(function () {
            canRun = true;
        }, delay);
    };
}
/**
 * 全局尽可能捕获异常
 * @example
 * globalError((error) => console.log('全局捕获异常'), false); /// '全局捕获异常'
 * @param fn (error)
 * @param notShowConsole 是否不回显控制台
 * @returns
 * @category Tools-工具方法
 */
function globalError(fn, notShowConsole) {
    if (notShowConsole === void 0) { notShowConsole = true; }
    // 监听全局错误
    window.onerror = function (message, source, lineNo, colNo, error) {
        if (!notShowConsole) {
            console.error('js-xxx:globalError--->', { message: message, source: source, lineNo: lineNo, colNo: colNo, error: error });
        }
        fn.call(this, { type: 'globalError', error: error, message: message, source: source, lineNo: lineNo, colNo: colNo });
        return notShowConsole; // 返回 true，则不在控制台报错
    };
    // 监听 Promise 的未处理错误
    // eslint-disable-next-line spellcheck/spell-checker
    window.addEventListener('unhandledrejection', function (event) {
        if (!notShowConsole) {
            console.error('js-xxx:globalError---> Unhandled Promise Rejection:', event.reason);
        }
        fn.call(this, { type: 'Unhandled Promise Rejection', error: event.reason, event: event });
        event.preventDefault();
    });
    // 捕获其他错误
    window.addEventListener('error', function (event) {
        if (!notShowConsole) {
            console.error('js-xxx:globalError--->', event.error);
        }
        fn.call(this, { type: 'Error', error: event.error, event: event });
        event.preventDefault();
    });
    // 捕获未处理的全局错误
    window.addEventListener('DOMContentLoaded', function () {
        // 捕获全局脚本错误
        var originalCreateElement = document.createElement;
        document.createElement = function (tagName) {
            var element = originalCreateElement.call(document, tagName);
            if (tagName.toLowerCase() === 'script') {
                element.addEventListener('error', function (event) {
                    if (!notShowConsole) {
                        console.error('js-xxx:globalError---> Script Error:', element.src || element.textContent);
                    }
                    // @ts-ignore
                    fn.call(this, { type: 'Script Error', error: element.src || element.textContent, event: event });
                    event.preventDefault();
                });
            }
            return element;
        };
        // 捕获全局资源加载错误（例如，<img>，<link>，<audio>，<video> 等）
        var originalImageConstructor = window.Image;
        window.Image = function () {
            var image = new originalImageConstructor();
            image.addEventListener('error', function (event) {
                if (!notShowConsole) {
                    console.error('js-xxx:globalError---> Image Error:', image.src);
                }
                fn.call(this, { type: 'Image Error', error: image.src, event: event });
                event.preventDefault();
            });
            return image;
        };
    });
}
/**
 * 监听资源找不到的情况，刷新页面。
 * @example
 * observeResource(() => console.log('Refreshing')); /// 找不到资源时输出 "Refreshing"
 * observeResource(); /// 找不到资源时刷新页面
 * @param callback
 * @returns
 * @category Tools-工具方法
 */
function observeResource(callback) {
    var PERFORMANCE_SUPPORTED = window.performance && typeof window.performance.getEntries === 'function';
    var RESOURCE_TYPE = 'resource';
    var JS_EXTENSION = 'js';
    if (!PERFORMANCE_SUPPORTED) {
        console.error('Performance API is not supported on this platform.');
        return;
    }
    var observerCallback = function (list) {
        var e_1, _a;
        try {
            for (var _b = __values(list.getEntries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                if (entry.entryType === RESOURCE_TYPE && entry.responseStatus === 404 && entry.name.includes(JS_EXTENSION)) {
                    console.log("Resource ".concat(entry.name, " is outdated. Refreshing the page..."));
                    if (callback) {
                        callback();
                    }
                    else {
                        window.location.reload();
                    }
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    var observePerformance = function () {
        var PerformanceObserver = getPerformanceObserverConstructor();
        if (!PerformanceObserver) {
            console.error('PerformanceObserver is not supported on this platform.');
            return;
        }
        var observer = new PerformanceObserver(observerCallback);
        var entryTypes = getEntryTypes();
        observer.observe({ entryTypes: entryTypes });
        // observer.observe({ type: 'resource', buffered: true });
    };
    var getPerformanceObserverConstructor = function () {
        return window.PerformanceObserver ||
            // @ts-ignore
            window.WebKitPerformanceObserver ||
            // @ts-ignore
            window.MozPerformanceObserver ||
            // @ts-ignore
            window.msPerformanceObserver;
    };
    var getEntryTypes = function () {
        return ['navigation', 'resource', 'network', 'error', 'event'].filter(function (type) {
            return PerformanceObserver.supportedEntryTypes.includes(type);
        });
    };
    observePerformance();
}
/**
 * 刷新页面或执行回调函数，用于检测服务端是否发布了更新
 * @example
 * checkUpdate((type) => console.log({ type })); /// 检测服务端是否发布了更新，若更新或请求失败则执行回调。
 * checkUpdate(); /// 检测服务端是否发布了更新，若更新或请求失败则刷新页面。
 * checkUpdate((type) => window.location.reload(), 5 * 60 * 1000, '/index.js'); /// 检测服务端某个文件是否发布了更新，若更新或请求失败则刷新页面。
 * @param callback 文件更新时要执行的回调函数
 * @param interval 请求文件的时间间隔（毫秒），默认为 15 分钟，最小值 1 分钟。
 * @param url 要检测的文件路径（默认为页面最后一个 JavaScript/CSS 文件）
 * @returns
 * @category Tools-工具方法
 */
function checkUpdate(callback, interval, url) {
    if (interval === void 0) { interval = 15 * 60 * 1000; }
    var filePath = url;
    var lastModified = null;
    var timerId = null;
    interval = Math.max(1 * 60 * 1000, interval !== null && interval !== void 0 ? interval : 0);
    if (!filePath) {
        var scripts = document.getElementsByTagName('script');
        var lastScript = scripts[scripts.length - 1];
        if (lastScript === null || lastScript === void 0 ? void 0 : lastScript.src) {
            filePath = lastScript.src;
        }
        else {
            var links = document.getElementsByTagName('link');
            var lastLink = links[links.length - 1];
            filePath = lastLink.href;
        }
    }
    if (!filePath) {
        console.error('Failed to get file path.');
        return;
    }
    function requestFile() {
        var xhr = new XMLHttpRequest();
        xhr.open('HEAD', filePath + '?_=' + Date.now(), true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                var currentModified = xhr.getResponseHeader('Last-Modified');
                if (lastModified && currentModified !== lastModified) {
                    handleUpdate();
                }
                lastModified = currentModified;
            }
            else {
                handleFailure();
            }
        };
        xhr.onerror = handleFailure;
        xhr.send();
    }
    function handleUpdate() {
        if (typeof callback === 'function') {
            callback('UPDATE');
        }
        else {
            console.log('Server has been updated. Refreshing the page...');
            window.location.reload();
        }
    }
    function handleFailure() {
        if (typeof callback === 'function') {
            callback('FAIL');
        }
        else {
            console.log("Failed to load file: ".concat(filePath, ". Refreshing the page..."));
            window.location.reload();
        }
    }
    function startTimer() {
        timerId = setInterval(requestFile, interval);
    }
    function stopTimer() {
        clearInterval(timerId);
    }
    startTimer();
    return stopTimer; // 返回取消定时器的函数
}
/**
 * 获取随机数字
 * @example
 * getRandNum(1, 10); /// 1~10 之间的随机数，闭区间。
 * @param min 最小值
 * @param max 最大值
 * @returns
 * @category Tools-工具方法
 */
function getRandNum(min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 10; }
    return Math.floor(min + Math.random() * (max - min + 1));
}
/**
 * 获取随机颜色
 * @example
 * getRandColor(); /// '#xxxxxx'
 * @returns
 * @category Tools-工具方法
 */
function getRandColor() {
    return '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6);
}
// eslint-disable-next-line spellcheck/spell-checker
/**
 * 获取 bootstrap 颜色
 * @example
 * getBSColor(); /// '#6c757d'
 * getBSColor('red'); /// '#dc3545'
 * getBSColor('warning'); /// '#ffc107'
 * @param key color name
 * @returns
 * @category Tools-工具方法
 */
function getBSColor(key) {
    if (key === void 0) { key = 'default'; }
    key = "".concat(key).toLowerCase();
    var keyList = [
        'dark',
        'black',
        'light',
        'white',
        'info',
        'cyan',
        'success',
        'green',
        'warning',
        'yellow',
        'danger',
        'red',
        'primary',
        'blue',
        'secondary',
        'default',
        'grey',
    ];
    key = keyList.includes(key) ? key : 'others';
    // @ts-ignore
    return BS_COLORS[key];
}
/**
 * 获取任意变量长度
 * @example
 * getVarSize([]); /// 0
 * getVarSize({a: 1, b: 2}); /// 2
 * getVarSize(null); /// 0
 * @param value 值
 * @returns
 * @category Tools-工具方法
 */
function getVarSize(value) {
    if (getType(value) === 'object') {
        return Object.keys(value).length;
    }
    try {
        return value.length ? value.length : 0;
    }
    catch (e) {
        return 0;
    }
}
/**
 * 在浏览器中打开文件选择框
 * @example
 * openFileSelect({ multiple: true }).then(fileList => console.log(fileList));
 * openFileSelect({ multiple: true, accept: 'image/*', resultType: 'blob' }).then(fileBlobList => console.log(fileBlobList));
 * openFileSelect({ multiple: true, accept: '.txt', resultType: 'base64' }).then(fileDataUrlList => console.log(fileDataUrlList));
 * @param options 打开配置
 * @returns
 * @category Tools-下载/文件相关
 */
function openFileSelect(options) {
    var _this = this;
    return new Promise(function (resolve, reject) {
        var $input = document.createElement('input');
        $input.style.position = 'fixed';
        $input.style.bottom = '0';
        $input.style.left = '0';
        $input.style.visibility = 'hidden';
        $input.setAttribute('type', 'file');
        if (options === null || options === void 0 ? void 0 : options.accept) {
            // accept = '*/*' 'image/*' 'audio/*' 'video/*' '.txt,.png,.pdf' 'image/png,.jpg'
            $input.setAttribute('accept', options.accept);
        }
        if (options === null || options === void 0 ? void 0 : options.multiple) {
            $input.setAttribute('multiple', 'true');
        }
        document.body.appendChild($input);
        // 判断用户是否点击取消，原生没有提供专门事件，用 hack 的方法实现。
        $input.addEventListener('click', function () {
            $input.value = '';
            document.body.addEventListener('focus', function () {
                setTimeout(function () {
                    if (!$input.value) {
                        resolve(null);
                    }
                }, 500);
            });
        });
        $input.addEventListener('change', function (e) { return __awaiter(_this, void 0, void 0, function () {
            var files, results, err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        document.body.removeChild($input);
                        if (!(options === null || options === void 0 ? void 0 : options.resultType)) {
                            resolve($input.files);
                            return [2 /*return*/];
                        }
                        files = (e.target.files || []);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Promise.all(__spreadArray([], __read(files), false).map(function (file) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, new Promise(function (resolve, reject) {
                                            var reader = new FileReader();
                                            reader.onloadend = function () {
                                                var _a, _b, _c;
                                                resolve({
                                                    filename: file.name,
                                                    ext: (_a = file.name.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase(),
                                                    type: file.type,
                                                    result: this.result && options.resultType === 'blob'
                                                        ? new Blob([new Uint8Array(this.result)], {
                                                            type: file.type,
                                                        })
                                                        : this.result,
                                                    length: options.resultType === 'blob'
                                                        ? (_b = this.result) === null || _b === void 0 ? void 0 : _b.byteLength
                                                        : (_c = this.result) === null || _c === void 0 ? void 0 : _c.length,
                                                });
                                            };
                                            reader.onerror = function (err) {
                                                reject(err);
                                            };
                                            switch (options.resultType) {
                                                case 'blob': {
                                                    reader.readAsArrayBuffer(file);
                                                    break;
                                                }
                                                case 'base64': {
                                                    reader.readAsDataURL(file);
                                                    break;
                                                }
                                                default: {
                                                    reader.readAsArrayBuffer(file);
                                                }
                                            }
                                        })];
                                });
                            }); }))];
                    case 2:
                        results = _a.sent();
                        resolve(results);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        reject(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        $input.click();
    });
}
/**
 * 将 Blob 对象保存为文件并下载。
 * @example
 * const blob = new Blob(['Hello, World!'], { type: 'text/plain' });
 * saveAs(blob, 'hello.txt'); // 下载文件名为 'hello.txt'
 * const jsonBlob = new Blob([JSON.stringify({ a: 1, b: 2 }, null, 2)], { type: 'application/json' });
 * saveAs(jsonBlob, 'data.json'); // 下载文件名为 'data.json'
 * @param blob 要保存的 Blob 对象。
 * @param filename 可选。保存的文件名。
 * @returns
 * @category Tools-下载/文件相关
 */
function saveAs(blob, filename) {
    var url = window.URL || window.webkitURL;
    var link = document.createElement('a');
    link.download = filename || '';
    link.href = url.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    url.revokeObjectURL(link.href);
}
/**
 * 根据 Blob 下载图片。
 * @example
 * // 下载远程图片，并保存为 'image.jpg'
 * downloadImgByBlob('https://example.com/path/to/image.jpg', 'image.jpg');
 * // 下载远程图片，并保存为默认文件名（通常是图片的原始文件名）
 * downloadImgByBlob('https://example.com/path/to/image.jpg');
 * // 尝试下载一个无效的 URL，不会进行下载操作
 * downloadImgByBlob('invalid-url');
 * // 下载一张跨域图片（需要支持跨域下载）
 * downloadImgByBlob('https://a.example.com/path/to/cross-origin-image.jpg', 'cross-origin-image.jpg');
 * @param url 图片的 URL 地址。
 * @param fileName 可选。下载的文件名。
 * @returns
 * @category Tools-下载/文件相关
 */
function downloadImg(url, fileName) {
    if (!url || !url.startsWith('http')) {
        console.warn('Invalid URL provided:', url);
        return;
    }
    var img = new Image();
    img.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(function (blob) {
            if (blob) {
                var blobUrl = window.URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.href = blobUrl;
                a.download = fileName || 'download';
                a.click();
                window.URL.revokeObjectURL(blobUrl);
            }
            else {
                console.warn('Failed to create Blob from canvas');
            }
        }, 'image/png'); // 默认保存为 PNG 格式
    };
    img.onerror = function () {
        console.error('Failed to load image from URL:', url);
    };
    img.setAttribute('crossOrigin', 'Anonymous');
    img.src = url;
}
/**
 * 下载文件
 * @example
 * // 下载并保存为 'xxx'
 * downloadFile('https://example.com/path/to/file.jpg', 'xxx'); // 将文件保存为 'xxx.jpg'
 * // 下载并保存为链接中的文件名
 * downloadFile('https://example.com/path/to/file.jpg'); // 将文件保存为 'file.jpg'
 * // 下载并保存为指定的文件名（没有扩展名）
 * downloadFile('https://example.com/path/to/file.jpg', 'customFileName'); // 将文件保存为 'customFileName.jpg'
 * // 下载并保存为带有扩展名的自定义文件名
 * downloadFile('https://example.com/path/to/file.jpg', 'customFileName.png'); // 将文件保存为 'customFileName.png'
 * @param url 文件的 URL 地址。
 * @param fileName 可选。下载的文件名，默认为 URL 中的文件名。
 * @returns
 * @category Tools-下载/文件相关
 */
function downloadFile(url, fileName) {
    var _a, _b, _c;
    var ext = ((_a = fileName === null || fileName === void 0 ? void 0 : fileName.match(/[^\/]*\.(\w+)(?:\?.*)?$/)) === null || _a === void 0 ? void 0 : _a[1]) || ((_b = url.match(/[^\/]*\.(\w+)(?:\?.*)?$/)) === null || _b === void 0 ? void 0 : _b[1]) || 'txt';
    var finalFileName = safeDecodeURI(fileName || ((_c = url.match(/([^/]*?)\.\w+(\?.*?)?$/)) === null || _c === void 0 ? void 0 : _c[1]) || String(Date.now()));
    var oReq = new XMLHttpRequest();
    oReq.open('GET', url, true);
    oReq.responseType = 'blob';
    oReq.onload = function () {
        var type = getContentType(ext) || 'application/octet-stream';
        var file = new Blob([oReq.response], { type: type });
        saveAs(file, /\.\w+$/.test(finalFileName) ? finalFileName : "".concat(finalFileName, ".").concat(ext));
    };
    oReq.send();
}
/**
 * 根据 URL 获取文件名。
 * @example
 * // 获取一个简单 URL 的文件名
 * getFileNameFromUrl('https://example.com/path/to/file.jpg'); // 'file.jpg'
 * // 获取带有查询参数的 URL 的文件名
 * getFileNameFromUrl('https://example.com/path/to/file.jpg?version=1.2'); // 'file.jpg'
 * // 获取没有文件扩展名的 URL 的文件名
 * getFileNameFromUrl('https://example.com/path/to/file'); // 'file.txt'
 * // 获取根路径 URL 的文件名
 * getFileNameFromUrl('https://example.com/'); // '1691830390281.txt' (假设当前时间为 1691830390281)
 * // 获取一个复杂编码的 URL 的文件名
 * getFileNameFromUrl('https://example.com/path/to/%E4%BD%A0%E5%A5%BD.jpg'); // '你好.jpg'
 * // 获取包含多个查询参数的 URL 的文件名
 * getFileNameFromUrl('https://example.com/path/to/file.jpg?param1=value1&param2=value2'); // 'file.jpg'
 * // 仅获取文件扩展名
 * getFileNameFromUrl('https://example.com/path/to/file.jpg', true); // 'jpg'
 * @param url 要获取文件名的 URL 。
 * @param onlyExt 可选。如果为 true，则仅返回文件扩展名。
 * @returns
 * @category Tools-下载/文件相关
 */
function getFileNameFromUrl(url, onlyExt) {
    var _a, _b;
    if (onlyExt === void 0) { onlyExt = false; }
    var ext = ((_a = url.match(/[^\/]*\.(\w+)(?:\?.*)?$/)) === null || _a === void 0 ? void 0 : _a[1]) || 'txt';
    if (onlyExt) {
        return ext;
    }
    var filenameOfUrl = (_b = url.match(/([^/]*?)\.\w+(\?.*?)?$/)) === null || _b === void 0 ? void 0 : _b[1];
    var filename = filenameOfUrl ? safeDecodeURI(filenameOfUrl) : String(Date.now());
    return "".concat(filename, ".").concat(ext);
}
/**
 * 新开页面预览文件。
 * @example
 * // 预览 Word 文档
 * openPreviewFile('https://example.com/path/to/document.docx');
 * // 预览 Excel 表格
 * openPreviewFile('https://example.com/path/to/spreadsheet.xlsx');
 * // 预览 PDF 文件
 * openPreviewFile('https://example.com/path/to/document.pdf');
 * // 预览图片
 * openPreviewFile('https://example.com/path/to/image.png');
 * // 预览其他文件或未匹配的文件类型
 * openPreviewFile('https://example.com/path/to/otherfile.zip'); // 将直接打开链接
 * @param url 要预览的 URL 地址。
 * @returns
 * @category Tools-下载/文件相关
 */
function openPreviewFile(url, serviceUrl) {
    var urlMap = new Map()
        .set(/\.(docx|doc|xls|xlsx)(\?.*)?$/, function (url) {
        return window.open("".concat(serviceUrl, "?url=") + encodeURIComponent(window.btoa(url)));
    })
        .set(/\.pdf(\?.*)?$/, function (url) {
        return window
            .open('')
            .document.write("<!DOCTYPE html><html><head><style>body{margin:0;}embed{height:100vh;}</style></head><body><embed src=\"".concat(url, "\" width=\"100%\" height=\"100%\"/></body></html>"));
    })
        .set(/\.(png|jpg|jpeg|gif)(\?.*)?$/, function (url) {
        return window
            .open('')
            .document.write("<!DOCTYPE html><html><head><style>body{margin:0;}img{width:unset;height:unset;max-width:100%;}</style></head><body><img src=\"".concat(url, "\" /></body></html>"));
    });
    var regex = __spreadArray([], __read(urlMap.keys()), false).find(function (regex) { return regex.test(url); });
    var previewFunction = regex ? urlMap.get(regex) : undefined;
    if (previewFunction) {
        previewFunction(url);
    }
    else {
        window.open(url);
    }
}
/**
 * 获取数组或对象交集
 * @example
 * intersection([1, 2, 2, 3, 3], [1, 2, 4, 5]); /// [1, 2]
 * intersection({a: 1, b: 2}, {a: 1, c: 3, b: 4}); /// {a: 1}
 * @param paramA 值 A
 * @param paramB 值 B
 * @returns
 * @category Tools-工具方法
 */
function intersection(paramA, paramB) {
    var paramAType = getType(paramA);
    if (paramAType != getType(paramB))
        return false;
    if (paramAType != 'object' && paramAType != 'array')
        return false;
    var isObj = paramAType == 'object';
    var result = isObj ? {} : [];
    if (isObj) {
        for (var key in paramA) {
            if (paramB[key] && paramA[key] == paramB[key]) {
                result[key] = paramA[key];
            }
        }
    }
    else {
        for (var key in paramA) {
            if (paramB.includes(paramA[key])) {
                result.push(paramA[key]);
            }
        }
        result = unique(result);
    }
    return jsonClone(result);
}
/**
 * 获取数组或对象并集
 * @example
 * union([1, 2, 2, 3, 3], [1, 2, 4, 5]); /// [1, 2, 3, 4, 5]
 * union({a: 1, b: 2}, {a: 1, c: 3, b: 4}); /// {a: 1, c: 3, b: 2}
 * @param paramA 值 A，若冲突以此值为准。
 * @param paramB 值 B
 * @returns
 * @category Tools-工具方法
 */
function union(paramA, paramB) {
    var paramAType = getType(paramA);
    if (paramAType != getType(paramB))
        return false;
    if (paramAType != 'object' && paramAType != 'array')
        return false;
    if (paramAType == 'object') {
        return jsonClone(__assign(__assign({}, paramB), paramA));
    }
    else {
        return jsonClone(unique(__spreadArray(__spreadArray([], __read(paramA), false), __read(paramB), false)));
    }
}
/**
 * 获取数组或对象不同值集合
 * @example
 * difference([1, 2, 2, 3, 3], [1, 2, 4, 5]); /// [3]
 * difference({a: 1, b: 2}, {a: 1, c: 3, b: 4}); /// {b: 2}
 * @param paramA 值 A，若冲突以此值为准。
 * @param paramB 值 B
 * @returns
 * @category Tools-工具方法
 */
function difference(paramA, paramB) {
    var paramAType = getType(paramA);
    if (paramAType != getType(paramB))
        return false;
    if (paramAType != 'object' && paramAType != 'array')
        return false;
    var isObj = paramAType == 'object';
    var result = isObj ? {} : [];
    if (isObj) {
        for (var key in paramA) {
            if (paramB[key] != paramA[key]) {
                // 以前一个为准
                result[key] = paramA[key];
            }
        }
    }
    else {
        result = paramA.filter(function (item) { return !paramB.includes(item); });
        result = unique(result);
    }
    return jsonClone(result);
}
/**
 * JSON 转字符串式克隆
 * @example
 * jsonClone([1, 2, 2, 3, 3]); /// [1, 2, 2, 3, 3]
 * jsonClone({a: 1, b: 2}); /// {a: 1, b: 2}
 * @param value 值
 * @returns
 * @category JSON-相关
 */
function jsonClone(value) {
    try {
        return JSON.parse(JSON.stringify(value));
    }
    catch (e) {
        return value;
    }
}
/**
 * 打印某个函数运行时间
 * @example
 * logRunTime(() => [1, 2, 3].reduce(...));
 * logRunTime(() => [1, 2, 3].reduce(...), 'timeKey');
 * logRunTime(async () => { await fun1(); await fun2(); });
 * logRunTime($promiseReturnFunction);
 * logRunTime(new Promise((resolve, reject) => { setTimeout(() => resolve('test'), 1000) }));
 * @param fn 方法函数
 * @param timeKey 打印时间记录关键 key
 * @returns
 * @category Extra-日志/调试
 */
function logRunTime(fn, timeKey) {
    timeKey = timeKey !== null && timeKey !== void 0 ? timeKey : getKey(5, 'log-run-time');
    var type = getType(fn);
    if (type == 'asyncfunction' || isPromise(fn) || isPromise(fn === null || fn === void 0 ? void 0 : fn())) {
        if (type == 'promise') {
            console.time(timeKey);
            fn.then(function () { return console.timeEnd(timeKey); }).catch(function (e) {
                console.log({ e: e });
                console.timeEnd(timeKey);
            });
        }
        else {
            console.time(timeKey);
            fn()
                .then(function () { return console.timeEnd(timeKey); })
                .catch(function (e) {
                console.log({ e: e });
                console.timeEnd(timeKey);
            });
        }
    }
    else {
        console.time(timeKey);
        fn === null || fn === void 0 ? void 0 : fn();
        console.timeEnd(timeKey);
    }
}
/**
 * 在页面上显示某个值
 * @example
 * showVar([1, 2, 2, 3, 3]); /// 显示序列化之后的数据
 * showVar({a: 1, b: 2}); /// 显示序列化之后的数据
 * @param value 值
 * @returns
 * @category Extra-日志/调试
 */
function showVar(value) {
    var _a;
    try {
        alert((_a = JSON.stringify(value, null, 2)) !== null && _a !== void 0 ? _a : 'undefined');
    }
    catch (e) {
        console.log('js-xxx:showVarError--->', value);
    }
}
/**
 * 检测某个数组是否包含某个值
 * @example
 * contains([1, 2, 2, 3, 3], 3); /// true
 * contains([1, 2, 2, 3, 3], '3'); /// false
 * contains(['test1', 'test2'],'test'); /// false
 * contains([{a: 1, b: 2}, {a: 2, b: 3}], {a: 2, b: 3}); /// true
 * contains([{a: 1, b: 2}, {a: 2, b: 3}], {b: 3, a: 2}); /// true
 * contains([[1, 2], [3, 4]], [4, 3]); /// true
 * contains([[1, 2], [3, 4]], [3, 4]); /// true
 * contains([[1, 2], [3, 4]], [1, 3]); /// false
 * @param value 值
 * @param target 目标值
 * @returns
 * @category Tools-工具方法
 */
function contains(value, target) {
    try {
        var _isComplex = isArr(target) || isObj(target);
        if (_isComplex) {
            var temp = value.map(function (item) { return JSON.stringify(getSortVar(item)); });
            return temp.includes(JSON.stringify(getSortVar(target)));
        }
        else {
            var temp = value.map(function (item) { return JSON.stringify(item); });
            return temp.includes(JSON.stringify(target));
        }
    }
    catch (e) {
        return false;
    }
}
/**
 * 两个数值是否有相同的值（交集）
 * @example
 * same(['admin','manager','user','viewer','guest'], ['admin','user']); /// true
 * same(['admin','manager','user','viewer','guest'], 'admin'); /// true
 * same('admin', ['admin','user']); /// true
 * same('admin', 'admin'); /// true
 * same('admin', 'admins'); /// false
 * same('admins', 'admin'); /// false
 * @param valueA 值 A
 * @param valueB 值 B
 * @returns
 * @category Tools-工具方法
 */
function same(valueA, valueB) {
    try {
        if (!Array.isArray(valueA)) {
            valueA = [valueA];
        }
        if (!Array.isArray(valueB)) {
            valueB = [valueB];
        }
        return valueA.some(function (value) { return valueB.includes(value); });
    }
    catch (e) {
        return false;
    }
}
/**
 * 获取排序转换后的数组或对象（仅支持单层简单结构）
 * @example
 * getSortVar({ b: 3, a: 2 }); /// { a: 2, b: 3 }
 * getSortVar({ a: 2, b: 3 }); /// { a: 2, b: 3 }
 * getSortVar([1, 3, 2]); /// [1, 2, 3]
 * @param value 值
 * @returns
 * @category Tools-工具方法
 */
function getSortVar(value) {
    try {
        if (Array.isArray(value)) {
            value = arraySort(value);
        }
        else {
            var _temp_1 = {};
            arraySort(Object.keys(value)).forEach(function (key) {
                _temp_1[key] = value[key];
            });
            value = _temp_1;
        }
        return value;
    }
    catch (e) {
        return value;
    }
}
/**
 * 反转数组或者字符串
 * @example
 * inversion([1, 2, 3]); /// [3, 2, 1]
 * inversion('123'); /// '321'
 * inversion(); /// undefined
 * inversion(true); /// true
 * @param value 值
 * @returns
 * @category Tools-工具方法
 */
function inversion(value) {
    var _a, _b, _c;
    try {
        if (Array.isArray(value)) {
            return value.reverse();
        }
        else {
            return (_c = (_b = (_a = value === null || value === void 0 ? void 0 : value.split('')) === null || _a === void 0 ? void 0 : _a.reverse()) === null || _b === void 0 ? void 0 : _b.join('')) !== null && _c !== void 0 ? _c : value;
        }
    }
    catch (e) {
        return value;
    }
}
/**
 * 直到某个函数返回 toBool(true) 的结果(执行完成)
 * @example
 * let a = 5;
 * setTimeout(() => (a = 10), 5000);
 * waitUntil(() => a === 10).then(() => { console.log(a) });
 * @param condition 函数
 * @param timeout 超时
 * @param interval 执行间隔
 * @returns
 * @category Tools-工具方法
 */
function waitUntil(condition, timeout, interval) {
    if (timeout === void 0) { timeout = 0; }
    if (interval === void 0) { interval = 250; }
    function evalCondition() {
        return new Promise(function (resolve, reject) {
            try {
                resolve(condition());
            }
            catch (e) {
                reject(e);
            }
        });
    }
    return new Promise(function (resolve, reject) {
        var startTime = new Date().getTime();
        var pollCondition = function () {
            evalCondition().then(function (val) {
                var elapsed = new Date().getTime() - startTime;
                if (toBool(val)) {
                    resolve(val);
                }
                else if (timeout && elapsed >= timeout) {
                    reject(Error("Wait timed out after ".concat(timeout, " ms")));
                }
                else {
                    setTimeout(pollCondition, interval);
                }
            }, reject);
        };
        pollCondition();
    });
}
/**
 * 毫秒转换
 * @example
 * ms('1s'); /// 1000
 * ms('1m'); /// 60000
 * ms('1.5h'); /// 5400000
 * ms('1d'); /// 86400000
 * ms('1y'); /// 31557600000
 * ms('1000'); /// 1000
 * ms(1500); /// '1.5s'
 * ms(60000); /// '1m'
 * @param str 值
 * @returns
 * @category Tools-工具方法
 */
function ms(str) {
    // 外部
    var factor = {
        ms: 1,
        s: 1000,
    };
    factor.m = factor.s * 60;
    factor.h = factor.m * 60;
    factor.d = factor.h * 24;
    factor.y = factor.d * 365.25;
    var suffixList = ['y', 'd', 'h', 'm', 's'];
    var regStrTime = /^((?:\d+)?\.?\d+) *(s|m|h|d|y)?$/;
    if (isStr(str)) {
        var match = str.match(regStrTime);
        if (!match)
            return 0;
        return toNum(match[1]) * factor[match[2] || 'ms'];
    }
    var num = str;
    var suffix = 'ms';
    for (var i = 0, len = suffixList.length; i < len; i++) {
        if (num >= factor[suffixList[i]]) {
            suffix = suffixList[i];
            break;
        }
    }
    return +(num / factor[suffix]).toFixed(2) + suffix;
}
/**
 * 文件流或内容转 Base64
 * @example
 * transferFileToBase64(file, 'application/pdf;charset=utf-8', (res) => console.log({ res })); /// result object
 * transferFileToBase64('test', 'text/plain', (res) => console.log({ res })); /// result object
 * @param content BlobPart | any 内容
 * @param contentType 内容类型
 * @param callBack 回调函数
 * @returns
 * @category Tools-下载/文件相关
 */
function transferFileToBase64(content, contentType, callBack) {
    var blob = new Blob([content], {
        type: contentType, // ;charset=utf-8
    });
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.addEventListener('loadend', function () {
        callBack === null || callBack === void 0 ? void 0 : callBack({
            result: reader === null || reader === void 0 ? void 0 : reader.result,
            // // @ts-ignore
            // baseCode: Buffer?.from(reader?.result?.split('base64,')[1], 'base64')
        });
    });
}
/**
 * 检查是否为 idCard string 身份证
 * 支持 15 、 18 位
 * @example
 * checkIdCard('350424870506202'); /// true
 * checkIdCard('003424870506202'); /// false
 * checkIdCard('415106199801012130'); /// true
 * checkIdCard('123123123123123222'); /// false
 * @param value 字符串值
 * @returns
 * @category Tools-工具方法
 */
function checkIdCard(value) {
    var regIdCard15 = /^[1-9]d{5}d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)d{2}$/;
    var regIdCard18 = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
    return regIdCard15.test(value) || regIdCard18.test(value);
}
/**
 * 获取年龄
 * @example
 * getAge('1998-9-28'); /// 24
 * getAge('1998-6-8', '2023-7'); /// 25
 * getAge('2023'); /// -1
 * @param birthday 生日
 * @param targetDate 目标日期
 * @returns
 * @category Tools-工具方法
 */
function getAge(birthday, targetDate) {
    return new Date(new Date(targetDate !== null && targetDate !== void 0 ? targetDate : Date.now()).getTime() - new Date(birthday).getTime()).getFullYear() - 1970;
}
/**
 * 获取生肖
 * @example
 * getAnimal('1998'); /// '虎'
 * getAnimal('1998-6-8'); /// '虎'
 * getAnimal('2023'); /// '兔'
 * @param date 日期
 * @returns
 * @category Tools-工具方法
 */
function getAnimal(date) {
    return ANIMALS[new Date(date).getFullYear() % 12];
}
/**
 * 身份证解析
 * @example
 * transferIdCard('350424870506202');
 * /// {"age":35,"year":"1987","idCard":"350424870506202","sex":"女","constellation":{"cn":"金牛","en":"Taurus","date":"4.20-5.20"},"gender":0,"province":"福建","animal":"兔","birthday":"1987-05-06"}
 * transferIdCard('415106199801012130');
 * /// {"age":24,"year":"1998","idCard":"415106199801012130","sex":"男","constellation":{"cn":"魔羯","en":"Capricorn","date":"12.22-1.19"},"gender":1,"province":"河南","animal":"虎","birthday":"1998-01-01"}
 * transferIdCard('xxxxx'); /// {}
 * @param idCard 字符串值
 * @returns
 * @category Tools-工具方法
 */
function transferIdCard(idCard) {
    if (!checkIdCard(idCard)) {
        return {};
    }
    var is18 = idCard.length === 18;
    // 新中国成立年份-2049
    var year = is18
        ? idCard.substring(6, 10)
        : "".concat(parseInt(idCard.charAt(6)) <= 4 ? '20' : '19').concat(idCard.substring(6, 8));
    var province = ID_CARD_PROVINCE[idCard.substring(0, 2)];
    var sex = parseInt(is18 ? idCard.charAt(16) : idCard.charAt(14)) % 2 === 1 ? '男' : '女';
    var animal = getAnimal(year);
    var birthday = "".concat(year, "-").concat(is18 ? idCard.substring(10, 12) : idCard.substring(8, 10), "-").concat(is18 ? idCard.substring(12, 14) : idCard.substring(10, 12));
    var age = getAge(birthday);
    var constellation = getConstellation(birthday);
    return {
        age: age,
        year: year,
        idCard: idCard,
        sex: sex,
        constellation: constellation,
        gender: sex === '男' ? MAN : WOMAN,
        province: province,
        animal: animal,
        birthday: birthday,
    };
}
/**
 * 金额转中文
 * @example
 * transferMoney(900); /// '玖佰元整'
 * transferMoney(852.5); /// '捌佰伍拾贰元伍角'
 * @param n 数值
 * @returns
 * @category Tools-工具方法
 */
function transferMoney(n) {
    var fraction = ['角', '分'];
    var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    var unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟'],
    ];
    var head = n < 0 ? '欠' : '';
    n = Math.abs(n);
    var s = '';
    var fraLen = fraction.length;
    for (var i = 0; i < fraLen; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (var i = 0; i < unit[0].length && n > 0; i++) {
        var p = '';
        for (var j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return (head +
        s
            .replace(/(零.)*零元/, '元')
            .replace(/(零.)+/g, '零')
            .replace(/^整$/, '零元整'));
}
/**
 * TTS 语音，可以在现代浏览器直接运行。
 * @example
 * const mySpeaker = Speaker();
 * mySpeaker.setText('你好，这是一条测试语音！hello');
 * mySpeaker.speak();
 * @param text 内容
 * @param lang 语言
 * @param volume 音量 [0, 1]
 * @param pitch 音高 [0, 2]
 * @param rate 速度 [0.1, 10]
 * @returns
 * @category TTS-文字转语音
 */
function Speaker(text, lang, volume, pitch, rate) {
    if (lang === void 0) { lang = 'zh-CN'; }
    if (volume === void 0) { volume = 1; }
    if (pitch === void 0) { pitch = 1; }
    if (rate === void 0) { rate = 1; }
    var speaker = new window.SpeechSynthesisUtterance(text);
    speaker.text = text;
    speaker.lang = lang;
    speaker.volume = volume;
    speaker.pitch = pitch;
    speaker.rate = rate;
    return {
        getInstance: function () {
            return speaker;
        },
        setText: function (txt) {
            speaker.text = txt;
        },
        setLang: function (lang) {
            speaker.lang = lang;
        },
        setVolume: function (volume) {
            speaker.volume = volume;
        },
        setPitch: function (pitch) {
            speaker.pitch = pitch;
        },
        setRate: function (rate) {
            speaker.rate = rate;
        },
        setVoice: function (voice) {
            speaker.voice = voice;
        },
        getVoices: function () {
            return window.speechSynthesis.getVoices();
        },
        speak: function () {
            window.speechSynthesis.speak(speaker);
        },
        stop: function () {
            window.speechSynthesis.cancel();
        },
    };
}
/**
 * 页面灰白屏幕
 * @example
 * rip(); /// 页面灰白
 * @returns
 * @category BXH-自定义动画
 */
function rip() {
    var html = document.querySelector('html');
    // html.style['-webkit-filter'] = 'grayscale(1)';
    html.style['filter'] = 'grayscale(1)';
}
// eslint-disable-next-line spellcheck/spell-checker
/**
 * 获取星座
 * @example
 * getConstellation('11-24'); /// { cn: '射手', en: 'Sagittarius', date: '11.23-12.21' }
 * getConstellation('xxx'); /// {cn: '未知', en: 'unknown', date: 'xxx'}
 * getConstellation(new Date('2022-11-24')); /// { cn: '射手', en: 'Sagittarius', date: '11.23-12.21' }
 * @param date 日期
 * @returns
 * @category Tools-工具方法
 */
function getConstellation(date) {
    var _a;
    var defaultV = {
        cn: '未知',
        en: 'unknown',
        date: date,
    };
    if (!date) {
        return defaultV;
    }
    try {
        date = new Date(date);
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var star = 'defaultV';
        switch (month) {
            case 3:
                if (day >= 21) {
                    star = 'Aries';
                }
                else {
                    star = 'Pisces';
                }
                break;
            case 4:
                if (day >= 21) {
                    star = 'Taurus';
                }
                else {
                    star = 'Aries';
                }
                break;
            case 5:
                if (day >= 22) {
                    star = 'Gemini';
                }
                else {
                    star = 'Taurus';
                }
                break;
            case 6:
                if (day >= 22) {
                    star = 'Cancer';
                }
                else {
                    star = 'Gemini';
                }
                break;
            case 7:
                if (day >= 23) {
                    star = 'Leo';
                }
                else {
                    star = 'Cancer';
                }
                break;
            case 8:
                if (day >= 23) {
                    star = 'Virgo';
                }
                else {
                    star = 'Leo';
                }
                break;
            case 9:
                if (day >= 24) {
                    star = 'Libra';
                }
                else {
                    star = 'Virgo';
                }
                break;
            case 10:
                if (day >= 24) {
                    star = 'Scorpio';
                }
                else {
                    star = 'Libra';
                }
                break;
            case 11:
                if (day >= 23) {
                    star = 'Sagittarius';
                }
                else {
                    star = 'Scorpio';
                }
                break;
            case 12:
                if (day >= 22) {
                    star = 'Capricorn';
                }
                else {
                    star = 'Sagittarius';
                }
                break;
            case 1:
                if (day >= 21) {
                    star = 'Aquarius';
                }
                else {
                    star = 'Capricorn';
                }
                break;
            case 2:
                if (day >= 20) {
                    star = 'Pisces';
                }
                else {
                    star = 'Aquarius';
                }
                break;
        }
        return (_a = CONSTELLATION[star]) !== null && _a !== void 0 ? _a : defaultV;
    }
    catch (e) {
        return defaultV;
    }
}
/**
 * 设置监听函数
 * 返回取消该监听的函数 return cancel
 * @example
 * setEventListener('resize', () => { console.log('resize'); }); /// cancel 当前 listener 的 function
 * @param eventKey 事件 key
 * @param foo 函数
 * @param once 是否只触发一次
 * @param dom document.querySelector<HTMLDivElement>('.xxx')
 * @returns
 * @category Tools-工具方法
 */
function setEventListener(eventKey, foo, once, dom) {
    if (once === void 0) { once = false; }
    if (dom === void 0) { dom = window; }
    dom.addEventListener(eventKey, foo, {
        // After configuring once, it will be called at most once
        once: once,
    });
    return function () {
        dom.removeEventListener(eventKey, foo);
    };
}
/**
 * H5 移动端软键盘缩回/弹起回调
 * `return cancel listener of keyBoardResize`
 * @example
 * keyBoardResize(() => { console.log('downCb'); }, () => { console.log('upCb'); }); /// do something
 * @param downCb 缩回回调
 * @param upCb 弹起回调
 * @returns
 * @category Tools-工具方法
 */
function keyBoardResize(downCb, upCb) {
    // 当软件键盘弹起会改变当前 window.innerHeight
    // 监听这个值变化 [downCb 缩回的回调、 upCb 弹起的回调]
    var clientHeight = window.innerHeight;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    downCb = typeof downCb === 'function' ? downCb : function () { };
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    upCb = typeof upCb === 'function' ? upCb : function () { };
    var H5KeyBoardResizeFoo = function () {
        var height = window.innerHeight;
        if (height === clientHeight) {
            downCb();
        }
        if (height < clientHeight) {
            upCb();
        }
    };
    return setEventListener('resize', H5KeyBoardResizeFoo);
}
/**
 * 设置 resize 时的监听函数，默认重新加载页面。
 * 返回取消该监听的函数 return cancel
 * @example
 * onResize(); /// cancel 当前 listener 的 function
 * onResize('resize', () => { console.log('resize'); }); /// cancel 当前 listener 的 function
 * @param foo 函数
 * @returns
 * @category Tools-工具方法
 */
function onResize(foo) {
    var func = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        !foo ? window.location.reload() : foo === null || foo === void 0 ? void 0 : foo.apply(void 0, __spreadArray([], __read(args), false));
    };
    window.addEventListener('resize', func);
    return function () {
        window.removeEventListener('resize', func);
    };
}
/**
 * 获取简单的浏览器指纹
 * @example
 * getFingerprint(); /// md5 加密后的指纹
 * getFingerprint('test'); /// md5 加密后的指纹-建议增加使用者标识，避免指纹冲突。
 * @param extraString 额外的字符串，可以说用户名等。
 * @returns
 * @category Tools-工具方法
 */
function getFingerprint(extraString) {
    var _a, _b, _c;
    var fingerprint = '';
    // 获取浏览器 User Agent
    var userAgent = navigator.userAgent;
    // 获取浏览器语言
    var language = 
    // @ts-ignore
    navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || 'xLang';
    // 获取屏幕分辨率
    var resolution = ((_a = window === null || window === void 0 ? void 0 : window.screen) === null || _a === void 0 ? void 0 : _a.width) + '*' + ((_b = window === null || window === void 0 ? void 0 : window.screen) === null || _b === void 0 ? void 0 : _b.height);
    // 获取屏幕颜色深度
    var colorDepth = ((_c = window === null || window === void 0 ? void 0 : window.screen) === null || _c === void 0 ? void 0 : _c.colorDepth) || 'xColorDepth';
    // 获取时区偏移
    var timezoneOffset = new Date().getTimezoneOffset();
    // 获取浏览器插件列表
    var plugins = Array.from(navigator.plugins || [])
        .map(function (plugin) {
        return (plugin === null || plugin === void 0 ? void 0 : plugin.name) + '::' + (plugin === null || plugin === void 0 ? void 0 : plugin.filename);
    })
        .join(';');
    // 获取浏览器是否启用了 Do Not Track
    // @ts-ignore
    var doNotTrack = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack || 'xDoNotTrack';
    // 拼接指纹字符串
    fingerprint =
        userAgent + language + resolution + colorDepth + timezoneOffset + plugins + doNotTrack + "".concat(extraString !== null && extraString !== void 0 ? extraString : 'xxx');
    // 对指纹字符串进行加密
    fingerprint = md5(fingerprint);
    return fingerprint;
}
/**
 * 禁用控制台
 * windows
 * 防君子不防小人
 * 监听页面大小变化没必要
 * 监听编辑 dom 事件 reload 也算了
 * @example
 * banConsole(); /// 返回取消禁用的 function
 * @returns
 * @category Tools-工具方法
 */
function banConsole() {
    var _a;
    document.body.setAttribute('style', (_a = 'user-select: none;' + document.body.style) !== null && _a !== void 0 ? _a : '');
    var cancelContextMenu = setEventListener('contextmenu', function (e) {
        return e.preventDefault();
    });
    var cancelKeyDown = setEventListener('keydown', function (e) {
        if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
            return e.preventDefault();
        }
    });
    return function () {
        cancelContextMenu();
        cancelKeyDown();
    };
}
/**
 * 获取星期信息
 * @example
 * getWeekInfo(); /// WEEKS_INFO
 * getWeekInfo('0'); /// WEEKS_INFO
 * getWeekInfo('ALL'); /// WEEKS_INFO
 * getWeekInfo('all'); /// WEEKS_INFO
 * getWeekInfo('unknown'); /// WEEKS_INFO
 * getWeekInfo(1); /// 星期一相关信息
 * getWeekInfo(8); /// WEEKS_INFO
 * @param n 值
 * @returns
 * @category Tools-工具方法
 */
function getWeekInfo(n) {
    var _a;
    if (n === 'all' || n === 'ALL') {
        return WEEKS;
    }
    // @ts-ignore
    if (!n || !Number.isInteger(n) || n < 1 || n > 7) {
        return WEEKS;
    }
    return (_a = WEEKS[Number(n) - 1]) !== null && _a !== void 0 ? _a : WEEKS;
}
/**
 * 获取月份信息
 * @example
 * getMonthInfo(); /// MONTH_INFO
 * getMonthInfo('0'); /// MONTH_INFO
 * getMonthInfo('ALL'); /// MONTH_INFO
 * getMonthInfo('all'); /// MONTH_INFO
 * getMonthInfo('unknown'); /// MONTH_INFO
 * getMonthInfo(1); /// 一月相关信息
 * getMonthInfo(13); /// MONTH_INFO
 * @param n 值
 * @returns
 * @category Tools-工具方法
 */
function getMonthInfo(n) {
    var _a;
    if (n === 'all' || n === 'ALL') {
        return MONTHS;
    }
    // @ts-ignore
    if (!n || !Number.isInteger(n) || n < 1 || n > 12) {
        return MONTHS;
    }
    return (_a = MONTHS[Number(n) - 1]) !== null && _a !== void 0 ? _a : MONTHS;
}
/**
 * 判断两个值是否相等
 * @example
 * isEqual([1, 2, 3], [1, 2, 3]); /// true
 * isEqual({a: 1, b: 2}, {a: 1, b: 2}); /// true
 * isEqual({}, {}); /// true
 * isEqual(1, 1); /// true
 * isEqual(1, '1'); /// false
 * @param obj1 值 1
 * @param obj2 值 2
 * @returns
 * @category Tools-工具方法
 */
function isEqual(obj1, obj2) {
    var e_2, _a;
    // 判断类型是否相同
    if (typeof obj1 !== typeof obj2) {
        return false;
    }
    // 判断是对象还是数组
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        // 如果是数组，比较每一个元素是否相等。
        if (obj1.length !== obj2.length) {
            return false;
        }
        for (var i = 0; i < obj1.length; i++) {
            if (!isEqual(obj1[i], obj2[i])) {
                return false;
            }
        }
        return true;
    }
    else if (typeof obj1 === 'object' && typeof obj2 === 'object') {
        // 如果是对象，比较每一个属性是否相等。
        var keys1 = Object.keys(obj1);
        var keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        try {
            for (var keys1_1 = __values(keys1), keys1_1_1 = keys1_1.next(); !keys1_1_1.done; keys1_1_1 = keys1_1.next()) {
                var key = keys1_1_1.value;
                // eslint-disable-next-line no-prototype-builtins
                if (!obj2.hasOwnProperty(key)) {
                    return false;
                }
                if (!isEqual(obj1[key], obj2[key])) {
                    return false;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (keys1_1_1 && !keys1_1_1.done && (_a = keys1_1.return)) _a.call(keys1_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return true;
    }
    else {
        // 其他类型直接比较值是否相等
        return obj1 === obj2;
    }
}
/**
 * 遍历数组或对象，并对每个元素执行回调函数，支持中途 break 和 continue 。
 * @example
 * forEach([1, 2, 3], (item, index) => console.log(item, index));
 * forEach([1, 2, 3], (item, index) => item * 2, true); /// [2, 4, 6]
 * forEach({a: 1, b: 2}, (value, key) => console.log(value, key));
 * forEach({a: 1, b: 2}, (value, key) => value * 2, true); /// {a: 2, b: 4}
 * @param data 要遍历的数据，可以是数组或对象。
 * @param callback 回调函数
 * @param hasReturn 是否返回一个新值
 * @returns
 * @category Tools-工具方法
 */
function forEach(data, callback, hasReturn) {
    if (hasReturn === void 0) { hasReturn = false; }
    var type = Object.prototype.toString.call(data);
    if (type !== '[object Object]' && type !== '[object Array]') {
        return undefined;
    }
    var isArray = type === '[object Array]';
    var result = hasReturn ? (isArray ? [] : {}) : undefined;
    var isBreak = false;
    if (isArray) {
        for (var i = 0; i < data.length; i++) {
            var res = callback(data[i], i);
            if (res === '_break') {
                isBreak = true;
                break;
            }
            if (res === '_continue') {
                res = undefined;
                continue;
            }
            if (hasReturn) {
                result[i] = res;
            }
        }
    }
    else {
        for (var key in data) {
            var res = callback(data[key], key);
            if (res === '_break') {
                isBreak = true;
                break;
            }
            if (res === '_continue') {
                res = undefined;
                continue;
            }
            if (hasReturn) {
                result[key] = res;
            }
        }
    }
    return hasReturn && !isBreak ? result : undefined;
}
/**
 * 获取带前/后缀的唯一 key
 * @example
 * getKey(); /// 'M2rmCcGpXCa5MTdN4Kks5'
 * getKey(2, 'test'); /// 'test-aK'
 * getKey(2, null, 'last'); /// 'aK-last'
 * @param size 指定长度
 * @param prefix 前缀
 * @param prefix 后缀
 * @returns
 * @category Crypto-密码学
 */
function getKey(size, prefix, suffix) {
    if (size === void 0) { size = 21; }
    var symbols = "".concat(BASE_NUMBER).concat(BASE_CHAR_LOW).concat(BASE_CHAR_UP);
    var len = symbols.length;
    // eslint-disable-next-line spellcheck/spell-checker
    var ret = new Uint8Array(size);
    for (var i = 0; i < size; i++) {
        ret[i] = getRandNum(0, 255);
    }
    var id = '';
    while (size--) {
        id += symbols[ret[size] % len];
    }
    prefix = !prefix ? '' : prefix + '-';
    suffix = !suffix ? '' : '-' + suffix;
    return prefix + id + suffix;
}
/**
 * 生成一个指定长度的随机数字符串
 * @example
 * getRandStr(2); /// '43'
 * getRandStr(5); /// '77192'
 * @param length 指定长度
 * @returns
 * @category Crypto-密码学
 */
function getRandStr(length) {
    var result = '';
    var characters = "".concat(BASE_NUMBER);
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(length != 1 && i == 0 && randomIndex == 0 ? randomIndex + 1 : randomIndex);
    }
    return result;
}
/**
 * 获取 V4 版本 UUID
 * @example
 * uuid(); /// '7b72e264-61fe-426e-b95f-35d4e61c5742'
 * @returns
 * @category Crypto-密码学
 */
function uuid() {
    // // 创建临时 URL 对象
    // const tempUrl = URL.createObjectURL(new Blob());
    // // 将 URL 转换为字符串
    // const uuid = tempUrl.toString();
    // // 释放这个 URL
    // URL.revokeObjectURL(tempUrl);
    // // 提取 URL 字符串中最后一个斜杠后的部分作为 UUID
    // return uuid.substring(uuid.lastIndexOf('/') + 1);
    // 下面是生成符合 UUID 标准的代码，被注释掉了
    var hexBytes = [];
    for (var i = 0; i < 256; i++) {
        hexBytes[i] = (i + 0x100).toString(16).substring(1);
    }
    // eslint-disable-next-line spellcheck/spell-checker
    var ret = new Uint8Array(16);
    for (var i = 0; i < 16; i++)
        ret[i] = getRandNum(0, 255);
    var b = ret;
    b[6] = (b[6] & 0x0f) | 0x40;
    b[8] = (b[8] & 0x3f) | 0x80;
    return (hexBytes[b[0]] +
        hexBytes[b[1]] +
        hexBytes[b[2]] +
        hexBytes[b[3]] +
        '-' +
        hexBytes[b[4]] +
        hexBytes[b[5]] +
        '-' +
        hexBytes[b[6]] +
        hexBytes[b[7]] +
        '-' +
        hexBytes[b[8]] +
        hexBytes[b[9]] +
        '-' +
        hexBytes[b[10]] +
        hexBytes[b[11]] +
        hexBytes[b[12]] +
        hexBytes[b[13]] +
        hexBytes[b[14]] +
        hexBytes[b[15]]);
}
/**
 * 获取随机日期时间
 * @example
 * getRandDate(); /// '1923-01-01 01:03:30'
 * @returns
 * @category Tools-工具方法
 */
function getRandDate() {
    var year = getRandNum(1970, new Date().getFullYear());
    var month = getRandNum(1, 12);
    var day = getRandNum(1, 28);
    var hours = getRandNum(0, 23);
    var minutes = getRandNum(0, 59);
    var seconds = getRandNum(0, 59);
    var formattedMonth = "".concat(month).padStart(2, '0');
    var formattedDay = "".concat(day).padStart(2, '0');
    var formattedHours = "".concat(hours).padStart(2, '0');
    var formattedMinutes = "".concat(minutes).padStart(2, '0');
    var formattedSeconds = "".concat(seconds).padStart(2, '0');
    return "".concat(year, "-").concat(formattedMonth, "-").concat(formattedDay, " ").concat(formattedHours, ":").concat(formattedMinutes, ":").concat(formattedSeconds);
}
/**
 * 获取随机 IP 地址
 * @example
 * getRandIp(); /// '89.0.142.86'
 * @returns
 * @category Tools-工具方法
 */
function getRandIp() {
    var segment1 = getRandNum(1, 255);
    var segment2 = getRandNum(0, 255);
    var segment3 = getRandNum(0, 255);
    var segment4 = getRandNum(1, 255);
    return "".concat(segment1, ".").concat(segment2, ".").concat(segment3, ".").concat(segment4);
}
/**
 * 给对应 dom 生成水印
 * @example
 * watermark(document.body, 'My Watermark', { fontSize: 20, opacity: 0.5, angle: -30, color: 'red', fontFamily: 'Arial', repeat: true, backgroundOpacity: 0.05 });
 * watermark(document.body, 'My Watermark'); /// 在 body 中生成水印
 * watermark(document.body, 'My Watermark', { fontSize: 120, color: 'red', repeat: false, angle: 0 }); /// 在 body 中生成水印
 * watermark(document.body, 'My Watermark', { fontSize: 20, color: 'red', repeat: true, angle: 90 }); /// 在 body 中生成水印
 * @param dom 需要生成水印的 dom
 * @param text 水印内容
 * @param options 样式配置
 * @returns
 * @category Watermark-水印
 */
function watermark(dom, text, options) {
    if (options === void 0) { options = {}; }
    var _a = options.fontSize, fontSize = _a === void 0 ? 16 : _a, _b = options.opacity, opacity = _b === void 0 ? 0.3 : _b, _c = options.angle, angle = _c === void 0 ? -45 : _c, _d = options.color, color = _d === void 0 ? '#000' : _d, _e = options.fontFamily, fontFamily = _e === void 0 ? 'Arial' : _e, _f = options.repeat, repeat = _f === void 0 ? true : _f, _g = options.backgroundOpacity, backgroundOpacity = _g === void 0 ? 0.05 : _g;
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    ctx.font = "".concat(fontSize, "px ").concat(fontFamily);
    var textWidth = ctx.measureText(text).width;
    var textHeight = fontSize;
    var canvasWidth = angle % 180 == 0
        ? textWidth * 2
        : angle % 90 == 0
            ? textHeight * 2
            : (Math.abs(textWidth * Math.cos((angle * Math.PI) / 180)) +
                Math.abs(textHeight * Math.sin((angle * Math.PI) / 180))) *
                2;
    var canvasHeight = angle % 180 == 0
        ? textHeight * 2
        : angle % 90 == 0
            ? textWidth * 2
            : (Math.abs(textHeight * Math.cos((angle * Math.PI) / 180)) +
                Math.abs(textWidth * Math.sin((angle * Math.PI) / 180))) *
                2;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx.font = "".concat(fontSize, "px ").concat(fontFamily);
    ctx.fillStyle = color;
    ctx.globalAlpha = opacity;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    var centerX = canvasWidth / 2;
    var centerY = canvasHeight / 2;
    ctx.translate(centerX, centerY);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.fillText(text, 0, 0);
    ctx.rotate((-angle * Math.PI) / 180);
    ctx.translate(-centerX, -centerY);
    var backgroundImage = "url(".concat(canvas.toDataURL('image/png'), ")");
    dom.style.backgroundImage = backgroundImage;
    dom.style.backgroundRepeat = repeat ? 'repeat' : 'no-repeat';
    dom.style.backgroundSize = "".concat(dom.clientWidth === canvasWidth ? canvasWidth : dom.clientWidth / Math.ceil(dom.clientWidth / canvasWidth), "px ").concat(dom.clientHeight === canvasHeight ? canvasHeight : dom.clientHeight / Math.ceil(dom.clientHeight / canvasHeight), "px");
    dom.style.backgroundColor = "rgba(0, 0, 0, ".concat(backgroundOpacity, ")");
    dom.style.backgroundPosition = 'center';
}
/**
 * 创建定时器
 * @example
 * const cancelTimer = xTimer(() => {
 *   console.log('Timer executed!');
 * }, 1000, true, true);
 * cancelTimer();
 * const cancelIntervalTimer = xTimer(() => {
 *   console.log('IntervalTimer executed!');
 * }, 1000, false);
 * cancelIntervalTimer();
 * @param callback 回调函数
 * @param [time=1] 时间间隔（毫秒），默认为 1 。
 * @param [once=false] 是否为一次性定时器，默认为 false 。
 * @param [immediate=false] 是否立即执行回调函数，默认为 false 。
 * @returns
 * @category xTimer-定时器封装
 */
function xTimer(callback, time, once, immediate) {
    if (time === void 0) { time = 0; }
    if (once === void 0) { once = false; }
    if (immediate === void 0) { immediate = false; }
    time = time !== null && time !== void 0 ? time : 0;
    if (once) {
        if (immediate) {
            callback();
        }
        var timer_1 = setTimeout(function () {
            callback();
        }, time);
        return function () {
            clearTimeout(timer_1);
        };
    }
    else {
        if (immediate) {
            callback();
        }
        var interval_1 = setInterval(function () {
            callback();
        }, time);
        return function () {
            clearInterval(interval_1);
        };
    }
}
/**
 * -函数柯里化-
 * 是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。
 * @example
 * curryIt(function (a, b, c) {return a + b + c})(1)(2)(3); /// 6
 * @param fn 函数
 * @returns
 * @category Tools-工具方法
 */
function curryIt(fn) {
    return function curried() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length >= fn.length) {
            return fn.apply(void 0, __spreadArray([], __read(args), false));
        }
        else {
            return function () {
                var nextArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    nextArgs[_i] = arguments[_i];
                }
                return curried.apply(void 0, __spreadArray([], __read(args.concat(nextArgs)), false));
            };
        }
    };
    //   // 获取预定义函数的参数个数
    //   let length = fn.length;
    //   // 声明存放参数的数组
    //   const args: any[] = [];
    //   return function (arg: any) {
    //     args.push(arg);
    //     length--;
    //     if (length <= 0) {
    //       // @ts-ignore
    //       return fn.apply(this, args);
    //     } else {
    //       // callee 属性是一个指针，指向拥有这个 arguments 对象的函数。
    //       return arguments.callee;
    //     }
    //   };
}

/*
 * @Author: HxB
 * @Date: 2022-04-26 15:05:14
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-05-30 15:00:39
 * @Description: 对象相关函数
 * @FilePath: \js-xxx\src\Object\index.ts
 */
/**
 * 获取多级对象值
 * @example
 * getV('默认值', {name: {children: [123, 456]}}, 'name', 'children', '0'); /// 123
 * getV('默认值', {name: {children: [123, 456]}}, 'name.children.0'); /// 123
 * getV('默认值', {name: {children: [123, 456]}}, 'name.children.xxx'); /// 默认值
 * getV('默认值', {name: {children: [123, 456], '[]': ['test']}}, 'name.[].0'); /// 'test'
 * getV('默认值', {name: {children: [123, 456], '[]': ['test']}}, 'name', '[]', 0); /// 'test'
 * @param defaultResult 默认值
 * @param args 需要获取的多级 rest 参数或者独立多级 string
 * @returns
 * @category Object-对象相关
 */
function getV(defaultResult) {
    var e_1, _a;
    var _b;
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if ((args === null || args === void 0 ? void 0 : args.length) == 2 && ((_b = args[1]) === null || _b === void 0 ? void 0 : _b.includes('.'))) {
        var _c = __read(args, 2), obj = _c[0], propPath = _c[1];
        var propKeys = propPath.split('.');
        var value = obj;
        try {
            for (var propKeys_1 = __values(propKeys), propKeys_1_1 = propKeys_1.next(); !propKeys_1_1.done; propKeys_1_1 = propKeys_1.next()) {
                var key = propKeys_1_1.value;
                value = hasKey(value, key) ? value[key] : defaultResult;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (propKeys_1_1 && !propKeys_1_1.done && (_a = propKeys_1.return)) _a.call(propKeys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return value !== null && value !== void 0 ? value : defaultResult;
    }
    return args.length >= 2
        ? // eslint-disable-next-line no-prototype-builtins, indent
            args.reduce(function (a, b) { var _a; return (hasKey(a, b) ? (_a = a[b]) !== null && _a !== void 0 ? _a : defaultResult : defaultResult); })
        : defaultResult;
}
/**
 * 对象/数组包含某个 key/index 或者属性
 * @example
 * hasKey({ a: 1 }, 'a'); /// true
 * hasKey([0, 1], '0'); /// true
 * hasKey([0, 1], 2); /// false
 * hasKey({ a: 1 }, 'b'); /// false
 * const a = { a: 1 };
 * a.__proto__.x = 1;
 * hasKey(a, 'x'); /// true;
 * @param data 对象
 * @param key 需要判断的 key
 * @returns
 * @category Object-对象相关
 */
function hasKey(data, key) {
    if (!data) {
        return false;
    }
    try {
        // eslint-disable-next-line no-prototype-builtins
        if (data[key] !== undefined || (data === null || data === void 0 ? void 0 : data.hasOwnProperty(key))) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (e) {
        return false;
    }
}
/**
 * 深拷贝
 * @link https://juejin.cn/post/7075351322014253064
 * @example
 * deepClone({a: 1, b: {c: 2}}); /// 新的 {a: 1, b: {c: 2}}
 * @param data 源数据
 * @param hash hash 存储，避免循环引用。
 * @returns
 * @category Object-对象相关
 */
function deepClone(data, hash) {
    if (hash === void 0) { hash = new WeakMap(); }
    if (hash.has(data)) {
        return data;
    }
    var result = null;
    var reference = [Date, RegExp, Set, WeakSet, Map, WeakMap, Error];
    if (reference.includes(data === null || data === void 0 ? void 0 : data.constructor)) {
        result = new data.constructor(data);
    }
    else if (Array.isArray(data)) {
        result = [];
        data.forEach(function (item, i) {
            result[i] = deepClone(item);
        });
    }
    else if (typeof data === 'object' && data !== null) {
        hash.set(data, 'exist');
        result = {};
        for (var key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                result[key] = deepClone(data[key], hash);
            }
        }
    }
    else {
        result = data;
    }
    return result;
    //   // JSON.parse(JSON.stringify(data))
    //   if (getType(data) !== 'object' || !Array.isArray(data)) {
    //     return data;
    //   }
    //   let result: any = Array.isArray(data) ? [] : {};
    //   for (let i in data) {
    //     result[i] = deepClone(data[i]);
    //   }
    //   return result;
}
/**
 * every 函数
 * 因为默认的 every 空数组会返回 true
 * @example
 * every([]); /// false
 * every([1, 2, 3], (item) => item > 0); /// true
 * every({}); /// false
 * every(undefined); /// false
 * @param collection 源数据
 * @param callback 回调
 * @returns
 * @category Object-对象相关
 */
function every(collection, callback) {
    if (!collection) {
        return false;
    }
    if (Array.isArray(collection)) {
        if (collection.length === 0) {
            return false;
        }
        return collection.every(callback !== null && callback !== void 0 ? callback : Boolean);
    }
    if (typeof collection === 'object') {
        var values = Object.values(collection);
        if (values.length === 0) {
            return false;
        }
        return values.every(callback !== null && callback !== void 0 ? callback : Boolean);
    }
    return false;
}
/**
 * 找到对象数组具有最多 key 的对象，并返回其 key 组成的数组。
 * @example
 * const objects = [
 *  { id: 1, name: 'a', age: 25 },
 *  { id: 2, name: 'b', age: 30, city: '123' },
 *  { id: 3, name: 'c', age: 35, city: '456', profession: 'Engineer' }
 * ];
 *  findMaxKey(objects); /// ['id', 'name', 'age', 'city', 'profession']
 * @param objArray 源数据
 * @returns
 * @category Object-对象相关
 */
function findMaxKey(objArray) {
    if (!objArray) {
        return [];
    }
    var maxKeyCount = 0;
    var maxKeyObject = null;
    // 遍历对象数组
    objArray === null || objArray === void 0 ? void 0 : objArray.forEach(function (obj) {
        var _a;
        var keyCount = (_a = Object.keys(obj !== null && obj !== void 0 ? obj : {})) !== null && _a !== void 0 ? _a : [];
        // 更新最大 key 数量和对应的对象
        if (keyCount.length > maxKeyCount) {
            maxKeyCount = keyCount.length;
            maxKeyObject = keyCount;
        }
    });
    // 返回最大 key 对象的 key 数组
    if (maxKeyObject) {
        return maxKeyObject;
    }
    else {
        return [];
    }
}
/**
 * 转化为 Select 数据，至少有 label/value/key 字段。
 * @example
 * arr2select([{ id: 1, name: 'A' }, { id: 2, name: 'B' }], { label: 'name', value: 'id' });
 * /// [{ label: 'A', value: 1, key: 'selectKey-Random1' }, { label: 'B', value: 2, key: 'selectKey-Random2' }]
 * arr2select([{ id: 1, name: 'A' }, { id: 2, name: 'B' }], { value: 'id', key: 'UNDEFINED' });
 * /// [{ label: 1, value: 1, key: 1 }, { label: 2, value: 2, key: 2 }]
 * arr2select([{ data: { id: 1, name: 'A' }, key: 'test1' }, { data: { id: 2, name: 'B' }, key: 'test2' }], { value: 'data.id', key: 'key', label: 'data.name' });
 * /// [{ value: 1, label: "A", key: "test1" }, { value: 2, label: "B", key: "test2" }]
 * @param arr 数组
 * @param options 配置 { label?: 'label', value: 'value', key?: 'key' }
 * @returns
 * @category Object-对象相关
 */
function arr2select(arr, options) {
    var e_2, _a;
    if (!arr || !arr.length) {
        return [];
    }
    var label = options.label, value = options.value, key = options.key;
    var selectData = [];
    try {
        for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
            var item = arr_1_1.value;
            var selectItem = {};
            var valueData = getV(null, item, value);
            selectItem.value = valueData;
            // 设置 label 字段
            if (label) {
                selectItem.label = getV(valueData, item, label);
            }
            else {
                selectItem.label = valueData;
            }
            // 设置 key 字段
            if (key) {
                selectItem.key = getV(valueData, item, key);
            }
            else {
                selectItem.key = getKey(5, 'selectKey');
            }
            selectData.push(selectItem);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return selectData;
}

/* eslint-disable max-lines */
// eslint-disable-next-line spellcheck/spell-checker, zob/comment
/**
 * 字符转 unicode
 * @example
 * unicode2str("我是老A"); /// '\\u6211\\u662f\\u8001a'
 * @param value 中文字符串
 * @returns
 * @category Custom-转码
 */
function unicode2str(value) {
    return escape(value).toLowerCase().replace(/%u/gi, '\\u');
}
// eslint-disable-next-line spellcheck/spell-checker, zob/comment
/**
 * unicode 转字符
 * @example
 * str2unicode("\\u6211\\u662f\\u8001a"); /// '我是老a'
 * @param value unicode 字符串
 * @returns
 * @category Custom-转码
 */
function str2unicode(value) {
    return unescape(value.replace(/\\u/gi, '%u'));
}
/**
 * 去除字符串空格
 * `可选值：0|ba：去除前后空格，1|b：去除前空格，2|a：去除后空格，3|all：去除所有空格，4|pro：去除所有空格，中间的空格保留一个。`
 * @example
 * trim('  a  b  ', 4); /// 'a b'
 * @param str 字符串
 * @param type 类型，默认为 0|ba，错误 type 会返回原字符串。
 * @returns
 * @category String-字符串
 */
function trim(str, type) {
    if (type === void 0) { type = 0; }
    switch (type) {
        case 0:
        case 'ba':
            return (str = str.trim());
        case 1:
        case 'b':
            return (str = str.replace(/^[\s]*/, ''));
        case 2:
        case 'a':
            return (str = str.replace(/[\s]*$/g, ''));
        case 3:
        case 'all':
            return (str = str.replace(/\s/g, ''));
        case 4:
        case 'pro':
            // 去除前后空格并将中间的单个空格保留，多个空格变为一个空格。
            return (str = str.replace(/(^\s*)|(\s*$)|\s(?=\s)/g, ''));
        default:
            return str;
    }
}
// eslint-disable-next-line spellcheck/spell-checker, zob/comment
/**
 * 字符串脱敏(biugle 自定义规则)
 * @example
 * maskString(undefined); /// '-'
 * maskString('13579246810'); /// '135****6810'
 * maskString('王小二'); /// '王***二'
 * maskString('123456789'); /// '123****89'
 * maskString('130223199809282927'); /// '13022********927'
 * maskString('广东省深圳市龙华区'); /// 广东省****华区'
 * maskString('广东省深圳市福田区福田保税区xxx小区xxx单元x栋x楼xxx号'); /// '广东省深圳市福田区******xx号'
 * @param str 字符串
 * @returns
 * @category String-字符串
 */
function maskString(str) {
    str = str ? "".concat(str) : '';
    switch (str.length) {
        case 0:
            return '-';
        case 1:
            return '***';
        case 2:
            return str.charAt(0) + '***';
        case 3:
        case 4:
        case 5:
            return str.charAt(0) + '***' + str.charAt(str.length - 1);
        case 11:
            return str.substring(0, 3) + '*****' + str.substring(7);
        case 18:
            return str.substring(0, 5) + '********' + str.substring(15);
    }
    if (str.length > 6 && str.length < 11) {
        return str.substring(0, 3) + '****' + str.substring(str.length - 2);
    }
    if (str.length <= 11) {
        return str.substring(0, 3) + '*****';
    }
    if (str.length <= 18) {
        return str.substring(0, 3) + '*****' + str.substring(str.length - 3);
    }
    return str.substring(0, 9) + '******' + str.substring(str.length - 3);
}
/**
 * 改变字符串大小写
 * @example
 * textTransferCase('red', 'upper'|1); /// 'RED'
 * textTransferCase('red', 'lower'|2); /// 'red'
 * textTransferCase('red', 'first'|3); /// 'Red'
 * @param str 字符串
 * @param type 目标类型
 * @returns
 * @category String-字符串
 */
function textTransferCase(str, type) {
    switch (type) {
        case 1:
        case 'upper':
            return str.toUpperCase();
        case 2:
        case 'lower':
            return str.toLowerCase();
        case 3:
        case 'first':
            return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
        default:
            return str;
    }
}
/**
 * 按照普遍的特殊字符分割字符串
 * @example
 * textSplitCase('foo-bar'); /// ['foo', 'bar']
 * textSplitCase('foo_bar'); /// ['foo', 'bar']
 * textSplitCase('foo bar'); /// ['foo', 'bar']
 * textSplitCase('foo.bar'); /// ['foo', 'bar']
 * textSplitCase('fooBar'); /// ['foo', 'bar']
 * textSplitCase('foo-Bar'); /// ['foo', 'bar']
 * @param str 字符串
 * @returns
 * @category String-字符串
 */
function textSplitCase(str) {
    var regUpperCase = /([A-Z])/g;
    var regSeparator = /[_.\- ]+/g;
    var regTrim = /(^-)|(-$)/g;
    str = str.replace(regUpperCase, '-$1').toLowerCase().replace(regSeparator, '-').replace(regTrim, '');
    return str.split('-');
}
/**
 * 字符串转驼峰
 * @example
 * textCamelCase('foo-bar'); /// 'fooBar'
 * textCamelCase('foo_bar'); /// 'fooBar'
 * textCamelCase('foo bar'); /// 'fooBar'
 * textCamelCase('foo.bar'); /// 'fooBar'
 * @param str 字符串
 * @returns
 * @category String-字符串
 */
function textCamelCase(str) {
    var arr = textSplitCase(str);
    var ret = arr[0];
    arr.shift();
    arr.forEach(function (i, idx) {
        arr[idx] = textTransferCase(i, 'first');
    });
    ret += arr.join('');
    return ret;
}
/**
 * 字符串 repeat
 * @example
 * repeat('*'); /// '*'
 * repeat('*', 3); /// '***'
 * @param str 字符串
 * @returns
 * @category String-字符串
 */
function repeat(str, n) {
    if (n === void 0) { n = 1; }
    var ret = '';
    if (n < 1)
        return '';
    while (n > 0) {
        if (n & 1)
            ret += str;
        n >>= 1;
        str += str;
    }
    return ret;
}
/**
 * 检查是否为 url string
 * @example
 * isUrl('http://www.example.com?foo=bar&param=test'); /// true
 * isUrl(http://www); /// false
 * @param value 字符串值
 * @returns
 * @category String-字符串
 */
function isUrl(value) {
    var regUrl = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/;
    return regUrl.test(value);
}
/**
 * 检查是否为经度
 * @example
 * isLongitude(-181); /// false
 * isLongitude(179.12); /// true
 * @param value 值
 * @returns
 * @category String-字符串
 */
function isLongitude(value) {
    var regUrl = /^(-?(?:1[0-7]\d(\.\d+)?|180(\.0+)?|\d{1,2}(\.\d+)?))$/;
    return regUrl.test(value);
}
/**
 * 检查是否为纬度
 * @example
 * isLatitude(-90.1); /// false
 * isLatitude(90); /// true
 * @param value 值
 * @returns
 * @category String-字符串
 */
function isLatitude(value) {
    var regUrl = /^(-?(?:[1-8]?\d(\.\d+)?|90(\.0+)?))$/;
    return regUrl.test(value);
}
/**
 * 检查是否为 email string 邮箱
 * @example
 * isEmail('test@qq.com'); /// true
 * isEmail('@qq.com'); /// false
 * @param value 字符串值
 * @returns
 * @category String-字符串
 */
function isEmail(value) {
    var regEmail = /.+@.+\..+/;
    return regEmail.test(value);
}
/**
 * 检查是否为 string 手机号
 * @example
 * isMobile('13579246810'); /// true
 * isMobile('12345678910'); /// false
 * @param value 字符串值
 * @returns
 * @category String-字符串
 */
function isMobile(value) {
    var regPhoneNum = /^(0|86|17951)?(1[3-9][0-9])[0-9]{8}$/;
    return regPhoneNum.test(value);
}
// eslint-disable-next-line zob/comment
/**
 * 检查是否为 char string 用户名规范(字母数字下划线或中文)
 * @example
 * isAccount('test123@qq.com'); /// false
 * isAccount('_test123_qq_com'); /// false
 * isAccount('test123_qq_com'); /// true
 * isAccount('我test123_qq_com'); /// false
 * isAccount('我test123_qq_com', true); /// true
 * @param value 字符串值
 * @returns
 * @category String-字符串
 */
function isAccount(value, hasChinese) {
    if (hasChinese === void 0) { hasChinese = false; }
    if (!value) {
        return false;
    }
    var regChar = hasChinese
        ? /^[a-zA-Z\u4E00-\u9FA5]([a-zA-Z0-9_\u4E00-\u9FA5]{5,17})$/
        : /^[a-zA-Z]([a-zA-Z0-9_\u4E00-\u9FA5]{5,17})$/;
    return regChar.test(value);
}
/**
 * 检查密码强度是否足够
 * @example
 * isStrongPassWord('test@qq.com'); /// false
 * isStrongPassWord('test@qq.com123'); /// true
 * @param value 字符串值
 * @returns
 * @category String-字符串
 */
function isStrongPassWord(value) {
    var pwChar = /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,16}/;
    return pwChar.test(value);
}
// eslint-disable-next-line zob/comment
/**
 * 检查是否为 carCode string 车牌号
 * @example
 * isCarCode('粤B68928'); /// true
 * isCarCode('粤-B68928'); /// true
 * isCarCode('粤 B68928'); /// true
 * isCarCode('粤B.68928'); /// true
 * isCarCode('粤B 68928'); /// true
 * isCarCode('广东 B12345'); /// false
 * @param value 字符串值
 * @returns
 * @category String-字符串
 */
function isCarCode(value) {
    var regCarCode = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[\s\-]{0,1}[A-Z]{1}[\.\s]{0,1}[A-Z0-9]{4,5}[A-Z0-9挂学警港澳]{1}$/;
    return regCarCode.test(value);
}
/**
 * 检查是否为 ipv4 string
 * @example
 * isIpv4('127.0.0.1'); /// true
 * isIpv4('255.255.255.0'); /// true
 * isIpv4('255.255.255.2555'); /// false
 * isIpv4('255.255.255.2555.255'); /// false
 * @param value 字符串值
 * @returns
 * @category String-字符串
 */
function isIpv4(value) {
    var regIpv4 = /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/;
    return regIpv4.test(value + '.');
}
// eslint-disable-next-line spellcheck/spell-checker
/**
 * 检查是否为 ipv6 string
 * @example
 * isIpv6('::1'); /// true
 * isIpv6('127.0.0.1'); /// false
 * isIpv6('2000:0000:0000:0000:0001:2345:6789:abcd'); /// true
 * isIpv6('2001:DB8:0:0:8:800:200C:417A'); /// true
 * isIpv6('2001:DB8::8:800:200C:417A'); /// false 暂不兼容缩写
 * isIpv6('2001:DB8:0:0:8:800:200C:417A:123'); /// false
 * isIpv6('2000:0000:0000:0000:0001:2345:6789:abcd:1'); /// false
 * @param value 字符串值
 * @returns
 * @category String-字符串
 */
function isIpv6(value) {
    if (value == '::1')
        return true;
    var regIpv6 = /^(([\da-fA-F]{1,4}):){8}$/;
    return regIpv6.test(value + ':');
}
/**
 * 检查是否为 ip string
 * @example
 * isIpAddress('::1'); /// true
 * isIpAddress('127.0.0.1'); /// true
 * isIpAddress('2001:DB8:0:0:8:800:200C:417A'); /// true
 * isIpAddress('255.255.255.123.123'); /// false
 * @param value 字符串值
 * @returns
 * @category String-字符串
 */
function isIpAddress(value) {
    return isIpv4(value) || isIpv6(value);
}
// eslint-disable-next-line spellcheck/spell-checker
/**
 * 检查是否为 file.ext string 文件扩展名
 * @example
 * checkFileExt(['png', 'jpg'], 'test.jpg'); /// true
 * checkFileExt(['png', 'jpg'], 'test.jpg.txt'); /// false
 * @param value 字符串值
 * @returns
 * @category String-字符串
 */
function checkFileExt(arr, value) {
    var regFileExt = arr.map(function (name) { return ".".concat(name); }).join('|');
    return new RegExp("(".concat(regFileExt, ")$")).test(value);
}
/**
 * 检查是否为 http 协议，1 是，-1 为 https，0 啥也不是。
 * @example
 * isHttp('http://test.com'); /// 1
 * isHttp('http:test.com'); /// 0
 * isHttp('https://test.com'); /// -1
 * isHttp('12345'); /// 0
 * @param value 字符串值
 * @returns
 * @category String-字符串
 */
function isHttp(value) {
    var flag = value.substring(0, 8);
    return flag.includes('http://') ? 1 : flag.includes('https://') ? -1 : 0;
}
/**
 * Slug 化字符串 URL，将字符串转换为 URL 友好的格式。
 * @example
 * slugify('I LOVE OQM'); /// 'I_LOVE_OQM'
 * slugify('I LOVE OQM', { ' ': '-' }); /// 'I-LOVE-OQM'
 * @param str 字符串值
 * @param replacement 替换字符串映射
 * @returns
 * @category String-字符串
 */
function slugify(str, replacement) {
    var regForbidden = /[^\w\s$*_+~.()'"!\-:@]/g;
    // https://github.com/simov/slugify
    var REPLACEMENT = 
    // eslint-disable-next-line spellcheck/spell-checker
    '$ dollar,% percent,& and,< less,> greater,| or,¢ cent,£ pound,¤ currency,¥ yen,© (c),ª a,® (r),º o,À A,Á A,Â A,Ã A,Ä A,Å A,Æ AE,Ç C,È E,É E,Ê E,Ë E,Ì I,Í I,Î I,Ï I,Ð D,Ñ N,Ò O,Ó O,Ô O,Õ O,Ö O,Ø O,Ù U,Ú U,Û U,Ü U,Ý Y,Þ TH,ß ss,à a,á a,â a,ã a,ä a,å a,æ ae,ç c,è e,é e,ê e,ë e,ì i,í i,î i,ï i,ð d,ñ n,ò o,ó o,ô o,õ o,ö o,ø o,ù u,ú u,û u,ü u,ý y,þ th,ÿ y,Ā A,ā a,Ă A,ă a,Ą A,ą a,Ć C,ć c,Č C,č c,Ď D,ď d,Đ DJ,đ dj,Ē E,ē e,Ė E,ė e,Ę e,ę e,Ě E,ě e,Ğ G,ğ g,Ģ G,ģ g,Ĩ I,ĩ i,Ī i,ī i,Į I,į i,İ I,ı i,Ķ k,ķ k,Ļ L,ļ l,Ľ L,ľ l,Ł L,ł l,Ń N,ń n,Ņ N,ņ n,Ň N,ň n,Ő O,ő o,Œ OE,œ oe,Ŕ R,ŕ r,Ř R,ř r,Ś S,ś s,Ş S,ş s,Š S,š s,Ţ T,ţ t,Ť T,ť t,Ũ U,ũ u,Ū u,ū u,Ů U,ů u,Ű U,ű u,Ų U,ų u,Ź Z,ź z,Ż Z,ż z,Ž Z,ž z,ƒ f,Ơ O,ơ o,Ư U,ư u,ǈ LJ,ǉ lj,ǋ NJ,ǌ nj,Ș S,ș s,Ț T,ț t,˚ o,Ά A,Έ E,Ή H,Ί I,Ό O,Ύ Y,Ώ W,ΐ i,Α A,Β B,Γ G,Δ D,Ε E,Ζ Z,Η H,Θ 8,Ι I,Κ K,Λ L,Μ M,Ν N,Ξ 3,Ο O,Π P,Ρ R,Σ S,Τ T,Υ Y,Φ F,Χ X,Ψ PS,Ω W,Ϊ I,Ϋ Y,ά a,έ e,ή h,ί i,ΰ y,α a,β b,γ g,δ d,ε e,ζ z,η h,θ 8,ι i,κ k,λ l,μ m,ν n,ξ 3,ο o,π p,ρ r,ς s,σ s,τ t,υ y,φ f,χ x,ψ ps,ω w,ϊ i,ϋ y,ό o,ύ y,ώ w,Ё Yo,Ђ DJ,Є Ye,І I,Ї Yi,Ј J,Љ LJ,Њ NJ,Ћ C,Џ DZ,А A,Б B,В V,Г G,Д D,Е E,Ж Zh,З Z,И I,Й J,К K,Л L,М M,Н N,О O,П P,Р R,С S,Т T,У U,Ф F,Х H,Ц C,Ч Ch,Ш Sh,Щ Sh,Ъ U,Ы Y,Ь ,Э E,Ю Yu,Я Ya,а a,б b,в v,г g,д d,е e,ж zh,з z,и i,й j,к k,л l,м m,н n,о o,п p,р r,с s,т t,у u,ф f,х h,ц c,ч ch,ш sh,щ sh,ъ u,ы y,ь ,э e,ю yu,я ya,ё yo,ђ dj,є ye,і i,ї yi,ј j,љ lj,њ nj,ћ c,џ dz,Ґ G,ґ g,฿ baht,ა a,ბ b,გ g,დ d,ე e,ვ v,ზ z,თ t,ი i,კ k,ლ l,მ m,ნ n,ო o,პ p,ჟ zh,რ r,ს s,ტ t,უ u,ფ f,ქ k,ღ gh,ყ q,შ sh,ჩ ch,ც ts,ძ dz,წ ts,ჭ ch,ხ kh,ჯ j,ჰ h,ẞ SS,Ạ A,ạ a,Ả A,ả a,Ấ A,ấ a,Ầ A,ầ a,Ẩ A,ẩ a,Ẫ A,ẫ a,Ậ A,ậ a,Ắ A,ắ a,Ằ A,ằ a,Ẳ A,ẳ a,Ẵ A,ẵ a,Ặ A,ặ a,Ẹ E,ẹ e,Ẻ E,ẻ e,Ẽ E,ẽ e,Ế E,ế e,Ề E,ề e,Ể E,ể e,Ễ E,ễ e,Ệ E,ệ e,Ỉ I,ỉ i,Ị I,ị i,Ọ O,ọ o,Ỏ O,ỏ o,Ố O,ố o,Ồ O,ồ o,Ổ O,ổ o,Ỗ O,ỗ o,Ộ O,ộ o,Ớ O,ớ o,Ờ O,ờ o,Ở O,ở o,Ỡ O,ỡ o,Ợ O,ợ o,Ụ U,ụ u,Ủ U,ủ u,Ứ U,ứ u,Ừ U,ừ u,Ử U,ử u,Ữ U,ữ u,Ự U,ự u,Ỳ Y,ỳ y,Ỵ Y,ỵ y,Ỷ Y,ỷ y,Ỹ Y,ỹ y,‘ \',’ \',“ ",” ",† +,• *,… ...,₠ ecu,₢ cruzeiro,₣ french franc,₤ lira,₥ mill,₦ naira,₧ peseta,₨ rupee,₩ won,₪ new shequel,₫ dong,€ euro,₭ kip,₮ tugrik,₯ drachma,₰ penny,₱ peso,₲ guarani,₳ austral,₴ hryvnia,₵ cedi,₹ indian rupee,₽ russian ruble,₿ bitcoin,℠ sm,™ tm,∂ d,∆ delta,∑ sum,∞ infinity,♥ love,元 yuan,円 yen,﷼ rial';
    var defReplacement = {};
    REPLACEMENT.split(',').forEach(function (item) {
        item = item.split(' ');
        defReplacement[item[0]] = item[1];
    });
    defReplacement[' '] = '_';
    var tempReplacement = union(replacement !== null && replacement !== void 0 ? replacement : {}, defReplacement);
    return str
        .split('')
        .reduce(function (total, char) { return total + (tempReplacement[char] || char); }, '')
        .replace(regForbidden, '');
}
/**
 * 截取字符串，使其长度为指定值，包含省略符。
 * @example
 * truncate('HXB HXB HXB HXB HXB HXB', 12); /// 'HXB HXB H...'
 * truncate('OQM-OQM-OQM-OQM-OQM-OQM', 10, { ellipsis: '～', separator: '-' }); /// 'OQM-OQM～'
 * @param txt 字符串值
 * @param width 指定长度
 * @param options 截取配置
 * @returns
 * @category String-字符串
 */
function truncate(txt, width, options) {
    var defOptions = {
        ellipsis: '...',
        separator: undefined,
    };
    var tempOpts = union(options !== null && options !== void 0 ? options : {}, defOptions);
    var ellipsis = tempOpts.ellipsis, separator = tempOpts.separator;
    var len = txt.length;
    if (width >= len)
        return txt;
    var end = width - ellipsis.length;
    if (end < 1)
        return ellipsis;
    var ret = txt.slice(0, end);
    if (isUndef(separator))
        return ret + ellipsis;
    if (txt.indexOf(separator, end) !== end) {
        var idx = ret.lastIndexOf(separator);
        if (idx > -1) {
            ret = ret.slice(0, idx);
        }
    }
    return ret + ellipsis;
}
/**
 * 格式化 JSON 字符串
 * @example
 * formatJSON({ a: 123, b: 456 }); /// '{\n  "a": 123,\n  "b": 456\n}'
 * formatJSON('123'); /// '"123"'
 * formatJSON(123); /// '123'
 * formatJSON(null); /// 'null'
 * formatJSON(true); /// 'true'
 * formatJSON(undefined); /// 'undefined'
 * formatJSON(new Date()); /// '"2023-03-02T10:02:42.019Z"'
 * @param value 值
 * @returns
 * @category JSON-相关
 */
function formatJSON(value) {
    var _a;
    try {
        // JSON.stringify(value, ['key']); // 只取对象某个字段
        return (_a = JSON.stringify(value, null, 2)) !== null && _a !== void 0 ? _a : 'undefined';
    }
    catch (error) {
        console.error(error);
        return "".concat(value);
    }
}
/**
 * 解析 JSON 字符串
 * @example
 * parseJSON('{"name":"leo", "age":20}'); /// {"name": "leo", "age": 20}
 * parseJSON(123); /// 123
 * parseJSON(true); /// true
 * parseJSON(null); /// null
 * parseJSON('test error'); /// null
 * @param value 需要解析的值
 * @returns
 * @category JSON-相关
 */
function parseJSON(value) {
    try {
        return JSON.parse(value);
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
/**
 * 将任意值序列化为 JSON 字符串，处理无法序列化的情况。
 * @example
 * stringifyJSON({ name: 'leo', age: 20 }); /// '{"name":"leo","age":20}'
 * stringifyJSON(123); /// '123'
 * stringifyJSON(true); /// 'true'
 * stringifyJSON(null); /// 'null'
 * stringifyJSON(() => {}); /// ''
 * stringifyJSON(Symbol('test')); /// ''
 * @param value 需要序列化的值
 * @returns
 * @category JSON-相关
 */
function stringifyJSON(value) {
    try {
        return JSON.stringify(value);
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
/**
 * 检查是否为 QQ 号
 * @example
 * isQQ('1005760694'); /// true
 * isQQ('123456789101'); /// false
 * @param value 字符串值
 * @returns
 * @category String-字符串
 */
function isQQ(value) {
    var reg = /^[1-9][0-9]{4,10}$/;
    return reg.test(value);
}
/**
 * 是否全为英文
 * @example
 * isEnglish('Aa'); /// true
 * isEnglish('a1'); /// false
 * @param value 字符串值
 * @returns
 * @category String-字符串
 */
function isEnglish(value) {
    var reg = /^[a-zA-Z]+$/;
    return reg.test(value);
}
/**
 * 是否全为英文
 * @example
 * hasSpecialChar('Aa('); /// true
 * hasSpecialChar('a1'); /// false
 * @param value 字符串值
 * @returns
 * @category String-字符串
 */
function hasSpecialChar(value) {
    if (value) {
        // 英文符号
        var containSpecialForEnglish = RegExp(
        // eslint-disable-next-line no-useless-escape
        /[(\s)(\`)(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/);
        // 中文符号
        var containSpecialForChinese = RegExp(
        // eslint-disable-next-line no-useless-escape
        /[(\·)(\~)(\！)(\￥)(\%)(\……)(\&)(\*)(\（)(\）)(\——)(\【)(\】)(\；)(\：)(\”)(\“)(\’)(\，)(\《)(\。)(\》)(\？)(\、)(\‘)(\’)]+/);
        return containSpecialForEnglish.test(value) || containSpecialForChinese.test(value);
    }
    return false;
}
/**
 * 判断数据是否为座机号(固定电话)
 * @example
 * isTel('0731-24722145'); /// true
 * isTel('13579246810'); /// false
 * @param value 字符串值
 * @returns
 * @category String-字符串
 */
function isTel(value) {
    if (value.match(/^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/) == null) {
        return false;
    }
    else {
        return true;
    }
}
/**
 * 是否全为中文
 * @example
 * isChinese('呜呜呜'); /// true
 * isChinese('我 1'); /// false
 * @param value 字符串值
 * @returns
 * @category String-字符串
 */
function isChinese(value) {
    return /^[\u4E00-\u9FA5]*$/.test(value);
}
/**
 * 判断是否为统一社会信用代码
 * @example
 * isCreditCode('9144030071526726XG'); /// true
 * isCreditCode('12312312312'); /// false
 * @param value 字符串值
 * @returns
 * @category String-字符串
 */
function isCreditCode(value) {
    var reg = /^[0-9A-Z]+$/;
    // 18 位校验及大写校验
    if (value.length != 18 || reg.test(value) == false) {
        return false;
    }
    else {
        // 统一社会信用代码的每一个值
        var AnCode = void 0;
        // 统一社会信用代码每一个值的权重
        var AnCodeValue = void 0;
        var total = 0;
        // 加权因子
        var weightedFactors = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];
        // 不用 I 、 O 、 S 、 V 、 Z
        var str = "".concat(BASE_NUMBER, "ABCDEFGHJKLMNPQRTUWXY");
        for (var i = 0; i < value.length - 1; i++) {
            AnCode = value.substring(i, i + 1);
            AnCodeValue = str.indexOf(AnCode);
            total = total + AnCodeValue * weightedFactors[i];
            // 权重与加权因子相乘之和
        }
        var logicCheckCode = 31 - (total % 31);
        if (logicCheckCode == 31) {
            logicCheckCode = 0;
        }
        var Str = '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,T,U,W,X,Y';
        var Array_Str = Str.split(',');
        logicCheckCode = Array_Str[logicCheckCode];
        var checkCode = value.substring(17, 18);
        if (logicCheckCode != checkCode) {
            return false;
        }
        return true;
    }
}
/**
 * 判断是否为银行卡号
 * @example
 * isBankCard('6217003810026896707'); /// true
 * isBankCard('12312312312'); /// false
 * @param value 字符串值
 * @returns
 * @category String-字符串
 */
function isBankCard(value) {
    if ('' == value.trim() || undefined == value) {
        return false;
    }
    // 取出最后一位
    var lastNum = value.substring(value.length - 1);
    // 前 15 或 18 位
    var first15Num = value.substring(0, value.length - 1);
    var newArr = [];
    for (var i = first15Num.length - 1; i > -1; i--) {
        // 前 15 或 18 位倒序存进数组
        newArr.push(first15Num.substring(i, i + 1));
    }
    // 奇数位*2 的积 < 9
    var arrJiShu = [];
    // 奇数位*2 的积 > 9
    var arrJiShu2 = [];
    // 偶数位数组
    var arrOuShu = [];
    for (var j = 0; j < newArr.length; j++) {
        if ((j + 1) % 2 == 1) {
            // 奇数位
            if (parseInt(newArr[j]) * 2 < 9) {
                arrJiShu.push(parseInt(newArr[j]) * 2);
            }
            else {
                arrJiShu2.push(parseInt(newArr[j]) * 2);
            }
        }
        else {
            // 偶数位
            arrOuShu.push(newArr[j]);
        }
    }
    // 奇数位*2 > 9 的分割之后的数组个位数
    var jsShuChild1 = [];
    // 奇数位*2 > 9 的分割之后的数组十位数
    var jsShuChild2 = [];
    for (var h = 0; h < arrJiShu2.length; h++) {
        jsShuChild1.push(parseInt(arrJiShu2[h]) % 10);
        jsShuChild2.push(parseInt(arrJiShu2[h]) / 10);
    }
    // 奇数位*2 < 9 的数组之和
    var sumJiShu = 0;
    // 偶数位数组之和
    var sumOuShu = 0;
    // 奇数位*2 > 9 的分割之后的数组个位数之和
    var sumJiShuChild1 = 0;
    // 奇数位*2 > 9 的分割之后的数组十位数之和
    var sumJiShuChild2 = 0;
    var sumTotal = 0;
    for (var m = 0; m < arrJiShu.length; m++) {
        sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
    }
    for (var n = 0; n < arrOuShu.length; n++) {
        sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
    }
    for (var p = 0; p < jsShuChild1.length; p++) {
        sumJiShuChild1 = sumJiShuChild1 + parseInt(jsShuChild1[p]);
        sumJiShuChild2 = sumJiShuChild2 + parseInt(jsShuChild2[p]);
    }
    // 计算总和
    sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);
    // 计算 LuhM 值
    var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
    var LuhM = 10 - k;
    if (lastNum == LuhM) {
        return true;
    }
    else {
        return false;
    }
}
/**
 * 密码强度等级检测(-1~5)
 * @example
 * checkPassWordLevel('123'); /// -1
 * checkPassWordLevel('123456'); /// 1
 * checkPassWordLevel('12345678'); /// 2
 * checkPassWordLevel('12345678.'); /// 3
 * checkPassWordLevel('123456789654321.'); /// 4
 * checkPassWordLevel('123456789654321.H'); /// 5
 * @param passWord 字符串值-密码
 * @returns
 * @category String-字符串
 */
function checkPassWordLevel(passWord) {
    var a = /[^ \f\n\r\t\v\da-zA-Z]/, b = /\d/, c = /[a-zA-Z]/;
    var d = /^[^ \f\n\r\t\v\da-zA-Z]+$/, e = /^\d+$/, f = /^[a-zA-Z]+$/;
    if (6 <= passWord.length) {
        if (a.test(passWord) && b.test(passWord) && c.test(passWord)) {
            if (8 > passWord.length) {
                return 2;
            }
            if (12 > passWord.length) {
                return 3;
            }
            if (15 > passWord.length) {
                return 4;
            }
            if (15 <= passWord.length) {
                return 5;
            }
        }
        if ((a.test(passWord) && b.test(passWord)) ||
            (a.test(passWord) && c.test(passWord)) ||
            (b.test(passWord) && c.test(passWord))) {
            if (8 > passWord.length) {
                return 2;
            }
            if (12 > passWord.length) {
                return 3;
            }
            if (15 > passWord.length) {
                return 4;
            }
            if (15 <= passWord.length) {
                return 4;
            }
        }
        if (d.test(passWord) || e.test(passWord) || f.test(passWord)) {
            if (8 <= passWord.length) {
                return 2;
            }
        }
        return 1;
    }
    return -1;
}
/**
 * 获取汉字拼音或首字母
 * @example
 * getPinYin('你好'); /// 'NiHao'
 * getPinYin('你好', true); /// 'NH'
 * getPinYin('贺'); /// 'He'
 * @param str 字符串值
 * @param extractFirst 是否只获取首字母
 * @returns
 * @category String-字符串
 */
function getPinYin(str, extractFirst) {
    if (extractFirst === void 0) { extractFirst = false; }
    var i, tmp, key, result = '', flag, firstChar;
    for (i = 0; i < str.length; i++) {
        tmp = str.substring(i, i + 1);
        flag = false;
        for (key in PY_MAPS) {
            if (isStr(PY_MAPS[key]) && PY_MAPS[key].indexOf(tmp) != -1) {
                firstChar = key.substring(0, 1).toUpperCase();
                if (true == extractFirst) {
                    result += firstChar;
                }
                else {
                    result += firstChar + key.substring(1, key.length).toLowerCase();
                }
                flag = true;
                break;
            }
        }
        if (!flag) {
            result += tmp;
        }
    }
    return result;
}
/**
 * 强制转换扫描字符串的特殊字符
 * `/(=)|(<)|(>)|(《)|(》)|(&)|(%)|(\^)|(!)|(~)|(#)|(@)|(:)|(\s)|(')|(")|(‘)|(’)|(“)|(”)/g`
 * @example
 * transferScanStr('=900182201234500'); /// '900182201234500'
 * transferScanStr('=<E5433000'); /// 'E5433000'
 * transferScanStr('@123', true); /// '123'
 * transferScanStr('#te st~ ', true); /// 'test'
 * transferScanStr(undefined); /// ''
 * @param value 值
 * @param higherReplace 严格替换
 * @returns
 * @category String-字符串
 */
function transferScanStr(value, higherReplace) {
    if (higherReplace === void 0) { higherReplace = false; }
    if (!value) {
        return '';
    }
    value = trim("".concat(value));
    if (higherReplace) {
        return "".concat(value).replace(/(=)|(<)|(>)|(《)|(》)|(&)|(%)|(\^)|(!)|(~)|(#)|(@)|(:)|(\s)|(')|(")|(‘)|(’)|(“)|(”)/g, '');
    }
    return "".concat(value).replace(/(=)|(<)|(>)|(《)|(》)|(&)|(%)|(\^)|(!)|(~)/g, '');
}
/**
 * 强制给字符串添加空格间隔
 * @example
 * addSpace('test'); /// 't e s t'
 * addSpace(null); /// ''
 * addSpace('123 45'); /// '1 2 3 4 5'
 * @param str 字符串
 * @returns
 * @category String-字符串
 */
function addSpace(str) {
    if (!str) {
        return '';
    }
    return "".concat(str).replaceAll(' ', '').split('').join(' ');
}
/**
 * 左边补某个字符
 * @example
 * leftJoin('1', 3, '0'); /// '001'
 * leftJoin(0, 3, 1); /// '110'
 * @param str 字符串
 * @returns
 * @category String-字符串
 */
function leftJoin(str, length, char) {
    if (length === void 0) { length = 2; }
    if (char === void 0) { char = 0; }
    return "".concat(str !== null && str !== void 0 ? str : '').padStart(Number(length), "".concat(char));
}
/**
 * 右边补某个字符
 * @example
 * rightJoin('1', 3, 'x'); /// '1xx'
 * rightJoin(0, 3, 1); /// '011'
 * @param str 字符串
 * @returns
 * @category String-字符串
 */
function rightJoin(str, length, char) {
    if (length === void 0) { length = 2; }
    if (char === void 0) { char = 0; }
    return "".concat(str !== null && str !== void 0 ? str : '').padEnd(Number(length), "".concat(char));
}
/**
 * 将字符串中的占位符替换为对应的值
 * @example
 * loadStr('hello ${test}', { test: 123 }); // 'hello 123'
 * loadStr('hello ${test}', undefined); // 'hello ${test}'
 * loadStr('hello ${test}', undefined, '$'); // 'hello $'
 * loadStr('hello ${name.first}-${name.last} ${ test }', { name: { first: 'A', last: 'B' }, test: '!' }); // 'hello A-B !'
 * @param str 原始字符串
 * @param params 参数对象，包含占位符的键值对。
 * @param emptyStr 对象不存在键值时的占位符，默认不变。
 * @returns
 * @category String-字符串
 */
function loadStr(str, params, emptyStr) {
    return str.replace(/\${([^${}]+)}/g, function (match, key) { return getV(emptyStr !== null && emptyStr !== void 0 ? emptyStr : '${' + trim(key) + '}', params, trim(key)); });
}

/**
 * 时间格式化
 * @example
 * formatDate(new Date(), 'yyyy-mm-dd hh:ii:ss Q S W', ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']); /// '2022-04-26 11:33:53 2 123 星期二'
 * // @before-2.2.0
 * formatDate(); /// '当前时间 yyyy-mm-dd hh:ii:ss'
 * // @since-2.2.0
 * formatDate(); /// undefined
 * @param date 时间
 * @param fmt 格式化模板 'yyyy-mm-dd hh:ii:ss'
 * @param weeks 星期对应数组 [7, 1, 2, 3, 4, 5, 6]
 * @returns
 * @category Date-日期相关
 */
function formatDate(date, fmt, weeks) {
    if (fmt === void 0) { fmt = 'yyyy-mm-dd hh:ii:ss'; }
    if (weeks === void 0) { weeks = [7, 1, 2, 3, 4, 5, 6]; }
    // @since 2.2.0
    if (!date) {
        return undefined;
    }
    var originDate = date;
    // @ts-ignore
    if (getType(date) === 'string' && !(date === null || date === void 0 ? void 0 : date.includes('T'))) {
        // 排除 UTC 时间
        // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
        // @ts-ignore
        date = originDate.replace(/-/g, '/');
    }
    date = new Date(date);
    if (isInvalidDate(date)) {
        return originDate;
    }
    var o = {
        'm+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'i+': date.getMinutes(),
        's+': date.getSeconds(),
        Q: Math.floor((date.getMonth() + 3) / 3),
        S: "".concat(date.getMilliseconds()).padStart(3, '0'),
        W: weeks[date.getDay()],
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, "".concat(date.getFullYear()).substring(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            // `${o[k]}`.padStart(RegExp.$1.length, 0) 也可以实现
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : "00".concat(o[k]).substring("".concat(o[k]).length));
        }
    }
    return fmt;
}
/**
 * 时间计算
 * @example
 * calcDate(new Date(), '-1 days'); /// date object
 * calcDate(new Date(), '-1 DAYS'); /// date object
 * calcDate(new Date(), ['-1 day', '+1 year', '-2 month', '2 weeks', '1 hour', '-3 minute', '45 seconds']); /// date object
 * @param date 时间
 * @param calcStrOrArr '1 days' or ['-1 day', '3 month']
 * @returns
 * @category Date-日期相关
 */
function calcDate(date, calcStrOrArr) {
    // @ts-ignore
    if (getType(date) === 'string' && !(date === null || date === void 0 ? void 0 : date.includes('T'))) {
        // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
        // @ts-ignore
        date = date.replace(/-/g, '/');
    }
    var oldDate = date ? new Date(date) : new Date();
    if (!calcStrOrArr) {
        return oldDate;
    }
    if (Array.isArray(calcStrOrArr)) {
        calcStrOrArr.forEach(function (calcStr) {
            oldDate = calcDate(oldDate, calcStr);
        });
    }
    else {
        var _a = __read(trim(calcStrOrArr, 'pro').split(' '), 2), val = _a[0], unit = _a[1];
        var newVal = Number(val);
        var newUnit = unit.toLowerCase();
        switch (newUnit) {
            case 'year':
            case 'years':
                oldDate.setFullYear(oldDate.getFullYear() + newVal);
                break;
            case 'month':
            case 'months':
                oldDate.setMonth(oldDate.getMonth() + newVal);
                break;
            case 'week':
            case 'weeks':
                oldDate.setDate(oldDate.getDate() + 7 * newVal);
                break;
            case 'day':
            case 'days':
                oldDate.setDate(oldDate.getDate() + newVal);
                break;
            case 'hour':
            case 'hours':
                oldDate.setHours(oldDate.getHours() + newVal);
                break;
            case 'minute':
            case 'minutes':
                oldDate.setMinutes(oldDate.getMinutes() + newVal);
                break;
            case 'second':
            case 'seconds':
                oldDate.setSeconds(oldDate.getSeconds() + newVal);
                break;
        }
    }
    return oldDate;
}
/**
 * 两个时间差距计算
 * @example
 * getDateDifference(new Date('2022-05-01'), new Date(), 'day'); /// 37
 * getDateDifference(new Date('2022-05-01'), new Date(), 'all'); /// {days: 37, hours: 8, minutes: 46, seconds: 47}
 * @param oldDate 久远一点的时间
 * @param nowDate 近一点的时间，默认当前时间。
 * @param type 计算方式，默认计算差距的精确天数、时分秒。
 * @returns
 * @category Date-日期相关
 */
function getDateDifference(oldDate, nowDate, type) {
    if (type === void 0) { type = 'all'; }
    // @ts-ignore
    if (getType(oldDate) === 'string' && !(oldDate === null || oldDate === void 0 ? void 0 : oldDate.includes('T'))) {
        // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
        // @ts-ignore
        oldDate = oldDate.replace(/-/g, '/');
    }
    // @ts-ignore
    if (getType(nowDate) === 'string' && !(nowDate === null || nowDate === void 0 ? void 0 : nowDate.includes('T'))) {
        // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
        // @ts-ignore
        nowDate = nowDate.replace(/-/g, '/');
    }
    oldDate = new Date(oldDate);
    nowDate = nowDate ? new Date(nowDate) : new Date();
    var diffTime = nowDate.getTime() - oldDate.getTime();
    switch (type.toLowerCase()) {
        case 'day':
        case 'days':
            return Math.floor(diffTime / 1000 / 60 / 60 / 24);
        case 'hour':
        case 'hours':
            return Math.floor(diffTime / 1000 / 60 / 60);
        case 'minute':
        case 'minutes':
            return Math.floor(diffTime / 1000 / 60);
        case 'second':
        case 'seconds':
            return Math.floor(diffTime / 1000);
        case 'all':
        default:
            return {
                days: Math.floor(diffTime / 1000 / 3600 / 24),
                hours: Math.floor((diffTime / 1000 / 60 / 60) % 24),
                minutes: Math.floor((diffTime / 1000 / 60) % 60),
                seconds: Math.floor((diffTime / 1000) % 60),
            };
    }
}
/**
 * 人性化时间
 * @example
 * timeSince(new Date()); /// '刚刚'
 * @param date 时间/string
 * @param longAgo 是否显示周月甚至更久
 * @param formatter 正常显示时的时间显示格式
 * @returns
 * @category Date-日期相关
 */
function timeSince(date, longAgo, formatter) {
    if (longAgo === void 0) { longAgo = false; }
    if (formatter === void 0) { formatter = 'yyyy-mm-dd hh:ii:ss'; }
    // @ts-ignore
    if (getType(date) === 'string' && !(date === null || date === void 0 ? void 0 : date.includes('T'))) {
        // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
        // @ts-ignore
        date = date.replace(/-/g, '/');
    }
    date = date ? new Date(date) : new Date();
    var dateTS = date.getTime();
    var seconds = Math.floor((new Date().getTime() - dateTS) / 1000);
    var interval = Math.floor(seconds / (24 * 3600));
    if (longAgo) {
        interval = Math.floor(seconds / (30 * 24 * 3600));
        if (interval >= 4) {
            return formatDate(date, formatter);
        }
        if (interval >= 1) {
            return interval + ' 月前';
        }
        interval = Math.floor(seconds / (7 * 24 * 3600));
        if (interval >= 1) {
            return interval + ' 周前';
        }
    }
    if (interval >= 8) {
        return formatDate(date, formatter);
    }
    interval = Math.floor(seconds / (24 * 3600));
    if (interval >= 1) {
        return interval + ' 天前';
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return interval + ' 小时前';
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return interval + ' 分钟前';
    }
    return '刚刚';
}
/**
 * 检查所提供的日期是否为工作日
 * @example
 * isWorkDay(new Date()); /// true
 * @param date 日期
 * @returns
 * @category Date-日期相关
 */
function isWeekday(date) {
    // @ts-ignore
    if (getType(date) === 'string' && !(date === null || date === void 0 ? void 0 : date.includes('T'))) {
        // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
        // @ts-ignore
        date = date.replace(/-/g, '/');
    }
    date = date ? new Date(date) : new Date();
    return date.getDay() % 6 !== 0;
}
/**
 * 获取日期所在的年份中的天数
 * @example
 * getDayInYear('2023/06/23'); /// 174
 * @param date 日期
 * @returns
 * @category Date-日期相关
 */
function getDayInYear(date) {
    // @ts-ignore
    if (getType(date) === 'string' && !(date === null || date === void 0 ? void 0 : date.includes('T'))) {
        // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
        // @ts-ignore
        date = date.replace(/-/g, '/');
    }
    date = date ? new Date(date) : new Date();
    // @ts-ignore
    return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
}
/**
 * 获取指定日期数目的数组
 * @example
 * getDateList(7, 'day'); /// 得到今天到未来 7 天的日期数组
 * getDateList(-7, 'day'); /// 得到今天到之前 7 天的日期数组
 * getDateList(7, 'year'); /// 得到今年到未来 7 年的日期数组
 * getDateList(7, 'month'); /// 得到本月到未来 7 个月的日期数组
 * getDateList(7, 'day', '2023-02-01'); /// 得到 2023-02-01 日到未来 7 天的日期数组
 * @param n 数目
 * @param type 类型
 * @param date 日期
 * @returns
 * @category Date-日期相关
 */
function getDateList(n, type, date) {
    var _a;
    if (type === void 0) { type = 'day'; }
    if (date === void 0) { date = new Date(); }
    // @ts-ignore
    if (getType(date) === 'string' && !(date === null || date === void 0 ? void 0 : date.includes('T'))) {
        // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
        // @ts-ignore
        date = date.replace(/-/g, '/');
    }
    // 包含当天
    var myDate = calcDate(new Date(date), "".concat(n > 0 ? n - 1 : n + 1, " ").concat(type));
    var dateArray = [];
    var dateTemp;
    var flag = n > 0 ? -1 : 1;
    var formatters = {
        year: 'yyyy',
        month: 'yyyy-mm',
        day: 'yyyy-mm-dd',
        hour: 'yyyy-mm-dd hh:00',
        minute: 'yyyy-mm-dd hh:ii',
        second: 'yyyy-mm-dd hh:ii:ss',
    };
    var tempN = Math.abs(n);
    for (var i = 0; i < tempN; i++) {
        dateTemp = (_a = formatDate(myDate, formatters[type])) !== null && _a !== void 0 ? _a : '-';
        dateArray.push(dateTemp);
        myDate = calcDate(dateTemp, "".concat(flag, " ").concat(type));
    }
    return flag === 1 ? dateArray : dateArray.reverse();
}
/**
 * 获取日期时间戳
 * @example
 * getDateTime(new Date()); /// time stamp
 * @param date 日期
 * @returns
 * @category Date-日期相关
 */
function getDateTime(date) {
    // @ts-ignore
    if (getType(date) === 'string' && !(date === null || date === void 0 ? void 0 : date.includes('T'))) {
        // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
        // @ts-ignore
        date = date.replace(/-/g, '/');
    }
    date = date ? new Date(date) : new Date();
    return date.getTime();
}
/**
 * 时间大小比较
 * -1(A<B), 1(A>B), 0(A=B)
 * @example
 * compareDate('2023-1-1'); /// 1
 * compareDate('2023-1-1 12:00:00', '2023-1-2 12:00:00'); /// -1
 * @param dateA 时间 A
 * @param dateB 时间 B
 * @returns
 * @category Date-日期相关
 */
function compareDate(dateA, dateB) {
    // @ts-ignore
    if (getType(dateA) === 'string' && !(dateA === null || dateA === void 0 ? void 0 : dateA.includes('T'))) {
        // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
        // @ts-ignore
        dateA = dateA.replace(/-/g, '/');
    }
    // @ts-ignore
    if (getType(dateB) === 'string' && !(dateB === null || dateB === void 0 ? void 0 : dateB.includes('T'))) {
        // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
        // @ts-ignore
        dateB = dateB.replace(/-/g, '/');
    }
    dateA = dateA ? new Date(dateA) : new Date();
    dateB = dateB ? new Date(dateB) : new Date();
    var result = dateA.getTime() - dateB.getTime();
    if (result < 0) {
        return -1;
    }
    if (result > 0) {
        return 1;
    }
    return 0;
}
/**
 * 倒计时
 * @example
 * console.time('test'); countdown(10, (x) => console.log('--->', x), () => console.timeEnd('test')); /// test: 10023.636962890625 ms
 * @param seconds 秒数
 * @param callback 回调函数
 * @param finishCallBack 完成回调函数
 * @returns
 * @category Date-日期相关
 */
function countdown(seconds, callback, finishCallBack) {
    var timer = setInterval(function () {
        console.log('js-xxx:countdown-timer-count--->', seconds);
        try {
            callback && callback(seconds);
            seconds--;
            if (seconds === 0) {
                clearInterval(timer);
                finishCallBack && finishCallBack();
            }
        }
        catch (e) {
            clearInterval(timer);
        }
    }, 1000);
    return timer;
}
/**
 * 转换音视频时长，把秒数转换为 hh:ii:ss 格式。
 * @example
 * transferSeconds(1234); /// '00:20:34'
 * transferSeconds(1234, true); /// {h: '00', i: 20, s: 34}
 * @param duration 时间/秒
 * @param returnObj 是否返回对象
 * @returns
 * @category Date-日期相关
 */
function transferSeconds(duration, returnObj) {
    if (returnObj === void 0) { returnObj = false; }
    // padStart
    var h = Math.floor(duration / 3600) < 10 ? '0' + Math.floor(duration / 3600) : Math.floor(duration / 3600);
    var i = Math.floor((duration / 60) % 60) < 10 ? '0' + Math.floor((duration / 60) % 60) : Math.floor((duration / 60) % 60);
    var s = Math.floor(duration % 60) < 10 ? '0' + Math.floor(duration % 60) : Math.floor(duration % 60);
    if (returnObj) {
        return {
            h: h,
            i: i,
            s: s,
        };
    }
    var res = '';
    if (Number(h) > 0) {
        res += h;
    }
    else {
        res += '00';
    }
    res += ':';
    if (Number(i) > 0) {
        res += i;
    }
    else {
        res += '00';
    }
    res += ':';
    if (Number(s) > 0) {
        res += s;
    }
    else {
        res += '00';
    }
    return res;
}
/**
 * 获取月份天数
 * @example
 * getMonthDayCount(new Date()); /// 30
 * @param date 日期
 * @returns
 * @category Date-日期相关
 */
function getMonthDayCount(date) {
    // @ts-ignore
    if (getType(date) === 'string' && !(date === null || date === void 0 ? void 0 : date.includes('T'))) {
        // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
        // @ts-ignore
        date = date.replace(/-/g, '/');
    }
    date = date ? new Date(date) : new Date();
    var fullYear = date.getFullYear();
    var month = date.getMonth();
    var isLeapYear = (fullYear % 4 === 0 && fullYear % 100 !== 0) || fullYear % 400 === 0;
    var monthDayCount = isLeapYear
        ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] // 闰年
        : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 平年
    return monthDayCount[month];
}
/**
 * 获取标准时间 UTC
 * 适用于本地时间不准确或者获取其他时区时间的情况
 * @example
 * getUTCTime(8); /// 中国标准时间-东八区
 * @param timezone 时区数字，东八区为 8，西八区为 -8 。
 * @returns
 * @category Date-日期相关
 */
function getUTCTime(timezone) {
    if (timezone === void 0) { timezone = 0; }
    var d = new Date();
    var len = d.getTime();
    // 本地时间与 UTC 时间的时间偏移差
    var offset = d.getTimezoneOffset() * 60000;
    // 得到现在的 UTC 时间，各时区 UTC 时间相同。
    var utcTime = len + offset;
    // 得到时区标准时间
    return new Date(utcTime + 3600000 * timezone);
    // 得到 UTC 时间戳
    // return new Date(utcTime).getTime();
    // 得到时区时间戳
    // return new Date(utcTime + 3600000 * timezone).getTime();
}
/**
 * 获取当前时区的标准格式表示。
 * @example
 * // 如果时区为 UTC+8
 * getTimezone(); // '+8'
 * // 如果时区为 UTC-5
 * getTimezone(); // '-5'
 * // 如果时区为 UTC
 * getTimezone(); // '+0'
 * @returns
 * @category Date-日期相关
 */
function getTimezone() {
    var timezoneOffset = -new Date().getTimezoneOffset() / 60;
    return timezoneOffset >= 0 ? "+".concat(timezoneOffset) : "".concat(timezoneOffset);
}

/* eslint-disable max-lines */
/**
 * 开启全屏
 * @example
 * openFullscreen(); /// 开启全屏
 * @param element 元素
 * @returns
 * @category Dom-工具方法
 */
function openFullscreen(element) {
    if (element === void 0) { element = document.body; }
    if (element.requestFullscreen) {
        element.requestFullscreen();
    }
    else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    }
    else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
    else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen();
    }
}
/**
 * 关闭全屏
 * @example
 * closeFullscreen(); /// 关闭全屏
 * @returns
 * @category Dom-工具方法
 */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
        // @ts-ignore
    }
    else if (document.msExitFullscreen) {
        // @ts-ignore
        document.msExitFullscreen();
        // @ts-ignore
    }
    else if (document.mozCancelFullScreen) {
        // @ts-ignore
        document.mozCancelFullScreen();
        // @ts-ignore
    }
    else if (document.webkitExitFullscreen) {
        // @ts-ignore
        document.webkitExitFullscreen();
    }
}
// eslint-disable-next-line spellcheck/spell-checker
/**
 * 字符串转实体字符
 * @example
 * str2html('<>&"'); /// '&lt;&gt;&amp;&quot;'
 * @param str 字符串
 * @returns
 * @category Custom-转码
 */
function str2html(str) {
    var div = document.createElement('div');
    div.textContent = str;
    var specialChars = div.innerHTML;
    return specialChars;
}
/**
 * 实体字符转字符串
 * @example
 * html2str('&lt;&gt;&amp;&quot;'); /// '<>&"'
 * @param value 实体字符串
 * @returns
 * @category Custom-转码
 */
function html2str(value) {
    var div = document.createElement('div');
    div.innerHTML = value;
    var str = div.textContent;
    return str;
}
/**
 * 插入某元素到指定 Element 之后
 * @example
 * insertAfter(document.getElementById('a'), document.getElementById('b'));
 * @param newElement 某元素
 * @param targetElement 指定元素
 * @returns
 * @category Dom-工具方法
 */
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastElementChild === targetElement) {
        parent.appendChild(newElement);
    }
    else {
        parent.insertBefore(newElement, targetElement.nextElementSibling);
    }
}
/**
 * Y 轴滚动到指定位置
 * @example
 * scrollYTo(0); /// 滚动到顶部
 * scrollYTo('start', null, document.documentElement); /// 滚动到顶部
 * scrollYTo('end', (percent) => console.log(percent), document.querySelector('body')); /// 滚动到底部
 * @param targetVal 'start' | 'end' | number
 * @param callback 回调
 * @param dom 元素对象
 * @returns
 * @category Scroll-滚动相关
 */
function scrollYTo(targetVal, callback, dom) {
    var _a, _b;
    if (dom === void 0) { dom = document.documentElement; }
    var customVal = {
        start: 0,
        end: dom.scrollHeight - dom.clientHeight,
    };
    targetVal = (_a = customVal[targetVal]) !== null && _a !== void 0 ? _a : targetVal;
    if (callback && targetVal != dom.scrollTop) {
        var timer_1;
        var cancel_1 = setEventListener('scroll', function () {
            clearTimeout(timer_1);
            callback(getScrollPercent('Y', dom));
            timer_1 = setTimeout(cancel_1, 100);
        }, false, window);
        // 防止位置已经到极限了，没触发 scroll 事件。
        timer_1 = setTimeout(cancel_1, 100);
    }
    window.scroll({ top: (_b = customVal[targetVal]) !== null && _b !== void 0 ? _b : targetVal, behavior: 'smooth' });
    /* 新版 demo */
    // // back2top
    // window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    // // back2bottom
    // document.documentElement.scroll({ top: document.documentElement.scrollHeight, left: 0, behavior: 'smooth' });
    // window.scroll({ top: document.body.scrollHeight, left: 0, behavior: 'smooth' });
    /* 新版 demo */
    /* 旧版函数 */
    // clearInterval(dom.timer);
    // dom.timer = setInterval(function () {
    //   let step = (targetVal - dom.scrollY) / 10;
    //   step = step > 0 ? Math.ceil(step) : Math.floor(step);
    //   if (dom.scrollY == targetVal) {
    //     clearInterval(dom.timer);
    //     callback && callback();
    //   }
    //   window.scroll(0, dom.scrollY + step);
    // }, 15);
    // // scrollTo();
    // // scrollTo(window, document.documentElement.scrollHeight - document.body.clientHeight, () => console.log('finish'));
    // function _customScrollEvent() {
    //   // @ts-ignore
    //   const div = this.document.getElementById('back2top');
    //   if (window.scrollY > 150) {
    //     div.style.display = 'block';
    //     div.style.opacity = 0.5;
    //   } else {
    //     div.style.display = 'none';
    //   }
    // }
    /* 旧版函数 */
}
/**
 * X 轴滚动到指定位置
 * @example
 * scrollXTo(0); /// 滚动到左侧
 * scrollXTo('start', null, document.documentElement); /// 滚动到左侧
 * scrollXTo('end', (percent) => console.log(percent), document.querySelector('body')); /// 滚动到右侧
 * @param targetVal 'start' | 'end' | number
 * @param callback 回调
 * @param dom 元素对象
 * @returns
 * @category Scroll-滚动相关
 */
function scrollXTo(targetVal, callback, dom) {
    var _a, _b;
    if (dom === void 0) { dom = document.documentElement; }
    var customVal = {
        start: 0,
        end: dom.scrollWidth - dom.clientWidth,
    };
    targetVal = (_a = customVal[targetVal]) !== null && _a !== void 0 ? _a : targetVal;
    if (callback && targetVal != dom.scrollLeft) {
        var timer_2;
        var cancel_2 = setEventListener('scroll', function () {
            clearTimeout(timer_2);
            callback(getScrollPercent('X', dom));
            timer_2 = setTimeout(cancel_2, 100);
        }, false, window);
        // 防止位置已经到极限了，没触发 scroll 事件。
        timer_2 = setTimeout(cancel_2, 100);
    }
    window.scroll({ left: (_b = customVal[targetVal]) !== null && _b !== void 0 ? _b : targetVal, behavior: 'smooth' });
}
/**
 * 将元素滚动到视野范围
 * @example
 * scrollIntoView(document.querySelector('.test')); /// test 元素滚动到视野范围
 * scrollIntoView(document.querySelector('.test'), 'start'); /// test 元素滚动到视野范围顶部
 * @param dom 元素对象
 * @param targetVal 'start' | 'end' | 'center' | 'nearest'
 * @returns
 * @category Scroll-滚动相关
 */
function scrollToView(dom, targetVal) {
    if (dom === void 0) { dom = document.documentElement; }
    if (targetVal === void 0) { targetVal = 'center'; }
    dom.scrollIntoView({
        behavior: 'smooth',
        block: targetVal,
        inline: targetVal,
    });
    // 「 start 」「默认值」元素顶部和滚动容器顶部对齐
    // 「 center 」元素和滚动容器居中对齐
    // 「 end 」元素底部和滚动容器底部对齐
    // 「 nearest 」如果已经在视野范围内，就不滚动，否则就滚动到顶部或者底部（哪个更靠近就滚到哪里）。
}
/**
 * 获取滚动条百分比
 * @example
 * getScrollPercent(document.documentElement, 'Y'); /// 0.581134549876
 * @param direction X/Y 轴的进度条
 * @param dom 元素
 * @returns
 * @category Scroll-滚动相关
 */
function getScrollPercent(direction, dom) {
    if (direction === void 0) { direction = 'Y'; }
    if (dom === void 0) { dom = document.documentElement; }
    var percent;
    try {
        if (direction === 'X') {
            percent = Number(dom.scrollLeft.toFixed(2)) == 0 ? 0 : dom.scrollLeft / (dom.scrollWidth - dom.clientWidth);
        }
        else {
            percent = Number(dom.scrollTop.toFixed(2)) == 0 ? 0 : dom.scrollTop / (dom.scrollHeight - dom.clientHeight);
        }
    }
    catch (e) {
        console.log('js-xxx:getScrollPercentError--->', e);
        percent = -1;
    }
    return percent;
    // // scroll percent
    // window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    // document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
}
/**
 * 获取最近的可滚动父元素。
 * 支持普通 DOM 、 Shadow DOM 和 iframe 。
 * @example
 * getScrollParent(document.querySelector('.form-error')); // Form
 * getScrollParent(); /// document.documentElement
 * @param element 目标元素
 * @returns
 * @category Scroll-滚动相关
 */
function getScrollParent(element) {
    var _a;
    var parent = element === null || element === void 0 ? void 0 : element.parentElement;
    while (parent) {
        var style = window.getComputedStyle(parent);
        var isScrollableY = style.overflowY === 'auto' || style.overflowY === 'scroll';
        var isScrollableX = style.overflowX === 'auto' || style.overflowX === 'scroll';
        var canScrollY = parent.scrollHeight > parent.clientHeight;
        var canScrollX = parent.scrollWidth > parent.clientWidth;
        if ((isScrollableY && canScrollY) || (isScrollableX && canScrollX)) {
            return parent;
        }
        parent = parent.parentElement;
    }
    // 处理 Shadow DOM
    var rootNode = element === null || element === void 0 ? void 0 : element.getRootNode();
    if (rootNode instanceof ShadowRoot) {
        return rootNode.host;
    }
    // 处理 iframe
    if ((element === null || element === void 0 ? void 0 : element.ownerDocument) !== document) {
        return (_a = element === null || element === void 0 ? void 0 : element.ownerDocument) === null || _a === void 0 ? void 0 : _a.documentElement;
    }
    return document.documentElement; // 如果没有找到可滚动的父元素，返回 `document.documentElement`
}
/**
 * 滚动到指定元素，并将其显示在可滚动容器的中间。
 * 适用于表单报错时定位报错元素，支持嵌套滚动容器。
 * @param options 配置对象，包含以下属性：
 *   - {string} selector - 目标元素的 CSS 选择器。
 *   - {number} [delay=0] - 滚动执行的延迟时间（毫秒）。
 *   - {boolean} [parent=false] - 是否在主应用中查找元素（适用于 Shadow DOM 情况）。
 * @example
 * // 立即滚动到指定元素
 * scrollToElement({
 *   selector: '#error-element',
 *   delay: 0,
 *   parent: true,
 * });
 * // 延迟滚动到指定元素
 * scrollToElement({
 *   selector: '.form-error',
 *   delay: 100,
 * });
 * @returns
 * @category Scroll-滚动相关
 */
function scrollToElement(options) {
    var selector = options.selector, _a = options.delay, delay = _a === void 0 ? 0 : _a, _b = options.parent, parent = _b === void 0 ? false : _b;
    var performScroll = function () {
        // 选择合适的文档上下文
        var root = parent ? document.documentElement : document;
        var element = root.querySelector(selector);
        if (!element) {
            console.warn("Element with selector \"".concat(selector, "\" not found."));
            return;
        }
        // 获取目标元素的可滚动父容器
        var scrollContainer = getScrollParent(element);
        if (!scrollContainer) {
            console.warn("No scroll parent found for element with selector \"".concat(selector, "\"."));
            return;
        }
        // 计算滚动位置
        var elementRect = element.getBoundingClientRect();
        var containerRect = scrollContainer.getBoundingClientRect();
        var scrollTop = scrollContainer.scrollTop +
            elementRect.top -
            containerRect.top -
            containerRect.height / 2 +
            elementRect.height / 2;
        // 执行滚动操作
        scrollContainer.scrollTo({
            top: scrollTop,
            behavior: 'smooth',
        });
    };
    if (delay > 0) {
        setTimeout(performScroll, delay);
    }
    else {
        performScroll();
    }
}
/**
 * 找元素的第 n 级父元素
 * @example
 * findParents(document.getElementById('test'), 3); /// #test 的第三个父元素
 * @param element 指定元素
 * @param n 第几个
 * @returns
 * @category Dom-工具方法
 */
function findParents(element, n) {
    while (element && n) {
        element = element.parentElement ? element.parentElement : element.parentNode;
        n--;
    }
    return element;
}
/**
 * 找元素的所有子元素，解决浏览器兼容问题。
 * @example
 * findChildren(document.getElementById('test')); /// #test 的所有子元素数组
 * @param element 指定元素
 * @returns
 * @category Dom-工具方法
 */
function findChildren(element) {
    var children = element.childNodes, result = [], len = children.length;
    for (var i = 0; i < len; i++) {
        if (children[i].nodeType === 1) {
            result.push(children[i]);
        }
    }
    return result;
}
/**
 * 获取窗口尺寸
 * @example
 * getViewportSize(); /// { width: 1280, height: 649 }
 * @returns
 * @category Dom-工具方法
 */
function getViewportSize() {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight,
        };
    }
    else {
        // ie8 及其以下
        if (document.compatMode === 'BackCompat') {
            // 怪异模式
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight,
            };
        }
        else {
            // 标准模式
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight,
            };
        }
    }
}
/**
 * 获取任一元素的 style 任意属性
 * @example
 * getStyle(document.getElementById('test'), 'width'); /// #test 的 width 属性
 * @param element 指定元素
 * @param name 属性名称
 * @returns
 * @category Dom-工具方法
 */
function getStyleByName(element, name) {
    return window.getComputedStyle ? window.getComputedStyle(element, null)[name] : element.currentStyle[name];
}
/**
 * 添加 link 标签
 * @example
 * appendLink('favicon', 'favicon'); /// 添加一个 link 标签
 * @param linkUrl 链接地址
 * @param rel 类型
 * @returns
 * @category Dom-工具方法
 */
function appendLink(linkUrl, rel) {
    if (rel === void 0) { rel = 'stylesheet'; }
    var link = document.createElement('link');
    link.rel = rel;
    link.href = linkUrl;
    document.head.appendChild(link);
    return link;
}
/**
 * 添加 script 标签
 * @example
 * appendScript('./test.js'); /// 添加一个 script 标签
 * @param scriptUrl 脚本地址
 * @param async 是否异步
 * @param defer 是否延迟加载
 * @returns
 * @category Dom-工具方法
 */
function appendScript(scriptUrl, async, defer) {
    if (async === void 0) { async = false; }
    if (defer === void 0) { defer = false; }
    var script = document.createElement('script');
    script.src = scriptUrl;
    script.async = async;
    script.defer = defer;
    document.head.appendChild(script);
    return script;
}
/**
 * 下载一个链接文档
 * @example
 * download('https://xxx.com/xxx', 'xxx'); /// 下载后端返回的流
 * @param link 链接
 * @param name 文件名称(可选，默认以链接最好一段作为名称，填写时可不带后缀自动识别，写了后缀会以写的后缀为准。)
 * @returns
 * @category Tools-下载/文件相关
 */
function download(link, name) {
    if (!name) {
        name = link.slice(link.lastIndexOf('/') + 1);
    }
    var eleLink = document.createElement('a');
    eleLink.download = name;
    eleLink.style.display = 'none';
    eleLink.href = link;
    document.body.appendChild(eleLink);
    eleLink.click();
    document.body.removeChild(eleLink);
}
/**
 * 在浏览器中自定义下载一些内容，与 download 不同的是，downloadContent 采用 Blob 可能会有长度限制。
 * @example
 * downloadContent('test.txt', 'test txt content'); /// 下载返回的流
 * downloadContent('test.json', JSON.stringify({content: 'test json'})); /// 下载返回的流
 * @param name 文件名称(需带后缀)，默认 txt 。
 * @param content 内容 BlobPart | any
 * @returns
 * @category Tools-下载/文件相关
 */
function downloadContent(name, content) {
    if (!name) {
        name = 'unknown';
    }
    try {
        if (!(content instanceof Blob)) {
            content = new Blob([content]);
        }
        var link_1 = URL.createObjectURL(content);
        download(link_1, name);
        setTimeout(function () {
            URL.revokeObjectURL(link_1);
        }, 0);
    }
    catch (e) {
        console.log('js-xxx:downloadContentError--->', e);
    }
}
/**
 * 给元素设置 marquee 内容滚动效果，支持来回滚动，正常跑马灯，无限无缝滚动。
 * 一般来说设置两层，滚动的区间就是父元素的大小。
 * 若 #demo 高度小于 container，除非 loopType 设置 infinite，否则不会有动画。
 * <div class="demo-container"><div id="#demo">...span.items...</div></div>
 * @example
 * marquee('#demo'); /// 默认横向正常滚动(loopType=normal)
 * marquee('.demo-y', {direction: 'Y', loopType: 'infinite', speed: 3}); /// Y 轴无限无缝滚动，speed > 0 越小速度越快。
 * marquee('.demo-x', {direction: 'X', loopType: 'origin', speed: 3, style: 'animation-delay:2s;', parentStyle: 'color:red;'}); /// X 轴无限来回滚动
 * @param selector 选择器字符串
 * @param options 动画配置
 * @returns
 * @category BXH-自定义动画
 */
function marquee(selector, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    try {
        var cssAnimation = '@keyframes marquee-ANIMATION_NAME{0%{transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0)}50%{transform:translate3d(X_TEMP_VAL,Y_TEMP_VAL,0);-webkit-transform:translate3d(X_TEMP_VAL,Y_TEMP_VAL,0);-moz-transform:translate3d(X_TEMP_VAL,Y_TEMP_VAL,0);-ms-transform:translate3d(X_TEMP_VAL,Y_TEMP_VAL,0);-o-transform:translate3d(X_TEMP_VAL,Y_TEMP_VAL,0)}100%{transform:translate3d(X_END_VAL,Y_END_VAL,0);-webkit-transform:translate3d(X_END_VAL,Y_END_VAL,0);-moz-transform:translate3d(X_END_VAL,Y_END_VAL,0);-ms-transform:translate3d(X_END_VAL,Y_END_VAL,0);-o-transform:translate3d(X_END_VAL,Y_END_VAL,0)}}';
        var tempId = selector.replace(/[.#]/g, '');
        var styleElId = "style-".concat(tempId);
        var $animationStyle = (_a = document.getElementById(styleElId)) !== null && _a !== void 0 ? _a : document.createElement('style');
        $animationStyle.id = styleElId;
        var $marqueeDom = document.querySelector(selector);
        var noAnimation = (options === null || options === void 0 ? void 0 : options.loopType) != 'infinite' && ($marqueeDom === null || $marqueeDom === void 0 ? void 0 : $marqueeDom.clientHeight) < ((_b = $marqueeDom === null || $marqueeDom === void 0 ? void 0 : $marqueeDom.parentElement) === null || _b === void 0 ? void 0 : _b.offsetHeight);
        $marqueeDom === null || $marqueeDom === void 0 ? void 0 : $marqueeDom.setAttribute('style', "overflow:visible;animation-name:marquee-".concat(tempId, ";animation-timing-function:linear;animation-iteration-count:infinite;animation-duration:").concat((_d = (((options === null || options === void 0 ? void 0 : options.direction) === 'Y' ? $marqueeDom.clientHeight : $marqueeDom.clientWidth) / 200) *
            ((_c = options === null || options === void 0 ? void 0 : options.speed) !== null && _c !== void 0 ? _c : 3)) !== null && _d !== void 0 ? _d : 5, "s;").concat(noAnimation ? 'animation-duration:0s;' : '').concat((_e = options === null || options === void 0 ? void 0 : options.style) !== null && _e !== void 0 ? _e : "".concat((options === null || options === void 0 ? void 0 : options.loopType) === 'origin'
            ? (options === null || options === void 0 ? void 0 : options.direction) === 'Y'
                ? 'padding-bottom:12px;'
                : 'padding-right:12px;'
            : '')));
        if ((options === null || options === void 0 ? void 0 : options.direction) === 'Y') {
            $animationStyle.innerHTML = cssAnimation
                .replace('ANIMATION_NAME', tempId)
                .replace(/X_TEMP_VAL/g, '0')
                .replace(/Y_TEMP_VAL/g, options.loopType === 'origin' ? "calc(-100% + ".concat((_g = (_f = $marqueeDom === null || $marqueeDom === void 0 ? void 0 : $marqueeDom.parentElement) === null || _f === void 0 ? void 0 : _f.offsetHeight) !== null && _g !== void 0 ? _g : 0, "px)") : '-50%')
                .replace(/X_END_VAL/g, '0')
                .replace(/Y_END_VAL/g, options.loopType === 'origin' ? '0' : '-100%');
        }
        else {
            $animationStyle.innerHTML = cssAnimation
                .replace('ANIMATION_NAME', tempId)
                .replace(/Y_TEMP_VAL/g, '0')
                .replace(/X_TEMP_VAL/g, (options === null || options === void 0 ? void 0 : options.loopType) === 'origin' ? "calc(-100% + ".concat((_j = (_h = $marqueeDom === null || $marqueeDom === void 0 ? void 0 : $marqueeDom.parentElement) === null || _h === void 0 ? void 0 : _h.offsetWidth) !== null && _j !== void 0 ? _j : 0, "px)") : '-50%')
                .replace(/Y_END_VAL/g, '0')
                .replace(/X_END_VAL/g, (options === null || options === void 0 ? void 0 : options.loopType) === 'origin' ? '0' : '-100%');
        }
        (_k = $marqueeDom === null || $marqueeDom === void 0 ? void 0 : $marqueeDom.parentElement) === null || _k === void 0 ? void 0 : _k.setAttribute('style', "overflow:hidden;".concat((_l = options === null || options === void 0 ? void 0 : options.parentStyle) !== null && _l !== void 0 ? _l : ''));
        if ((options === null || options === void 0 ? void 0 : options.loopType) === 'infinite') {
            $marqueeDom.parentElement.innerHTML = $marqueeDom.outerHTML + $marqueeDom.outerHTML;
        }
        else {
            // $marqueeDom.parentElement.innerHTML = $marqueeDom.outerHTML;
        }
        !document.getElementById(styleElId) && document.getElementsByTagName('head')[0].appendChild($animationStyle);
    }
    catch (e) {
        console.log('js-xxx:marqueeError--->', e);
    }
}
/**
 * 自动堆叠
 * @example
 * stackSticky('.stack', 'top'); /// 所有 .stack 元素自动在 top 上堆叠
 * stackSticky('.stack', 'left'); /// 所有 .stack 元素自动在 left 上堆叠
 * @param selectors 选择器字符串
 * @param direction 堆叠方向
 * @returns
 * @category Dom-工具方法
 */
function stackSticky(selectors, direction) {
    if (direction === void 0) { direction = 'top'; }
    var elements = document.querySelectorAll("".concat(selectors));
    var offset = 0;
    var prevRect;
    elements.forEach(function (element) {
        var rect = element.getBoundingClientRect();
        element.style.position = 'sticky';
        if (prevRect) {
            switch (direction) {
                case 'top':
                    element.style.top = "".concat(offset, "px");
                    break;
                case 'bottom':
                    element.style.bottom = "".concat(offset, "px");
                    break;
                case 'left':
                    element.style.left = "".concat(offset, "px");
                    break;
                case 'right':
                    element.style.right = "".concat(offset, "px");
                    break;
            }
        }
        else {
            element.style[direction] = "".concat(offset, "px");
        }
        offset += direction === 'top' || direction === 'bottom' ? rect.height : rect.width;
        prevRect = rect;
    });
}
/**
 * 自动计算 font-size 并设置
 * @example
 * calcFontSize(); /// 按 16/9 计算并设置
 * calcFontSize(16/10, true); /// 按 16/10 计算并设置内容居中
 * calcFontSize(16/10, true, 'body'); /// 按 16/10 计算并设置 body 偏移使得内容居中
 * @param clientRatio 屏幕比例
 * @param contentCenter 内容是否居中
 * @param offsetSelector 偏移元素选择器，默认设置 html 根节点偏移。
 * @returns
 * @category Dom-工具方法
 */
function calcFontSize(clientRatio, contentCenter, offsetSelector) {
    if (clientRatio === void 0) { clientRatio = 16 / 9; }
    if (contentCenter === void 0) { contentCenter = false; }
    var $doc = document.documentElement;
    function _setHtmlFontSize() {
        var screenRatio = $doc.clientWidth / $doc.clientHeight;
        var pageWidth = (screenRatio > clientRatio ? clientRatio / screenRatio : 1) * $doc.clientWidth;
        var pageHeight = pageWidth / clientRatio;
        $doc.style.fontSize = (pageWidth / 100).toFixed(3) + 'px';
        if (contentCenter) {
            try {
                (offsetSelector ? document.querySelector(offsetSelector) : $doc).style.paddingTop =
                    (($doc.clientHeight - pageHeight) / 2).toFixed(3) + 'px';
            }
            catch (e) {
                console.log('js-xxx:calcFontSizeError--->', e);
            }
        }
    }
    _setHtmlFontSize();
    window.addEventListener('resize', _setHtmlFontSize);
    return function () {
        window.removeEventListener('resize', _setHtmlFontSize);
    };
}
/**
 * px 转 rem
 * @example
 * px2rem(30); /// 转化后的 rem
 * @param px 像素值
 * @returns
 * @category Dom-工具方法
 */
function px2rem(px) {
    var htmlFontSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
    return px / htmlFontSize;
}
/**
 * 填对应值到对应的 dom 中
 * @example
 * dataTo('.className', 'xxx'); /// xxx 会填入到类名为 class-name 的元素中
 * dataTo('.class-name', 'xxx'); /// xxx 会填入到类名为 class-name 的元素中
 * dataTo('.class_name', 'xxx'); /// xxx 会填入到类名为 class-name 的元素中
 * dataTo('.class.name', 'xxx'); /// xxx 会填入到类名为 class-name 的元素中
 * dataTo('#id.name', 'xxx'); /// xxx 会填入到 id 名为 id-name 的元素中
 * @param key key 值
 * @param value value 值
 * @returns
 * @category Dom-工具方法
 */
function dataTo(key, value) {
    var $dom;
    try {
        key = key.toString();
        $dom = document.querySelector((['.'].includes(key.charAt(0)) ? key.charAt(0) : '') + textSplitCase(key).join('-'));
        if ($dom) {
            $dom.innerHTML = value;
            // @ts-ignore
            $dom.value = value;
        }
    }
    catch (e) {
        console.log('js-xxx:dataToError--->', e, { key: key, value: value, $dom: $dom });
    }
}
/**
 * 给元素添加/删除类
 * @example
 * toggleClass(myElement, 'active'); /// 给元素添加/删除 active 类
 * toggleClass(myElement, ['active', 'disabled']); /// 给元素添加/删除 active/disabled 类
 * @param element 元素
 * @param className 类
 * @returns
 * @category Dom-工具方法
 */
function toggleClass(element, className) {
    if (Array.isArray(className)) {
        className.forEach(function (item) {
            toggleClass(element, item);
        });
        return;
    }
    if (element.classList) {
        element.classList.toggle(className);
    }
    else {
        var classes = element.className.split(' ');
        var existingIndex = classes.indexOf(className);
        if (existingIndex >= 0) {
            classes.splice(existingIndex, 1);
        }
        else {
            classes.push(className);
        }
        element.className = classes.join(' ');
    }
}
/**
 * 展示水滴加载动画
 * @example
 * const hideProcess = showProcess(myElement); /// 在元素中显示水滴加载动画
 * hideProcess(); /// 隐藏水滴加载动画
 * @param element 元素
 * @returns
 * @category BXH-自定义动画
 */
function showProcess(element) {
    // 设置相对定位样式
    element.style.position = 'relative';
    // 检查是否已经创建了样式
    var existingStyle = document.getElementById('xxx-process-style');
    if (!existingStyle) {
        // 创建样式字符串
        var css = 
        // eslint-disable-next-line spellcheck/spell-checker
        '.xxx-progress{position:absolute;z-index:100;top:50%;left:50%;transform:translate(-50%,-50%);--r1:154%;--r2:68.5%;width:60px;height:60px;border-radius:50%;background:radial-gradient(var(--r1) var(--r2) at top,#0000 79.5%,#269af2 80%) center left,radial-gradient(var(--r1) var(--r2) at bottom,#269af2 79.5%,#0000 80%) center center,radial-gradient(var(--r1) var(--r2) at top,#0000 79.5%,#269af2 80%) center right,#ccc;background-size:50.5% 220%;background-position:-100% 0%,0% 0%,100% 0%;background-repeat:no-repeat;animation:xxx-p-animation 2s infinite linear;-webkit-transform:translate(-50);-moz-transform:translate(-50);-ms-transform:translate(-50);-o-transform:translate(-50);}@keyframes xxx-p-animation{33%{background-position:0% 33%,100% 33%,200% 33%;}66%{background-position:-100% 66%,0% 66%,100% 66%;}100%{background-position:0% 100%,100% 100%,200% 100%;}}';
        // 创建 <style> 元素并设置样式内容
        var style = document.createElement('style');
        style.id = 'xxx-process-style';
        style.innerHTML = css;
        // 将 <style> 元素添加到 <head> 中
        document.head.appendChild(style);
    }
    // 创建 <div> 元素并设置类名
    var $div = document.createElement('div');
    $div.className = 'xxx-progress';
    // 将 <div> 元素添加到指定元素中央
    element.appendChild($div);
    return function () {
        $div.remove();
    };
}
// eslint-disable-next-line spellcheck/spell-checker
/**
 * 单击事件转换为多击事件
 * Author: WuXingHeng
 * @example
 * dom.onclick = onClick2MoreClick(300, clickOneCallBack, clickTwoCallBack, clickThreeCallBack, clickFourCallBack); /// void
 * @param delay 点击间隔
 * @param events 事件多击 rest 参数
 * @returns
 * @category Tools-点击事件相关
 */
function onClick2MoreClick(delay) {
    if (delay === void 0) { delay = 300; }
    var events = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        events[_i - 1] = arguments[_i];
    }
    var timer = null;
    var lastTime = 0;
    var count = 0;
    // click 事件传递的参数 args
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        var currentTime = new Date().getTime();
        count = currentTime - lastTime < delay ? count + 1 : 0;
        lastTime = new Date().getTime();
        events.forEach(function (event, i) {
            if (i === count) {
                timer = setTimeout(function () {
                    count = 0;
                    lastTime = 0;
                    event.apply(void 0, __spreadArray([], __read(args), false));
                }, delay);
            }
        });
    };
}
/**
 * 单独绑定多击事件
 * @example
 * dom.onclick = bindMoreClick(moreClickCallBack, 4, 500); /// 绑定 4 击事件
 * @param fn 触发方法
 * @param times 几次点击触发
 * @param delay 点击间隔
 * @returns
 * @category Tools-点击事件相关
 */
function bindMoreClick(fn, times, delay) {
    if (times === void 0) { times = 3; }
    if (delay === void 0) { delay = 300; }
    // count 从 0 开始
    times = times - 1;
    var timer = null;
    var lastTime = 0;
    var count = 0;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        var currentTime = new Date().getTime();
        count = currentTime - lastTime < delay ? count + 1 : 0;
        lastTime = new Date().getTime();
        if (count === times) {
            timer = setTimeout(function () {
                count = 0;
                lastTime = 0;
                fn.apply(void 0, __spreadArray([], __read(args), false));
            }, delay);
        }
    };
}
/**
 * 设置长按事件-支持加入单击事件
 * @example
 * addLongPressEvent(document.querySelector('.img-btn'), (event); /// console.log('addLongPressEvent'), 3000); /// 长按会触发事件
 * @param element 需要绑定事件的元素
 * @param longPressCallback 长按事件函数
 * @param duration 长按时间
 * @param clickCallback 单击事件函数(可选)
 * @returns
 * @category Tools-点击事件相关
 */
function addLongPressEvent(element, longPressCallback, duration, clickCallback) {
    var e_1, _a;
    if (duration === void 0) { duration = 2500; }
    if (!element) {
        return;
    }
    var timer;
    var longPressTriggered = false;
    var events = [
        { name: 'mousedown', handler: handleStart },
        { name: 'mouseup', handler: handleEnd },
        { name: 'mouseout', handler: handleEnd },
        { name: 'touchstart', handler: handleStart },
        { name: 'touchend', handler: handleEnd },
        { name: 'touchcancel', handler: handleEnd },
        { name: 'click', handler: handleClick },
    ];
    function handleStart(event) {
        start(event);
    }
    function handleEnd() {
        end();
    }
    function handleClick(event) {
        if (!longPressTriggered) {
            clickCallback && clickCallback(event);
        }
    }
    function start(event) {
        if (timer)
            return;
        timer = setTimeout(function () {
            longPressTriggered = true;
            longPressCallback && longPressCallback(event);
        }, duration);
    }
    function end() {
        clearTimeout(timer);
        timer = null;
        setTimeout(function () {
            longPressTriggered = false;
        }, 0);
    }
    try {
        for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
            var _b = events_1_1.value, name_1 = _b.name, handler = _b.handler;
            element.addEventListener(name_1, handler);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    element.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });
}
/**
 * 设置网页 icon
 * @example
 * setIcon('/favicon.ico')
 * @param iconLink icon 链接
 * @returns
 * @category Dom-工具方法
 */
function setIcon(iconLink) {
    var _a;
    var dom = document.querySelector('head [rel="icon"]');
    if (dom) {
        dom.setAttribute('href', iconLink);
        dom.setAttribute('rel', 'icon');
    }
    else {
        var iconDom = document.createElement('link');
        iconDom.setAttribute('rel', 'icon');
        iconDom.setAttribute('href', iconLink);
        (_a = document.querySelector('head')) === null || _a === void 0 ? void 0 : _a.appendChild(iconDom);
    }
}
/**
 * 复制到剪贴板
 * @example
 * copyToClipboard('hello world')
 * @param text 内容文本
 * @returns
 * @category Dom-工具方法
 */
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text);
    }
    else {
        var info = '复制成功！';
        var tempInput = document.createElement('input');
        tempInput.style.position = 'absolute';
        tempInput.style.top = '-5201314px';
        tempInput.style.left = '-5201314px';
        tempInput.value = text;
        document.body.appendChild(tempInput);
        // 将焦点移动到文档或输入元素上
        tempInput.focus();
        tempInput.select();
        try {
            document.execCommand('copy');
        }
        catch (err) {
            info = '浏览器不支持此操作，请手动复制。';
        }
        document.body.removeChild(tempInput);
        console.log('js-xxx:copyToClipboard--->', info);
    }
}
/**
 * 获取鼠标选中内容
 * @example
 * getSelectText()
 * @returns
 * @category Dom-工具方法
 */
function getSelectText() {
    var _a;
    return (_a = window === null || window === void 0 ? void 0 : window.getSelection()) === null || _a === void 0 ? void 0 : _a.toString();
}
/**
 * 触发某个键盘按键事件
 * @example
 * emitKeyboardEvent(108, 'keyup'); // 小键盘回车事件
 * emitKeyboardEvent('Enter'); // 回车事件
 * emitKeyboardEvent(KEYBOARD_CODE.TAB, 'keypress'); // TAB 事件
 * @param keyOrKeyCode 触发键盘 code，默认为 13 。
 * @param eventType 事件类型，默认为 'keydown' 。
 * @param element 目标元素，默认为 document.body ，支持传 document 。
 * @returns
 * @category Tools-事件相关
 */
function emitKeyboardEvent(keyOrKeyCode, eventType, element) {
    if (keyOrKeyCode === void 0) { keyOrKeyCode = 13; }
    if (eventType === void 0) { eventType = 'keydown'; }
    if (element === void 0) { element = document.body; }
    try {
        var options = {
            bubbles: true,
            cancelable: true,
        };
        if (typeof keyOrKeyCode === 'string') {
            options.key = keyOrKeyCode;
        }
        else if (typeof keyOrKeyCode === 'number') {
            // options.key = String.fromCharCode(keyOrKeyCode);
            options.keyCode = keyOrKeyCode;
        }
        else {
            console.error('emitKeyboardEvent Invalid key', keyOrKeyCode);
            return;
        }
        var myEvent = new KeyboardEvent(eventType, options);
        element === null || element === void 0 ? void 0 : element.dispatchEvent(myEvent);
    }
    catch (e) {
        console.error('emitKeyboardEvent', e);
    }
}
/**
 * 触发元素事件
 * @example
 * emitEvent('click', null, document.getElementById('myButton')); // 触发元素点击事件
 * emitEvent('click', { logKey: 'test', params: { hello: 'world' } }); // 触发自定义元素点击事件
 * @param eventType 事件类型，默认为 'click' 。
 * @param eventDetail 事件自定义参数可以为空。不为空触发 CustomEvent 。
 * @param element 目标元素，默认为 document.body ，支持传 document 。
 * @returns
 * @category Tools-事件相关
 */
function emitEvent(eventType, eventDetail, element) {
    if (eventType === void 0) { eventType = 'click'; }
    if (element === void 0) { element = document.body; }
    try {
        if (!eventDetail) {
            element === null || element === void 0 ? void 0 : element.dispatchEvent(new Event(eventType, {
                bubbles: true,
                cancelable: true,
            }));
        }
        else {
            eventDetail = __assign(__assign({ trigger: "manual-custom-".concat(eventType) }, eventDetail), { customEvent: true });
            var customEvent = new CustomEvent(eventType, {
                bubbles: true,
                cancelable: true,
                detail: eventDetail,
            });
            element === null || element === void 0 ? void 0 : element.dispatchEvent(customEvent);
        }
    }
    catch (e) {
        console.error('emitEvent', e);
    }
}
/**
 * 禁用冲突事件，条码枪、关闭窗口快捷键等。
 * @example
 * document.addEventListener('keydown', disableConflictEvent); /// 进入页面后禁用冲突事件
 * document.removeEventListener('keydown', disableConflictEvent); /// 退出页面后关闭监听
 * @param event 触发事件
 * @returns
 * @category Tools-事件相关
 */
function disableConflictEvent(event) {
    var keyCode = event.keyCode || event.which || event.charCode;
    var ctrlKey = event.ctrlKey || event.metaKey;
    var altKey = event.altKey;
    if (ctrlKey && keyCode == 74) {
        // ctrl+j 禁用条码枪触发事件
        event.preventDefault();
        emitKeyboardEvent();
    }
    if (altKey && keyCode == 115) {
        // alt+f4 关闭窗口快捷键
        event.preventDefault();
    }
    if (ctrlKey && keyCode == 115) {
        // ctrl+f4 关闭窗口快捷键
        event.preventDefault();
    }
    // true 防止此事件被进一步传播; false 允许此事件继续传播;
    return false;
}
/**
 * 阻止冒泡事件&阻止默认行为&阻止事件捕获
 * @example
 * offDefaultEvent(event); /// 阻止冒泡事件&阻止默认行为&阻止事件捕获
 * @param event 事件
 * @returns
 * @category Tools-事件相关
 */
function offDefaultEvent(event) {
    var e = event || window.event;
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    return false;
}
/**
 * 在打印预览中打印指定元素，并设置样式。
 * 需在浏览器打印设置中-更多设置-开启背景与图形打印选项
 * @example
 * printElement('#print-table', {
 *   bodyStyle: {
 *     padding: '10px',
 *     backgroundColor: 'red',
 *   },
 * });
 * @param selector - 要打印的元素的 CSS 选择器。
 * @param styles - iframe 的 style 配置对象。
 *   @property {any} style - iframe 的基本样式。
 *   @property {any} bodyStyle - iframe 的 body 样式。
 *   @property {any} htmlStyle - iframe 的 html 样式。
 * @returns
 * @category Dom-工具方法
 */
function printDom(selector, styles) {
    // 获取需要打印的元素
    var element = document.querySelector(selector);
    if (!element) {
        console.error("Element with query selector ".concat(selector, " not found."));
        return;
    }
    // 创建打印的 iframe
    var iframe = document.createElement('iframe');
    // 设置 iframe 的样式
    Object.assign(iframe.style, __assign({ display: 'none', width: '100%', height: 'auto' }, ((styles === null || styles === void 0 ? void 0 : styles.iframeStyle) || {})));
    document.body.appendChild(iframe);
    // 获取 iframe 的内置对象
    var iframeDoc = iframe.contentDocument;
    var iframeHtml = iframeDoc.documentElement;
    var iframeHead = iframeDoc.head;
    var iframeBody = iframeDoc.body;
    // 获取元素需要的样式
    var elementStyles = getComputedStyle(element);
    // 将元素需要的样式添加到 iframe
    for (var i = 0; i < elementStyles.length; i++) {
        var styleName = elementStyles[i];
        iframeBody.style[styleName] = elementStyles.getPropertyValue(styleName);
    }
    try {
        // 获取元素所在页面上的样式
        var styleSheets = Array.from(document.styleSheets).map(function (styleSheet) {
            return Array.from(styleSheet.cssRules)
                .map(function (cssRule) { return cssRule.cssText; })
                .join('\n');
        });
        // 将元素所在页面的样式添加到 iframe
        var styleElement = document.createElement('style');
        styleElement.innerHTML = styleSheets.join('\n');
        iframeHead.appendChild(styleElement);
    }
    catch (e) {
        console.error(e);
    }
    // // 在媒体查询中设置打印时的背景样式
    // const printStyles = `
    //   @media print {
    //     html {
    //       background-color: white;
    //     }
    //     body {
    //       padding: 10px;
    //     }
    //   }
    // `;
    // const printStyleElement = document.createElement('style');
    // printStyleElement.innerHTML = printStyles;
    // iframeHead.appendChild(printStyleElement);
    // 获取元素的内容
    var elementContent = element.outerHTML;
    // 将元素的内容添加到 iframe
    iframeBody.innerHTML = elementContent;
    // 设置 iframe.body 和 iframe.html 的样式与添加自定义的一些样式
    Object.assign(iframeBody.style, __assign({ width: '100%', height: 'auto' }, ((styles === null || styles === void 0 ? void 0 : styles.bodyStyle) || {})));
    Object.assign(iframeHtml.style, __assign({ width: '100%', height: 'auto' }, ((styles === null || styles === void 0 ? void 0 : styles.htmlStyle) || {})));
    // 执行打印
    iframe.contentWindow.print();
    // 打印完成后移除 iframe
    setTimeout(function () {
        document.body.removeChild(iframe);
    }, 1000);
    return iframe;
}
/**
 * 创建全局 click 事件埋点与回调，也可使用 `emitEvent` 主动触发。
 * 若 log-* 属性报错，记得 eslint 关闭 `'react/no-unknown-property': 'warn'`。
 * @example
 * const clickListenerObj = createClickLogListener((event, key, data) => console.log({ event, key, data })); /// 页面加载完成后创建监听器，取消监听器 clickListenerObj.cancel(); 。
 * <div log-click={JSON.stringify({ trigger: 'click', params: { name: '普通日志' }, logKey: 'example-key-0' })}>普通埋点元素</div> /// 普通埋点元素写法
 * <div log-click={JSON.stringify({ maxSequence: 2, sequence: 1, trigger: 'click', params: { name: '固定顺序日志' }, logKey: 'example-key-1' })}>固定顺序埋点元素 1</div> /// 固定顺序埋点元素写法
 * <div log-click={JSON.stringify({ maxSequence: 2, sequence: 2, trigger: 'click', params: { name: '固定顺序日志' }, logKey: 'example-key-1' })}>固定顺序埋点元素 2</div> /// 固定顺序埋点元素写法
 * <div log-click={JSON.stringify({ isOrder: true, orderKey: '元素 1', params: { name: '非固定顺序日志' }, logKey: 'example-key-2' })}>非固定顺序埋点元素 1</div> /// 非固定顺序埋点元素写法
 * <div log-click={JSON.stringify({ isOrder: true, orderKey: '元素 2', params: { name: '非固定顺序日志' }, logKey: 'example-key-2' })}>非固定顺序埋点元素 2</div> /// 非固定顺序埋点元素写法
 * @param callback 监听 Track 回调
 * @returns
 * @category Log-日志埋点
 */
function createClickLogListener(callback) {
    var sequenceMap = {};
    var orderMap = {};
    function handleClick(event) {
        var target = event.target, detail = event.detail;
        var parsedLogData;
        if (detail === null || detail === void 0 ? void 0 : detail.customEvent) {
            parsedLogData = detail;
        }
        else {
            // 找到拥有 log-click 属性的元素为有效点击
            var logElement = target.closest('[log-click]');
            if (!logElement) {
                return;
            }
            // console.log({ target, logElement, sequenceMap, orderMap });
            // log-click 属性有可以解析值才执行后续操作
            var logData = logElement.getAttribute('log-click');
            if (!logData) {
                return;
            }
            parsedLogData = parseJSON(logData);
        }
        if (!parsedLogData) {
            return;
        }
        var trigger = parsedLogData.trigger, params = parsedLogData.params, sequence = parsedLogData.sequence, maxSequence = parsedLogData.maxSequence, logKey = parsedLogData.logKey, isOrder = parsedLogData.isOrder, orderKey = parsedLogData.orderKey;
        if (!logKey) {
            return;
        }
        // 如果 isOrder 是 true 则触发区域非固定顺序记录埋点分析，当一个区域 orderKey 第二次被点击时，本次顺序重来。
        if (isOrder && orderKey) {
            var clickInfo = __assign({}, orderMap);
            if ((clickInfo === null || clickInfo === void 0 ? void 0 : clickInfo.logKey) !== logKey) {
                clickInfo = undefined;
            }
            if (!clickInfo) {
                clickInfo = {
                    logKey: logKey,
                    clickOrder: 1,
                    clickList: [orderKey],
                };
            }
            if (clickInfo.clickList[clickInfo.clickList.length - 1] === orderKey) {
                clickInfo = __assign({}, clickInfo);
            }
            else if (clickInfo.clickList.includes(orderKey)) {
                clickInfo = {
                    logKey: logKey,
                    clickOrder: 1,
                    clickList: [orderKey],
                };
            }
            else {
                clickInfo.clickOrder++;
                clickInfo.clickList.push(orderKey);
            }
            orderMap = clickInfo;
            var newLogKey = "".concat(logKey, "-").concat(orderKey, "-").concat(clickInfo.clickOrder);
            console.log(event, '区域非固定顺序记录埋点分析:', newLogKey, { trigger: trigger !== null && trigger !== void 0 ? trigger : 'click', params: params, logKey: logKey });
            callback && callback(event, newLogKey, { trigger: trigger !== null && trigger !== void 0 ? trigger : 'click', params: params, logKey: logKey });
            return;
        }
        // 无 sequence 或 maxSequence 则认为是普通埋点
        if (maxSequence === undefined) {
            console.log(event, '普通埋点分析:', logKey, { trigger: trigger !== null && trigger !== void 0 ? trigger : 'click', params: params, logKey: logKey });
            callback && callback(event, logKey, { trigger: trigger !== null && trigger !== void 0 ? trigger : 'click', params: params, logKey: logKey });
            return;
        }
        // 存在 sequence 或 maxSequence 则认为是固定顺序埋点
        if (sequence !== undefined && maxSequence !== undefined) {
            var clickSequence = sequenceMap[logKey] || 0;
            // 顺序正确，保存顺序并继续执行。
            if (clickSequence + 1 === sequence) {
                sequenceMap[logKey] = sequence;
                // 达到 maxSequence 触发埋点
                if (sequence === maxSequence) {
                    console.log(event, '固定顺序埋点分析:', logKey, { trigger: trigger !== null && trigger !== void 0 ? trigger : 'click', params: params, logKey: logKey });
                    callback && callback(event, logKey, { trigger: trigger !== null && trigger !== void 0 ? trigger : 'click', params: params, logKey: logKey });
                    delete sequenceMap[logKey];
                }
            }
            else {
                // 点击相同顺序的按钮多次，不清空重来，防呆。
                if (clickSequence === sequence) {
                    sequenceMap[logKey] = sequence;
                }
                else {
                    // 点击顺序错误，重来。
                    delete sequenceMap[logKey];
                }
            }
            return;
        }
    }
    // 此处注意不要重复监听，后续也可以将事件扩展支持多个。
    document.addEventListener('click', handleClick);
    return { sequenceMap: sequenceMap, orderMap: orderMap, cancel: function () { return document.removeEventListener('click', handleClick); } };
}
/**
 * 创建全局 scroll 事件埋点与回调
 * 若 log-* 属性报错，记得 eslint 关闭 `'react/no-unknown-property': 'warn'`。
 * @example
 * const cancel = createScrollLogListener(document.querySelector('.demo-scroll-dom'), (event, eventKey, data) => console.log({ event, eventKey, data })); /// 页面加载完成后创建监听器，取消监听器 cancel(); 。
 * <div log-scroll={JSON.stringify({ logKey: 'example-scroll-X' })}>{...X 滚动埋点元素...}</div> /// 滚动埋点元素
 * @param element 元素
 * @param callback 监听 Track 回调
 * @param delay 防抖延迟
 * @param threshold 触发滚动事件阈值
 * @returns
 * @category Log-日志埋点
 */
function createScrollLogListener(element, callback, delay, threshold) {
    if (delay === void 0) { delay = 800; }
    if (threshold === void 0) { threshold = 30; }
    var timeoutRef = null;
    var lastScrollPos = { x: 0, y: 0 };
    function handleScroll(event) {
        var target = event.target;
        // 找到拥有 log-scroll 属性的输入元素
        var logElement = target.closest('[log-scroll]');
        if (!logElement) {
            return;
        }
        // log-scroll 属性有可以解析值才执行后续操作
        var logData = logElement.getAttribute('log-scroll');
        if (!logData) {
            return;
        }
        var parsedLogData = parseJSON(logData);
        if (!parsedLogData) {
            return;
        }
        var trigger = parsedLogData.trigger, params = parsedLogData.params, logKey = parsedLogData.logKey;
        if (!logKey) {
            return;
        }
        var currentScrollPos = {
            x: element.scrollLeft,
            y: element.scrollTop,
        };
        var scrollX = currentScrollPos.x - lastScrollPos.x;
        var scrollY = currentScrollPos.y - lastScrollPos.y;
        if (Math.abs(scrollX) > threshold || Math.abs(scrollY) > threshold) {
            console.log(event, '滚动事件埋点', logKey, {
                trigger: trigger !== null && trigger !== void 0 ? trigger : 'scroll',
                params: __assign(__assign({}, (params !== null && params !== void 0 ? params : {})), { X: scrollX, Y: scrollY }),
                logKey: logKey,
            });
            callback &&
                callback(event, logKey, {
                    trigger: trigger !== null && trigger !== void 0 ? trigger : 'scroll',
                    params: __assign(__assign({}, (params !== null && params !== void 0 ? params : {})), { X: scrollX, Y: scrollY }),
                    logKey: logKey,
                });
        }
        lastScrollPos = currentScrollPos;
    }
    function handleScrollDebounce(event) {
        if (timeoutRef) {
            clearTimeout(timeoutRef);
        }
        timeoutRef = setTimeout(function () {
            handleScroll(event);
        }, delay);
    }
    if (element) {
        element.addEventListener('scroll', handleScrollDebounce, { passive: true });
        return function () {
            element.removeEventListener('scroll', handleScrollDebounce);
            clearTimeout(timeoutRef);
        };
    }
}
/**
 * 创建全局 change 事件埋点与回调，也可使用 `emitEvent` 主动触发。
 * @example
 * const cancel = createChangeLogListener((event, key, data) => console.log({ event, key, data })); /// 页面加载完成后创建监听器，取消监听器 cancel(); 。
 * <div log-change={JSON.stringify({ logKey: 'div-input-change-0' })}><input /></div> /// 父元素总监听
 * <input log-change={JSON.stringify({ logKey: 'input-change-1' })} /> /// 普通监听
 * @param callback 监听 Track 回调
 * @returns
 * @category Log-日志埋点
 */
function createChangeLogListener(callback) {
    function handleChange(event) {
        var target = event.target, detail = event.detail;
        var parsedLogData;
        if (detail === null || detail === void 0 ? void 0 : detail.customEvent) {
            parsedLogData = detail;
        }
        else {
            // 找到拥有 log-change 属性的输入元素
            var logElement = target.closest('[log-change]');
            if (!logElement) {
                return;
            }
            // log-change 属性有可以解析值才执行后续操作
            var logData = logElement.getAttribute('log-change');
            if (!logData) {
                return;
            }
            parsedLogData = parseJSON(logData);
        }
        if (!parsedLogData) {
            return;
        }
        var trigger = parsedLogData.trigger, params = parsedLogData.params, logKey = parsedLogData.logKey;
        if (!logKey) {
            return;
        }
        var value = target === null || target === void 0 ? void 0 : target.value;
        // 在这里处理输入事件埋点
        console.log(event, 'Change 事件处理:', logKey, {
            trigger: trigger !== null && trigger !== void 0 ? trigger : 'change',
            params: __assign(__assign({}, (params !== null && params !== void 0 ? params : {})), { value: value }),
            logKey: logKey,
        });
        callback && callback(event, logKey, { trigger: trigger !== null && trigger !== void 0 ? trigger : 'change', params: __assign(__assign({}, (params !== null && params !== void 0 ? params : {})), { value: value }), logKey: logKey });
    }
    document.addEventListener('change', handleChange);
    return function () {
        document.removeEventListener('change', handleChange);
    };
}
/**
 * 创建间隔时间日志
 * @param eventName 事件名称
 * @param eventParams 参数列表
 * @param callback 回调函数
 * @returns
 * @example
 * // 创建日志实例
 * const myCustomLog = createTimeLogListener('扫描时长', { menuCode: 'Login' });
 * // 开始计时
 * myCustomLog.start({ user: 'admin' });
 * // ... 执行一些操作 ...
 * // ... 中途更新一些参数 ...
 * myCustomLog.update({ userAgent: 'Chrome' });
 * myCustomLog.update({ test: 'test' });
 * // 结束计时并记录日志
 * myCustomLog.end({ isLogin: true });
 * // 输出到控制台和执行回调
 * // 输出格式包括：logKey, ms, s, menuCode, user, isLogin, userAgent, test
 * // react
 * const log = useMemo(() => createTimeEventLog('扫描时长', { menuCode: 'scan' }), []);
 * @category Log-日志埋点
 */
function createTimeLogListener(eventName, eventParams, callback) {
    if (eventParams === void 0) { eventParams = {}; }
    var originEventParams = eventParams;
    var log = {
        startTime: null,
        endTime: null,
        start: function (moreParams) {
            if (moreParams === void 0) { moreParams = {}; }
            eventParams = __assign(__assign({}, eventParams), moreParams);
            this.startTime = Date.now();
            this.endTime = null; // 重置 endTime，确保每次使用都是新的计时。
        },
        update: function (moreParams) {
            if (moreParams === void 0) { moreParams = {}; }
            if (this.startTime === null) {
                console.warn("Cannot update log '".concat(eventName, "' eventParams because start was not called."));
                return;
            }
            eventParams = __assign(__assign({}, eventParams), moreParams);
        },
        end: function (moreParams) {
            if (moreParams === void 0) { moreParams = {}; }
            if (this.startTime === null) {
                console.warn("Cannot end log for '".concat(eventName, "' because start was not called."));
                return;
            }
            eventParams = __assign(__assign({}, eventParams), moreParams);
            var logKey = eventName;
            this.endTime = Date.now();
            var durationMs = this.endTime - this.startTime;
            var logInfo = __assign(__assign({}, eventParams), { logKey: logKey, ms: durationMs, s: (durationMs / 1000).toFixed(3) });
            console.table(logInfo); // 以表格形式输出日志信息，包括 logKey 。
            callback && (callback === null || callback === void 0 ? void 0 : callback(logInfo, logKey));
            // 重置 startTime 和 endTime，以便实例可以重新使用。
            this.startTime = null;
            this.endTime = null;
            eventParams = originEventParams;
        },
    };
    return log;
}
/**
 * 合并类名 emotion-js
 * @example
 * cx('class1', 'class2', { 'class3': true, 'class4': false }, null, undefined); /// "class1 class2 class3 true"
 * @param classNames 要合并的类名、对象或空值
 * @returns
 * @category Dom-工具方法
 */
function cx() {
    var classNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classNames[_i] = arguments[_i];
    }
    var processedClassNames = [];
    for (var i = 0; i < classNames.length; i++) {
        var className = classNames[i];
        if (!className) {
            continue;
        }
        if (typeof className === 'string') {
            // 处理字符串类名
            processedClassNames.push(className);
        }
        else if (typeof className === 'object' && className !== null) {
            // 处理对象类名
            for (var key in className) {
                if (className[key]) {
                    processedClassNames.push(key);
                }
            }
        }
    }
    return processedClassNames.join(' ');
}

/*
 * @Author: HxB
 * @Date: 2022-04-26 15:53:02
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-01-09 14:31:35
 * @Description: 表单相关
 * @FilePath: \js-xxx\src\Form\index.ts
 */
/**
 * 对象转 FormData 格式
 * @example
 * toFormData({a: 1, b: 2}); /// FormData
 * @param obj 源数据
 * @param hasBrackets 是否带括号
 * @param hasIndex 是否带 index
 * @returns
 * @category Form-表单相关
 */
function toFormData(obj, hasBrackets, hasIndex) {
    if (hasBrackets === void 0) { hasBrackets = false; }
    if (hasIndex === void 0) { hasIndex = false; }
    var formData = new FormData();
    Object.keys(obj).forEach(function (key) {
        if (Array.isArray(obj[key])) {
            for (var arrIndex in obj[key]) {
                hasBrackets
                    ? formData.append(hasIndex ? "".concat(key, "[]") : "".concat(key, "[").concat(arrIndex, "]"), obj[key][arrIndex])
                    : formData.append(key, obj[key][arrIndex]);
            }
        }
        else {
            // 与 Request 分类中的 qsStringify 不同，此处不关心对象结构，省事且适用方便后端解析的情况。
            formData.append(key, getType(obj[key]) == 'object' ? JSON.stringify(obj[key]) : obj[key]);
        }
    });
    return formData;
}
/**
 * 对象转 URLSearchParams 字符串
 * @example
 * toQueryString({a: 1, b: 2, c: [1, 2]}); /// a=1&b=2&c=1&c=2
 * toQueryString({a: 1, b: 2, c: [1, 2]}, true); /// a=1&b=2&c[]=1&c[]=2
 * toQueryString({a: 1, b: 2, c: [1, 2]}, true, true); /// a=1&b=2&c[0]=1&c[1]=2
 * @param obj 源数据
 * @param hasBrackets 是否带括号
 * @param hasIndex 是否带 index
 * @returns
 * @category Form-表单相关
 */
function toQueryString(obj, hasBrackets, hasIndex) {
    if (hasBrackets === void 0) { hasBrackets = false; }
    if (hasIndex === void 0) { hasIndex = false; }
    var queryString = new URLSearchParams();
    Object.keys(obj).forEach(function (key) {
        if (Array.isArray(obj[key])) {
            for (var arrIndex in obj[key]) {
                hasBrackets
                    ? queryString.append(hasIndex ? "".concat(key, "[]") : "".concat(key, "[").concat(arrIndex, "]"), obj[key][arrIndex])
                    : queryString.append(key, obj[key][arrIndex]);
            }
        }
        else {
            // 与 Request 分类中的 qsStringify 不同，此处不关心对象结构，省事且适用方便后端解析的情况。
            queryString.append(key, getType(obj[key]) == 'object' ? JSON.stringify(obj[key]) : obj[key]);
        }
    });
    return queryString;
}
/**
 * 创建用于处理数据的钩子函数
 * @example
 * const [getData, setData, resetData] = useStateData({a: 1, b: 2, c: 3});
 * console.log(getData()); /// {a: 1, b: 2, c: 3}
 * setData({ a : 10 }); /// {a: 10}
 * resetData(); /// {a: 1, b: 2, c: 3}
 * const [getData, setData, resetData] = useStateData('test');
 * console.log(getData()); /// 'test'
 * setData('test001'); /// 'test001'
 * resetData(); /// 'test'
 * @param initialData 初始数据
 * @returns
 * @category Form-表单相关
 */
function useStateData(initialData) {
    var data = initialData;
    /**
     * 设置数据
     * @param value 新的数据
     */
    function setData(value) {
        data = value;
        return data;
    }
    /**
     * 重置数据为初始值
     */
    function resetData() {
        data = initialData;
        return data;
    }
    /**
     * 获取数据
     */
    function getData() {
        return data;
    }
    return [getData, setData, resetData];
}

/*
 * @Author: HxB
 * @Date: 2022-04-26 16:24:34
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-01-18 09:23:54
 * @Description: 数学常用函数
 * @FilePath: \js-xxx\src\Math\index.ts
 */
/**
 * 除法函数
 * @example
 * div(1, 2); /// 0.5
 * div(0.55, 100); /// 0.0055
 * @param div1 被除数
 * @param div2 除数
 * @returns
 * @category Math-数学相关
 */
function div(div1, div2) {
    var div1FloatLen = 0, div2FloatLen = 0;
    var tempDiv1 = div1.toString(), tempDiv2 = div2.toString();
    try {
        // 获取小数长度
        div1FloatLen = tempDiv1.split('.')[1].length;
    }
    catch (e) {
        /* empty */
    }
    try {
        div2FloatLen = tempDiv2.split('.')[1].length;
    }
    catch (e) {
        /* empty */
    }
    // 转换整数计算再使用科学计数法转换小数位
    return times(Number(tempDiv1.replace('.', '')) / Number(tempDiv2.replace('.', '')), Math.pow(10, div2FloatLen - div1FloatLen));
}
/**
 * 乘法函数
 * @example
 * times(1, 2); /// 2
 * times(0.55, 100); /// 55
 * @param mul1 被乘数
 * @param mul2 乘数
 * @returns
 * @category Math-数学相关
 */
function times(mul1, mul2) {
    var mulFloatLen = 0;
    var tempMul1 = mul1.toString(), tempMul2 = mul2.toString();
    try {
        mulFloatLen += tempMul1.split('.')[1].length;
    }
    catch (e) {
        /* empty */
    }
    try {
        mulFloatLen += tempMul2.split('.')[1].length;
    }
    catch (e) {
        /* empty */
    }
    return (Number(tempMul1.replace('.', '')) * Number(tempMul2.replace('.', ''))) / Math.pow(10, mulFloatLen);
}
/**
 * 加法函数
 * @example
 * add(1, 2); /// 3
 * add(0.1, 0.2); /// 0.3
 * @param add1 被加数
 * @param add2 加数
 * @returns
 * @category Math-数学相关
 */
function add(add1, add2) {
    var add1FloatLen = 0, add2FloatLen = 0, multiple = 1;
    try {
        add1FloatLen = add1.toString().split('.')[1].length;
    }
    catch (e) {
        /* empty */
    }
    try {
        add2FloatLen = add2.toString().split('.')[1].length;
    }
    catch (e) {
        /* empty */
    }
    multiple = Math.pow(10, Math.max(add1FloatLen, add2FloatLen));
    return (times(add1, multiple) + times(add2, multiple)) / multiple;
}
/**
 * 减法函数
 * @example
 * sub(1, 2); /// -1
 * sub(0.55, 0.1); /// 0.45
 * @param sub1 被减数
 * @param sub2 减数
 * @returns
 * @category Math-数学相关
 */
function sub(sub1, sub2) {
    var sub1FloatLen = 0, sub2FloatLen = 0, multiple = 1;
    try {
        sub1FloatLen = sub1.toString().split('.')[1].length;
    }
    catch (e) {
        /* empty */
    }
    try {
        sub2FloatLen = sub2.toString().split('.')[1].length;
    }
    catch (e) {
        /* empty */
    }
    multiple = Math.pow(10, Math.max(sub1FloatLen, sub2FloatLen));
    return parseFloat("".concat((times(sub1, multiple) - times(sub2, multiple)) / multiple));
}
/**
 * 获取平均数
 * @example
 * average(1, 2, 3, 4); /// 2.5
 * average(1, 2, 3, 4.123); /// 2.53075
 * @param args 需要计算的数...
 * @returns
 * @category Math-数学相关
 */
function average() {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    var len = args.length;
    for (var i = 0; i < len; i++) {
        var d = Number((_a = args[i]) !== null && _a !== void 0 ? _a : 0);
        sum = add(sum, isNaN(d) ? 0 : d);
    }
    return args.length ? div(sum, len) : 0;
}
/**
 * 计算所有数
 * @example
 * calculate('+', 1, 2, 3, 4); /// 10
 * calculate('+', 1, 2, 3, undefined); /// 6
 * calculate('*', 1, 2, 3); /// 6
 * calculate('*', 1, 2, 3, undefined); /// 0
 * calculate('-', 10, 2, 3); /// 5
 * calculate('/', 10, 2, 2); /// 2.5
 * @param operator 操作符
 * @param args 需要计算的数...
 * @returns
 * @category Math-数学相关
 */
function calculate(operator) {
    var _a, _b;
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var res = operator === '*' ? 1 : 0;
    var len = args.length;
    if (!len) {
        return 0;
    }
    var i = 0;
    if (operator === '-' || operator === '/') {
        res = Number((_a = args[0]) !== null && _a !== void 0 ? _a : 0);
        i++;
    }
    var defaultValue = 0;
    for (i; i < len; i++) {
        var d = Number((_b = args[i]) !== null && _b !== void 0 ? _b : defaultValue);
        var operand = isNaN(d) ? defaultValue : d;
        switch (operator) {
            case '+':
                res = add(res, operand);
                break;
            case '-':
                res = sub(res, operand);
                break;
            case '*':
                res = times(res, operand);
                break;
            case '/':
                res = div(res, operand);
                break;
            default:
                res = add(res, operand);
                break;
        }
    }
    return res;
}
/**
 * 获取绝对值
 * @example
 * abs(-1); /// 1
 * abs(1); /// 1
 * @param value 数值
 * @returns
 * @category Math-数学相关
 */
function abs(value) {
    return Math.abs(value);
}
/**
 * 检查一个数字是否偶数
 * @example
 * isEven(-2); /// true
 * isEven(1); /// false
 * @param value 数值
 * @returns
 * @category Math-数学相关
 */
function isEven(value) {
    return value % 2 === 0;
}
/**
 * 去尾法获取数值
 * @example
 * float(1.135, 0, true); /// '1'
 * float(1.135, 2, true); /// '1.13'
 * float(1.135, 1); /// 1.1
 * float(1.135, 4); /// 1.135
 * float(1.135, 4, true); /// '1.1350'
 * @param value 数值
 * @param d 精度
 * @param isStr 是否返回字符串
 * @returns
 * @category Math-数学相关
 */
function float(value, d, isStr) {
    if (d === void 0) { d = 0; }
    if (isStr === void 0) { isStr = false; }
    var arr = "".concat(value).split('.');
    var doubleStr = arr.length > 1 ? arr[1].padEnd(d, '0').substring(0, d) : '0'.padEnd(d, '0');
    var res = d === 0 ? arr[0] : "".concat(arr[0], ".").concat(doubleStr);
    return isStr ? res : Number(res);
}
/**
 * 判断一个数是否在指定范围（闭区间）
 * @example
 * inRange(null, 0, 3); /// false
 * inRange(0, 0, 3); /// true
 * inRange(3, 0, 3); /// true
 * inRange(5, 0, 3); /// false
 * @param value 数值
 * @param min 最小值
 * @param max 最大值
 * @returns
 * @category Math-数学相关
 */
function inRange(value, min, max) {
    if (value === null ||
        value === undefined ||
        value === '' ||
        value === true ||
        value === false ||
        value.toString() === '') {
        return false;
    }
    value = Number(value);
    if (isNaN(value)) {
        return false;
    }
    return value >= min && value <= max;
}
/**
 * 获取百分比
 * @example
 * getPercentage(102, 1020, 2); /// 10
 * getPercentage(102, 1020, 2, { float: true, suffix: true }); /// '10.00%'
 * getPercentage(17, 1020, 2); /// 1.67
 * getPercentage(1020, null, 2); /// 0
 * getPercentage(0, 1020, 2, { float: false, suffix: true }); /// '0%'
 * @param value 数值
 * @param total 总数
 * @param options 配置
 * @returns
 * @category Math-数学相关
 */
function getPercentage(value, total, decimals, options) {
    if (decimals === void 0) { decimals = 0; }
    if (options === void 0) { options = {
        float: false,
        suffix: false,
    }; }
    var result;
    try {
        value = Number(value);
        total = Number(total);
        if (isNaN(value) || isNaN(total) || total === 0) {
            result = options.float ? (0).toFixed(decimals) : 0;
            return options.suffix ? "".concat(result, "%") : result;
        }
        var percentage = (value / total) * 100;
        result = options.float ? percentage.toFixed(decimals) : parseFloat(percentage.toFixed(decimals));
        return options.suffix ? "".concat(result, "%") : result;
    }
    catch (e) {
        console.log('js-xxx:getPercentageError--->', e);
        result = options.float ? (0).toFixed(decimals) : 0;
        return options.suffix ? "".concat(result, "%") : result;
    }
}
/**
 * 转换数字为大致数字描述
 * @example
 * markNumber(10000123111); /// '100.00 亿'
 * markNumber(12345); /// '1.2 万'
 * markNumber(123); /// '123'
 * @param value 数值
 * @returns
 * @category Math-数学相关
 */
function markNumber(value) {
    if (value == undefined) {
        return '';
    }
    var newValue = ['', '', ''];
    var fr = 1000;
    var num = 3;
    var text1 = '';
    var fm = 1;
    while (value / fr >= 1) {
        fr *= 10;
        num += 1;
    }
    if (num <= 4) {
        // 千
        newValue[0] = parseInt(value / 1000 + '') + '';
        newValue[1] = ' ' + '千';
    }
    else if (num <= 8) {
        // 万
        text1 = parseInt(num - 4 + '') / 3 > 1 ? '千万' : '万';
        fm = text1 === '万' ? 10000 : 10000000;
        if (value % fm === 0) {
            newValue[0] = parseInt(value / fm + '') + '';
        }
        else {
            newValue[0] = parseFloat(value / fm + '').toFixed(1) + '';
        }
        newValue[1] = ' ' + text1;
    }
    else if (num <= 16) {
        // 亿
        text1 = (num - 8) / 3 > 1 ? '千亿' : '亿';
        text1 = (num - 8) / 4 > 1 ? '万亿' : text1;
        text1 = (num - 8) / 7 > 1 ? '千万亿' : text1;
        fm = 1;
        if (text1 === '亿') {
            fm = 100000000;
        }
        else if (text1 === '千亿') {
            fm = 100000000000;
        }
        else if (text1 === '万亿') {
            fm = 1000000000000;
        }
        else if (text1 === '千万亿') {
            fm = 1000000000000000;
        }
        if (value % fm === 0) {
            newValue[0] = parseInt(value / fm + '') + '';
        }
        else {
            newValue[0] = parseFloat(value / fm + '').toFixed(2) + '';
        }
        newValue[1] = ' ' + text1;
    }
    if (value < 1000) {
        newValue[0] = value + '';
        newValue[1] = '';
    }
    return newValue.join('');
}
/**
 * 提供进制转换，最大为 64 进制。
 * @example
 * transferNumber(100); /// '1100100'
 * transferNumber(1100100, 2, 10); /// 100
 * @param number 数值
 * @param from 原进制
 * @param to 目标进制
 * @returns
 * @category Math-数学相关
 */
function transferNumber(number, from, to) {
    if (from === void 0) { from = 10; }
    if (to === void 0) { to = 2; }
    var decimal = 0;
    var result = '';
    if (!number || "".concat(number).split('').some(function (i) { return !TRANSFER_STR.includes(i); })) {
        return number;
    }
    try {
        from = Number(from);
        to = Number(to);
        // 先将其转换为 10 进制
        var tmp = String(number);
        for (var i = 0, j = 1; i < tmp.length; i++, j++) {
            decimal += TRANSFER_STR.indexOf(tmp.charAt(i)) * Math.pow(from, tmp.length - j);
        }
        if (to === 10 || !to) {
            return decimal;
        }
        // 再转换为指定进制
        while (decimal !== 0) {
            var remainder = decimal % to;
            result = TRANSFER_STR.charAt(remainder) + result;
            decimal = Math.floor(decimal / to);
        }
        return result;
    }
    catch (e) {
        return number;
    }
}

/**
 * 初始化 Notification
 * @example
 * initNotification(); /// true||false
 * @returns
 * @category Notify-封装
 */
function initNotification() {
    // @ts-ignore
    var NOTIFICATION = window.Notification || (window === null || window === void 0 ? void 0 : window.mozNotification) || (window === null || window === void 0 ? void 0 : window.webkitNotification);
    if (!NOTIFICATION) {
        // 不支持
        return false;
    }
    if (NOTIFICATION.permission === 'default' ||
        NOTIFICATION.permission === 'denied' ||
        // @ts-ignore
        NOTIFICATION.permission === 'undefined') {
        Notification.requestPermission().then(function (permission) {
            if (permission === 'denied') {
                return false;
            }
            if (permission === 'granted') {
                // 同意
                return true;
            }
        });
    }
    return true;
}
/**
 * 发送 Notification
 * @example
 * sendNotification('测试通知', '测试标题', {...options}); /// 发送成功/失败
 * @returns
 * @category Notify-封装
 */
function sendNotification(msg, title, options) {
    var _a, _b, _c, _d, _e, _f;
    // @ts-ignore
    var NOTIFICATION = window.Notification || (window === null || window === void 0 ? void 0 : window.mozNotification) || (window === null || window === void 0 ? void 0 : window.webkitNotification);
    if (!NOTIFICATION) {
        console.log('js-xxx:sendNotification--->', '系统不支持 Notification API');
        return;
    }
    var notify = new Notification(title !== null && title !== void 0 ? title : 'js-xxx Notification', __assign(__assign({}, options), { dir: (_a = options === null || options === void 0 ? void 0 : options.dir) !== null && _a !== void 0 ? _a : 'auto', lang: (_b = options === null || options === void 0 ? void 0 : options.lang) !== null && _b !== void 0 ? _b : 'zh-CN', requireInteraction: (_c = options === null || options === void 0 ? void 0 : options.requireInteraction) !== null && _c !== void 0 ? _c : false, tag: (_d = options === null || options === void 0 ? void 0 : options.tag) !== null && _d !== void 0 ? _d : getKey(8), icon: (_e = options === null || options === void 0 ? void 0 : options.icon) !== null && _e !== void 0 ? _e : 'favicon.ico', timestamp: (_f = options === null || options === void 0 ? void 0 : options.timestamp) !== null && _f !== void 0 ? _f : new Date().getTime(), body: msg }));
    notify.onclick = function () {
        var _a;
        // 如果通知消息被点击 通知窗口将被激活
        window.focus();
        // @ts-ignore
        (_a = options === null || options === void 0 ? void 0 : options.onClick) === null || _a === void 0 ? void 0 : _a.call(this);
        notify.close();
    };
    notify.onerror = function () {
        var _a;
        // @ts-ignore
        (_a = options === null || options === void 0 ? void 0 : options.onError) === null || _a === void 0 ? void 0 : _a.call(this);
    };
    notify.onclose = function () {
        var _a;
        // @ts-ignore
        (_a = options === null || options === void 0 ? void 0 : options.onClose) === null || _a === void 0 ? void 0 : _a.call(this);
    };
}

/*
 * @Author: HxB
 * @Date: 2022-04-26 16:24:47
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-08-28 14:45:17
 * @Description: 常用数字相关函数
 * @FilePath: \js-xxx\src\Number\index.ts
 */
/**
 * 四舍五入
 * `const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);`
 * `const toPrecision = (number, c) => (Math.round(+number * 10 ** c) / 10 ** c).toFixed(c);`
 * @example
 * round(1.2345, 2); /// 1.23
 * round(0.355, 2); /// 0.36
 * round(1.005, 2); /// 1.01
 * @param number 浮点数
 * @param d 保留小数位
 * @returns
 * @category Number-数字相关
 */
function round(number, d) {
    // example-0.155
    var tempNum = number + '';
    d = !d ? 0 : d;
    if (d == 0) {
        // 保留 0 位小数直接取整就好了
        return Math.round(number);
    }
    if (tempNum.indexOf('.') === -1) {
        tempNum += '.';
    }
    // -0.15500
    tempNum += new Array(d + 1).join('0');
    if (new RegExp('^(-|\\+)?(\\d+(\\.\\d{0,' + (d + 1) + '})?)\\d*$').test(tempNum)) {
        //  【/^(-|\+)?(\d+(\.\d{0,3})?)\d*$/】
        var tempStr = '0' + RegExp.$2, 
        // eslint-disable-next-line prefer-const
        pm = RegExp.$1, a = RegExp.$3.length, flag = true;
        // tempStr：数值部分（0.155）加 0 是为了防止产生进位，pm：正负号（-），a：小数点+小数（.155）长度为上一条正则表达式得出的结果（此处为{0,3}），flag：首位 0 是否未产生进位。
        if (a == d + 1 + 1) {
            // 一个 1 为小数点，一个 1 为需要多一位数字才能判断，此处判断是否有足够的数字来得出结果。
            a = tempStr.match(/\d/g);
            // ["0", "0", "1", "5", "5"]
            var aLen = a.length;
            if (parseInt(a[aLen - 1]) > 4) {
                // 保留小数的后一位是否大于 4
                for (var i = aLen - 2; i >= 0; i--) {
                    a[i] = parseInt(a[i]) + 1;
                    if (a[i] == 10) {
                        a[i] = 0;
                        flag = i != 1;
                        // 判断首位 0 是否未产生进位，false 为产生了进位，后续不裁剪首位 0（因为 i==1 时，首位 0 发生了变化，0 变为 1）。
                    }
                    else
                        break;
                }
            }
            tempStr = a.join('').replace(new RegExp('(\\d+)(\\d{' + d + '})\\d$'), '$1.$2');
            // 【/(\d+)(\d{2})\d$/】$1 至少包含一个数字，$2 必须为保留的小数位，结尾必须有一个数字，所以如果 00155，d=2,结果为 00.15，若 d=1，则结果为 001.5 。
        }
        if (flag) {
            // 如果首位 0 未产生进位，去掉多余的 0 。
            tempStr = tempStr.substring(1);
        }
        // 返回浮点数，以防万一去掉结尾的小数点（.）。
        return parseFloat((pm + tempStr).replace(/\.$/, ''));
    }
    else {
        return Number(number);
    }
}
/**
 * 是否整数(严格匹配)
 * @example
 * isInteger('0'); /// true
 * isInteger('-0', '+'); /// false
 * @returns
 * @category Number-数字相关
 */
function isInteger(value, type) {
    if (type == '+') {
        return /(^[1-9]\d*$)|(^0$)/.test(value);
    }
    if (type == '-') {
        return /(^\-0$)|(^\-[1-9]\d*$)/.test(value);
    }
    return /(^[1-9]\d*$)|(^0$)|(^\-0$)|(^\-[1-9]\d*$)/.test(value);
}
/**
 * 是否小数(严格匹配)
 * @example
 * isDecimal('0.0'); /// true
 * isDecimal('0.0', '+', true); /// false
 * isDecimal('-0.1', '+'); /// false
 * isDecimal('-0.10', '-'); /// true
 * @returns
 * @category Number-数字相关
 */
function isDecimal(value, type, noLastZero) {
    if (noLastZero === void 0) { noLastZero = false; }
    if (type == '+') {
        var reg = noLastZero ? /(^0\.[1-9]*\d*[1-9]$)|(^[1-9]\d*\.\d*[1-9]$)/ : /(^0\.\d+$)|(^[1-9]\d*\.\d+$)/;
        return reg.test(value);
    }
    if (type == '-') {
        var reg = noLastZero ? /(^\-0\.[1-9]*\d*[1-9]$)|(^\-[1-9]\d*\.\d*[1-9]$)/ : /(^\-0\.\d+$)|(^\-[1-9]\d*\.\d+$)/;
        return reg.test(value);
    }
    if (noLastZero) {
        return /(^0\.[1-9]*\d*[1-9]$)|(^[1-9]\d*\.\d*[1-9]$)|(^\-0\.[1-9]*\d*[1-9]$)|(^\-[1-9]\d*\.\d*[1-9]$)/.test(value);
    }
    return /(^0\.\d+$)|(^[1-9]\d*\.\d+$)|(^\-0\.\d+$)|(^\-[1-9]\d*\.\d+$)/.test(value);
}
/**
 * 数字人性化显示
 * @example
 * formatNumber('12312300'); /// '12,312,300'
 * formatNumber(851232.1314); /// '851,232.13'
 * formatNumber(851232.1314, 0); /// '851,232'
 * @param value 数值
 * @param n 精度
 * @returns
 * @category Number-数字相关
 */
function formatNumber(value, n) {
    var _a;
    if (n === void 0) { n = 2; }
    // if (String(value).includes('.')) {
    //   const [a, b] = String(value).split('.');
    //   return String(a).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + b;
    // } else {
    //   return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // }
    try {
        n = n >= 0 && n <= 20 ? n : 2;
        value = round(parseFloat((value + '').replace(/[^\d\.-]/g, '')), n) + '';
        var l = value.split('.')[0].split('').reverse(), r = (_a = value.split('.')) === null || _a === void 0 ? void 0 : _a[1];
        var t = '';
        for (var i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? ',' : '');
        }
        return t.split('').reverse().join('') + (r ? '.' + r : '');
    }
    catch (e) {
        return "".concat(value);
    }
}
/**
 * 获取用于匹配数字的正则表达式。
 * @example
 * // 匹配最多 2 位整数，且不允许小数
 * const regex = getNumberReg({ integer: 2 });
 * regex.test('99'); // true
 * regex.test('123'); // false
 * regex.test('99.99'); // false
 * // 匹配最多 3 位整数和最多 2 位小数
 * const regex = getNumberReg({ integer: 3, decimal: 2 });
 * regex.test('999'); // true
 * regex.test('999.99'); // true
 * regex.test('999.999'); // false
 * // 匹配任意长度的整数和小数
 * const regex = getNumberReg({});
 * regex.test('123456789'); // true
 * regex.test('12345.6789'); // true
 * @param options 配置选项，options.integer 最大整数位数，options.decimal 最大小数位数。
 * @returns
 * @category Number-数字相关
 */
function getNumberReg(options) {
    var integer = options.integer, decimal = options.decimal;
    var integerPart = integer ? "{0,".concat(integer - 1, "}") : '*';
    var decimalPart = decimal ? "{1,".concat(decimal, "}") : '*';
    return new RegExp(String.raw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["^(0|[1-9]d", ")(?:.d", ")?$"], ["^(0|[1-9]\\d", ")(?:\\.\\d", ")?$"])), integerPart, decimalPart));
}
var templateObject_1;

/* eslint-disable max-lines */
function _isValidCronField(field, min, max) {
    var regex = new RegExp('^\\d+|\\*/\\d+|[\\d,-]+/[\\d,-]+$');
    if (!regex.test(field)) {
        return false;
    }
    if (field.includes('/')) {
        var _a = __read(field.split('/'), 2), start = _a[0], step = _a[1];
        return _isValidCronField(start, min, max) && parseInt(step) > 0 && parseInt(step) <= max;
    }
    if (field.includes('-')) {
        var _b = __read(field.split('-'), 2), start = _b[0], end = _b[1];
        return parseInt(start) >= min && parseInt(end) <= max && parseInt(start) <= parseInt(end);
    }
    return parseInt(field) >= min && parseInt(field) <= max;
}
/**
 * 文件大小格式化
 * @example
 * formatBytes(1024); /// '1.00 KB'
 * @param bytes 文件大小 bytes
 * @param precision 精度
 * @returns
 * @category Others-业务/其他
 */
function formatBytes(bytes, precision) {
    var _a;
    if (precision === void 0) { precision = 2; }
    var units = ['B', 'KB', 'MB', 'GB', 'TB'];
    var pow = Math.floor((bytes ? Math.log(bytes) : 0) / Math.log(1024));
    pow = Math.min(pow, units.length - 1);
    bytes /= 1 << (10 * pow);
    var unit = (_a = units === null || units === void 0 ? void 0 : units[pow]) !== null && _a !== void 0 ? _a : units[0];
    return bytes.toFixed(precision) + ' ' + unit;
}
/**
 * 获取浏览器信息
 * @example
 * getUserAgent(); /// { browserName: 'Chrome', browserVersion: '102.0.0.0', osName: 'Windows', osVersion: '10.0', deviceName: '' }
 * @returns
 * @category Others-业务/其他
 */
function getUserAgent() {
    var browserReg = {
        Chrome: /Chrome/,
        IE: /MSIE/,
        Firefox: /Firefox/,
        Opera: /Presto/,
        Safari: /Version\/([\d.]+).*Safari/,
        '360': /360SE/,
        QQBrowser: /QQ/,
    };
    var deviceReg = {
        iPhone: /iPhone/,
        iPad: /iPad/,
        Android: /Android/,
        Windows: /Windows/,
        Mac: /Macintosh/,
    };
    var userAgentStr = navigator.userAgent;
    var userAgentObj = {
        // 浏览器名称
        browserName: '',
        // 浏览器版本
        browserVersion: '',
        // 操作系统名称
        osName: '',
        // 操作系统版本
        osVersion: '',
        // 设备名称
        deviceName: '',
    };
    for (var key in browserReg) {
        if (browserReg[key].test(userAgentStr)) {
            userAgentObj.browserName = key;
            if (key === 'Chrome') {
                userAgentObj.browserVersion = userAgentStr.split('Chrome/')[1].split(' ')[0];
            }
            else if (key === 'IE') {
                userAgentObj.browserVersion = userAgentStr.split('MSIE ')[1].split(' ')[1];
            }
            else if (key === 'Firefox') {
                userAgentObj.browserVersion = userAgentStr.split('Firefox/')[1];
            }
            else if (key === 'Opera') {
                userAgentObj.browserVersion = userAgentStr.split('Version/')[1];
            }
            else if (key === 'Safari') {
                userAgentObj.browserVersion = userAgentStr.split('Version/')[1].split(' ')[0];
            }
            else if (key === '360') {
                userAgentObj.browserVersion = '';
            }
            else if (key === 'QQBrowser') {
                userAgentObj.browserVersion = userAgentStr.split('Version/')[1].split(' ')[0];
            }
        }
    }
    for (var key in deviceReg) {
        if (deviceReg[key].test(userAgentStr)) {
            userAgentObj.osName = key;
            if (key === 'Windows') {
                userAgentObj.osVersion = userAgentStr.split('Windows NT ')[1].split(';')[0];
            }
            else if (key === 'Mac') {
                userAgentObj.osVersion = userAgentStr.split('Mac OS X ')[1].split(')')[0];
            }
            else if (key === 'iPhone') {
                userAgentObj.osVersion = userAgentStr.split('iPhone OS ')[1].split(' ')[0];
            }
            else if (key === 'iPad') {
                userAgentObj.osVersion = userAgentStr.split('iPad; CPU OS ')[1].split(' ')[0];
            }
            else if (key === 'Android') {
                userAgentObj.osVersion = userAgentStr.split('Android ')[1].split(';')[0];
                userAgentObj.deviceName = userAgentStr.split('(Linux; Android ')[1].split('; ')[1].split(' Build')[0];
            }
        }
    }
    return userAgentObj;
}
/**
 * 判断当前运行环境是否为 Node.js
 * @example
 * isNode(); /// true
 * @returns
 * @category Others-业务/其他
 */
function isNode() {
    return typeof process !== 'undefined' && !!process.versions && !!process.versions.node;
}
/**
 * 判断当前运行环境是否为浏览器
 * @example
 * isBrowser(); /// true
 * @returns
 * @category Others-业务/其他
 */
function isBrowser() {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * 检测黑暗模式
 * @example
 * isDarkMode(); /// true
 * @returns
 * @category Others-业务/其他
 */
function isDarkMode() {
    return (window.matchMedia &&
        (window.matchMedia('(prefers-color-scheme:dark)').matches ||
            window.matchMedia('(prefers-color-scheme: dark)').matches));
}
/**
 * 是否苹果设备
 * @example
 * isAppleDevice(); /// true
 * @returns
 * @category Others-业务/其他
 */
function isAppleDevice() {
    return /Mac|iPod|iPhone|iPad/.test(navigator.platform);
}
/**
 * 判断是否客户端渲染
 * @example
 * isCSR(); /// true
 * @returns
 * @category Others-业务/其他
 */
function isCSR() {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * 判断是否 Windows
 * @example
 * isWin(); /// true
 * @returns
 * @category Others-业务/其他
 */
function isWin() {
    return typeof navigator !== 'undefined' && /windows|win32/i.test(navigator.userAgent);
}
/**
 * 判断是否 MacOS
 * @example
 * isMac(); /// true
 * @returns
 * @category Others-业务/其他
 */
function isMac() {
    return typeof navigator !== 'undefined' && /Macintosh/i.test(navigator.userAgent);
}
/**
 * 判断是否 Chrome 内核
 * @example
 * isChrome(); /// true
 * @returns
 * @category Others-业务/其他
 */
function isChrome() {
    return typeof navigator !== 'undefined' && navigator.userAgent.indexOf('Chrome') > -1;
}
/**
 * 版本号比对算法
 * @example
 * checkVersion('1.0.1-rc', '1.0.0', '-rc'); /// 1
 * checkVersion('1.0.0', '1.0.1'); /// -1
 * checkVersion('1.0.0', '1.0.0'); /// 0
 * @param targetVersion 目标版本
 * @param currentVersion 当前版本
 * @param testStr 需要替换的字符串 default(-rc)
 * @returns
 * @category Others-业务/其他
 */
function checkVersion(targetVersion, currentVersion, testStr) {
    var _a, _b;
    if (testStr === void 0) { testStr = '-rc'; }
    var targetVersionList = targetVersion.replace(testStr, '').split('.');
    var currentVersionList = currentVersion.replace(testStr, '').split('.');
    var length = targetVersionList.length > currentVersionList.length ? targetVersionList.length : currentVersionList.length;
    for (var i = 0; i < length; i++) {
        var targetVersionValue = i < targetVersionList.length ? parseInt((_a = targetVersionList[i]) !== null && _a !== void 0 ? _a : 0) : 0;
        var currentVersionValue = i < currentVersionList.length ? parseInt((_b = currentVersionList[i]) !== null && _b !== void 0 ? _b : 0) : 0;
        if (targetVersionValue > currentVersionValue) {
            return 1;
        }
        if (targetVersionValue < currentVersionValue) {
            return -1;
        }
    }
    return 0;
}
/**
 * 版本号升级算法
 * @example
 * versionUpgrade('0.0.1'); /// '0.0.2'
 * versionUpgrade('0.0.0.9'); /// '0.0.0.10'
 * versionUpgrade('0.0.0.9', 9); /// '0.0.1.0'
 * versionUpgrade('0.0.9.9', 9); /// '0.1.0.0'
 * @param version 版本号
 * @param maxVersionCode 最大版本号
 * @returns
 * @category Others-业务/其他
 */
function versionUpgrade(version, maxVersionCode) {
    if (maxVersionCode === void 0) { maxVersionCode = 99; }
    if (maxVersionCode == 0) {
        maxVersionCode = 99;
    }
    var tempVersionArr = version.split('.').map(function (v) { return Number(v); });
    var nan = tempVersionArr.some(function (v) { return isNaN(v); });
    if (nan) {
        return version;
    }
    tempVersionArr = tempVersionArr.reverse();
    var check = true;
    tempVersionArr.forEach(function (v, i) {
        if (check) {
            if (v >= maxVersionCode) {
                tempVersionArr[i] = 0;
            }
            else {
                check = false;
                tempVersionArr[i] = tempVersionArr[i] + 1;
            }
        }
    });
    return tempVersionArr.reverse().join('.');
}
/**
 * 处理 rh 血型
 * @example
 * formatRh('**d**'); /// '阴性'
 * formatRh('**d**', { format: [true, false], default: false }); /// true
 * @param input 输入值
 * @param options 处理配置
 * @returns
 * @category Others-业务/其他
 */
function formatRh(input, options) {
    var defaultOptions = {
        format: ['阴性', '阳性'],
        default: '-',
        negative: ['阴性', '-', '**d**'],
        positive: ['阳性', '+', '**D**'],
    };
    var _a = __assign(__assign({}, defaultOptions), options), negative = _a.negative, positive = _a.positive, format = _a.format, def = _a.default;
    if (negative.includes(input)) {
        return format[0];
    }
    if (positive.includes(input)) {
        return format[1];
    }
    if (input.includes('d')) {
        return format[0];
    }
    if (input.includes('D')) {
        return format[1];
    }
    return def;
}
/**
 * 是否阴性血
 * @example
 * isRhNegative('**d**'); /// true
 * @param input 输入值
 * @returns
 * @category Others-业务/其他
 */
function isRhNegative(input) {
    return formatRh(input, { format: [true, false], default: false });
}
/**
 * 获取血型枚举信息
 * @example
 * getBloodGroup('A'); /// { value: 'A', label: 'A 型', color: '#1890FF', lower: 'a', upper: 'A' }
 * @param bloodGroup 血型
 * @returns
 * @category Others-业务/其他
 */
function getBloodGroup(bloodGroup) {
    var keyList = ['A', 'a', 'B', 'b', 'O', 'o', 'AB', 'ab'];
    bloodGroup = keyList.includes(bloodGroup) ? bloodGroup.toUpperCase() : 'unknown';
    return BLOOD_GROUP_INFO[bloodGroup];
}
/**
 * 生成 cron 表达式
 * @example
 * calcCron(); /// '* * * * *'
 * calcCron({ minute: '30', hour: '1', day: '10'}); /// '30 1 10 * *'
 * calcCron({  week: '?' }); /// '* * * * ?'
 * calcCron({ week: '*' }); /// '* * * * *'
 * calcCron({ week: 0 }); /// '* * * * 0'
 * calcCron({ week: '0' }); /// '* * * * 0'
 * calcCron({ week: '7' }); /// '* * * * 0'
 * calcCron({ week: 'SUN,天,日,六,6,5' }); /// '* * * * 0,5,6'
 * calcCron({ day: '1-5' }); /// '* * 1-5 * * '
 * calcCron({ day: '1,5' }); /// '* * 1,5 * * '
 * calcCron({ day: '1/5' }); /// '* * 1/5 * * '
 * @param options cron 配置
 * @returns
 * @category Others-业务/其他
 */
function calcCron(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.minute, minute = _c === void 0 ? '*' : _c, _d = _b.hour, hour = _d === void 0 ? '*' : _d, _e = _b.day, day = _e === void 0 ? '*' : _e, _f = _b.month, month = _f === void 0 ? '*' : _f, _g = _b.week, week = _g === void 0 ? '*' : _g;
    var limits = [
        // 分钟 (0-59)
        [0, 59],
        // 小时 (0-23)
        [0, 23],
        // 日期 (1-31)
        [1, 31],
        // 月份 (1-12)
        [1, 12],
        // 星期 (0-7 或 SUN-SAT)
        [0, 7],
    ];
    var weekField = week;
    // 将星期转换为 0-7 格式
    if (typeof weekField === 'number') {
        if (weekField < 0 || weekField > 7) {
            throw new Error('Invalid Week Field!');
        }
        weekField = weekField.toString();
    }
    else if (typeof weekField === 'string' && weekField !== '*' && weekField !== '?') {
        var weekMap_1 = {
            SUN: 0,
            MON: 1,
            TUE: 2,
            WED: 3,
            THU: 4,
            FRI: 5,
            SAT: 6,
            日: 0,
            一: 1,
            二: 2,
            三: 3,
            四: 4,
            五: 5,
            六: 6,
            天: 0,
            '0': 0,
            '1': 1,
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 0,
        };
        var weekList = weekField.split(',').map(function (weekItem) {
            var weekUpper = weekItem.toUpperCase();
            var mappedWeek = weekMap_1[weekUpper];
            if (mappedWeek === undefined) {
                throw new Error('Invalid Week Field!');
            }
            return mappedWeek;
        });
        weekField = __spreadArray([], __read(new Set(weekList)), false).sort().join(',');
    }
    var fields = [minute, hour, day, month, weekField];
    var _loop_1 = function (i) {
        var field = fields[i];
        var _h = __read(limits[i], 2), min = _h[0], max = _h[1];
        if (typeof field === 'string') {
            if (field === '*' || field === '?' || field === '*/1') {
                return "continue";
            }
            if (field.startsWith('*/')) {
                var step = parseInt(field.slice(2));
                if (step > 0 && step <= max) {
                    return "continue";
                }
            }
            var parts = field.split(',');
            if (parts.length > 1) {
                if (parts.every(function (part) { return _isValidCronField(part, min, max); })) {
                    return "continue";
                }
            }
            var _j = __read(field.split('-'), 2), field1 = _j[0], field2 = _j[1];
            if (field1 && field2 && _isValidCronField(field1, min, max) && _isValidCronField(field2, min, max)) {
                return "continue";
            }
            if (_isValidCronField(field, min, max)) {
                return "continue";
            }
        }
        throw new Error("Invalid Field: ".concat(field));
    };
    // 验证输入
    for (var i = 0; i < fields.length; i++) {
        _loop_1(i);
    }
    // 输出 cron 表达式
    return "".concat(fields.join(' '));
}
/**
 * 在页面上打印数据，我们打包通常会设置清除 console，使用此函数打印关键信息就不会被清除啦。
 * @example
 * log([1, 2, 2, 3, 3], {a: 1, b: 2}, 'test', true); /// 打印数据
 * log('danger'); /// 打印数据
 * @param args 打印数据 rest 参数
 * @returns
 * @category Extra-日志/调试
 */
function log() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    try {
        // eval(
        //   `console.log('%c 日志[${formatDate(
        //     new Date(),
        //   )}]----->', 'color:#1890FF;font-size:10px;margin-right:5px', ...JSON.parse('${JSON.stringify(args)}'));`,
        // );
        // 确保对象中的 JSON 字符串不会干扰 JavaScript 解析器。
        var formattedArgs = args.map(function (arg) {
            // eslint-disable-next-line no-prototype-builtins
            if (typeof arg === 'object' && arg !== null && arg.hasOwnProperty('toJSON')) {
                return arg.toJSON();
            }
            else {
                return arg;
            }
        });
        var code = "console.log('%c\u65E5\u5FD7[".concat(formatDate(new Date()), "]----->\\n', 'color:#1890FF;font-size:10px;margin-right:5px', ...").concat(JSON.stringify(formattedArgs).replace(/</g, 
        // 防止 xss
        '\\u003c'), ");");
        var fn = new Function(code);
        fn();
    }
    catch (e) {
        console.log.apply(console, __spreadArray(__spreadArray([], __read(args), false), [e], false));
    }
    return "\n[".concat(formatDate(new Date()), "] =====>\n (---").concat(JSON.stringify(args), "---)\n");
}
/**
 * 强制转化为字符串，避免导出表格显示科学计数法。
 * @example
 * forceToStr(123123123); /// '123123123'
 * forceToStr(undefined); /// '-'
 * forceToStr(undefined, 0); /// '0'
 * @param value 值
 * @param defaultValue 默认值
 * @returns
 * @category Tools-下载/文件相关
 */
function forceToStr(value, defaultValue) {
    var _a;
    if (defaultValue === void 0) { defaultValue = '-'; }
    // \t \u200c u200d 也可以
    return "\u200B".concat((_a = value !== null && value !== void 0 ? value : defaultValue) !== null && _a !== void 0 ? _a : '-');
}
/**
 * 转换 data 为可导出的 csv 数据
 * @example
 * transferCSVData([{ prop: 'name' }, { prop: 'age' }], [{ name: '张三', age: 15 }]); /// 可以导出的字符数据
 * transferCSVData([{ label: '姓名', prop: 'name' }, { label: '年龄', prop: 'age' }], [{ name: '张三', age: 15 }]); /// 可以导出的字符数据
 * @param fields 导出的栏位
 * @param data 数据
 * @returns
 * @category Tools-下载/文件相关
 */
function transferCSVData(fields, data) {
    var _a;
    var keys = fields.map(function (field) { return field.prop; });
    var result = "".concat(fields.map(function (field) { var _a, _b; return forceToStr((_b = (_a = field.label) !== null && _a !== void 0 ? _a : field.prop) !== null && _b !== void 0 ? _b : 'unknown'); }).join(','), "\n");
    var _loop_2 = function (i) {
        var item = (_a = data[i]) !== null && _a !== void 0 ? _a : {};
        result += keys.map(function (key) { return forceToStr(item[key]); }).join(',') + '\n';
    };
    for (var i = 0; i < data.length; i++) {
        _loop_2(i);
    }
    return result;
}
// eslint-disable-next-line spellcheck/spell-checker
/**
 * 导出数据为文件
 * @example
 * exportFile(data); /// 导出 txt 文件
 * exportFile(data, 'csv-导出文件测试', 'csv'); /// 导出 csv 文件
 * exportFile(document.getElementById('table_to_xls').outerHTML, 'excelWithStyle', 'xls'); /// 导出表格为带样式的 excel xls 文件
 * exportFile('http://a.biugle.cn/img/cdn/dev/avatar/1.png', 'test', 'png'); /// 导出 png 文件
 * @param data 数据
 * @param fileName 文件名
 * @param fileType 文件类型
 * @returns
 * @category Tools-下载/文件相关
 */
function exportFile(data, fileName, fileType) {
    if (fileType === void 0) { fileType = 'txt'; }
    if (isUrl(data)) {
        // eslint-disable-next-line spellcheck/spell-checker
        download(data, "".concat(fileName !== null && fileName !== void 0 ? fileName : formatDate(new Date(), 'yyyy-mm-dd-hhiiss'), ".").concat(fileType));
        return;
    }
    // 加入特殊字符确保 utf-8
    // eslint-disable-next-line spellcheck/spell-checker
    var uri = "data:".concat(getContentType(fileType), ";charset=utf-8,\uFEFF").concat(safeEncodeURI(data));
    // U+FEFF 是一个零宽度非断字符（Zero Width No-Break Space），也称为“字节顺序标记（Byte Order Mark，BOM）”。
    // eslint-disable-next-line spellcheck/spell-checker
    download(uri, "".concat(fileName !== null && fileName !== void 0 ? fileName : formatDate(new Date(), 'yyyy-mm-dd-hhiiss'), ".").concat(fileType));
    // downloadContent 可以兼容落后浏览器的情况
}
/**
 * 华氏/摄氏度互转
 * @example
 * transferTemperature(30.5); /// '86.9 °F'
 * transferTemperature(86, false, false); /// 30
 * @returns
 * @category Others-业务/其他
 */
function transferTemperature(temperature, isCelsius, addSuffix) {
    if (isCelsius === void 0) { isCelsius = true; }
    if (addSuffix === void 0) { addSuffix = true; }
    temperature = Number(temperature);
    var convertedTemperature;
    if (isCelsius) {
        // 将摄氏度转换为华氏度
        convertedTemperature = (temperature * 9) / 5 + 32;
        if (addSuffix) {
            return parseFloat(convertedTemperature.toFixed(2)) + ' °F';
        }
        else {
            return parseFloat(convertedTemperature.toFixed(2));
        }
    }
    else {
        // 将华氏度转换为摄氏度
        convertedTemperature = ((temperature - 32) * 5) / 9;
        if (addSuffix) {
            return parseFloat(convertedTemperature.toFixed(2)) + ' °C';
        }
        else {
            return parseFloat(convertedTemperature.toFixed(2));
        }
    }
}
/**
 * 获取数据，支持格式化，默认值。
 * @example
 * getDataStr(123123123); /// '123123123'
 * getDataStr(undefined); /// '-'
 * getDataStr(undefined, 0); /// '0'
 * getDataStr('test', '', '(', ')'); /// '(test)'
 * getDataStr(undefined, '', '(', ')'); /// ''
 * getDataStr(false); /// 'false'
 * @param value 值
 * @param defaultValue 默认值
 * @param prefix 前缀
 * @param suffix 后缀
 * @returns
 * @category Others-业务/其他
 */
function getDataStr(value, defaultValue, prefix, suffix) {
    if (defaultValue === void 0) { defaultValue = '-'; }
    if (prefix === void 0) { prefix = ''; }
    if (suffix === void 0) { suffix = ''; }
    value = value !== undefined ? value : defaultValue !== undefined ? defaultValue : '-';
    return value !== defaultValue ? "".concat(prefix).concat(value).concat(suffix) : "".concat(value);
}
/**
 * 比较两个值是否相等，支持严格模式和忽略大小写的比较。
 * @example
 * compareTo(1, 2); /// false
 * compareTo('a', 'A'); /// true
 * compareTo('a', 'A', true); /// false
 * compareTo(3, 3); /// true
 * compareTo(2, '2'); /// true
 * compareTo('apple', 'banana'); /// false
 * compareTo('2', 2, true); /// false
 * compareTo('2', 2); /// true
 * @param value1 第一个值
 * @param value2 第二个值
 * @param strict 是否启用严格模式: true 表示严格比较，false 表示忽略大小写和类型比较，默认值为 false 。
 * @returns
 * @category Others-业务/其他
 */
function compareTo(value1, value2, strict) {
    if (strict === void 0) { strict = false; }
    if (strict) {
        return value1 === value2;
    }
    return "".concat(value1).toLowerCase() === "".concat(value2).toLowerCase();
}
/**
 * 获取转换后树的映射对象、数组 `{ map: any, list: any[] }`
 * @example
 * getTreeData(treeData, 'id'); /// { map: any, list: any[] }
 * getTreeData(treeData, 'data.id'); /// { map: any, list: any[] }
 * @param treeData 树值
 * @param key key
 * @returns
 * @category Others-Tree
 */
function getTreeData(treeData, key) {
    if (key === void 0) { key = 'key'; }
    var result = {
        map: {},
        list: [],
    };
    if (!treeData) {
        return result;
    }
    function traverse(node, parent) {
        if (!node) {
            return;
        }
        var data = getV(null, node, key);
        if (data) {
            var newNode = __assign(__assign({}, node), { parent: parent });
            result.list.push(newNode);
            result.map[data] = newNode;
        }
        if (node.children && Array.isArray(node.children)) {
            node.children.forEach(function (i) { return traverse(i, data); });
        }
    }
    treeData.forEach(traverse);
    return result;
}
/**
 * 过滤树级数据，并支持显示完整结构。
 * @example
 * searchTreeData(treeData, '测试搜索关键字', 'id'); /// ...
 * searchTreeData(treeData, '测试搜索关键字', ['key', 'title']); /// ...
 * searchTreeData(treeData, '测试搜索关键字', ['data.key', 'title'], true); /// ...
 * @param treeData 树值
 * @param searchText 过滤的值
 * @param searchKeys 用于过滤的 key
 * @param strictMode 搜索配置 strictMode 时，会强制平铺排列返回符合条件的节点，默认不开启，保持树排列。
 * @returns
 * @category Others-Tree
 */
function searchTreeData(treeData, searchText, searchKeys, strictMode) {
    if (searchKeys === void 0) { searchKeys = ['key', 'title']; }
    if (strictMode === void 0) { strictMode = false; }
    if (!searchText || !treeData) {
        return treeData;
    }
    // treeData = JSON.parse(JSON.stringify(treeData));
    searchText = trim(searchText).toLowerCase();
    // @ts-ignore
    var newSearchKeys = [].concat(searchKeys);
    return treeData.reduce(function (filteredTree, node) {
        var _a;
        if (newSearchKeys.some(function (i) { return "".concat(getV('', node, i)).toLowerCase().includes(searchText); })) {
            var filteredNode = node;
            filteredTree.push(filteredNode);
            if (strictMode && ((_a = filteredNode === null || filteredNode === void 0 ? void 0 : filteredNode.children) === null || _a === void 0 ? void 0 : _a.length)) {
                filteredTree.push.apply(filteredTree, __spreadArray([], __read(searchTreeData(node.children, searchText, searchKeys, strictMode)), false));
                filteredNode.children = undefined;
            }
        }
        else if (node.children) {
            if (strictMode) {
                filteredTree.push.apply(filteredTree, __spreadArray([], __read(searchTreeData(node.children, searchText, searchKeys, strictMode)), false));
            }
            else {
                var filteredChildren = searchTreeData(node.children, searchText, searchKeys, strictMode);
                if (filteredChildren === null || filteredChildren === void 0 ? void 0 : filteredChildren.length) {
                    var filteredNode = __assign(__assign({}, node), { children: filteredChildren });
                    filteredTree.push(filteredNode);
                }
            }
        }
        return filteredTree;
    }, []);
}
/**
 * 转换数组数据为树状数据
 * @example
 * transferTreeData(treeData); /// ...
 * transferTreeData(treeData, { labelKey: 'title', valueKey: 'key', parentKey: 'parent' }); /// ...
 * @param sourceData 源数据
 * @param options 转化选项
 * @returns
 * @category Others-Tree
 */
function transferTreeData(sourceData, options) {
    if (options === void 0) { options = {
        labelKey: 'title',
        valueKey: 'key',
        parentKey: 'parent',
    }; }
    if (!sourceData) {
        return sourceData;
    }
    var labelKey = options.labelKey, valueKey = options.valueKey, parentKey = options.parentKey;
    // 构建节点映射表
    var nodeMap = new Map();
    var allKeys = [];
    sourceData.forEach(function (item) {
        var label = item[labelKey];
        var value = item[valueKey];
        var parent = item[parentKey];
        var treeNode = __assign(__assign({ label: label, value: value, title: label, key: value, parent: parent }, item), { children: undefined });
        allKeys.push(value);
        nodeMap.set(value, treeNode);
    });
    // 关联父子节点
    sourceData.forEach(function (item) {
        var value = item[valueKey];
        var parentNode = nodeMap.get(item[parentKey]);
        if (parentNode) {
            if (!parentNode.children) {
                parentNode.children = [];
            }
            parentNode.children.push(nodeMap.get(value));
        }
    });
    // 查找根节点
    var rootNodes = [];
    sourceData.forEach(function (item) {
        var value = item[valueKey];
        var treeNode = nodeMap.get(value);
        var parent = item[parentKey];
        if (!allKeys.includes(parent)) {
            rootNodes.push(treeNode);
        }
    });
    return rootNodes;
}
/**
 * 获取筛选后的树数据，自定义方法。
 * @example
 * filterTreeData(treeData, (item) => item); /// ...
 * filterTreeData(treeData, (item) => filterIds.includes(item.id)); /// ...
 * @param treeData 树值
 * @param callback 过滤的方法，默认不过滤。
 * @returns
 * @category Others-Tree
 */
function filterTreeData(treeData, callback) {
    if (!callback || !treeData) {
        return treeData;
    }
    // treeData = JSON.parse(JSON.stringify(treeData));
    var results = [];
    treeData.forEach(function (item) {
        var _a;
        var clonedItem = __assign({}, item); // 使用浅拷贝避免修改原始数据
        if (!clonedItem.children && !callback(clonedItem)) {
            return;
        }
        if (clonedItem.children) {
            clonedItem.children = filterTreeData(clonedItem.children, callback);
        }
        if (callback(clonedItem) || ((_a = clonedItem.children) === null || _a === void 0 ? void 0 : _a.length)) {
            results.push(clonedItem);
        }
    });
    return results;
}
/**
 * 主动获取树的半选/全选节点
 * @example
 * getTreeCheckNodes(treeData, ['0-0', '0-1']); /// ...
 * getTreeCheckNodes(treeData, ['0-0', '0-1'], ['0']); /// ...
 * @param treeData 树值
 * @param checkedKeys 已经全选的节点
 * @param halfCheckedKeys 已经半选的节点
 * @returns
 * @category Others-Tree
 */
function getTreeCheckNodes(treeData, checkedKeys, halfCheckedKeys) {
    // 将 treeData 转化为一个映射，以便查找节点和其父节点的关系。
    var nodeMap = new Map();
    var parentMap = new Map();
    var checkedSet = new Set(checkedKeys !== null && checkedKeys !== void 0 ? checkedKeys : []);
    var halfCheckedSet = new Set(halfCheckedKeys !== null && halfCheckedKeys !== void 0 ? halfCheckedKeys : []);
    // 构建节点映射和父节点映射
    var buildNodeMaps = function (data, parentKey) {
        if (parentKey === void 0) { parentKey = null; }
        data.forEach(function (node) {
            var key = node.key, children = node.children;
            nodeMap.set(key, node);
            parentMap.set(key, parentKey);
            if (children) {
                buildNodeMaps(children, key);
            }
        });
    };
    buildNodeMaps(treeData);
    // 处理 checkedKeys 和 halfCheckedKeys
    var processCheckedKeys = function (node, key) {
        if (!node || !(node === null || node === void 0 ? void 0 : node.children)) {
            return;
        }
        var children = (node === null || node === void 0 ? void 0 : node.children) || [];
        var allSiblingsChecked = children.every(function (child) { return checkedSet.has(child.key); });
        var allSiblingsUnchecked = children.every(function (child) { return !checkedSet.has(child.key); });
        var allSiblingsUncheckedHalf = children.every(function (child) { return !halfCheckedSet.has(child.key); });
        if (allSiblingsChecked) {
            // 若节点的子节点全部选中，则节点添加到 checkedSet 中，从 halfCheckedSet 中剔除。
            checkedSet.add(key);
            halfCheckedSet.delete(key);
        }
        else if (allSiblingsUnchecked && allSiblingsUncheckedHalf) {
            // 若节点的子节点都没有选中，则节点从 checkedSet 和 halfCheckedSet 中剔除。
            checkedSet.delete(key);
            halfCheckedSet.delete(key);
        }
        else {
            // 若节点的子节点部分选中，则节点从 checkedSet 中剔除，添加到 halfCheckedSet 中。
            checkedSet.delete(key);
            halfCheckedSet.add(key);
        }
        var parentKey = parentMap.get(key);
        if (parentKey) {
            processCheckedKeys(nodeMap.get(parentKey), parentKey);
        }
    };
    // 遍历所有的节点，检查并处理。
    nodeMap.forEach(function (node, key) {
        processCheckedKeys(node, key);
    });
    var newCheckedKeys = Array.from(checkedSet);
    var newHalfCheckedKeys = Array.from(halfCheckedSet);
    return {
        nodeMap: nodeMap,
        parentMap: parentMap,
        checkedKeys: newCheckedKeys.length ? newCheckedKeys : undefined,
        halfCheckedKeys: newHalfCheckedKeys.length ? newHalfCheckedKeys : undefined,
    };
}

/*
 * @Author: HxB
 * @Date: 2022-04-26 15:18:13
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-03-21 10:38:46
 * @Description: Promise 常用函数，或者扩展函数。
 * @FilePath: \js-xxx\src\Promise\index.ts
 */
/**
 * 睡眠指定时间，或者 mock 接口数据。
 * @example
 * await sleep(1000); /// 等待 1000 毫秒再执行后面的
 * await sleep(1000, '1'); /// 等待 1000 毫秒再执行后面的，并且返回 '1'，方便 mock 数据。
 * @param milliseconds 睡眠时间
 * @param returnValue 返回值
 * @returns
 * @category Promise-相关
 */
function sleep(milliseconds, returnValue) {
    return new Promise(function (resolve) { return setTimeout(function () { return resolve(returnValue); }, milliseconds); });
}
/**
 * 参考了 to.js，扩展 Promise 用来直接帮助执行且处理异常。
 * promise 报错不会阻断后面的 Promise，适用于多个 await Promise 情况。
 * @example
 * to(Promise.resolve(1)); /// Promise.resolve(1)
 * // 也可挂载在 Promise 原型上
 * @param promise promise
 * @param res 成功回调
 * @param rej 失败回调
 * @returns
 * @category Promise-相关
 */
function to(promise, res, rej) {
    return promise
        .then(function (data) {
        res && res(data);
        return data;
    })
        .catch(function (e) {
        rej && rej(e);
        console.log('js-xxx:toError--->', e);
    });
}
/**
 * 自定义封装 Promise 的 finally 方法，小程序使用。
 * @example
 * customFinally(Promise.resolve(1), () => console.log(1)); /// finally 回调
 * // 也可挂载在 Promise 原型上
 * @param promise 要封装的 Promise 对象
 * @param onFinally finally 回调函数 (可选)
 * @returns
 * @category Promise-相关
 */
function customFinally(promise, onFinally) {
    return promise.then(function (value) {
        // 在 Promise 被 resolved 后执行 finally 回调，并将 resolved 值传递下去
        return Promise.resolve(onFinally && onFinally()).then(function () { return value; });
    }, function (reason) {
        // 在 Promise 被 rejected 后执行 finally 回调，并将原始的 rejected 值抛出
        return Promise.resolve(onFinally && onFinally()).then(function () {
            throw reason;
        });
    });
}
/**
 * Promise 重试
 * @example
 * retry(() => Promise.reject(new Error('error')), 3); /// Promise.reject(new Error('error')) 执行 3 次
 * @param promise promise
 * @param count 次数
 * @param delay 延迟时间
 * @returns
 * @category Promise-相关
 */
function retry(promise, count, delay) {
    var _this = this;
    if (count === void 0) { count = 0; }
    if (delay === void 0) { delay = 0; }
    return new Promise(function (resolve, reject) {
        promise
            .then(function (res) {
            resolve(res);
        })
            .catch(function (e) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('js-xxx:retryError--->', e);
                        if (!(count > 0)) return [3 /*break*/, 2];
                        // 此处也可使用 setTimeout 实现
                        return [4 /*yield*/, sleep(delay)];
                    case 1:
                        // 此处也可使用 setTimeout 实现
                        _a.sent();
                        --count;
                        resolve(retry(promise, count, delay));
                        return [3 /*break*/, 3];
                    case 2:
                        reject('重试结束');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });
}
/**
 * 同步执行 promise，已做错误处理。
 * @example
 * await all(...promise array); /// [...result array]
 * @param promises promises
 * @param errorHandler errorHandler
 * @returns
 * @category Promise-相关
 */
function all(promises, errorHandler) {
    return Promise.all(promises).catch(function (e) { return errorHandler && errorHandler(e); });
}
/**
 * 同步执行多个 promise，返回最先成功的结果，已做错误处理。
 * @example
 * await any(...promise array); /// success result
 * @param promises promises
 * @param errorHandler errorHandler
 * @returns
 * @category Promise-相关
 */
function any(promises, errorHandler) {
    return Promise.any(promises).catch(function (e) { return errorHandler && errorHandler(e); });
}
/**
 * New 一个自带错误处理的 Promise，适用于只处理成功情况，不关注失败的 Promise，省去写 catch 的时间与空间。
 * @example
 * new catchPromise(resolve, reject, rejectHandler); /// Promise
 * @param promiseHandler promiseHandler
 * @param errorHandler errorHandler
 * @returns
 * @category Promise-相关
 */
function catchPromise(promiseHandler, errorHandler) {
    return new Promise(promiseHandler).catch(function (e) { return errorHandler && errorHandler(e); });
}

/*
 * @Author: HxB
 * @Date: 2022-06-04 16:30:04
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-08-23 10:39:50
 * @Description: localStorage 与 sessionStorage
 * @FilePath: \js-xxx\src\Storage\index.ts
 */
// 加密与过期设置参考 https://juejin.cn/post/7104301566857445412
function _tempSet(key, value, storeType) {
    try {
        var newVal = void 0;
        var type = getType(value);
        switch (type) {
            case 'null':
            case 'undefined':
                storeType === 'L' ? window.localStorage.removeItem(key) : window.sessionStorage.removeItem(key);
                return true;
            case 'object':
            case 'array':
                newVal = JSON.stringify(value);
                break;
            case 'number':
            case 'boolean':
            case 'string':
            default:
                newVal = "[X_TYPE_".concat(type, "]").concat(value);
                break;
        }
        storeType === 'L' ? window.localStorage.setItem(key, newVal) : window.sessionStorage.setItem(key, newVal);
        return true;
    }
    catch (e) {
        console.log('js-xxx:storageSetError--->', e);
        return false;
    }
}
function _tempGet(key, storeType) {
    var result = storeType === 'L' ? window.localStorage.getItem(key) : window.sessionStorage.getItem(key);
    result = isJSON(result) ? JSON.parse(result) : result;
    var numberType = '[X_TYPE_number]';
    var stringType = '[X_TYPE_string]';
    var booleanType = '[X_TYPE_boolean]';
    var type = getType(result);
    switch (type) {
        case 'string':
            if (result.includes(numberType)) {
                result = result.replace(numberType, '');
                if (isDecimal(result) || isInteger(result)) {
                    return parseFloat(result);
                }
                return result;
            }
            if (result.includes(stringType)) {
                result = result.replace(stringType, '');
                return result;
            }
            if (result.includes(booleanType)) {
                result = result.replace(booleanType, '');
                if (result === 'true' || result === 'false') {
                    return result === 'true';
                }
                return result;
            }
            return result;
        case 'object':
        case 'array':
            return result;
        default:
            return result;
    }
}
/**
 * 获取 localStorage
 * @example
 * localStorageGet("key"); /// 处理过后的 value，不需要再 decode 。
 * @param key 存储 key
 * @returns
 * @category Storage-存储相关
 */
function localStorageGet(key) {
    return _tempGet(key, 'L');
}
/**
 * 设置 localStorage
 * @example
 * localStorageSet("key", "value"); /// 存储时不需要处理数据，value === null|undefined 清除数据。(boolean)
 * @param key 存储 key
 * @param value 存储 value，value === null|undefined 清除数据。
 * @returns
 * @category Storage-存储相关
 */
function localStorageSet(key, value) {
    return _tempSet(key, value, 'L');
}
/**
 * 获取 sessionStorage
 * @example
 * sessionStorageGet("key"); /// 处理过后的 value，不需要再 decode 。
 * @param key 存储 key
 * @returns
 * @category Storage-存储相关
 */
function sessionStorageGet(key) {
    return _tempGet(key, 'S');
}
/**
 * 设置 sessionStorage
 * @example
 * sessionStorageSet("key", "value"); /// 存储时不需要处理数据，value === null|undefined 清除数据。
 * @param key 存储 key
 * @param value 存储 value，value === null|undefined 清除数据。
 * @returns
 * @category Storage-存储相关
 */
function sessionStorageSet(key, value) {
    return _tempSet(key, value, 'S');
}
/**
 * 获取 localStorage 对象值
 * @example
 * getLocalObj("key"); /// 处理过后的 value，不需要再 decode，且有默认值 {}。
 * @param key 存储 key
 * @returns
 * @category Storage-存储相关
 */
function getLocalObj(key) {
    var _a;
    return (_a = _tempGet(key, 'L')) !== null && _a !== void 0 ? _a : {};
}
/**
 * 获取 sessionStorage 对象值
 * @example
 * getSessionObj("key"); /// 处理过后的 value，不需要再 decode，且有默认值 {}。
 * @param key 存储 key
 * @returns
 * @category Storage-存储相关
 */
function getSessionObj(key) {
    var _a;
    return (_a = _tempGet(key, 'S')) !== null && _a !== void 0 ? _a : {};
}
/**
 * 获取 localStorage 数组值
 * @example
 * getLocalArr("key"); /// 处理过后的 value，不需要再 decode，且有默认值 []。
 * @param key 存储 key
 * @returns
 * @category Storage-存储相关
 */
function getLocalArr(key) {
    var _a;
    return (_a = _tempGet(key, 'L')) !== null && _a !== void 0 ? _a : [];
}
/**
 * 获取 sessionStorage 数组值
 * @example
 * getSessionArr("key"); /// 处理过后的 value，不需要再 decode，且有默认值 []。
 * @param key 存储 key
 * @returns
 * @category Storage-存储相关
 */
function getSessionArr(key) {
    var _a;
    return (_a = _tempGet(key, 'S')) !== null && _a !== void 0 ? _a : [];
}
/**
 * 获取 Storage 加密数据
 * @example
 * getDecodeStorage("key"); /// 处理过后的 value，不需要再 decode 和解密。
 * @param key 存储 key
 * @param isLocal 是否 localStorage
 * @returns
 * @category Storage-存储相关
 */
function getDecodeStorage(key, isLocal) {
    if (isLocal === void 0) { isLocal = true; }
    var data = _tempGet(md5(key), isLocal ? 'L' : 'S');
    return data === null || data === undefined ? data : decrypt(data);
}
/**
 * 设置 Storage 加密数据
 * @example
 * setEncodeStorage("key", "value"); /// 存储时不需要处理数据，自动加密，value === null|undefined 清除数据。(boolean)
 * @param key 存储 key
 * @param value 存储 value 字符串，value === null|undefined 清除数据。
 * @param isLocal 是否 localStorage
 * @returns
 * @category Storage-存储相关
 */
function setEncodeStorage(key, value, isLocal) {
    if (isLocal === void 0) { isLocal = true; }
    return _tempSet(md5(key), value === null || value === undefined ? value : encrypt(value), isLocal ? 'L' : 'S');
}

/* eslint-disable indent */
/**
 * 显示 Toast
 * `export function showToast(options: xToastOptions);`
 * @example
 * showToast({ type: 'success', content: '这是一个演示 Toast' }); /// 显示 success 类型的 toast
 * @param options 显示配置
 * @returns
 * @category Toast-组件
 */
var showToast = (function () {
    var defaultOptions = {
        type: 'default',
        content: '',
        delay: 2600,
        position: 'center',
        parent: 'body',
        color: 'whitesmoke',
        background: 'rgba(0, 0, 0, 0.68)',
        fontSize: '1.3rem',
        iconSize: '1.98rem',
    };
    try {
        if (document && !(document === null || document === void 0 ? void 0 : document.getElementById('biugle-toast-style'))) {
            // eslint-disable-next-line spellcheck/spell-checker
            var style = ".biugle-toast{position:fixed;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;max-width:50%;min-width:180px;padding:10px 15px;border-radius:5px;font-size:".concat(defaultOptions.fontSize, ";box-shadow:0 3px 8px rgba(0,0,0,0.15);background-color:").concat(defaultOptions.background, ";color:").concat(defaultOptions.color, ";opacity:1;transition:opacity 0.5s;}.biugle-toast-hide{opacity:0;}.biugle-toast-icon{width:").concat(defaultOptions.iconSize, ";height:").concat(defaultOptions.iconSize, ";background-size:100% 100%;background-repeat:no-repeat;background-position:center center;}.biugle-toast-icon.biugle-default{display:none;}.biugle-toast-content{word-break:break-all;word-wrap:break-word;white-space:pre-wrap;font-weight:400;letter-spacing:1.5px;margin:1.1px;padding-left:1.66px;text-align:center;}.biugle-toast-icon.biugle-loading{animation:biugle-toast-rotate 1s linear infinite;}.biugle-toast-top-center{top:3%;left:50%;transform:translateX(-50%);}.biugle-toast-top-left{top:3%;left:3%;}.biugle-toast-top-right{top:3%;right:3%;}.biugle-toast-bottom-center{bottom:3%;left:50%;transform:translateX(-50%);}.biugle-toast-bottom-left{bottom:3%;left:3%;}.biugle-toast-bottom-right{bottom:3%;right:3%;}.biugle-toast-center{top:50%;left:50%;transform:translate(-50%,-50%);}@keyframes biugle-toast-rotate{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}");
            var styleElement = document.createElement('style');
            styleElement.id = 'biugle-toast-style';
            styleElement.innerHTML = style;
            document.head.appendChild(styleElement);
        }
    }
    catch (e) {
        log({ toastError: e });
    }
    function _createToast(options) {
        var toast = document.createElement('div');
        toast.classList.add('biugle-toast', "biugle-toast-".concat(options.position));
        toast.style.color = options.color || defaultOptions.color;
        toast.style.background = options.background || defaultOptions.background;
        toast.style.fontSize = options.fontSize || defaultOptions.fontSize;
        toast.innerHTML = "<div class=\"biugle-toast-icon biugle-".concat(options.type, "\"\n    style=\"background-image: url(").concat(ICONS[options.type || 'default'], ");\n    width: ").concat(options.iconSize || defaultOptions.iconSize, ";\n    height: ").concat(options.iconSize || defaultOptions.iconSize, ";\"></div>\n    <div class=\"biugle-toast-content\">").concat(options.content, "</div>");
        return toast;
    }
    function _showToast(options) {
        var _a;
        // 合并对象配置
        var newOptions = Object.assign({}, defaultOptions, options);
        var toast = _createToast(newOptions);
        (_a = document.querySelector(newOptions.parent || 'body')) === null || _a === void 0 ? void 0 : _a.appendChild(toast);
        if (newOptions.delay && newOptions.type !== 'loading') {
            setTimeout(function () {
                hideToast(toast);
            }, newOptions.delay);
        }
        return toast;
    }
    return function (options) {
        var toast = _showToast(options);
        return toast;
    };
})();
/**
 * 隐藏 toast 不传值关闭所有 toast
 * @example
 * const $toast = showToast({ content: '这是一个演示 Toast' }); /// hideToast($toast);
 * @param toast toast 实例
 * @returns
 * @category Toast-组件
 */
function hideToast(toast) {
    var _a;
    if (!toast) {
        var toasts = document.querySelectorAll('.biugle-toast');
        toasts === null || toasts === void 0 ? void 0 : toasts.forEach(function (toast) { return toast && hideToast(toast); });
        return;
    }
    (_a = toast === null || toast === void 0 ? void 0 : toast.classList) === null || _a === void 0 ? void 0 : _a.toggle('biugle-toast-hide');
    setTimeout(function () {
        toast === null || toast === void 0 ? void 0 : toast.remove();
    }, 500);
}
/**
 * 快速展示 Toast
 * @example
 * const hide = Toast('这是一个快速演示 Toast'); /// hide();
 * @param msg 内容
 * @param type 类型
 * @returns
 * @category Toast-组件
 */
function Toast(msg, type) {
    if (type === void 0) { type = 'default'; }
    if (!msg) {
        return;
    }
    var $_toast = showToast({
        content: msg,
        type: type !== null && type !== void 0 ? type : 'default',
    });
    return function () { return hideToast($_toast); };
}
/**
 * Loading Toast 不会自动关闭
 * @example
 * const hide = Loading(msg?); /// hide();
 * @param msg 内容
 * @returns
 * @category Toast-组件
 */
function Loading(msg) {
    var $_loading = showToast({
        content: msg !== null && msg !== void 0 ? msg : '...',
        type: 'loading',
    });
    return function () { return hideToast($_loading); };
}

/* eslint-disable spellcheck/spell-checker */
/*
 * @Author: HxB
 * @Date: 2022-04-26 14:10:35
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-03-01 17:30:30
 * @Description: websocket
 * @FilePath: \js-xxx\src\WebSocket\index.ts
 */
var xWebSocket;
// 用于设置 websocket 连接超时问题 timeout 计时器
var xWebSocketTimer;
// eslint-disable-next-line spellcheck/spell-checker
/**
 * 初始化 websocket
 * @category WebSocket-封装
 * @example
 * initWebSocket({ url: 'ws://localhost:8080/ws', timeout: 30000, onOpen: () => {}, onMessage: () => {}, onClose: () => {}, onError: () => {}, reconnect: {} })
 * @param options `{url, onOpen, onMessage, onClose, onError, timeout, reconnect: {times, delay, onReconnect} | boolean} WebSocket 配置`
 * @returns
 */
function initWebSocket(options) {
    var _a;
    xWebSocket = new WebSocket(options.url);
    /* 是否连接超时计时器 */
    if (!xWebSocketTimer) {
        xWebSocketTimer = setTimeout(function () {
            xWebSocketTimer = null;
        }, (_a = options.timeout) !== null && _a !== void 0 ? _a : 10000);
    }
    xWebSocket.onopen = function () {
        var _a;
        (_a = options === null || options === void 0 ? void 0 : options.onOpen) === null || _a === void 0 ? void 0 : _a.call(options, xWebSocket, options);
    };
    xWebSocket.onmessage = function (event) {
        var _a;
        (_a = options === null || options === void 0 ? void 0 : options.onMessage) === null || _a === void 0 ? void 0 : _a.call(options, event, xWebSocket, options);
    };
    xWebSocket.onerror = function (event) {
        var _a;
        (_a = options === null || options === void 0 ? void 0 : options.onError) === null || _a === void 0 ? void 0 : _a.call(options, event, xWebSocket, options);
    };
    xWebSocket.onclose = function () {
        var _a, _b, _c, _d, _e;
        /* 未超时就继续连接 */
        if (xWebSocketTimer) {
            // 记得重新赋值
            xWebSocket = initWebSocket(options);
            return;
        }
        (_a = options === null || options === void 0 ? void 0 : options.onClose) === null || _a === void 0 ? void 0 : _a.call(options, xWebSocket, options);
        /* 未超时不算重连，超时计算结束后看看是否有配置重连机制，有则进行重连。 */
        var times = (_c = (_b = options === null || options === void 0 ? void 0 : options.reconnect) === null || _b === void 0 ? void 0 : _b.times) !== null && _c !== void 0 ? _c : 1;
        if (options.reconnect && times > 0) {
            times--;
            setTimeout(function () {
                var _a, _b;
                (_b = (_a = options.reconnect) === null || _a === void 0 ? void 0 : _a.onReconnect) === null || _b === void 0 ? void 0 : _b.call(_a, xWebSocket, options);
                // 重新赋值
                xWebSocket = initWebSocket(__assign(__assign({}, options), { reconnect: __assign(__assign({}, options.reconnect), { times: times }) }));
            }, (_e = (_d = options.reconnect) === null || _d === void 0 ? void 0 : _d.delay) !== null && _e !== void 0 ? _e : 1000);
        }
    };
    // @ts-ignore
    xWebSocket.options = options;
    // @ts-ignore
    xWebSocket.sendWsMsg = sendWsMsg;
    // @ts-ignore
    xWebSocket.closeWebSocket = closeWebSocket;
    // @ts-ignore
    xWebSocket.setWsBinaryType = setWsBinaryType;
    // @ts-ignore
    xWebSocket.buf2obj = buf2obj;
    // @ts-ignore
    xWebSocket.obk2buf = obj2buf;
    // xWebSocket.readyState == 1 正常状态
    return xWebSocket;
}
/**
 * 发送消息
 * @category WebSocket-封装
 * @example
 * sendWsMsg({ type: 'login', data: { username: 'admin', password: '123456' }}, true); /// true/false
 * sendWsMsg('testMsg'); /// true/false
 * @param message 消息
 * @param isJSONEncode 是否对数据 JSON 序列化
 * @returns
 */
function sendWsMsg(message, isJSONEncode) {
    if (isJSONEncode === void 0) { isJSONEncode = false; }
    if (!xWebSocket) {
        return false;
    }
    if (xWebSocket.readyState == 1) {
        xWebSocket.send(isJSONEncode ? JSON.stringify(message) : message);
        return true;
    }
    else {
        return false;
    }
}
/**
 * 关闭 websocket
 * @category WebSocket-封装
 * @example
 * closeWebSocket(); /// true/false
 * @returns
 */
function closeWebSocket() {
    if (!xWebSocket) {
        return false;
    }
    xWebSocket.close();
    return true;
}
/**
 * `设置 websocket binaryType default: 'blob'`
 * @category WebSocket-封装
 * @example
 * setWsBinaryType(); /// true/false
 * @param binaryType `BinaryType 二进制类型 default: 'arraybuffer'`
 * @returns
 */
function setWsBinaryType(binaryType) {
    if (binaryType === void 0) { binaryType = 'arraybuffer'; }
    if (!xWebSocket) {
        return false;
    }
    xWebSocket.binaryType = binaryType;
    return true;
}
// eslint-disable-next-line spellcheck/spell-checker
// 使用 grpc 或 protobuf 记得 buffer2obj 和 obj2buffer
// 使用专用工具（pbjs/protoc/protobufjs-cli）进行封装与解析
/**
 * buffer to object
 * @category WebSocket-封装
 * @example
 * const _protoBuffer = _proto.lookupType('MonitorMessage');
 * const obj = buf2obj(event.data, _protoBuffer);
 * console.log(obj);
 * @param data buffer 数据
 * @param transfer 转换器
 * @returns
 */
function buf2obj(data, transfer) {
    try {
        var result = transfer.toObject(transfer.decode(new Uint8Array(data)), {
            enums: String,
            longs: String,
            bytes: String,
            defaults: true,
            arrays: true,
            objects: true,
            oneofs: true,
        });
        return result;
    }
    catch (e) {
        return data;
    }
}
/**
 * object to buffer
 * @category WebSocket-封装
 * @example
 * const _protoBuffer = _proto.lookupType('MonitorMessage');
 * const bufferData = obj2buf(obj, _protoBuffer);
 * console.log(bufferData);
 * webSocket.send(bufferData);
 * @param data object 数据
 * @param transfer 转换器
 * @returns
 */
function obj2buf(data, transfer) {
    try {
        var result = transfer.encode(transfer.create(data !== null && data !== void 0 ? data : {})).finish();
        return result;
    }
    catch (e) {
        return data;
    }
}
/**
 * 获取 websocket 实例
 * @category WebSocket-封装
 * @example
 * getWebSocket(); /// [websocket object]
 * @returns
 */
function getWebSocket() {
    return xWebSocket;
}

/*
 * @Author: HxB
 * @Date: 2024-05-13 15:08:38
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-08-23 11:14:06
 * @Description: i18n 国际化支持
 * @FilePath: \js-xxx\src\i18n\index.ts
 */
var I18N_KEY = 'js-xxx-lang';
/**
 * i18n 国际化支持类
 * 若需切换语言后更新页面内容，可以在切换语言的时候同步更新全局状态 lang，并将全局状态 lang 设置为 `t$` 的参数即可。
 * `具体可参考 web_base 或 vue-admin 案例`
 * [web_base](https://github.com/biugle/web_base)
 * [vue-admin](https://github.com/biugle/vue-admin)
 * @example
 * import { zh_CN, en_US } from './locales.data'
 * export const i18nCustom = new i18n({
 *    resources: {
 *     zh_CN: {
 *      key: 'zh_CN',
 *     desc: '简体中文',
 *      translation: zh_CN,
 *    },
 *     en_US: {
 *      key: 'en_US',
 *      desc: 'English',
 *     translation: en_US,
 *     },
 *   },
 *   defaultLang: 'zh_CN',
 * });
 * @returns
 * @category i18n-多语言(国际化)
 */
var i18n = /** @class */ (function () {
    function i18n(options) {
        this.langList = {};
        this.translations = {};
        if (options.resources) {
            this.loadResources(options.resources);
        }
        // 从 localStorage 获取先前选择的语言
        this.lang = getCookie(I18N_KEY) || localStorageGet(I18N_KEY) || options.defaultLang || getBrowserLang() || 'zh-CN';
    }
    // 加载语言资源
    i18n.prototype.loadResources = function (resources) {
        var _this = this;
        Object.keys(resources).forEach(function (lang) {
            var _a = resources[lang], key = _a.key, desc = _a.desc, translation = _a.translation;
            _this.langList[lang] = { key: key, desc: desc };
            _this.translations[lang] = translation;
        });
        return this; // 支持方法链式调用
    };
    // 设置当前语言
    i18n.prototype.setLang = function (language, callback) {
        this.lang = language;
        // 将当前语言保存到 localStorage
        localStorage.setItem(I18N_KEY, language);
        callback === null || callback === void 0 ? void 0 : callback(language);
        return this; // 支持方法链式调用
    };
    // 获取当前语言
    i18n.prototype.getLang = function () {
        return this.lang;
    };
    // 获取支持的语言列表
    i18n.prototype.getLangList = function () {
        return Object.values(this.langList);
    };
    // 获取特定键和语言的翻译内容
    i18n.prototype.getTranslation = function (key, language) {
        if (language === void 0) { language = this.lang; }
        var translations = this.translations[language];
        if (!translations) {
            return null;
        }
        return translations[key] || null;
    };
    // 获取特定语言的所有翻译内容
    i18n.prototype.getTranslations = function (language) {
        if (language === void 0) { language = this.lang; }
        return this.translations[language] || null;
    };
    // 从支持的语言中移除一种语言
    i18n.prototype.removeLang = function (language) {
        delete this.langList[language];
        delete this.translations[language];
        return this; // 支持方法链式调用
    };
    // 添加一种新的语言到支持的语言列表中
    i18n.prototype.addLang = function (language, langData) {
        this.langList[language] = langData;
        this.translations[language] = langData.translation;
        return this; // 支持方法链式调用
    };
    // 将键翻译为当前语言-后续考虑优先级为当前语言、默认语言、[key]
    i18n.prototype.t$ = function (key, obj, language) {
        var translation = this.getTranslation(key, language);
        if (!translation) {
            return "[".concat(key, "]");
        }
        return loadStr(translation, obj);
    };
    return i18n;
}());
/**
 * 获取浏览器语言。
 * 返回的是中划线格式，如：zh-CN 。
 * @example
 * // 如果浏览器语言为中文（简体）
 * getBrowserLang(); // 'zh-CN'
 * // 如果浏览器语言为英文
 * getBrowserLang(); // 'en-US'
 * // 限制返回语言为支持的语言之一
 * getBrowserLang({ supportLangs: ['zh-CN', 'en-US'] }); // 'zh-CN' 或 'en-US'
 * // 限制返回语言为不支持的语言之一
 * getBrowserLang({ supportLangs: ['es-ES', 'fr-FR'] }); // 'en-US'
 * @param opts 可选配置项。
 * @param opts.supportLangs 可支持的语言，传入时，会用此数组来限制返回的语言值，防止返回的 navigator.language 和系统定义的语言值不匹配。
 * @returns
 * @category i18n-多语言(国际化)
 */
function getBrowserLang(opts) {
    var e_1, _a;
    // 默认语言
    var browserLang = 'en-US';
    // 确保 navigator 对象存在且语言属性有效
    var isNavigatorLanguageValid = typeof navigator !== 'undefined' && typeof navigator.language === 'string';
    if (isNavigatorLanguageValid) {
        // 获取浏览器语言
        browserLang = navigator.language.split('-').join('-');
    }
    // 语言映射表
    var langMap = new Map([
        [/^en/i, 'en-US'],
        [/^zh/i, 'zh-CN'],
        [/^fr/i, 'fr-FR'],
        [/^ru/i, 'ru-RU'],
        [/^de/i, 'de-DE'],
        [/^ja/i, 'ja-JP'],
        [/^ko/i, 'ko-KR'],
        [/^pt/i, 'pt-BR'],
        [/^es/i, 'es-MX'],
        [/^it/i, 'it-IT'],
        [/^ar/i, 'ar-SA'],
        [/^nl/i, 'nl-NL'],
        [/^sv/i, 'sv-SE'],
        [/^da/i, 'da-DK'],
        [/^fi/i, 'fi-FI'],
        [/^no/i, 'no-NO'],
        [/^pl/i, 'pl-PL'],
        [/^tr/i, 'tr-TR'],
        [/^he/i, 'he-IL'],
        [/^cs/i, 'cs-CZ'],
        [/^hu/i, 'hu-HU'],
        [/^el/i, 'el-GR'],
        [/^th/i, 'th-TH'],
        [/^vi/i, 'vi-VN'],
        [/^id/i, 'id-ID'],
        [/^ms/i, 'ms-MY'],
        [/^hi/i, 'hi-IN'],
        [/^bn/i, 'bn-BD'],
        [/^uk/i, 'uk-UA'], // 乌克兰语 - 乌克兰
    ]);
    try {
        // 匹配并设置语言
        for (var _b = __values(langMap.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), regex = _d[0], lang = _d[1];
            if (regex.test(browserLang)) {
                browserLang = lang;
                break;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    // 过滤不支持的语言
    var supportLangs = opts === null || opts === void 0 ? void 0 : opts.supportLangs;
    if (supportLangs && !supportLangs.includes(browserLang)) {
        browserLang = 'en-US';
    }
    return browserLang;
}
/**
 * 获取默认语言。
 * 返回的是中划线格式，如：zh-CN 。
 * 从 Cookie 获取语言，如果不存在则获取 local 存储中的语言，都不存在则使用浏览器语言。
 * @example
 * getDefaultLang({ supportLangs: ['zh-CN', 'en-US'] }); // 'zh-CN' 或 'en-US'
 * // 指定一个自定义 key
 * getDefaultLang({ supportLangs: ['fr-FR', 'es-ES'], key: 'USER_LANG' }); // 'fr-FR' 或 'es-ES'
 * // 如果语言不在支持的语言列表中，则返回默认语言 'en-US'。
 * getDefaultLang({ supportLangs: ['es-ES'], key: 'USER_LANG' }); // 'en-US' (假设获取的语言为 'fr_FR')
 * @param opts 可选配置项。
 * @param opts.supportLangs 支持的语言列表。如果返回的语言不在此列表中，将返回默认语言 'en-US'。
 * @param opts.key 用于获取语言的 key 默认为 'js-xxx-lang'
 * @returns
 * @category i18n-多语言(国际化)
 */
function getDefaultLang(opts) {
    var key = (opts === null || opts === void 0 ? void 0 : opts.key) || I18N_KEY;
    var supportLangs = (opts === null || opts === void 0 ? void 0 : opts.supportLangs) || [];
    // 从 Cookie 获取语言，如果不存在则获取 local 存储中的语言，都不存在则使用浏览器语言。
    var lang = getCookie(key) || localStorageGet(key) || getBrowserLang({ supportLangs: supportLangs });
    lang = lang.replace('_', '-');
    // 检查语言是否在支持的语言列表中
    if (supportLangs.length && !supportLangs.includes(lang)) {
        return 'en-US';
    }
    else {
        return lang;
    }
}

exports.ANIMALS = ANIMALS;
exports.BASE_CHAR_LOW = BASE_CHAR_LOW;
exports.BASE_CHAR_UP = BASE_CHAR_UP;
exports.BASE_NUMBER = BASE_NUMBER;
exports.BLOOD_GROUP = BLOOD_GROUP;
exports.BLOOD_GROUP_INFO = BLOOD_GROUP_INFO;
exports.BS_COLORS = BS_COLORS;
exports.CODE_MSG = CODE_MSG;
exports.CONSTELLATION = CONSTELLATION;
exports.CONTENT_TYPES = CONTENT_TYPES;
exports.ICONS = ICONS;
exports.ID_CARD_PROVINCE = ID_CARD_PROVINCE;
exports.KEYBOARD_CODE = KEYBOARD_CODE;
exports.Loading = Loading;
exports.MAN = MAN;
exports.MONTHS = MONTHS;
exports.PY_MAPS = PY_MAPS;
exports.ROLES = ROLES;
exports.Speaker = Speaker;
exports.TRANSFER_STR = TRANSFER_STR;
exports.Toast = Toast;
exports.WEEKS = WEEKS;
exports.WOMAN = WOMAN;
exports.abs = abs;
exports.add = add;
exports.addLongPressEvent = addLongPressEvent;
exports.addSpace = addSpace;
exports.all = all;
exports.any = any;
exports.appendLink = appendLink;
exports.appendScript = appendScript;
exports.arr2select = arr2select;
exports.arrObj2objArr = arrObj2objArr;
exports.arrayFill = arrayFill;
exports.arrayShuffle = arrayShuffle;
exports.arraySort = arraySort;
exports.average = average;
exports.banConsole = banConsole;
exports.base64Decode = base64Decode;
exports.base64Encode = base64Encode;
exports.bindMoreClick = bindMoreClick;
exports.buf2obj = buf2obj;
exports.calcCron = calcCron;
exports.calcDate = calcDate;
exports.calcFontSize = calcFontSize;
exports.calculate = calculate;
exports.catchPromise = catchPromise;
exports.changeURL = changeURL;
exports.checkFileExt = checkFileExt;
exports.checkIdCard = checkIdCard;
exports.checkPassWordLevel = checkPassWordLevel;
exports.checkUpdate = checkUpdate;
exports.checkVersion = checkVersion;
exports.clearCookies = clearCookies;
exports.closeFullscreen = closeFullscreen;
exports.closeWebSocket = closeWebSocket;
exports.compareDate = compareDate;
exports.compareTo = compareTo;
exports.contains = contains;
exports.copyToClipboard = copyToClipboard;
exports.countdown = countdown;
exports.createChangeLogListener = createChangeLogListener;
exports.createClickLogListener = createClickLogListener;
exports.createScrollLogListener = createScrollLogListener;
exports.createTimeLogListener = createTimeLogListener;
exports.curryIt = curryIt;
exports.customFinally = customFinally;
exports.cx = cx;
exports.data2Arr = data2Arr;
exports.data2Obj = data2Obj;
exports.dataTo = dataTo;
exports.debounce = debounce;
exports.decrypt = decrypt;
exports.deepClone = deepClone;
exports.difference = difference;
exports.disableConflictEvent = disableConflictEvent;
exports.div = div;
exports.download = download;
exports.downloadContent = downloadContent;
exports.downloadFile = downloadFile;
exports.downloadImg = downloadImg;
exports.emitEvent = emitEvent;
exports.emitKeyboardEvent = emitKeyboardEvent;
exports.empty = empty;
exports.encrypt = encrypt;
exports.eslintRules = eslintRules;
exports.every = every;
exports.exportFile = exportFile;
exports.filterTreeData = filterTreeData;
exports.findChildren = findChildren;
exports.findMaxKey = findMaxKey;
exports.findParents = findParents;
exports.float = float;
exports.forEach = forEach;
exports.forceToStr = forceToStr;
exports.formatBytes = formatBytes;
exports.formatDate = formatDate;
exports.formatJSON = formatJSON;
exports.formatNumber = formatNumber;
exports.formatRh = formatRh;
exports.getAge = getAge;
exports.getAnimal = getAnimal;
exports.getBSColor = getBSColor;
exports.getBaseURL = getBaseURL;
exports.getBloodGroup = getBloodGroup;
exports.getBrowserLang = getBrowserLang;
exports.getConstellation = getConstellation;
exports.getContentType = getContentType;
exports.getCookie = getCookie;
exports.getCryptoJS = getCryptoJS;
exports.getDataStr = getDataStr;
exports.getDateDifference = getDateDifference;
exports.getDateList = getDateList;
exports.getDateTime = getDateTime;
exports.getDayInYear = getDayInYear;
exports.getDecodeStorage = getDecodeStorage;
exports.getDefaultLang = getDefaultLang;
exports.getFileNameFromUrl = getFileNameFromUrl;
exports.getFingerprint = getFingerprint;
exports.getFirstVar = getFirstVar;
exports.getKey = getKey;
exports.getLastVar = getLastVar;
exports.getLocalArr = getLocalArr;
exports.getLocalObj = getLocalObj;
exports.getMonthDayCount = getMonthDayCount;
exports.getMonthInfo = getMonthInfo;
exports.getNumberReg = getNumberReg;
exports.getPercentage = getPercentage;
exports.getPinYin = getPinYin;
exports.getQueryString = getQueryString;
exports.getRandColor = getRandColor;
exports.getRandDate = getRandDate;
exports.getRandIp = getRandIp;
exports.getRandNum = getRandNum;
exports.getRandStr = getRandStr;
exports.getRandVar = getRandVar;
exports.getScrollParent = getScrollParent;
exports.getScrollPercent = getScrollPercent;
exports.getSearchParams = getSearchParams;
exports.getSelectText = getSelectText;
exports.getSessionArr = getSessionArr;
exports.getSessionObj = getSessionObj;
exports.getSortVar = getSortVar;
exports.getStyleByName = getStyleByName;
exports.getTimeCode = getTimeCode;
exports.getTimezone = getTimezone;
exports.getTreeCheckNodes = getTreeCheckNodes;
exports.getTreeData = getTreeData;
exports.getType = getType;
exports.getUTCTime = getUTCTime;
exports.getUserAgent = getUserAgent;
exports.getV = getV;
exports.getVarSize = getVarSize;
exports.getViewportSize = getViewportSize;
exports.getWebSocket = getWebSocket;
exports.getWeekInfo = getWeekInfo;
exports.globalError = globalError;
exports.hasKey = hasKey;
exports.hasSpecialChar = hasSpecialChar;
exports.hideToast = hideToast;
exports.html2str = html2str;
exports.i18n = i18n;
exports.inRange = inRange;
exports.initNotification = initNotification;
exports.initWebSocket = initWebSocket;
exports.insertAfter = insertAfter;
exports.intersection = intersection;
exports.inversion = inversion;
exports.isAccount = isAccount;
exports.isAppleDevice = isAppleDevice;
exports.isArr = isArr;
exports.isArrayBuffer = isArrayBuffer;
exports.isBankCard = isBankCard;
exports.isBlob = isBlob;
exports.isBool = isBool;
exports.isBrowser = isBrowser;
exports.isCSR = isCSR;
exports.isCarCode = isCarCode;
exports.isChinese = isChinese;
exports.isChrome = isChrome;
exports.isCreditCode = isCreditCode;
exports.isDarkMode = isDarkMode;
exports.isDate = isDate;
exports.isDecimal = isDecimal;
exports.isElement = isElement;
exports.isEmail = isEmail;
exports.isEnglish = isEnglish;
exports.isEqual = isEqual;
exports.isEven = isEven;
exports.isFn = isFn;
exports.isHttp = isHttp;
exports.isInteger = isInteger;
exports.isInvalidDate = isInvalidDate;
exports.isIpAddress = isIpAddress;
exports.isIpv4 = isIpv4;
exports.isIpv6 = isIpv6;
exports.isJSON = isJSON;
exports.isLatitude = isLatitude;
exports.isLongitude = isLongitude;
exports.isMac = isMac;
exports.isMobile = isMobile;
exports.isNaN = isNaN$1;
exports.isNode = isNode;
exports.isNull = isNull;
exports.isNum = isNum;
exports.isObj = isObj;
exports.isPromise = isPromise;
exports.isQQ = isQQ;
exports.isRhNegative = isRhNegative;
exports.isStr = isStr;
exports.isStrongPassWord = isStrongPassWord;
exports.isTel = isTel;
exports.isUndef = isUndef;
exports.isUrl = isUrl;
exports.isWeekday = isWeekday;
exports.isWin = isWin;
exports.javaDecrypt = javaDecrypt;
exports.javaEncrypt = javaEncrypt;
exports.jsonClone = jsonClone;
exports.keyBoardResize = keyBoardResize;
exports.leftJoin = leftJoin;
exports.loadStr = loadStr;
exports.localStorageGet = localStorageGet;
exports.localStorageSet = localStorageSet;
exports.log = log;
exports.logRunTime = logRunTime;
exports.markNumber = markNumber;
exports.marquee = marquee;
exports.maskString = maskString;
exports.md5 = md5;
exports.ms = ms;
exports.obj2buf = obj2buf;
exports.observeResource = observeResource;
exports.offDefaultEvent = offDefaultEvent;
exports.onClick2MoreClick = onClick2MoreClick;
exports.onResize = onResize;
exports.openFileSelect = openFileSelect;
exports.openFullscreen = openFullscreen;
exports.openPreviewFile = openPreviewFile;
exports.parseJSON = parseJSON;
exports.prettierRules = prettierRules;
exports.printDom = printDom;
exports.px2rem = px2rem;
exports.qsParse = qsParse;
exports.qsStringify = qsStringify;
exports.removeCookie = removeCookie;
exports.repeat = repeat;
exports.retry = retry;
exports.rightJoin = rightJoin;
exports.rip = rip;
exports.round = round;
exports.safeDecodeURI = safeDecodeURI;
exports.safeEncodeURI = safeEncodeURI;
exports.same = same;
exports.saveAs = saveAs;
exports.scrollToElement = scrollToElement;
exports.scrollToView = scrollToView;
exports.scrollXTo = scrollXTo;
exports.scrollYTo = scrollYTo;
exports.searchTreeData = searchTreeData;
exports.sendNotification = sendNotification;
exports.sendWsMsg = sendWsMsg;
exports.sessionStorageGet = sessionStorageGet;
exports.sessionStorageSet = sessionStorageSet;
exports.setCookie = setCookie;
exports.setEncodeStorage = setEncodeStorage;
exports.setEventListener = setEventListener;
exports.setIcon = setIcon;
exports.setWsBinaryType = setWsBinaryType;
exports.sha1 = sha1;
exports.sha256 = sha256;
exports.showProcess = showProcess;
exports.showToast = showToast;
exports.showVar = showVar;
exports.sleep = sleep;
exports.slugify = slugify;
exports.sortBy = sortBy;
exports.sortCallBack = sortCallBack;
exports.sortJSON = sortJSON;
exports.stackSticky = stackSticky;
exports.str2html = str2html;
exports.str2unicode = str2unicode;
exports.stringifyJSON = stringifyJSON;
exports.sub = sub;
exports.textCamelCase = textCamelCase;
exports.textSplitCase = textSplitCase;
exports.textTransferCase = textTransferCase;
exports.throttle = throttle;
exports.timeSince = timeSince;
exports.times = times;
exports.to = to;
exports.toBool = toBool;
exports.toFormData = toFormData;
exports.toNum = toNum;
exports.toQueryString = toQueryString;
exports.toStr = toStr;
exports.toggleClass = toggleClass;
exports.transferCSVData = transferCSVData;
exports.transferFileToBase64 = transferFileToBase64;
exports.transferIdCard = transferIdCard;
exports.transferMoney = transferMoney;
exports.transferNumber = transferNumber;
exports.transferScanStr = transferScanStr;
exports.transferSeconds = transferSeconds;
exports.transferTemperature = transferTemperature;
exports.transferTreeData = transferTreeData;
exports.trim = trim;
exports.truncate = truncate;
exports.unicode2str = unicode2str;
exports.union = union;
exports.unique = unique;
exports.useStateData = useStateData;
exports.uuid = uuid;
exports.versionUpgrade = versionUpgrade;
exports.waitUntil = waitUntil;
exports.watermark = watermark;
exports.xAjax = xAjax;
exports.xFetch = xFetch;
exports.xTimer = xTimer;
