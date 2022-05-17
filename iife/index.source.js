var xxx = (function (exports) {
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
    function arraySet(arr) {
        if (!Array.isArray(arr)) {
            return arr;
        }
        if (arr.length == 1) {
            return arr;
        }
        return __spreadArray([], __read(new Set(arr)), false);
    }
    function sortCallBack(key, isAscend) {
        if (isAscend === void 0) { isAscend = true; }
        return function (a, b) { return (a[key] > b[key] ? (isAscend ? 1 : -1) : isAscend ? -1 : 1); };
    }
    function shuffleArray(arr) {
        return arr.sort(function () { return Math.random() - 0.5; });
    }

    function getCookie(key) {
        var arr, reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
        arr === document.cookie.match(reg) ? unescape(arr[2]) : null;
    }
    function setCookie(key, value, expires) {
        expires = expires || 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + expires * 24 * 60 * 60 * 1000);
        document.cookie = key + '=' + escape(value) + ';expires=' + exp.toUTCString() + ';path=/';
    }
    function removeCookie(key) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cVal = getCookie(key);
        if (cVal !== null) {
            document.cookie = key + '=' + cVal + ';expires=' + exp.toUTCString() + ';path=/';
        }
    }

    function formatDate(date, fmt, weeks) {
        if (fmt === void 0) { fmt = 'yyyy-mm-dd hh:ii:ss'; }
        if (weeks === void 0) { weeks = [7, 1, 2, 3, 4, 5, 6]; }
        var o = {
            'm+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'i+': date.getMinutes(),
            's+': date.getSeconds(),
            Q: Math.floor((date.getMonth() + 3) / 3),
            S: "".concat(date.getMilliseconds()).padStart(3, '0'),
            W: weeks[date.getDay()]
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, "".concat(date.getFullYear()).substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) {
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : "00".concat(o[k]).substr("".concat(o[k]).length));
            }
        }
        return fmt;
    }
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
    function timeSince(date, longago, formater) {
        if (longago === void 0) { longago = false; }
        if (formater === void 0) { formater = 'yyyy-mm-dd hh:ii:ss'; }
        if (!date) {
            return;
        }
        date.replace(/-/g, '/');
        var dateTS = new Date(date).getTime();
        var seconds = Math.floor((new Date().getTime() - dateTS) / 1000);
        var interval = Math.floor(seconds / (24 * 3600));
        if (longago) {
            interval = Math.floor(seconds / (30 * 24 * 3600));
            if (interval >= 4) {
                return formatDate(new Date(dateTS), formater);
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
            return formatDate(new Date(dateTS), formater);
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
    function isWeekday(date) {
        return date.getDay() % 6 !== 0;
    }
    function getMonthDays(date) {
        var curDate = new Date(date);
        var curMonth = curDate.getMonth();
        curDate.setMonth(curMonth + 1);
        curDate.setDate(0);
        return curDate.getDate();
    }

    function str2html(str) {
        var div = document.createElement('div');
        div.textContent = str;
        var specialChars = div.innerHTML;
        return specialChars;
    }
    function html2str(value) {
        var div = document.createElement('div');
        div.innerHTML = value;
        var str = div.textContent;
        return str;
    }
    function insertAfter(newElement, targetElement) {
        var parent = targetElement.parentNode;
        if (parent.lastElementChild === targetElement) {
            parent.appendChild(newElement);
        }
        else {
            parent.insertBefore(newElement, targetElement.nextElementSibling);
        }
    }
    function offDefaultEvent(event) {
        var e = event || window.event;
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        return false;
    }
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
        console.log(info);
        return Msg;
    }
    function scrollTo(element, to) {
        if (to === void 0) { to = 'start'; }
        element.scrollIntoView({ behavior: 'smooth', block: to });
    }
    function findParents(element, n) {
        while (element && n) {
            element = element.parentElement ? element.parentElement : element.parentNode;
            n--;
        }
        return element;
    }
    function findChildren(element) {
        var children = element.childNodes, result = [], len = children.length;
        for (var i = 0; i < len; i++) {
            if (children[i].nodeType === 1) {
                result.push(children[i]);
            }
        }
        return result;
    }
    function getViewportSize() {
        if (window.innerWidth) {
            return {
                w: window.innerWidth,
                h: window.innerHeight
            };
        }
        else {
            if (document.compatMode === 'BackCompat') {
                return {
                    w: document.body.clientWidth,
                    h: document.body.clientHeight
                };
            }
            else {
                return {
                    w: document.documentElement.clientWidth,
                    h: document.documentElement.clientHeight
                };
            }
        }
    }
    function getStyleByName(element, name) {
        return window.getComputedStyle ? window.getComputedStyle(element, null)[name] : element.currentStyle[name];
    }

    function getType(variable) {
        return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
    }
    function empty(variable) {
        if (typeof variable === 'boolean') {
            return false;
        }
        if (variable === 'null') {
            return true;
        }
        if (variable === 'undefined') {
            return true;
        }
        if (!variable && variable !== 0) {
            return true;
        }
        if (Array.isArray(variable) && variable.length === 0) {
            return true;
        }
        if (Object.prototype.toString.call(variable) === '[object Object]' && Object.keys(variable).length === 0) {
            return true;
        }
        return false;
    }
    function get1Var(data) {
        if (getType(data) !== 'object' && !Array.isArray(data)) {
            return data;
        }
        for (var key in data) {
            var result = data[key];
            return result;
        }
    }
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
    function getRandNum(min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 10; }
        return Math.floor(min + Math.random() * (max - min + 1));
    }
    function getRandColor() {
        return '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6);
    }
    function getRandStr(len) {
        if (len === void 0) { len = 8; }
        return (Math.random() * Number('1'.padEnd(len + 1, '0'))).toFixed().slice(0, len);
    }
    function getTimeAndStr(len, radix) {
        if (len === void 0) { len = 5; }
        if (radix === void 0) { radix = 36; }
        return len === 0 ? "".concat(getTimeCode()) : Number("".concat(getRandStr(len)).concat(Date.now())).toString(radix);
    }
    function getUUID(length, chars) {
        chars = chars || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        length = length || 8;
        var result = '';
        for (var i = length; i > 0; --i)
            result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }
    function debounce(fn, delay) {
        if (delay === void 0) { delay = 1000; }
        var timer = null;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(this, arguments);
            }, delay);
        };
    }
    function throttle(fn, delay) {
        if (delay === void 0) { delay = 2000; }
        var canRun = true;
        return function () {
            if (!canRun)
                return;
            canRun = false;
            fn.apply(this, arguments);
            setTimeout(function () {
                canRun = true;
            }, delay);
        };
    }
    function globalError(fn) {
        window.onerror = function (message, source, lineno, colno, error) {
            fn.call(this, message, source, lineno, colno, error);
            return true;
        };
    }
    function isValidJSON(str) {
        try {
            JSON.parse(str);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    function isNode() {
        return typeof process !== 'undefined' && !!process.versions && !!process.versions.node;
    }
    function isBrowser() {
        return typeof window !== 'undefined' && typeof document !== 'undefined';
    }
    function isDarkMode() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    function isAppleDevice() {
        return /Mac|iPod|iPhone|iPad/.test(navigator.platform);
    }
    function curryIt(fn) {
        var length = fn.length;
        var args = [];
        return function (arg) {
            args.push(arg);
            length--;
            if (length <= 0) {
                return fn.apply(this, args);
            }
            else {
                return arguments.callee;
            }
        };
    }

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
                formData.append(key, getType(obj[key]) == 'object' ? JSON.stringify(obj[key]) : obj[key]);
            }
        });
        return formData;
    }
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
                queryString.append(key, getType(obj[key]) == 'object' ? JSON.stringify(obj[key]) : obj[key]);
            }
        });
        return queryString;
    }

    function div(div1, div2) {
        var div1FloatLen = 0, div2FloatLen = 0, tempDiv1 = div1.toString(), tempDiv2 = div2.toString();
        try {
            div1FloatLen = tempDiv1.split('.')[1].length;
        }
        catch (e) { }
        try {
            div2FloatLen = tempDiv2.split('.')[1].length;
        }
        catch (e) { }
        return ((Number(tempDiv1.replace('.', '')) / Number(tempDiv2.replace('.', ''))) * Math.pow(10, div2FloatLen - div1FloatLen));
    }
    function times(mul1, mul2) {
        var mulFloatLen = 0, tempMul1 = mul1.toString(), tempMul2 = mul2.toString();
        try {
            mulFloatLen += tempMul1.split('.')[1].length;
        }
        catch (e) { }
        try {
            mulFloatLen += tempMul2.split('.')[1].length;
        }
        catch (e) { }
        return (Number(tempMul1.replace('.', '')) * Number(tempMul2.replace('.', ''))) / Math.pow(10, mulFloatLen);
    }
    function add(add1, add2) {
        var add1FloatLen = 0, add2FloatLen = 0, multiple = 1;
        try {
            add1FloatLen = add1.toString().split('.')[1].length;
        }
        catch (e) { }
        try {
            add2FloatLen = add2.toString().split('.')[1].length;
        }
        catch (e) { }
        multiple = Math.pow(10, Math.max(add1FloatLen, add2FloatLen));
        return (add1 * multiple + add2 * multiple) / multiple;
    }
    function sub(sub1, sub2) {
        var sub1FloatLen = 0, sub2FloatLen = 0, multiple = 1;
        try {
            sub1FloatLen = sub1.toString().split('.')[1].length;
        }
        catch (e) { }
        try {
            sub2FloatLen = sub2.toString().split('.')[1].length;
        }
        catch (e) { }
        multiple = Math.pow(10, Math.max(sub1FloatLen, sub2FloatLen));
        return parseFloat("".concat((sub1 * multiple - sub2 * multiple) / multiple));
    }

    function round(number, d) {
        var tempNum = number + '';
        d = !d ? 0 : d;
        if (d == 0) {
            return Math.round(number);
        }
        if (tempNum.indexOf('.') === -1) {
            tempNum += '.';
        }
        tempNum += new Array(d + 1).join('0');
        if (new RegExp('^(-|\\+)?(\\d+(\\.\\d{0,' + (d + 1) + '})?)\\d*$').test(tempNum)) {
            var tempStr = '0' + RegExp.$2, pm = RegExp.$1, a = RegExp.$3.length, flag = true;
            if (a == d + 1 + 1) {
                a = tempStr.match(/\d/g);
                var aLen = a.length;
                if (parseInt(a[aLen - 1]) > 4) {
                    for (var i = aLen - 2; i >= 0; i--) {
                        a[i] = parseInt(a[i]) + 1;
                        if (a[i] == 10) {
                            a[i] = 0;
                            flag = i != 1;
                        }
                        else
                            break;
                    }
                }
                tempStr = a.join('').replace(new RegExp('(\\d+)(\\d{' + d + '})\\d$'), '$1.$2');
            }
            if (flag) {
                tempStr = tempStr.substr(1);
            }
            return parseFloat((pm + tempStr).replace(/\.$/, ''));
        }
    }

    function getV(defaultResult) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return args.length >= 2
            ? args.reduce(function (a, b) { return (a && a.hasOwnProperty(b) ? a[b] : defaultResult); })
            : defaultResult;
    }
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
                if (newObj[oldKey] === undefined) {
                    delete oldObj[oldKey];
                }
            }
        }
        return oldObj;
    }

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
    function copyToClipboard(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
        }
    }

    function sleep(milliseconds) {
        return new Promise(function (resolve) { return setTimeout(resolve, milliseconds); });
    }
    function to(promise, res, rej) {
        return promise
            .then(function (data) {
            res && res(data);
            return data;
        })
            .catch(function (err) {
            rej && rej(err);
            console.log(err);
        });
    }
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
                            if (!(count > 0)) return [3, 2];
                            return [4, sleep(delay)];
                        case 1:
                            _a.sent();
                            --count;
                            resolve(retry(promise, count, count * delay));
                            return [3, 3];
                        case 2:
                            reject('重试结束');
                            _a.label = 3;
                        case 3: return [2];
                    }
                });
            }); });
        });
    }
    function all(promises, errorHandler) {
        return Promise.all(promises).catch(function (e) { return errorHandler && errorHandler(e); });
    }
    function any(promises, errorHandler) {
        return Promise.any(promises).catch(function (e) { return errorHandler && errorHandler(e); });
    }
    function catchPromise(promiseHandler, errorHandler) {
        return new Promise(promiseHandler).catch(function (e) { return errorHandler && errorHandler(e); });
    }

    function qsStringify(obj, options) {
        if (!obj) {
            return '';
        }
        var queryString = new URLSearchParams();
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
    function qsParse(url, key) {
        var pathname = url !== null && url !== void 0 ? url : window.location.pathname;
        url = url !== null && url !== void 0 ? url : window.location.search;
        var filename = pathname.substring(pathname.lastIndexOf('/') + 1);
        var paramMap = {
            '/': filename !== null && filename !== void 0 ? filename : undefined
        };
        var querystring = url.indexOf('?') === 0 ? url.substring(1) : url;
        if (querystring.length !== 0) {
            var parts = querystring.split('&');
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
    function getBaseURL(url) {
        return url.replace(/[?#].*$/, '');
    }

    function unicode2str(value) {
        return escape(value).toLocaleLowerCase().replace(/%u/gi, '\\u');
    }
    function str2unicode(value) {
        return unescape(value.replace(/\\u/gi, '%u'));
    }
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
                return (str = str.replace(/(^\s*)|(\s*$)|\s(?=\s)/g, ''));
            default:
                return str;
        }
    }
    function base64Encode(str, replaceChar) {
        if (replaceChar === void 0) { replaceChar = false; }
        var result = Buffer.from(str, 'utf-8').toString('base64');
        return replaceChar ? result.replace(/\+\//g, '-_').replace(/=/g, '') : result;
    }
    function base64Decode(str) {
        return Buffer.from(str, 'base64').toString('utf8');
    }

    exports.add = add;
    exports.all = all;
    exports.any = any;
    exports.arraySet = arraySet;
    exports.base64Decode = base64Decode;
    exports.base64Encode = base64Encode;
    exports.catchPromise = catchPromise;
    exports.copyContent = copyContent;
    exports.copyToClipboard = copyToClipboard;
    exports.curryIt = curryIt;
    exports.data2Arr = data2Arr;
    exports.data2Obj = data2Obj;
    exports.debounce = debounce;
    exports.deepClone = deepClone;
    exports.div = div;
    exports.empty = empty;
    exports.findChildren = findChildren;
    exports.findParents = findParents;
    exports.formatBytes = formatBytes;
    exports.formatDate = formatDate;
    exports.formatFormData = formatFormData;
    exports.formatURLSearchParams = formatURLSearchParams;
    exports.get1Var = get1Var;
    exports.getBaseURL = getBaseURL;
    exports.getCookie = getCookie;
    exports.getMonthDays = getMonthDays;
    exports.getRandColor = getRandColor;
    exports.getRandNum = getRandNum;
    exports.getRandStr = getRandStr;
    exports.getStyleByName = getStyleByName;
    exports.getTimeAndStr = getTimeAndStr;
    exports.getTimeCode = getTimeCode;
    exports.getType = getType;
    exports.getUUID = getUUID;
    exports.getV = getV;
    exports.getViewportSize = getViewportSize;
    exports.globalError = globalError;
    exports.html2str = html2str;
    exports.insertAfter = insertAfter;
    exports.isAppleDevice = isAppleDevice;
    exports.isBrowser = isBrowser;
    exports.isDarkMode = isDarkMode;
    exports.isNode = isNode;
    exports.isValidJSON = isValidJSON;
    exports.isWeekday = isWeekday;
    exports.mergeObj = mergeObj;
    exports.offDefaultEvent = offDefaultEvent;
    exports.qsParse = qsParse;
    exports.qsStringify = qsStringify;
    exports.removeCookie = removeCookie;
    exports.retry = retry;
    exports.round = round;
    exports.scrollTo = scrollTo;
    exports.setCookie = setCookie;
    exports.setIcon = setIcon;
    exports.shuffleArray = shuffleArray;
    exports.sleep = sleep;
    exports.sortCallBack = sortCallBack;
    exports.str2html = str2html;
    exports.str2unicode = str2unicode;
    exports.sub = sub;
    exports.throttle = throttle;
    exports.timeSince = timeSince;
    exports.times = times;
    exports.to = to;
    exports.trim = trim;
    exports.unicode2str = unicode2str;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
