/* eslint-disable max-lines */
/*
 * @Author: HxB
 * @Date: 2022-04-26 14:53:39
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-11-12 17:08:29
 * @Description: 因项目需要常用函数，不管任何项目，都放到一起。注意甄别，没有复用意义的函数就不要添加了。
 * @FilePath: \js-xxx\src\Others\index.ts
 */

import { formatDate } from '@/Date';
import { isUrl, trim } from '@/String';
import { getContentType, safeEncodeURI } from '@/Request';
import { BLOOD_GROUP_INFO } from '@/Data';
import { getV } from '@/Object';

function _calcCheckChar(serialNo: string, hex = false) {
  serialNo = String(serialNo).trim();

  if (serialNo.length < 13) {
    throw new Error('格式不正确，请检查！');
  }

  const iso7064ValueToCharTable = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ*';
  const charValueTable: any = {};

  let sum = 0;

  for (let i = 0; i < iso7064ValueToCharTable.length; i++) {
    const ch = iso7064ValueToCharTable[i];
    const isDigit = ch >= '0' && ch <= '9';
    const isUpperAlpha = ch >= 'A' && ch <= 'Z';

    if (isDigit || isUpperAlpha) {
      let charValue;
      if (isDigit) {
        charValue = Number(ch);
      } else {
        charValue = ch.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
      }

      charValueTable[ch] = charValue;
    }
  }

  for (let i = 0; i < 13; i++) {
    const ch = serialNo[i].toUpperCase();
    const charValue = charValueTable[ch];

    if (charValue === undefined) {
      throw new Error('包含无效字符，请检查！');
    }

    sum = ((sum + charValue) * 2) % 37;
  }

  const charValue = (38 - sum) % 37;
  const checkChar = iso7064ValueToCharTable[charValue];

  if (hex) {
    const hexValue = charValue.toString(16).toUpperCase().padStart(2, '0');
    return hexValue;
  }

  return checkChar;
}

function _isValidCronField(field: any, min: any, max: any): boolean {
  const regex = new RegExp('^\\d+|\\*/\\d+|[\\d,-]+/[\\d,-]+$');
  if (!regex.test(field)) {
    return false;
  }

  if (field.includes('/')) {
    const [start, step] = field.split('/');
    return _isValidCronField(start, min, max) && parseInt(step) > 0 && parseInt(step) <= max;
  }

  if (field.includes('-')) {
    const [start, end] = field.split('-');
    return parseInt(start) >= min && parseInt(end) <= max && parseInt(start) <= parseInt(end);
  }

  return parseInt(field) >= min && parseInt(field) <= max;
}

/**
 * 获取浏览器信息
 * @example
 * getUserAgent(); /// { browserName: 'Chrome', browserVersion: '102.0.0.0', osName: 'Windows', osVersion: '10.0', deviceName: '' }
 * @returns
 * @category Others-业务/其他
 */
