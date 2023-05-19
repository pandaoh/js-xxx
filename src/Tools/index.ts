/* eslint-disable max-lines */
/*
 * @Author: HxB
 * @Date: 2022-04-26 14:10:35
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-05-19 10:26:43
 * @Description: 工具函数
 * @FilePath: \js-xxx\src\Tools\index.ts
 */
import { arraySet } from '@/Array';
import { getType, isPromise, isStr, toBool, toNum } from '@/Types';

/**
 * 根据年份求生肖，年 % 12 。
 */
const ANIMALS: string[] = ['猴', '鸡', '狗', '猪', '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊'];

/**
 * 根据日期获取星座
 */
const CONSTELLATION: any = {
  Capricorn: { cn: '魔羯', en: 'Capricorn', date: '12.22-1.19' },
  Aquarius: { cn: '水瓶', en: 'Aquarius', date: '1.20-2.18' },
  Pisces: { cn: '双鱼', en: 'Pisces', date: '2.19-3.20' },
  Aries: { cn: '白羊', en: 'Aries', date: '3.21-4.19' },
  Taurus: { cn: '金牛', en: 'Taurus', date: '4.20-5.20' },
  Gemini: { cn: '双子', en: 'Gemini', date: '5.21-6.21' },
  Cancer: { cn: '巨蟹', en: 'Cancer', date: '6.22-7.22' },
  Leo: { cn: '狮子', en: 'Leo', date: '7.23-8.22' },
  Virgo: { cn: '处女', en: 'Virgo', date: '8.23-9.22' },
  Libra: { cn: '天秤', en: 'Libra', date: '9.23-10.23' },
  Scorpio: { cn: '天蝎', en: 'Scorpio', date: '10.24-11.22' },
  Sagittarius: { cn: '射手', en: 'Sagittarius', date: '11.23-12.21' },
};

/**
 * 星期数据
 */
const WEEKS_INFO: {
  key: string;
  name: string;
  abbr: string;
  id: number;
  others: string;
}[] = [
  {
    key: 'Monday',
    name: '星期一',
    abbr: 'Mon',
    id: 1,
    others: 'Day of the Moon.(月亮日)',
  },
  {
    key: 'Tuesday',
    name: '星期二',
    abbr: 'Tues',
    id: 2,
    others: 'Day of the Mars.(火星日)',
  },
  {
    key: 'Wednesday',
    name: '星期三',
    abbr: 'Wed',
    id: 3,
    others: 'Day of the Mercury.(水星日)',
  },
  {
    key: 'Thursday',
    name: '星期四',
    abbr: 'Thur',
    id: 4,
    others: 'Day of Jupiter.(木星日)',
  },
  {
    key: 'Friday',
    name: '星期五',
    abbr: 'Fri',
    id: 5,
    others: 'Day of Venus.(金星日)',
  },
  {
    key: 'Saturday',
    name: '星期六',
    abbr: 'Sat',
    id: 6,
    others: 'Day of Saturn.(土星日)',
  },
  {
    key: 'Sunday',
    name: '星期日',
    abbr: 'Sun',
    id: 7,
    others: 'Day of the Sun.(太阳日)',
  },
];

/**
 * 月份信息
 */
const MONTH_INFO: {
  key: string;
  name: string;
  abbr: string;
  id: number;
  others: string;
}[] = [
  {
    key: 'January',
    name: '一月',
    abbr: 'Jan',
    id: 1,
    others: '寅.虎',
  },
  {
    key: 'February',
    name: '二月',
    abbr: 'Feb',
    id: 2,
    others: '卯.兔',
  },
  {
    key: 'March',
    name: '三月',
    abbr: 'March',
    id: 3,
    others: '辰.龙',
  },
  {
    key: 'April',
    name: '四月',
    abbr: 'Apr',
    id: 4,
    others: '巳.蛇',
  },
  {
    key: 'May',
    name: '五月',
    abbr: 'May',
    id: 5,
    others: '午.马',
  },
  {
    key: 'June',
    name: '六月',
    abbr: 'Jun',
    id: 6,
    others: '未.羊',
  },
  {
    key: 'July',
    name: '七月',
    abbr: 'Jul',
    id: 7,
    others: '申.猴',
  },
  {
    key: 'August',
    name: '八月',
    abbr: 'Aug',
    id: 8,
    others: '酉.鸡',
  },
  {
    key: 'September',
    name: '九月',
    abbr: 'Sept',
    id: 9,
    others: '戌.狗',
  },
  {
    key: 'October',
    name: '十月',
    abbr: 'Oct',
    id: 10,
    others: '亥.猪',
  },
  {
    key: 'November',
    name: '十一月',
    abbr: 'Nov',
    id: 11,
    others: '子.鼠',
  },
  {
    key: 'December',
    name: '十二月',
    abbr: 'Dec',
    id: 12,
    others: '丑.牛',
  },
];

/**
 * 身份证省份
 */
const ID_CARD_PROVINCE: { [prop: string]: string } = {
  '11': '北京',
  '12': '天津',
  '13': '河北',
  '14': '山西',
  '15': '内蒙古',
  '21': '辽宁',
  '22': '吉林',
  '23': '黑龙江',
  '31': '上海',
  '32': '江苏',
  '33': '浙江',
  '34': '安徽',
  '35': '福建',
  '36': '江西',
  '37': '山东',
  '41': '河南',
  '42': '湖北',
  '43': '湖南',
  '44': '广东',
  '45': '广西',
  '46': '海南',
  '50': '重庆',
  '51': '四川',
  '52': '贵州',
  '53': '云南',
  '54': '西藏',
  '61': '陕西',
  '62': '甘肃',
  '63': '青海',
  '64': '宁夏',
  '65': '新疆',
  '71': '台湾',
  '81': '香港',
  '82': '澳门',
  '91': '国外',
};

