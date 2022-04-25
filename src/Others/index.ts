/*
 * @Author: HxB
 * @Date: 2022-04-26 14:53:39
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-26 18:07:04
 * @Description: 因项目需要常用方法，不管任何项目，都放到一起。
 * @FilePath: \js-xxx\src\Others\index.ts
 */

/**
 * 文件大小格式化
 * Example: `formatFileSize(1024) => '1.00 KB'`
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
