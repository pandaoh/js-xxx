/*
 * @Author: HxB
 * @Date: 2022-04-26 15:54:41
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-26 18:10:48
 * @Description: 时间相关方法
 * @FilePath: \js-xxx\src\Date\index.ts
 */

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
  date: Date,
  fmt: string = 'yyyy-mm-dd hh:ii:ss',
  weeks: any[] = [7, 1, 2, 3, 4, 5, 6]
): string {
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
 * @param longago 是否显示周月甚至更久
 * @param formater 正常显示时的时间显示格式
 * @returns
 */
export function timeSince(date: any, longago = false, formater = 'yyyy-mm-dd hh:ii:ss') {
  if (!date) {
    return;
  }
  date.replace(/-/g, '/'); // 虽然 win 浏览器两种符号都可以，但是需兼容 ios。
  let dateTS = new Date(date).getTime();
  let seconds = Math.floor((new Date().getTime() - dateTS) / 1000);
  let interval = Math.floor(seconds / (24 * 3600));
  if (longago) {
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
export function isWeekday(date: Date): boolean {
  return date.getDay() % 6 !== 0;
}

/**
 * 获取月份天数
 * Example: `getMonthDays(new Date()) => 30`
 * @param date 日期
 * @returns
 */
export function getMonthDays(date: string | number | Date): number {
  const curDate = new Date(date);
  const curMonth = curDate.getMonth();
  curDate.setMonth(curMonth + 1);
  curDate.setDate(0);
  return curDate.getDate();
}
