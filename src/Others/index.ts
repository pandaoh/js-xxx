/*
 * @Author: HxB
 * @Date: 2022-04-26 14:53:39
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-06-16 14:52:24
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
 * 禁用冲突事件，条码枪、关闭窗口快捷键等。
 * Example:
 * `document.addEventListener('keydown', disableConflictEvent); => 进入页面后禁用冲突事件`
 * `document.removeEventListener('keydown', disableConflictEvent); => 退出页面后关闭监听`
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
  }
  if (altKey && keyCode == 115) {
    // alt+f4 关闭窗口快捷键
    event.preventDefault();
  }
  return false; // true 防止此事件被进一步传播;false 允许此事件继续传播;
}