export function getUserAgent(): { browserName: string; browserVersion: string; osName: string; osVersion: string } {
  interface BrowserReg {
    [Chrome: string]: RegExp;
    IE: RegExp;
    Firefox: RegExp;
    Opera: RegExp;
    Safari: RegExp;
    '360': RegExp;
    QQBrowser: RegExp;
  }

  interface DeviceReg {
    [iPhone: string]: RegExp;
    Android: RegExp;
    iPad: RegExp;
    Windows: RegExp;
    Mac: RegExp;
  }

  const browserReg: BrowserReg = {
    Chrome: /Chrome/,
    IE: /MSIE/,
    Firefox: /Firefox/,
    Opera: /Presto/,
    Safari: /Version\/([\d.]+).*Safari/,
    '360': /360SE/,
    QQBrowser: /QQ/,
  };

  const deviceReg: DeviceReg = {
    iPhone: /iPhone/,
    iPad: /iPad/,
    Android: /Android/,
    Windows: /Windows/,
    Mac: /Macintosh/,
  };

  const userAgentStr: string = navigator.userAgent;
  const userAgentObj = {
    // 浏览器名称
    browserName: '',
    // 浏览器版本
    browserVersion: '',
    // 操作系统名称
    osName: '',
    // 操作系统版本
    osVersion: '',
    // 设备名称
    deviceName: '',
  };

  for (const key in browserReg) {
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
      } else if (key === 'QQBrowser') {
        userAgentObj.browserVersion = userAgentStr.split('Version/')[1].split(' ')[0];
      }
    }
  }

  for (const key in deviceReg) {
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

/**
 * 判断当前运行环境是否为 Node.js
 * @example
 * isNode(); /// true
 * @returns
 * @category Others-业务/其他
 */
export function isNode(): boolean {
  return typeof process !== 'undefined' && !!process.versions && !!process.versions.node;
}

/**
 * 判断当前运行环境是否为浏览器
 * @example
 * isBrowser(); /// true
 * @returns
 * @category Others-业务/其他
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * 检测黑暗模式
 * @example
 * isDarkMode(); /// true
 * @returns
 * @category Others-业务/其他
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
 * @example
 * isAppleDevice(); /// true
 * @returns
 * @category Others-业务/其他
 */
export function isAppleDevice(): boolean {
  return /Mac|iPod|iPhone|iPad/.test(navigator.platform);
}

/**
 * 判断是否客户端渲染
 * @example
 * isCSR(); /// true
 * @returns
 * @category Others-业务/其他
 */
export function isCSR(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * 判断是否 Windows
 * @example
 * isWin(); /// true
 * @returns
 * @category Others-业务/其他
 */
export function isWin(): boolean {
  return typeof navigator !== 'undefined' && /windows|win32/i.test(navigator.userAgent);
}

/**
 * 判断是否 MacOS
 * @example
 * isMac(); /// true
 * @returns
 * @category Others-业务/其他
 */
export function isMac(): boolean {
  return typeof navigator !== 'undefined' && /Macintosh/i.test(navigator.userAgent);
}

/**
 * 判断是否 Chrome 内核
 * @example
 * isChrome(); /// true
 * @returns
 * @category Others-业务/其他
 */
export function isChrome(): boolean {
  return typeof navigator !== 'undefined' && navigator.userAgent.indexOf('Chrome') > -1;
}

/**
 * 版本号比对算法
 * @example
 * checkVersion('1.0.1-rc', '1.0.0', '-rc'); /// 1
 * checkVersion('1.0.0', '1.0.1'); /// -1
 * checkVersion('1.0.0', '1.0.0'); /// 0
 * @param targetVersion 目标版本
 * @param currentVersion 当前版本
 * @param testStr 需要替换的字符串 default(-rc)
 * @returns
 * @category Others-业务/其他
 */
export function checkVersion(targetVersion: string, currentVersion: string, testStr = '-rc'): -1 | 1 | 0 {
  const targetVersionList: string[] = targetVersion.replace(testStr, '').split('.');
  const currentVersionList: string[] = currentVersion.replace(testStr, '').split('.');
  const length: number =
    targetVersionList.length > currentVersionList.length ? targetVersionList.length : currentVersionList.length;

  for (let i = 0; i < length; i++) {
    const targetVersionValue: number = i < targetVersionList.length ? parseInt(targetVersionList[i] ?? 0) : 0;
    const currentVersionValue: number = i < currentVersionList.length ? parseInt(currentVersionList[i] ?? 0) : 0;

    if (targetVersionValue > currentVersionValue) {
      return 1;
    }

    if (targetVersionValue < currentVersionValue) {
      return -1;
    }
  }

  return 0;
}

/**
 * 版本号升级算法
 * @example
 * versionUpgrade('0.0.1'); /// '0.0.2'
 * versionUpgrade('0.0.0.9'); /// '0.0.0.10'
 * versionUpgrade('0.0.0.9', 9); /// '0.0.1.0'
 * versionUpgrade('0.0.9.9', 9); /// '0.1.0.0'
 * @param version 版本号
 * @param maxVersionCode 最大版本号
 * @returns
 * @category Others-业务/其他
 */
export function versionUpgrade(version: string, maxVersionCode = 99): string {
  if (maxVersionCode == 0) {
    maxVersionCode = 99;
  }
  let tempVersionArr = version.split('.').map((v) => Number(v));
  const nan = tempVersionArr.some((v) => isNaN(v));
  if (nan) {
    return version;
  }
  tempVersionArr = tempVersionArr.reverse();
  let check = true;
  tempVersionArr.forEach((v, i) => {
    if (check) {
      if (v >= maxVersionCode) {
        tempVersionArr[i] = 0;
      } else {
        check = false;
        tempVersionArr[i] = tempVersionArr[i] + 1;
      }
    }
  });
  return tempVersionArr.reverse().join('.');
}

/**
 * 处理 rh 血型
 * @example
 * formatRh('**d**'); /// '阴性'
 * formatRh('**d**', { format: [true, false], default: false }); /// true
 * @param input 输入值
 * @param options 处理配置
 * @returns
 * @category Others-业务/其他
 */
export function formatRh(
  input: string,
  options?: {
    format?: [string | number | boolean, string | number | boolean];
    default?: string | number | boolean;
    negative?: Array<string>;
    positive?: Array<string>;
  },
): string | boolean | number {
  const defaultOptions = {
    format: ['阴性', '阳性'],
    default: '-',
    negative: ['阴性', '-', '**d**'],
    positive: ['阳性', '+', '**D**'],
  };
  const {
    negative,
    positive,
    format,
    default: def,
  } = {
    ...defaultOptions,
    ...options,
  };
  if (negative.includes(input)) {
    return format[0];
  }
  if (positive.includes(input)) {
    return format[1];
  }
  if (input.includes('d')) {
    return format[0];
  }
  if (input.includes('D')) {
    return format[1];
  }
  return def;
}

/**
 * 是否阴性血
 * @example
 * isRhNegative('**d**'); /// true
 * @param input 输入值
 * @returns
 * @category Others-业务/其他
 */
export function isRhNegative(input: string): boolean {
  return formatRh(input, { format: [true, false], default: false }) as boolean;
}

/**
 * 获取血型枚举信息
 * @example
 * getBloodGroup('A'); /// { value: 'A', label: 'A 型', color: '#1890FF', lower: 'a', upper: 'A' }
 * @param bloodGroup 血型
 * @returns
 * @category Others-业务/其他
 */
export function getBloodGroup(bloodGroup: string): {
  value: string;
  label: string;
  color: string;
  lower: string;
  upper: string;
} {
  const keyList = ['A', 'a', 'B', 'b', 'O', 'o', 'AB', 'ab'];
  bloodGroup = keyList.includes(bloodGroup) ? bloodGroup.toUpperCase() : 'unknown';
  return BLOOD_GROUP_INFO[bloodGroup];
}

/**
 * 生成 cron 表达式
 * @example
 * calcCron(); /// '* * * * *'
 * calcCron({ minute: '30', hour: '1', day: '10'}); /// '30 1 10 * *'
 * calcCron({  week: '?' }); /// '* * * * ?'
 * calcCron({ week: '*' }); /// '* * * * *'
 * calcCron({ week: 0 }); /// '* * * * 0'
 * calcCron({ week: '0' }); /// '* * * * 0'
 * calcCron({ week: '7' }); /// '* * * * 0'
 * calcCron({ week: 'SUN,天,日,六,6,5' }); /// '* * * * 0,5,6'
 * calcCron({ day: '1-5' }); /// '* * 1-5 * * '
 * calcCron({ day: '1,5' }); /// '* * 1,5 * * '
 * calcCron({ day: '1/5' }); /// '* * 1/5 * * '
 * @param options cron 配置
 * @returns
 * @category Others-业务/其他
 */
export function calcCron({ minute = '*', hour = '*', day = '*', month = '*', week = '*' } = {}) {
  const limits = [
    // 分钟 (0-59)
    [0, 59],
    // 小时 (0-23)
    [0, 23],
    // 日期 (1-31)
    [1, 31],
    // 月份 (1-12)
    [1, 12],
    // 星期 (0-7 或 SUN-SAT)
    [0, 7],
  ];

  let weekField: any = week;

  // 将星期转换为 0-7 格式
  if (typeof weekField === 'number') {
    if (weekField < 0 || weekField > 7) {
      throw new Error('Invalid Week Field!');
    }
    weekField = weekField.toString();
  } else if (typeof weekField === 'string' && weekField !== '*' && weekField !== '?') {
    const weekMap: any = {
      SUN: 0,
      MON: 1,
      TUE: 2,
      WED: 3,
      THU: 4,
      FRI: 5,
      SAT: 6,
      日: 0,
      一: 1,
      二: 2,
      三: 3,
      四: 4,
      五: 5,
      六: 6,
      天: 0,
      '0': 0,
      '1': 1,
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 0,
    };

    const weekList = weekField.split(',').map((weekItem) => {
      const weekUpper = weekItem.toUpperCase();
      const mappedWeek = weekMap[weekUpper];
      if (mappedWeek === undefined) {
        throw new Error('Invalid Week Field!');
      }
      return mappedWeek;
    });
    weekField = [...new Set(weekList)].sort().join(',');
  }

  const fields = [minute, hour, day, month, weekField];

  // 验证输入
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    const [min, max] = limits[i];

    if (typeof field === 'string') {
      if (field === '*' || field === '?' || field === '*/1') {
        continue;
      }

      if (field.startsWith('*/')) {
        const step = parseInt(field.slice(2));
        if (step > 0 && step <= max) {
          continue;
        }
      }

      const parts = field.split(',');

      if (parts.length > 1) {
        if (parts.every((part) => _isValidCronField(part, min, max))) {
          continue;
        }
      }

      const [field1, field2] = field.split('-');

      if (field1 && field2 && _isValidCronField(field1, min, max) && _isValidCronField(field2, min, max)) {
        continue;
      }

      if (_isValidCronField(field, min, max)) {
        continue;
      }
    }

    throw new Error(`Invalid Field: ${field}`);
  }

  // 输出 cron 表达式
  return `${fields.join(' ')}`;
}

/**
 * 在页面上打印数据，我们打包通常会设置清除 console，使用此函数打印关键信息就不会被清除啦。
 * @example
 * log([1, 2, 2, 3, 3], {a: 1, b: 2}, 'test', true); /// 打印数据
 * log('danger'); /// 打印数据
 * @param args 打印数据 rest 参数
 * @returns
 * @category Extra-日志/调试
 */
export function log(...args: any[]): string {
  try {
    // eval(
    //   `console.log('%c 日志[${formatDate(
    //     new Date(),
    //   )}]----->', 'color:#1890FF;font-size:10px;margin-right:5px', ...JSON.parse('${JSON.stringify(args)}'));`,
    // );
    // 确保对象中的 JSON 字符串不会干扰 JavaScript 解析器。
    const formattedArgs = args.map((arg) => {
      // eslint-disable-next-line no-prototype-builtins
      if (typeof arg === 'object' && arg !== null && arg.hasOwnProperty('toJSON')) {
        return arg.toJSON();
      } else {
        return arg;
      }
    });
    const code = `console.log('%c日志[${formatDate(
      new Date(),
    )}]----->\\n', 'color:#1890FF;font-size:10px;margin-right:5px', ...${JSON.stringify(formattedArgs).replace(
      /</g,
      // 防止 xss
      '\\u003c',
    )});`;
    const fn = new Function(code);
    fn();
  } catch (e) {
    console.log(...args, e);
  }
  return `\n[${formatDate(new Date())}] =====>\n (---${JSON.stringify(args)}---)\n`;
}

/**
 * 强制转化为字符串，避免导出表格显示科学计数法。
 * @example
 * forceToStr(123123123); /// '123123123'
 * forceToStr(undefined); /// '-'
 * forceToStr(undefined, 0); /// '0'
 * @param value 值
 * @param defaultValue 默认值
 * @returns
 * @category Tools-字符串相关
 */
export function forceToStr(value: any, defaultValue = '-'): string {
  // \t \u200c u200d 也可以
  return `\u200b${value ?? defaultValue ?? '-'}`;
}

/**
 * 华氏/摄氏度互转
 * @example
 * transferTemperature(30.5); /// '86.9 °F'
 * transferTemperature(86, false, false); /// 30
 * @returns
 * @category Others-业务/其他
 */
export function transferTemperature(temperature: number | string, isCelsius = true, addSuffix = true) {
  temperature = Number(temperature);
  let convertedTemperature;

  if (isCelsius) {
    // 将摄氏度转换为华氏度
    convertedTemperature = (temperature * 9) / 5 + 32;
    if (addSuffix) {
      return parseFloat(convertedTemperature.toFixed(2)) + ' °F';
    } else {
      return parseFloat(convertedTemperature.toFixed(2));
    }
  } else {
    // 将华氏度转换为摄氏度
    convertedTemperature = ((temperature - 32) * 5) / 9;
    if (addSuffix) {
      return parseFloat(convertedTemperature.toFixed(2)) + ' °C';
    } else {
      return parseFloat(convertedTemperature.toFixed(2));
    }
  }
}

/**
 * 获取数据，支持格式化，默认值。
 * @example
 * getDataStr(123123123); /// '123123123'
 * getDataStr(undefined); /// '-'
 * getDataStr(undefined, 0); /// '0'
 * getDataStr('test', '', '(', ')'); /// '(test)'
 * getDataStr(undefined, '', '(', ')'); /// ''
 * getDataStr(false); /// 'false'
 * @param value 值
 * @param defaultValue 默认值
 * @param prefix 前缀
 * @param suffix 后缀
 * @returns
 * @category Others-业务/其他
 */
export function getDataStr(value: any, defaultValue = '-', prefix = '', suffix = ''): string {
  value = value !== undefined ? value : defaultValue !== undefined ? defaultValue : '-';
  return value !== defaultValue ? `${prefix}${value}${suffix}` : `${value}`;
}

/**
 * 清理对象中的空值，将 `null` 和 `undefined` 删除或替换。
 * @param obj 需要清理的对象
 * @param replacement 替换值，默认为 `undefined`，如果传入值则替换为该值。
 * @returns
 * @example
 * clearObject({ a: 1, b: null, c: undefined, d: '', e: '   ' }); /// 返回: { a: 1 }
 * clearObject({ a: 1, b: null, c: undefined, d: '', e: '   ' }, ''); /// 返回: { a: 1, b: '', c: '', d: '', e: '' }
 * @category Others-业务/其他
 */
export function clearObject(obj: any, replacement?: any) {
  if (typeof obj !== 'object' || obj === null || !obj) return {};
  const delKeys: any = [];
  const res = Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      // 替换空值为指定的 replacement 值
      // @ts-ignore
      if ([null, undefined, '']?.includes(typeof value !== 'string' ? value : value.trim())) {
        if (replacement === undefined) {
          delKeys.push(key);
        }
        return [key, replacement !== undefined ? replacement : undefined];
      }
      return [key, value];
    }),
  );
  delKeys.forEach((key: string) => delete res[key]);
  return res;
}

