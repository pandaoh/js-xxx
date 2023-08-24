/*
 * @Author: HxB
 * @Date: 2022-04-26 15:05:14
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-08-24 15:39:00
 * @Description: 对象相关函数
 * @FilePath: \js-xxx\src\Object\index.ts
 */

/**
 * 获取多级对象值
 * @example
 * getV('默认值', {name: {children: [123, 456]}}, 'name', 'children', '0'); /// 123
 * @param defaultResult 默认值
 * @param args 需要获取的多级 rest 参数
 * @returns
 */
export function getV(defaultResult: any, ...args: any): any {
  return args.length >= 2
    ? // eslint-disable-next-line no-prototype-builtins, indent
      args.reduce((a: any, b: any) => (hasKey(a, b) ? a[b] : defaultResult))
    : defaultResult;
}

/**
 * 对象/数组包含某个 key/index 或者属性
 * @example
 * hasKey({ a: 1 }, 'a'); /// true
 * hasKey([0, 1], '0'); /// true
 * hasKey([0, 1], 2); /// false
 * hasKey({ a: 1 }, 'b'); /// false
 * const a = { a: 1 };
 * a.__proto__.x = 1;
 * hasKey(a, 'x'); /// true;
 * @param data 对象
 * @param key 需要判断的 key
 * @returns
 */
export function hasKey(data: any, key: string): boolean {
  if (!data) {
    return false;
  }
  try {
    // eslint-disable-next-line no-prototype-builtins
    if (data[key] !== undefined || data?.hasOwnProperty(key)) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
}

/**
 * 深拷贝
 * @link https://juejin.cn/post/7075351322014253064
 * @example
 * deepClone({a: 1, b: {c: 2}}); /// 新的 {a: 1, b: {c: 2}}
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

  //   // JSON.parse(JSON.stringify(data))
  //   if (getType(data) !== 'object' || !Array.isArray(data)) {
  //     return data;
  //   }
  //   let result: any = Array.isArray(data) ? [] : {};
  //   for (let i in data) {
  //     result[i] = deepClone(data[i]);
  //   }
  //   return result;
}
