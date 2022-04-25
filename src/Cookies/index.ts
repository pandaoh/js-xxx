/*
 * @Author: HxB
 * @Date: 2022-04-26 16:29:18
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-26 18:05:16
 * @Description: Cookies 常用方法
 * @FilePath: \js-xxx\src\Cookies\index.ts
 */

/**
 * Get Cookie
 * Example: `getCookie('name') => 获取 name 对应的 Cookie 值`
 * @param key Cookie key
 * @returns
 */
export function getCookie(key: string): any {
  let arr,
    reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
  arr === document.cookie.match(reg) ? unescape(arr[2]) : null;
}

/**
 * Set Cookie
 * Example: `setCookie('name', 'value', 1) => 设置 name 对应的 Cookie 值`
 * @param key Cookie key
 * @param value Cookie value
 * @param expires Cookie expires
 * @returns
 */
export function setCookie(key: string, value: any, expires: number) {
  expires = expires || 30; // 没有设置有效期，默认有效期是 30 天。
  var exp = new Date(); // 获取当前日期
  exp.setTime(exp.getTime() + expires * 24 * 60 * 60 * 1000); // 设置过期日期
  document.cookie = key + '=' + escape(value) + ';expires=' + exp.toUTCString() + ';path=/';
}

/**
 * Remove Cookie
 * Example: `removeCookie('name') => 删除 name 对应的 Cookie`
 * @param key Cookie key
 * @returns
 */
export function removeCookie(key: string) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(key);
  if (cval !== null) {
    document.cookie = key + '=' + cval + ';expires=' + exp.toUTCString() + ';path=/';
  }
}
