/* eslint-disable max-lines */
/*
 * @Author: HxB
 * @Date: 2022-04-26 14:10:35
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-08-22 14:29:26
 * @Description: 工具函数
 * @FilePath: \js-xxx\src\Tools\index.ts
 */
import { arraySet, arraySort } from '@/Array';
import {
  ANIMALS,
  BASE_CHAR_LOW,
  BASE_CHAR_UP,
  BASE_NUMBER,
  CONSTELLATION,
  ID_CARD_PROVINCE,
  MAN,
  MONTHS,
  WEEKS,
  WOMAN,
} from '@/Data';
import { getType, isArr, isObj, isPromise, isStr, toBool, toNum } from '@/Types';

/**
 * 获取 16 位可读时间戳
 * @example
 * getTimeCode(); // '2036551026042022'
 * @returns
 */
export function getTimeCode(): string {
  const dateObj = new Date();
  return `${(Math.random() * 100).toFixed().padEnd(2, '0')}${dateObj.getSeconds().toString().padStart(2, '0')}${dateObj
    .getMinutes()
    .toString()
    .padStart(2, '0')}${dateObj.getHours().toString().padStart(2, '0')}${dateObj
    .getDate()
    .toString()
    .padStart(2, '0')}${String(dateObj.getMonth() + 1).padStart(2, '0')}${dateObj.getFullYear()}`;
}

/**
 * 判断值是否为空
 * @example
 * empty(''); // true
 * empty(null); // true
 * empty('null'); // true
 * empty('undefined'); // true
 * empty(undefined); // true
 * empty(0); // false
 * empty('0'); // false
 * empty(NaN); // true
 * empty('NaN'); // true
 * empty({}); // true
 * empty([]); // true
 * @param variable 变量
 * @returns
 */
export function empty(variable: any): boolean {
  if (typeof variable === 'boolean') {
    return false; // 此处函数定义布尔型不算空
  }
  if (variable === 'null') {
    return true; // 检验字符串类型的 null
  }
  if (variable === 'undefined') {
    return true; // 检验字符串类型的 undefined
  }
  if (variable === 'NaN') {
    return true; // 检验字符串类型的 NaN
  }
  if (!variable && variable !== 0 && variable !== '0') {
    return true; // 检验 undefined 和 null "" NaN
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
 * @example
 * get1Var([1, 2]); // 1
 * get1Var({a: 2,b: 1}); // 2
 * @param data 源数据
 * @returns
 */
export function get1Var(data: any): any {
  if (getType(data) !== 'object' && !Array.isArray(data)) {
    return data;
  }
  for (const key in data) {
    const result = data[key];
    return result;
  }
}

/**
 * 获取数组或对象随机数据
 * @example
 * getRandVar({ a: 1, b: 3 }); // 1
 * getRandomVar([1, 2, 3, 4], 2); // [2, 4]
 * @param value
 * @param count
 * @returns
 */
export function getRandVar(value: any, count = 1): any | any[] {
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
 * @example
 * getLastVar([1, 2]); // 2
 * getLastVar({a: 2, b: 1}); // b
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
 * 防抖函数-最后一次有效（抢购）
 * @example
 * debounce(() => {}, 1000); // 防抖执行
 * @param fn 执行的函数
 * @param delay 延迟时间
 * @returns
 */
export function debounce(fn: any, delay = 1000) {
  let timer: any = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      // @ts-ignore
      // eslint-disable-next-line prefer-rest-params
      fn.apply(this, arguments);
    }, delay);
  };
}

/**
 * 节流函数-第一次有效（游戏开枪间隔）
 * @example
 * throttle(() => {}, 1000); // 节流执行
 * @param fn 执行的函数
 * @param delay 延迟时间
 * @returns
 */
export function throttle(fn: any, delay = 2000) {
  let canRun = true;
  return function () {
    if (!canRun) return;
    canRun = false;
    // @ts-ignore
    // eslint-disable-next-line prefer-rest-params
    fn.apply(this, arguments);
    setTimeout(function () {
      canRun = true;
    }, delay);
  };
}

/**
 * 函数柯里化
 * 是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。
 * @example
 * curryIt(function (a, b, c) {return a + b + c})(1)(2)(3); // 6
 * @param fn
 * @returns
 */
