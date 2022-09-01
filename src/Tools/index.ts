/*
 * @Author: HxB
 * @Date: 2022-04-26 14:10:35
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-09-01 17:31:55
 * @Description: 工具方法
 * @FilePath: \js-xxx\src\Tools\index.ts
 */

import { getTimeCode } from '@/Date';
import { arraySet } from '@/Array';

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
  if (!variable && variable != 0) {
    return true; // 检验 undefined 和 null "" 0 NaN "0"
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
 * 获取数组或对象随机数据
 * Example:
 * `getRandVar({ a: 1, b: 3 }) => 1`
 * `getRandomVar([1, 2, 3, 4], 2) => [2, 4]`
 * @param value
 * @param count
 * @returns
 */
export function getRandVar(value: any, count: number = 1): any | any[] {
  const sample = Array.isArray(value) ? JSON.parse(JSON.stringify(value)) : Object.values(value);
  const len = sample.length;

  count = Math.max(Math.min(count, len), 0);

  const last = len - 1;

  const result = [];

  for (let i = 0; i < count; i++) {
    const rand = getRandNum(i, last);
    result.push(sample[rand]);
  }

  return result.length == 1 ? result[0] : result;
}

/**
 * 获取对象/数组最后一个值(对象为 Object.keys 的顺序)
 * Example:
 * `getLastVar([1, 2]) => 2`
 * `getLastVar({a: 2, b: 1}) => b`
 * @param data 源数据
 * @returns
 */
export function getLastVar(data: any): any {
  const isObj = getType(data) == 'object';
  if (!isObj && !Array.isArray(data)) {
    return data;
  }
  if (isObj) {
    const newArr = Object.keys(data);
    return newArr.length ? data[newArr[newArr.length - 1]] : undefined;
  }
  return data.length ? data[data.length - 1] : undefined;
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
    notShowConsole && console.log('js-xxx:globalError', { message, source, lineno, colno, error });
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
 * 获取 bootstrap 颜色
 * Example:
 * `getBSColor('red') => '#dc3545'`
 * `getBSColor('warning') => '#ffc107'`
 * @param key color name
 * @returns
 */
export function getBSColor(key: string): string {
  key = `${key}`.toLowerCase();
  const keyList = [
    'dark',
    'black',
    'light',
    'white',
    'info',
    'cyan',
    'success',
    'green',
    'warning',
    'yellow',
    'danger',
    'red',
    'primary',
    'blue',
    'secondary',
    'grey'
  ];
  key = keyList.includes(key) ? key : 'others';
  const colors: any = {
    dark: '#343a40',
    black: '#343a40',
    light: '#f8f9fa',
    white: '#f8f9fa',
    info: '#17a2b8',
    cyan: '#17a2b8',
    success: '#28a745',
    green: '#28a745',
    warning: '#ffc107',
    yellow: '#ffc107',
    danger: '#dc3545',
    red: '#dc3545',
    primary: '#007bff',
    blue: '#007bff',
    secondary: '#6c757d',
    grey: '#6c757d'
  };
  return colors[key];
}

/**
 * 任意值转换为字符串
 * Example:
 * `toStr({}) => '{}'`
 * `toStr([1, 2]) => '[1,2]'`
 * `toStr(null) => ''`
 * @param value
 * @returns
 */
export function toStr(value: any): string {
  if (value == null) {
    return '';
  }
  if (typeof value == 'object') {
    return JSON.stringify(value);
  }
  return value.toString();
}

/**
 * 任意值转换为数字
 * Example:
 * `toNum({}) => 0`
 * `toNum([2]) => 2`
 * `toNum('-123') => -123`
 * @param value
 * @returns
 */
export function toNum(value: any): string {
  value = Number(value);
  return isNaN(value) ? 0 : value;
}

/**
 * 任意值转换为布尔类型
 * Example:
 * `toBool(1) => true`
 * `toBool('false') => false`
 * `toBool(null) => false`
 * @param value
 * @returns
 */
export function toBool(value: any): boolean {
  if (getType(value) == 'string') {
    value = value.toLowerCase();
    return value !== '' && value !== 'false';
  }
  return !!value;
}

/**
 * 获取 V4 版本 UUID
 * Example: `uuid() => '7b72e264-61fe-426e-b95f-35d4e61c5742'`
 * @returns
 */
export function uuid(): string {
  const tempUrl = URL.createObjectURL(new Blob());
  const uuid = tempUrl.toString();
  URL.revokeObjectURL(tempUrl); // 释放这个 url
  return uuid.substring(uuid.lastIndexOf('/') + 1);
  // 外部
  // const hexBytes = [];
  // for (let i = 0; i < 256; i++) {
  //   hexBytes[i] = (i + 0x100).toString(16).substr(1);
  // }

  // const ret = new Uint8Array(16);
  // for (let i = 0; i < 16; i++) ret[i] = getRandNum(0, 255);

  // const b = ret;

  // b[6] = (b[6] & 0x0f) | 0x40;
  // b[8] = (b[8] & 0x3f) | 0x80;

  // return (
  //   hexBytes[b[0]] +
  //   hexBytes[b[1]] +
  //   hexBytes[b[2]] +
  //   hexBytes[b[3]] +
  //   '-' +
  //   hexBytes[b[4]] +
  //   hexBytes[b[5]] +
  //   '-' +
  //   hexBytes[b[6]] +
  //   hexBytes[b[7]] +
  //   '-' +
  //   hexBytes[b[8]] +
  //   hexBytes[b[9]] +
  //   '-' +
  //   hexBytes[b[10]] +
  //   hexBytes[b[11]] +
  //   hexBytes[b[12]] +
  //   hexBytes[b[13]] +
  //   hexBytes[b[14]] +
  //   hexBytes[b[15]]
  // );
}

/**
 * 获取带前缀的唯一 key
 * Example:
 * `getKey() => 'M2rmCcGpXCa5MTdN4Kks5'`
 * `getKey(2, 'test-') => test-aK'`
 * @param size
 * @param prefix
 * @returns
 */
export function getKey(size: number = 21, prefix: string = ''): string {
  const symbols = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHIJKLNQRTUVWXYZ_cfgijkpqtvxz';

  let id = '';

  const len = symbols.length;

  const ret = new Uint8Array(size);
  for (let i = 0; i < size; i++) ret[i] = getRandNum(0, 255);

  const bytes = ret;
  while (0 < size--) {
    id += symbols[bytes[size] % len];
  }

  return prefix + id;
}

/**
 * 获取任意变量长度
 * Example:
 * `getSize([]) => 0`
 * `getSize({a: 1, b: 2}) => 2`
 * `getSize(null) => 0`
 * @param value
 * @returns
 */
export function getSize(value: any): number {
  if (getType(value) === 'object') {
    return Object.keys(value).length;
  }
  try {
    return value.length ? value.length : 0;
  } catch (e) {
    return 0;
  }
}

/**
 * 在浏览器中打开文件选择框
 * Example: `openFile({ multiple: true, accept: '.txt' }).then(fileList => console.log(fileList));`
 * @param options
 * @returns
 */
export function openFile(options?: { accept?: string; multiple?: boolean }): Promise<any> {
  return new Promise((resolve) => {
    const input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.bottom = '0';
    input.style.left = '0';
    input.style.visibility = 'hidden';
    input.setAttribute('type', 'file');
    if (options?.accept) {
      input.setAttribute('accept', options.accept);
    }
    if (options?.multiple) {
      input.setAttribute('multiple', '');
    }
    document.body.appendChild(input);
    input.addEventListener('change', () => {
      document.body.removeChild(input);
      resolve(input.files);
    });
    input.click();
  });
}

/**
 * 开启全屏
 * Example: `openFullscreen() => 开启全屏`
 * @param element
 * @returns
 */
export function openFullscreen(element: any = document.body) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen();
  }
}

