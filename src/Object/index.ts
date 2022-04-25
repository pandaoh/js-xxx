/*
 * @Author: HxB
 * @Date: 2022-04-26 15:05:14
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-26 18:06:56
 * @Description: 对象相关方法
 * @FilePath: \js-xxx\src\Object\index.ts
 */
import { getType } from '@/Tools';

/**
 * 获取多级对象值
 * Example: `getV('', {name: {children: 123}}, 'name', 'children') => 123`
 * @param defaultResult 默认值
 * @param args 需要获取的多级 rest 参数
 * @returns
 */
export function getV(defaultResult: any, ...args: any): any {
  return args.length >= 2
    ? args.reduce((a: any, b: any) => (a && a.hasOwnProperty(b) ? a[b] : defaultResult))
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
  noOld: boolean = false
): { [key: string]: any } {
  for (let newKey in newObj) {
    if (getType(newObj[newKey]) === 'object' && getType(oldObj[newKey] === 'object')) {
      oldObj[newKey] = mergeObj(oldObj[newKey], newObj[newKey], keys);
    } else if (Object.keys(oldObj).includes(newKey) && !keys?.includes(newKey)) {
      // 已存在的属性未指定时不覆盖
    } else {
      oldObj[newKey] = newObj[newKey];
    }
  }
  if (noOld) {
    for (let oldKey in oldObj) {
      // 新对象上没有的属性删掉
      if (newObj[oldKey] === undefined) {
        delete oldObj[oldKey];
      }
    }
  }
  return oldObj;
}
