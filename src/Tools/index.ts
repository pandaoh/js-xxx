/* eslint-disable indent */
/* eslint-disable max-lines */
/*
 * @Author: HxB
 * @Date: 2022-04-26 14:10:35
 * @LastEditors: DoubleAm
 * @LastEditTime: 2025-01-06 10:10:45
 * @Description: 工具函数
 * @FilePath: /js-xxx/src/Tools/index.ts
 */
import { md5 } from '@/Crypto';
import { unique, arraySort } from '@/Array';
import {
  ANIMALS,
  BASE_CHAR_LOW,
  BASE_CHAR_UP,
  BASE_NUMBER,
  BS_COLORS,
  CONSTELLATION,
  ID_CARD_PROVINCE,
  MAN,
  MONTHS,
  WEEKS,
  WOMAN,
} from '@/Data';
import { getType, isArr, isObj, isPromise, isStr, toBool, toNum } from '@/Types';
import { getContentType, safeDecodeURI } from '@/Request';

/**
 * 获取 16 位可读时间戳
 * @example
 * getTimeCode(); /// '2036551026042022'
 * @returns
 * @category Tools-工具方法
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
 * empty(''); /// true
 * empty(null); /// true
 * empty('null'); /// true
 * empty('undefined'); /// true
 * empty(undefined); /// true
 * empty(0); /// false
 * empty('0'); /// false
 * empty(NaN); /// true
 * empty('NaN'); /// true
 * empty({}); /// true
 * empty([]); /// true
 * @param variable 变量
 * @returns
 * @category Tools-工具方法
 */
export function empty(variable: any): boolean {
  if (typeof variable === 'boolean') {
    // 此处函数定义布尔型不算空
    return false;
  }
  if (variable === 'null') {
    // 检验字符串类型的 null
    return true;
  }
  if (variable === 'undefined') {
    // 检验字符串类型的 undefined
    return true;
  }
  if (variable === 'NaN') {
    // 检验字符串类型的 NaN
    return true;
  }
  if (!variable && variable !== 0 && variable !== '0') {
    // 检验 undefined 和 null "" NaN
    return true;
  }
  if (Array.isArray(variable) && variable.length === 0) {
    // 检验空数组
    return true;
  }
  if (Object.prototype.toString.call(variable) === '[object Object]' && Object.keys(variable).length === 0) {
    // 检验空对象，仅判断普通对象，不考虑字符串对象、时间、等等。
    return true;
  }
  return false;
}

/**
 * 获取对象/数组第一个值
 * @example
 * getFirstVar([1, 2]); /// 1
 * getFirstVar({a: 2,b: 1}); /// 2
 * @param data 源数据
 * @returns
 * @category Tools-工具方法
 */
export function getFirstVar(data: any): any {
  if (getType(data) !== 'object' && !Array.isArray(data)) {
    return data;
  }
  for (const key in data) {
    const result = data[key];
    return result;
  }
}

/**
 * 获取对象/数组最后一个值(对象为 Object.keys 的顺序)
 * @example
 * getLastVar([1, 2]); /// 2
 * getLastVar({a: 2, b: 1}); /// b
 * @param data 源数据
 * @returns
 * @category Tools-工具方法
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
 * 获取数组或对象随机数据
 * @example
 * getRandVar({ a: 1, b: 3 }); /// 1
 * getRandVar([1, 2, 3, 4], 2); /// [2, 4]
 * @param value 值
 * @param count 获取数据量
 * @returns
 * @category Tools-工具方法
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
 * 防抖函数-最后一次有效（抢购）
 * @example
 * debounce(() => {}, 1000); /// 防抖执行
 * @param fn 执行的函数
 * @param delay 延迟时间
 * @returns
 * @category Tools-工具方法
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
 * throttle(() => {}, 1000); /// 节流执行
 * @param fn 执行的函数
 * @param delay 延迟时间
 * @returns
 * @category Tools-工具方法
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
 * 全局尽可能捕获异常
 * @example
 * globalError((error) => console.log('全局捕获异常'), false); /// '全局捕获异常'
 * @param fn (error)
 * @param notShowConsole 是否不回显控制台
 * @returns
 * @category Tools-工具方法
 */
export function globalError(fn: any, notShowConsole = true) {
  // 监听全局错误
  window.onerror = function (message, source, lineNo, colNo, error) {
    if (!notShowConsole) {
      console.error('js-xxx:globalError--->', { message, source, lineNo, colNo, error });
    }
    fn.call(this, { type: 'globalError', error, message, source, lineNo, colNo });
    return notShowConsole; // 返回 true，则不在控制台报错
  };

  // 监听 Promise 的未处理错误
  // eslint-disable-next-line spellcheck/spell-checker
  window.addEventListener('unhandledrejection', function (event) {
    if (!notShowConsole) {
      console.error('js-xxx:globalError---> Unhandled Promise Rejection:', event.reason);
    }
    fn.call(this, { type: 'Unhandled Promise Rejection', error: event.reason, event });
    event.preventDefault();
  });

  // 捕获其他错误
  window.addEventListener('error', function (event) {
    if (!notShowConsole) {
      console.error('js-xxx:globalError--->', event.error);
    }
    fn.call(this, { type: 'Error', error: event.error, event });
    event.preventDefault();
  });

  // 捕获未处理的全局错误
  window.addEventListener('DOMContentLoaded', function () {
    // 捕获全局脚本错误
    const originalCreateElement = document.createElement;
    document.createElement = function (tagName: string) {
      const element: any = originalCreateElement.call(document, tagName);
      if (tagName.toLowerCase() === 'script') {
        element.addEventListener('error', function (event: any) {
          if (!notShowConsole) {
            console.error('js-xxx:globalError---> Script Error:', element.src || element.textContent);
          }
          // @ts-ignore
          fn.call(this, { type: 'Script Error', error: element.src || element.textContent, event });
          event.preventDefault();
        });
      }
      return element;
    };

    // 捕获全局资源加载错误（例如，<img>，<link>，<audio>，<video> 等）
    const originalImageConstructor = window.Image;
    window.Image = function () {
      const image = new originalImageConstructor();
      image.addEventListener('error', function (event) {
        if (!notShowConsole) {
          console.error('js-xxx:globalError---> Image Error:', image.src);
        }
        fn.call(this, { type: 'Image Error', error: image.src, event });
        event.preventDefault();
      });
      return image;
    } as any;
  });
}