/**
 * 获取 16 位可读时间戳
 * Example: `getTimeCode() => '2036551026042022'`
 * @returns
 */
export function getTimeCode(): string {
  const dateObj = new Date();
  return `${(Math.random() * 100).toFixed().padEnd(2, '0')}${dateObj.getSeconds().toString().padStart(2, '0')}${dateObj
    .getMinutes()
    .toString()
    .padStart(2, '0')}${dateObj.getHours().toString().padStart(2, '0')}${dateObj
    .getDate()
    .toString()
    .padStart(2, '0')}${String(dateObj.getMonth() + 1).padStart(2, '0')}${dateObj.getFullYear()}`;
}

/**
 * 判断值是否为空
 * Example:
 * `empty('') => true`
 * `empty(null) => true`
 * `empty('null') => true`
 * `empty('undefined') => true`
 * `empty(undefined) => true`
 * `empty(0) => false`
 * `empty('0') => false`
 * `empty(NaN) => true`
 * `empty('NaN') => true`
 * `empty({}) => true`
 * `empty([]) => true`
 * @param variable 变量
 * @returns
 */
export function empty(variable: any): boolean {
  if (typeof variable === 'boolean') {
    return false; // 此处函数定义布尔型不算空
  }
  if (variable === 'null') {
    return true; // 检验字符串类型的 null
  }
  if (variable === 'undefined') {
    return true; // 检验字符串类型的 undefined
  }
  if (variable === 'NaN') {
    return true; // 检验字符串类型的 NaN
  }
  if (!variable && variable !== 0 && variable !== '0') {
    return true; // 检验 undefined 和 null "" NaN
  }
  if (Array.isArray(variable) && variable.length === 0) {
    return true; // 检验空数组
  }
  if (Object.prototype.toString.call(variable) === '[object Object]' && Object.keys(variable).length === 0) {
    return true; // 检验空对象，仅判断普通对象，不考虑字符串对象、时间、等等。
  }
  return false;
}

/**
 * 获取对象/数组第一个值
 * Example:
 * `get1Var([1, 2]) => 1`
 * `get1Var({a: 2,b: 1}) => 2`
 * @param data 源数据
 * @returns
 */
export function get1Var(data: any): any {
  if (getType(data) !== 'object' && !Array.isArray(data)) {
    return data;
  }
  for (const key in data) {
    const result = data[key];
    return result;
  }
}

/**
 * 获取数组或对象随机数据
 * Example:
 * `getRandVar({ a: 1, b: 3 }) => 1`
 * `getRandomVar([1, 2, 3, 4], 2) => [2, 4]`
 * @param value
 * @param count
 * @returns
 */
export function getRandVar(value: any, count = 1): any | any[] {
  const sample = Array.isArray(value) ? JSON.parse(JSON.stringify(value)) : Object.values(value);
  const len = sample.length;

  count = Math.max(Math.min(count, len), 0);

  const last = len - 1;

  const result = [];

  for (let i = 0; i < count; i++) {
    const rand = getRandNum(i, last);
    result.push(sample[rand]);
  }

  return result.length == 1 ? result[0] : result;
}

/**
 * 获取对象/数组最后一个值(对象为 Object.keys 的顺序)
 * Example:
 * `getLastVar([1, 2]) => 2`
 * `getLastVar({a: 2, b: 1}) => b`
 * @param data 源数据
 * @returns
 */
export function getLastVar(data: any): any {
  const isObj = getType(data) == 'object';
  if (!isObj && !Array.isArray(data)) {
    return data;
  }
  if (isObj) {
    const newArr = Object.keys(data);
    return newArr.length ? data[newArr[newArr.length - 1]] : undefined;
  }
  return data.length ? data[data.length - 1] : undefined;
}

/**
 * 防抖函数-最后一次有效（抢购）
 * Example: `debounce(() => {}, 1000) => 防抖执行`
 * @param fn 执行的函数
 * @param delay 延迟时间
 * @returns
 */
export function debounce(fn: any, delay = 1000) {
  let timer: any = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      // @ts-ignore
      // eslint-disable-next-line prefer-rest-params
      fn.apply(this, arguments);
    }, delay);
  };
}

/**
 * 节流函数-第一次有效（游戏开枪间隔）
 * Example: `throttle(() => {}, 1000) => 节流执行`
 * @param fn 执行的函数
 * @param delay 延迟时间
 * @returns
 */
export function throttle(fn: any, delay = 2000) {
  let canRun = true;
  return function () {
    if (!canRun) return;
    canRun = false;
    // @ts-ignore
    // eslint-disable-next-line prefer-rest-params
    fn.apply(this, arguments);
    setTimeout(function () {
      canRun = true;
    }, delay);
  };
}

/**
 * 函数柯里化
 * 是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。
 * Example: `curryIt(function (a, b, c) {return a + b + c})(1)(2)(3) => 6`
 * @param fn
 * @returns
 */
