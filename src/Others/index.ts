/* eslint-disable max-lines, indent */
/*
 * @Author: HxB
 * @Date: 2022-04-26 14:53:39
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-08-23 11:39:43
 * @Description: 因项目需要常用函数，不管任何项目，都放到一起。注意甄别，没有复用意义的函数就不要添加了。
 * @FilePath: \js-xxx\src\Others\index.ts
 */

import { formatDate } from '@/Date';
import { isUrl, splitCase } from '@/String';
import { getBSColor } from '@/Tools';
import { getType } from '@/Types';
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
 * 设置网页 icon
 * @example
 * setIcon('/favicon.ico')
 * @param iconLink icon 链接
 * @returns
 */
export function setIcon(iconLink: string) {
  const dom: any = document.querySelector('head [rel="icon"]');
  if (dom) {
    dom.setAttribute('href', iconLink);
    dom.setAttribute('rel', 'icon');
  } else {
    const iconDom = document.createElement('link');
    iconDom.setAttribute('rel', 'icon');
    iconDom.setAttribute('href', iconLink);
    document.querySelector('head')?.appendChild(iconDom);
  }
}

/**
 * 复制到剪贴板
 * @example
 * copyToClipboard('hello world')
 * @param text 内容文本
 * @returns
 */
export function copyToClipboard(text: string) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  }
}

/**
 * 获取鼠标选中内容
 * @example
 * getSelectText()
 * @returns
 */