export function curryIt(fn: any) {
  // 获取预定义函数的参数个数
  let length = fn.length;
  // 声明存放参数的数组
  const args: any[] = [];
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
 * @example
 * globalError((message, source, lineNo, colNo, error) => console.log('全局捕获异常'), false); // '全局捕获异常'
 * @param {any} fn (message, source, lineNo, colNo, error)
 * @param {boolean} notShowConsole 是否不回显控制台
 * @returns
 */
export function globalError(fn: any, notShowConsole = true) {
  window.onerror = function (message, source, lineNo, colNo, error) {
    notShowConsole && console.log('js-xxx:globalError--->', { message, source, lineNo, colNo, error });
    fn.call(this, message, source, lineNo, colNo, error);
    return notShowConsole; // return true 不在控制台报错
  };
}

/**
 * 获取随机数字
 * @example
 * getRandNum(1, 10); // 1~10 之间的随机数，闭区间。
 * @param min 最小值
 * @param max 最大值
 * @returns
 */
export function getRandNum(min = 0, max = 10): number {
  return Math.floor(min + Math.random() * (max - min + 1));
}

/**
 * 获取随机颜色
 * @example
 * getRandColor(); // '#xxxxxx'
 * @returns
 */
export function getRandColor(): string {
  return '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6);
}

/**
 * 获取随机数字字符串
 * @example
 * getRandStr(6); // 'xxxxxx'
 * @param len 长度
 * @returns
 */
export function getRandStr(len = 8): string {
  return (Math.random() * Number('1'.padEnd(len + 1, '0'))).toFixed().slice(0, len);
}

/**
 * 获取简单的唯一字符串(时间戳+随机数+进制转换)
 * @example
 * getTimeAndStr(5, 36); // 'xxxxxx'
 * @param len 随机字符的长度
 * @param radix 结果以此进行进制转换
 * @returns
 */
export function getTimeAndStr(len = 5, radix: number | undefined = 36): string {
  // Number('xxx'); // 超大 string 转 number 结果不准确 玄学
  return len === 0 ? `${getTimeCode()}` : Number(`${getRandStr(len)}${Date.now()}`).toString(radix); // new Date().getTime()
}

// eslint-disable-next-line spellcheck/spell-checker
/**
 * 获取简单的 UUID
 * @example
 * getUUID(); // 'ghijklmn'
 * @param length 指定位数
 * @param chars 指定字符
 * @returns
 */
export function getUUID(length: number, chars: string | any[]): string {
  chars = chars || `${BASE_NUMBER}${BASE_CHAR_LOW}${BASE_CHAR_UP}`;
  length = length || 8;
  let result = '';
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

// eslint-disable-next-line spellcheck/spell-checker
/**
 * 获取 bootstrap 颜色
 * @example
 * getBSColor(); // '#6c757d'
 * getBSColor('red'); // '#dc3545'
 * getBSColor('warning'); // '#ffc107'
 * @param key color name
 * @returns
 */
export function getBSColor(key = 'default'): string {
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
    'default',
    'grey',
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
    default: '#6c757d',
    grey: '#6c757d',
  };
  return colors[key];
}

/**
 * 获取 V4 版本 UUID
 * @example
 * uuid(); // '7b72e264-61fe-426e-b95f-35d4e61c5742'
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
  //   hexBytes[i] = (i + 0x100).toString(16).substring(1);
  // }

  // eslint-disable-next-line spellcheck/spell-checker
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
 * @example
 * getKey(); // 'M2rmCcGpXCa5MTdN4Kks5'
 * getKey(2, 'test-'); // test-aK'
 * @param size
 * @param prefix
 * @returns
 */
export function getKey(size = 21, prefix = ''): string {
  // 外部
  // eslint-disable-next-line spellcheck/spell-checker
  const symbols = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHIJKLNQRTUVWXYZ_cfgijkpqtvxz';

  let id = '';

  const len = symbols.length;

  // eslint-disable-next-line spellcheck/spell-checker
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
 * @example
 * getSize([]); // 0
 * getSize({a: 1, b: 2}); // 2
 * getSize(null); // 0
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
 * @example
 * openFile({ multiple: true, accept: '.txt' }).then(fileList => console.log(fileList));
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
 * @example
 * openFullscreen(); // 开启全屏
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
 * @example
 * closeFullscreen(); // 关闭全屏
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
 * @example
 * intersection([1, 2, 2, 3, 3], [1, 2, 4, 5]); // [1, 2]
 * intersection({a: 1, b: 2}, {a: 1, c: 3, b: 4}); // {a: 1}
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
    for (const key in paramA) {
      if (paramB[key] && paramA[key] == paramB[key]) {
        result[key] = paramA[key];
      }
    }
  } else {
    for (const key in paramA) {
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
 * @example
 * union([1, 2, 2, 3, 3], [1, 2, 4, 5]); // [1, 2, 3, 4, 5]
 * union({a: 1, b: 2}, {a: 1, c: 3, b: 4}); // {a: 1, c: 3, b: 2}
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
      ...paramA, // 以前一个为准
    });
  } else {
    return jsonClone(arraySet([...paramA, ...paramB]));
  }
}

