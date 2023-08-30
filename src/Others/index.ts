/* eslint-disable max-lines */
/*
 * @Author: HxB
 * @Date: 2022-04-26 14:53:39
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-08-28 14:31:24
 * @Description: 因项目需要常用函数，不管任何项目，都放到一起。注意甄别，没有复用意义的函数就不要添加了。
 * @FilePath: \js-xxx\src\Others\index.ts
 */

import { formatDate } from '@/Date';
import { isUrl } from '@/String';
import { download } from '@/Dom';
import { getContentType } from '@/Request';

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
 * 文件大小格式化
 * @example
 * formatBytes(1024); /// '1.00 KB'
 * @param bytes 文件大小 bytes
 * @param precision 精度
 * @returns
 */
export function formatBytes(bytes: number, precision = 2): string {
  const units: string[] = ['B', 'KB', 'MB', 'GB', 'TB'];
  let pow = Math.floor((bytes ? Math.log(bytes) : 0) / Math.log(1024));
  pow = Math.min(pow, units.length - 1);
  bytes /= 1 << (10 * pow);
  const unit = units?.[pow] ?? units[0];
  return bytes.toFixed(precision) + ' ' + unit;
}

/**
 * 获取浏览器信息
 * @example
 * getUserAgent(); /// { browserName: 'Chrome', browserVersion: '102.0.0.0', osName: 'Windows', osVersion: '10.0', deviceName: '' }
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
 */
export function isNode(): boolean {
  return typeof process !== 'undefined' && !!process.versions && !!process.versions.node;
}

/**
 * 判断当前运行环境是否为浏览器
 * @example
 * isBrowser(); /// true
 * @returns
 */
export function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * 检测黑暗模式
 * @example
 * isDarkMode(); /// true
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
 * @example
 * isAppleDevice(); /// true
 * @returns
 */
export function isAppleDevice(): boolean {
  return /Mac|iPod|iPhone|iPad/.test(navigator.platform);
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
  const bloodGroups: {
    [key: string]: {
      value: string;
      label: string;
      color: string;
      lower: string;
      upper: string;
    };
  } = {
    A: {
      value: 'A',
      label: 'A型',
      color: '#1890FF',
      lower: 'a',
      upper: 'A',
    },
    B: {
      value: 'B',
      label: 'B型',
      color: '#36AE7C',
      lower: 'b',
      upper: 'B',
    },
    O: {
      value: 'O',
      label: 'O型',
      color: '#E64848',
      lower: 'o',
      upper: 'O',
    },
    AB: {
      value: 'AB',
      label: 'AB型',
      color: '#A575F2',
      lower: 'a',
      upper: 'A',
    },
    unknown: {
      value: 'unknown',
      label: '未知',
      color: '#CB9D83',
      lower: 'unknown',
      upper: 'UNKNOWN',
    },
  };
  return bloodGroups[bloodGroup];
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
 */
export function forceToStr(value: any, defaultValue = '-'): string {
  // \t \u200c u200d 也可以
  return `\u200b${value ?? defaultValue ?? '-'}`;
}

/**
 * 转换 data 为可导出的 csv 数据
 * @example
 * transferCSVData([{ prop: 'name' }, { prop: 'age' }], [{ name: '张三', age: 15 }]); /// 可以导出的字符数据
 * transferCSVData([{ label: '姓名', prop: 'name' }, { label: '年龄', prop: 'age' }], [{ name: '张三', age: 15 }]); /// 可以导出的字符数据
 * @param fields 导出的栏位
 * @param data 数据
 * @returns
 */
export function transferCSVData(fields: { label?: string; prop: string }[], data: any[]): string {
  const keys = fields.map((field) => field.prop);
  let result = `${fields.map((field) => forceToStr(field.label ?? field.prop ?? 'unknown')).join(',')}\n`;
  for (let i = 0; i < data.length; i++) {
    const item = data[i] ?? {};
    result += keys.map((key) => forceToStr(item[key])).join(',') + '\n';
  }
  return encodeURIComponent(result);
}

// eslint-disable-next-line spellcheck/spell-checker
/**
 * 导出数据为文件
 * @example
 * exportFile(data); /// 导出 txt 文件
 * exportFile(data, 'csv-导出文件测试', 'csv'); /// 导出 csv 文件
 * exportFile('http://a.biugle.cn/img/cdn/dev/avatar/1.png', 'test', 'png'); /// 导出 png 文件
 * @param data 数据
 * @param fileName 文件名
 * @param fileType 文件类型
 * @returns
 */
export function exportFile(data: string, fileName?: string, fileType = 'txt'): void {
  if (isUrl(data)) {
    // eslint-disable-next-line spellcheck/spell-checker
    download(data, `${fileName ?? formatDate(new Date(), 'yyyy-mm-dd-hhiiss')}.${fileType}`);
    return;
  }
  // 加入特殊字符确保 utf-8
  // eslint-disable-next-line spellcheck/spell-checker
  const uri = `data:${getContentType(fileType)};charset=utf-8,\ufeff${data}`;
  // U+FEFF 是一个零宽度非断字符（Zero Width No-Break Space），也称为“字节顺序标记（Byte Order Mark，BOM）”。
  // eslint-disable-next-line spellcheck/spell-checker
  download(uri, `${fileName ?? formatDate(new Date(), 'yyyy-mm-dd-hhiiss')}.${fileType}`);
  // downloadContent 可以兼容落后浏览器的情况
}