/**
 * 监听资源找不到的情况，刷新页面。
 * @example
 * observeResource(() => console.log('Refreshing')); /// 找不到资源时输出 "Refreshing"
 * observeResource(); /// 找不到资源时刷新页面
 * @param callback
 * @returns
 * @category Tools-工具方法
 */
export function observeResource(callback?: any) {
  const PERFORMANCE_SUPPORTED = window.performance && typeof window.performance.getEntries === 'function';
  const RESOURCE_TYPE = 'resource';
  const JS_EXTENSION = 'js';

  if (!PERFORMANCE_SUPPORTED) {
    console.error('Performance API is not supported on this platform.');
    return;
  }

  const observerCallback = (list: any) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === RESOURCE_TYPE && entry.responseStatus === 404 && entry.name.includes(JS_EXTENSION)) {
        console.log(`Resource ${entry.name} is outdated. Refreshing the page...`);
        if (callback) {
          callback();
        } else {
          window.location.reload();
        }
        break;
      }
    }
  };

  const observePerformance = () => {
    const PerformanceObserver = getPerformanceObserverConstructor();

    if (!PerformanceObserver) {
      console.error('PerformanceObserver is not supported on this platform.');
      return;
    }

    const observer = new PerformanceObserver(observerCallback);
    const entryTypes = getEntryTypes();
    observer.observe({ entryTypes });
    // observer.observe({ type: 'resource', buffered: true });
  };

  const getPerformanceObserverConstructor = () =>
    window.PerformanceObserver ||
    // @ts-ignore
    window.WebKitPerformanceObserver ||
    // @ts-ignore
    window.MozPerformanceObserver ||
    // @ts-ignore
    window.msPerformanceObserver;

  const getEntryTypes = () =>
    ['navigation', 'resource', 'network', 'error', 'event'].filter((type) =>
      PerformanceObserver.supportedEntryTypes.includes(type),
    );

  observePerformance();
}

/**
 * 刷新页面或执行回调函数，用于检测服务端是否发布了更新
 * @example
 * checkUpdate((type) => console.log({ type })); /// 检测服务端是否发布了更新，若更新或请求失败则执行回调。
 * checkUpdate(); /// 检测服务端是否发布了更新，若更新或请求失败则刷新页面。
 * checkUpdate((type) => window.location.reload(), 5 * 60 * 1000, '/index.js'); /// 检测服务端某个文件是否发布了更新，若更新或请求失败则刷新页面。
 * @param callback 文件更新时要执行的回调函数
 * @param interval 请求文件的时间间隔（毫秒），默认为 15 分钟，最小值 1 分钟。
 * @param url 要检测的文件路径（默认为页面最后一个 JavaScript/CSS 文件）
 * @returns
 * @category Tools-工具方法
 */
export function checkUpdate(callback: any, interval = 15 * 60 * 1000, url?: string) {
  let filePath: any = url;
  let lastModified: any = null;
  let timerId: any = null;
  interval = Math.max(1 * 60 * 1000, interval ?? 0);

  if (!filePath) {
    const scripts = document.getElementsByTagName('script');
    const lastScript: any = scripts[scripts.length - 1];
    if (lastScript?.src) {
      filePath = lastScript.src;
    } else {
      const links = document.getElementsByTagName('link');
      const lastLink = links[links.length - 1];
      filePath = lastLink.href;
    }
  }

  if (!filePath) {
    console.error('Failed to get file path.');
    return;
  }

  function requestFile() {
    const xhr = new XMLHttpRequest();
    xhr.open('HEAD', filePath + '?_=' + Date.now(), true);

    xhr.onload = function () {
      if (xhr.status === 200) {
        const currentModified = xhr.getResponseHeader('Last-Modified');
        if (lastModified && currentModified !== lastModified) {
          handleUpdate();
        }
        lastModified = currentModified;
      } else {
        handleFailure();
      }
    };

    xhr.onerror = handleFailure;

    xhr.send();
  }

  function handleUpdate() {
    if (typeof callback === 'function') {
      callback('UPDATE');
    } else {
      console.log('Server has been updated. Refreshing the page...');
      window.location.reload();
    }
  }

  function handleFailure() {
    if (typeof callback === 'function') {
      callback('FAIL');
    } else {
      console.log(`Failed to load file: ${filePath}. Refreshing the page...`);
      window.location.reload();
    }
  }

  function startTimer() {
    timerId = setInterval(requestFile, interval);
  }

  function stopTimer() {
    clearInterval(timerId);
  }

  startTimer();

  return stopTimer; // 返回取消定时器的函数
}