export function curryIt(fn: any) {
  // 获取预定义函数的参数个数
  let length = fn.length;
  // 声明存放参数的数组
  const args: any[] = [];
  return function (arg: any) {
    args.push(arg);
    length--;
    if (length <= 0) {
      // @ts-ignore
      return fn.apply(this, args);
    } else {
      // callee 属性是一个指针，指向拥有这个 arguments 对象的函数。
      return arguments.callee;
    }
  };
}

/**
 * 全局捕获异常
 * Example: `globalError((message, source, lineNo, colNo, error) => console.log('全局捕获异常'), false) => '全局捕获异常'`
 * @param {any} fn (message, source, lineNo, colNo, error)
 * @param {boolean} notShowConsole 是否不回显控制台
 * @returns
 */
export function globalError(fn: any, notShowConsole = true) {
  window.onerror = function (message, source, lineNo, colNo, error) {
    notShowConsole && console.log('js-xxx:globalError', { message, source, lineNo, colNo, error });
    fn.call(this, message, source, lineNo, colNo, error);
    return notShowConsole; // return true 不在控制台报错
  };
}

/**
 * 获取随机数字
 * Example: `getRandNum(1, 10) => 1~10 之间的随机数，闭区间。`
 * @param min 最小值
 * @param max 最大值
 * @returns
 */
export function getRandNum(min = 0, max = 10): number {
  return Math.floor(min + Math.random() * (max - min + 1));
}

/**
 * 获取随机颜色
 * Example: `getRandColor() => '#xxxxxx'`
 * @returns
 */
export function getRandColor(): string {
  return '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6);
}

/**
 * 获取随机数字字符串
 * Example: `getRandStr(6) => 'xxxxxx'`
 * @param len 长度
 * @returns
 */
export function getRandStr(len = 8): string {
  return (Math.random() * Number('1'.padEnd(len + 1, '0'))).toFixed().slice(0, len);
}

/**
 * 获取简单的唯一字符串(时间戳+随机数+进制转换)
 * Example: `getTimeAndStr(5, 36) => 'xxxxxx'`
 * @param len 随机字符的长度
 * @param radix 结果以此进行进制转换
 * @returns
 */
export function getTimeAndStr(len = 5, radix: number | undefined = 36): string {
  // Number('xxxx') // 超大 string 转 number 结果不准确 玄学
  return len === 0 ? `${getTimeCode()}` : Number(`${getRandStr(len)}${Date.now()}`).toString(radix); // new Date().getTime()
}

// eslint-disable-next-line spellcheck/spell-checker
/**
 * 获取简单的 UUID
 * Example: `getUUID() => 'ghijklmn'`
 * @param length 指定位数
 * @param radix 指定字符
 * @returns
 */
export function getUUID(length: number, chars: string | any[]): string {
  // eslint-disable-next-line spellcheck/spell-checker
  chars = chars || '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  length = length || 8;
  let result = '';
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

// eslint-disable-next-line spellcheck/spell-checker
/**
 * 获取 bootstrap 颜色
 * Example:
 * `getBSColor() => '#6c757d'`
 * `getBSColor('red') => '#dc3545'`
 * `getBSColor('warning') => '#ffc107'`
 * @param key color name
 * @returns
 */
export function getBSColor(key = 'default'): string {
  key = `${key}`.toLowerCase();
  const keyList = [
    'dark',
    'black',
    'light',
    'white',
    'info',
    'cyan',
    'success',
    'green',
    'warning',
    'yellow',
    'danger',
    'red',
    'primary',
    'blue',
    'secondary',
    'default',
    'grey',
  ];
  key = keyList.includes(key) ? key : 'others';
  const colors: any = {
    dark: '#343a40',
    black: '#343a40',
    light: '#f8f9fa',
    white: '#f8f9fa',
    info: '#17a2b8',
    cyan: '#17a2b8',
    success: '#28a745',
    green: '#28a745',
    warning: '#ffc107',
    yellow: '#ffc107',
    danger: '#dc3545',
    red: '#dc3545',
    primary: '#007bff',
    blue: '#007bff',
    secondary: '#6c757d',
    default: '#6c757d',
    grey: '#6c757d',
  };
  return colors[key];
}

/**
 * 获取 V4 版本 UUID
 * Example: `uuid() => '7b72e264-61fe-426e-b95f-35d4e61c5742'`
 * @returns
 */
export function uuid(): string {
  const tempUrl = URL.createObjectURL(new Blob());
  const uuid = tempUrl.toString();
  URL.revokeObjectURL(tempUrl); // 释放这个 url
  return uuid.substring(uuid.lastIndexOf('/') + 1);
  // 外部
  // const hexBytes = [];
  // for (let i = 0; i < 256; i++) {
  //   hexBytes[i] = (i + 0x100).toString(16).substr(1);
  // }

  // const ret = new Uint8Array(16);
  // for (let i = 0; i < 16; i++) ret[i] = getRandNum(0, 255);

  // const b = ret;

  // b[6] = (b[6] & 0x0f) | 0x40;
  // b[8] = (b[8] & 0x3f) | 0x80;

  // return (
  //   hexBytes[b[0]] +
  //   hexBytes[b[1]] +
  //   hexBytes[b[2]] +
  //   hexBytes[b[3]] +
  //   '-' +
  //   hexBytes[b[4]] +
  //   hexBytes[b[5]] +
  //   '-' +
  //   hexBytes[b[6]] +
  //   hexBytes[b[7]] +
  //   '-' +
  //   hexBytes[b[8]] +
  //   hexBytes[b[9]] +
  //   '-' +
  //   hexBytes[b[10]] +
  //   hexBytes[b[11]] +
  //   hexBytes[b[12]] +
  //   hexBytes[b[13]] +
  //   hexBytes[b[14]] +
  //   hexBytes[b[15]]
  // );
}

/**
 * 获取带前缀的唯一 key
 * Example:
 * `getKey() => 'M2rmCcGpXCa5MTdN4Kks5'`
 * `getKey(2, 'test-') => test-aK'`
 * @param size
 * @param prefix
 * @returns
 */
export function getKey(size = 21, prefix = ''): string {
  // 外部
  // eslint-disable-next-line spellcheck/spell-checker
  const symbols = 'ModuleSymbhasOwnPr-0123456789ABCDEFGHIJKLNQRTUVWXYZ_cfgijkpqtvxz';

  let id = '';

  const len = symbols.length;

  // eslint-disable-next-line spellcheck/spell-checker
  const ret = new Uint8Array(size);
  for (let i = 0; i < size; i++) ret[i] = getRandNum(0, 255);

  const bytes = ret;
  while (0 < size--) {
    id += symbols[bytes[size] % len];
  }

  return prefix + id;
}

/**
 * 获取任意变量长度
 * Example:
 * `getSize([]) => 0`
 * `getSize({a: 1, b: 2}) => 2`
 * `getSize(null) => 0`
 * @param value
 * @returns
 */
export function getSize(value: any): number {
  if (getType(value) === 'object') {
    return Object.keys(value).length;
  }
  try {
    return value.length ? value.length : 0;
  } catch (e) {
    return 0;
  }
}

/**
 * 在浏览器中打开文件选择框
 * Example: `openFile({ multiple: true, accept: '.txt' }).then(fileList => console.log(fileList));`
 * @param options
 * @returns
 */
export function openFile(options?: { accept?: string; multiple?: boolean }): Promise<any> {
  return new Promise((resolve) => {
    const input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.bottom = '0';
    input.style.left = '0';
    input.style.visibility = 'hidden';
    input.setAttribute('type', 'file');
    if (options?.accept) {
      input.setAttribute('accept', options.accept);
    }
    if (options?.multiple) {
      input.setAttribute('multiple', '');
    }
    document.body.appendChild(input);
    input.addEventListener('change', () => {
      document.body.removeChild(input);
      resolve(input.files);
    });
    input.click();
  });
}

/**
 * 开启全屏
 * Example: `openFullscreen() => 开启全屏`
 * @param element
 * @returns
 */
export function openFullscreen(element: any = document.body) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen();
  }
}