/**
 * 获取数组或对象不同值集合
 * @example
 * difference([1, 2, 2, 3, 3], [1, 2, 4, 5]); // [3]
 * difference({a: 1, b: 2}, {a: 1, c: 3, b: 4}); // {b: 2}
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
    for (const key in paramA) {
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
 * @example
 * jsonClone([1, 2, 2, 3, 3]); // [1, 2, 2, 3, 3]
 * jsonClone({a: 1, b: 2}); // {a: 1, b: 2}
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

/**
 * 打印某个函数运行时间
 * @example
 * logRunTime(() => [1, 2, 3].reduce(...));
 * logRunTime(() => [1, 2, 3].reduce(...), 'timeKey');
 * logRunTime(async () => { await fun1(); await fun2(); });
 * logRunTime($promiseReturnFunction);
 * logRunTime(new Promise((resolve, reject) => { setTimeout(() => resolve('test'), 1000) }));
 * @param fn
 * @param timeKey
 * @returns
 */
export function logRunTime(fn: any, timeKey: string): void {
  timeKey = timeKey ?? getKey(5, 'log-run-time-');
  const type = getType(fn);
  if (type == 'asyncfunction' || isPromise(fn) || isPromise(fn?.())) {
    if (type == 'promise') {
      console.time(timeKey);
      fn.then(() => console.timeEnd(timeKey)).catch((e: any) => {
        console.log({ e });
        console.timeEnd(timeKey);
      });
    } else {
      console.time(timeKey);
      fn()
        .then(() => console.timeEnd(timeKey))
        .catch((e: any) => {
          console.log({ e });
          console.timeEnd(timeKey);
        });
    }
  } else {
    console.time(timeKey);
    fn?.();
    console.timeEnd(timeKey);
  }
}

/**
 * 打印日志工具类
 * @example
 * const {log, warning, success, danger, dark, primary, info} = Logger();
 * log(1, new Date, 'test', [1, 2, 3], {log});
 * @returns
 */
export function Logger(): {
  log: (...args: any[]) => void;
  info: (...args: any[]) => void;
  success: (...args: any[]) => void;
  warning: (...args: any[]) => void;
  danger: (...args: any[]) => void;
  primary: (...args: any[]) => void;
  dark: (...args: any[]) => void;
  [key: string]: (...args: any[]) => void;
  // eslint-disable-next-line indent
} {
  function _logger(
    value: any,
    type: 'warning' | 'info' | 'danger' | 'primary' | 'success' | 'default' | 'dark' = 'default',
  ): void {
    console.log('\n%c----------> ', `color:${getBSColor(type)}`, value, '\n');
  }
  interface LogFn {
    (...args: any[]): void;
  }
  // @ts-ignore
  const result: {
    log: LogFn;
    info: LogFn;
    success: LogFn;
    warning: LogFn;
    danger: LogFn;
    primary: LogFn;
    dark: LogFn;
    [key: string]: LogFn;
  } = {};
  ['warning', 'info', 'danger', 'primary', 'success', 'dark', 'log'].forEach((type: string) => {
    // @ts-ignore
    result[type] = (...args: any[]) => {
      const printType = type == 'log' ? 'default' : type;
      args.forEach((val) => {
        // @ts-ignore
        _logger(val, printType);
      });
    };
  });
  return result;
}

/**
 * 在页面上显示某个值
 * @example
 * showVar([1, 2, 2, 3, 3]); // 显示序列化之后的数据
 * showVar({a: 1, b: 2}); // 显示序列化之后的数据
 * @param value
 * @returns
 */
export function showVar(value: any): any {
  try {
    alert(JSON.stringify(value, null, 2) ?? 'undefined');
  } catch (e) {
    console.log('js-xxx:showVarError--->', value);
  }
}

