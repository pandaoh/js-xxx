/*
 * @Author: HxB
 * @Date: 2022-04-26 11:52:01
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-09-02 13:41:07
 * @Description: 数组常用方法
 * @FilePath: \js-xxx\src\Array\index.ts
 */

import { isStr, toStr } from '@/Types';

/**
 * 数组对象转对象，按照指定的 key 分组。
 * Example:
 * `data2Obj([{a: 1, b: 2}, {a: 3}, {b: 1}, {c: 1}], 'a') => {1: {a: 1, b: 2}, 3: {a: 3}, undefined: {c: 1}}`
 * `data2Obj([{a: 1, b: 'b1'}, {a: 3}, {a: 2, b: 'b2'}], 'a', 'b') => { '1': 'b1', '2': 'b2', '3': undefined }`
 * @param sourceData 源数据
 * @param key 分组的 key
 * @param vKey 值的 key，默认为整个值。
 * @returns
 */
export function data2Obj(sourceData: { [key: string]: any }[], key: string, vKey?: string): { [key: string]: any } {
  let obj: { [key: string]: any } = {};
  if (!Array.isArray(sourceData)) {
    return obj;
  }
  sourceData.forEach(function (item: any) {
    obj[item[key]] = vKey ? item[vKey] : item;
  });
  return obj;
}

/**
 * 数组对象转数组值
 * Example: `data2Arr([{a: 1, b: 2}, {a: 3}, {b: 1}], 'a') => [1, 3]`
 * @param sourceData 源数据
 * @param key 取值的 key
 * @returns
 */
export function data2Arr(sourceData: { [key: string]: any }[], key: string): any[] {
  let arr: any[] = [];
  if (sourceData.length === 0) {
    return arr;
  }
  for (let k in sourceData) {
    sourceData[k]?.[key] && arr.push(sourceData[k][key]);
  }
  return arr;
}

/**
 * 数组去重
 * Example: `arraySet([1, 2, 3, 1, 2, 3]) => [1, 2, 3]`
 * @param arr 数组
 * @returns
 */
export function arraySet(arr: string | Iterable<any> | null | undefined): string | Iterable<any> | null | undefined {
  if (!Array.isArray(arr)) {
    return arr;
  }
  if (arr.length == 1) {
    return arr;
  }
  return [...new Set(arr)];
}

/**
 * 返回排序回调函数(支持中文，不支持一级数据与混合类型。)
 * Example:
 * `sortCallBack('createDt', true) => 按照 createDt 升序排列`
 * `const arr = [{name: '666'}, {name: '333'}]`
 * `arr.sort(sortCallBack('name')) => [{name: '333'}, {name: '666'}]`
 * `arr.sort(sortCallBack('name', false)) => [{name: '666'}, {name: '333'}]`
 * @param key 排序的字段
 */
export function sortCallBack(key: string, isAscend = true): any {
  return (a: any, b: any) => (a[key] > b[key] ? (isAscend ? 1 : -1) : isAscend ? -1 : 1);
}

/**
 * 数组乱序
 * Example: `shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) => [5, 9, 1, 10, 2, 6, 4, 8, 3, 7]`
 * @param arr 数组
 * @returns
 */
export function shuffleArray(arr: any[]) {
  return arr.sort(() => Math.random() - 0.5);
}

/**
 * 数组排序(支持多条件排序+中文)
 * Example:
 * `arraySort(["a", "3", 1, 2, "b"]) => [1, 2, '3', 'a', 'b']`
 * `arraySort(["a", "3", 1, 2, "b"], 'asc') => [1, 2, '3', 'a', 'b']`
 * `arraySort(["a", "3", 1, 2, "b"], false) => ['b', 'a', '3', 2, 1]`
 * `arraySort(["a", "3", 1, 2, "b"], 'desc') => ['b', 'a', '3', 2, 1]`
 * `let arr1 = [{ a: 'a', b: 'b', c: '张三', d: 1 }, { a: 'c', b: 'd', c: '李四', d: 2 }, { a: 'e', b: 'f', c: '王五', d: 3 }];`
 * `arraySort(arr1, false, 'a')` => e - c - a`
 * `arraySort(arr1, false, ['d', 'c'])` => 3 - 2 - 1`
 * `arraySort(arr1, 'DESC', ['c'])` => 张三 - 王五 - 李四`
 * @param arr 数组
 * @param type 类型
 * @param keys 关键字/集合
 * @returns
 */
export function arraySort(
  arr: any[],
  type: 'desc' | 'asc' | 'ASC' | 'DESC' | boolean = 'asc',
  keys?: string | string[]
): any[] {
  const isAscend = type == 'asc' || type == 'ASC' || type == true;
  try {
    if (!keys) {
      return arr.sort((a: any, b: any) =>
        isAscend ? toStr(a).localeCompare(toStr(b)) : toStr(b).localeCompare(toStr(a))
      );
    }
    if (isStr(keys)) {
      return arr.sort((a: any, b: any) => {
        const aSort: string = toStr(a[keys as string]);
        const bSort: string = toStr(b[keys as string]);
        return isAscend ? aSort.localeCompare(bSort) : bSort.localeCompare(aSort);
      });
    }
    return arr.sort((a: any, b: any) => {
      const aSort: string =
        (keys as string[])?.reduce((total, currentValue) => toStr(total).concat(a[currentValue]), '') ?? '0';
      const bSort: string =
        (keys as string[])?.reduce((total, currentValue) => toStr(total).concat(b[currentValue]), '') ?? '0';
      return isAscend ? aSort.localeCompare(bSort) : bSort.localeCompare(aSort);
    });
  } catch (e) {
    return arr;
  }
}

/**
 * 返回排序回调函数(也支持中文、多个字段、混合类型)
 * Example:
 * `['a', '3', 1, 2, 'b'].sort(sortBy('', false)) => ['b', 'a', '3', 2, 1]`
 * `['a', '3', 1, 2, 'b'].sort(sortBy()) => [1, 2, '3', 'a', 'b']`
 * `sortBy('createDt') => 按照 createDt 升序排列`
 * `sortBy(['name', 'age'], false) => 按照 name + age 降序排列`
 * @param keys 排序的字段/集合
 */
export function sortBy(keys?: string | string[], isAscend: boolean = true): any {
  if (!keys) {
    return (a: any, b: any) => {
      return isAscend ? toStr(a).localeCompare(toStr(b)) : toStr(b).localeCompare(toStr(a));
    };
  }
  const transferKeys = isStr(keys) ? [keys] : keys;
  return (a: any, b: any) => {
    const aSort: string =
      (transferKeys as string[])?.reduce((total, currentValue) => toStr(total).concat(a[currentValue]), '') ?? '0';
    const bSort: string =
      (transferKeys as string[])?.reduce((total, currentValue) => toStr(total).concat(b[currentValue]), '') ?? '0';
    return isAscend ? aSort.localeCompare(bSort) : bSort.localeCompare(aSort);
  };
}
