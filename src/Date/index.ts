/*
 * @Author: HxB
 * @Date: 2022-04-26 15:54:41
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-01-17 15:06:12
 * @Description: 时间相关函数
 * @FilePath: \js-xxx\src\Date\index.ts
 */
import { trim } from '@/String';
import { getType } from '@/Types';

/**
 * 时间格式化
 * @example
 * formatDate(new Date(), 'yyyy-mm-dd hh:ii:ss Q S W', ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']); /// '2022-04-26 11:33:53 2 123 星期二'
 * @param date 时间
 * @param fmt 格式化模板 'yyyy-mm-dd hh:ii:ss'
 * @param weeks 星期对应数组 [7, 1, 2, 3, 4, 5, 6]
 * @returns
 */
export function formatDate(
  date?: string | Date,
  fmt = 'yyyy-mm-dd hh:ii:ss',
  weeks: any[] = [7, 1, 2, 3, 4, 5, 6],
): string {
  // @ts-ignore
  if (getType(date) === 'string' && !date?.includes('T')) {
    // 排除 UTC 时间
    // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
    // @ts-ignore
    date = date.replace(/-/g, '/');
  }
  date = date ? new Date(date) : new Date();
  const o: any = {
    'm+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'i+': date.getMinutes(),
    's+': date.getSeconds(),
    Q: Math.floor((date.getMonth() + 3) / 3),
    S: `${date.getMilliseconds()}`.padStart(3, '0'),
    W: weeks[date.getDay()],
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, `${date.getFullYear()}`.substring(4 - RegExp.$1.length));
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      // `${o[k]}`.padStart(RegExp.$1.length, 0) 也可以实现
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substring(`${o[k]}`.length));
    }
  }
  return fmt;
}

/**
 * 时间计算
 * @example
 * calcDate(new Date(), '-1 days'); /// date object
 * calcDate(new Date(), '-1 DAYS'); /// date object
 * calcDate(new Date(), ['-1 day', '+1 year', '-2 month', '2 weeks', '1 hour', '-3 minute', '45 seconds']); /// date object
 * @param date 时间
 * @param calcStrOrArr '1 days' or ['-1 day', '3 month']
 * @returns
 */
export function calcDate(date: string | Date, calcStrOrArr: string | string[]): Date {
  // @ts-ignore
  if (getType(date) === 'string' && !date?.includes('T')) {
    // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
    // @ts-ignore
    date = date.replace(/-/g, '/');
  }
  let oldDate = date ? new Date(date) : new Date();
  if (Array.isArray(calcStrOrArr)) {
    calcStrOrArr.forEach((calcStr) => {
      oldDate = calcDate(oldDate, calcStr);
    });
  } else {
    const [val, unit] = trim(calcStrOrArr, 'pro').split(' ');
    const newVal = Number(val);
    const newUnit = unit.toLowerCase();
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
 * @example
 * getDateDifference(new Date('2022-05-01'), new Date(), 'day'); /// 37
 * getDateDifference(new Date('2022-05-01'), new Date(), 'all'); /// {days: 37, hours: 8, minutes: 46, seconds: 47}
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
    | 'SECONDS' = 'all',
): number | { days: number; hours: number; minutes: number; seconds: number } {
  // @ts-ignore
  if (getType(oldDate) === 'string' && !oldDate?.includes('T')) {
    // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
    // @ts-ignore
    oldDate = oldDate.replace(/-/g, '/');
  }
  // @ts-ignore
  if (getType(nowDate) === 'string' && !nowDate?.includes('T')) {
    // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
    // @ts-ignore
    nowDate = nowDate.replace(/-/g, '/');
  }
  oldDate = new Date(oldDate);
  nowDate = nowDate ? new Date(nowDate) : new Date();
  const diffTime = nowDate.getTime() - oldDate.getTime();
  switch ((type as string).toLowerCase()) {
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
        seconds: Math.floor((diffTime / 1000) % 60),
      };
  }
}

/**
 * 人性化时间
 * @example
 * timeSince(new Date()); /// '刚刚'
 * @param date 时间/string
 * @param longAgo 是否显示周月甚至更久
 * @param formatter 正常显示时的时间显示格式
 * @returns
 */