/**
 * 检测某个数组是否包含某个值
 * @example
 * contains([1, 2, 2, 3, 3], 3); // true
 * contains([1, 2, 2, 3, 3], '3'); // false
 * contains(['test1', 'test2'],'test'); // false
 * contains([{a: 1, b: 2}, {a: 2, b: 3}], {a: 2, b: 3}); // true
 * contains([{a: 1, b: 2}, {a: 2, b: 3}], {b: 3, a: 2}); // true
 * contains([[1, 2], [3, 4]], [4, 3]); // true
 * contains([[1, 2], [3, 4]], [3, 4]); // true
 * contains([[1, 2], [3, 4]], [1, 3]); // false
 * @param value
 * @param target
 * @returns
 */
export function contains(value: any[], target: any): boolean {
  try {
    const _isComplex = isArr(target) || isObj(target);
    if (_isComplex) {
      const temp = value.map((item) => JSON.stringify(getSortVar(item)));
      return temp.includes(JSON.stringify(getSortVar(target)));
    } else {
      const temp = value.map((item) => JSON.stringify(item));
      return temp.includes(JSON.stringify(target));
    }
  } catch (e) {
    return false;
  }
}

/**
 * 两个数值是否有相同的值（交集）
 * @example
 * same(['admin','manager','user','viewer','guest'], ['admin','user']); // true
 * same(['admin','manager','user','viewer','guest'], 'admin'); // true
 * same('admin', ['admin','user']); // true
 * same('admin', 'admin'); // true
 * same('admin', 'admins'); // false
 * same('admins', 'admin'); // false
 * @param valueA
 * @param valueB
 * @returns
 */
export function same(valueA: any[] | string, valueB: any[] | string): boolean {
  try {
    if (!Array.isArray(valueA)) {
      valueA = [valueA];
    }
    if (!Array.isArray(valueB)) {
      valueB = [valueB];
    }
    return valueA.some((value) => valueB.includes(value));
  } catch (e) {
    return false;
  }
}

/**
 * 获取排序转换后的数组或对象（仅支持单层简单结构）
 * @example
 * getSortVar({ b: 3, a: 2 }); // { a: 2, b: 3 }
 * getSortVar({ a: 2, b: 3 }); // { a: 2, b: 3 }
 * getSortVar([1, 3, 2]); // [1, 2, 3]
 * @param value
 * @returns
 */
export function getSortVar(value: any): any {
  try {
    if (Array.isArray(value)) {
      value = arraySort(value);
    } else {
      const _temp: any = {};
      arraySort(Object.keys(value)).forEach((key: string) => {
        _temp[key] = value[key];
      });
      value = _temp;
    }
    return value;
  } catch (e) {
    return value;
  }
}

/**
 * 反转数组或者字符串
 * @example
 * inversion([1, 2, 3]); // [3, 2, 1]
 * inversion('123'); // '321'
 * inversion(); // undefined
 * inversion(true); // true
 * @param value
 * @returns
 */
export function inversion(value: any): any {
  try {
    if (Array.isArray(value)) {
      return value.reverse();
    } else {
      return value?.split('')?.reverse()?.join('') ?? value;
    }
  } catch (e) {
    return value;
  }
}

/**
 * 直到某个函数返回 toBool(true) 的结果(执行完成)
 * @example
 * let a = 5;
 * setTimeout(() => (a = 10), 5000);
 * waitUntil(() => a === 10).then(() => { console.log(a) });
 * @param condition
 * @param timeout
 * @param interval
 * @returns
 */
export function waitUntil(condition: any, timeout = 0, interval = 250): Promise<any> {
  function evalCondition() {
    return new Promise((resolve, reject) => {
      try {
        resolve(condition());
      } catch (e) {
        reject(e);
      }
    });
  }

  return new Promise((resolve, reject) => {
    const startTime = new Date().getTime();
    const pollCondition = () => {
      evalCondition().then((val) => {
        const elapsed = new Date().getTime() - startTime;
        if (toBool(val)) {
          resolve(val);
        } else if (timeout && elapsed >= timeout) {
          reject(Error(`Wait timed out after ${timeout} ms`));
        } else {
          setTimeout(pollCondition, interval);
        }
      }, reject);
    };
    pollCondition();
  });
}

/**
 * 毫秒转换
 * @example
 * ms('1s'); // 1000
 * ms('1m'); // 60000
 * ms('1.5h'); // 5400000
 * ms('1d'); // 86400000
 * ms('1y'); // 31557600000
 * ms('1000'); // 1000
 * ms(1500); // '1.5s'
 * ms(60000); // '1m'
 * @param str
 * @returns
 */