/**
 * 比较两个值是否相等，支持严格模式和忽略大小写的比较。
 * @example
 * compareTo(1, 2); /// false
 * compareTo('a', 'A'); /// true
 * compareTo('a', 'A', true); /// false
 * compareTo(3, 3); /// true
 * compareTo(2, '2'); /// true
 * compareTo('apple', 'banana'); /// false
 * compareTo('2', 2, true); /// false
 * compareTo('2', 2); /// true
 * @param value1 第一个值
 * @param value2 第二个值
 * @param strict 是否启用严格模式: true 表示严格比较，false 表示忽略大小写和类型比较，默认值为 false 。
 * @returns
 * @category Others-业务/其他
 */
export function compareTo(value1: any, value2: any, strict = false): boolean {
  if (strict) {
    return value1 === value2;
  }

  return `${value1}`.toLowerCase() === `${value2}`.toLowerCase();
}

/**
 * 获取转换后树的映射对象、数组 `{ map: any, list: any[] }`
 * @example
 * getTreeData(treeData, 'id'); /// { map: any, list: any[] }
 * getTreeData(treeData, 'data.id'); /// { map: any, list: any[] }
 * @param treeData 树值
 * @param key key
 * @returns
 * @category Others-Tree
 */
export function getTreeData(treeData: any[], key = 'key'): { map: any; list: any[] } {
  const result: { map: any; list: any[] } = {
    map: {},
    list: [],
  };

  if (!treeData) {
    return result;
  }

  function traverse(node: any, parent?: any): any {
    if (!node) {
      return;
    }

    const data = getV(null, node, key);
    if (data) {
      const newNode = {
        ...node,
        parent: parent,
      };
      result.list.push(newNode);
      result.map[data] = newNode;
    }

    if (node.children && Array.isArray(node.children)) {
      node.children.forEach((i: any) => traverse(i, data));
    }
  }

  treeData.forEach(traverse);

  return result;
}

