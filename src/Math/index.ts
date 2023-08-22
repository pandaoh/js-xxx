/*
 * @Author: HxB
 * @Date: 2022-04-26 16:24:34
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-08-22 11:00:55
 * @Description: 数学常用函数
 * @FilePath: \js-xxx\src\Math\index.ts
 */

import { TRANSFER_STR } from '@/Data';
import { hasSpecialChar } from '@/String';

/**
 * 除法函数
 * @example
 * div(1, 2); // 0.5
 * div(0.55, 100); // 0.0055
 * @param div1 被除数
 * @param div2 除数
 * @returns
 */
export function div(div1: number | string, div2: number | string): number {
  let div1FloatLen = 0,
    div2FloatLen = 0;
  const tempDiv1 = div1.toString(),
    tempDiv2 = div2.toString();
  try {
    div1FloatLen = tempDiv1.split('.')[1].length; // 获取小数长度
  } catch (e) {
    /* empty */
  }
  try {
    div2FloatLen = tempDiv2.split('.')[1].length;
  } catch (e) {
    /* empty */
  }
  return times(
    Number(tempDiv1.replace('.', '')) / Number(tempDiv2.replace('.', '')),
    Math.pow(10, div2FloatLen - div1FloatLen),
  ); // 转换整数计算再使用科学计数法转换小数位
}

/**
 * 乘法函数
 * @example
 * times(1, 2); // 2
 * times(0.55, 100); // 55
 * @param mul1 被乘数
 * @param mul2 乘数
 * @returns
 */
export function times(mul1: number | string, mul2: number | string): number {
  let mulFloatLen = 0;
  const tempMul1 = mul1.toString(),
    tempMul2 = mul2.toString();
  try {
    mulFloatLen += tempMul1.split('.')[1].length;
  } catch (e) {
    /* empty */
  }
  try {
    mulFloatLen += tempMul2.split('.')[1].length;
  } catch (e) {
    /* empty */
  }
  return (Number(tempMul1.replace('.', '')) * Number(tempMul2.replace('.', ''))) / Math.pow(10, mulFloatLen);
}

/**
 * 加法函数
 * @example
 * add(1, 2); // 3
 * add(0.1, 0.2); // 0.3
 * @param add1 被加数
 * @param add2 加数
 * @returns
 */
export function add(add1: number | string, add2: number | string): number {
  let add1FloatLen = 0,
    add2FloatLen = 0,
    multiple = 1;
  try {
    add1FloatLen = add1.toString().split('.')[1].length;
  } catch (e) {
    /* empty */
  }
  try {
    add2FloatLen = add2.toString().split('.')[1].length;
  } catch (e) {
    /* empty */
  }
  multiple = Math.pow(10, Math.max(add1FloatLen, add2FloatLen));
  return (times(add1, multiple) + times(add2, multiple)) / multiple;
}

/**
 * 减法函数
 * @example
 * sub(1, 2); // -1
 * sub(0.55, 0.1); // 0.45
 * @param sub1 被减数
 * @param sub2 减数
 * @returns
 */
export function sub(sub1: number | string, sub2: number | string): number {
  let sub1FloatLen = 0,
    sub2FloatLen = 0,
    multiple = 1;
  try {
    sub1FloatLen = sub1.toString().split('.')[1].length;
  } catch (e) {
    /* empty */
  }
  try {
    sub2FloatLen = sub2.toString().split('.')[1].length;
  } catch (e) {
    /* empty */
  }
  multiple = Math.pow(10, Math.max(sub1FloatLen, sub2FloatLen));
  return parseFloat(`${(times(sub1, multiple) - times(sub2, multiple)) / multiple}`);
}

/**
 * 获取平均数
 * @example
 * average(1, 2, 3, 4); // 2.5
 * average(1, 2, 3, 4.123); // 2.53075
 * @param args
 * @returns
 */
export function average(...args: any[]) {
  let sum = 0;
  const len = args.length;

  for (let i = 0; i < len; i++) sum = add(sum, args[i]);

  return args.length ? div(sum, len) : 0;
}

/**
 * 获取绝对值
 * @example
 * abs(-1); // 1
 * abs(1); // 1
 * @param value
 * @returns
 */
export function abs(value: number): number {
  return Math.abs(value);
}

/**
 * 检查一个数字是否偶数
 * @example
 * isEven(-2); // true
 * isEven(1); // false
 * @param value
 * @returns
 */
export function isEven(value: number): boolean {
  return value % 2 === 0;
}

/**
 * 去尾法获取数值
 * @example
 * float(1.135, 0, true); // '1'
 * float(1.135, 2, true); // '1.13'
 * float(1.135, 1); // 1.1
 * float(1.135, 4); // 1.135
 * float(1.135, 4, true); // '1.1350'
 * @param value
 * @param d
 * @param isStr
 * @returns
 */
export function float(value: number, d = 0, isStr = false): number | string {
  const arr = `${value}`.split('.');
  const doubleStr = arr.length > 1 ? arr[1].padEnd(d, '0').substring(0, d) : '0'.padEnd(d, '0');
  const res = d === 0 ? arr[0] : `${arr[0]}.${doubleStr}`;
  return isStr ? res : Number(res);
}

