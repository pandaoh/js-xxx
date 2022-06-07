/*
 * @Author: HxB
 * @Date: 2022-04-26 15:54:41
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-06-07 16:47:20
 * @Description: 时间相关方法
 * @FilePath: \js-xxx\src\Date\index.ts
 */

import { trim } from '@/String';

/**
 * 时间格式化
 * Example:
 * `formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss Q S W', ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']) => '2022-04-26 11:33:53 2 123 星期二'`
 * @param date 时间
 * @param fmt 格式化模板 'yyyy-mm-dd hh:ii:ss'
 * @param weeks 星期对应数组 [7, 1, 2, 3, 4, 5, 6]
 * @returns
 */
export function formatDate(
  date?: string | Date,
  fmt: string = 'yyyy-mm-dd hh:ii:ss',
  weeks: any[] = [7, 1, 2, 3, 4, 5, 6]
): string {
  // date.replace(/-/g, '/'); // 虽然 win 浏览器两种符号都可以，但是需兼容 ios。
  date = date ? new Date(date) : new Date();
  let o: any = {
    'm+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'i+': date.getMinutes(),
    's+': date.getSeconds(),
    Q: Math.floor((date.getMonth() + 3) / 3),
    S: `${date.getMilliseconds()}`.padStart(3, '0'),
    W: weeks[date.getDay()]
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, `${date.getFullYear()}`.substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length)); // `${o[k]}`.padStart(RegExp.$1.length, 0) 也可以实现
    }
  }
  return fmt;
}

/**
 * 时间计算
 * Example: `calcDate(new Date(), '-1 days') => date object`
 * Example: `calcDate(new Date(), '-1 DAYS') => date object`
 * Example: `calcDate(new Date(), ['-1 day', '+1 year', '-2 month', '2 weeks', '1 hour', '-3 minute', '45 seconds']) => date object`
 * @param date 时间
 * @param calcStrOrArr '1 days' or ['-1 day', '3 month']
 * @returns
 */
export function calcDate(date: string | Date, calcStrOrArr: string | string[]): Date {
  // date.replace(/-/g, '/'); // 虽然 win 浏览器两种符号都可以，但是需兼容 ios。
  let oldDate = date ? new Date(date) : new Date();
  if (Array.isArray(calcStrOrArr)) {
    calcStrOrArr.forEach((calcStr) => {
      oldDate = calcDate(oldDate, calcStr);
    });
  } else {
    let [val, unit] = trim(calcStrOrArr, 'pro').split(' ');
    let newVal = Number(val);
    let newUnit = unit.toLocaleLowerCase();
    switch (newUnit) {
      case 'year':
      case 'years':
        oldDate.setFullYear(oldDate.getFullYear() + newVal);
        break;
      case 'month':
      case 'months':
        oldDate.setMonth(oldDate.getMonth() + newVal);
        break;
      case 'week':
      case 'weeks':
        oldDate.setDate(oldDate.getDate() + 7 * newVal);
        break;
      case 'day':
      case 'days':
        oldDate.setDate(oldDate.getDate() + newVal);
        break;
      case 'hour':
      case 'hours':
        oldDate.setHours(oldDate.getHours() + newVal);
        break;
      case 'minute':
      case 'minutes':
        oldDate.setMinutes(oldDate.getMinutes() + newVal);
        break;
      case 'second':
      case 'seconds':
        oldDate.setSeconds(oldDate.getSeconds() + newVal);
        break;
    }
  }
  return oldDate;
}

/**
 * 两个时间差距计算
 * Example: `getDateDifference(new Date('2022-05-01'), new Date(), 'day') => 37`
 * Example: `getDateDifference(new Date('2022-05-01'), new Date(), 'all') => {days: 37, hours: 8, minutes: 46, seconds: 47}`
 * @param oldDate 久远一点的时间
 * @param nowDate 近一点的时间，默认当前时间。
 * @param type 计算方式，默认计算差距的精确天数、时分秒。
 * @returns
 */