/**
 * 过滤树级数据，并支持显示完整结构。
 * @example
 * searchTreeData(treeData, '测试搜索关键字', 'id'); /// ...
 * searchTreeData(treeData, '测试搜索关键字', ['key', 'title']); /// ...
 * searchTreeData(treeData, '测试搜索关键字', ['data.key', 'title'], true); /// ...
 * @param treeData 树值
 * @param searchText 过滤的值
 * @param searchKeys 用于过滤的 key
 * @param strictMode 搜索配置 strictMode 时，会强制平铺排列返回符合条件的节点，默认不开启，保持树排列。
 * @returns
 * @category Others-Tree
 */
export function searchTreeData(
  treeData: any[],
  searchText: string,
  searchKeys: string | string[] = ['key', 'title'],
  strictMode = false,
): any[] {
  if (!searchText || !treeData) {
    return treeData;
  }
  // treeData = JSON.parse(JSON.stringify(treeData));
  searchText = trim(searchText).toLowerCase();
  // @ts-ignore
  const newSearchKeys: string[] = [].concat(searchKeys);
  return treeData.reduce((filteredTree, node: any) => {
    if (newSearchKeys.some((i) => `${getV('', node, i)}`.toLowerCase().includes(searchText))) {
      const filteredNode = node;
      filteredTree.push(filteredNode);
      if (strictMode && filteredNode?.children?.length) {
        filteredTree.push(...searchTreeData(node.children, searchText, searchKeys, strictMode));
        filteredNode.children = undefined;
      }
    } else if (node.children) {
      if (strictMode) {
        filteredTree.push(...searchTreeData(node.children, searchText, searchKeys, strictMode));
      } else {
        const filteredChildren = searchTreeData(node.children, searchText, searchKeys, strictMode);

        if (filteredChildren?.length) {
          const filteredNode = { ...node, children: filteredChildren };
          filteredTree.push(filteredNode);
        }
      }
    }

    return filteredTree;
  }, []);
}

