/*
 * @Author: HxB
 * @Date: 2022-04-26 14:10:35
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-09-21 13:41:27
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
export function getType(variable: any): string {
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
export function toStr(value: any): string {
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
export function toNum(value: any): number {
  value = Number(value);
  return isNaN(value) ? 0 : value;
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
export function toBool(value: any, falseList: any[] = []): boolean {
  if (['false', 'null', 'undefined', 'NaN', ...falseList].includes(value)) {
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
export function isJSON(str: any): boolean {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
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
export function isBool(value: any): boolean {
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
export function isDate(value: any): boolean {
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
export function isInvalidDate(date: any) {
  return isNaN(new Date(date).getTime());
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
export function isStr(value: any): boolean {
  return getType(value) === 'string';
}

/**
 * 检查是否 undefined
 * 该函数使用 `void 0` 来判断是否为 `undefined`，而不是直接与全局的 `undefined` 变量比较。
 * 使用 `void 0` 的好处是，即使全局的 `undefined` 变量被重新赋值，`void 0` 依然保证返回真正的 undefined 。
 * @example
 * isUndef(undefined); /// true
 * isUndef(null); /// false
 * isUndef(void 0); /// true
 * @param value 值
 * @returns
 * @category Types-类型相关
 */
export function isUndef(value: any): boolean {
  return value === void 0;
  // return getType(value) === 'undefined';
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
export function isNull(value: any): boolean {
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
export function isNum(value: any): boolean {
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
export function isArr(value: any): boolean {
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
export function isObj(value: any): boolean {
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
export function isElement(value: any): boolean {
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
export function isFn(value: any): boolean {
  const type = getType(value);
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
export function isPromise(value: any): boolean {
  return getType(value) === 'promise' || (isFn(value?.then) && isFn(value?.catch));
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
export function isNaN(value: any): boolean {
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
export function isBlob(value: any): boolean {
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
export function isArrayBuffer(value: any): boolean {
  return getType(value) === 'arraybuffer';
}
