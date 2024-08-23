/**
 * 获取变量类型
 * @example
 * getType(1); /// 'number'
 * getType(async function(){}); /// 'asyncfunction'
 * @param variable 变量
 * @returns
 * @category Types-类型相关
 */
export declare function getType(variable: any): string;
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
export declare function toStr(value: any): string;
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
export declare function toNum(value: any): number;
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
export declare function toBool(value: any, falseList?: any[]): boolean;
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
export declare function isJSON(str: any): boolean;
/**
 * 检查是否为 boolean 类型
 * @example
 * isBool(true); /// true
 * isBool(null); /// false
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
export declare function isBool(value: any): boolean;
/**
 * 检查是否 date 类型
 * @example
 * isDate(new Date()); /// true
 * isDate(null); /// false
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
export declare function isDate(value: any): boolean;
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
export declare function isInvalidDate(date: any): boolean;
/**
 * 检查是否字符串类型
 * @example
 * isStr('test'); /// true
 * isStr(null); /// false
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
export declare function isStr(value: any): boolean;
/**
 * 检查是否 undefined
 * @example
 * isUndef(undefined); /// true
 * isUndef(null); /// false
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
export declare function isUndef(value: any): boolean;
/**
 * 检查是否 null
 * @example
 * isNull(undefined); /// false
 * isNull(null); /// true
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
export declare function isNull(value: any): boolean;
/**
 * 检查是否 number 类型
 * @example
 * isNum(NaN); /// false
 * isNum(1); /// true
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
export declare function isNum(value: any): boolean;
/**
 * 检查是否数组
 * @example
 * isArr([]); /// true
 * isArr({}); /// false
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
export declare function isArr(value: any): boolean;
/**
 * 检查是否对象
 * @example
 * isObj({}); /// true
 * isObj(null); /// false
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
export declare function isObj(value: any): boolean;
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
export declare function isElement(value: any): boolean;
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
export declare function isFn(value: any): boolean;
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
export declare function isPromise(value: any): boolean;
/**
 * 检查是否为 NaN
 * @example
 * isNaN(1); /// false
 * isNaN(NaN); /// true
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
export declare function isNaN(value: any): boolean;
/**
 * 检查是否为 Blob
 * @example
 * isBlob(new Blob()); /// true
 * isBlob(null); /// false
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
export declare function isBlob(value: any): boolean;
/**
 * 检查是否为 ArrayBuffer
 * @example
 * isArrayBuffer(new ArrayBuffer()); /// true
 * isArrayBuffer(null); /// false
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
export declare function isArrayBuffer(value: any): boolean;
//# sourceMappingURL=index.d.ts.map