/**
 * 关闭全屏
 * Example: `closeFullscreen() => 关闭全屏`
 * @param
 * @returns
 */
export function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
    // @ts-ignore
  } else if (document.msExitFullscreen) {
    // @ts-ignore
    document.msExitFullscreen();
    // @ts-ignore
  } else if (document.mozCancelFullScreen) {
    // @ts-ignore
    document.mozCancelFullScreen();
    // @ts-ignore
  } else if (document.webkitExitFullscreen) {
    // @ts-ignore
    document.webkitExitFullscreen();
  }
}

/**
 * 获取数组或对象交集
 * Example:
 * `intersection([1, 2, 2, 3, 3], [1, 2, 4, 5]) => [1, 2]`
 * `intersection({a: 1, b: 2}, {a: 1, c: 3, b: 4}) => {a: 1}`
 * @param paramA
 * @param paramB
 * @returns
 */
export function intersection(paramA: any, paramB: any): any {
  const paramAType = getType(paramA);
  if (paramAType != getType(paramB)) return false;
  if (paramAType != 'object' && paramAType != 'array') return false;

  const isObj = paramAType == 'object';
  let result: any = isObj ? {} : [];

  if (isObj) {
    for (const key in paramA) {
      if (paramB[key] && paramA[key] == paramB[key]) {
        result[key] = paramA[key];
      }
    }
  } else {
    for (const key in paramA) {
      if (paramB.includes(paramA[key])) {
        result.push(paramA[key]);
      }
    }
    result = arraySet(result);
  }

  return jsonClone(result);
}

/**
 * 获取数组或对象并集
 * Example:
 * `union([1, 2, 2, 3, 3], [1, 2, 4, 5]) => [1, 2, 3, 4, 5]`
 * `union({a: 1, b: 2}, {a: 1, c: 3, b: 4}) => {a: 1, c: 3, b: 2}`
 * @param paramA
 * @param paramB
 * @returns
 */
export function union(paramA: any, paramB: any): any {
  const paramAType = getType(paramA);
  if (paramAType != getType(paramB)) return false;
  if (paramAType != 'object' && paramAType != 'array') return false;

  if (paramAType == 'object') {
    return jsonClone({
      ...paramB,
      ...paramA, // 以前一个为准
    });
  } else {
    return jsonClone(arraySet([...paramA, ...paramB]));
  }
}

/**
 * 获取数组或对象不同值集合
 * Example:
 * `difference([1, 2, 2, 3, 3], [1, 2, 4, 5]) => [3]`
 * `difference({a: 1, b: 2}, {a: 1, c: 3, b: 4}) => {b: 2}`
 * @param paramA
 * @param paramB
 * @returns
 */
