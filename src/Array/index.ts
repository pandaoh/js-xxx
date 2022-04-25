/*
 * @Author: HxB
 * @Date: 2022-04-26 11:52:01
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-26 18:04:42
 * @Description: 数组常用方法
 * @FilePath: \js-xxx\src\Array\index.ts
 */

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
 * 排序回调函数
 * Example:
 * `sortCallBack('createDt', true) => 按照 createDt 升序排列`
 * `const arr = [{name: '666'}, {name: '333'}]`
 * `arr.sort(sortCallBack('name')) => [{name: '333'}, {name: '666'}]`
 * `arr.sort(sortCallBack('name', false)) => [{name: '666'}, {name: '333'}]`
 * @param key 排序的字段
 */
export function sortCallBack(key: string, isAscend = true) {
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
