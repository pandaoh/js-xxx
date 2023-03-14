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
export function getType(variable: any): string {
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
 * Example:
 * `toNum({}) => 0`
 * `toNum([2]) => 2`
 * `toNum('-123') => -123`
 * @param value
 * @returns
 */
export function toNum(value: any): number {
  value = Number(value);
  return isNaN(value) ? 0 : value;
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
 * Example:
 * `isJSON('{"name":"leo", "age":20}') => true`
 * `isJSON('{"name":"leo", age:"20"}') => false`
 * `isJSON(null) => true`
 * @param str 字符串
 * @returns
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
 * Example:
 * `isBool(true) => true`
 * `isBool(null) => false`
 * @param value
 * @returns
 */
export function isBool(value: any): boolean {
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
export function isDate(value: any): boolean {
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
export function isStr(value: any): boolean {
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
export function isUndef(value: any): boolean {
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
export function isNull(value: any): boolean {
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
export function isNum(value: any): boolean {
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
export function isArr(value: any): boolean {
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
export function isObj(value: any): boolean {
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
export function isElement(value: any): boolean {
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
export function isFn(value: any): boolean {
  const type = getType(value);
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
export function isPromise(value: any): boolean {
  return getType(value) === 'promise' || (isFn(value?.then) && isFn(value?.catch));
}

/**
 * 检查是否为 NaN
 * Example:
 * `isNaN(1) => false`
 * `isNaN(NaN) => true`
 * @param value
 * @returns
 */
export function isNaN(value: any): boolean {
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
export function isBlob(value: any): boolean {
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
export function isArrayBuffer(value: any): boolean {
  return getType(value) === 'arraybuffer';
}
