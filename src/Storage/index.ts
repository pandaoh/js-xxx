/*
 * @Author: HxB
 * @Date: 2022-06-04 16:30:04
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-06-16 15:11:26
 * @Description: localStorage 与 sessionStorage
 * @FilePath: \js-xxx\src\Storage\index.ts
 */

import { getType, isValidJSON } from '@/Tools';
import { isDecimal, isInteger } from '@/Number';
// 加密与过期设置参考 https://juejin.cn/post/7104301566857445412
// 可以利用提供的加密方法手动绝对是否加密一些关键数据

/**
 * 获取 localStorage
 * Example: `localStorageGet("key") => 处理过后的 value，不需要再 decode`
 * @param key 存储key
 * @returns
 */
export function localStorageGet(key: string): any {
  let result: any = window.localStorage.getItem(key);
  result = isValidJSON(result) ? JSON.parse(result) : result;
  switch (getType(result)) {
    case 'object':
    case 'array':
      return JSON.parse(result);
    case 'string':
      if (isDecimal(result) || isInteger(result)) {
        return parseFloat(result);
      }
      if (result === 'true' || result === 'false') {
        return result === 'true';
      }
      return result;
    default:
      return result;
  }
}

/**
 * 设置 localStorage
 * Example: `localStorageSet("key", "value") => 存储时不需要处理数据，value === null|undefined 清除数据。`
 * @param key 存储key
 * @param value 存储value，value === null|undefined 清除数据。
 * @returns
 */
export function localStorageSet(key: string, value: any): any {
  let newVal: any;
  switch (getType(value)) {
    case 'null':
    case 'undefined':
      window.localStorage.removeItem(key);
      return;
    case 'object':
    case 'array':
      newVal = JSON.stringify(value);
      break;
    case 'number':
    case 'boolean':
    case 'string':
    default:
      newVal = value;
      break;
  }
  window.localStorage.setItem(key, newVal);
}

/**
 * 获取 sessionStorage
 * Example: `sessionStorageGet("key") => 处理过后的 value，不需要再 decode`
 * @param key 存储key
 * @returns
 */
export function sessionStorageGet(key: string): any {
  let result: any = window.sessionStorage.getItem(key);
  result = isValidJSON(result) ? JSON.parse(result) : result;
  switch (getType(result)) {
    case 'object':
    case 'array':
      return JSON.parse(result);
    case 'string':
      if (isDecimal(result) || isInteger(result)) {
        return parseFloat(result);
      }
      if (result === 'true' || result === 'false') {
        return result === 'true';
      }
      return result;
    default:
      return result;
  }
}

/**
 * 设置 sessionStorage
 * Example: `sessionStorageSet("key", "value") => 存储时不需要处理数据，value === null|undefined 清除数据。`
 * @param key 存储key
 * @param value 存储value，value === null|undefined 清除数据。
 * @returns
 */
export function sessionStorageSet(key: string, value: any): any {
  let newVal: any;
  switch (getType(value)) {
    case 'null':
    case 'undefined':
      window.sessionStorage.removeItem(key);
      return;
    case 'object':
    case 'array':
      newVal = JSON.stringify(value);
      break;
    case 'number':
    case 'boolean':
    case 'string':
    default:
      newVal = value;
      break;
  }
  window.sessionStorage.setItem(key, newVal);
}
