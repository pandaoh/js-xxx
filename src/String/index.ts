/*
 * @Author: HxB
 * @Date: 2022-04-26 15:45:48
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-26 18:08:01
 * @Description: 字符串常用方法
 * @FilePath: \js-xxx\src\String\index.ts
 */

/**
 * 字符转 unicode
 * Example: `unicode2str("我是老A") => '\\u6211\\u662f\\u8001a'`
 * @param value 中文字符串
 * @returns
 */
export function unicode2str(value: string): string {
  return escape(value).toLocaleLowerCase().replace(/%u/gi, '\\u');
}

/**
 * unicode 转字符
 * Example: `str2unicode("\\u6211\\u662f\\u8001a") => '我是老a'`
 * @param value unicode 字符串
 * @returns
 */
export function str2unicode(value: string): string {
  return unescape(value.replace(/\\u/gi, '%u'));
}

/**
 * 去除字符串空格
 * 可选值：0|ba：去除前后空格，1|b：去除前空格，2|a：去除后空格，3|all：去除所有空格，4|pro：去除所有空格，中间的空格保留一个。
 * Example: `trim('  a  b  ', 4) => 'a b'`
 * @param str 字符串
 * @param type 类型，默认为 0|ba，错误 type 会返回原字符串。
 * @returns
 */
export function trim(str: string, type: number | string = 0): string {
  switch (type) {
    case 0:
    case 'ba':
      return (str = str.trim());
    case 1:
    case 'b':
      return (str = str.replace(/^[\s]*/, ''));
    case 2:
    case 'a':
      return (str = str.replace(/[\s]*$/g, ''));
    case 3:
    case 'all':
      return (str = str.replace(/\s/g, ''));
    case 4:
    case 'pro':
      return (str = str.replace(/(^\s*)|(\s*$)|\s(?=\s)/g, '')); //去除前后空格并将中间的单个空格保留，多个空格变为一个空格。
    default:
      return str;
  }
}

/**
 * base64 编码
 * Example: `base64Encode('我是 leo') => '5oiR5pivIGxlbw=='`
 * @param str 字符串
 * @param replaceChar 是否替换结果字符串中的特殊字符 '+/='
 * @returns
 */
export function base64Encode(str: string, replaceChar: boolean = false): string {
  // btoa(str).replace(/\+\//g, '-_').replace(/=/g, '');
  let result: string = Buffer.from(str, 'utf-8').toString('base64');
  return replaceChar ? result.replace(/\+\//g, '-_').replace(/=/g, '') : result;
}

/**
 * base64 解码
 * Example:
 * `base64Decode('5oiR5pivIGxlbw==') => '我是 leo'`
 * `base64Decode('5oiR5pivIGxlbw') => '我是 leo'`
 * @param str base64 字符串
 * @returns
 */
export function base64Decode(str: string): string {
  // let remainder = str.length % 4;
  // let padlen;
  // if (remainder) {
  //   padlen = 4 - remainder;
  //   str += str.repeat('=', padlen);
  // }
  // return atob(str.replace('-_', '+/'));
  return Buffer.from(str, 'base64').toString('utf8');
}