export function ms(str: any): string | number {
  // 外部
  const factor: any = {
    ms: 1,
    s: 1000,
  };
  factor.m = factor.s * 60;
  factor.h = factor.m * 60;
  factor.d = factor.h * 24;
  factor.y = factor.d * 365.25;
  const suffixList = ['y', 'd', 'h', 'm', 's'];
  const regStrTime = /^((?:\d+)?\.?\d+) *(s|m|h|d|y)?$/;
  if (isStr(str)) {
    const match = str.match(regStrTime);

    if (!match) return 0;

    return toNum(match[1]) * factor[match[2] || 'ms'];
  }
  const num = str;
  let suffix = 'ms';

  for (let i = 0, len = suffixList.length; i < len; i++) {
    if (num >= factor[suffixList[i]]) {
      suffix = suffixList[i];
      break;
    }
  }

  return +(num / factor[suffix]).toFixed(2) + suffix;
}

/**
 * 文件流或内容转 Base64
 * @example
 * transferFileToBase64(file, 'application/pdf;charset=utf-8', (res) => console.log({ res })); // result object
 * transferFileToBase64('test', 'text/plain', (res) => console.log({ res })); // result object
 * @param content BlobPart | any
 * @param contentType
 * @param callBack
 * @returns
 */
export function transferFileToBase64(content: any, contentType: string, callBack: any): void {
  const blob = new Blob([content], {
    type: contentType,
  });
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.addEventListener('loadend', () => {
    callBack?.({
      result: reader?.result,
      // // @ts-ignore
      // baseCode: Buffer?.from(reader?.result?.split('base64,')[1], 'base64')
    });
  });
}

/**
 * 检查是否为 idCard string 身份证
 * 支持 15 、 18 位
 * @example
 * checkIdCard('350424870506202'); // true
 * checkIdCard('003424870506202'); // false
 * checkIdCard('415106199801012130'); // true
 * checkIdCard('123123123123123222'); // false
 * @param value
 * @returns
 */
export function checkIdCard(value: string): boolean {
  const regIdCard15 = /^[1-9]d{5}d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)d{2}$/;
  const regIdCard18 =
    /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;

  return regIdCard15.test(value) || regIdCard18.test(value);
}

/**
 * 获取年龄
 * @example
 * getAge('1998-9-28'); // 24
 * getAge('1998-6-8', '2023-7'); // 25
 * getAge('2023'); // -1
 * @param birthday
 * @param targetDate
 * @returns
 */
export function getAge(birthday: any, targetDate?: any): number {
  return new Date(new Date(targetDate ?? Date.now()).getTime() - new Date(birthday).getTime()).getFullYear() - 1970;
}

/**
 * 获取生肖
 * @example
 * getAnimal('1998'); // '虎'
 * getAnimal('1998-6-8'); // '虎'
 * getAnimal('2023'); // '兔'
 * @param date
 * @returns
 */
export function getAnimal(date: any): string {
  return ANIMALS[new Date(date).getFullYear() % 12];
}

/**
 * 身份证解析
 * @example
 * transferIdCard('350424870506202');
 * // {"age":35,"year":"1987","idCard":"350424870506202","sex":"女","constellation":{"cn":"金牛","en":"Taurus","date":"4.20-5.20"},"gender":0,"province":"福建","animal":"兔","birthday":"1987-05-06"}
 * transferIdCard('415106199801012130');
 * // {"age":24,"year":"1998","idCard":"415106199801012130","sex":"男","constellation":{"cn":"魔羯","en":"Capricorn","date":"12.22-1.19"},"gender":1,"province":"河南","animal":"虎","birthday":"1998-01-01"}
 * transferIdCard('xxxxx'); // {}
 * @param idCard
 * @returns
 */
export function transferIdCard(idCard: string): any {
  if (!checkIdCard(idCard)) {
    return {};
  }
  const is18 = idCard.length === 18;
  // 新中国成立年份-2049
  const year = is18
    ? idCard.substring(6, 10)
    : `${parseInt(idCard.charAt(6)) <= 4 ? '20' : '19'}${idCard.substring(6, 8)}`;
  const province = ID_CARD_PROVINCE[idCard.substring(0, 2)];
  const sex = parseInt(is18 ? idCard.charAt(16) : idCard.charAt(14)) % 2 === 1 ? '男' : '女';
  const animal = getAnimal(year);
  const birthday = `${year}-${is18 ? idCard.substring(10, 12) : idCard.substring(8, 10)}-${
    is18 ? idCard.substring(12, 14) : idCard.substring(10, 12)
  }`;
  const age = getAge(birthday);
  const constellation = getConstellation(birthday);
  return {
    age,
    year,
    idCard,
    sex,
    constellation,
    gender: sex === '男' ? MAN : WOMAN,
    province,
    animal,
    birthday,
  };
}

