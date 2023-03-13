/**
 * 获取变量类型
 * Example:
 * `getType(1) => 'number'`
 * `getType(async function(){}) => 'asyncfunction'`
 * @param variable 变量
 * @returns
 */
export declare function getType(variable: any): string;
/**
 * 任意值转换为字符串
 * Example:
 * `toStr({}) => '{}'`
 * `toStr([1, 2]) => '[1,2]'`
 * `toStr(null) => ''`
 * @param value
 * @returns
 */
export declare function toStr(value: any): string;
/**
 * 任意值转换为数字
 * Example:
 * `toNum({}) => 0`
 * `toNum([2]) => 2`
 * `toNum('-123') => -123`
 * @param value
 * @returns
 */
export declare function toNum(value: any): number;
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
export declare function toBool(value: any, falseList?: any[]): boolean;
/**
 * 检查字符串是否为有效的 JSON
 * Example:
 * `isJSON('{"name":"leo", "age":20}') => true`
 * `isJSON('{"name":"leo", age:"20"}') => false`
 * `isJSON(null) => true`
 * @param str 字符串
 * @returns
 */
export declare function isJSON(str: any): boolean;
/**
 * 检查是否为 boolean 类型
 * Example:
 * `isBool(true) => true`
 * `isBool(null) => false`
 * @param value
 * @returns
 */
export declare function isBool(value: any): boolean;
/**
 * 检查是否 date 类型
 * Example:
 * `isDate(new Date()) => true`
 * `isDate(null) => false`
 * @param value
 * @returns
 */
export declare function isDate(value: any): boolean;
/**
 * 检查是否字符串类型
 * Example:
 * `isStr('test') => true`
 * `isStr(null) => false`
 * @param value
 * @returns
 */
export declare function isStr(value: any): boolean;
/**
 * 检查是否 undefined
 * Example:
 * `isUndef(undefined) => true`
 * `isUndef(null) => false`
 * @param value
 * @returns
 */
export declare function isUndef(value: any): boolean;
/**
 * 检查是否 null
 * Example:
 * `isNull(undefined) => false`
 * `isNull(null) => true`
 * @param value
 * @returns
 */
export declare function isNull(value: any): boolean;
/**
 * 检查是否 number 类型
 * Example:
 * `isNum(NaN) => false`
 * `isNum(1) => true`
 * @param value
 * @returns
 */
export declare function isNum(value: any): boolean;
/**
 * 检查是否数组
 * Example:
 * `isArr([]) => true`
 * `isArr({}) => false`
 * @param value
 * @returns
 */
export declare function isArr(value: any): boolean;
/**
 * 检查是否对象
 * Example:
 * `isObj({}) => true`
 * `isObj(null) => false`
 * @param value
 * @returns
 */
export declare function isObj(value: any): boolean;
/**
 * 检查是否为 dom 元素
 * Example:
 * `isElement(document.body) => true`
 * `isElement(document) => false`
 * `isElement({}) => false`
 * @param value
 * @returns
 */
export declare function isElement(value: any): boolean;
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
export declare function isFn(value: any): boolean;
/**
 * 检查是否为 Promise
 * Example:
 * `isPromise(function(){}) => false`
 * `isPromise(async function(){}) => false`
 * `isPromise(new Promise((resolve, reject) => resolve())) => true`
 * @param value
 * @returns
 */
export declare function isPromise(value: any): boolean;
/**
 * 检查是否为 NaN
 * Example:
 * `isNaN(1) => false`
 * `isNaN(NaN) => true`
 * @param value
 * @returns
 */
export declare function isNaN(value: any): boolean;
/**
 * 检查是否为 Blob
 * Example:
 * `isBlob(new Blob()) => true`
 * `isBlob(null) => false`
 * @param value
 * @returns
 */
export declare function isBlob(value: any): boolean;
/**
 * 检查是否为 ArrayBuffer
 * Example:
 * `isArrayBuffer(new ArrayBuffer()) => true`
 * `isArrayBuffer(null) => false`
 * @param value
 * @returns
 */
export declare function isArrayBuffer(value: any): boolean;
//# sourceMappingURL=index.d.ts.map