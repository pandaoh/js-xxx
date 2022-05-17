/*
 * @Author: HxB
 * @Date: 2022-04-26 14:10:35
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-05-17 18:06:59
 * @Description: 工具方法
 * @FilePath: \js-xxx\src\Tools\index.ts
 */

import { getTimeCode } from '@/Date';

/**
 * 获取变量类型
 * Example: `getType(1) => 'number'`
 * @param variable 变量
 * @returns
 */
export function getType(variable: any): string {
  return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
}

/**
 * 判断值是否为空
 * Example: `empty('') => true`
 * @param variable 变量
 * @returns
 */
export function empty(variable: any): boolean {
  if (typeof variable === 'boolean') {
    return false; // 此处方法定义布尔型不算空
  }
  if (variable === 'null') {
    return true; // 检验字符串类型的 null
  }
  if (variable === 'undefined') {
    return true; // 检验字符串类型的 undefined
  }
  if (!variable && variable !== 0) {
    return true; // 检验 undefined 和 null "" 0 NaN
  }
  if (Array.isArray(variable) && variable.length === 0) {
    return true; // 检验空数组
  }
  if (Object.prototype.toString.call(variable) === '[object Object]' && Object.keys(variable).length === 0) {
    return true; // 检验空对象，仅判断普通对象，不考虑字符串对象、时间、等等。
  }
  return false;
}

/**
 * 获取对象/数组第一个值
 * Example:
 * `get1Var([1, 2]) => 1`
 * `get1Var({a: 2,b: 1}) => 2`
 * @param data 源数据
 * @returns
 */
export function get1Var(data: any): any {
  if (getType(data) !== 'object' && !Array.isArray(data)) {
    return data;
  }
  for (let key in data) {
    let result = data[key];
    return result;
  }
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
// export function deepClone(data: any): any {
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

/**
 * 获取随机数字
 * Example: `getRandNum(1, 10) => 1~10之间的随机数，闭区间。`
 * @param min 最小值
 * @param max 最大值
 * @returns
 */
export function getRandNum(min: number = 0, max: number = 10): number {
  return Math.floor(min + Math.random() * (max - min + 1));
}

/**
 * 获取随机颜色
 * Example: `getRandColor() => '#xxxxxx'`
 * @returns
 */
export function getRandColor(): string {
  return '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6);
}

/**
 * 获取随机数字字符串
 * Example: `getRandStr(6) => 'xxxxxx'`
 * @param len 长度
 * @returns
 */
export function getRandStr(len: number = 8): string {
  return (Math.random() * Number('1'.padEnd(len + 1, '0'))).toFixed().slice(0, len);
}

/**
 * 获取简单的唯一字符串(时间戳+随机数+进制转换)
 * Example: `getTimeAndStr(5, 36) => 'xxxxxx'`
 * @param len 随机字符的长度
 * @param radix 结果以此进行进制转换
 * @returns
 */
export function getTimeAndStr(len: number = 5, radix: number | undefined = 36): string {
  // Number('xxxx') // 超大 string 转 number 结果不准确 玄学
  return len === 0 ? `${getTimeCode()}` : Number(`${getRandStr(len)}${Date.now()}`).toString(radix); // new Date().getTime()
}

/**
 * 获取简单的 UUID
 * Example: `getUUID() => 'ghijklmn'`
 * @param length 指定位数
 * @param radix 指定字符
 * @returns
 */
export function getUUID(length: number, chars: string | any[]): string {
  chars = chars || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  length = length || 8;
  let result = '';
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

/**
 * 防抖函数
 * Example: `debounce(() => {}, 1000) => 防抖执行`
 * @param fn 执行的方法
 * @param delay 延迟时间
 * @returns
 */
export function debounce(fn: Function, delay = 1000) {
  let timer: any = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      // @ts-ignore
      fn.apply(this, arguments);
    }, delay);
  };
}

/**
 * 节流函数
 * Example: `throttle(() => {}, 1000) => 节流执行`
 * @param fn 执行的方法
 * @param delay 延迟时间
 * @returns
 */
export function throttle(fn: Function, delay = 2000) {
  let canRun = true;
  return function () {
    if (!canRun) return;
    canRun = false;
    // @ts-ignore
    fn.apply(this, arguments);
    setTimeout(function () {
      canRun = true;
    }, delay);
  };
}

/**
 * 全局捕获异常
 * Example: `globalError(() => console.log('全局捕获异常')) => '全局捕获异常'`
 * @param {object} message
 * @param {object} source
 * @param {object} lineno
 * @param {object} colno
 * @param {object} error
 * @returns
 */
export function globalError(fn: Function) {
  window.onerror = function (message, source, lineno, colno, error) {
    fn.call(this, message, source, lineno, colno, error);
    return true; // return true 不在控制台报错
  };
}

/**
 * 检查字符串是否为有效的 JSON
 * Example:
 * `isValidJSON('{"name":"leo", "age":20}'); => true`
 * `isValidJSON('{"name":"leo", age:"20"}'); => false`
 * `isValidJSON(null); => true`
 * @param str 字符串
 * @returns
 */
export function isValidJSON(str: any): boolean {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * 判断当前运行环境是否为 Node.js
 * Example: `isNode() => true`
 * @returns
 */
export function isNode(): boolean {
  return typeof process !== 'undefined' && !!process.versions && !!process.versions.node;
}

/**
 * 判断当前运行环境是否为浏览器
 * Example: `isBrowser() => true`
 * @returns
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * 检测黑暗模式
 * Example: `isDarkMode() => true`
 * @returns
 */
export function isDarkMode(): boolean {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

/**
 * 是否苹果设备
 * Example: `isAppleDevice() => true`
 * @returns
 */
export function isAppleDevice(): boolean {
  return /Mac|iPod|iPhone|iPad/.test(navigator.platform);
}

/**
 * 函数柯里化
 * 是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。
 * Example: `curryIt(function (a, b, c) {return a + b + c})(1)(2)(3) => 6`
 * @param fn
 * @returns
 */
export function curryIt(fn: Function) {
  // 获取预定义函数的参数个数
  let length = fn.length;
  // 声明存放参数的数组
  let args: any[] = [];
  return function (arg: any) {
    args.push(arg);
    length--;
    if (length <= 0) {
      // @ts-ignore
      return fn.apply(this, args);
    } else {
      // callee 属性是一个指针，指向拥有这个 arguments 对象的函数。
      return arguments.callee;
    }
  };
}