/**
 * 获取随机数字
 * @example
 * getRandNum(1, 10); /// 1~10 之间的随机数，闭区间。
 * @param min 最小值
 * @param max 最大值
 * @returns
 * @category Tools-工具方法
 */
export function getRandNum(min = 0, max = 10): number {
  return Math.floor(min + Math.random() * (max - min + 1));
}

/**
 * 获取随机颜色
 * @example
 * getRandColor(); /// '#xxxxxx'
 * @returns
 * @category Tools-工具方法
 */
export function getRandColor(): string {
  return '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6);
}

// eslint-disable-next-line spellcheck/spell-checker
/**
 * 获取 bootstrap 颜色
 * @example
 * getBSColor(); /// '#6c757d'
 * getBSColor('red'); /// '#dc3545'
 * getBSColor('warning'); /// '#ffc107'
 * @param key color name
 * @returns
 * @category Tools-工具方法
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
  // @ts-ignore
  return BS_COLORS[key];
}

/**
 * 获取任意变量长度
 * @example
 * getVarSize([]); /// 0
 * getVarSize({a: 1, b: 2}); /// 2
 * getVarSize(null); /// 0
 * @param value 值
 * @returns
 * @category Tools-工具方法
 */
export function getVarSize(value: any): number {
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
 * 获取数组或对象交集
 * @example
 * intersection([1, 2, 2, 3, 3], [1, 2, 4, 5]); /// [1, 2]
 * intersection({a: 1, b: 2}, {a: 1, c: 3, b: 4}); /// {a: 1}
 * @param paramA 值 A
 * @param paramB 值 B
 * @returns
 * @category Tools-工具方法
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
    result = unique(result);
  }

  return jsonClone(result);
}

/**
 * 获取数组或对象并集
 * @example
 * union([1, 2, 2, 3, 3], [1, 2, 4, 5]); /// [1, 2, 3, 4, 5]
 * union({a: 1, b: 2}, {a: 1, c: 3, b: 4}); /// {a: 1, c: 3, b: 2}
 * @param paramA 值 A，若冲突以此值为准。
 * @param paramB 值 B
 * @returns
 * @category Tools-工具方法
 */
export function union(paramA: any, paramB: any): any {
  const paramAType = getType(paramA);
  if (paramAType != getType(paramB)) return false;
  if (paramAType != 'object' && paramAType != 'array') return false;

  if (paramAType == 'object') {
    return jsonClone({
      ...paramB,
      // 以前一个为准
      ...paramA,
    });
  } else {
    return jsonClone(unique([...paramA, ...paramB]));
  }
}

/**
 * 获取数组或对象不同值集合
 * @example
 * difference([1, 2, 2, 3, 3], [1, 2, 4, 5]); /// [3]
 * difference({a: 1, b: 2}, {a: 1, c: 3, b: 4}); /// {b: 2}
 * @param paramA 值 A，若冲突以此值为准。
 * @param paramB 值 B
 * @returns
 * @category Tools-工具方法
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
        // 以前一个为准
        result[key] = paramA[key];
      }
    }
  } else {
    result = paramA.filter((item: any) => !paramB.includes(item));
    result = unique(result);
  }
  return jsonClone(result);
}

/**
 * JSON 转字符串式克隆
 * @example
 * jsonClone([1, 2, 2, 3, 3]); /// [1, 2, 2, 3, 3]
 * jsonClone({a: 1, b: 2}); /// {a: 1, b: 2}
 * @param value 值
 * @returns
 * @category JSON-相关
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
 * @param fn 方法函数
 * @param timeKey 打印时间记录关键 key
 * @returns
 * @category Extra-日志/调试
 */