export function difference(paramA: any, paramB: any): any {
  const paramAType = getType(paramA);
  if (paramAType != getType(paramB)) return false;
  if (paramAType != 'object' && paramAType != 'array') return false;
  const isObj = paramAType == 'object';
  let result: any = isObj ? {} : [];

  if (isObj) {
    for (const key in paramA) {
      if (paramB[key] != paramA[key]) {
        result[key] = paramA[key]; // 以前一个为准
      }
    }
  } else {
    result = paramA.filter((item: any) => !paramB.includes(item));
    result = arraySet(result);
  }
  return jsonClone(result);
}

/**
 * JSON 转字符串式克隆
 * Example:
 * `jsonClone([1, 2, 2, 3, 3]) => [1, 2, 2, 3, 3]`
 * `jsonClone({a: 1, b: 2}) => {a: 1, b: 2}`
 * @param value
 * @returns
 */
export function jsonClone(value: any): any {
  try {
    return JSON.parse(JSON.stringify(value));
  } catch (e) {
    return value;
  }
}

/**
 * 打印某个函数运行时间
 * Example:
 * `logRunTime(() => [1, 2, 3].reduce(...))`
 * `logRunTime(() => [1, 2, 3].reduce(...), 'timeKey')`
 * `logRunTime(async () => { await fun1(); await fun2(); })`
 * `logRunTime($promiseReturnFunction)`
 * `logRunTime(new Promise((resolve, reject) => { setTimeout(() => resolve('test'), 1000) }))`
 * @param fn
 * @param timeKey
 * @returns
 */
export function logRunTime(fn: any, timeKey: string): void {
  timeKey = timeKey ?? getKey(5, 'log-run-time-');
  const type = getType(fn);
  if (type == 'asyncfunction' || isPromise(fn) || isPromise(fn?.())) {
    if (type == 'promise') {
      console.time(timeKey);
      fn.then(() => console.timeEnd(timeKey)).catch((e: any) => {
        console.log({ e });
        console.timeEnd(timeKey);
      });
    } else {
      console.time(timeKey);
      fn()
        .then(() => console.timeEnd(timeKey))
        .catch((e: any) => {
          console.log({ e });
          console.timeEnd(timeKey);
        });
    }
  } else {
    console.time(timeKey);
    fn?.();
    console.timeEnd(timeKey);
  }
}

/**
 * 打印日志工具类
 * Example:
 * `const {log, warning, success, danger, dark, primary, info} = Logger()`
 * `log(1, new Date, 'test', [1, 2, 3], {log})`
 * @returns
 */
export function Logger(): {
  log: (...args: any[]) => void;
  info: (...args: any[]) => void;
  success: (...args: any[]) => void;
  warning: (...args: any[]) => void;
  danger: (...args: any[]) => void;
  primary: (...args: any[]) => void;
  dark: (...args: any[]) => void;
  [key: string]: (...args: any[]) => void;
  // eslint-disable-next-line indent
} {
  function _logger(
    value: any,
    type: 'warning' | 'info' | 'danger' | 'primary' | 'success' | 'default' | 'dark' = 'default',
  ): void {
    console.log('\n%c==========> ', `color:${getBSColor(type)}`, value, '\n');
  }
  interface LogFn {
    (...args: any[]): void;
  }
  // @ts-ignore
  const result: {
    log: LogFn;
    info: LogFn;
    success: LogFn;
    warning: LogFn;
    danger: LogFn;
    primary: LogFn;
    dark: LogFn;
    [key: string]: LogFn;
  } = {};
  ['warning', 'info', 'danger', 'primary', 'success', 'dark', 'log'].forEach((type: string) => {
    // @ts-ignore
    result[type] = (...args: any[]) => {
      const printType = type == 'log' ? 'default' : type;
      args.forEach((val) => {
        // @ts-ignore
        _logger(val, printType);
      });
    };
  });
  return result;
}

/**
 * 在页面上显示某个值
 * Example:
 * `showVar([1, 2, 2, 3, 3]) => 显示序列化之后的数据`
 * `showVar({a: 1, b: 2}) => 显示序列化之后的数据`
 * @param value
 * @returns
 */
export function showVar(value: any): any {
  try {
    alert(JSON.stringify(value, null, 2) ?? 'undefined');
  } catch (e) {
    console.log('js-xxx:showVarError===>', value);
  }
}

/**
 * 检测某个数组是否包含某个值
 * Example:
 * `contains([1, 2, 2, 3, 3], 3) => true`
 * `contains([1, 2, 2, 3, 3], '3') => false`
 * `contains([{a: 1, b: 2}, {a: 2, b: 3}], {a: 2, b: 3}) => true`
 * `contains([[1, 2], [3, 4]], [1, 3]) => false`
 * @param value
 * @param target
 * @returns
 */
export function contains(value: any[], target: any): boolean {
  try {
    const temp = value.map((item) => JSON.stringify(item));
    return temp.includes(JSON.stringify(target));
  } catch (e) {
    return false;
  }
}

/**
 * 直到某个函数返回 toBool(true) 的结果(执行完成)
 * Example:
 * `let a = 5;`
 * `setTimeout(() => (a = 10), 5000);`
 * `waitUntil(() => a === 10).then(() => { console.log(a) });`
 * @param condition
 * @param timeout
 * @param interval
 * @returns
 */
