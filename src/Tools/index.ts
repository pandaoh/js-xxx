/*
 * @Author: HxB
 * @Date: 2022-04-26 14:10:35
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-06-15 10:54:33
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

/**
 * 全局捕获异常
 * Example: `globalError((message, source, lineno, colno, error) => console.log('全局捕获异常'), false) => '全局捕获异常'`
 * @param {Function} fn (message, source, lineno, colno, error)
 * @param {boolean} notShowConsole 是否不回显控制台
 * @returns
 */
export function globalError(fn: Function, notShowConsole: boolean = true) {
  window.onerror = function (message, source, lineno, colno, error) {
    fn.call(this, message, source, lineno, colno, error);
    return notShowConsole; // return true 不在控制台报错
  };
}

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
  return (
    window.matchMedia &&
    (window.matchMedia('(prefers-color-scheme:dark)').matches ||
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
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
 * 单击事件转换为多击事件
 * Author: wuxingheng
 * Example: `onClick2MoreClick(300, clickOneCallBack, clickTwoCallBack, clickThreeCallBack, clickFourCallBack) => void`
 * @param {number} delay
 * @param {Array} events
 * @returns
 */
export function onClick2MoreClick(delay = 300, ...events: Array<Function>): Function {
  let timer: any = null;
  let lastTime = 0;
  let count = 0;
  // click 事件传递的参数 args
  return (...args: any[]) => {
    clearTimeout(timer);
    const currentTime = new Date().getTime();
    count = currentTime - lastTime < delay ? count + 1 : 0;
    lastTime = new Date().getTime();
    events.forEach((event, i) => {
      if (i === count) {
        timer = setTimeout(() => {
          count = 0;
          lastTime = 0;
          event(...args);
        }, delay);
      }
    });
  };
}

/**
 * 获取浏览器信息
 * Example: `getUserAgent() => { browserName: 'Chrome', browserVersion: '102.0.0.0', osName: 'Windows', osVersion: '10.0', deviceName: '' }`
 * @returns
 */
export function getUserAgent(): { browserName: string; browserVersion: string; osName: string; osVersion: string } {
  interface BrowserReg {
    [Chrome: string]: RegExp;
    IE: RegExp;
    Firefox: RegExp;
    Opera: RegExp;
    Safari: RegExp;
    '360': RegExp;
    QQBrowswe: RegExp;
  }

  interface DeviceReg {
    [iPhone: string]: RegExp;
    Android: RegExp;
    iPad: RegExp;
    Windows: RegExp;
    Mac: RegExp;
  }

  let browserReg: BrowserReg = {
    Chrome: /Chrome/,
    IE: /MSIE/,
    Firefox: /Firefox/,
    Opera: /Presto/,
    Safari: /Version\/([\d.]+).*Safari/,
    '360': /360SE/,
    QQBrowswe: /QQ/
  };

  let deviceReg: DeviceReg = {
    iPhone: /iPhone/,
    iPad: /iPad/,
    Android: /Android/,
    Windows: /Windows/,
    Mac: /Macintosh/
  };

  let userAgentStr: string = navigator.userAgent;
  const userAgentObj = {
    browserName: '', // 浏览器名称
    browserVersion: '', // 浏览器版本
    osName: '', // 操作系统名称
    osVersion: '', // 操作系统版本
    deviceName: '' // 设备名称
  };

  for (let key in browserReg) {
    if (browserReg[key].test(userAgentStr)) {
      userAgentObj.browserName = key;
      if (key === 'Chrome') {
        userAgentObj.browserVersion = userAgentStr.split('Chrome/')[1].split(' ')[0];
      } else if (key === 'IE') {
        userAgentObj.browserVersion = userAgentStr.split('MSIE ')[1].split(' ')[1];
      } else if (key === 'Firefox') {
        userAgentObj.browserVersion = userAgentStr.split('Firefox/')[1];
      } else if (key === 'Opera') {
        userAgentObj.browserVersion = userAgentStr.split('Version/')[1];
      } else if (key === 'Safari') {
        userAgentObj.browserVersion = userAgentStr.split('Version/')[1].split(' ')[0];
      } else if (key === '360') {
        userAgentObj.browserVersion = '';
      } else if (key === 'QQBrowswe') {
        userAgentObj.browserVersion = userAgentStr.split('Version/')[1].split(' ')[0];
      }
    }
  }

  for (let key in deviceReg) {
    if (deviceReg[key].test(userAgentStr)) {
      userAgentObj.osName = key;
      if (key === 'Windows') {
        userAgentObj.osVersion = userAgentStr.split('Windows NT ')[1].split(';')[0];
      } else if (key === 'Mac') {
        userAgentObj.osVersion = userAgentStr.split('Mac OS X ')[1].split(')')[0];
      } else if (key === 'iPhone') {
        userAgentObj.osVersion = userAgentStr.split('iPhone OS ')[1].split(' ')[0];
      } else if (key === 'iPad') {
        userAgentObj.osVersion = userAgentStr.split('iPad; CPU OS ')[1].split(' ')[0];
      } else if (key === 'Android') {
        userAgentObj.osVersion = userAgentStr.split('Android ')[1].split(';')[0];
        userAgentObj.deviceName = userAgentStr.split('(Linux; Android ')[1].split('; ')[1].split(' Build')[0];
      }
    }
  }

  return userAgentObj;
}