/**
 * 金额转中文
 * @example
 * transferMoney(900); // '玖佰元整'
 * transferMoney(852.5); // '捌佰伍拾贰元伍角'
 * @param n
 * @returns
 */
export function transferMoney(n: number): string {
  const fraction = ['角', '分'];
  const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  const unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟'],
  ];
  const head = n < 0 ? '欠' : '';
  n = Math.abs(n);
  let s = '';
  const fraLen = fraction.length;
  for (let i = 0; i < fraLen; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }
  s = s || '整';
  n = Math.floor(n);
  for (let i = 0; i < unit[0].length && n > 0; i++) {
    let p = '';
    for (let j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return (
    head +
    s
      .replace(/(零.)*零元/, '元')
      .replace(/(零.)+/g, '零')
      .replace(/^整$/, '零元整')
  );
}

/**
 * 格式化金额，展示位银行金额格式。
 * @example
 * formatMoney(90000); // '90,000.00'
 * formatMoney(852.1314, 2); // '852.13'
 * @param longData
 * @param length
 * @returns
 */
export function formatMoney(longData: string | number, length: number) {
  length = length > 0 && length <= 20 ? length : 2;
  longData = parseFloat((longData + '').replace(/[^\d\.-]/g, '')).toFixed(length) + '';
  const l = longData.split('.')[0].split('').reverse(),
    r = longData.split('.')[1];
  let t = '';
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? ',' : '');
  }
  return t.split('').reverse().join('') + '.' + r;
}

/**
 * TTS 语音，可以在现代浏览器直接运行。
 * @example
 * const mySpeaker = Speaker();
 * mySpeaker.setText('你好，这是一条测试语音！hello'); mySpeaker.speak();
 * @param text 内容
 * @param lang 语言
 * @param volume 音量 [0, 1]
 * @param pitch 音高 [0, 2]
 * @param rate 速度 [0.1, 10]
 * @returns
 */
export function Speaker(text: string, lang = 'zh-CN', volume = 1, pitch = 1, rate = 1) {
  const speaker: SpeechSynthesisUtterance = new window.SpeechSynthesisUtterance(text);
  speaker.text = text;
  speaker.lang = lang;
  speaker.volume = volume;
  speaker.pitch = pitch;
  speaker.rate = rate;

  return {
    getInstance: () => {
      return speaker;
    },
    setText: (txt: string) => {
      speaker.text = txt;
    },
    setLang: (lang: string) => {
      speaker.lang = lang;
    },
    setVolume: (volume: number) => {
      speaker.volume = volume;
    },
    setPitch: (pitch: number) => {
      speaker.pitch = pitch;
    },
    setRate: (rate: number) => {
      speaker.rate = rate;
    },
    setVoice: (voice: any) => {
      speaker.voice = voice;
    },
    getVoices: () => {
      return window.speechSynthesis.getVoices();
    },
    speak: () => {
      window.speechSynthesis.speak(speaker);
    },
    stop: () => {
      window.speechSynthesis.cancel();
    },
  };
}

/**
 * 页面灰白屏幕
 * @example
 * rip(); // 页面灰白
 * @returns
 */
export function rip(): void {
  const html: any = document.querySelector('html');
  // html.style['-webkit-filter'] = 'grayscale(1)';
  html.style['filter'] = 'grayscale(1)';
}

// eslint-disable-next-line spellcheck/spell-checker
/**
 * 获取星座
 * @example
 * getConstellation('11-24'); // { cn: '射手', en: 'Sagittarius', date: '11.23-12.21' }
 * getConstellation('xxx'); // {cn: '未知', en: 'unknown', date: 'xxx'}
 * getConstellation(new Date('2022-11-24')); // { cn: '射手', en: 'Sagittarius', date: '11.23-12.21' }
 * @param date
 * @returns
 */