/**
 * 关闭全屏
 * Example: `closeFullscreen() => 关闭全屏`
 * @param
 * @returns
 */
export function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
    // @ts-ignore
  } else if (document.msExitFullscreen) {
    // @ts-ignore
    document.msExitFullscreen();
    // @ts-ignore
  } else if (document.mozCancelFullScreen) {
    // @ts-ignore
    document.mozCancelFullScreen();
    // @ts-ignore
  } else if (document.webkitExitFullscreen) {
    // @ts-ignore
    document.webkitExitFullscreen();
  }
}

/**
 * 获取数组或对象交集
 * Example:
 * `intersection([1, 2, 2, 3, 3], [1, 2, 4, 5]) => [1, 2]`
 * `intersection({a: 1, b: 2}, {a: 1, c: 3, b: 4}) => {a: 1}`
 * @param paramA
 * @param paramB
 * @returns
 */
export function intersection(paramA: any, paramB: any): any {
  const paramAType = getType(paramA);
  if (paramAType != getType(paramB)) return false;
  if (paramAType != 'object' && paramAType != 'array') return false;

  const isObj = paramAType == 'object';
  let result: any = isObj ? {} : [];

  if (isObj) {
    for (let key in paramA) {
      if (paramB[key] && paramA[key] == paramB[key]) {
        result[key] = paramA[key];
      }
    }
  } else {
    for (let key in paramA) {
      if (paramB.includes(paramA[key])) {
        result.push(paramA[key]);
      }
    }
    result = arraySet(result);
  }

  return jsonClone(result);
}