export function logRunTime(fn: any, timeKey: string): void {
  timeKey = timeKey ?? getKey(5, 'log-run-time');
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
 * 在页面上显示某个值
 * @example
 * showVar([1, 2, 2, 3, 3]); /// 显示序列化之后的数据
 * showVar({a: 1, b: 2}); /// 显示序列化之后的数据
 * @param value 值
 * @returns
 * @category Extra-日志/调试
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
 * contains([1, 2, 2, 3, 3], 3); /// true
 * contains([1, 2, 2, 3, 3], '3'); /// false
 * contains(['test1', 'test2'],'test'); /// false
 * contains([{a: 1, b: 2}, {a: 2, b: 3}], {a: 2, b: 3}); /// true
 * contains([{a: 1, b: 2}, {a: 2, b: 3}], {b: 3, a: 2}); /// true
 * contains([[1, 2], [3, 4]], [4, 3]); /// true
 * contains([[1, 2], [3, 4]], [3, 4]); /// true
 * contains([[1, 2], [3, 4]], [1, 3]); /// false
 * @param value 值
 * @param target 目标值
 * @returns
 * @category Tools-工具方法
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
 * same(['admin','manager','user','viewer','guest'], ['admin','user']); /// true
 * same(['admin','manager','user','viewer','guest'], 'admin'); /// true
 * same('admin', ['admin','user']); /// true
 * same('admin', 'admin'); /// true
 * same('admin', 'admins'); /// false
 * same('admins', 'admin'); /// false
 * @param valueA 值 A
 * @param valueB 值 B
 * @returns
 * @category Tools-工具方法
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
 * getSortVar({ b: 3, a: 2 }); /// { a: 2, b: 3 }
 * getSortVar({ a: 2, b: 3 }); /// { a: 2, b: 3 }
 * getSortVar([1, 3, 2]); /// [1, 2, 3]
 * @param value 值
 * @returns
 * @category Tools-工具方法
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
 * inversion([1, 2, 3]); /// [3, 2, 1]
 * inversion('123'); /// '321'
 * inversion(); /// undefined
 * inversion(true); /// true
 * @param value 值
 * @returns
 * @category Tools-工具方法
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
 * @param condition 函数
 * @param timeout 超时
 * @param interval 执行间隔
 * @returns
 * @category Tools-工具方法
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
 * ms('1s'); /// 1000
 * ms('1m'); /// 60000
 * ms('1.5h'); /// 5400000
 * ms('1d'); /// 86400000
 * ms('1y'); /// 31557600000
 * ms('1000'); /// 1000
 * ms(1500); /// '1.5s'
 * ms(60000); /// '1m'
 * @param str 值
 * @returns
 * @category Tools-工具方法
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
 * 检查是否为 idCard string 身份证
 * 支持 15 、 18 位
 * @example
 * checkIdCard('350424870506202'); /// true
 * checkIdCard('003424870506202'); /// false
 * checkIdCard('415106199801012130'); /// true
 * checkIdCard('123123123123123222'); /// false
 * @param value 字符串值
 * @returns
 * @category Tools-工具方法
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
 * getAge('1998-9-28'); /// 24
 * getAge('1998-6-8', '2023-7'); /// 25
 * getAge('2023'); /// -1
 * @param birthday 生日
 * @param targetDate 目标日期
 * @returns
 * @category Tools-工具方法
 */
export function getAge(birthday: any, targetDate?: any): number {
  return new Date(new Date(targetDate ?? Date.now()).getTime() - new Date(birthday).getTime()).getFullYear() - 1970;
}

/**
 * 获取生肖
 * @example
 * getAnimal('1998'); /// '虎'
 * getAnimal('1998-6-8'); /// '虎'
 * getAnimal('2023'); /// '兔'
 * @param date 日期
 * @returns
 * @category Tools-工具方法
 */
export function getAnimal(date: any): string {
  return ANIMALS[new Date(date).getFullYear() % 12];
}

/**
 * 身份证解析
 * @example
 * transferIdCard('350424870506202');
 * /// {"age":35,"year":"1987","idCard":"350424870506202","sex":"女","constellation":{"cn":"金牛","en":"Taurus","date":"4.20-5.20"},"gender":0,"province":"福建","animal":"兔","birthday":"1987-05-06"}
 * transferIdCard('415106199801012130');
 * /// {"age":24,"year":"1998","idCard":"415106199801012130","sex":"男","constellation":{"cn":"魔羯","en":"Capricorn","date":"12.22-1.19"},"gender":1,"province":"河南","animal":"虎","birthday":"1998-01-01"}
 * transferIdCard('xxxxx'); /// {}
 * @param idCard 字符串值
 * @returns
 * @category Tools-工具方法
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
 * transferMoney(900); /// '玖佰元整'
 * transferMoney(852.5); /// '捌佰伍拾贰元伍角'
 * @param n 数值
 * @returns
 * @category Tools-工具方法
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
 * TTS 语音，可以在现代浏览器直接运行。
 * @example
 * const mySpeaker = Speaker();
 * mySpeaker.setText('你好，这是一条测试语音！hello');
 * mySpeaker.speak();
 * @param text 内容
 * @param lang 语言
 * @param volume 音量 [0, 1]
 * @param pitch 音高 [0, 2]
 * @param rate 速度 [0.1, 10]
 * @returns
 * @category TTS-文字转语音
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
 * rip(); /// 页面灰白
 * @returns
 * @category BXH-自定义动画
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
 * getConstellation('11-24'); /// { cn: '射手', en: 'Sagittarius', date: '11.23-12.21' }
 * getConstellation('xxx'); /// {cn: '未知', en: 'unknown', date: 'xxx'}
 * getConstellation(new Date('2022-11-24')); /// { cn: '射手', en: 'Sagittarius', date: '11.23-12.21' }
 * @param date 日期
 * @returns
 * @category Tools-工具方法
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
 * setEventListener('resize', () => { console.log('resize'); }); /// cancel 当前 listener 的 function
 * @param eventKey 事件 key
 * @param foo 函数
 * @param once 是否只触发一次
 * @param dom document.querySelector<HTMLDivElement>('.xxx')
 * @returns
 * @category Tools-工具方法
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
 * H5 移动端软键盘缩回/弹起回调
 * `return cancel listener of keyBoardResize`
 * @example
 * keyBoardResize(() => { console.log('downCb'); }, () => { console.log('upCb'); }); /// do something
 * @param downCb 缩回回调
 * @param upCb 弹起回调
 * @returns
 * @category Tools-工具方法
 */
export function keyBoardResize(downCb: any, upCb: any): any {
  // 当软件键盘弹起会改变当前 window.innerHeight
  // 监听这个值变化 [downCb 缩回的回调、 upCb 弹起的回调]
  const clientHeight = window.innerHeight;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  downCb = typeof downCb === 'function' ? downCb : function () {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  upCb = typeof upCb === 'function' ? upCb : function () {};
  const H5KeyBoardResizeFoo = () => {
    const height = window.innerHeight;
    if (height === clientHeight) {
      downCb();
    }
    if (height < clientHeight) {
      upCb();
    }
  };
  return setEventListener('resize', H5KeyBoardResizeFoo);
}

/**
 * 设置 resize 时的监听函数，默认重新加载页面。
 * 返回取消该监听的函数 return cancel
 * @example
 * onResize(); /// cancel 当前 listener 的 function
 * onResize('resize', () => { console.log('resize'); }); /// cancel 当前 listener 的 function
 * @param foo 函数
 * @returns
 * @category Tools-工具方法
 */
export function onResize(foo: any): any {
  const func = (...args: any[]) => {
    !foo ? window.location.reload() : foo?.(...args);
  };
  window.addEventListener('resize', func);
  return () => {
    window.removeEventListener('resize', func);
  };
}

/**
 * 获取简单的浏览器指纹
 * @example
 * getFingerprint(); /// md5 加密后的指纹
 * getFingerprint('test'); /// md5 加密后的指纹-建议增加使用者标识，避免指纹冲突。
 * @param extraString 额外的字符串，可以说用户名等。
 * @returns
 * @category Tools-工具方法
 */
export function getFingerprint(extraString: string | number): string {
  let fingerprint = '';

  // 获取浏览器 User Agent
  const userAgent = navigator.userAgent;

  // 获取浏览器语言
  const language =
    // @ts-ignore
    navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || 'xLang';

  // 获取屏幕分辨率
  const resolution = window?.screen?.width + '*' + window?.screen?.height;

  // 获取屏幕颜色深度
  const colorDepth = window?.screen?.colorDepth || 'xColorDepth';

  // 获取时区偏移
  const timezoneOffset = new Date().getTimezoneOffset();

  // 获取浏览器插件列表
  const plugins = Array.from(navigator.plugins || [])
    .map(function (plugin) {
      return plugin?.name + '::' + plugin?.filename;
    })
    .join(';');

  // 获取浏览器是否启用了 Do Not Track
  // @ts-ignore
  const doNotTrack = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack || 'xDoNotTrack';

  // 拼接指纹字符串
  fingerprint =
    userAgent + language + resolution + colorDepth + timezoneOffset + plugins + doNotTrack + `${extraString ?? 'xxx'}`;

  // 对指纹字符串进行加密
  fingerprint = md5(fingerprint);

  return fingerprint;
}

/**
 * 禁用控制台
 * windows
 * 防君子不防小人
 * 监听页面大小变化没必要
 * 监听编辑 dom 事件 reload 也算了
 * @example
 * banConsole(); /// 返回取消禁用的 function
 * @returns
 * @category Tools-工具方法
 */
export function banConsole(): any {
  document.body.setAttribute('style', 'user-select: none;' + document.body.style);
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
 * getWeekInfo(); /// WEEKS_INFO
 * getWeekInfo('0'); /// WEEKS_INFO
 * getWeekInfo('ALL'); /// WEEKS_INFO
 * getWeekInfo('all'); /// WEEKS_INFO
 * getWeekInfo('unknown'); /// WEEKS_INFO
 * getWeekInfo(1); /// 星期一相关信息
 * getWeekInfo(8); /// WEEKS_INFO
 * @param n 值
 * @returns
 * @category Tools-工具方法
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
 * getMonthInfo(); /// MONTH_INFO
 * getMonthInfo('0'); /// MONTH_INFO
 * getMonthInfo('ALL'); /// MONTH_INFO
 * getMonthInfo('all'); /// MONTH_INFO
 * getMonthInfo('unknown'); /// MONTH_INFO
 * getMonthInfo(1); /// 一月相关信息
 * getMonthInfo(13); /// MONTH_INFO
 * @param n 值
 * @returns
 * @category Tools-工具方法
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
 * isEqual([1, 2, 3], [1, 2, 3]); /// true
 * isEqual({a: 1, b: 2}, {a: 1, b: 2}); /// true
 * isEqual({}, {}); /// true
 * isEqual(1, 1); /// true
 * isEqual(1, '1'); /// false
 * @param obj1 值 1
 * @param obj2 值 2
 * @returns
 * @category Tools-工具方法
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
 * forEach([1, 2, 3], (item, index) => item * 2, true); /// [2, 4, 6]
 * forEach({a: 1, b: 2}, (value, key) => console.log(value, key));
 * forEach({a: 1, b: 2}, (value, key) => value * 2, true); /// {a: 2, b: 4}
 * @param data 要遍历的数据，可以是数组或对象。
 * @param callback 回调函数
 * @param hasReturn 是否返回一个新值
 * @returns
 * @category Tools-工具方法
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

/**
 * 获取带前/后缀的唯一 key
 * @example
 * getKey(); /// 'M2rmCcGpXCa5MTdN4Kks5'
 * getKey(2, 'test'); /// 'test-aK'
 * getKey(2, null, 'last'); /// 'aK-last'
 * @param size 指定长度
 * @param prefix 前缀
 * @param prefix 后缀
 * @returns
 * @category Crypto-密码学
 */
export function getKey(size = 21, prefix?: string, suffix?: string): string {
  const symbols = `${BASE_NUMBER}${BASE_CHAR_LOW}${BASE_CHAR_UP}`;
  const len = symbols.length;
  // eslint-disable-next-line spellcheck/spell-checker
  const ret = new Uint8Array(size);

  for (let i = 0; i < size; i++) {
    ret[i] = getRandNum(0, 255);
  }

  let id = '';
  while (size--) {
    id += symbols[ret[size] % len];
  }
  prefix = !prefix ? '' : prefix + '-';
  suffix = !suffix ? '' : '-' + suffix;

  return prefix + id + suffix;
}

/**
 * 生成一个指定长度的随机数字符串
 * @example
 * getRandStr(2); /// '43'
 * getRandStr(5); /// '77192'
 * @param length 指定长度
 * @returns
 * @category Crypto-密码学
 */
export function getRandStr(length: number): string {
  let result = '';
  const characters = `${BASE_NUMBER}`;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(length != 1 && i == 0 && randomIndex == 0 ? randomIndex + 1 : randomIndex);
  }
  return result;
}

/**
 * 获取 V4 版本 UUID
 * @example
 * uuid(); /// '7b72e264-61fe-426e-b95f-35d4e61c5742'
 * @returns
 * @category Crypto-密码学
 */
export function uuid(): string {
  // // 创建临时 URL 对象
  // const tempUrl = URL.createObjectURL(new Blob());
  // // 将 URL 转换为字符串
  // const uuid = tempUrl.toString();
  // // 释放这个 URL
  // URL.revokeObjectURL(tempUrl);
  // // 提取 URL 字符串中最后一个斜杠后的部分作为 UUID
  // return uuid.substring(uuid.lastIndexOf('/') + 1);

  // 下面是生成符合 UUID 标准的代码，被注释掉了
  const hexBytes = [];
  for (let i = 0; i < 256; i++) {
    hexBytes[i] = (i + 0x100).toString(16).substring(1);
  }

  // eslint-disable-next-line spellcheck/spell-checker
  const ret = new Uint8Array(16);
  for (let i = 0; i < 16; i++) ret[i] = getRandNum(0, 255);

  const b = ret;

  b[6] = (b[6] & 0x0f) | 0x40;
  b[8] = (b[8] & 0x3f) | 0x80;

  return (
    hexBytes[b[0]] +
    hexBytes[b[1]] +
    hexBytes[b[2]] +
    hexBytes[b[3]] +
    '-' +
    hexBytes[b[4]] +
    hexBytes[b[5]] +
    '-' +
    hexBytes[b[6]] +
    hexBytes[b[7]] +
    '-' +
    hexBytes[b[8]] +
    hexBytes[b[9]] +
    '-' +
    hexBytes[b[10]] +
    hexBytes[b[11]] +
    hexBytes[b[12]] +
    hexBytes[b[13]] +
    hexBytes[b[14]] +
    hexBytes[b[15]]
  );
}

/**
 * 获取随机日期时间
 * @example
 * getRandDate(); /// '1923-01-01 01:03:30'
 * @returns
 * @category Tools-工具方法
 */
export function getRandDate(): string {
  const year = getRandNum(1970, new Date().getFullYear());
  const month = getRandNum(1, 12);
  const day = getRandNum(1, 28);
  const hours = getRandNum(0, 23);
  const minutes = getRandNum(0, 59);
  const seconds = getRandNum(0, 59);

  const formattedMonth = `${month}`.padStart(2, '0');
  const formattedDay = `${day}`.padStart(2, '0');
  const formattedHours = `${hours}`.padStart(2, '0');
  const formattedMinutes = `${minutes}`.padStart(2, '0');
  const formattedSeconds = `${seconds}`.padStart(2, '0');

  return `${year}-${formattedMonth}-${formattedDay} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

/**
 * 获取随机 IP 地址
 * @example
 * getRandIp(); /// '89.0.142.86'
 * @returns
 * @category Tools-工具方法
 */
export function getRandIp(): string {
  const segment1 = getRandNum(1, 255);
  const segment2 = getRandNum(0, 255);
  const segment3 = getRandNum(0, 255);
  const segment4 = getRandNum(1, 255);

  return `${segment1}.${segment2}.${segment3}.${segment4}`;
}

/**
 * 给对应 dom 生成水印
 * 窗口 resize 的时候最好要重新调用渲染
 * @example
 * watermark(document.body, 'My Watermark', { fontSize: 20, opacity: 0.5, angle: -30, color: 'red', fontFamily: 'Arial', repeat: true, backgroundOpacity: 0.05 });
 * watermark(document.body, 'My Watermark'); /// 在 body 中生成水印
 * watermark(document.body, 'My Watermark\n2024-07-11'); /// 在 body 中生成水印，支持换行符。
 * watermark(document.body, 'My Watermark', { fontSize: 120, color: 'red', repeat: false, angle: 0 }); /// 在 body 中生成水印
 * watermark(document.body, 'My Watermark', { fontSize: 20, color: 'red', repeat: true, angle: 90 }); /// 在 body 中生成水印
 * @param dom 需要生成水印的 dom
 * @param text 水印文本，支持换行符 `\n` 。
 * @param options 样式配置
 * @returns
 * @category Watermark-水印
 */
export function watermark(dom: any, text: string, options: any = {}) {
  if (!dom || !(dom instanceof HTMLElement)) {
    throw new Error('Invalid DOM element provided.');
  }

  const {
    fontSize = 16,
    opacity = 0.3,
    angle = -45,
    color = '#000',
    fontFamily = 'Arial',
    repeat = true,
    backgroundOpacity = 0.05,
  } = options;

  const canvas = document.createElement('canvas');
  const ctx: any = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Failed to get Canvas 2D context.');
  }

  ctx.font = `${fontSize}px ${fontFamily}`;

  const lines = text.split('\n');
  const textWidth = Math.max(...lines.map((line) => ctx.measureText(line).width));
  // const textWidth = ctx.measureText(text).width;
  const textHeight = fontSize * lines.length;

  const canvasWidth =
    angle % 180 == 0
      ? textWidth * 2
      : angle % 90 == 0
      ? textHeight * 2
      : (Math.abs(textWidth * Math.cos((angle * Math.PI) / 180)) +
          Math.abs(textHeight * Math.sin((angle * Math.PI) / 180))) *
        2;
  const canvasHeight =
    angle % 180 == 0
      ? textHeight * 2
      : angle % 90 == 0
      ? textWidth * 2
      : (Math.abs(textHeight * Math.cos((angle * Math.PI) / 180)) +
          Math.abs(textWidth * Math.sin((angle * Math.PI) / 180))) *
        2;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  ctx.font = `${fontSize}px ${fontFamily}`;
  ctx.fillStyle = color;
  ctx.globalAlpha = opacity;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const centerX = canvasWidth / 2;
  const centerY = canvasHeight / 2;

  ctx.translate(centerX, centerY);
  ctx.rotate((angle * Math.PI) / 180);

  lines.forEach((line, index) => {
    ctx.fillText(line, 0, (index - (lines.length - 1) / 2) * fontSize);
  });

  ctx.rotate((-angle * Math.PI) / 180);
  ctx.translate(-centerX, -centerY);

  const backgroundImage = `url(${canvas.toDataURL('image/png')})`;
  dom.style.backgroundImage = backgroundImage;
  dom.style.backgroundRepeat = repeat ? 'repeat' : 'no-repeat';
  dom.style.backgroundSize = `${
    dom.clientWidth === canvasWidth ? canvasWidth : dom.clientWidth / Math.ceil(dom.clientWidth / canvasWidth)
  }px ${
    dom.clientHeight === canvasHeight ? canvasHeight : dom.clientHeight / Math.ceil(dom.clientHeight / canvasHeight)
  }px`;
  dom.style.backgroundColor = `rgba(0, 0, 0, ${backgroundOpacity})`;
  dom.style.backgroundPosition = 'center';
  dom.style.zIndex = '999999';
}

/**
 * 创建定时器
 * @example
 * const cancelTimer = xTimer(() => {
 *   console.log('Timer executed!');
 * }, 1000, true, true);
 * cancelTimer();
 * const cancelIntervalTimer = xTimer(() => {
 *   console.log('IntervalTimer executed!');
 * }, 1000, false);
 * cancelIntervalTimer();
 * @param callback 回调函数
 * @param [time=1] 时间间隔（毫秒），默认为 1 。
 * @param [once=false] 是否为一次性定时器，默认为 false 。
 * @param [immediate=false] 是否立即执行回调函数，默认为 false 。
 * @returns
 * @category xTimer-定时器封装
 */
export function xTimer(callback: any, time = 0, once = false, immediate = false) {
  time = time ?? 0;

  if (once) {
    if (immediate) {
      callback();
    }

    const timer = setTimeout(() => {
      callback();
    }, time);

    return () => {
      clearTimeout(timer);
    };
  } else {
    if (immediate) {
      callback();
    }

    const interval = setInterval(() => {
      callback();
    }, time);

    return () => {
      clearInterval(interval);
    };
  }
}

/**
 * -函数柯里化-
 * 是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。
 * @example
 * curryIt(function (a, b, c) {return a + b + c})(1)(2)(3); /// 6
 * @param fn 函数
 * @returns
 * @category Tools-工具方法
 */
export function curryIt(fn: any) {
  return function curried(...args: any[]) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...nextArgs: any[]) {
        return curried(...args.concat(nextArgs));
      };
    }
  };
  //   // 获取预定义函数的参数个数
  //   let length = fn.length;
  //   // 声明存放参数的数组
  //   const args: any[] = [];
  //   return function (arg: any) {
  //     args.push(arg);
  //     length--;
  //     if (length <= 0) {
  //       // @ts-ignore
  //       return fn.apply(this, args);
  //     } else {
  //       // callee 属性是一个指针，指向拥有这个 arguments 对象的函数。
  //       return arguments.callee;
  //     }
  //   };
}

/**
 * 简单的模板渲染引擎
 * 使用自定义模板渲染字符串内容
 * 支持条件渲染、循环、嵌套变量、默认值以及简单占位符替换
 * @example
 * /// https://github.com/biugle/js-xcmd/blob/main/utils/template.js
 * @link https://github.com/biugle/js-xcmd/blob/main/utils/template.js
 * @param content 原始模板内容
 * @param replacements 要替换的值-对象
 * @returns
 * @category 模板渲染
 */
export function renderTemplate(content: string, replacements: any) {
  replacements = replacements || {};
  if (!content) {
    return '';
  }

  // 内部路径解析函数
  const _resolvePath = (obj: any, path: string) => {
    return path.split('.').reduce((acc: any, part: string) => {
      if (acc && typeof acc === 'object' && part in acc) {
        return acc[part];
      }
      return undefined; // 如果路径不存在，返回 undefined
    }, obj);
  };

  // 内部方法：处理多余空行
  const _trimTpl = (str: string) => {
    // 用正则表达式将多个连续的空行替换为一个空行
    return str.replace(/(\n\s*\n)+/g, '\n\n'); // 将多个空行替换为一个空行
  };

  // 循环渲染 - [[*arrayVarKey $item $index]]
  content = content.replace(
    /\[\[\s*\*\s*([\w.]+)\s+(\$\w+)(?:\s+(\$\w+))?\s*\]\]([\s\S]*?)\[\[\s*\/\s*\1\s*\]\]/g,
    (match, arrayVarKey, itemVar, indexVar, innerContent) => {
      const array = _resolvePath(replacements, arrayVarKey);
      if (Array.isArray(array)) {
        return array
          .map((item, index) => {
            const context = { ...replacements, [itemVar.slice(1)]: item };
            if (indexVar) {
              context[indexVar.slice(1)] = index; // 传递索引
            }
            return renderTemplate(innerContent, context); // 递归渲染
          })
          .join(''); // 使用空字符串连接渲染结果
      }
      return ''; // 如果不是数组则返回空字符串
    },
  );

  // 存在变量的条件渲染 - [[#key]] ... [[/key]]
  content = content.replace(
    /\[\[\s*#\s*([\w.]+)\s*\]\]([\s\S]*?)\[\[\s*\/\s*\1\s*\]\]/g,
    (match, key, innerContent) => {
      return _resolvePath(replacements, key) ? innerContent : '';
    },
  );

  // 不存在变量的条件渲染 - [[^key]] ... [[/key]]
  content = content.replace(
    /\[\[\s*\^\s*([\w.]+)\s*\]\]([\s\S]*?)\[\[\s*\/\s*\1\s*\]\]/g,
    (match, key, innerContent) => {
      return !_resolvePath(replacements, key) ? innerContent : '';
    },
  );

  // 替换简单的占位符并支持默认值 - [[[key ?? defaultValue]]]
  content = content.replace(/\[\[\[\s*([\w.]+)\s*(?:\?\?\s*([^\]]+))?\s*\]\]\]/g, (match, path, defaultValue) => {
    const value = _resolvePath(replacements, path);
    return `${value !== undefined ? value : defaultValue || ''}`.trim(); // 使用 .trim() 去除前后空白
  });

  // 处理空行和首尾空白
  return _trimTpl(content);
}

/**
 * 创建一个空闲监听器，监测用户的活动状态。
 * @example
 * const idleListener = createIdleListener(() => console.log('用户空闲了'), 15, true); // 15 秒超时
 * console.log(`可见状态次数: ${idleListener.getVisibleCount()}`);
 * console.log(`空闲状态次数: ${idleListener.getIdleCount()}`);
 * idleListener.stopDetection(); // 停止监听
 * idleListener.startDetection(); // 重新开始监听
 * @param callback 用户空闲时执行的回调函数。
 * @param [timeout=60] 空闲时间，单位为秒，默认值为 60 秒。
 * @param [immediate=true] 是否立即开始监测，默认为 true 。
 * @returns
 * @category 空闲监听
 */
export function createIdleListener(callback: any, timeout = 60, immediate = true) {
  let pageTimer: any;
  let beginTime = 0;
  let visibleCount = 0; // 可见状态计数
  let idleCount = 0; // 空闲状态计数

  const onClearTimer = () => {
    if (pageTimer) {
      clearTimeout(pageTimer);
      pageTimer = undefined;
    }
  };

  const onStartTimer = () => {
    const currentTime = Date.now();
    if (pageTimer && currentTime - beginTime < 100) {
      return;
    }

    onClearTimer();
    beginTime = currentTime;
    pageTimer = setTimeout(() => {
      idleCount++; // 增加空闲计数
      callback();
    }, timeout * 1000);
  };

  const onPageVisibility = () => {
    onClearTimer();
    visibleCount++; // 增加可见状态计数

    if (document.visibilityState === 'visible') {
      const currentTime = Date.now();
      if (currentTime - beginTime >= timeout * 1000) {
        idleCount++; // 增加空闲计数
        callback();
        return;
      }
      pageTimer = setTimeout(() => {
        idleCount++; // 增加空闲计数
        callback();
      }, timeout * 1000 - (currentTime - beginTime));
    }
  };

  const startDetection = () => {
    onStartTimer();
    document.addEventListener('keydown', onStartTimer);
    document.addEventListener('mousemove', onStartTimer);
    document.addEventListener('mousedown', onStartTimer);
    document.addEventListener('resize', onStartTimer);
    document.addEventListener('touchstart', onStartTimer);
    document.addEventListener('wheel', onStartTimer);
    document.addEventListener('scroll', onStartTimer);
    document.addEventListener('visibilitychange', onPageVisibility);
  };

  const stopDetection = () => {
    onClearTimer();
    // 移除所有事件监听
    document.removeEventListener('keydown', onStartTimer);
    document.removeEventListener('mousemove', onStartTimer);
    document.removeEventListener('mousedown', onStartTimer);
    document.removeEventListener('resize', onStartTimer);
    document.removeEventListener('touchstart', onStartTimer);
    document.removeEventListener('wheel', onStartTimer);
    document.removeEventListener('scroll', onStartTimer);
    document.removeEventListener('visibilitychange', onPageVisibility);

    // 重新计数
    visibleCount = 0;
    idleCount = 0;
  };

  const restartDetection = () => {
    onClearTimer();
    onStartTimer();
    // 重新计数
    visibleCount = 0;
    idleCount = 0;
  };

  // 获取可见状态计数
  const getVisibleCount = () => visibleCount;

  // 获取空闲状态计数
  const getIdleCount = () => idleCount;

  if (immediate) {
    startDetection();
  }

  return {
    startDetection,
    stopDetection,
    restartDetection,
    getVisibleCount,
    getIdleCount,
  };
}