export function waitUntil(condition: any, timeout = 0, interval = 250): Promise<any> {
  function evalCondition() {
    return new Promise((resolve, reject) => {
      try {
        resolve(condition());
      } catch (e) {
        reject(e);
      }
    });
  }

  return new Promise((resolve, reject) => {
    const startTime = new Date().getTime();
    const pollCondition = () => {
      evalCondition().then((val) => {
        const elapsed = new Date().getTime() - startTime;
        if (toBool(val)) {
          resolve(val);
        } else if (timeout && elapsed >= timeout) {
          reject(Error(`Wait timed out after ${timeout} ms`));
        } else {
          setTimeout(pollCondition, interval);
        }
      }, reject);
    };
    pollCondition();
  });
}

/**
 * 毫秒转换
 * Example:
 * `ms('1s') => 1000`
 * `ms('1m') => 60000`
 * `ms('1.5h') => 5400000`
 * `ms('1d') => 86400000`
 * `ms('1y') => 31557600000`
 * `ms('1000') => 1000`
 * `ms(1500) => '1.5s'`
 * `ms(60000) => '1m'`
 * @param str
 * @returns
 */
export function ms(str: any): string | number {
  // 外部
  const factor: any = {
    ms: 1,
    s: 1000,
  };
  factor.m = factor.s * 60;
  factor.h = factor.m * 60;
  factor.d = factor.h * 24;
  factor.y = factor.d * 365.25;
  const suffixList = ['y', 'd', 'h', 'm', 's'];
  const regStrTime = /^((?:\d+)?\.?\d+) *(s|m|h|d|y)?$/;
  if (isStr(str)) {
    const match = str.match(regStrTime);

    if (!match) return 0;

    return toNum(match[1]) * factor[match[2] || 'ms'];
  }
  const num = str;
  let suffix = 'ms';

  for (let i = 0, len = suffixList.length; i < len; i++) {
    if (num >= factor[suffixList[i]]) {
      suffix = suffixList[i];
      break;
    }
  }

  return +(num / factor[suffix]).toFixed(2) + suffix;
}

/**
 * 文件流或内容转 Base64
 * Example:
 * `transferFileToBase64(file, 'application/pdf;charset=utf-8', (res) => console.log({ res })) => result object`
 * `transferFileToBase64('test', 'text/plain', (res) => console.log({ res })) => result object`
 * @param content BlobPart | any
 * @param contentType
 * @param callBack
 * @returns
 */
export function transferFileToBase64(content: any, contentType: string, callBack: any): void {
  const blob = new Blob([content], {
    type: contentType,
  });
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.addEventListener('loadend', () => {
    callBack?.({
      result: reader?.result,
      // // @ts-ignore
      // baseCode: Buffer?.from(reader?.result?.split('base64,')[1], 'base64')
    });
  });
}

/**
 * 检查是否为 idCard string 身份证
 * 支持 15 、 18 位
 * Example:
 * `checkIdCard('350424870506202') => true`
 * `checkIdCard('003424870506202') => false`
 * `checkIdCard('415106199801012130') => true`
 * `checkIdCard('123123123123123222') => false`
 * @param value
 * @returns
 */
export function checkIdCard(value: string): boolean {
  const regIdCard15 = /^[1-9]d{5}d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)d{2}$/;
  const regIdCard18 =
    /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;

  return regIdCard15.test(value) || regIdCard18.test(value);
}

/**
 * 获取年龄
 * Example:
 * `getAge('1998-9-28') => 24`
 * `getAge('1998-6-8', '2023-7') => 25`
 * `getAge('2023') => -1`
 * @param birthday
 * @param targetDate
 * @returns
 */
export function getAge(birthday: any, targetDate?: any): number {
  return new Date(new Date(targetDate ?? Date.now()).getTime() - new Date(birthday).getTime()).getFullYear() - 1970;
}

/**
 * 获取生肖
 * Example:
 * `getAnimal('1998') => '虎'`
 * `getAnimal('1998-6-8') => '虎'`
 * `getAnimal('2023') => '兔'`
 * @param date
 * @returns
 */
export function getAnimal(date: any): string {
  return ANIMALS[new Date(date).getFullYear() % 12];
}

/**
 * 身份证解析
 * Example:
 * `transferIdCard('350424870506202') => {"age":35,"year":"1987","idCard":"350424870506202","sex":"女","constellation":{"cn":"金牛","en":"Taurus","date":"4.20-5.20"},"gender":0,"province":"福建","animal":"兔","birthday":"1987-05-06"}`
 * `transferIdCard('415106199801012130') => {"age":24,"year":"1998","idCard":"415106199801012130","sex":"男","constellation":{"cn":"魔羯","en":"Capricorn","date":"12.22-1.19"},"gender":1,"province":"河南","animal":"虎","birthday":"1998-01-01"}`
 * `transferIdCard('xxxxx') => {}`
 * @param idCard
 * @returns
 */
export function transferIdCard(idCard: string): any {
  if (!checkIdCard(idCard)) {
    return {};
  }
  const is18 = idCard.length === 18;
  // 新中国成立年份-2049
  const year = is18
    ? idCard.substring(6, 10)
    : `${parseInt(idCard.charAt(6)) <= 4 ? '20' : '19'}${idCard.substring(6, 8)}`;
  const province = ID_CARD_PROVINCE[idCard.substring(0, 2)];
  const sex = parseInt(is18 ? idCard.charAt(16) : idCard.charAt(14)) % 2 === 1 ? '男' : '女';
  const animal = getAnimal(year);
  const birthday = `${year}-${is18 ? idCard.substring(10, 12) : idCard.substring(8, 10)}-${
    is18 ? idCard.substring(12, 14) : idCard.substring(10, 12)
  }`;
  const age = getAge(birthday);
  const constellation = getConstellation(birthday);
  return {
    age,
    year,
    idCard,
    sex,
    constellation,
    gender: sex === '男' ? 1 : 0,
    province,
    animal,
    birthday,
  };
}