export function timeSince(date?: string | Date, longAgo = false, formatter = 'yyyy-mm-dd hh:ii:ss') {
  // @ts-ignore
  if (getType(date) === 'string' && !date?.includes('T')) {
    // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
    // @ts-ignore
    date = date.replace(/-/g, '/');
  }
  date = date ? new Date(date) : new Date();
  const dateTS = date.getTime();
  const seconds = Math.floor((new Date().getTime() - dateTS) / 1000);
  let interval = Math.floor(seconds / (24 * 3600));
  if (longAgo) {
    interval = Math.floor(seconds / (30 * 24 * 3600));
    if (interval >= 4) {
      return formatDate(date, formatter);
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
    return formatDate(date, formatter);
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
 * @example
 * isWorkDay(new Date()); /// true
 * @param date 日期
 * @returns
 */
export function isWeekday(date?: string | Date): boolean {
  // @ts-ignore
  if (getType(date) === 'string' && !date?.includes('T')) {
    // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
    // @ts-ignore
    date = date.replace(/-/g, '/');
  }
  date = date ? new Date(date) : new Date();
  return date.getDay() % 6 !== 0;
}

/**
 * 获取日期所在的年份中的天数
 * @example
 * getDayInYear('2023/06/23'); /// 174
 * @param date 日期
 * @returns
 */
export function getDayInYear(date?: string | Date): number {
  // @ts-ignore
  if (getType(date) === 'string' && !date?.includes('T')) {
    // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
    // @ts-ignore
    date = date.replace(/-/g, '/');
  }
  date = date ? new Date(date) : new Date();
  // @ts-ignore
  return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
}

/**
 * 获取指定日期数目的数组
 * @example
 * getDateList(7, 'day'); /// 得到今天到未来 7 天的日期数组
 * getDateList(-7, 'day'); /// 得到今天到之前 7 天的日期数组
 * getDateList(7, 'year'); /// 得到今年到未来 7 年的日期数组
 * getDateList(7, 'month'); /// 得到本月到未来 7 个月的日期数组
 * getDateList(7, 'day', '2023-02-01'); /// 得到 2023-02-01 日到未来 7 天的日期数组
 * @param n 数目
 * @param type 类型
 * @param date 日期
 * @returns
 */
export function getDateList(
  n: number,
  type: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' = 'day',
  date: any = new Date(),
): string[] {
  // @ts-ignore
  if (getType(date) === 'string' && !date?.includes('T')) {
    // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
    // @ts-ignore
    date = date.replace(/-/g, '/');
  }
  // 包含当天
  let myDate = calcDate(new Date(date), `${n > 0 ? n - 1 : n + 1} ${type}`);
  const dateArray = [];
  let dateTemp;
  const flag = n > 0 ? -1 : 1;
  const formatters = {
    year: 'yyyy',
    month: 'yyyy-mm',
    day: 'yyyy-mm-dd',
    hour: 'yyyy-mm-dd hh:00',
    minute: 'yyyy-mm-dd hh:ii',
    second: 'yyyy-mm-dd hh:ii:ss',
  };
  const tempN = Math.abs(n);
  for (let i = 0; i < tempN; i++) {
    dateTemp = formatDate(myDate, formatters[type]);
    dateArray.push(dateTemp);
    myDate = calcDate(dateTemp, `${flag} ${type}`);
  }
  return flag === 1 ? dateArray : dateArray.reverse();
}

/**
 * 获取日期时间戳
 * @example
 * getDateTime(new Date()); /// time stamp
 * @param date 日期
 * @returns
 */
export function getDateTime(date?: string | Date): number {
  // @ts-ignore
  if (getType(date) === 'string' && !date?.includes('T')) {
    // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
    // @ts-ignore
    date = date.replace(/-/g, '/');
  }
  date = date ? new Date(date) : new Date();
  return date.getTime();
}

/**
 * 时间大小比较
 * -1(A<B), 1(A>B), 0(A=B)
 * @example
 * compareDate('2023-1-1'); /// 1
 * compareDate('2023-1-1 12:00:00', '2023-1-2 12:00:00'); /// -1
 * @param dateA 时间 A
 * @param dateB 时间 B
 * @returns
 */
export function compareDate(dateA: any, dateB?: any): -1 | 1 | 0 {
  // @ts-ignore
  if (getType(dateA) === 'string' && !dateA?.includes('T')) {
    // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
    // @ts-ignore
    dateA = dateA.replace(/-/g, '/');
  }
  // @ts-ignore
  if (getType(dateB) === 'string' && !dateB?.includes('T')) {
    // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
    // @ts-ignore
    dateB = dateB.replace(/-/g, '/');
  }
  dateA = dateA ? new Date(dateA) : new Date();
  dateB = dateB ? new Date(dateB) : new Date();
  const result = dateA.getTime() - dateB.getTime();
  if (result < 0) {
    return -1;
  }
  if (result > 0) {
    return 1;
  }
  return 0;
}

/**
 * 倒计时
 * @example
 * console.time('test'); countdown(10, (x) => console.log('--->', x), () => console.timeEnd('test')); /// test: 10023.636962890625 ms
 * @param seconds 秒数
 * @param callback 回调函数
 * @param finishCallBack 完成回调函数
 * @returns
 */
export function countdown(seconds: number, callback?: any, finishCallBack?: any): any {
  const timer: any = setInterval(() => {
    console.log('js-xxx:countdown-timer-count--->', seconds);
    try {
      callback && callback(seconds);
      seconds--;
      if (seconds === 0) {
        clearInterval(timer);
        finishCallBack && finishCallBack();
      }
    } catch (e) {
      clearInterval(timer);
    }
  }, 1000);
  return timer;
}

/**
 * 转换音视频时长，把秒数转换为 hh:ii:ss 格式。
 * @example
 * transferSeconds(1234); /// '00:20:34'
 * transferSeconds(1234, true); /// {h: '00', i: 20, s: 34}
 * @param duration 时间/秒
 * @param returnObj 是否返回对象
 * @returns
 */
export function transferSeconds(duration: number, returnObj = false): string | any {
  // padStart
  const h = Math.floor(duration / 3600) < 10 ? '0' + Math.floor(duration / 3600) : Math.floor(duration / 3600);
  const i =
    Math.floor((duration / 60) % 60) < 10 ? '0' + Math.floor((duration / 60) % 60) : Math.floor((duration / 60) % 60);
  const s = Math.floor(duration % 60) < 10 ? '0' + Math.floor(duration % 60) : Math.floor(duration % 60);
  if (returnObj) {
    return {
      h,
      i,
      s,
    };
  }
  let res = '';
  if (Number(h) > 0) {
    res += h;
  } else {
    res += '00';
  }
  res += ':';
  if (Number(i) > 0) {
    res += i;
  } else {
    res += '00';
  }
  res += ':';
  if (Number(s) > 0) {
    res += s;
  } else {
    res += '00';
  }
  return res;
}

/**
 * 获取月份天数
 * @example
 * getMonthDayCount(new Date()); /// 30
 * @param date 日期
 * @returns
 */
export function getMonthDayCount(date?: string | Date): number {
  // @ts-ignore
  if (getType(date) === 'string' && !date?.includes('T')) {
    // 虽然 Windows 浏览器两种符号都可以，但是需兼容 Safari 。
    // @ts-ignore
    date = date.replace(/-/g, '/');
  }
  date = date ? new Date(date) : new Date();
  const fullYear = date.getFullYear();
  const month = date.getMonth();
  const isLeapYear = (fullYear % 4 === 0 && fullYear % 100 !== 0) || fullYear % 400 === 0;

  const monthDayCount = isLeapYear
    ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] // 闰年
    : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 平年

  return monthDayCount[month];
}

/**
 * 获取标准时间 UTC
 * 适用于本地时间不准确或者获取其他时区时间的情况
 * @example
 * getUTCTime(8); /// 中国标准时间-东八区
 * @param timezone 时区数字，东八区为 8，西八区为 -8 。
 * @returns
 */
export function getUTCTime(timezone = 0): Date {
  const d = new Date();
  const len = d.getTime();
  // 本地时间与 UTC 时间的时间偏移差
  const offset = d.getTimezoneOffset() * 60000;
  // 得到现在的 UTC 时间，各时区 UTC 时间相同。
  const utcTime = len + offset;
  // 得到时区标准时间
  return new Date(utcTime + 3600000 * timezone);

  // 得到 UTC 时间戳
  // return new Date(utcTime).getTime();
  // 得到时区时间戳
  // return new Date(utcTime + 3600000 * timezone).getTime();
}