/**
 * 获取数组或对象并集
 * Example:
 * `union([1, 2, 2, 3, 3], [1, 2, 4, 5]) => [1, 2, 3, 4, 5]`
 * `union({a: 1, b: 2}, {a: 1, c: 3, b: 4}) => {a: 1, c: 3, b: 2}`
 * @param paramA
 * @param paramB
 * @returns
 */
export function union(paramA: any, paramB: any): any {
  const paramAType = getType(paramA);
  if (paramAType != getType(paramB)) return false;
  if (paramAType != 'object' && paramAType != 'array') return false;

  if (paramAType == 'object') {
    return jsonClone({
      ...paramB,
      ...paramA // 以前一个为准
    });
  } else {
    return jsonClone(arraySet([...paramA, ...paramB]));
  }
}

/**
 * 获取数组或对象不同值集合
 * Example:
 * `difference([1, 2, 2, 3, 3], [1, 2, 4, 5]) => [3]`
 * `difference({a: 1, b: 2}, {a: 1, c: 3, b: 4}) => {b: 2}`
 * @param paramA
 * @param paramB
 * @returns
 */
export function difference(paramA: any, paramB: any): any {
  const paramAType = getType(paramA);
  if (paramAType != getType(paramB)) return false;
  if (paramAType != 'object' && paramAType != 'array') return false;
  const isObj = paramAType == 'object';
  let result: any = isObj ? {} : [];

  if (isObj) {
    for (let key in paramA) {
      if (paramB[key] != paramA[key]) {
        result[key] = paramA[key]; // 以前一个为准
      }
    }
  } else {
    result = paramA.filter((item: any) => !paramB.includes(item));
    result = arraySet(result);
  }
  return jsonClone(result);
}

/**
 * JSON 转字符串式克隆
 * Example:
 * `jsonClone([1, 2, 2, 3, 3]) => [1, 2, 2, 3, 3]`
 * `jsonClone({a: 1, b: 2}) => {a: 1, b: 2}`
 * @param value
 * @returns
 */
export function jsonClone(value: any): any {
  try {
    return JSON.parse(JSON.stringify(value));
  } catch (e) {
    return value;
  }
}
