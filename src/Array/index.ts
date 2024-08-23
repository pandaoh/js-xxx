/*
 * @Author: HxB
 * @Date: 2022-04-26 11:52:01
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-08-23 10:44:23
 * @Description: 数组常用函数
 * @FilePath: \js-xxx\src\Array\index.ts
 */
import { isStr, toStr } from '@/Types';

/**
 * 数组对象转对象，按照指定的 key 分组。
 * @example
 * data2Obj([{a: 1, b: 2}, {a: 3}, {b: 1}, {c: 1}], 'a'); /// {1: {a: 1, b: 2}, 3: {a: 3}, undefined: {c: 1}}
 * data2Obj([{a: 1, b: 'b1'}, {a: 3}, {a: 2, b: 'b2'}], 'a', 'b'); /// { '1': 'b1', '2': 'b2', '3': undefined }
 * @param sourceData 源数据
 * @param key 分组的 key
 * @param vKey 值的 key，默认为整个值。
 * @returns
 * @category Array-数组相关
 */
export function data2Obj(sourceData: { [key: string]: any }[], key: string, vKey?: string): { [key: string]: any } {
  const obj: { [key: string]: any } = {};
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
 * @example
 * data2Arr([{a: 1, b: 2}, {a: 3}, {b: 1}], 'a'); /// [1, 3]
 * @param sourceData 源数据
 * @param key 取值的 key
 * @returns
 * @category Array-数组相关
 */
export function data2Arr(sourceData: { [key: string]: any }[], key: string): any[] {
  const arr: any[] = [];
  if (sourceData.length === 0) {
    return arr;
  }
  for (const k in sourceData) {
    sourceData[k]?.[key] && arr.push(sourceData[k][key]);
  }
  return arr;
}

/**
 * 数组对象转换为对象数组，需确保源数据已经去重哦，否则会暴力去重，最后一条数据有效。
 * 一般图表类插件需要此类转换
 * @example
 * const data = [{ id: 1, name: '张三', score: 98, remark: '语文成绩' }, { id: 3, name: '王五', score: 98 }, { id: 3, name: '王五', score: 99, remark: '最后一条有效成绩' }, { id: 2, name: '李四', score: 100 }];
 * arrObj2objArr(data, 'id'); /// {"id": [1, 2, 3], "name": ["张三", "李四", "王五"], "score": [98, 100, 99], "remark": ["语文成绩", null, "最后一条有效成绩"]}
 * @param data 源数据
 * @param key 用于转换的 key
 * @returns
 * @category Array-数组相关
 */
export function arrObj2objArr(data: { [key: string]: any }[], key: string): { [key: string]: any[] } {
  const result: { [key: string]: any[] } = {};
  try {
    let keys: string[] = [];
    data.forEach((item: any) => {
      const itemKeys: string[] = Object.keys(item);
      keys = itemKeys.length > keys.length ? itemKeys : keys;
    });
    unique(data, (a: any, b: any) => a[key] === b[key])
      .sort(sortBy(key))
      .forEach((item: any) => {
        keys.forEach((objKey: string) => {
          if (!result[objKey]) {
            result[objKey] = [];
          }
          result[objKey].push(item[objKey] ?? null);
        });
      });
  } catch (e) {
    console.log('js-xxx:arrObj2objArrError--->', e);
  }
  return result;
}

/**
 * 数组去重
 * @example
 * unique([1, 2, 3, 1, 2, 3]); /// [1, 2, 3]
 * unique([{id: 1, value: 'hello'}, {id: 2, value: 'world'}, {id: 2, value: 'world', others: true}], (a, b) => a.id === b.id); /// [id1, id2 带 true]
 * @param arr 数组
 * @param filter 过滤逻辑
 * @returns
 * @category Array-数组相关
 */
export function unique(arr: any[], filter?: any): any[] {
  if (arr.length == 1) {
    return arr;
  }
  if (!filter) {
    filter = (a: any, b: any) => a === b;
  }
  const len = arr.length;
  return arr.filter((item, idx, arr) => {
    while (++idx < len) {
      if (filter(item, arr[idx])) return false;
    }

    // arr.indexOf(item) === idx;
    return true;
  });
}

/**
 * 返回排序回调函数(支持中文，不支持一级数据与混合类型。)
 * @example
 * sortCallBack('createDt', true); /// 按照 createDt 升序排列
 * const arr = [{name: '666'}, {name: '333'}]
 * arr.sort(sortCallBack('name')); /// [{name: '333'}, {name: '666'}]
 * arr.sort(sortCallBack('name', false)); /// [{name: '666'}, {name: '333'}]
 * @param key 排序的字段
 * @param isAscend 是否升序
 * @returns
 * @category Array-数组相关
 */
export function sortCallBack(key: string, isAscend = true): any {
  return (a: any, b: any) => (a[key] > b[key] ? (isAscend ? 1 : -1) : isAscend ? -1 : 1);
}

/**
 * 数组乱序
 * @example
 * arrayShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); /// [5, 9, 1, 10, 2, 6, 4, 8, 3, 7]
 * @param arr 数组
 * @returns
 * @category Array-数组相关
 */
export function arrayShuffle(arr: any[]): any[] {
  return arr.sort(() => Math.random() - 0.5);
}

/**
 * 数组排序(支持多条件排序+中文)
 * @example
 * arraySort(["a", "3", 1, 2, "b"]); /// [1, 2, '3', 'a', 'b']
 * arraySort(["a", "3", 1, 2, "b"], 'asc'); /// [1, 2, '3', 'a', 'b']
 * arraySort(["a", "3", 1, 2, "b"], false); /// ['b', 'a', '3', 2, 1]
 * arraySort(["a", "3", 1, 2, "b"], 'desc'); /// ['b', 'a', '3', 2, 1]
 * let arr1 = [{ a: 'a', b: 'b', c: '张三', d: 1 }, { a: 'c', b: 'd', c: '李四', d: 2 }, { a: 'e', b: 'f', c: '王五', d: 3 }];
 * arraySort(arr1, false, 'a'); /// e - c - a
 * arraySort(arr1, false, ['d', 'c']); /// 3 - 2 - 1
 * arraySort(arr1, 'DESC', ['c']); /// 张三 - 王五 - 李四
 * @param arr 数组
 * @param type 类型
 * @param keys 关键字/集合
 * @returns
 * @category Array-数组相关
 */
export function arraySort(
  arr: any[],
  type: 'desc' | 'asc' | 'ASC' | 'DESC' | boolean = 'asc',
  keys?: string | string[],
): any[] {
  const isAscend = type == 'asc' || type == 'ASC' || type == true;
  try {
    if (!keys) {
      return arr.sort((a: any, b: any) =>
        isAscend ? toStr(a).localeCompare(toStr(b)) : toStr(b).localeCompare(toStr(a)),
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
 * @example
 * ['a', '3', 1, 2, 'b'].sort(sortBy('', false)); /// ['b', 'a', '3', 2, 1]
 * ['a', '3', 1, 2, 'b'].sort(sortBy()); /// [1, 2, '3', 'a', 'b']
 * sortBy('createDt'); /// 按照 createDt 升序排列
 * sortBy(['name', 'age'], false); /// 按照 name + age 降序排列
 * @param keys 排序的字段/集合
 * @param isAscend 是否升序
 * @returns
 * @category Array-数组相关
 */
export function sortBy(keys?: string | string[], isAscend = true): any {
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

/**
 * 填充数组空值，取前后值得中间数。
 * @example
 * arrayFill([1, undefined, 3, undefined, 4]); /// [1, 2, 3, 3.5, 4]
 * arrayFill([1, undefined, 3, undefined, 4], 0); ///  [1, 2, 3, 4, 4]
 * arrayFill([1, undefined, 3, undefined, 10.55], 2); /// [1, 2, 3, 6.78, 10.55]
 * @param arr 数组
 * @param n 保留小数位
 * @returns
 * @category Array-数组相关
 */
export function arrayFill(arr: any[], n?: number): number[] {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      // 寻找前一个非空值的索引
      let prevIndex = i - 1;
      while (!arr[prevIndex]) {
        prevIndex--;
      }

      // 寻找后一个非空值的索引
      let nextIndex = i + 1;
      while (!arr[nextIndex]) {
        nextIndex++;
      }

      // 计算前后两个非空值的中间值
      const prevValue = arr[prevIndex];
      const nextValue = arr[nextIndex];
      const middleValue = (prevValue + nextValue) / 2;

      result.push(Number(n === undefined ? middleValue : Number(middleValue).toFixed(n)));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}
