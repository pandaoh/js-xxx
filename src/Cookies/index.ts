/*
 * @Author: HxB
 * @Date: 2022-04-26 16:29:18
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-08-23 10:38:45
 * @Description: Cookies 常用函数
 * @FilePath: \js-xxx\src\Cookies\index.ts
 */

/**
 * Get Cookie
 * @example
 * getCookie('name'); /// 获取 name 对应的 Cookie 值
 * @param key Cookie key
 * @returns
 * @category Storage-存储相关
 */
export function getCookie(key: string): any {
  const reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
  // @ts-ignore
  const arr = document.cookie.match(reg) ? unescape(document.cookie.match(reg)[2]) : null;
  return arr;
}

/**
 * Set Cookie
 * @example
 * setCookie('name', 'value', 1); /// 设置 name 对应的 Cookie 值
 * @param key Cookie key
 * @param value Cookie value
 * @param expires Cookie expires
 * @returns
 * @category Storage-存储相关
 */
export function setCookie(key: string, value: any, expires: number) {
  // 没有设置有效期，默认有效期是 30 天。
  expires = expires || 30;
  // 获取当前日期
  const exp = new Date();
  // 设置过期日期
  exp.setTime(exp.getTime() + expires * 24 * 60 * 60 * 1000);
  document.cookie = key + '=' + escape(value) + ';expires=' + exp.toUTCString() + ';path=/';
}

/**
 * Remove Cookie
 * @example
 * removeCookie('name'); /// 删除 name 对应的 Cookie
 * @param key Cookie key
 * @returns
 * @category Storage-存储相关
 */
export function removeCookie(key: string) {
  const exp = new Date();
  exp.setTime(exp.getTime() - 1);
  const cVal = getCookie(key);
  if (cVal !== null) {
    document.cookie = key + '=' + cVal + ';expires=' + exp.toUTCString() + ';path=/';
  }
}

/**
 * Clear Cookie
 * @example
 * clearCookies(); /// 删除所有的 Cookie
 * @returns
 * @category Storage-存储相关
 */
export function clearCookies() {
  document.cookie
    .split(';')
    .forEach(
      (cookie) =>
        (document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`)),
    );
}