/**
 * 转换数组数据为树状数据
 * @example
 * transferTreeData(treeData); /// ...
 * transferTreeData(treeData, { labelKey: 'title', valueKey: 'key', parentKey: 'parent' }); /// ...
 * @param sourceData 源数据
 * @param options 转化选项
 * @returns
 * @category Others-Tree
 */
export function transferTreeData(
  sourceData: any[],
  options: { labelKey: string; valueKey: string; parentKey: string } = {
    labelKey: 'title',
    valueKey: 'key',
    parentKey: 'parent',
  },
): any[] {
  if (!sourceData) {
    return sourceData;
  }
  const { labelKey, valueKey, parentKey } = options;
  // 构建节点映射表
  const nodeMap = new Map<string, any>();
  const allKeys: any[] = [];
  sourceData.forEach((item) => {
    const label = item[labelKey];
    const value = item[valueKey];
    const parent = item[parentKey];

    const treeNode: any = {
      label,
      value,
      title: label,
      key: value,
      parent,
      ...item,
      children: undefined,
    };

    allKeys.push(value);
    nodeMap.set(value, treeNode);
  });

  // 关联父子节点
  sourceData.forEach((item) => {
    const value = item[valueKey];
    const parentNode = nodeMap.get(item[parentKey]);

    if (parentNode) {
      if (!parentNode.children) {
        parentNode.children = [];
      }
      parentNode.children.push(nodeMap.get(value));
    }
  });

  // 查找根节点
  const rootNodes: any[] = [];
  sourceData.forEach((item) => {
    const value = item[valueKey];
    const treeNode = nodeMap.get(value);
    const parent = item[parentKey];
    if (!allKeys.includes(parent)) {
      rootNodes.push(treeNode);
    }
  });
  return rootNodes;
}

