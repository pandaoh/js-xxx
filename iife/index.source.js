var $xxx = (function (exports) {
    'use strict';

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
            while (_) try {
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

    /*
     * @Author: HxB
     * @Date: 2022-04-26 14:10:35
     * @LastEditors: DoubleAm
     * @LastEditTime: 2023-03-14 11:15:16
     * @Description: 类型校验等函数
     * @FilePath: \js-xxx\src\Types\index.ts
     */
    /**
     * 获取变量类型
     * Example:
     * `getType(1) => 'number'`
     * `getType(async function(){}) => 'asyncfunction'`
     * @param variable 变量
     * @returns
     */
    function getType(variable) {
        return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
    }
    /**
     * 任意值转换为字符串
     * Example:
     * `toStr({}) => '{}'`
     * `toStr([1, 2]) => '[1,2]'`
     * `toStr(null) => ''`
     * @param value
     * @returns
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
     * Example:
     * `toNum({}) => 0`
     * `toNum([2]) => 2`
     * `toNum('-123') => -123`
     * @param value
     * @returns
     */
    function toNum(value) {
        value = Number(value);
        return isNaN$1(value) ? 0 : value;
    }
    /**
     * 任意值转换为布尔类型
     * Example:
     * `toBool(0) => true`
     * `toBool('') => true`
     * `toBool('', [0, '']) => false`
     * `toBool(0, [0, '']) => false`
     * `toBool('0') => true`
     * `toBool(1) => true`
     * `toBool('false') => false`
     * `toBool('null') => false`
     * `toBool('undefined') => false`
     * `toBool('NaN') => false`
     * `toBool(null) => false`
     * @param value
     * @param falseList
     * @returns
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
     * Example:
     * `isJSON('{"name":"leo", "age":20}') => true`
     * `isJSON('{"name":"leo", age:"20"}') => false`
     * `isJSON(null) => true`
     * @param str 字符串
     * @returns
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
     * Example:
     * `isBool(true) => true`
     * `isBool(null) => false`
     * @param value
     * @returns
     */
    function isBool(value) {
        return getType(value) === 'boolean';
    }
    /**
     * 检查是否 date 类型
     * Example:
     * `isDate(new Date()) => true`
     * `isDate(null) => false`
     * @param value
     * @returns
     */
    function isDate(value) {
        return getType(value) === 'date';
    }
    /**
     * 检查是否字符串类型
     * Example:
     * `isStr('test') => true`
     * `isStr(null) => false`
     * @param value
     * @returns
     */
    function isStr(value) {
        return getType(value) === 'string';
    }
    /**
     * 检查是否 undefined
     * Example:
     * `isUndef(undefined) => true`
     * `isUndef(null) => false`
     * @param value
     * @returns
     */
    function isUndef(value) {
        return getType(value) === 'undefined';
    }
    /**
     * 检查是否 null
     * Example:
     * `isNull(undefined) => false`
     * `isNull(null) => true`
     * @param value
     * @returns
     */
    function isNull(value) {
        return getType(value) === 'null';
    }
    /**
     * 检查是否 number 类型
     * Example:
     * `isNum(NaN) => false`
     * `isNum(1) => true`
     * @param value
     * @returns
     */
    function isNum(value) {
        return getType(value) === 'number' && !Object.is(NaN, value);
    }
    /**
     * 检查是否数组
     * Example:
     * `isArr([]) => true`
     * `isArr({}) => false`
     * @param value
     * @returns
     */
    function isArr(value) {
        return Array.isArray(value);
    }
    /**
     * 检查是否对象
     * Example:
     * `isObj({}) => true`
     * `isObj(null) => false`
     * @param value
     * @returns
     */
    function isObj(value) {
        return getType(value) === 'object';
    }
    /**
     * 检查是否为 dom 元素
     * Example:
     * `isElement(document.body) => true`
     * `isElement(document) => false`
     * `isElement({}) => false`
     * @param value
     * @returns
     */
    function isElement(value) {
        return !!(value && value.nodeType === 1);
    }
    /**
     * 检查是否为 function
     * Example:
     * `isFn(function(){}) => true`
     * `isFn(async function(){}) => true`
     * `isFn(new Promise((resolve, reject) => resolve()) => false`
     * `isFn({}) => false`
     * @param value
     * @returns
     */
    function isFn(value) {
        var type = getType(value);
        return type === 'function' || type === 'generatorfunction' || type === 'asyncfunction';
    }
    /**
     * 检查是否为 Promise
     * Example:
     * `isPromise(function(){}) => false`
     * `isPromise(async function(){}) => false`
     * `isPromise(new Promise((resolve, reject) => resolve())) => true`
     * @param value
     * @returns
     */
    function isPromise(value) {
        return getType(value) === 'promise' || (isFn(value === null || value === void 0 ? void 0 : value.then) && isFn(value === null || value === void 0 ? void 0 : value.catch));
    }
    /**
     * 检查是否为 NaN
     * Example:
     * `isNaN(1) => false`
     * `isNaN(NaN) => true`
     * @param value
     * @returns
     */
    function isNaN$1(value) {
        return Object.is(NaN, value);
    }
    /**
     * 检查是否为 Blob
     * Example:
     * `isBlob(new Blob()) => true`
     * `isBlob(null) => false`
     * @param value
     * @returns
     */
    function isBlob(value) {
        return getType(value) === 'blob';
    }
    /**
     * 检查是否为 ArrayBuffer
     * Example:
     * `isArrayBuffer(new ArrayBuffer()) => true`
     * `isArrayBuffer(null) => false`
     * @param value
     * @returns
     */
    function isArrayBuffer(value) {
        return getType(value) === 'arraybuffer';
    }

    /**
     * 数组对象转对象，按照指定的 key 分组。
     * Example:
     * `data2Obj([{a: 1, b: 2}, {a: 3}, {b: 1}, {c: 1}], 'a') => {1: {a: 1, b: 2}, 3: {a: 3}, undefined: {c: 1}}`
     * `data2Obj([{a: 1, b: 'b1'}, {a: 3}, {a: 2, b: 'b2'}], 'a', 'b') => { '1': 'b1', '2': 'b2', '3': undefined }`
     * @param sourceData 源数据
     * @param key 分组的 key
     * @param vKey 值的 key，默认为整个值。
     * @returns
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
     * Example: `data2Arr([{a: 1, b: 2}, {a: 3}, {b: 1}], 'a') => [1, 3]`
     * @param sourceData 源数据
     * @param key 取值的 key
     * @returns
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
     * Example:
     * `const data = [{ id: 1, name: '张三', score: 98, remark: '语文成绩' }, { id: 3, name: '王五', score: 98 }, { id: 3, name: '王五', score: 99, remark: '最后一条有效成绩' }, { id: 2, name: '李四', score: 100 }];`
     * `arrObj2objArr(data, 'id') => {"id": [1, 2, 3], "name": ["张三", "李四", "王五"], "score": [98, 100, 99], "remark": ["语文成绩", null, "最后一条有效成绩"]}`
     * @param data
     * @param key
     * @returns
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
            console.log('js-xxx:arrObj2objArrError===>', e);
        }
        return result;
    }
    /**
     * 数组去重
     * Example: `arraySet([1, 2, 3, 1, 2, 3]) => [1, 2, 3]`
     * @param arr 数组
     * @returns
     */
    function arraySet(arr) {
        if (!Array.isArray(arr)) {
            return arr;
        }
        if (arr.length == 1) {
            return arr;
        }
        return __spreadArray([], __read(new Set(arr)), false);
    }
    /**
     * 数组去重
     * Example:
     * `unique([1, 2, 3, 1, 2, 3]) => [1, 2, 3]`
     * `unique([{id: 1, value: 'hello'}, {id: 2, value: 'world'}, {id: 2, value: 'world', others: true}], (a, b) => a.id === b.id) => [id1, id2 带 true]`
     * @param arr 数组
     * @param filter 过滤逻辑
     * @returns
     */
    function unique(arr, filter) {
        if (!filter) {
            filter = function (a, b) { return a === b; };
        }
        return arr.filter(function (item, idx, arr) {
            var len = arr.length;
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
     * Example:
     * `sortCallBack('createDt', true) => 按照 createDt 升序排列`
     * `const arr = [{name: '666'}, {name: '333'}]`
     * `arr.sort(sortCallBack('name')) => [{name: '333'}, {name: '666'}]`
     * `arr.sort(sortCallBack('name', false)) => [{name: '666'}, {name: '333'}]`
     * @param key 排序的字段
     * @param isAscend 是否升序
     * @returns
     */
    function sortCallBack(key, isAscend) {
        if (isAscend === void 0) { isAscend = true; }
        return function (a, b) { return (a[key] > b[key] ? (isAscend ? 1 : -1) : isAscend ? -1 : 1); };
    }
    /**
     * 数组乱序
     * Example: `shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => [5, 9, 1, 10, 2, 6, 4, 8, 3, 7]`
     * @param arr 数组
     * @returns
     */
    function shuffleArray(arr) {
        return arr.sort(function () { return Math.random() - 0.5; });
    }
    /**
     * 数组排序(支持多条件排序+中文)
     * Example:
     * `arraySort(["a", "3", 1, 2, "b"]) => [1, 2, '3', 'a', 'b']`
     * `arraySort(["a", "3", 1, 2, "b"], 'asc') => [1, 2, '3', 'a', 'b']`
     * `arraySort(["a", "3", 1, 2, "b"], false) => ['b', 'a', '3', 2, 1]`
     * `arraySort(["a", "3", 1, 2, "b"], 'desc') => ['b', 'a', '3', 2, 1]`
     * `let arr1 = [{ a: 'a', b: 'b', c: '张三', d: 1 }, { a: 'c', b: 'd', c: '李四', d: 2 }, { a: 'e', b: 'f', c: '王五', d: 3 }];`
     * `arraySort(arr1, false, 'a') => e - c - a`
     * `arraySort(arr1, false, ['d', 'c']) => 3 - 2 - 1`
     * `arraySort(arr1, 'DESC', ['c']) => 张三 - 王五 - 李四`
     * @param arr 数组
     * @param type 类型
     * @param keys 关键字/集合
     * @returns
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
     * Example:
     * `['a', '3', 1, 2, 'b'].sort(sortBy('', false)) => ['b', 'a', '3', 2, 1]`
     * `['a', '3', 1, 2, 'b'].sort(sortBy()) => [1, 2, '3', 'a', 'b']`
     * `sortBy('createDt') => 按照 createDt 升序排列`
     * `sortBy(['name', 'age'], false) => 按照 name + age 降序排列`
     * @param keys 排序的字段/集合
     * @param isAscend 是否升序
     * @returns
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

    /*
     * @Author: HxB
     * @Date: 2022-04-26 16:29:18
     * @LastEditors: DoubleAm
     * @LastEditTime: 2022-05-17 17:50:44
     * @Description: Cookies 常用函数
     * @FilePath: \js-xxx\src\Cookies\index.ts
     */
    /**
     * Get Cookie
     * Example: `getCookie('name') => 获取 name 对应的 Cookie 值`
     * @param key Cookie key
     * @returns
     */
    function getCookie(key) {
        var arr;
        var reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
        arr === document.cookie.match(reg) ? unescape(arr[2]) : null;
    }
    /**
     * Set Cookie
     * Example: `setCookie('name', 'value', 1) => 设置 name 对应的 Cookie 值`
     * @param key Cookie key
     * @param value Cookie value
     * @param expires Cookie expires
     * @returns
     */
    function setCookie(key, value, expires) {
        expires = expires || 30; // 没有设置有效期，默认有效期是 30 天。
        var exp = new Date(); // 获取当前日期
        exp.setTime(exp.getTime() + expires * 24 * 60 * 60 * 1000); // 设置过期日期
        document.cookie = key + '=' + escape(value) + ';expires=' + exp.toUTCString() + ';path=/';
    }
    /**
     * Remove Cookie
     * Example: `removeCookie('name') => 删除 name 对应的 Cookie`
     * @param key Cookie key
     * @returns
     */
    function removeCookie(key) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cVal = getCookie(key);
        if (cVal !== null) {
            document.cookie = key + '=' + cVal + ';expires=' + exp.toUTCString() + ';path=/';
        }
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
    	        stringify: function (wordArray, urlSafe=true) {
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
    	        parse: function (base64Str, urlSafe=true) {
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

    	            // Working varialbes
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
    	    var SHA1 = C_algo.SHA1;
    	    var HMAC = C_algo.HMAC;

    	    /**
    	     * Password-Based Key Derivation Function 2 algorithm.
    	     */
    	    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
    	        /**
    	         * Configuration options.
    	         *
    	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
    	         * @property {Hasher} hasher The hasher to use. Default: SHA1
    	         * @property {number} iterations The number of iterations to perform. Default: 1
    	         */
    	        cfg: Base.extend({
    	            keySize: 128/32,
    	            hasher: SHA1,
    	            iterations: 1
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
    	        execute: function (password, keySize, ivSize, salt) {
    	            // Generate random salt
    	            if (!salt) {
    	                salt = WordArray.random(64/8);
    	            }

    	            // Derive key and IV
    	            var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);

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
    	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

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
    	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);

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

    (function (module, exports) {
    (function (root, factory, undef) {
    	{
    		// CommonJS
    		module.exports = factory(core.exports, x64Core.exports, libTypedarrays.exports, encUtf16.exports, encBase64.exports, encBase64url.exports, md5$1.exports, sha1$1.exports, sha256$1.exports, sha224.exports, sha512.exports, sha384.exports, sha3.exports, ripemd160.exports, hmac.exports, pbkdf2.exports, evpkdf.exports, cipherCore.exports, modeCfb.exports, modeCtr.exports, modeCtrGladman.exports, modeOfb.exports, modeEcb.exports, padAnsix923.exports, padIso10126.exports, padIso97971.exports, padZeropadding.exports, padNopadding.exports, formatHex.exports, aes.exports, tripledes.exports, rc4.exports, rabbit.exports, rabbitLegacy.exports);
    	}
    }(commonjsGlobal, function (CryptoJS) {

    	return CryptoJS;

    }));
    }(cryptoJs));

    var CryptoJS = cryptoJs.exports;

    /*
     * @Author: HxB
     * @Date: 2022-04-26 15:54:41
     * @LastEditors: DoubleAm
     * @LastEditTime: 2023-03-13 18:30:58
     * @Description: 加密相关函数 依赖 crypto-js
     * @FilePath: \js-xxx\src\Crypto\index.ts
     */
    // 十六位十六进制数作为密钥
    var SECRET_KEY = CryptoJS.enc.Utf8.parse('1998092819980608');
    // 十六位十六进制数作为密钥偏移量
    var SECRET_IV = CryptoJS.enc.Utf8.parse('2017040220220130');
    // 密钥测试正则表达式
    var SECRET_KEY_REG = /^[0-9a-fA-F]{16}$/i;
    /**
     * 加密函数
     * 防君子不防小人，也可以通过后台获取密钥。
     * Example:
     * `encrypt("value") => 加密后的字符串`
     * `encrypt("value", "1234567887654321","1234567887654321") => 自定义密钥加密后的字符串`
     * @param data 需要加密的数据
     * @param secretKey [可选] 十六位十六进制数作为密钥
     * @param secretIv [可选] 十六位十六进制数作为密钥偏移量
     * @returns {string}
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
    // eslint-disable-next-line spellcheck/spell-checker
    /**
     * 解密函数
     * 防君子不防小人，也可以通过后台获取密钥。
     * Example:
     * `decrypt("加密后的字符串") => 解密后的字符串`
     * `decrypt("加密后的字符串", true) => 解密后的字符串并转换为 JSON 对象`
     * `decrypt("加密后的字符串", "1234567887654321","1234567887654321") => 自定义密钥解密后的字符串`
     * @param dataStr 加密后的字符串
     * @param jsonDecode 是否需要解析成 json
     * @param secretKey [可选] 十六位十六进制数作为密钥
     * @param secretIv [可选] 十六位十六进制数作为密钥偏移量
     * @returns {string}
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
     * md5 加密函数
     * Example: `md5("value") => 加密后的字符串`
     * @param str 需要加密的字符串
     * @returns
     */
    function md5(str) {
        return CryptoJS.MD5(str).toString();
    }
    /**
     * sha1 加密函数
     * Example: `sha1("value") => 加密后的字符串`
     * @param str 需要加密的字符串
     * @returns
     */
    function sha1(str) {
        return CryptoJS.SHA1(str).toString();
    }
    /**
     * sha256 加密函数
     * Example: `sha256("value") => 加密后的字符串`
     * @param str 需要加密的字符串
     * @returns
     */
    function sha256(str) {
        return CryptoJS.SHA256(str).toString();
    }
    /**
     * base64 加密函数
     * 使用 url 中时建议使用 encodeURIComponent 再次编码，因为单独 + 号在 url 中会被解析成空格。
     * 使用 encodeURIComponent 会把 + 解析为 %2B 与空格 %20 区分
     * Example:
     * `base64Encode("value") => 加密后的字符串`
     * `base64Encode("value", true) => 加密后的字符串并替换 +/=`
     * @param str 需要加密的字符串
     * @param replaceChar 是否替换结果字符串中的特殊字符 '+/='，适用于 url 编码。
     * @returns
     */
    function base64Encode(str, replaceChar) {
        if (replaceChar === void 0) { replaceChar = false; }
        var result = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(str));
        return replaceChar ? result.replace(/\+\//g, '-_').replace(/\=/g, '') : result;
    }
    /**
     * base64 解密函数
     * Example: `base64Decode("加密后的字符串") => 解密后的字符串`
     * @param str 需要加密的字符串
     * @returns
     */
    function base64Decode(str) {
        return CryptoJS.enc.Base64.parse(str).toString(CryptoJS.enc.Utf8);
    }
    /**
     * 获取 CryptoJS
     * Example:
     * `getCryptoJS() => CryptoJS`
     * `getCryptoJS().MD5(str).toString() => md5 加密后的字符串`
     * @returns
     */
    function getCryptoJS() {
        return CryptoJS;
    }

    /**
     * 根据年份求生肖，年 % 12 。
     */
    var ANIMALS = ['猴', '鸡', '狗', '猪', '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊'];
    /**
     * 根据日期获取星座
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
     * 星期数据
     */
    var WEEKS_INFO = [
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
     * 月份信息
     */
    var MONTH_INFO = [
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
     * 获取 16 位可读时间戳
     * Example: `getTimeCode() => '2036551026042022'`
     * @returns
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
     * Example:
     * `empty('') => true`
     * `empty(null) => true`
     * `empty('null') => true`
     * `empty('undefined') => true`
     * `empty(undefined) => true`
     * `empty(0) => false`
     * `empty('0') => false`
     * `empty(NaN) => true`
     * `empty('NaN') => true`
     * `empty({}) => true`
     * `empty([]) => true`
     * @param variable 变量
     * @returns
     */
    function empty(variable) {
        if (typeof variable === 'boolean') {
            return false; // 此处函数定义布尔型不算空
        }
        if (variable === 'null') {
            return true; // 检验字符串类型的 null
        }
        if (variable === 'undefined') {
            return true; // 检验字符串类型的 undefined
        }
        if (variable === 'NaN') {
            return true; // 检验字符串类型的 NaN
        }
        if (!variable && variable !== 0 && variable !== '0') {
            return true; // 检验 undefined 和 null "" NaN
        }
        if (Array.isArray(variable) && variable.length === 0) {
            return true; // 检验空数组
        }
        if (Object.prototype.toString.call(variable) === '[object Object]' && Object.keys(variable).length === 0) {
            return true; // 检验空对象，仅判断普通对象，不考虑字符串对象、时间、等等。
        }
        return false;
    }
    /**
     * 获取对象/数组第一个值
     * Example:
     * `get1Var([1, 2]) => 1`
     * `get1Var({a: 2,b: 1}) => 2`
     * @param data 源数据
     * @returns
     */
    function get1Var(data) {
        if (getType(data) !== 'object' && !Array.isArray(data)) {
            return data;
        }
        for (var key in data) {
            var result = data[key];
            return result;
        }
    }
    /**
     * 获取数组或对象随机数据
     * Example:
     * `getRandVar({ a: 1, b: 3 }) => 1`
     * `getRandomVar([1, 2, 3, 4], 2) => [2, 4]`
     * @param value
     * @param count
     * @returns
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
     * 获取对象/数组最后一个值(对象为 Object.keys 的顺序)
     * Example:
     * `getLastVar([1, 2]) => 2`
     * `getLastVar({a: 2, b: 1}) => b`
     * @param data 源数据
     * @returns
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
     * 防抖函数-最后一次有效（抢购）
     * Example: `debounce(() => {}, 1000) => 防抖执行`
     * @param fn 执行的函数
     * @param delay 延迟时间
     * @returns
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
     * Example: `throttle(() => {}, 1000) => 节流执行`
     * @param fn 执行的函数
     * @param delay 延迟时间
     * @returns
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
     * 函数柯里化
     * 是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。
     * Example: `curryIt(function (a, b, c) {return a + b + c})(1)(2)(3) => 6`
     * @param fn
     * @returns
     */
    function curryIt(fn) {
        // 获取预定义函数的参数个数
        var length = fn.length;
        // 声明存放参数的数组
        var args = [];
        return function (arg) {
            args.push(arg);
            length--;
            if (length <= 0) {
                // @ts-ignore
                return fn.apply(this, args);
            }
            else {
                // callee 属性是一个指针，指向拥有这个 arguments 对象的函数。
                return arguments.callee;
            }
        };
    }
    /**
     * 全局捕获异常
     * Example: `globalError((message, source, lineNo, colNo, error) => console.log('全局捕获异常'), false) => '全局捕获异常'`
     * @param {any} fn (message, source, lineNo, colNo, error)
     * @param {boolean} notShowConsole 是否不回显控制台
     * @returns
     */
    function globalError(fn, notShowConsole) {
        if (notShowConsole === void 0) { notShowConsole = true; }
        window.onerror = function (message, source, lineNo, colNo, error) {
            notShowConsole && console.log('js-xxx:globalError', { message: message, source: source, lineNo: lineNo, colNo: colNo, error: error });
            fn.call(this, message, source, lineNo, colNo, error);
            return notShowConsole; // return true 不在控制台报错
        };
    }
    /**
     * 获取随机数字
     * Example: `getRandNum(1, 10) => 1~10 之间的随机数，闭区间。`
     * @param min 最小值
     * @param max 最大值
     * @returns
     */
    function getRandNum(min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 10; }
        return Math.floor(min + Math.random() * (max - min + 1));
    }
    /**
     * 获取随机颜色
     * Example: `getRandColor() => '#xxxxxx'`
     * @returns
     */
    function getRandColor() {
        return '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6);
    }
    /**
     * 获取随机数字字符串
     * Example: `getRandStr(6) => 'xxxxxx'`
     * @param len 长度
     * @returns
     */
    function getRandStr(len) {
        if (len === void 0) { len = 8; }
        return (Math.random() * Number('1'.padEnd(len + 1, '0'))).toFixed().slice(0, len);
    }
    /**
     * 获取简单的唯一字符串(时间戳+随机数+进制转换)
     * Example: `getTimeAndStr(5, 36) => 'xxxxxx'`
     * @param len 随机字符的长度
     * @param radix 结果以此进行进制转换
     * @returns
     */
    function getTimeAndStr(len, radix) {
        if (len === void 0) { len = 5; }
        if (radix === void 0) { radix = 36; }
        // Number('xxxx') // 超大 string 转 number 结果不准确 玄学
        return len === 0 ? "".concat(getTimeCode()) : Number("".concat(getRandStr(len)).concat(Date.now())).toString(radix); // new Date().getTime()
    }
    // eslint-disable-next-line spellcheck/spell-checker
    /**
     * 获取简单的 UUID
     * Example: `getUUID() => 'ghijklmn'`
     * @param length 指定位数
     * @param radix 指定字符
     * @returns
     */
    function getUUID(length, chars) {
        // eslint-disable-next-line spellcheck/spell-checker
        chars = chars || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        length = length || 8;
        var result = '';
        for (var i = length; i > 0; --i)
            result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }
    // eslint-disable-next-line spellcheck/spell-checker
    /**
     * 获取 bootstrap 颜色
     * Example:
     * `getBSColor() => '#6c757d'`
     * `getBSColor('red') => '#dc3545'`
     * `getBSColor('warning') => '#ffc107'`
     * @param key color name
     * @returns
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
        var colors = {
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
        return colors[key];
    }
    /**
     * 获取 V4 版本 UUID
     * Example: `uuid() => '7b72e264-61fe-426e-b95f-35d4e61c5742'`
     * @returns
     */
    function uuid() {
        var tempUrl = URL.createObjectURL(new Blob());
        var uuid = tempUrl.toString();
        URL.revokeObjectURL(tempUrl); // 释放这个 url
        return uuid.substring(uuid.lastIndexOf('/') + 1);
        // 外部
        // const hexBytes = [];
        // for (let i = 0; i < 256; i++) {
        //   hexBytes[i] = (i + 0x100).toString(16).substr(1);
        // }
        // const ret = new Uint8Array(16);
        // for (let i = 0; i < 16; i++) ret[i] = getRandNum(0, 255);
        // const b = ret;
        // b[6] = (b[6] & 0x0f) | 0x40;
        // b[8] = (b[8] & 0x3f) | 0x80;
        // return (
        //   hexBytes[b[0]] +
        //   hexBytes[b[1]] +
        //   hexBytes[b[2]] +
        //   hexBytes[b[3]] +
        //   '-' +
        //   hexBytes[b[4]] +
        //   hexBytes[b[5]] +
        //   '-' +
        //   hexBytes[b[6]] +
        //   hexBytes[b[7]] +
        //   '-' +
        //   hexBytes[b[8]] +
        //   hexBytes[b[9]] +
        //   '-' +
        //   hexBytes[b[10]] +
        //   hexBytes[b[11]] +
        //   hexBytes[b[12]] +
        //   hexBytes[b[13]] +
        //   hexBytes[b[14]] +
        //   hexBytes[b[15]]
        // );
    }
    /**
     * 获取带前缀的唯一 key
     * Example:
     * `getKey() => 'M2rmCcGpXCa5MTdN4Kks5'`
     * `getKey(2, 'test-') => test-aK'`
     * @param size
     * @param prefix
     * @returns
     */
    function getKey(size, prefix) {
        if (size === void 0) { size = 21; }
        if (prefix === void 0) { prefix = ''; }
        // 外部
        // eslint-disable-next-line spellcheck/spell-checker
        var symbols = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHIJKLNQRTUVWXYZ_cfgijkpqtvxz';
        var id = '';
        var len = symbols.length;
        // eslint-disable-next-line spellcheck/spell-checker
        var ret = new Uint8Array(size);
        for (var i = 0; i < size; i++)
            ret[i] = getRandNum(0, 255);
        var bytes = ret;
        while (0 < size--) {
            id += symbols[bytes[size] % len];
        }
        return prefix + id;
    }
    /**
     * 获取任意变量长度
     * Example:
     * `getSize([]) => 0`
     * `getSize({a: 1, b: 2}) => 2`
     * `getSize(null) => 0`
     * @param value
     * @returns
     */
    function getSize(value) {
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
     * Example: `openFile({ multiple: true, accept: '.txt' }).then(fileList => console.log(fileList));`
     * @param options
     * @returns
     */
    function openFile(options) {
        return new Promise(function (resolve) {
            var input = document.createElement('input');
            input.style.position = 'fixed';
            input.style.bottom = '0';
            input.style.left = '0';
            input.style.visibility = 'hidden';
            input.setAttribute('type', 'file');
            if (options === null || options === void 0 ? void 0 : options.accept) {
                input.setAttribute('accept', options.accept);
            }
            if (options === null || options === void 0 ? void 0 : options.multiple) {
                input.setAttribute('multiple', '');
            }
            document.body.appendChild(input);
            input.addEventListener('change', function () {
                document.body.removeChild(input);
                resolve(input.files);
            });
            input.click();
        });
    }
    /**
     * 开启全屏
     * Example: `openFullscreen() => 开启全屏`
     * @param element
     * @returns
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
     * Example: `closeFullscreen() => 关闭全屏`
     * @param
     * @returns
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
    /**
     * 获取数组或对象交集
     * Example:
     * `intersection([1, 2, 2, 3, 3], [1, 2, 4, 5]) => [1, 2]`
     * `intersection({a: 1, b: 2}, {a: 1, c: 3, b: 4}) => {a: 1}`
     * @param paramA
     * @param paramB
     * @returns
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
            result = arraySet(result);
        }
        return jsonClone(result);
    }
    /**
     * 获取数组或对象并集
     * Example:
     * `union([1, 2, 2, 3, 3], [1, 2, 4, 5]) => [1, 2, 3, 4, 5]`
     * `union({a: 1, b: 2}, {a: 1, c: 3, b: 4}) => {a: 1, c: 3, b: 2}`
     * @param paramA
     * @param paramB
     * @returns
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
            return jsonClone(arraySet(__spreadArray(__spreadArray([], __read(paramA), false), __read(paramB), false)));
        }
    }
    /**
     * 获取数组或对象不同值集合
     * Example:
     * `difference([1, 2, 2, 3, 3], [1, 2, 4, 5]) => [3]`
     * `difference({a: 1, b: 2}, {a: 1, c: 3, b: 4}) => {b: 2}`
     * @param paramA
     * @param paramB
     * @returns
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
                    result[key] = paramA[key]; // 以前一个为准
                }
            }
        }
        else {
            result = paramA.filter(function (item) { return !paramB.includes(item); });
            result = arraySet(result);
        }
        return jsonClone(result);
    }
    /**
     * JSON 转字符串式克隆
     * Example:
     * `jsonClone([1, 2, 2, 3, 3]) => [1, 2, 2, 3, 3]`
     * `jsonClone({a: 1, b: 2}) => {a: 1, b: 2}`
     * @param value
     * @returns
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
     * Example:
     * `logRunTime(() => [1, 2, 3].reduce(...))`
     * `logRunTime(() => [1, 2, 3].reduce(...), 'timeKey')`
     * `logRunTime(async () => { await fun1(); await fun2(); })`
     * `logRunTime($promiseReturnFunction)`
     * `logRunTime(new Promise((resolve, reject) => { setTimeout(() => resolve('test'), 1000) }))`
     * @param fn
     * @param timeKey
     * @returns
     */
    function logRunTime(fn, timeKey) {
        timeKey = timeKey !== null && timeKey !== void 0 ? timeKey : getKey(5, 'log-run-time-');
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
     * 打印日志工具类
     * Example:
     * `const {log, warning, success, danger, dark, primary, info} = Logger()`
     * `log(1, new Date, 'test', [1, 2, 3], {log})`
     * @returns
     */
    function Logger() {
        function _logger(value, type) {
            if (type === void 0) { type = 'default'; }
            console.log('\n%c==========> ', "color:".concat(getBSColor(type)), value, '\n');
        }
        // @ts-ignore
        var result = {};
        ['warning', 'info', 'danger', 'primary', 'success', 'dark', 'log'].forEach(function (type) {
            // @ts-ignore
            result[type] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var printType = type == 'log' ? 'default' : type;
                args.forEach(function (val) {
                    // @ts-ignore
                    _logger(val, printType);
                });
            };
        });
        return result;
    }
    /**
     * 在页面上显示某个值
     * Example:
     * `showVar([1, 2, 2, 3, 3]) => 显示序列化之后的数据`
     * `showVar({a: 1, b: 2}) => 显示序列化之后的数据`
     * @param value
     * @returns
     */
    function showVar(value) {
        var _a;
        try {
            alert((_a = JSON.stringify(value, null, 2)) !== null && _a !== void 0 ? _a : 'undefined');
        }
        catch (e) {
            console.log('js-xxx:showVarError===>', value);
        }
    }
    /**
     * 在页面上打印某个值，我们打包通常会设置清除 console，使用此函数打印关键信息就不会被清除啦。
     * Example:
     * `logVar([1, 2, 2, 3, 3]) => 打印数据`
     * `logVar({a: 1, b: 2}) => 打印数据`
     * @param value
     * @returns
     */
    function logVar(value) {
        console.log('js-xxx:logVar=====>', value);
    }
    /**
     * 检测某个数组是否包含某个值
     * Example:
     * `contains([1, 2, 2, 3, 3], 3) => true`
     * `contains([1, 2, 2, 3, 3], '3') => false`
     * `contains([{a: 1, b: 2}, {a: 2, b: 3}], {a: 2, b: 3}) => true`
     * `contains([[1, 2], [3, 4]], [1, 3]) => false`
     * @param value
     * @param target
     * @returns
     */
    function contains(value, target) {
        try {
            var temp = value.map(function (item) { return JSON.stringify(item); });
            return temp.includes(JSON.stringify(target));
        }
        catch (e) {
            return false;
        }
    }
    /**
     * 直到某个函数返回 toBool(true) 的结果(执行完成)
     * Example:
     * `let a = 5;`
     * `setTimeout(() => (a = 10), 5000);`
     * `waitUntil(() => a === 10).then(() => { console.log(a) });`
     * @param condition
     * @param timeout
     * @param interval
     * @returns
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
     * Example:
     * `ms('1s') => 1000`
     * `ms('1m') => 60000`
     * `ms('1.5h') => 5400000`
     * `ms('1d') => 86400000`
     * `ms('1y') => 31557600000`
     * `ms('1000') => 1000`
     * `ms(1500) => '1.5s'`
     * `ms(60000) => '1m'`
     * @param str
     * @returns
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
     * Example:
     * `transferFileToBase64(file, 'application/pdf;charset=utf-8', (res) => console.log({ res })) => result object`
     * `transferFileToBase64('test', 'text/plain', (res) => console.log({ res })) => result object`
     * @param content BlobPart | any
     * @param contentType
     * @param callBack
     * @returns
     */
    function transferFileToBase64(content, contentType, callBack) {
        var blob = new Blob([content], {
            type: contentType,
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
     * Example:
     * `checkIdCard('350424870506202') => true`
     * `checkIdCard('003424870506202') => false`
     * `checkIdCard('415106199801012130') => true`
     * `checkIdCard('123123123123123222') => false`
     * @param value
     * @returns
     */
    function checkIdCard(value) {
        var regIdCard15 = /^[1-9]d{5}d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)d{2}$/;
        var regIdCard18 = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
        return regIdCard15.test(value) || regIdCard18.test(value);
    }
    /**
     * 获取年龄
     * Example:
     * `getAge('1998-9-28') => 24`
     * `getAge('1998-6-8', '2023-7') => 25`
     * `getAge('2023') => -1`
     * @param birthday
     * @param targetDate
     * @returns
     */
    function getAge(birthday, targetDate) {
        return new Date(new Date(targetDate !== null && targetDate !== void 0 ? targetDate : Date.now()).getTime() - new Date(birthday).getTime()).getFullYear() - 1970;
    }
    /**
     * 获取生肖
     * Example:
     * `getAnimal('1998') => '虎'`
     * `getAnimal('1998-6-8') => '虎'`
     * `getAnimal('2023') => '兔'`
     * @param date
     * @returns
     */
    function getAnimal(date) {
        return ANIMALS[new Date(date).getFullYear() % 12];
    }
    /**
     * 身份证解析
     * Example:
     * `transferIdCard('350424870506202') => {"age":35,"year":"1987","idCard":"350424870506202","sex":"女","constellation":{"cn":"金牛","en":"Taurus","date":"4.20-5.20"},"gender":0,"province":"福建","animal":"兔","birthday":"1987-05-06"}`
     * `transferIdCard('415106199801012130') => {"age":24,"year":"1998","idCard":"415106199801012130","sex":"男","constellation":{"cn":"魔羯","en":"Capricorn","date":"12.22-1.19"},"gender":1,"province":"河南","animal":"虎","birthday":"1998-01-01"}`
     * `transferIdCard('xxxxx') => {}`
     * @param idCard
     * @returns
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
            gender: sex === '男' ? 1 : 0,
            province: province,
            animal: animal,
            birthday: birthday,
        };
    }
    /**
     * 金额转中文
     * Example:
     * `transferMoney(852.5) => '玖佰元整'`
     * `transferMoney(900) => '捌佰伍拾贰元伍角'`
     * @param n
     * @returns
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
     * Example:
     * `const mySpeaker = Speaker()`
     * `mySpeaker.setText('你好，这是一条测试语音！hello'); mySpeaker.speak();`
     * @param text 内容
     * @param lang 语言
     * @param volume 音量 [0, 1]
     * @param pitch 音高 [0, 2]
     * @param rate 速度 [0.1, 10]
     * @returns
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
     * Example: `rip() => 页面灰白`
     * @returns
     */
    function rip() {
        var html = document.querySelector('html');
        // html.style['-webkit-filter'] = 'grayscale(1)';
        html.style['filter'] = 'grayscale(1)';
    }
    // eslint-disable-next-line spellcheck/spell-checker
    /**
     * 获取星座
     * Example:
     * `getConstellation('11-24') => { cn: '射手', en: 'Sagittarius', date: '11.23-12.21' }`
     * `getConstellation('xxx') => {cn: '未知', en: 'unknown', date: 'xxx'}`
     * `getConstellation(new Date('2022-11-24')) => { cn: '射手', en: 'Sagittarius', date: '11.23-12.21' }`
     * @param date
     * @returns
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
     * Example: `setEventListener('resize', () => { console.log('resize'); }) => cancel 当前 listener 的 function`
     * @param eventKey
     * @param foo
     * @param dom
     * @returns
     */
    function setEventListener(eventKey, foo, dom) {
        if (dom === void 0) { dom = window; }
        dom.addEventListener(eventKey, foo);
        return function () {
            dom.removeEventListener(eventKey, foo);
        };
    }
    /**
     * H5 软键盘缩回/弹起回调
     * return cancel listener of H5Resize
     * Example: `H5Resize(()=>{ console.log('downCb'); }, ()=>{ console.log('upCb'); }) => do something`
     * @param downCb
     * @param upCb
     * @returns
     */
    function H5Resize(downCb, upCb) {
        // 当软件键盘弹起会改变当前 window.innerHeight
        // 监听这个值变化 [downCb 缩回的回调、 upCb 弹起的回调]
        var clientHeight = window.innerHeight;
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        downCb = typeof downCb === 'function' ? downCb : function () { };
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        upCb = typeof upCb === 'function' ? upCb : function () { };
        var H5ResizeFoo = function () {
            var height = window.innerHeight;
            if (height === clientHeight) {
                downCb();
            }
            if (height < clientHeight) {
                upCb();
            }
        };
        return setEventListener('resize', H5ResizeFoo);
    }
    /**
     * 禁用控制台
     * windows
     * 防君子不防小人
     * 监听页面大小变化没必要
     * 监听编辑 dom 事件 reload 也算了
     * Example: `banConsole() => 返回取消禁用的 function`
     * @returns
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
     * Example:
     * `getWeekInfo() => WEEKS_INFO`
     * `getWeekInfo('0') => WEEKS_INFO`
     * `getWeekInfo('ALL') => WEEKS_INFO`
     * `getWeekInfo('all') => WEEKS_INFO`
     * `getWeekInfo('unknown') => WEEKS_INFO`
     * `getWeekInfo(1) => 星期一相关信息`
     * `getWeekInfo(8) => WEEKS_INFO`
     * @param n
     * @returns
     */
    function getWeekInfo(n) {
        var _a;
        if (n === 'all' || n === 'ALL') {
            return WEEKS_INFO;
        }
        if (!n || !Number.isInteger(n) || n < 1 || n > 7) {
            return WEEKS_INFO;
        }
        return (_a = WEEKS_INFO[Number(n) - 1]) !== null && _a !== void 0 ? _a : WEEKS_INFO;
    }
    /**
     * 获取星期信息
     * Example:
     * `getMonthInfo() => MONTH_INFO`
     * `getMonthInfo('0') => MONTH_INFO`
     * `getMonthInfo('ALL') => MONTH_INFO`
     * `getMonthInfo('all') => MONTH_INFO`
     * `getMonthInfo('unknown') => MONTH_INFO`
     * `getMonthInfo(1) => 一月相关信息`
     * `getMonthInfo(13) => MONTH_INFO`
     * @param n
     * @returns
     */
    function getMonthInfo(n) {
        var _a;
        if (n === 'all' || n === 'ALL') {
            return MONTH_INFO;
        }
        if (!n || !Number.isInteger(n) || n < 1 || n > 12) {
            return MONTH_INFO;
        }
        return (_a = MONTH_INFO[Number(n) - 1]) !== null && _a !== void 0 ? _a : MONTH_INFO;
    }

    /*
     * @Author: HxB
     * @Date: 2022-04-26 15:45:48
     * @LastEditors: DoubleAm
     * @LastEditTime: 2023-03-14 11:05:42
     * @Description: 字符串常用函数
     * @FilePath: \js-xxx\src\String\index.ts
     */
    // eslint-disable-next-line spellcheck/spell-checker, zob/comment
    /**
     * 字符转 unicode
     * Example: `unicode2str("我是老A") => '\\u6211\\u662f\\u8001a'`
     * @param value 中文字符串
     * @returns
     */
    function unicode2str(value) {
        return escape(value).toLocaleLowerCase().replace(/%u/gi, '\\u');
    }
    // eslint-disable-next-line spellcheck/spell-checker, zob/comment
    /**
     * unicode 转字符
     * Example: `str2unicode("\\u6211\\u662f\\u8001a") => '我是老a'`
     * @param value unicode 字符串
     * @returns
     */
    function str2unicode(value) {
        return unescape(value.replace(/\\u/gi, '%u'));
    }
    /**
     * 去除字符串空格
     * 可选值：0|ba：去除前后空格，1|b：去除前空格，2|a：去除后空格，3|all：去除所有空格，4|pro：去除所有空格，中间的空格保留一个。
     * Example: `trim('  a  b  ', 4) => 'a b'`
     * @param str 字符串
     * @param type 类型，默认为 0|ba，错误 type 会返回原字符串。
     * @returns
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
                return (str = str.replace(/(^\s*)|(\s*$)|\s(?=\s)/g, '')); // 去除前后空格并将中间的单个空格保留，多个空格变为一个空格。
            default:
                return str;
        }
    }
    // eslint-disable-next-line spellcheck/spell-checker
    /**
     * base64 编码 btoa(binary to ascii)(not support unicode)
     * 使用 url 中时建议使用 encodeURIComponent 再次编码，因为单独 + 号在 url 中会被解析成空格。
     * 使用 encodeURIComponent 会把 + 解析为 %2B 与空格 %20 区分
     * `btoa(encodeURIComponent(str))`
     * Example:
     * `btoa('我是 leo') => '5oiR5pivIGxlbw=='`
     * `btoa('我是 leo', true) => '5oiR5pivIGxlbw'`
     * @param str 字符串
     * @param replaceChar 是否替换结果字符串中的特殊字符 '+/='，适用于 url 编码。
     * @returns
     */
    function btoa(str, replaceChar) {
        if (replaceChar === void 0) { replaceChar = false; }
        // btoa(str).replace(/\+\//g, '-_').replace(/=/g, '');
        var result = Buffer.from(str, 'utf-8').toString('base64');
        return replaceChar ? result.replace(/\+\//g, '-_').replace(/=/g, '') : result;
    }
    // eslint-disable-next-line spellcheck/spell-checker
    /**
     * base64 解码 atob(ascii to binary)(not support unicode)
     * `decodeURIComponent(atob(encodeStr))`
     * Example:
     * `atob('5oiR5pivIGxlbw==') => '我是 leo'`
     * `atob('5oiR5pivIGxlbw') => '我是 leo'`
     * @param str base64 加密后的字符串
     * @returns
     */
    function atob(str) {
        // let remainder = str.length % 4;
        // let padlen;
        // if (remainder) {
        //   padlen = 4 - remainder;
        //   str += str.repeat('=', padlen);
        // }
        // return atob(str.replace('-_', '+/'));
        return Buffer.from(str, 'base64').toString('utf8');
    }
    // eslint-disable-next-line spellcheck/spell-checker, zob/comment
    /**
     * 字符串脱敏(biugle 自定义规则)
     * Example:
     * `maskString(undefined) => '-'`
     * `maskString('13579246810') => '135****6810'`
     * `maskString('王小二') => '王***二'`
     * `maskString('123456789') => '123****89'`
     * `maskString('130223199809282927') => '13022********927'`
     * `maskString('广东省深圳市龙华区') => 广东省****华区'`
     * `maskString('广东省深圳市福田区福田保税区xxx小区xxx单元x栋x楼xxx号') => '广东省深圳市福田区******xx号'`
     * @param str
     * @returns
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
     * Example:
     * `transferCase('red', 'upper'|1) => 'RED'`
     * `transferCase('red', 'lower'|2) => 'red'`
     * `transferCase('red', 'first'|3) => 'Red'`
     * @param str
     * @param type
     * @returns
     */
    function transferCase(str, type) {
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
     * Example:
     * `splitCase('foo-bar') => ['foo', 'bar']`
     * `splitCase('foo_bar') => ['foo', 'bar']`
     * `splitCase('foo bar') => ['foo', 'bar']`
     * `splitCase('foo.bar') => ['foo', 'bar']`
     * `splitCase('fooBar') => ['foo', 'bar']`
     * `splitCase('foo-Bar') => ['foo', 'bar']`
     * @param str
     * @returns
     */
    function splitCase(str) {
        var regUpperCase = /([A-Z])/g;
        var regSeparator = /[_.\- ]+/g;
        var regTrim = /(^-)|(-$)/g;
        str = str.replace(regUpperCase, '-$1').toLowerCase().replace(regSeparator, '-').replace(regTrim, '');
        return str.split('-');
    }
    /**
     * 字符串转驼峰
     * Example:
     * `camelCase('foo-bar') => 'fooBar'`
     * `camelCase('foo_bar') => 'fooBar'`
     * `camelCase('foo bar') => 'fooBar'`
     * `camelCase('foo.bar') => 'fooBar'`
     * @param str
     * @returns
     */
    function camelCase(str) {
        var arr = splitCase(str);
        var ret = arr[0];
        arr.shift();
        arr.forEach(function (i, idx) {
            arr[idx] = transferCase(i, 'first');
        });
        ret += arr.join('');
        return ret;
    }
    /**
     * 字符串 repeat
     * Example:
     * `repeat('*') => '*'`
     * `repeat('*', 3) => '***'`
     * @param str
     * @returns
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
     * Example:
     * `isUrl('http://www.example.com?foo=bar&param=test') => true`
     * `isUrl(http://www) => false`
     * @param value
     * @returns
     */
    function isUrl(value) {
        var regUrl = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/;
        return regUrl.test(value);
    }
    /**
     * 检查是否为 email string 邮箱
     * Example:
     * `isEmail('test@qq.com') => true`
     * `isEmail('@qq.com') => false`
     * @param value
     * @returns
     */
    function isEmail(value) {
        var regEmail = /.+@.+\..+/;
        return regEmail.test(value);
    }
    /**
     * 检查是否为 phoneNum string 手机号
     * Example:
     * `isPhoneNum('13579246810') => true`
     * `isPhoneNum('12345678910') => false`
     * @param value
     * @returns
     */
    function isPhoneNum(value) {
        var regPhoneNum = /^(0|86|17951)?(1[3-9][0-9])[0-9]{8}$/;
        return regPhoneNum.test(value);
    }
    // eslint-disable-next-line zob/comment
    /**
     * 检查是否为 char string 用户名规范(字母数字下划线或中文)
     * Example:
     * `isChar('test123@qq.com') => false`
     * `isChar('_test123_qq_com') => false`
     * `isChar('test123_qq_com') => true`
     * `isChar('我test123_qq_com') => false`
     * `isChar('我test123_qq_com', true) => true`
     * @param value
     * @returns
     */
    function isChar(value, hasChinese) {
        if (hasChinese === void 0) { hasChinese = false; }
        var regChar = hasChinese
            ? /^[a-zA-Z\u4E00-\u9FA5]([a-zA-Z0-9_\u4E00-\u9FA5]{5,17})$/
            : /^[a-zA-Z]([a-zA-Z0-9_\u4E00-\u9FA5]{5,17})$/;
        return regChar.test(value);
    }
    /**
     * 检查密码强度是否足够
     * Example:
     * `isStrongPassWord('test@qq.com') => false`
     * `isStrongPassWord('test@qq.com123') => true`
     * @param value
     * @returns
     */
    function isStrongPassWord(value) {
        var pwChar = /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,16}/;
        return pwChar.test(value);
    }
    // eslint-disable-next-line zob/comment
    /**
     * 检查是否为 carCode string 车牌号
     * Example:
     * `isCarCode('粤B68928') => true`
     * `isCarCode('粤-B68928') => true`
     * `isCarCode('粤 B68928') => true`
     * `isCarCode('粤B.68928') => true`
     * `isCarCode('粤B 68928') => true`
     * `isCarCode('广东 B12345') => false`
     * @param value
     * @returns
     */
    function isCarCode(value) {
        var regCarCode = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[\s\-]{0,1}[A-Z]{1}[\.\s]{0,1}[A-Z0-9]{4,5}[A-Z0-9挂学警港澳]{1}$/;
        return regCarCode.test(value);
    }
    /**
     * 检查是否为 ipv4 string
     * Example:
     * `isIpv4('127.0.0.1') => true`
     * `isIpv4('255.255.255.0') => true`
     * `isIpv4('255.255.255.2555') => false`
     * `isIpv4('255.255.255.2555.255') => false`
     * @param value
     * @returns
     */
    function isIpv4(value) {
        var regIpv4 = /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/;
        return regIpv4.test(value + '.');
    }
    // eslint-disable-next-line spellcheck/spell-checker
    /**
     * 检查是否为 ipv6 string
     * Example:
     * `isIpv6('::1') => true`
     * `isIpv6('127.0.0.1') => false`
     * `isIpv6('2000:0000:0000:0000:0001:2345:6789:abcd') => true`
     * `isIpv6('2001:DB8:0:0:8:800:200C:417A') => true`
     * `isIpv6('2001:DB8::8:800:200C:417A') => false 暂不兼容缩写`
     * `isIpv6('2001:DB8:0:0:8:800:200C:417A:123') => false`
     * `isIpv6('2000:0000:0000:0000:0001:2345:6789:abcd:1') => false`
     * @param value
     * @returns
     */
    function isIpv6(value) {
        if (value == '::1')
            return true;
        var regIpv6 = /^(([\da-fA-F]{1,4}):){8}$/;
        return regIpv6.test(value + ':');
    }
    /**
     * 检查是否为 ip string
     * Example:
     * `isIpAddress('::1') => true`
     * `isIpAddress('127.0.0.1') => true`
     * `isIpAddress('2001:DB8:0:0:8:800:200C:417A') => true`
     * `isIpAddress('255.255.255.123.123') => false`
     * @param value
     * @returns
     */
    function isIpAddress(value) {
        return isIpv4(value) || isIpv6(value);
    }
    // eslint-disable-next-line spellcheck/spell-checker
    /**
     * 检查是否为 file.ext string 文件扩展名
     * Example:
     * `checkFileExt(['png', 'jpg'], 'test.jpg') => true`
     * `checkFileExt(['png', 'jpg'], 'test.jpg.txt') => false`
     * @param value
     * @returns
     */
    function checkFileExt(arr, value) {
        var regFileExt = arr.map(function (name) { return ".".concat(name); }).join('|');
        return new RegExp("(".concat(regFileExt, ")$")).test(value);
    }
    /**
     * 检查是否为 http 协议，1 是，-1 为 https，0 啥也不是。
     * Example:
     * `isHttp('http://test.com') => 1`
     * `isHttp('http:test.com') => 0`
     * `isHttp('https://test.com') => -1`
     * `isHttp('12345') => 0`
     * @param value
     * @returns
     */
    function isHttp(value) {
        var flag = value.substring(0, 8);
        return flag.includes('http://') ? 1 : flag.includes('https://') ? -1 : 0;
    }
    /**
     * Slug 化字符串 => URL
     * Example:
     * `slugify('I LOVE OQM') => 'I_LOVE_OQM'`
     * `slugify('I LOVE OQM', { ' ': '-' }) => 'I-LOVE-OQM'`
     * @param str
     * @param replacement
     * @returns
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
     * Example:
     * `truncate('HXB HXB HXB HXB HXB HXB', 12) => 'HXB HXB H...'`
     * `truncate('OQM-OQM-OQM-OQM-OQM-OQM', 10, { ellipsis: '～', separator: '-' }) => 'OQM-OQM～'`
     * @param txt
     * @param width
     * @param options
     * @returns
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
     * Example:
     * `formatJSON({ a: 123, b: 456 }, null, 2) => '{\n  "a": 123,\n  "b": 456\n}'`
     * `formatJSON('123', null, 2) => '"123"'`
     * `formatJSON(123, null, 2) => '123'`
     * `formatJSON(null, null, 2) => 'null'`
     * `formatJSON(true, null, 2) => 'true'`
     * `formatJSON(undefined, null, 2) => 'undefined'`
     * `formatJSON(new Date(), null, 2) => '"2023-03-02T10:02:42.019Z"'`
     * @param value
     * @returns
     */
    function formatJSON(value) {
        var _a;
        try {
            return (_a = JSON.stringify(value, null, 2)) !== null && _a !== void 0 ? _a : 'undefined';
        }
        catch (e) {
            return "".concat(value);
        }
    }

    /**
     * 时间格式化
     * Example:
     * `formatDate(new Date(), 'yyyy-mm-dd hh:ii:ss Q S W', ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']) => '2022-04-26 11:33:53 2 123 星期二'`
     * @param date 时间
     * @param fmt 格式化模板 'yyyy-mm-dd hh:ii:ss'
     * @param weeks 星期对应数组 [7, 1, 2, 3, 4, 5, 6]
     * @returns
     */
    function formatDate(date, fmt, weeks) {
        if (fmt === void 0) { fmt = 'yyyy-mm-dd hh:ii:ss'; }
        if (weeks === void 0) { weeks = [7, 1, 2, 3, 4, 5, 6]; }
        // date.replace(/-/g, '/'); // 虽然 win 浏览器两种符号都可以，但是需兼容 ios 。
        date = date ? new Date(date) : new Date();
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
            fmt = fmt.replace(RegExp.$1, "".concat(date.getFullYear()).substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) {
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : "00".concat(o[k]).substr("".concat(o[k]).length)); // `${o[k]}`.padStart(RegExp.$1.length, 0) 也可以实现
            }
        }
        return fmt;
    }
    /**
     * 时间计算
     * Example:
     * `calcDate(new Date(), '-1 days') => date object`
     * `calcDate(new Date(), '-1 DAYS') => date object`
     * `calcDate(new Date(), ['-1 day', '+1 year', '-2 month', '2 weeks', '1 hour', '-3 minute', '45 seconds']) => date object`
     * @param date 时间
     * @param calcStrOrArr '1 days' or ['-1 day', '3 month']
     * @returns
     */
    function calcDate(date, calcStrOrArr) {
        // date.replace(/-/g, '/'); // 虽然 win 浏览器两种符号都可以，但是需兼容 ios 。
        var oldDate = date ? new Date(date) : new Date();
        if (Array.isArray(calcStrOrArr)) {
            calcStrOrArr.forEach(function (calcStr) {
                oldDate = calcDate(oldDate, calcStr);
            });
        }
        else {
            var _a = __read(trim(calcStrOrArr, 'pro').split(' '), 2), val = _a[0], unit = _a[1];
            var newVal = Number(val);
            var newUnit = unit.toLocaleLowerCase();
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
     * Example:
     * `getDateDifference(new Date('2022-05-01'), new Date(), 'day') => 37`
     * `getDateDifference(new Date('2022-05-01'), new Date(), 'all') => {days: 37, hours: 8, minutes: 46, seconds: 47}`
     * @param oldDate 久远一点的时间
     * @param nowDate 近一点的时间，默认当前时间。
     * @param type 计算方式，默认计算差距的精确天数、时分秒。
     * @returns
     */
    function getDateDifference(oldDate, nowDate, type) {
        if (type === void 0) { type = 'all'; }
        oldDate = new Date(oldDate);
        nowDate = nowDate ? new Date(nowDate) : new Date();
        var diffTime = nowDate.getTime() - oldDate.getTime();
        switch (type.toLocaleLowerCase()) {
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
     * Example: `timeSince(new Date()) => '刚刚'`
     * @param date 时间/string
     * @param longAgo 是否显示周月甚至更久
     * @param formatter 正常显示时的时间显示格式
     * @returns
     */
    function timeSince(date, longAgo, formatter) {
        if (longAgo === void 0) { longAgo = false; }
        if (formatter === void 0) { formatter = 'yyyy-mm-dd hh:ii:ss'; }
        // date.replace(/-/g, '/'); // 虽然 win 浏览器两种符号都可以，但是需兼容 ios 。
        date = date ? new Date(date) : new Date();
        var dateTS = new Date(date).getTime();
        var seconds = Math.floor((new Date().getTime() - dateTS) / 1000);
        var interval = Math.floor(seconds / (24 * 3600));
        if (longAgo) {
            interval = Math.floor(seconds / (30 * 24 * 3600));
            if (interval >= 4) {
                return formatDate(new Date(dateTS), formatter);
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
            return formatDate(new Date(dateTS), formatter);
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
     * Example: `isWorkDay(new Date()) => true`
     * @param date 日期
     * @returns
     */
    function isWeekday(date) {
        date = date ? new Date(date) : new Date();
        return date.getDay() % 6 !== 0;
    }
    /**
     * 获取月份天数
     * Example: `getMonthDays(new Date()) => 30`
     * @param date 日期
     * @returns
     */
    function getMonthDays(date) {
        var curDate = date ? new Date(date) : new Date();
        var curMonth = curDate.getMonth();
        curDate.setMonth(curMonth + 1);
        curDate.setDate(0);
        return curDate.getDate();
    }
    /**
     * 获取月份天数
     * Example: `getMonthDayCount(new Date()) => 30`
     * @param date 日期
     * @returns
     */
    function getMonthDaysCount(date) {
        date = date ? new Date(date) : new Date();
        var fullYear = date.getFullYear();
        var month = date.getMonth();
        if ((fullYear % 4 == 0 && fullYear % 100 != 0) || fullYear % 400 == 0) {
            var monthDayCount = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 闰年
            return monthDayCount[month]; // 当前月的天数
        }
        else {
            //
            var monthDayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 平年
            return monthDayCount[month]; // 当前月的天数
        }
    }
    /**
     * 获取指定日期数目的数组
     * Example:
     * `getDateList(7, 'day') => 得到今天到未来 7 天的日期数组`
     * `getDateList(-7, 'day') => 得到今天到之前 7 天的日期数组`
     * `getDateList(7, 'year') => 得到今年到未来 7 年的日期数组`
     * `getDateList(7, 'month') => 得到本月到未来 7 个月的日期数组`
     * `getDateList(7, 'day', '2023-02-01') => 得到 2023-02-01 日到未来 7 天的日期数组`
     * @param n 数目
     * @param type 类型
     * @param date 日期
     * @returns
     */
    function getDateList(n, type, date) {
        if (type === void 0) { type = 'day'; }
        if (date === void 0) { date = new Date(); }
        var myDate = calcDate(new Date(date), "".concat(n > 0 ? n - 1 : n + 1, " ").concat(type)); // 包含当天
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
            dateTemp = formatDate(myDate, formatters[type]);
            dateArray.push(dateTemp);
            myDate = calcDate(dateTemp, "".concat(flag, " ").concat(type));
        }
        return flag === 1 ? dateArray : dateArray.reverse();
    }
    /**
     * 获取日期时间戳
     * Example: `getDateTime(new Date()) => time stamp`
     * @param date 日期
     * @returns
     */
    function getDateTime(date) {
        date = date ? new Date(date) : new Date();
        return date.getTime();
    }
    /**
     * 获取标准时间 UTC
     * 适用于本地时间不准确或者获取其他时区时间的情况
     * Example: `getUTCTime(8) => 中国标准时间`
     * @param timezone 时区数字，东八区为 8，西八区为 -8 。
     * @returns
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
     * 时间大小比较
     * -1(A<B), 1(A>B), 0(A=B)
     * Example:
     * `compareDate('2023-1-1') => 1`
     * `compareDate('2023-1-1 12:00:00', '2023-1-2 12:00:00') => -1`
     * @param dateA
     * @param dateB
     * @returns
     */
    function compareDate(dateA, dateB) {
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
     * Example: `console.time('test'); countdown(10, (x) => console.log('===>', x), () => console.timeEnd('test')); => test: 10023.636962890625 ms`
     * @param seconds
     * @param callback
     * @param finishCallBack
     * @returns
     */
    function countdown(seconds, callback, finishCallBack) {
        var timer = setInterval(function () {
            console.log('js-xxx:countdown-timer-count', seconds);
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

    /*
     * @Author: HxB
     * @Date: 2022-04-26 15:37:27
     * @LastEditors: DoubleAm
     * @LastEditTime: 2023-03-13 18:31:22
     * @Description: 利用 dom 的一些函数
     * @FilePath: \js-xxx\src\Dom\index.ts
     */
    // eslint-disable-next-line spellcheck/spell-checker
    /**
     * 字符串转实体字符
     * Example: `str2html('<>&"') => '&lt;&gt;&amp;&quot;'`
     * @param str 字符串
     * @returns
     */
    function str2html(str) {
        var div = document.createElement('div');
        div.textContent = str;
        var specialChars = div.innerHTML;
        return specialChars;
    }
    /**
     * 实体字符转字符串
     * Example: `html2str('&lt;&gt;&amp;&quot;') => '<>&"'`
     * @param value 实体字符串
     * @returns
     */
    function html2str(value) {
        var div = document.createElement('div');
        div.innerHTML = value;
        var str = div.textContent;
        return str;
    }
    /**
     * 插入某元素到指定 Element 之后
     * Example: `insertAfter(document.getElementById('a'), document.getElementById('b'));`
     * @param newElement 某元素
     * @param targetElement 指定元素
     * @returns
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
     * 阻止冒泡事件&阻止默认行为&阻止事件捕获
     * Example: `offDefaultEvent(event) => 阻止冒泡事件&阻止默认行为&阻止事件捕获`
     * @param event 事件
     * @returns
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
     * 添加指定元素复制事件
     * Example: `copyContent(document.getElementById('copy')) => 复制 #copy 的内容成功`
     * @param targetDom 目标内容元素
     * @param addMsg 复制后增加内容
     * @returns
     */
    function copyContent(targetDom, addMsg) {
        if (addMsg === void 0) { addMsg = null; }
        var Msg = !targetDom.innerText ? targetDom.value : targetDom.innerText;
        var tempDom = document.createElement('input');
        var info = '复制成功！';
        tempDom.style.position = 'absolute';
        tempDom.style.top = '-5201314px';
        tempDom.style.left = '-5201314px';
        tempDom.value = Msg;
        tempDom.value += addMsg === null ? '' : addMsg;
        document.body.appendChild(tempDom);
        targetDom.blur();
        tempDom.select();
        try {
            document.execCommand('copy');
        }
        catch (err) {
            info = '浏览器不支持此操作，请手动复制。';
        }
        document.body.removeChild(tempDom);
        console.log('js-xxx:copyContent', info);
        return Msg;
    }
    /**
     * 滚动到顶部
     * 平滑滚动 css：`scroll-behavior: smooth;`
     * Example: `scrollToTop('body') => 滚动到顶部`
     * @param elementSelector 指定元素选择器
     * @param to ('start'|'end')[default: 'start']
     * @returns
     */
    function scrollToTop(elementSelector, to) {
        if (to === void 0) { to = 'start'; }
        var element = document.querySelector(elementSelector);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: to });
        }
    }
    /**
     * 滚动到底部
     * 平滑滚动 css：`scroll-behavior: smooth;`
     * Example: `scrollToBottom('body') => 滚动到底部`
     * @param elementSelector 指定元素选择器
     * @returns
     */
    function scrollToBottom(elementSelector) {
        var element = document.querySelector(elementSelector);
        if (element) {
            element.scrollTop = element.scrollHeight;
        }
    }
    /**
     * Y 轴滚动到指定位置
     * Example:
     *  `scrollYTo(0) => 滚动到顶部`
     *  `scrollYTo('start', null, document.documentElement) => 滚动到顶部`
     *  `scrollYTo('end', (percent) => console.log(percent), document.querySelector('body')) => 滚动到底部`
     * @param targetVal 'start' | 'end' | number
     * @param callback 回调
     * @param dom 元素对象
     * @returns
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
            }, window);
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
        //   var step = (targetVal - dom.scrollY) / 10;
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
     * Example:
     *  `scrollXTo(0) => 滚动到左侧`
     *  `scrollXTo('start', null, document.documentElement) => 滚动到左侧`
     *  `scrollXTo('end', (percent) => console.log(percent), document.querySelector('body')) => 滚动到右侧`
     * @param targetVal 'start' | 'end' | number
     * @param callback 回调
     * @param dom 元素对象
     * @returns
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
            }, window);
            // 防止位置已经到极限了，没触发 scroll 事件。
            timer_2 = setTimeout(cancel_2, 100);
        }
        window.scroll({ left: (_b = customVal[targetVal]) !== null && _b !== void 0 ? _b : targetVal, behavior: 'smooth' });
    }
    /**
     * 获取滚动条百分比
     * Example: `getScrollPercent(document.documentElement, 'Y') => 0.581134549876`
     * @param direction X/Y 轴的进度条
     * @param dom 元素
     * @returns
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
            console.log('js-xxx:getScrollPercentError', e);
            percent = -1;
        }
        return percent;
        // // scroll percent
        // window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        // document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    }
    /**
     * 找元素的第 n 级父元素
     * Example: `findParents(document.getElementById('test'), 3) => #test 的第三个父元素`
     * @param element 指定元素
     * @param n 第几个
     * @returns
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
     * Example: `findChildren(document.getElementById('test')) => #test 的所有子元素数组`
     * @param element 指定元素
     * @returns
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
     * Example: `getViewportSize() => { width: 1280, height: 649 }`
     * @returns
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
     * Example: `getStyle(document.getElementById('test'), 'width') => #test 的 width 属性`
     * @param element 指定元素
     * @param name 属性名称
     * @returns
     */
    function getStyleByName(element, name) {
        return window.getComputedStyle ? window.getComputedStyle(element, null)[name] : element.currentStyle[name];
    }
    /**
     * 添加 link 标签
     * Example: `appendLink('favicon', 'favicon') => 添加一个 link 标签`
     * @param linkUrl 链接地址
     * @param rel 类型
     * @returns
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
     * Example: `appendScript('./test.js') => 添加一个 script 标签`
     * @param scriptUrl 脚本地址
     * @param async 是否异步
     * @param defer 是否延迟加载
     * @returns
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
     * Example: `download('https://xxx.com/xxx', 'xxx') => 下载后端返回的流`
     * @param link 链接
     * @param name 文件名称(可选，默认以链接最好一段作为名称，填写时可不带后缀自动识别，写了后缀会以写的后缀为准。)
     * @returns
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
     * 在浏览器中自定义下载一些内容
     * Example:
     * `downloadContent('test.txt', 'test txt content') => 下载返回的流`
     * `downloadContent('test.json', JSON.stringify({content: 'test json'})) => 下载返回的流`
     * @param name 文件名称(需带后缀)，默认 txt 。
     * @param content 内容 BlobPart | any
     * @returns
     */
    function downloadContent(name, content) {
        if (!name) {
            name = 'unknown';
        }
        try {
            if (!(content instanceof Blob)) {
                content = new Blob([content]);
            }
            var link = URL.createObjectURL(content);
            download(link, name);
        }
        catch (e) {
            console.log('js-xxx:downloadContentError', e);
        }
    }
    /**
     * 给元素设置 marquee 内容滚动效果，支持来回滚动，正常跑马灯，无限无缝滚动。
     * 一般来说设置两层，滚动的区间就是父元素的大小。
     * 若 #demo 高度小于 container，除非 loopType 设置 infinite，否则不会有动画。
     * `<div class="demo-container"><div id="#demo">...span.items...</div></div>`
     * Example:
     * `marquee('#demo') => 默认横向正常滚动(loopType=normal)`
     * `marquee('.demo-y', {direction: 'Y', loopType: 'infinite', speed: 3}) => Y 轴无限无缝滚动，speed > 0 越小速度越快。`
     * `marquee('.demo-x', {direction: 'X', loopType: 'origin', speed: 3, style: 'animation-delay:2s;', parentStyle: 'color:red;'}) => X 轴无限来回滚动`
     * @param selector
     * @param options
     * @returns
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
                ((_c = options === null || options === void 0 ? void 0 : options.speed) !== null && _c !== void 0 ? _c : 3)) !== null && _d !== void 0 ? _d : 5, "s;").concat(noAnimation ? 'animation-duration:0s;' : '').concat((_e = options === null || options === void 0 ? void 0 : options.style) !== null && _e !== void 0 ? _e : ''));
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
            console.log('js-xxx:marqueeError', e);
        }
    }

    /*
     * @Author: HxB
     * @Date: 2022-04-26 15:53:02
     * @LastEditors: DoubleAm
     * @LastEditTime: 2022-10-12 15:34:49
     * @Description: 表单相关
     * @FilePath: \js-xxx\src\Form\index.ts
     */
    /**
     * 对象转 FormData
     * Example: `formatFormData({a: 1, b: 2}) => FormData`
     * @param obj 源数据
     * @param hasBrackets 是否带括号
     * @param hasIndex 是否带 index
     * @returns
     */
    function formatFormData(obj, hasBrackets, hasIndex) {
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
     * 对象转 URLSearchParams
     * Example:
     * `formatURLSearchParams({a: 1, b: 2, c: [1, 2]}) => a=1&b=2&c=1&c=2`
     * `formatURLSearchParams({a: 1, b: 2, c: [1, 2]}, true) => a=1&b=2&c[]=1&c[]=2`
     * `formatURLSearchParams({a: 1, b: 2, c: [1, 2]}, true, true) => a=1&b=2&c[0]=1&c[1]=2`
     * @param obj 源数据
     * @param hasBrackets 是否带括号
     * @param hasIndex 是否带 index
     * @returns
     */
    function formatURLSearchParams(obj, hasBrackets, hasIndex) {
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

    /*
     * @Author: HxB
     * @Date: 2022-04-26 16:24:34
     * @LastEditors: DoubleAm
     * @LastEditTime: 2023-03-13 15:39:44
     * @Description: 数学常用函数
     * @FilePath: \js-xxx\src\Math\index.ts
     */
    /**
     * 除法函数
     * Example:
     * `div(1, 2) => 0.5`
     * `div(0.55, 100) => 0.0055`
     * @param div1 被除数
     * @param div2 除数
     * @returns
     */
    function div(div1, div2) {
        var div1FloatLen = 0, div2FloatLen = 0;
        var tempDiv1 = div1.toString(), tempDiv2 = div2.toString();
        try {
            div1FloatLen = tempDiv1.split('.')[1].length; // 获取小数长度
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
        return times(Number(tempDiv1.replace('.', '')) / Number(tempDiv2.replace('.', '')), Math.pow(10, div2FloatLen - div1FloatLen)); // 转换整数计算再使用科学计数法转换小数位
    }
    /**
     * 乘法函数
     * Example:
     * `times(1, 2) => 2`
     * `times(0.55, 100) => 55`
     * @param mul1 被乘数
     * @param mul2 乘数
     * @returns
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
     * Example:
     * `add(1, 2) => 3`
     * `add(0.1, 0.2) => 0.3`
     * @param add1 被加数
     * @param add2 加数
     * @returns
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
     * Example:
     * `sub(1, 2) => -1`
     * `sub(0.55, 0.1) => 0.45`
     * @param sub1 被减数
     * @param sub2 减数
     * @returns
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
     * Example:
     * `average(1, 2, 3, 4) => 2.5`
     * `average(1, 2, 3, 4.123) => 2.53075`
     * @param args
     * @returns
     */
    function average() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var sum = 0;
        var len = args.length;
        for (var i = 0; i < len; i++)
            sum = add(sum, args[i]);
        return args.length ? div(sum, len) : 0;
    }
    /**
     * 获取绝对值
     * Example:
     * `abs(-1) => 1`
     * `abs(1) => 1`
     * @param value
     * @returns
     */
    function abs(value) {
        return Math.abs(value);
    }
    /**
     * 去尾法获取数值
     * Example:
     * `float(1.135, 0, true) => '1'`
     * `float(1.135, 2, true) => '1.13'`
     * `float(1.135, 1) => 1.1`
     * `float(1.135, 4) => 1.135`
     * `float(1.135, 4, true) => '1.1350'`
     * @param value
     * @param d
     * @param isStr
     * @returns
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
     * 初始化 Notification
     * Example: `initNotification() => true||false`
     * @returns
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
     * Example: `sendNotification('测试通知', '测试标题', {...options}) => 发送成功/失败`
     * @returns
     */
    function sendNotification(msg, title, options) {
        var _a, _b, _c, _d, _e, _f;
        // @ts-ignore
        var NOTIFICATION = window.Notification || (window === null || window === void 0 ? void 0 : window.mozNotification) || (window === null || window === void 0 ? void 0 : window.webkitNotification);
        if (!NOTIFICATION) {
            console.log('js-xxx:sendNotification', '系统不支持 Notification API');
            return;
        }
        var notify = new Notification(title !== null && title !== void 0 ? title : 'js-xxx Notification', __assign(__assign({}, options), { dir: (_a = options === null || options === void 0 ? void 0 : options.dir) !== null && _a !== void 0 ? _a : 'auto', lang: (_b = options === null || options === void 0 ? void 0 : options.lang) !== null && _b !== void 0 ? _b : 'zh-CN', requireInteraction: (_c = options === null || options === void 0 ? void 0 : options.requireInteraction) !== null && _c !== void 0 ? _c : false, tag: (_d = options === null || options === void 0 ? void 0 : options.tag) !== null && _d !== void 0 ? _d : getRandStr(8), icon: (_e = options === null || options === void 0 ? void 0 : options.icon) !== null && _e !== void 0 ? _e : 'favicon.ico', timestamp: (_f = options === null || options === void 0 ? void 0 : options.timestamp) !== null && _f !== void 0 ? _f : new Date().getTime(), body: msg }));
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
     * @LastEditTime: 2023-03-13 15:41:51
     * @Description: 常用数字相关函数
     * @FilePath: \js-xxx\src\Number\index.ts
     */
    /**
     * 四舍五入
     * Example:
     * `round(1.2345, 2) => 1.23`
     * `round(0.355, 2) => 0.36`
     * `const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed)`;
     * @param number 浮点数
     * @param d 保留小数位
     * @returns
     */
    function round(number, d) {
        var tempNum = number + ''; // example-0.155
        d = !d ? 0 : d;
        if (d == 0) {
            // 保留 0 位小数直接取整就好了
            return Math.round(number);
        }
        if (tempNum.indexOf('.') === -1) {
            tempNum += '.';
        }
        tempNum += new Array(d + 1).join('0'); // -0.15500
        if (new RegExp('^(-|\\+)?(\\d+(\\.\\d{0,' + (d + 1) + '})?)\\d*$').test(tempNum)) {
            //  【/^(-|\+)?(\d+(\.\d{0,3})?)\d*$/】
            var tempStr = '0' + RegExp.$2, 
            // eslint-disable-next-line prefer-const
            pm = RegExp.$1, a = RegExp.$3.length, flag = true; // tempStr：数值部分（0.155）加 0 是为了防止产生进位，pm：正负号（-），a：小数点+小数（.155）长度为上一条正则表达式得出的结果（此处为{0,3}），flag：首位 0 是否未产生进位。
            if (a == d + 1 + 1) {
                // 一个 1 为小数点，一个 1 为需要多一位数字才能判断，此处判断是否有足够的数字来得出结果。
                a = tempStr.match(/\d/g); // ["0", "0", "1", "5", "5"]
                var aLen = a.length;
                if (parseInt(a[aLen - 1]) > 4) {
                    // 保留小数的后一位是否大于 4
                    for (var i = aLen - 2; i >= 0; i--) {
                        a[i] = parseInt(a[i]) + 1;
                        if (a[i] == 10) {
                            a[i] = 0;
                            flag = i != 1; // 判断首位 0 是否未产生进位，false 为产生了进位，后续不裁剪首位 0（因为 i==1 时，首位 0 发生了变化，0 变为 1）。
                        }
                        else
                            break;
                    }
                }
                tempStr = a.join('').replace(new RegExp('(\\d+)(\\d{' + d + '})\\d$'), '$1.$2'); // 【/(\d+)(\d{2})\d$/】$1 至少包含一个数字，$2 必须为保留的小数位，结尾必须有一个数字，所以如果 00155，d=2,结果为 00.15，若 d=1，则结果为 001.5 。
            }
            if (flag) {
                // 如果首位 0 未产生进位，去掉多余的 0 。
                tempStr = tempStr.substr(1);
            }
            return parseFloat((pm + tempStr).replace(/\.$/, '')); // 返回浮点数，以防万一去掉结尾的小数点（.）。
        }
    }
    /**
     * 是否整数(严格匹配)
     * Example:
     * `isInteger('0') => true`
     * `isInteger('-0', '+') => false`
     * @returns
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
     * Example:
     * `isDecimal('0.0') => true`
     * `isDecimal('0.0', '+', true) => false`
     * `isDecimal('-0.1', '+') => false`
     * `isDecimal('-0.10', '-') => true`
     * @returns
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
     * Example: `formatNumber('12312300') => '12,312,300'`
     * @param value
     * @returns
     */
    function formatNumber(value) {
        try {
            return Number(value).toLocaleString();
        }
        catch (e) {
            return "".concat(value);
        }
    }

    /*
     * @Author: HxB
     * @Date: 2022-04-26 15:05:14
     * @LastEditors: DoubleAm
     * @LastEditTime: 2023-03-13 15:42:13
     * @Description: 对象相关函数
     * @FilePath: \js-xxx\src\Object\index.ts
     */
    /**
     * 获取多级对象值
     * Example: `getV('默认值', {name: {children: [123, 456]}}, 'name', 'children', '0') => 123`
     * @param defaultResult 默认值
     * @param args 需要获取的多级 rest 参数
     * @returns
     */
    function getV(defaultResult) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return args.length >= 2
            ? // eslint-disable-next-line no-prototype-builtins, indent
                args.reduce(function (a, b) { return (a && a.hasOwnProperty(b) ? a[b] : defaultResult); })
            : defaultResult;
    }
    /**
     * 获取多级对象值通过字符串 keys
     * Example:
     * `getVar({name: {children: [123, 456]}}, 'name.children.1', '默认值') => 456`
     * `getVar([1, 2, 3, 4], '100', '默认值') => '默认值'`
     * @param data 源数据
     * @param keys 多级对象字符串
     * @param defaultResult 默认值
     * @returns
     */
    function getVar(data, keys, defaultResult) {
        var _a;
        if (keys == undefined) {
            return defaultResult;
        }
        // 不要使用 replace(/\[(\w+)\]/g, '.$1') 去替换，哪怕加个前后 \. 的正则也无法兼容所有情况，应该交给使用者去考虑，因为确实有 [] 做 key 的情况。
        var args = (_a = "".concat(keys)) === null || _a === void 0 ? void 0 : _a.split('.');
        return args && (args === null || args === void 0 ? void 0 : args.length)
            ? // eslint-disable-next-line no-prototype-builtins, indent
                args.reduce(function (a, b) { return (a && a.hasOwnProperty(b) ? a[b] : defaultResult); }, data)
            : defaultResult;
    }
    /**
     * 合并对象
     * Example:
     * `mergeObj({name: 1, oldValue: 2}, {name: 3, value: 4}, []) => {name: 1, oldValue: 2, value: 4}`
     * `mergeObj({name: 1, oldValue: 2}, {name: 3, value: 4}, ['name'], true) => {name: 3, value: 4}`
     * @param oldObj 源对象
     * @param newObj 要合并的对象
     * @param keys 要覆盖的属性 key，不指定时以源对象为准，指定时以新对象为准。
     * @param noOld 新对象中不存在的属性直接删除，默认不删除 false，true 删除。
     * @returns
     */
    function mergeObj(oldObj, newObj, keys, noOld) {
        if (noOld === void 0) { noOld = false; }
        for (var newKey in newObj) {
            if (getType(newObj[newKey]) === 'object' && getType(oldObj[newKey] === 'object')) {
                oldObj[newKey] = mergeObj(oldObj[newKey], newObj[newKey], keys);
            }
            else if (Object.keys(oldObj).includes(newKey) && !(keys === null || keys === void 0 ? void 0 : keys.includes(newKey))) ;
            else {
                oldObj[newKey] = newObj[newKey];
            }
        }
        if (noOld) {
            for (var oldKey in oldObj) {
                // 新对象上没有的属性删掉
                if (newObj[oldKey] === undefined) {
                    delete oldObj[oldKey];
                }
            }
        }
        return oldObj;
    }
    /**
     * 深拷贝
     * https://juejin.cn/post/7075351322014253064
     * Example: `deepClone({a: 1, b: {c: 2}}) => 新的 {a: 1, b: {c: 2}}`
     * @param data 源数据
     * @param hash hash 存储，避免循环引用。
     * @returns
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
    }
    // exportNO function deepClone(data: any): any {
    //   // JSON.parse(JSON.stringify(data))
    //   if (getType(data) !== 'object' || !Array.isArray(data)) {
    //     return data;
    //   }
    //   let result: any = Array.isArray(data) ? [] : {};
    //   for (let i in data) {
    //     result[i] = deepClone(data[i]);
    //   }
    //   return result;
    // }

    /*
     * @Author: HxB
     * @Date: 2022-04-26 14:53:39
     * @LastEditors: DoubleAm
     * @LastEditTime: 2023-03-13 15:43:00
     * @Description: 因项目需要常用函数，不管任何项目，都放到一起。注意甄别，没有复用意义的函数就不要添加了。
     * @FilePath: \js-xxx\src\Others\index.ts
     */
    /**
     * 文件大小格式化
     * Example: `formatBytes(1024) => '1.00 KB'`
     * @param bytes 文件大小 bytes
     * @param precision 精度
     * @returns
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
     * 设置网页 icon
     * Example: `setIcon('/favicon.ico')`
     * @param iconLink icon 链接
     * @returns
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
     * Example: `copyToClipboard('hello world')`
     * @param text 内容文本
     * @returns
     */
    function copyToClipboard(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
        }
    }
    /**
     * 获取浏览器信息
     * Example: `getUserAgent() => { browserName: 'Chrome', browserVersion: '102.0.0.0', osName: 'Windows', osVersion: '10.0', deviceName: '' }`
     * @returns
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
            browserName: '',
            browserVersion: '',
            osName: '',
            osVersion: '',
            deviceName: '', // 设备名称
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
     * Example: `isNode() => true`
     * @returns
     */
    function isNode() {
        return typeof process !== 'undefined' && !!process.versions && !!process.versions.node;
    }
    /**
     * 判断当前运行环境是否为浏览器
     * Example: `isBrowser() => true`
     * @returns
     */
    function isBrowser() {
        return typeof window !== 'undefined' && typeof document !== 'undefined';
    }
    /**
     * 检测黑暗模式
     * Example: `isDarkMode() => true`
     * @returns
     */
    function isDarkMode() {
        return (window.matchMedia &&
            (window.matchMedia('(prefers-color-scheme:dark)').matches ||
                window.matchMedia('(prefers-color-scheme: dark)').matches));
    }
    /**
     * 是否苹果设备
     * Example: `isAppleDevice() => true`
     * @returns
     */
    function isAppleDevice() {
        return /Mac|iPod|iPhone|iPad/.test(navigator.platform);
    }
    // eslint-disable-next-line spellcheck/spell-checker
    /**
     * 单击事件转换为多击事件
     * Author: wuxingheng
     * Example: `onClick2MoreClick(300, clickOneCallBack, clickTwoCallBack, clickThreeCallBack, clickFourCallBack) => void`
     * @param {number} delay
     * @param {Array} events
     * @returns
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
     * Example: `bindMoreClick(moreClickCallBack, 4, 500) => 绑定 4 击事件`
     * @param fn
     * @param times
     * @param delay
     * @returns
     */
    function bindMoreClick(fn, times, delay) {
        if (times === void 0) { times = 3; }
        if (delay === void 0) { delay = 300; }
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
     * 触发某个键盘按键事件
     * Example: `emitKeyboardEvent('keydown', 108) => 小键盘回车事件`
     * @param eventType 事件类型
     * @param keyCode 触发键盘 code
     * @returns
     */
    function emitKeyboardEvent(eventType, keyCode) {
        if (eventType === void 0) { eventType = 'keydown'; }
        if (keyCode === void 0) { keyCode = 13; }
        var myEvent = new KeyboardEvent(eventType, {
            bubbles: true,
            cancelable: true,
            keyCode: keyCode,
        });
        document.body.dispatchEvent(myEvent);
    }
    /**
     * 禁用冲突事件，条码枪、关闭窗口快捷键等。
     * Example:
     * `document.addEventListener('keydown', disableConflictEvent) => 进入页面后禁用冲突事件`
     * `document.removeEventListener('keydown', disableConflictEvent) => 退出页面后关闭监听`
     * @param event 触发事件
     * @returns
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
        return false; // true 防止此事件被进一步传播;false 允许此事件继续传播;
    }
    /**
     * 版本号比对算法
     * Example:
     * `checkVersion('1.0.1-rc', '1.0.0', '-rc') => 1`
     * `checkVersion('1.0.0', '1.0.1') => -1`
     * `checkVersion('1.0.0', '1.0.0') => 0`
     * @param targetVersion
     * @param currentVersion
     * @param testStr default(-rc)
     * @returns
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
     * Example:
     * `versionUpgrade('0.0.1') => '0.0.2'`
     * `versionUpgrade('0.0.0.9') => '0.0.0.10'`
     * `versionUpgrade('0.0.0.9', 9) => '0.0.1.0'`
     * `versionUpgrade('0.0.9.9', 9) => '0.1.0.0'`
     * @param version 版本号
     * @param maxVersionCode 最大版本号
     * @returns
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
     * Example:
     * `formatRh('**d**') => '阴性'`
     * `formatRh('**d**', { format: [true, false], default: false }) => true`
     * @param input 输入值
     * @param options 处理配置
     * @returns
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
     * Example: `isRhNegative('**d**') => true`
     * @param input 输入值
     * @returns
     */
    function isRhNegative(input) {
        return formatRh(input, { format: [true, false], default: false });
    }
    /**
     * 获取血型枚举信息
     * Example: `getBloodGroup('A') => { value: 'A', label: 'A 型', color: '#1890FF', lower: 'a', upper: 'A' }`
     * @param bloodGroup
     * @returns
     */
    function getBloodGroup(bloodGroup) {
        var keyList = ['A', 'a', 'B', 'b', 'O', 'o', 'AB', 'ab'];
        bloodGroup = keyList.includes(bloodGroup) ? bloodGroup.toUpperCase() : 'unknown';
        var bloodGroups = {
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
        return bloodGroups[bloodGroup];
    }
    /**
     * 填对应值到对应的 dom 中
     * Example:
     * `dataTo('.className', 'xxx') => xxx 会填入到类名为 class-name 的元素中`
     * `dataTo('.class-name', 'xxx') => xxx 会填入到类名为 class-name 的元素中`
     * `dataTo('.class_name', 'xxx') => xxx 会填入到类名为 class-name 的元素中`
     * `dataTo('.class.name', 'xxx') => xxx 会填入到类名为 class-name 的元素中`
     * `dataTo('#id.name', 'xxx') => xxx 会填入到 id 名为 id-name 的元素中`
     * @param key
     * @param value
     * @returns
     */
    function dataTo(key, value) {
        var $dom;
        try {
            key = key.toString();
            $dom = document.querySelector((['.'].includes(key.charAt(0)) ? key.charAt(0) : '') + splitCase(key).join('-'));
            if ($dom) {
                $dom.innerHTML = value;
                // @ts-ignore
                $dom.value = value;
            }
        }
        catch (e) {
            console.log('js-xxx:dataToError', e, { key: key, value: value, $dom: $dom });
        }
    }

    /*
     * @Author: HxB
     * @Date: 2022-04-26 15:18:13
     * @LastEditors: DoubleAm
     * @LastEditTime: 2023-03-14 11:06:42
     * @Description: Promise 常用函数，或者扩展函数。
     * @FilePath: \js-xxx\src\Promise\index.ts
     */
    /**
     * 睡眠
     * Example: `await sleep(1000) => 等待 1000 毫秒再执行后面的`
     * @param milliseconds 睡眠时间
     * @returns
     */
    function sleep(milliseconds) {
        return new Promise(function (resolve) { return setTimeout(resolve, milliseconds); });
    }
    /**
     * 参考了 to.js，扩展 Promise 用来直接帮助执行且处理异常。
     * promise 报错不会阻断后面的 Promise，适用于多个 await Promise 情况。
     * Example: `to(Promise.resolve(1)) => Promise.resolve(1)`
     * @param promise promise
     * @param res 成功回调
     * @param rej 失败回调
     * @returns
     */
    function to(promise, res, rej) {
        return promise
            .then(function (data) {
            res && res(data);
            return data;
        })
            .catch(function (e) {
            rej && rej(e);
            console.log('js-xxx:toError', e);
        });
    }
    /**
     * Promise 重试
     * Example: `retry(() => Promise.reject(new Error('error')), 3) => Promise.reject(new Error('error')) 执行 3 次`
     * @param promise promise
     * @param count 次数
     * @param delay 延迟时间
     * @returns
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
                            console.log('js-xxx:toError', e);
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
     * Example: `await all(...promise array) => [...result array]`
     * @param promises promises
     * @param errorHandler errorHandler
     * @returns
     */
    function all(promises, errorHandler) {
        return Promise.all(promises).catch(function (e) { return errorHandler && errorHandler(e); });
    }
    /**
     * 同步执行多个 promise，返回最先成功的结果，已做错误处理。
     * Example: `await any(...promise array) => success result`
     * @param promises promises
     * @param errorHandler errorHandler
     * @returns
     */
    function any(promises, errorHandler) {
        return Promise.any(promises).catch(function (e) { return errorHandler && errorHandler(e); });
    }
    /**
     * New 一个自带错误处理的 Promise，适用于只处理成功情况，不关注失败的 Promise，省去写 catch 的时间与空间。
     * Example: `new catchPromise(resolve, reject, rejectHandler) => Promise`
     * @param promiseHandler promiseHandler
     * @param errorHandler errorHandler
     * @returns
     */
    function catchPromise(promiseHandler, errorHandler) {
        return new Promise(promiseHandler).catch(function (e) { return errorHandler && errorHandler(e); });
    }

    /**
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
     * Http Method
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
     * 对象转 queryString 暂时只支持两层数据，第二层对象与与数组值不能为引用类型。
     * Example:
     * `qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3] }) => 'start=0&count=20&obj[a]=1&arr[]=1&arr[]=2&arr[]=3'`
     * `qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3] }, { arr2str: true }) => 'start=0&count=20&obj[a]=1&arr=1,2,3'`
     * `qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3], str: '1' }, { hasIndex: true }) => 'start=0&count=20&obj[a]=1&arr[0]=1&arr[1]=2&arr[2]=3&str=1'`
     * @param obj 源数据
     * @returns
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
                        val.filter(Boolean).forEach(function (arrVal, arrIndex) {
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
        return (options === null || options === void 0 ? void 0 : options.urlEncode) ? queryString.toString() : decodeURIComponent(queryString.toString());
    }
    /**
     * 获取 query string 参数
     * Example:
     * `qsParse('start=0&count=20&x=1&x=2&x=3', 'x') => [1, 2, 3]`
     * `qsParse('start=0&count=20&x=1&x=2&x=3') => { start: '0', count: '20', x: [1, 2, 3], '/': 'start=0&count=20&x=1&x=2&x=3' }`
     * @param url query string
     * @param key 参数名
     * @returns
     */
    function qsParse(url, key) {
        // 也可使用 new URL(url) 或者 new URLSearchParams(params) API 获取
        var pathname = url !== null && url !== void 0 ? url : window.location.pathname;
        url = url !== null && url !== void 0 ? url : window.location.search;
        var filename = pathname.substring(pathname.lastIndexOf('/') + 1);
        var paramMap = {
            '/': filename !== null && filename !== void 0 ? filename : undefined,
        };
        var queryString = url.indexOf('?') === 0 ? url.substring(1) : url;
        if (queryString.length !== 0) {
            var parts = queryString.split('&');
            for (var i = 0; i < parts.length; i++) {
                var component = parts[i].split('=');
                var paramKey = decodeURIComponent(component[0]);
                var paramVal = decodeURIComponent(component[1]);
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
     * Example:
     * `getBaseURL('https://test.com/index?name=leo&org=biugle#test') => 'https://test.com/index'`
     * `getBaseURL('') => ''`
     * `getBaseURL() => 当前页面 BaseURL`
     * @param url
     * @returns
     */
    function getBaseURL(url) {
        url = url !== null && url !== void 0 ? url : window.location.href;
        return url.replace(/[?#].*$/, '');
    }
    /**
     * 获取 url 查询参数字符串
     * Example:
     * `getQueryString('https://test.com/index?name=leo&org=biugle#test') => 'name=leo&org=biugle'`
     * `getQueryString('') => ''`
     * `getQueryString() => 当前页面 QueryString 字符串部分`
     * @param url
     * @returns
     */
    function getQueryString(url) {
        var _a, _b, _c, _d, _e;
        return toBool(url) ? (_d = (_c = (_b = (_a = url === null || url === void 0 ? void 0 : url.split('?')) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b.split('#')) === null || _c === void 0 ? void 0 : _c[0]) !== null && _d !== void 0 ? _d : '' : (_e = window.location.search) === null || _e === void 0 ? void 0 : _e.replace('?', '');
    }
    /**
     * 获取查询参数对象
     * Example:
     * `getSearchParams('https://test.com/index?name=leo&org=biugle#test') => {name: 'leo', org: 'biugle'}`
     * `getSearchParams('') => {}`
     * `getSearchParams() => 当前页面 SearchParams 对象`
     * @param url
     * @returns
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
     * Example:
     * `xAjax('get', 'https://test.cn', { params: { test: 123, hello: 456 }, success: (data) => console.log('success', data), fail: (error) => console.log('fail', error) }) => ajax`
     * `xAjax('POST', 'https://test.cn', { contentType: 'application/json', data: { test: 123 }, success: (data) => console.log('success', data), fail: (error) => console.log('fail', error) }) => ajax`
     * @param method
     * @param url
     * @param options
     * @returns
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
     * Example:
     * `xFetch('get', 'https://test.cn', { params: { test: 123, hello: 456 } }).then(res => res.json()).then(data => console.log(data)) => fetchXPromise`
     * `xFetch('POST', 'https://test.cn', { contentType: 'application/json', data: { test: 123 } }).catch(error => console.log(error)) => fetchXPromise`
     * @param method
     * @param url
     * @param options
     * @returns
     */
    function xFetch(method, url, options) {
        var _a;
        if (options === null || options === void 0 ? void 0 : options.params) {
            url = "".concat(url).concat(url.includes('?') ? '&' : '?').concat(new URLSearchParams(options.params).toString());
        }
        if (options === null || options === void 0 ? void 0 : options.data) {
            options.data = !(options === null || options === void 0 ? void 0 : options.raw) && isObj(options.data) ? JSON.stringify(options.data) : options.data;
        }
        return fetch(url, {
            headers: {
                'content-type': (_a = options === null || options === void 0 ? void 0 : options.contentType) !== null && _a !== void 0 ? _a : 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            method: method,
            body: options === null || options === void 0 ? void 0 : options.data,
        });
    }
    // eslint-disable-next-line spellcheck/spell-checker
    /**
     * 获取常见的 content-type
     * Example:
     * `getContentType('form') => 'application/x-www-form-urlencoded'`
     * `getContentType('file') => 'multipart/form-data'`
     * `getContentType('pdf') => 'application/pdf'`
     * `getContentType('unknown') => 'application/octet-stream'`
     * @param fileType
     * @returns
     */
    function getContentType(fileType) {
        var _a;
        return (_a = CONTENT_TYPES[fileType]) !== null && _a !== void 0 ? _a : 'application/octet-stream';
    }

    /*
     * @Author: HxB
     * @Date: 2022-06-04 16:30:04
     * @LastEditors: DoubleAm
     * @LastEditTime: 2023-03-13 18:33:15
     * @Description: localStorage 与 sessionStorage
     * @FilePath: \js-xxx\src\Storage\index.ts
     */
    // 加密与过期设置参考 https://juejin.cn/post/7104301566857445412
    // 可以利用提供的加密函数手动绝对是否加密一些关键数据
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
            console.log('js-xxx:storageSetError', e);
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
     * Example: `localStorageGet("key") => 处理过后的 value，不需要再 decode`
     * @param key 存储 key
     * @returns
     */
    function localStorageGet(key) {
        return _tempGet(key, 'L');
    }
    /**
     * 设置 localStorage
     * Example: `localStorageSet("key", "value") => 存储时不需要处理数据，value === null|undefined 清除数据。(boolean)`
     * @param key 存储 key
     * @param value 存储 value，value === null|undefined 清除数据。
     * @returns
     */
    function localStorageSet(key, value) {
        return _tempSet(key, value, 'L');
    }
    /**
     * 获取 sessionStorage
     * Example: `sessionStorageGet("key") => 处理过后的 value，不需要再 decode`
     * @param key 存储 key
     * @returns
     */
    function sessionStorageGet(key) {
        return _tempGet(key, 'S');
    }
    /**
     * 设置 sessionStorage
     * Example: `sessionStorageSet("key", "value") => 存储时不需要处理数据，value === null|undefined 清除数据。`
     * @param key 存储 key
     * @param value 存储 value，value === null|undefined 清除数据。
     * @returns
     */
    function sessionStorageSet(key, value) {
        return _tempSet(key, value, 'S');
    }

    /*
     * @Author: HxB
     * @Date: 2022-04-26 14:10:35
     * @LastEditors: DoubleAm
     * @LastEditTime: 2023-03-14 11:18:41
     * @Description: websocket
     * @FilePath: \js-xxx\src\WebSocket\index.ts
     */
    var xWebSocket;
    // 用于设置 websocket 连接超时问题 timeout
    var xWebSocketTimer;
    // eslint-disable-next-line spellcheck/spell-checker
    /**
     * 初始化 websocket
     * Example: `initWebSocket({ url: 'ws://localhost:8080/ws', timeout: 30000, onOpen: () => {}, onMessage: () => {}, onClose: () => {}, onError: () => {}, reconnect: {} })`
     * @param options `{url, onOpen, onMessage, onClose, onError, timeout, reconnect: {times, delay, onReconnect} | boolean} WebSocket 配置`
     * @returns {WebSocket}
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
                initWebSocket(options);
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
                    initWebSocket(__assign(__assign({}, options), { reconnect: __assign(__assign({}, options.reconnect), { times: times }) }));
                }, (_e = (_d = options.reconnect) === null || _d === void 0 ? void 0 : _d.delay) !== null && _e !== void 0 ? _e : 1000);
            }
        };
        return xWebSocket;
    }
    /**
     * 发送消息
     * Example:
     * `sendWsMessage({ type: 'login', data: { username: 'admin', password: '123456' }}, true) => true/false`
     * `sendWsMessage('testMsg') => true/false`
     * @param message 消息
     * @param isJSONEncode 是否 JSON 序列化
     * @returns
     */
    function sendWsMessage(message, isJSONEncode) {
        if (isJSONEncode === void 0) { isJSONEncode = false; }
        if (!xWebSocket) {
            return false;
        }
        xWebSocket.send(isJSONEncode ? JSON.stringify(message) : message);
        return true;
    }
    /**
     * 关闭 websocket
     * Example: `closeWebSocket() => true/false`
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
     * 获取 websocket 实例
     * Example: `getWebSocket() => [websocket object]`
     * @returns
     */
    function getWebSocket() {
        return xWebSocket;
    }
    /**
     * 设置 websocket binaryType default: 'blob'
     * Example: `setWsBinaryType() => true/false`
     * @param binaryType BinaryType 二进制类型 default: 'arraybuffer'
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
    // 使用 grpc 记得 buffer2obj 和 obj2buffer

    exports.CONTENT_TYPES = CONTENT_TYPES;
    exports.H5Resize = H5Resize;
    exports.Logger = Logger;
    exports.Speaker = Speaker;
    exports.abs = abs;
    exports.add = add;
    exports.all = all;
    exports.any = any;
    exports.appendLink = appendLink;
    exports.appendScript = appendScript;
    exports.arrObj2objArr = arrObj2objArr;
    exports.arraySet = arraySet;
    exports.arraySort = arraySort;
    exports.atob = atob;
    exports.average = average;
    exports.banConsole = banConsole;
    exports.base64Decode = base64Decode;
    exports.base64Encode = base64Encode;
    exports.bindMoreClick = bindMoreClick;
    exports.btoa = btoa;
    exports.calcDate = calcDate;
    exports.camelCase = camelCase;
    exports.catchPromise = catchPromise;
    exports.checkFileExt = checkFileExt;
    exports.checkIdCard = checkIdCard;
    exports.checkVersion = checkVersion;
    exports.closeFullscreen = closeFullscreen;
    exports.closeWebSocket = closeWebSocket;
    exports.compareDate = compareDate;
    exports.contains = contains;
    exports.copyContent = copyContent;
    exports.copyToClipboard = copyToClipboard;
    exports.countdown = countdown;
    exports.curryIt = curryIt;
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
    exports.emitKeyboardEvent = emitKeyboardEvent;
    exports.empty = empty;
    exports.encrypt = encrypt;
    exports.findChildren = findChildren;
    exports.findParents = findParents;
    exports.float = float;
    exports.formatBytes = formatBytes;
    exports.formatDate = formatDate;
    exports.formatFormData = formatFormData;
    exports.formatJSON = formatJSON;
    exports.formatNumber = formatNumber;
    exports.formatRh = formatRh;
    exports.formatURLSearchParams = formatURLSearchParams;
    exports.get1Var = get1Var;
    exports.getAge = getAge;
    exports.getAnimal = getAnimal;
    exports.getBSColor = getBSColor;
    exports.getBaseURL = getBaseURL;
    exports.getBloodGroup = getBloodGroup;
    exports.getConstellation = getConstellation;
    exports.getContentType = getContentType;
    exports.getCookie = getCookie;
    exports.getCryptoJS = getCryptoJS;
    exports.getDateDifference = getDateDifference;
    exports.getDateList = getDateList;
    exports.getDateTime = getDateTime;
    exports.getKey = getKey;
    exports.getLastVar = getLastVar;
    exports.getMonthDays = getMonthDays;
    exports.getMonthDaysCount = getMonthDaysCount;
    exports.getMonthInfo = getMonthInfo;
    exports.getQueryString = getQueryString;
    exports.getRandColor = getRandColor;
    exports.getRandNum = getRandNum;
    exports.getRandStr = getRandStr;
    exports.getRandVar = getRandVar;
    exports.getScrollPercent = getScrollPercent;
    exports.getSearchParams = getSearchParams;
    exports.getSize = getSize;
    exports.getStyleByName = getStyleByName;
    exports.getTimeAndStr = getTimeAndStr;
    exports.getTimeCode = getTimeCode;
    exports.getType = getType;
    exports.getUTCTime = getUTCTime;
    exports.getUUID = getUUID;
    exports.getUserAgent = getUserAgent;
    exports.getV = getV;
    exports.getVar = getVar;
    exports.getViewportSize = getViewportSize;
    exports.getWebSocket = getWebSocket;
    exports.getWeekInfo = getWeekInfo;
    exports.globalError = globalError;
    exports.html2str = html2str;
    exports.initNotification = initNotification;
    exports.initWebSocket = initWebSocket;
    exports.insertAfter = insertAfter;
    exports.intersection = intersection;
    exports.isAppleDevice = isAppleDevice;
    exports.isArr = isArr;
    exports.isArrayBuffer = isArrayBuffer;
    exports.isBlob = isBlob;
    exports.isBool = isBool;
    exports.isBrowser = isBrowser;
    exports.isCarCode = isCarCode;
    exports.isChar = isChar;
    exports.isDarkMode = isDarkMode;
    exports.isDate = isDate;
    exports.isDecimal = isDecimal;
    exports.isElement = isElement;
    exports.isEmail = isEmail;
    exports.isFn = isFn;
    exports.isHttp = isHttp;
    exports.isInteger = isInteger;
    exports.isIpAddress = isIpAddress;
    exports.isIpv4 = isIpv4;
    exports.isIpv6 = isIpv6;
    exports.isJSON = isJSON;
    exports.isNaN = isNaN$1;
    exports.isNode = isNode;
    exports.isNull = isNull;
    exports.isNum = isNum;
    exports.isObj = isObj;
    exports.isPhoneNum = isPhoneNum;
    exports.isPromise = isPromise;
    exports.isRhNegative = isRhNegative;
    exports.isStr = isStr;
    exports.isStrongPassWord = isStrongPassWord;
    exports.isUndef = isUndef;
    exports.isUrl = isUrl;
    exports.isWeekday = isWeekday;
    exports.jsonClone = jsonClone;
    exports.localStorageGet = localStorageGet;
    exports.localStorageSet = localStorageSet;
    exports.logRunTime = logRunTime;
    exports.logVar = logVar;
    exports.marquee = marquee;
    exports.maskString = maskString;
    exports.md5 = md5;
    exports.mergeObj = mergeObj;
    exports.ms = ms;
    exports.offDefaultEvent = offDefaultEvent;
    exports.onClick2MoreClick = onClick2MoreClick;
    exports.openFile = openFile;
    exports.openFullscreen = openFullscreen;
    exports.qsParse = qsParse;
    exports.qsStringify = qsStringify;
    exports.removeCookie = removeCookie;
    exports.repeat = repeat;
    exports.retry = retry;
    exports.rip = rip;
    exports.round = round;
    exports.scrollToBottom = scrollToBottom;
    exports.scrollToTop = scrollToTop;
    exports.scrollXTo = scrollXTo;
    exports.scrollYTo = scrollYTo;
    exports.sendNotification = sendNotification;
    exports.sendWsMessage = sendWsMessage;
    exports.sessionStorageGet = sessionStorageGet;
    exports.sessionStorageSet = sessionStorageSet;
    exports.setCookie = setCookie;
    exports.setEventListener = setEventListener;
    exports.setIcon = setIcon;
    exports.setWsBinaryType = setWsBinaryType;
    exports.sha1 = sha1;
    exports.sha256 = sha256;
    exports.showVar = showVar;
    exports.shuffleArray = shuffleArray;
    exports.sleep = sleep;
    exports.slugify = slugify;
    exports.sortBy = sortBy;
    exports.sortCallBack = sortCallBack;
    exports.splitCase = splitCase;
    exports.str2html = str2html;
    exports.str2unicode = str2unicode;
    exports.sub = sub;
    exports.throttle = throttle;
    exports.timeSince = timeSince;
    exports.times = times;
    exports.to = to;
    exports.toBool = toBool;
    exports.toNum = toNum;
    exports.toStr = toStr;
    exports.transferCase = transferCase;
    exports.transferFileToBase64 = transferFileToBase64;
    exports.transferIdCard = transferIdCard;
    exports.transferMoney = transferMoney;
    exports.trim = trim;
    exports.truncate = truncate;
    exports.unicode2str = unicode2str;
    exports.union = union;
    exports.unique = unique;
    exports.uuid = uuid;
    exports.versionUpgrade = versionUpgrade;
    exports.waitUntil = waitUntil;
    exports.xAjax = xAjax;
    exports.xFetch = xFetch;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