export function getDateDifference(
  oldDate: string | Date,
  nowDate?: string | Date,
  type:
    | 'all'
    | 'day'
    | 'days'
    | 'hour'
    | 'hours'
    | 'minute'
    | 'minutes'
    | 'second'
    | 'seconds'
    | 'ALL'
    | 'DAY'
    | 'DAYS'
    | 'HOUR'
    | 'HOURS'
    | 'MINUTE'
    | 'MINUTES'
    | 'SECOND'
    | 'SECONDS' = 'all'
): number | { days: number; hours: number; minutes: number; seconds: number } {
  oldDate = new Date(oldDate);
  nowDate = nowDate ? new Date(nowDate) : new Date();
  let diffTime = nowDate.getTime() - oldDate.getTime();
  switch ((type as string).toLocaleLowerCase()) {
    case 'day':
    case 'days':
      return Math.floor(diffTime / 1000 / 60 / 60 / 24);
    case 'hour':
    case 'hours':
      return Math.floor(diffTime / 1000 / 60 / 60);
    case 'minute':
    case 'minutes':
      return Math.floor(diffTime / 1000 / 60);
    case 'second':
    case 'seconds':
      return Math.floor(diffTime / 1000);
    case 'all':
    default:
      return {
        days: Math.floor(diffTime / 1000 / 3600 / 24),
        hours: Math.floor((diffTime / 1000 / 60 / 60) % 24),
        minutes: Math.floor((diffTime / 1000 / 60) % 60),
        seconds: Math.floor((diffTime / 1000) % 60)
      };
  }
}

/**
 * 获取 16 位可读时间戳
 * Example: `getTimeCode() => '2036551026042022'`
 * @returns
 */
export function getTimeCode(): string {
  let dateObj = new Date();
  return `${(Math.random() * 100).toFixed().padEnd(2, '0')}${dateObj.getSeconds().toString().padStart(2, '0')}${dateObj
    .getMinutes()
    .toString()
    .padStart(2, '0')}${dateObj.getHours().toString().padStart(2, '0')}${dateObj
    .getDate()
    .toString()
    .padStart(2, '0')}${String(dateObj.getMonth() + 1).padStart(2, '0')}${dateObj.getFullYear()}`;
}

/**
 * 人性化时间
 * Example: `timeSince(new Date()) => '刚刚'`
 * @param date 时间/string
 * @param longAgo 是否显示周月甚至更久
 * @param formater 正常显示时的时间显示格式
 * @returns
 */
export function timeSince(date?: string | Date, longAgo = false, formater = 'yyyy-mm-dd hh:ii:ss') {
  // date.replace(/-/g, '/'); // 虽然 win 浏览器两种符号都可以，但是需兼容 ios。
  date = date ? new Date(date) : new Date();
  let dateTS = new Date(date).getTime();
  let seconds = Math.floor((new Date().getTime() - dateTS) / 1000);
  let interval = Math.floor(seconds / (24 * 3600));
  if (longAgo) {
    interval = Math.floor(seconds / (30 * 24 * 3600));
    if (interval >= 4) {
      return formatDate(new Date(dateTS), formater);
    }
    if (interval >= 1) {
      return interval + ' 月前';
    }
    interval = Math.floor(seconds / (7 * 24 * 3600));
    if (interval >= 1) {
      return interval + ' 周前';
    }
  }
  if (interval >= 8) {
    return formatDate(new Date(dateTS), formater);
  }
  interval = Math.floor(seconds / (24 * 3600));
  if (interval >= 1) {
    return interval + ' 天前';
  }
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return interval + ' 小时前';
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return interval + ' 分钟前';
  }
  return '刚刚';
}

/**
 * 检查所提供的日期是否为工作日
 * Example: `isWorkDay(new Date()) => true`
 * @param date 日期
 * @returns
 */
export function isWeekday(date?: string | Date): boolean {
  date = date ? new Date(date) : new Date();
  return date.getDay() % 6 !== 0;
}

/**
 * 获取月份天数
 * Example: `getMonthDays(new Date()) => 30`
 * @param date 日期
 * @returns
 */
export function getMonthDays(date?: string | Date): number {
  const curDate = date ? new Date(date) : new Date();
  const curMonth = curDate.getMonth();
  curDate.setMonth(curMonth + 1);
  curDate.setDate(0);
  return curDate.getDate();
}

/**
 * 获取月份天数
 * Example: `getMonthDayCount(new Date()) => 30`
 * @param date 日期
 * @returns
 */
export function getMonthDaysCount(date?: string | Date): number {
  date = date ? new Date(date) : new Date();
  let fullYear = date.getFullYear();
  let month = date.getMonth();
  if ((fullYear % 4 == 0 && fullYear % 100 != 0) || fullYear % 400 == 0) {
    let monthDayCount = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 闰年
    return monthDayCount[month]; // 当前月的天数
  } else {
    //
    let monthDayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 平年
    return monthDayCount[month]; // 当前月的天数
  }
}

/**
 * 获取日期时间戳
 * Example: `getDateTime(new Date()) => time stamp`
 * @param date 日期
 * @returns
 */
export function getDateTime(date?: string | Date): number {
  date = date ? new Date(date) : new Date();
  return date.getTime();
}