/**
 * 金额转中文
 * Example:
 * `transferMoney(900) => '玖佰元整'`
 * `transferMoney(852.5) => '捌佰伍拾贰元伍角'`
 * @param n
 * @returns
 */
export function transferMoney(n: number): string {
  const fraction = ['角', '分'];
  const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  const unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟'],
  ];
  const head = n < 0 ? '欠' : '';
  n = Math.abs(n);
  let s = '';
  const fraLen = fraction.length;
  for (let i = 0; i < fraLen; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }
  s = s || '整';
  n = Math.floor(n);
  for (let i = 0; i < unit[0].length && n > 0; i++) {
    let p = '';
    for (let j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }
  return (
    head +
    s
      .replace(/(零.)*零元/, '元')
      .replace(/(零.)+/g, '零')
      .replace(/^整$/, '零元整')
  );
}

/**
 * TTS 语音，可以在现代浏览器直接运行。
 * Example:
 * `const mySpeaker = Speaker()`
 * `mySpeaker.setText('你好，这是一条测试语音！hello'); mySpeaker.speak();`
 * @param text 内容
 * @param lang 语言
 * @param volume 音量 [0, 1]
 * @param pitch 音高 [0, 2]
 * @param rate 速度 [0.1, 10]
 * @returns
 */
export function Speaker(text: string, lang = 'zh-CN', volume = 1, pitch = 1, rate = 1) {
  const speaker: SpeechSynthesisUtterance = new window.SpeechSynthesisUtterance(text);
  speaker.text = text;
  speaker.lang = lang;
  speaker.volume = volume;
  speaker.pitch = pitch;
  speaker.rate = rate;

  return {
    getInstance: () => {
      return speaker;
    },
    setText: (txt: string) => {
      speaker.text = txt;
    },
    setLang: (lang: string) => {
      speaker.lang = lang;
    },
    setVolume: (volume: number) => {
      speaker.volume = volume;
    },
    setPitch: (pitch: number) => {
      speaker.pitch = pitch;
    },
    setRate: (rate: number) => {
      speaker.rate = rate;
    },
    setVoice: (voice: any) => {
      speaker.voice = voice;
    },
    getVoices: () => {
      return window.speechSynthesis.getVoices();
    },
    speak: () => {
      window.speechSynthesis.speak(speaker);
    },
    stop: () => {
      window.speechSynthesis.cancel();
    },
  };
}

/**
 * 页面灰白屏幕
 * Example: `rip() => 页面灰白`
 * @returns
 */
export function rip(): void {
  const html: any = document.querySelector('html');
  // html.style['-webkit-filter'] = 'grayscale(1)';
  html.style['filter'] = 'grayscale(1)';
}

// eslint-disable-next-line spellcheck/spell-checker
/**
 * 获取星座
 * Example:
 * `getConstellation('11-24') => { cn: '射手', en: 'Sagittarius', date: '11.23-12.21' }`
 * `getConstellation('xxx') => {cn: '未知', en: 'unknown', date: 'xxx'}`
 * `getConstellation(new Date('2022-11-24')) => { cn: '射手', en: 'Sagittarius', date: '11.23-12.21' }`
 * @param date
 * @returns
 */
export function getConstellation(date: any): { cn: string; en: string; date: any } {
  const defaultV = {
    cn: '未知',
    en: 'unknown',
    date: date,
  };
  if (!date) {
    return defaultV;
  }
  try {
    date = new Date(date);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let star = 'defaultV';
    switch (month) {
      case 3:
        if (day >= 21) {
          star = 'Aries';
        } else {
          star = 'Pisces';
        }
        break;
      case 4:
        if (day >= 21) {
          star = 'Taurus';
        } else {
          star = 'Aries';
        }
        break;
      case 5:
        if (day >= 22) {
          star = 'Gemini';
        } else {
          star = 'Taurus';
        }
        break;
      case 6:
        if (day >= 22) {
          star = 'Cancer';
        } else {
          star = 'Gemini';
        }
        break;
      case 7:
        if (day >= 23) {
          star = 'Leo';
        } else {
          star = 'Cancer';
        }
        break;
      case 8:
        if (day >= 23) {
          star = 'Virgo';
        } else {
          star = 'Leo';
        }
        break;
      case 9:
        if (day >= 24) {
          star = 'Libra';
        } else {
          star = 'Virgo';
        }
        break;
      case 10:
        if (day >= 24) {
          star = 'Scorpio';
        } else {
          star = 'Libra';
        }
        break;
      case 11:
        if (day >= 23) {
          star = 'Sagittarius';
        } else {
          star = 'Scorpio';
        }
        break;
      case 12:
        if (day >= 22) {
          star = 'Capricorn';
        } else {
          star = 'Sagittarius';
        }
        break;
      case 1:
        if (day >= 21) {
          star = 'Aquarius';
        } else {
          star = 'Capricorn';
        }
        break;
      case 2:
        if (day >= 20) {
          star = 'Pisces';
        } else {
          star = 'Aquarius';
        }
        break;
    }
    return CONSTELLATION[star] ?? defaultV;
  } catch (e) {
    return defaultV;
  }
}

