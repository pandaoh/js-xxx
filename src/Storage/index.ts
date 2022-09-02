/*
 * @Author: HxB
 * @Date: 2022-06-04 16:30:04
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-09-02 10:19:28
 * @Description: localStorage 与 sessionStorage
 * @FilePath: \js-xxx\src\Storage\index.ts
 */

import { getType, isJSON } from '@/Types';
import { isDecimal, isInteger } from '@/Number';
// 加密与过期设置参考 https://juejin.cn/post/7104301566857445412
// 可以利用提供的加密方法手动绝对是否加密一些关键数据

function _tempSet(key: string, value: any, storeType: 'L' | 'S'): boolean {
  try {
    let newVal: any;
    let type = getType(value);
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
        newVal = `[X_TYPE_${type}]${value}`;
        break;
    }
    storeType === 'L' ? window.localStorage.setItem(key, newVal) : window.sessionStorage.setItem(key, newVal);
    return true;
  } catch (e) {
    console.log('js-xxx:storageSetError', e);
    return false;
  }
}

function _tempGet(key: string, storeType: 'L' | 'S'): any {
  let result: any = storeType === 'L' ? window.localStorage.getItem(key) : window.sessionStorage.getItem(key);
  result = isJSON(result) ? JSON.parse(result) : result;
  let numberType = '[X_TYPE_number]';
  let stringType = '[X_TYPE_string]';
  let booleanType = '[X_TYPE_boolean]';
  let type = getType(result);
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
 * @param key 存储key
 * @returns
 */
export function localStorageGet(key: string): any {
  return _tempGet(key, 'L');
}

/**
 * 设置 localStorage
 * Example: `localStorageSet("key", "value") => 存储时不需要处理数据，value === null|undefined 清除数据。(boolean)`
 * @param key 存储key
 * @param value 存储value，value === null|undefined 清除数据。
 * @returns
 */
export function localStorageSet(key: string, value: any): boolean {
  return _tempSet(key, value, 'L');
}

/**
 * 获取 sessionStorage
 * Example: `sessionStorageGet("key") => 处理过后的 value，不需要再 decode`
 * @param key 存储key
 * @returns
 */
export function sessionStorageGet(key: string): any {
  return _tempGet(key, 'S');
}

/**
 * 设置 sessionStorage
 * Example: `sessionStorageSet("key", "value") => 存储时不需要处理数据，value === null|undefined 清除数据。`
 * @param key 存储key
 * @param value 存储value，value === null|undefined 清除数据。
 * @returns
 */
export function sessionStorageSet(key: string, value: any): boolean {
  return _tempSet(key, value, 'S');
}
