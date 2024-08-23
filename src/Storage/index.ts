/*
 * @Author: HxB
 * @Date: 2022-06-04 16:30:04
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-08-23 10:39:50
 * @Description: localStorage 与 sessionStorage
 * @FilePath: \js-xxx\src\Storage\index.ts
 */
import { getType, isJSON } from '@/Types';
import { isDecimal, isInteger } from '@/Number';
import { decrypt, encrypt, md5 } from '@/Crypto';

// 加密与过期设置参考 https://juejin.cn/post/7104301566857445412

function _tempSet(key: string, value: any, storeType: 'L' | 'S'): boolean {
  try {
    let newVal: any;
    const type = getType(value);
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
    console.log('js-xxx:storageSetError--->', e);
    return false;
  }
}

function _tempGet(key: string, storeType: 'L' | 'S'): any {
  let result: any = storeType === 'L' ? window.localStorage.getItem(key) : window.sessionStorage.getItem(key);
  result = isJSON(result) ? JSON.parse(result) : result;
  const numberType = '[X_TYPE_number]';
  const stringType = '[X_TYPE_string]';
  const booleanType = '[X_TYPE_boolean]';
  const type = getType(result);
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
export function localStorageGet(key: string): any {
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
export function localStorageSet(key: string, value: any): boolean {
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
export function sessionStorageGet(key: string): any {
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
export function sessionStorageSet(key: string, value: any): boolean {
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
export function getLocalObj(key: string): any {
  return _tempGet(key, 'L') ?? {};
}

/**
 * 获取 sessionStorage 对象值
 * @example
 * getSessionObj("key"); /// 处理过后的 value，不需要再 decode，且有默认值 {}。
 * @param key 存储 key
 * @returns
 * @category Storage-存储相关
 */
export function getSessionObj(key: string): any {
  return _tempGet(key, 'S') ?? {};
}

/**
 * 获取 localStorage 数组值
 * @example
 * getLocalArr("key"); /// 处理过后的 value，不需要再 decode，且有默认值 []。
 * @param key 存储 key
 * @returns
 * @category Storage-存储相关
 */
export function getLocalArr(key: string): any[] {
  return _tempGet(key, 'L') ?? [];
}

/**
 * 获取 sessionStorage 数组值
 * @example
 * getSessionArr("key"); /// 处理过后的 value，不需要再 decode，且有默认值 []。
 * @param key 存储 key
 * @returns
 * @category Storage-存储相关
 */
export function getSessionArr(key: string): any[] {
  return _tempGet(key, 'S') ?? [];
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
export function getDecodeStorage(key: string, isLocal = true): any {
  const data = _tempGet(md5(key), isLocal ? 'L' : 'S');
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
export function setEncodeStorage(key: string, value: string, isLocal = true): boolean {
  return _tempSet(md5(key), value === null || value === undefined ? value : encrypt(value), isLocal ? 'L' : 'S');
}