/**
 * 设置监听函数
 * 返回取消该监听的函数 return cancel
 * Example: `setEventListener('resize', () => { console.log('resize'); }) => cancel 当前 listener 的 function`
 * @param eventKey
 * @param foo
 * @param once 是否只触发一次
 * @param dom document.querySelector<HTMLDivElement>('.xxx')
 * @returns
 */
export function setEventListener(eventKey: string, foo: any, once = false, dom: any = window): any {
  dom.addEventListener(eventKey, foo, {
    // After configuring once, it will be called at most once
    once: once,
  });
  return () => {
    dom.removeEventListener(eventKey, foo);
  };
}

/**
 * H5 软键盘缩回/弹起回调
 * return cancel listener of H5Resize
 * Example: `H5Resize(()=>{ console.log('downCb'); }, ()=>{ console.log('upCb'); }) => do something`
 * @param downCb
 * @param upCb
 * @returns
 */
export function H5Resize(downCb: any, upCb: any): any {
  // 当软件键盘弹起会改变当前 window.innerHeight
  // 监听这个值变化 [downCb 缩回的回调、 upCb 弹起的回调]
  const clientHeight = window.innerHeight;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  downCb = typeof downCb === 'function' ? downCb : function () {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  upCb = typeof upCb === 'function' ? upCb : function () {};
  const H5ResizeFoo = () => {
    const height = window.innerHeight;
    if (height === clientHeight) {
      downCb();
    }
    if (height < clientHeight) {
      upCb();
    }
  };
  return setEventListener('resize', H5ResizeFoo);
}

/**
 * 禁用控制台
 * windows
 * 防君子不防小人
 * 监听页面大小变化没必要
 * 监听编辑 dom 事件 reload 也算了
 * Example: `banConsole() => 返回取消禁用的 function`
 * @returns
 */
export function banConsole(): any {
  document.body.setAttribute('style', 'user-select: none;' + document.body.style ?? '');
  const cancelContextMenu = setEventListener('contextmenu', function (e: any) {
    return e.preventDefault();
  });
  const cancelKeyDown = setEventListener('keydown', function (e: any) {
    if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73)) {
      return e.preventDefault();
    }
  });
  return () => {
    cancelContextMenu();
    cancelKeyDown();
  };
}

/**
 * 获取星期信息
 * Example:
 * `getWeekInfo() => WEEKS_INFO`
 * `getWeekInfo('0') => WEEKS_INFO`
 * `getWeekInfo('ALL') => WEEKS_INFO`
 * `getWeekInfo('all') => WEEKS_INFO`
 * `getWeekInfo('unknown') => WEEKS_INFO`
 * `getWeekInfo(1) => 星期一相关信息`
 * `getWeekInfo(8) => WEEKS_INFO`
 * @param n
 * @returns
 */
export function getWeekInfo(n: string | number):
  | {
      key: string;
      name: string;
      abbr: string;
      id: number;
      others: string;
    }
  | {
      key: string;
      name: string;
      abbr: string;
      id: number;
      others: string;
    }[] {
  if (n === 'all' || n === 'ALL') {
    return WEEKS_INFO;
  }
  // @ts-ignore
  if (!n || !Number.isInteger(n) || n < 1 || n > 7) {
    return WEEKS_INFO;
  }
  return WEEKS_INFO[Number(n) - 1] ?? WEEKS_INFO;
}

/**
 * 获取星期信息
 * Example:
 * `getMonthInfo() => MONTH_INFO`
 * `getMonthInfo('0') => MONTH_INFO`
 * `getMonthInfo('ALL') => MONTH_INFO`
 * `getMonthInfo('all') => MONTH_INFO`
 * `getMonthInfo('unknown') => MONTH_INFO`
 * `getMonthInfo(1) => 一月相关信息`
 * `getMonthInfo(13) => MONTH_INFO`
 * @param n
 * @returns
 */
export function getMonthInfo(n: string | number):
  | {
      key: string;
      name: string;
      abbr: string;
      id: number;
      others: string;
    }
  | {
      key: string;
      name: string;
      abbr: string;
      id: number;
      others: string;
    }[] {
  if (n === 'all' || n === 'ALL') {
    return MONTH_INFO;
  }
  // @ts-ignore
  if (!n || !Number.isInteger(n) || n < 1 || n > 12) {
    return MONTH_INFO;
  }
  return MONTH_INFO[Number(n) - 1] ?? MONTH_INFO;
}

/**
 * 判断两个值是否相等
 * Example:
 * `isEqual([1, 2, 3], [1, 2, 3]) => true`
 * `isEqual({a: 1, b: 2}, {a: 1, b: 2}) => true`
 * `isEqual({}, {}) => true`
 * `isEqual(1, 1) => true`
 * `isEqual(1, '1') => false`
 * @param obj1
 * @param obj2
 * @returns
 */
export function isEqual(obj1: any, obj2: any): boolean {
  // 判断类型是否相同
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  // 判断是对象还是数组
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    // 如果是数组，比较每一个元素是否相等。
    if (obj1.length !== obj2.length) {
      return false;
    }
    for (let i = 0; i < obj1.length; i++) {
      if (!isEqual(obj1[i], obj2[i])) {
        return false;
      }
    }
    return true;
  } else if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    // 如果是对象，比较每一个属性是否相等。
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      // eslint-disable-next-line no-prototype-builtins
      if (!obj2.hasOwnProperty(key)) {
        return false;
      }
      if (!isEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true;
  } else {
    // 其他类型直接比较值是否相等
    return obj1 === obj2;
  }
}
