/*
 * @Author: HxB
 * @Date: 2022-04-26 15:05:14
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-05-08 17:01:30
 * @Description: 对象相关函数
 * @FilePath: \js-xxx\src\Object\index.ts
 */

import { getKey } from '@/Tools';

/**
 * 获取多级对象值
 * @example
 * getV('默认值', {name: {children: [123, 456]}}, 'name', 'children', '0'); /// 123
 * getV('默认值', {name: {children: [123, 456]}}, 'name.children.0'); /// 123
 * getV('默认值', {name: {children: [123, 456]}}, 'name.children.xxx'); /// 默认值
 * getV('默认值', { name: {children: [123, 456], '[]': ['test']} }, 'name.[].0'); /// 'test'
 * getV('默认值', { name: {children: [123, 456], '[]': ['test']} }, 'name', '[]', 0); /// 'test'
 * @param defaultResult 默认值
 * @param args 需要获取的多级 rest 参数或者独立多级 string
 * @returns
 */
export function getV(defaultResult: any, ...args: any): any {
  if (args?.length == 2 && args[1]?.includes('.')) {
    const [obj, propPath] = args;
    const propKeys = propPath.split('.');

    let value = obj;
    for (const key of propKeys) {
      value = hasKey(value, key) ? value[key] : defaultResult;
    }

    return value ?? defaultResult;
  }
  return args.length >= 2
    ? // eslint-disable-next-line no-prototype-builtins, indent
      args.reduce((a: any, b: any) => (hasKey(a, b) ? a[b] ?? defaultResult : defaultResult))
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

/**
 * every 函数
 * 因为默认的 every 空数组会返回 true
 * @example
 * every([]); /// false
 * every([1, 2, 3], (item) => item > 0); /// true
 * every({}); /// false
 * every(undefined); /// false
 * @param collection 源数据
 * @param callback 回调
 * @returns
 */
export function every(collection: any, callback?: any) {
  if (!collection) {
    return false;
  }

  if (Array.isArray(collection)) {
    if (collection.length === 0) {
      return false;
    }
    return collection.every(callback ?? Boolean);
  }

  if (typeof collection === 'object') {
    const values = Object.values(collection);
    if (values.length === 0) {
      return false;
    }
    return values.every(callback ?? Boolean);
  }

  return false;
}

/**
 * 找到对象数组具有最多 key 的对象，并返回其 key 组成的数组。
 * @example
 * const objects = [
 *  { id: 1, name: 'a', age: 25 },
 *  { id: 2, name: 'b', age: 30, city: '123' },
 *  { id: 3, name: 'c', age: 35, city: '456', profession: 'Engineer' }
 * ];
 *  findMaxKey(objects); /// ['id', 'name', 'age', 'city', 'profession']
 * @param objArray 源数据
 * @returns
 */
export function findMaxKey(objArray: any[]) {
  if (!objArray) {
    return [];
  }

  let maxKeyCount = 0;
  let maxKeyObject = null;

  // 遍历对象数组
  objArray?.forEach(function (obj) {
    const keyCount = Object.keys(obj ?? {}) ?? [];

    // 更新最大 key 数量和对应的对象
    if (keyCount.length > maxKeyCount) {
      maxKeyCount = keyCount.length;
      maxKeyObject = keyCount;
    }
  });

  // 返回最大 key 对象的 key 数组
  if (maxKeyObject) {
    return maxKeyObject;
  } else {
    return [];
  }
}

/**
 * 转化为 Select 数据，至少有 label/value/key 字段。
 * @example
 * arr2select([{ id: 1, name: 'A' }, { id: 2, name: 'B' }], { label: 'name', value: 'id' });
 * /// [{ label: 'A', value: 1, key: 'selectKey-Random1' }, { label: 'B', value: 2, key: 'selectKey-Random2' }]
 * arr2select([{ id: 1, name: 'A' }, { id: 2, name: 'B' }], { value: 'id', key: 'UNDEFINED' });
 * /// [{ label: 1, value: 1, key: 1 }, { label: 2, value: 2, key: 2 }]
 * arr2select([{ data: { id: 1, name: 'A' }, key: 'test1' }, { data: { id: 2, name: 'B' }, key: 'test2' }], { value: 'data.id', key: 'key', label: 'data.name' });
 * /// [{ value: 1, label: "A", key: "test1" }, { value: 2, label: "B", key: "test2" }]
 * @param arr 数组
 * @param options 配置 { label?: 'label', value: 'value', key?: 'key' }
 * @returns
 */
export function arr2select(arr: any[], options: { label?: string; value: string; key?: string }): any[] {
  if (!arr || !arr.length) {
    return [];
  }
  const { label, value, key } = options;
  const selectData: any[] = [];

  for (const item of arr) {
    const selectItem: any = {};

    const valueData = getV(null, item, value);
    selectItem.value = valueData;

    // 设置 label 字段
    if (label) {
      selectItem.label = getV(valueData, item, label);
    } else {
      selectItem.label = valueData;
    }

    // 设置 key 字段
    if (key) {
      selectItem.key = getV(valueData, item, key);
    } else {
      selectItem.key = getKey(5, 'selectKey');
    }

    selectData.push(selectItem);
  }

  return selectData;
}