/**
 * 获取筛选后的树数据，自定义方法。
 * @example
 * filterTreeData(treeData, (item) => item); /// ...
 * filterTreeData(treeData, (item) => filterIds.includes(item.id)); /// ...
 * @param treeData 树值
 * @param callback 过滤的方法，默认不过滤。
 * @returns
 * @category Others-Tree
 */
export function filterTreeData(treeData: any[], callback?: (item: any) => boolean): any[] {
  if (!callback || !treeData) {
    return treeData;
  }
  // treeData = JSON.parse(JSON.stringify(treeData));
  const results: any[] = [];

  treeData.forEach((item) => {
    const clonedItem = { ...item }; // 使用浅拷贝避免修改原始数据

    if (!clonedItem.children && !callback(clonedItem)) {
      return;
    }

    if (clonedItem.children) {
      clonedItem.children = filterTreeData(clonedItem.children, callback);
    }

    if (callback(clonedItem) || clonedItem.children?.length) {
      results.push(clonedItem);
    }
  });

  return results;
}

/**
 * 主动获取树的半选/全选节点
 * @example
 * getTreeCheckNodes(treeData, ['0-0', '0-1']); /// ...
 * getTreeCheckNodes(treeData, ['0-0', '0-1'], ['0']); /// ...
 * @param treeData 树值
 * @param checkedKeys 已经全选的节点
 * @param halfCheckedKeys 已经半选的节点
 * @returns
 * @category Others-Tree
 */
export function getTreeCheckNodes(treeData: any[], checkedKeys: any[], halfCheckedKeys?: any[]) {
  // 将 treeData 转化为一个映射，以便查找节点和其父节点的关系。
  const nodeMap = new Map();
  const parentMap = new Map();
  const checkedSet = new Set(checkedKeys ?? []);
  const halfCheckedSet = new Set(halfCheckedKeys ?? []);

  // 构建节点映射和父节点映射
  const buildNodeMaps = (data: any, parentKey = null) => {
    data.forEach((node: any) => {
      const { key, children } = node;
      nodeMap.set(key, node);
      parentMap.set(key, parentKey);
      if (children) {
        buildNodeMaps(children, key);
      }
    });
  };

  buildNodeMaps(treeData);

  // 处理 checkedKeys 和 halfCheckedKeys
  const processCheckedKeys = (node: any, key: any) => {
    if (!node || !node?.children) {
      return;
    }

    const children = node?.children || [];

    const allSiblingsChecked = children.every((child: any) => checkedSet.has(child.key));
    const allSiblingsUnchecked = children.every((child: any) => !checkedSet.has(child.key));
    const allSiblingsUncheckedHalf = children.every((child: any) => !halfCheckedSet.has(child.key));

    if (allSiblingsChecked) {
      // 若节点的子节点全部选中，则节点添加到 checkedSet 中，从 halfCheckedSet 中剔除。
      checkedSet.add(key);
      halfCheckedSet.delete(key);
    } else if (allSiblingsUnchecked && allSiblingsUncheckedHalf) {
      // 若节点的子节点都没有选中，则节点从 checkedSet 和 halfCheckedSet 中剔除。
      checkedSet.delete(key);
      halfCheckedSet.delete(key);
    } else {
      // 若节点的子节点部分选中，则节点从 checkedSet 中剔除，添加到 halfCheckedSet 中。
      checkedSet.delete(key);
      halfCheckedSet.add(key);
    }

    const parentKey = parentMap.get(key);
    if (parentKey) {
      processCheckedKeys(nodeMap.get(parentKey), parentKey);
    }
  };

  // 遍历所有的节点，检查并处理。
  nodeMap.forEach((node, key) => {
    processCheckedKeys(node, key);
  });

  const newCheckedKeys = Array.from(checkedSet);
  const newHalfCheckedKeys = Array.from(halfCheckedSet);

  return {
    nodeMap,
    parentMap,
    checkedKeys: newCheckedKeys.length ? newCheckedKeys : undefined,
    halfCheckedKeys: newHalfCheckedKeys.length ? newHalfCheckedKeys : undefined,
  };
}