/**
 * 判断一个数是否在指定范围
 * @example
 * inRange(null, 0, 3); // false
 * inRange(0, 0, 3); // true
 * inRange(3, 0, 3); // true
 * inRange(5, 0, 3); // false
 * @param value
 * @param min
 * @param max
 * @returns
 */
export function inRange(value: any, min: number, max: number) {
  if (
    value === null ||
    value === undefined ||
    value === '' ||
    value === true ||
    value === false ||
    value.toString() === ''
  ) {
    return false;
  }
  value = Number(value);
  if (isNaN(value)) {
    return false;
  }
  return value >= min && value <= max;
}

/**
 * 获取百分比
 * @example
 * getPercentage(102, 1020, 2); // 10
 * getPercentage(102, 1020, 2, { float: true, suffix: true }); // '10.00%'
 * getPercentage(17, 1020, 2); // 1.67
 * getPercentage(1020, null, 2); // 0
 * getPercentage(0, 1020, 2, { float: false, suffix: true }); // '0%'
 * @param value
 * @param total
 * @param options
 * @returns
 */
export function getPercentage(
  value: any,
  total: any,
  decimals = 0,
  options = {
    float: false,
    suffix: false,
  },
) {
  let result;
  try {
    value = Number(value);
    total = Number(total);
    if (isNaN(value) || isNaN(total) || total === 0) {
      result = options.float ? (0).toFixed(decimals) : 0;
      return options.suffix ? `${result}%` : result;
    }
    const percentage = (value / total) * 100;
    result = options.float ? percentage.toFixed(decimals) : parseFloat(percentage.toFixed(decimals));
    return options.suffix ? `${result}%` : result;
  } catch (e) {
    console.log('js-xxx:getPercentageError--->', e);
    result = options.float ? (0).toFixed(decimals) : 0;
    return options.suffix ? `${result}%` : result;
  }
}

/**
 * 转换数字为大致数字描述
 * @example
 * maskNumber(10000123111); // '100.00 亿'
 * maskNumber(12345); // '1.2 万'
 * maskNumber(123); // '123'
 * @param value
 * @returns
 */
export function maskNumber(value: number): string {
  const newValue = ['', '', ''];
  let fr = 1000;
  let num = 3;
  let text1 = '';
  let fm = 1;
  while (value / fr >= 1) {
    fr *= 10;
    num += 1;
  }
  if (num <= 4) {
    // 千
    newValue[0] = parseInt(value / 1000 + '') + '';
    newValue[1] = ' ' + '千';
  } else if (num <= 8) {
    // 万
    text1 = parseInt(num - 4 + '') / 3 > 1 ? '千万' : '万';
    fm = text1 === '万' ? 10000 : 10000000;
    if (value % fm === 0) {
      newValue[0] = parseInt(value / fm + '') + '';
    } else {
      newValue[0] = parseFloat(value / fm + '').toFixed(1) + '';
    }
    newValue[1] = ' ' + text1;
  } else if (num <= 16) {
    // 亿
    text1 = (num - 8) / 3 > 1 ? '千亿' : '亿';
    text1 = (num - 8) / 4 > 1 ? '万亿' : text1;
    text1 = (num - 8) / 7 > 1 ? '千万亿' : text1;
    fm = 1;
    if (text1 === '亿') {
      fm = 100000000;
    } else if (text1 === '千亿') {
      fm = 100000000000;
    } else if (text1 === '万亿') {
      fm = 1000000000000;
    } else if (text1 === '千万亿') {
      fm = 1000000000000000;
    }
    if (value % fm === 0) {
      newValue[0] = parseInt(value / fm + '') + '';
    } else {
      newValue[0] = parseFloat(value / fm + '').toFixed(2) + '';
    }
    newValue[1] = ' ' + text1;
  }
  if (value < 1000) {
    newValue[0] = value + '';
    newValue[1] = '';
  }
  return newValue.join('');
}

/**
 * 提供进制转换，最大为 64 进制。
 * @example
 * transferNumber(100); // '1100100'
 * transferNumber(1100100, 2, 10); // 100
 * @param number
 * @param from
 * @param to
 * @returns
 */
export function transferNumber(number: number, from = 10, to = 2) {
  let tmp,
    decimal = 0,
    result = '';
  if (!number || hasSpecialChar(`${number}`)) {
    return number;
  }

  try {
    if (from) from = Number(from);
    if (to) to = Number(to);

    // 先将其转换为 10 进制
    tmp = String(number);
    for (let i = 0, j = 1; i < tmp.length; i++, j++) {
      decimal += TRANSFER_STR.indexOf(tmp.charAt(i)) * Math.pow(from, tmp.length - j);
    }
    if (to == 10 || !to) return decimal;

    // 再转换为指定进制
    while (decimal != 0) {
      tmp = decimal % to;
      result = TRANSFER_STR.charAt(tmp) + result;
      decimal = (decimal - tmp) / to;
    }
    return result;
  } catch (e) {
    return number;
  }
}