export function getConstellation(date: any): { cn: string; en: string; date: any } {
  const defaultV = {
    cn: '未知',
    en: 'unknown',
    date: date,
  };
  if (!date) {
    return defaultV;
  }
  try {
    date = new Date(date);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let star = 'defaultV';
    switch (month) {
      case 3:
        if (day >= 21) {
          star = 'Aries';
        } else {
          star = 'Pisces';
        }
        break;
      case 4:
        if (day >= 21) {
          star = 'Taurus';
        } else {
          star = 'Aries';
        }
        break;
      case 5:
        if (day >= 22) {
          star = 'Gemini';
        } else {
          star = 'Taurus';
        }
        break;
      case 6:
        if (day >= 22) {
          star = 'Cancer';
        } else {
          star = 'Gemini';
        }
        break;
      case 7:
        if (day >= 23) {
          star = 'Leo';
        } else {
          star = 'Cancer';
        }
        break;
      case 8:
        if (day >= 23) {
          star = 'Virgo';
        } else {
          star = 'Leo';
        }
        break;
      case 9:
        if (day >= 24) {
          star = 'Libra';
        } else {
          star = 'Virgo';
        }
        break;
      case 10:
        if (day >= 24) {
          star = 'Scorpio';
        } else {
          star = 'Libra';
        }
        break;
      case 11:
        if (day >= 23) {
          star = 'Sagittarius';
        } else {
          star = 'Scorpio';
        }
        break;
      case 12:
        if (day >= 22) {
          star = 'Capricorn';
        } else {
          star = 'Sagittarius';
        }
        break;
      case 1:
        if (day >= 21) {
          star = 'Aquarius';
        } else {
          star = 'Capricorn';
        }
        break;
      case 2:
        if (day >= 20) {
          star = 'Pisces';
        } else {
          star = 'Aquarius';
        }
        break;
    }
    return CONSTELLATION[star] ?? defaultV;
  } catch (e) {
    return defaultV;
  }
}

/**
 * 设置监听函数
 * 返回取消该监听的函数 return cancel
 * @example
 * setEventListener('resize', () => { console.log('resize'); }); // cancel 当前 listener 的 function
 * @param eventKey
 * @param foo
 * @param once 是否只触发一次
 * @param dom document.querySelector<HTMLDivElement>('.xxx')
 * @returns
 */
export function setEventListener(eventKey: string, foo: any, once = false, dom: any = window): any {
  dom.addEventListener(eventKey, foo, {
    // After configuring once, it will be called at most once
    once: once,
  });
  return () => {
    dom.removeEventListener(eventKey, foo);
  };
}

/**
 * H5 软键盘缩回/弹起回调
 * return cancel listener of H5Resize
 * @example
 * H5Resize(()=>{ console.log('downCb'); }, ()=>{ console.log('upCb'); }); // do something
 * @param downCb
 * @param upCb
 * @returns
 */
export function H5Resize(downCb: any, upCb: any): any {
  // 当软件键盘弹起会改变当前 window.innerHeight
  // 监听这个值变化 [downCb 缩回的回调、 upCb 弹起的回调]
  const clientHeight = window.innerHeight;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  downCb = typeof downCb === 'function' ? downCb : function () {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  upCb = typeof upCb === 'function' ? upCb : function () {};
  const H5ResizeFoo = () => {
    const height = window.innerHeight;
    if (height === clientHeight) {
      downCb();
    }
    if (height < clientHeight) {
      upCb();
    }
  };
  return setEventListener('resize', H5ResizeFoo);
}

/**
 * 禁用控制台
 * windows
 * 防君子不防小人
 * 监听页面大小变化没必要
 * 监听编辑 dom 事件 reload 也算了
 * @example
 * banConsole(); // 返回取消禁用的 function
 * @returns
 */
export function banConsole(): any {
  document.body.setAttribute('style', 'user-select: none;' + document.body.style ?? '');
  const cancelContextMenu = setEventListener('contextmenu', function (e: any) {
    return e.preventDefault();
  });
  const cancelKeyDown = setEventListener('keydown', function (e: any) {
    if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
      return e.preventDefault();
    }
  });
  return () => {
    cancelContextMenu();
    cancelKeyDown();
  };
}

/**
 * 获取星期信息
 * @example
 * getWeekInfo(); // WEEKS_INFO
 * getWeekInfo('0'); // WEEKS_INFO
 * getWeekInfo('ALL'); // WEEKS_INFO
 * getWeekInfo('all'); // WEEKS_INFO
 * getWeekInfo('unknown'); // WEEKS_INFO
 * getWeekInfo(1); // 星期一相关信息
 * getWeekInfo(8); // WEEKS_INFO
 * @param n
 * @returns
 */