export function getSelectText() {
  return window?.getSelection()?.toString();
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

// eslint-disable-next-line spellcheck/spell-checker
/**
 * 单击事件转换为多击事件
 * Author: WuXingHeng
 * @example
 * dom.onclick = onClick2MoreClick(300, clickOneCallBack, clickTwoCallBack, clickThreeCallBack, clickFourCallBack); /// void
 * @param delay 点击间隔
 * @param events 事件多击 rest 参数
 * @returns
 */
export function onClick2MoreClick(delay = 300, ...events: Array<any>): any {
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
 * 单独绑定多击事件
 * @example
 * dom.onclick = bindMoreClick(moreClickCallBack, 4, 500); /// 绑定 4 击事件
 * @param fn 触发方法
 * @param times 几次点击触发
 * @param delay 点击间隔
 * @returns
 */
export function bindMoreClick(fn: any, times = 3, delay = 300) {
  // count 从 0 开始
  times = times - 1;
  let timer: any = null;
  let lastTime = 0;
  let count = 0;
  return (...args: any[]) => {
    clearTimeout(timer);
    const currentTime = new Date().getTime();
    count = currentTime - lastTime < delay ? count + 1 : 0;
    lastTime = new Date().getTime();
    if (count === times) {
      timer = setTimeout(() => {
        count = 0;
        lastTime = 0;
        fn(...args);
      }, delay);
    }
  };
}

/**
 * 设置长按事件-支持加入单击事件
 * @example
 * addLongPressEvent(document.querySelector('.img-btn'), (event); /// console.log('addLongPressEvent'), 3000); /// 长按会触发事件
 * @param element 需要绑定事件的元素
 * @param longPressCallback 长按事件函数
 * @param duration 长按时间
 * @param clickCallback 单击事件函数(可选)
 * @returns
 */
export function addLongPressEvent(element: any, longPressCallback: any, duration = 2500, clickCallback?: any) {
  if (!element) {
    return;
  }

  let timer: any;
  let longPressTriggered = false;

  const events = [
    { name: 'mousedown', handler: handleStart },
    { name: 'mouseup', handler: handleEnd },
    { name: 'mouseout', handler: handleEnd },
    { name: 'touchstart', handler: handleStart },
    { name: 'touchend', handler: handleEnd },
    { name: 'touchcancel', handler: handleEnd },
    { name: 'click', handler: handleClick },
  ];

  function handleStart(event: any) {
    start(event);
  }

  function handleEnd() {
    end();
  }

  function handleClick(event: any) {
    if (!longPressTriggered) {
      clickCallback && clickCallback(event);
    }
  }

  function start(event: any) {
    if (timer) return;
    timer = setTimeout(() => {
      longPressTriggered = true;
      longPressCallback && longPressCallback(event);
    }, duration);
  }

  function end() {
    clearTimeout(timer);
    timer = null;
    setTimeout(() => {
      longPressTriggered = false;
    }, 0);
  }

  for (const { name, handler } of events) {
    element.addEventListener(name, handler);
  }

  element.addEventListener('contextmenu', (event: any) => {
    event.preventDefault();
  });
}

/**
 * 触发某个键盘按键事件
 * @example
 * emitKeyboardEvent('keydown', 108); /// 小键盘回车事件
 * @param eventType 事件类型
 * @param keyCode 触发键盘 code
 * @returns
 */
export function emitKeyboardEvent(eventType: 'keydown' | 'keypress' | 'keyup' = 'keydown', keyCode = 13): void {
  const myEvent = new KeyboardEvent(eventType, {
    bubbles: true,
    cancelable: true,
    keyCode: keyCode,
  });
  document.body.dispatchEvent(myEvent);
}

/**
 * 禁用冲突事件，条码枪、关闭窗口快捷键等。
 * @example
 * document.addEventListener('keydown', disableConflictEvent); /// 进入页面后禁用冲突事件
 * document.removeEventListener('keydown', disableConflictEvent); /// 退出页面后关闭监听
 * @param event 触发事件
 * @returns
 */
export function disableConflictEvent(event: any) {
  const keyCode = event.keyCode || event.which || event.charCode;
  const ctrlKey = event.ctrlKey || event.metaKey;
  const altKey = event.altKey;
  if (ctrlKey && keyCode == 74) {
    // ctrl+j 禁用条码枪触发事件
    event.preventDefault();
    emitKeyboardEvent();
  }
  if (altKey && keyCode == 115) {
    // alt+f4 关闭窗口快捷键
    event.preventDefault();
  }
  if (ctrlKey && keyCode == 115) {
    // ctrl+f4 关闭窗口快捷键
    event.preventDefault();
  }
  // true 防止此事件被进一步传播; false 允许此事件继续传播;
  return false;
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
 * 填对应值到对应的 dom 中
 * @example
 * dataTo('.className', 'xxx'); /// xxx 会填入到类名为 class-name 的元素中
 * dataTo('.class-name', 'xxx'); /// xxx 会填入到类名为 class-name 的元素中
 * dataTo('.class_name', 'xxx'); /// xxx 会填入到类名为 class-name 的元素中
 * dataTo('.class.name', 'xxx'); /// xxx 会填入到类名为 class-name 的元素中
 * dataTo('#id.name', 'xxx'); /// xxx 会填入到 id 名为 id-name 的元素中
 * @param key key 值
 * @param value value 值
 * @returns
 */
export function dataTo(key: string, value: any): void {
  let $dom;
  try {
    key = key.toString();
    $dom = document.querySelector((['.'].includes(key.charAt(0)) ? key.charAt(0) : '') + splitCase(key).join('-'));
    if ($dom) {
      $dom.innerHTML = value;
      // @ts-ignore
      $dom.value = value;
    }
  } catch (e) {
    console.log('js-xxx:dataToError--->', e, { key, value, $dom });
  }
}

/**
 * 给对应 dom 生成水印
 * @example
 * watermark(document.body, 'My Watermark', { fontSize: 20, opacity: 0.5, angle: -30, color: 'red', fontFamily: 'Arial', repeat: true, backgroundOpacity: 0.05 });
 * watermark(document.body, 'My Watermark'); /// 在 body 中生成水印
 * watermark(document.body, 'My Watermark', { fontSize: 120, color: 'red', repeat: false, angle: 0 }); /// 在 body 中生成水印
 * watermark(document.body, 'My Watermark', { fontSize: 20, color: 'red', repeat: true, angle: 90 }); /// 在 body 中生成水印
 * @param dom 需要生成水印的 dom
 * @param text 水印内容
 * @param options 样式配置
 * @returns
 */
export function watermark(dom: any, text: string, options: any = {}) {
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
  ctx.font = `${fontSize}px ${fontFamily}`;
  const textWidth = ctx.measureText(text).width;
  const textHeight = fontSize;
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
  ctx.fillText(text, 0, 0);
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
}

/**
 * 获取 cron 表达式
 * @example
 * getCron(); /// '* * * * *'
 * getCron({ minute: '30', hour: '1', day: '10'}); /// '30 1 10 * *'
 * getCron({  week: '?' }); /// '* * * * ?'
 * getCron({ week: '*' }); /// '* * * * *'
 * getCron({ week: 0 }); /// '* * * * 0'
 * getCron({ week: '0' }); /// '* * * * 0'
 * getCron({ week: '7' }); /// '* * * * 0'
 * getCron({ week: 'SUN,天,日,六,6,5' }); /// '* * * * 0,5,6'
 * getCron({ day: '1-5' }); /// '* * 1-5 * * '
 * getCron({ day: '1,5' }); /// '* * 1,5 * * '
 * getCron({ day: '1/5' }); /// '* * 1/5 * * '
 * @param options cron 配置
 * @returns
 */
export function getCron({ minute = '*', hour = '*', day = '*', month = '*', week = '*' } = {}) {
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
export function log(...args: any[]): void {
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
}

/**
 * 在页面上打印某个值
 * 且有更好的可读性与日志标识
 * 每次打印会返回日志字符串，可以统一收集写入到文件保存，或者上传到服务器。
 * @example
 * logVar([1, 2, 2, 3, 3]); /// 打印数据
 * logVar({a: 1, b: 2}, 'danger'); /// 打印数据
 * logVar({a: 1, b: 2}, 'success'); /// 打印数据
 * @param value 打印的值
 * @param logLevel 日志等级
 * @returns
 */
export function logVar(value: any, logLevel = 'info'): string {
  const logColors = getBSColor(logLevel);
  // const varName = Object.keys({ value })[0];
  const varType = getType(value);
  console.log(`%c[${logLevel.toUpperCase()}] %c(${varType}):`, `color:${logColors};`, 'font-weight:bold;', value);
  return `\n[${logLevel.toUpperCase()}] (${varType}) 【${JSON.stringify(value)}】 ~Log Date<${formatDate(
    new Date(),
  )}>\n`;
}

/**
 * 强制转换扫描字符串的特殊字符
 * `/(=)|(<)|(>)|(&)|(%)|(#)|(@)|(~)/g`
 * @example
 * transferScanStr('=900182201234500'); /// '900182201234500'
 * transferScanStr('=<E5433000'); /// 'E5433000'
 * transferScanStr('@123'); /// '123'
 * transferScanStr('#test~'); /// 'test'
 * transferScanStr(undefined); /// ''
 * @param value 值
 * @returns
 */
export function transferScanStr(value: string): string {
  if (!value) {
    return '';
  }
  return `${value}`.replace(/(=)|(<)|(>)|(&)|(%)|(#)|(@)|(~)/g, '');
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
}