/**
 * 生成 table columns 数组
 * @example
 * const fields = [
 *   { label: 'Name', value: 'name' },
 *   { label: 'Email', key: 'email' },
 *   { label: 'Age' },
 * ];
 * const columns = getTableColumns(fields);
 * console.log(columns);
 * // Output: [
 * //   { title: 'Name', dataIndex: 'name', key: 'name', label: 'Name', value: 'name' },
 * //   { title: 'Email', dataIndex: 'email', key: 'email', label: 'Email' },
 * //   { title: 'Age', dataIndex: 'Age', key: 'Age', label: 'Age' },
 * // ]
 * @param fields 基础数据
 * @returns
 * @category Others-TableColumns
 */
export function getTableColumns(
  fields: Array<{
    label?: string;
    title?: string;
    dataIndex?: string;
    value?: string;
    key?: string;
    width?: number | string;
    align?: 'left' | 'center' | 'right';
    fixed?: 'left' | 'right' | false;
    hidden?: boolean;
    ellipsis?: boolean | any;
    defaultSortOrder?: 'ascend' | 'descend' | string;
    colSpan?: number;
    className?: string;
    sorter?: any;
    search?: any;
    showSearch?: boolean;
    render?: (text: any, record: any, index: number) => any;
    [key: string]: any;
  }>,
): Array<{
  label?: string;
  title?: string;
  dataIndex?: string;
  value?: string;
  key?: string;
  width?: number | string;
  align?: 'left' | 'center' | 'right';
  fixed?: 'left' | 'right' | false;
  hidden?: boolean;
  ellipsis?: boolean | any;
  defaultSortOrder?: 'ascend' | 'descend' | string;
  colSpan?: number;
  className?: string;
  sorter?: any;
  search?: any;
  showSearch?: boolean;
  render?: (text: any, record: any, index: number) => any;
  [key: string]: any;
}> {
  return fields.map((field) => {
    const { dataIndex, title, label, value, key } = field;

    const myKey = dataIndex || value || key || title || label;

    if (!myKey) {
      console.warn('Warning: At least one of "dataIndex", "value", "key", "title", or "label" must be provided.');
    }

    return {
      ...field,
      title: title || label || '',
      dataIndex: myKey,
      key: myKey,
    };
  });
}

/**
 * 播放音频
 * @param input 声音类型或者音频路径
 * @example
 * playAudio('path/to/custom.mp3');
 * @returns
 * @category Others-音频
 */
export function playAudio(input: string) {
  const audioPath = input;

  if (!audioPath) {
    console.error('No valid audio file path provided.');
    return;
  }

  const mp3 = new Audio(audioPath);
  mp3.play().catch((error) => {
    console.error('Failed to play audio:', error);
  });
}

/**
 * Mock 数据类型
 * @category Others-Mock&模拟数据
 */
export type MockDataType = 'string' | 'number' | 'boolean' | 'date' | 'array' | 'object' | 'null' | 'undefined';

/**
 * Mock 数据选项
 * @category Others-Mock&模拟数据
 */
export interface MockOptions {
  min?: number; // 用于生成数字的最小值
  max?: number; // 用于生成数字的最大值
  length?: number; // 用于生成字符串或数组的长度
  arrayTypes?: Array<MockDataType | { type: MockDataType; options?: MockOptions }>; // 用于生成数组的元素类型
  objectKeys?: { [key: string]: MockDataType | { type: MockDataType; options?: MockOptions } }; // 用于生成对象的键和值类型，支持额外的选项
  startDate?: Date; // 用于生成日期的开始时间
  endDate?: Date; // 用于生成日期的结束时间
  format?: string | false; // 用于生成日期的格式，格式化可选 'yyyy-mm-dd hh:ii:ss' 或 false 返回 Date 对象
}

