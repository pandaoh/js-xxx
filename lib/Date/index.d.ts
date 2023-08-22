/**
 * 时间格式化
 * @example
 * formatDate(new Date(), 'yyyy-mm-dd hh:ii:ss Q S W', ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']); // '2022-04-26 11:33:53 2 123 星期二'
 * @param date 时间
 * @param fmt 格式化模板 'yyyy-mm-dd hh:ii:ss'
 * @param weeks 星期对应数组 [7, 1, 2, 3, 4, 5, 6]
 * @returns
 */
export declare function formatDate(date?: string | Date, fmt?: string, weeks?: any[]): string;
/**
 * 时间计算
 * @example
 * calcDate(new Date(), '-1 days'); // date object
 * calcDate(new Date(), '-1 DAYS'); // date object
 * calcDate(new Date(), ['-1 day', '+1 year', '-2 month', '2 weeks', '1 hour', '-3 minute', '45 seconds']); // date object
 * @param date 时间
 * @param calcStrOrArr '1 days' or ['-1 day', '3 month']
 * @returns
 */
export declare function calcDate(date: string | Date, calcStrOrArr: string | string[]): Date;
/**
 * 两个时间差距计算
 * @example
 * getDateDifference(new Date('2022-05-01'), new Date(), 'day'); // 37
 * getDateDifference(new Date('2022-05-01'), new Date(), 'all'); // {days: 37, hours: 8, minutes: 46, seconds: 47}
 * @param oldDate 久远一点的时间
 * @param nowDate 近一点的时间，默认当前时间。
 * @param type 计算方式，默认计算差距的精确天数、时分秒。
 * @returns
 */
export declare function getDateDifference(oldDate: string | Date, nowDate?: string | Date, type?: 'all' | 'day' | 'days' | 'hour' | 'hours' | 'minute' | 'minutes' | 'second' | 'seconds' | 'ALL' | 'DAY' | 'DAYS' | 'HOUR' | 'HOURS' | 'MINUTE' | 'MINUTES' | 'SECOND' | 'SECONDS'): number | {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};
/**
 * 人性化时间
 * @example
 * timeSince(new Date()); // '刚刚'
 * @param date 时间/string
 * @param longAgo 是否显示周月甚至更久
 * @param formatter 正常显示时的时间显示格式
 * @returns
 */
export declare function timeSince(date?: string | Date, longAgo?: boolean, formatter?: string): string;
/**
 * 检查所提供的日期是否为工作日
 * @example
 * isWorkDay(new Date()); // true
 * @param date 日期
 * @returns
 */
export declare function isWeekday(date?: string | Date): boolean;
/**
 * 获取月份天数
 * @example
 * getMonthDays(new Date()); // 30
 * @param date 日期
 * @returns
 */
export declare function getMonthDays(date?: string | Date): number;
/**
 * 获取日期所在的年份中的天数
 * @example
 * getDayInYear('2023/06/23'); // 174
 * @param date 日期
 * @returns
 */
export declare function getDayInYear(date?: string | Date): number;
/**
 * 获取月份天数
 * @example
 * getMonthDayCount(new Date()); // 30
 * @param date 日期
 * @returns
 */
export declare function getMonthDaysCount(date?: string | Date): number;
/**
 * 获取指定日期数目的数组
 * @example
 * getDateList(7, 'day'); // 得到今天到未来 7 天的日期数组
 * getDateList(-7, 'day'); // 得到今天到之前 7 天的日期数组
 * getDateList(7, 'year'); // 得到今年到未来 7 年的日期数组
 * getDateList(7, 'month'); // 得到本月到未来 7 个月的日期数组
 * getDateList(7, 'day', '2023-02-01'); // 得到 2023-02-01 日到未来 7 天的日期数组
 * @param n 数目
 * @param type 类型
 * @param date 日期
 * @returns
 */
export declare function getDateList(n: number, type?: 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second', date?: any): string[];
/**
 * 获取日期时间戳
 * @example
 * getDateTime(new Date()); // time stamp
 * @param date 日期
 * @returns
 */
export declare function getDateTime(date?: string | Date): number;
/**
 * 获取标准时间 UTC
 * 适用于本地时间不准确或者获取其他时区时间的情况
 * @example
 * getUTCTime(8); // 中国标准时间
 * @param timezone 时区数字，东八区为 8，西八区为 -8 。
 * @returns
 */
export declare function getUTCTime(timezone?: number): Date;
/**
 * 时间大小比较
 * -1(A<B), 1(A>B), 0(A=B)
 * @example
 * compareDate('2023-1-1'); // 1
 * compareDate('2023-1-1 12:00:00', '2023-1-2 12:00:00'); // -1
 * @param dateA
 * @param dateB
 * @returns
 */
export declare function compareDate(dateA: any, dateB?: any): -1 | 1 | 0;
/**
 * 倒计时
 * @example
 * console.time('test'); countdown(10, (x) => console.log('--->', x), () => console.timeEnd('test')); // test: 10023.636962890625 ms
 * @param seconds
 * @param callback
 * @param finishCallBack
 * @returns
 */
export declare function countdown(seconds: number, callback?: any, finishCallBack?: any): any;
/**
 * 转换音视频时长，把秒数转换为 hh:ii:ss 格式。
 * @example
 * transferSeconds(1234); // '00:20:34'
 * transferSeconds(1234, true); // {h: '00', i: 20, s: 34}
 * @param duration
 * @param returnObj
 * @returns
 */
export declare function transferSeconds(duration: number, returnObj?: boolean): string | any;
//# sourceMappingURL=index.d.ts.map