export function getWeekInfo(n: string | number):
  | {
      key: string;
      name: string;
      abbr: string;
      id: number;
      others: string;
    }
  | {
      key: string;
      name: string;
      abbr: string;
      id: number;
      others: string;
    }[] {
  if (n === 'all' || n === 'ALL') {
    return WEEKS;
  }
  // @ts-ignore
  if (!n || !Number.isInteger(n) || n < 1 || n > 7) {
    return WEEKS;
  }
  return WEEKS[Number(n) - 1] ?? WEEKS;
}

/**
 * 获取月份信息
 * @example
 * getMonthInfo(); // MONTH_INFO
 * getMonthInfo('0'); // MONTH_INFO
 * getMonthInfo('ALL'); // MONTH_INFO
 * getMonthInfo('all'); // MONTH_INFO
 * getMonthInfo('unknown'); // MONTH_INFO
 * getMonthInfo(1); // 一月相关信息
 * getMonthInfo(13); // MONTH_INFO
 * @param n
 * @returns
 */
export function getMonthInfo(n: string | number):
  | {
      key: string;
      name: string;
      abbr: string;
      id: number;
      others: string;
    }
  | {
      key: string;
      name: string;
      abbr: string;
      id: number;
      others: string;
    }[] {
  if (n === 'all' || n === 'ALL') {
    return MONTHS;
  }
  // @ts-ignore
  if (!n || !Number.isInteger(n) || n < 1 || n > 12) {
    return MONTHS;
  }
  return MONTHS[Number(n) - 1] ?? MONTHS;
}

/**
 * 判断两个值是否相等
 * @example
 * isEqual([1, 2, 3], [1, 2, 3]); // true
 * isEqual({a: 1, b: 2}, {a: 1, b: 2}); // true
 * isEqual({}, {}); // true
 * isEqual(1, 1); // true
 * isEqual(1, '1'); // false
 * @param obj1
 * @param obj2
 * @returns
 */
export function isEqual(obj1: any, obj2: any): boolean {
  // 判断类型是否相同
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  // 判断是对象还是数组
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    // 如果是数组，比较每一个元素是否相等。
    if (obj1.length !== obj2.length) {
      return false;
    }
    for (let i = 0; i < obj1.length; i++) {
      if (!isEqual(obj1[i], obj2[i])) {
        return false;
      }
    }
    return true;
  } else if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    // 如果是对象，比较每一个属性是否相等。
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      // eslint-disable-next-line no-prototype-builtins
      if (!obj2.hasOwnProperty(key)) {
        return false;
      }
      if (!isEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  } else {
    // 其他类型直接比较值是否相等
    return obj1 === obj2;
  }
}

/**
 * 遍历数组或对象，并对每个元素执行回调函数，支持中途 break 和 continue 。
 * @example
 * forEach([1, 2, 3], (item, index) => console.log(item, index));
 * forEach([1, 2, 3], (item, index) => item * 2, true); // [2, 4, 6]
 * forEach({a: 1, b: 2}, (value, key) => console.log(value, key));
 * forEach({a: 1, b: 2}, (value, key) => value * 2, true); // {a: 2, b: 4}
 * @param data 要遍历的数据，可以是数组或对象。
 * @param callback 回调函数
 * @param hasReturn 是否返回一个新值
 * @returns
 */
export function forEach(data: any, callback: (value: any, ik: any) => any | '_break' | '_continue', hasReturn = false) {
  const type: string = Object.prototype.toString.call(data);
  if (type !== '[object Object]' && type !== '[object Array]') {
    return undefined;
  }
  const isArray: boolean = type === '[object Array]';
  const result: any = hasReturn ? (isArray ? [] : {}) : undefined;
  let isBreak = false;
  if (isArray) {
    for (let i = 0; i < data.length; i++) {
      let res = callback(data[i], i);
      if (res === '_break') {
        isBreak = true;
        break;
      }
      if (res === '_continue') {
        res = undefined;
        continue;
      }
      if (hasReturn) {
        result[i] = res;
      }
    }
  } else {
    for (const key in data) {
      let res = callback(data[key], key);
      if (res === '_break') {
        isBreak = true;
        break;
      }
      if (res === '_continue') {
        res = undefined;
        continue;
      }
      if (hasReturn) {
        result[key] = res;
      }
    }
  }
  return hasReturn && !isBreak ? result : undefined;
}