/**
 * 生成 Mock 模拟数据的方法
 * @param type 要生成的数据类型
 * @param options 生成数据的选项
 * @example
 * getMockData('string', { length: 10 }); /// "aB3dE6gH1j"
 * getMockData('number', { min: 10, max: 100 }); /// 42
 * getMockData('boolean'); /// true
 * getMockData('date', { startDate: new Date(2020, 0, 1), endDate: new Date(2021, 0, 1) }); /// "2020-06-15 12:34:56"
 * getMockData('date', { format: false }); /// Date object
 * getMockData('object', { objectKeys: { name: 'string', age: 'number', birthDate: { type: 'date', options: { format: 'yyyy/mm/dd' } } } }); /// { name: "aBc", age: 25, birthDate: "1995/05/17" }
 * getMockData('array', { length: 5, arrayTypes: ['string', 'number'] }); /// [ "aB3", 42, "xYz", 7, "MN1" ]
 * getMockData('array', { length: 5, objectKeys: { name: 'string', age: 'number', birthDate: { type: 'date', options: { format: 'yyyy/mm/dd' } } } }); /// [{ name: "aBc", age: 25, birthDate: "1995/05/17" } * 5 ......]
 * getMockData('array', { length: 5, arrayTypes: [{ type: 'object', objectKeys: { name: 'string', age: 'number', birthDate: { type: 'date', options: { format: 'yyyy/mm/dd' } } } }] }); /// [{ name: "aBc", age: 25, birthDate: "1995/05/17" } * 5 ......]
 * getMockData('array', { length: 10, arrayTypes: ['string', { type: 'number', options: { min: 10, max: 100 } }, { type: 'date', options: { format: 'yyyy/mm/dd' } }] }); /// [47, 49, 'uCp1bxDo', '2003/05/14', 'MUQSOf0W', '2011/07/01', 'nDYZD4Lu', 'YFSCEQvV', '2021/06/03', '1yaIgwhh']
 * @returns
 * @category Others-Mock&模拟数据
 */
export function getMockData(type: MockDataType, options: MockOptions = {}): any {
  // 内部方法用于生成随机字符串
  function _randomString(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  // 内部方法用于生成随机数字
  function _randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // 内部方法用于生成随机布尔值
  function _randomBoolean(): boolean {
    return Math.random() >= 0.5;
  }

  // 内部方法用于生成随机日期
  function _randomDate(
    startDate: Date = new Date(2000, 0, 1),
    endDate: Date = new Date(),
    format?: string | false,
  ): Date | string {
    const date = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    return format === false ? date : formatDate(date, format || 'yyyy-mm-dd hh:ii:ss');
  }

  // 内部方法用于生成随机数组
  function _randomArray(
    length: number,
    types: Array<MockDataType | { type: MockDataType; options?: MockOptions }>,
    objectKeys?: { [key: string]: MockDataType | { type: MockDataType; options?: MockOptions } },
  ): any[] {
    return Array.from({ length }, () => {
      const randomType = types[Math.floor(Math.random() * types.length)];

      if (typeof randomType === 'string') {
        return getMockData(randomType);
      } else if (typeof randomType === 'object') {
        return getMockData(randomType.type, randomType.options);
      } else if (objectKeys) {
        return _randomObject(objectKeys);
      }
    });
  }

  // 内部方法用于生成随机对象
  function _randomObject(keys: {
    [key: string]: MockDataType | { type: MockDataType; options?: MockOptions };
  }): object {
    const obj: any = {};
    for (const key in keys) {
      const valueType = keys[key];
      if (typeof valueType === 'string') {
        obj[key] = getMockData(valueType);
      } else if (typeof valueType === 'object') {
        obj[key] = getMockData(valueType.type, valueType.options);
      }
    }
    return obj;
  }

  // 根据数据类型生成相应的随机数据
  switch (type) {
    case 'string':
      return _randomString(options.length || 8);
    case 'number':
      return _randomNumber(options.min || 0, options.max || 100);
    case 'boolean':
      return _randomBoolean();
    case 'date':
      return _randomDate(options.startDate, options.endDate, options.format);
    case 'array':
      return _randomArray(options.length || 5, options.arrayTypes || ['string'], options.objectKeys);
    case 'object':
      return _randomObject(options.objectKeys || { key: 'string', id: 'number', active: 'boolean' });
    case 'null':
      return null;
    case 'undefined':
      return undefined;
    default:
      throw new Error(`Unsupported data type: ${type}`);
  }
}
