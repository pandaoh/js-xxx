/*
 * @Author: HxB
 * @Date: 2022-04-26 15:05:14
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-03-13 15:42:13
 * @Description: 对象相关方法
 * @FilePath: \js-xxx\src\Object\index.ts
 */
import { getType } from '@/Types';

/**
 * 获取多级对象值
 * Example: `getV('默认值', {name: {children: [123, 456]}}, 'name', 'children', '0') => 123`
 * @param defaultResult 默认值
 * @param args 需要获取的多级 rest 参数
 * @returns
 */
export function getV(defaultResult: any, ...args: any): any {
  return args.length >= 2
    ? // eslint-disable-next-line no-prototype-builtins, indent
      args.reduce((a: any, b: any) => (a && a.hasOwnProperty(b) ? a[b] : defaultResult))
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
export function getVar(data: any, keys: string, defaultResult?: any): any {
  if (keys == undefined) {
    return defaultResult;
  }
  // 不要使用 replace(/\[(\w+)\]/g, '.$1') 去替换，哪怕加个前后 \. 的正则也无法兼容所有情况，应该交给使用者去考虑，因为确实有 [] 做 key 的情况。
  const args = `${keys}`?.split('.');
  return args && args?.length
    ? // eslint-disable-next-line no-prototype-builtins, indent
      args.reduce((a: any, b: any) => (a && a.hasOwnProperty(b) ? a[b] : defaultResult), data)
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
export function mergeObj(
  oldObj: { [key: string]: any },
  newObj: { [key: string]: any },
  keys?: string | string[],
  noOld = false
): { [key: string]: any } {
  for (const newKey in newObj) {
    if (getType(newObj[newKey]) === 'object' && getType(oldObj[newKey] === 'object')) {
      oldObj[newKey] = mergeObj(oldObj[newKey], newObj[newKey], keys);
    } else if (Object.keys(oldObj).includes(newKey) && !keys?.includes(newKey)) {
      // 已存在的属性未指定时不覆盖
    } else {
      oldObj[newKey] = newObj[newKey];
    }
  }
  if (noOld) {
    for (const oldKey in oldObj) {
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
export function deepClone(data: any, hash = new WeakMap()): any {
  if (hash.has(data)) {
    return data;
  }
  let result: any = null;

  const reference = [Date, RegExp, Set, WeakSet, Map, WeakMap, Error];

  if (reference.includes(data?.constructor)) {
    result = new data.constructor(data);
  } else if (Array.isArray(data)) {
    result = [];
    data.forEach((item, i) => {
      result[i] = deepClone(item);
    });
  } else if (typeof data === 'object' && data !== null) {
    hash.set(data, 'exist');
    result = {};
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        result[key] = deepClone(data[key], hash);
      }
    }
  } else {
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
