/*
 * @Author: HxB
 * @Date: 2022-04-26 14:53:39
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-09-02 10:44:15
 * @Description: 因项目需要常用方法，不管任何项目，都放到一起。注意甄别，没有复用意义的方法就不要添加了。
 * @FilePath: \js-xxx\src\Others\index.ts
 */

/**
 * 文件大小格式化
 * Example: `formatBytes(1024) => '1.00 KB'`
 * @param bytes 文件大小 bytes
 * @param precision 精度
 * @returns
 */
export function formatBytes(bytes: number, precision: number = 2): string {
  let units: string[] = ['B', 'KB', 'MB', 'GB', 'TB'];
  let pow = Math.floor((bytes ? Math.log(bytes) : 0) / Math.log(1024));
  pow = Math.min(pow, units.length - 1);
  bytes /= 1 << (10 * pow);
  let unit = units?.[pow] ?? units[0];
  return bytes.toFixed(precision) + ' ' + unit;
}

/**
 * 设置网页 icon
 * Example: `setIcon('/favicon.ico')`
 * @param iconLink icon 链接
 * @returns
 */
export function setIcon(iconLink: string) {
  let dom: any = document.querySelector('head [rel="icon"]');
  if (dom) {
    dom.setAttribute('href', iconLink);
    dom.setAttribute('rel', 'icon');
  } else {
    let iconDom = document.createElement('link');
    iconDom.setAttribute('rel', 'icon');
    iconDom.setAttribute('href', iconLink);
    document.querySelector('head')?.appendChild(iconDom);
  }
}

/**
 * 复制到剪贴板
 * Example: `copyToClipboard('hello world')`
 * @param text 内容文本
 */
export function copyToClipboard(text: string) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  }
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
 * 单独绑定多击事件
 * Example: `bindMoreClick(moreClickCallBack, 4, 500) => 绑定 4 击事件`
 * @param fn
 * @param times
 * @param delay
 * @returns
 */
export function bindMoreClick(fn: Function | any, times = 3, delay = 300) {
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
 * 触发某个键盘按键事件
 * Example: `emitKeyboardEvent('keydown', 108) => 小键盘回车事件`
 * @param eventType 事件类型
 * @param keyCode 触发键盘 code
 */
export function emitKeyboardEvent(eventType: 'keydown' | 'keypress' | 'keyup' = 'keydown', keyCode: number = 13): void {
  const myEvent = new KeyboardEvent(eventType, {
    bubbles: true,
    cancelable: true,
    keyCode: keyCode
  });
  document.body.dispatchEvent(myEvent);
}

/**
 * 禁用冲突事件，条码枪、关闭窗口快捷键等。
 * Example:
 * `document.addEventListener('keydown', disableConflictEvent) => 进入页面后禁用冲突事件`
 * `document.removeEventListener('keydown', disableConflictEvent) => 退出页面后关闭监听`
 * @param event 触发事件
 * @returns
 */
export function disableConflictEvent(event: any) {
  let keyCode = event.keyCode || event.which || event.charCode;
  let ctrlKey = event.ctrlKey || event.metaKey;
  let altKey = event.altKey;
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
  return false; // true 防止此事件被进一步传播;false 允许此事件继续传播;
}

/**
 * 版本号比对算法
 * Example:
 * `checkVersion('1.0.1-rc', '1.0.0', '-rc') => 1`
 * `checkVersion('1.0.0', '1.0.1') => -1`
 * `checkVersion('1.0.0', '1.0.0') => 0`
 * @param targetVersion
 * @param currentVersion
 * @param testStr default(-rc)
 * @returns
 */
export function checkVersion(targetVersion: string, currentVersion: string, testStr: string = '-rc'): number {
  let targetVersionList: string[] = targetVersion.replace(testStr, '').split('.');
  let currentVersionList: string[] = currentVersion.replace(testStr, '').split('.');
  let length: number =
    targetVersionList.length > currentVersionList.length ? targetVersionList.length : currentVersionList.length;

  for (let i = 0; i < length; i++) {
    let targetVersionValue: number = i < targetVersionList.length ? parseInt(targetVersionList[i] ?? 0) : 0;
    let currentVersionValue: number = i < currentVersionList.length ? parseInt(currentVersionList[i] ?? 0) : 0;

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
 * Example:
 * `versionUpgrade('0.0.1') => '0.0.2'`
 * `versionUpgrade('0.0.0.9') => '0.0.0.10'`
 * `versionUpgrade('0.0.0.9', 9) => '0.0.1.0'`
 * `versionUpgrade('0.0.9.9', 9) => '0.1.0.0'`
 * @param version 版本号
 * @param maxVersionCode 最大版本号
 * @returns
 */
export function versionUpgrade(version: string, maxVersionCode: number = 99): string {
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
 * Example:
 * `formatRh('**d**') => '阴性'`
 * `formatRh('**d**', { format: [true, false], default: false }) => true`
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
  }
): string | boolean | number {
  const defaultOptions = {
    format: ['阴性', '阳性'],
    default: '-',
    negative: ['阴性', '-', '**d**'],
    positive: ['阳性', '+', '**D**']
  };
  const {
    negative,
    positive,
    format,
    default: def
  } = {
    ...defaultOptions,
    ...options
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
 * Example: `isRhNegative('**d**') => true`
 * @param input 输入值
 * @returns
 */
export function isRhNegative(input: string): boolean {
  return formatRh(input, { format: [true, false], default: false }) as boolean;
}

/**
 * 获取血型枚举信息
 * Example: `getBloodGroup('A') => { value: 'A', label: 'A型', color: '#1890FF', lower: 'a', upper: 'A' }`
 * @param bloodGroup
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
      upper: 'A'
    },
    B: {
      value: 'B',
      label: 'B型',
      color: '#36AE7C',
      lower: 'b',
      upper: 'B'
    },
    O: {
      value: 'O',
      label: 'O型',
      color: '#E64848',
      lower: 'o',
      upper: 'O'
    },
    AB: {
      value: 'AB',
      label: 'AB型',
      color: '#A575F2',
      lower: 'a',
      upper: 'A'
    },
    unknown: {
      value: 'unknown',
      label: '未知',
      color: '#CB9D83',
      lower: 'unknown',
      upper: 'UNKNOWN'
    }
  };
  return bloodGroups[bloodGroup];
}
