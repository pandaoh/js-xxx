/*
 * @Author: HxB
 * @Date: 2022-04-26 15:45:48
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-03-02 18:12:57
 * @Description: 字符串常用方法
 * @FilePath: \js-xxx\src\String\index.ts
 */
import { union } from '@/Tools';
import { isUndef } from '@/Types';

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
 * 使用 url 中时建议使用 encodeURIComponent 再次编码，因为单独 + 号在 url 中会被解析成空格。
 * 使用 encodeURIComponent 会把 + 解析为 %2B 与空格 %20 区分
 * Example:
 * `base64Encode('我是 leo') => '5oiR5pivIGxlbw=='`
 * `base64Encode('我是 leo', true) => '5oiR5pivIGxlbw'`
 * @param str 字符串
 * @param replaceChar 是否替换结果字符串中的特殊字符 '+/='，适用于 url 编码。
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

/**
 * 字符串脱敏(biugle 自定义规则)
 * Example:
 * `maskString(undefined) => '-'`
 * `maskString('13579246810') => '135****6810'`
 * `maskString('王小二') => '王***二'`
 * `maskString('123456789') => '123****89'`
 * `maskString('130223199809282927') => '13022********927'`
 * `maskString('广东省深圳市龙华区') => 广东省****华区'`
 * `maskString('广东省深圳市福田区福田保税区xxx小区xxx单元x栋x楼xxx号') => '广东省深圳市福田区******xx号'`
 * @param str
 * @returns
 */
export function maskString(str: string): string {
  str = str ? `${str}` : '';
  switch (str.length) {
    case 0:
      return '-';
    case 1:
      return '***';
    case 2:
      return str.charAt(0) + '***';
    case 3:
    case 4:
    case 5:
      return str.charAt(0) + '***' + str.charAt(str.length - 1);
    case 11:
      return str.substring(0, 3) + '*****' + str.substring(7);
    case 18:
      return str.substring(0, 5) + '********' + str.substring(15);
  }
  if (str.length > 6 && str.length < 11) {
    return str.substring(0, 3) + '****' + str.substring(str.length - 2);
  }
  if (str.length <= 11) {
    return str.substring(0, 3) + '*****';
  }
  if (str.length <= 18) {
    return str.substring(0, 3) + '*****' + str.substring(str.length - 3);
  }
  return str.substring(0, 9) + '******' + str.substring(str.length - 3);
}

/**
 * 改变字符串大小写
 * Example:
 * `transferCase('red', 'upper'|1) => 'RED'`
 * `transferCase('red', 'lower'|2) => 'red'`
 * `transferCase('red', 'first'|3) => 'Red'`
 * @param str
 * @param type
 * @returns
 */
export function transferCase(str: string, type: 1 | 2 | 3 | 'upper' | 'lower' | 'first') {
  switch (type) {
    case 1:
    case 'upper':
      return str.toUpperCase();
    case 2:
    case 'lower':
      return str.toLowerCase();
    case 3:
    case 'first':
      return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
    default:
      return str;
  }
}

/**
 * 按照普遍的特殊字符分割字符串
 * Example:
 * `splitCase('foo-bar') => ['foo', 'bar']`
 * `splitCase('foo_bar') => ['foo', 'bar']`
 * `splitCase('foo bar') => ['foo', 'bar']`
 * `splitCase('foo.bar') => ['foo', 'bar']`
 * `splitCase('fooBar') => ['foo', 'bar']`
 * `splitCase('foo-Bar') => ['foo', 'bar']`
 * @param str
 * @returns
 */
export function splitCase(str: string): string[] {
  const regUpperCase = /([A-Z])/g;
  const regSeparator = /[_.\- ]+/g;
  const regTrim = /(^-)|(-$)/g;
  str = str.replace(regUpperCase, '-$1').toLowerCase().replace(regSeparator, '-').replace(regTrim, '');

  return str.split('-');
}

/**
 * 字符串转驼峰
 * Example:
 * `camelCase('foo-bar') => 'fooBar'`
 * `camelCase('foo_bar') => 'fooBar'`
 * `camelCase('foo bar') => 'fooBar'`
 * `camelCase('foo.bar') => 'fooBar'`
 * @param str
 * @returns
 */
export function camelCase(str: string) {
  const arr = splitCase(str);

  let ret = arr[0];
  arr.shift();

  arr.forEach((i, idx) => {
    arr[idx] = transferCase(i, 'first');
  });
  ret += arr.join('');

  return ret;
}

/**
 * 字符串 repeat
 * Example:
 * `repeat('*') => '*'`
 * `repeat('*', 3) => '***'`
 * @param str
 * @returns
 */
export function repeat(str: string, n: number = 1): string {
  let ret = '';

  if (n < 1) return '';

  while (n > 0) {
    if (n & 1) ret += str;
    n >>= 1;
    str += str;
  }

  return ret;
}

/**
 * 检查是否为 url string
 * Example:
 * `isUrl('http://www.example.com?foo=bar&param=test') => true`
 * `isUrl(http://www) => false`
 * @param value
 * @returns
 */
export function isUrl(value: string): boolean {
  const regUrl = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/;
  return regUrl.test(value);
}

/**
 * 检查是否为 email string 邮箱
 * Example:
 * `isEmail('test@qq.com') => true`
 * `isEmail('@qq.com') => false`
 * @param value
 * @returns
 */
export function isEmail(value: string): boolean {
  const regEmail = /.+@.+\..+/;
  return regEmail.test(value);
}

/**
 * 检查是否为 phoneNum string 手机号
 * Example:
 * `isPhoneNum('13579246810') => true`
 * `isPhoneNum('12345678910') => false`
 * @param value
 * @returns
 */
export function isPhoneNum(value: string): boolean {
  const regPhoneNum = /^(0|86|17951)?(1[3-9][0-9])[0-9]{8}$/;
  return regPhoneNum.test(value);
}

/**
 * 检查是否为 char string 用户名规范(字母数字下划线或中文)
 * Example:
 * `isChar('test123@qq.com') => false`
 * `isChar('_test123_qq_com') => false`
 * `isChar('test123_qq_com') => true`
 * `isChar('我test123_qq_com') => false`
 * `isChar('我test123_qq_com', true) => true`
 * @param value
 * @returns
 */
export function isChar(value: string, hasChinese: boolean = false): boolean {
  const regChar = hasChinese
    ? /^[a-zA-Z\u4E00-\u9FA5]([a-zA-Z0-9_\u4E00-\u9FA5]{5,17})$/
    : /^[a-zA-Z]([a-zA-Z0-9_\u4E00-\u9FA5]{5,17})$/;
  return regChar.test(value);
}

/**
 * 检查密码强度是否足够
 * Example:
 * `isStrongPassWord('test@qq.com') => false`
 * `isStrongPassWord('test@qq.com123') => true`
 * @param value
 * @returns
 */
export function isStrongPassWord(value: string): boolean {
  const pwChar = /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,16}/;
  return pwChar.test(value);
}

/**
 * 检查是否为 carCode string 车牌号
 * Example:
 * `isCarCode('粤B68928') => true`
 * `isCarCode('粤B.68928') => true`
 * `isCarCode('广东B12345') => false`
 * @param value
 * @returns
 */
export function isCarCode(value: string): boolean {
  const regCarCode =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[\.]{0,1}[A-Z0-9]{4,5}[A-Z0-9挂学警港澳]{1}$/;
  return regCarCode.test(value);
}

/**
 * 检查是否为 ipv4 string
 * Example:
 * `isIpv4('127.0.0.1') => true`
 * `isIpv4('255.255.255.0') => true`
 * `isIpv4('255.255.255.2555') => false`
 * `isIpv4('255.255.255.2555.255') => false`
 * @param value
 * @returns
 */
export function isIpv4(value: string): boolean {
  const regIpv4 = /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/;
  return regIpv4.test(value + '.');
}

/**
 * 检查是否为 ipv6 string
 * Example:
 * `isIpv6('::1') => true`
 * `isIpv6('127.0.0.1') => false`
 * `isIpv6('2000:0000:0000:0000:0001:2345:6789:abcd') => true`
 * `isIpv6('2001:DB8:0:0:8:800:200C:417A') => true`
 * `isIpv6('2001:DB8::8:800:200C:417A') => false 暂不兼容缩写`
 * `isIpv6('2001:DB8:0:0:8:800:200C:417A:123') => false`
 * `isIpv6('2000:0000:0000:0000:0001:2345:6789:abcd:1') => false`
 * @param value
 * @returns
 */
export function isIpv6(value: string): boolean {
  if (value == '::1') return true;
  const regIpv6 = /^(([\da-fA-F]{1,4}):){8}$/;
  return regIpv6.test(value + ':');
}

/**
 * 检查是否为 ip string
 * Example:
 * `isIpAddress('::1') => true`
 * `isIpAddress('127.0.0.1') => true`
 * `isIpAddress('2001:DB8:0:0:8:800:200C:417A') => true`
 * `isIpAddress('255.255.255.123.123') => false`
 * @param value
 * @returns
 */
export function isIpAddress(value: string): boolean {
  return isIpv4(value) || isIpv6(value);
}

/**
 * 检查是否为 file.ext string 文件扩展名
 * Example:
 * `checkFileExt(['png', 'jpg'], 'test.jpg') => true`
 * `checkFileExt(['png', 'jpg'], 'test.jpg.txt') => false`
 * @param value
 * @returns
 */
export function checkFileExt(arr: string[], value: string): boolean {
  let regFileExt = arr.map((name) => `.${name}`).join('|');
  return new RegExp(`(${regFileExt})$`).test(value);
}

/**
 * 检查是否为 http 协议，1 是，-1 为 https，0 啥也不是。
 * Example:
 * `isHttp('http://test.com') => 1`
 * `isHttp('http:test.com') => 0`
 * `isHttp('https://test.com') => -1`
 * `isHttp('12345') => 0`
 * @param value
 * @returns
 */
export function isHttp(value: string): -1 | 1 | 0 {
  let flag = value.substring(0, 8);
  return flag.includes('http://') ? 1 : flag.includes('https://') ? -1 : 0;
}

/**
 * Slug 化字符串 => URL
 * Example:
 * `slugify('I LOVE OQM') => 'I_LOVE_OQM'`
 * `slugify('I LOVE OQM', { ' ': '-' }) => 'I-LOVE-OQM'`
 * @param str
 * @param replacement
 * @returns
 */
export function slugify(str: string, replacement?: { [index: string]: string }): string {
  const regForbidden = /[^\w\s$*_+~.()'"!\-:@]/g;

  // https://github.com/simov/slugify
  const REPLACEMENT =
    '$ dollar,% percent,& and,< less,> greater,| or,¢ cent,£ pound,¤ currency,¥ yen,© (c),ª a,® (r),º o,À A,Á A,Â A,Ã A,Ä A,Å A,Æ AE,Ç C,È E,É E,Ê E,Ë E,Ì I,Í I,Î I,Ï I,Ð D,Ñ N,Ò O,Ó O,Ô O,Õ O,Ö O,Ø O,Ù U,Ú U,Û U,Ü U,Ý Y,Þ TH,ß ss,à a,á a,â a,ã a,ä a,å a,æ ae,ç c,è e,é e,ê e,ë e,ì i,í i,î i,ï i,ð d,ñ n,ò o,ó o,ô o,õ o,ö o,ø o,ù u,ú u,û u,ü u,ý y,þ th,ÿ y,Ā A,ā a,Ă A,ă a,Ą A,ą a,Ć C,ć c,Č C,č c,Ď D,ď d,Đ DJ,đ dj,Ē E,ē e,Ė E,ė e,Ę e,ę e,Ě E,ě e,Ğ G,ğ g,Ģ G,ģ g,Ĩ I,ĩ i,Ī i,ī i,Į I,į i,İ I,ı i,Ķ k,ķ k,Ļ L,ļ l,Ľ L,ľ l,Ł L,ł l,Ń N,ń n,Ņ N,ņ n,Ň N,ň n,Ő O,ő o,Œ OE,œ oe,Ŕ R,ŕ r,Ř R,ř r,Ś S,ś s,Ş S,ş s,Š S,š s,Ţ T,ţ t,Ť T,ť t,Ũ U,ũ u,Ū u,ū u,Ů U,ů u,Ű U,ű u,Ų U,ų u,Ź Z,ź z,Ż Z,ż z,Ž Z,ž z,ƒ f,Ơ O,ơ o,Ư U,ư u,ǈ LJ,ǉ lj,ǋ NJ,ǌ nj,Ș S,ș s,Ț T,ț t,˚ o,Ά A,Έ E,Ή H,Ί I,Ό O,Ύ Y,Ώ W,ΐ i,Α A,Β B,Γ G,Δ D,Ε E,Ζ Z,Η H,Θ 8,Ι I,Κ K,Λ L,Μ M,Ν N,Ξ 3,Ο O,Π P,Ρ R,Σ S,Τ T,Υ Y,Φ F,Χ X,Ψ PS,Ω W,Ϊ I,Ϋ Y,ά a,έ e,ή h,ί i,ΰ y,α a,β b,γ g,δ d,ε e,ζ z,η h,θ 8,ι i,κ k,λ l,μ m,ν n,ξ 3,ο o,π p,ρ r,ς s,σ s,τ t,υ y,φ f,χ x,ψ ps,ω w,ϊ i,ϋ y,ό o,ύ y,ώ w,Ё Yo,Ђ DJ,Є Ye,І I,Ї Yi,Ј J,Љ LJ,Њ NJ,Ћ C,Џ DZ,А A,Б B,В V,Г G,Д D,Е E,Ж Zh,З Z,И I,Й J,К K,Л L,М M,Н N,О O,П P,Р R,С S,Т T,У U,Ф F,Х H,Ц C,Ч Ch,Ш Sh,Щ Sh,Ъ U,Ы Y,Ь ,Э E,Ю Yu,Я Ya,а a,б b,в v,г g,д d,е e,ж zh,з z,и i,й j,к k,л l,м m,н n,о o,п p,р r,с s,т t,у u,ф f,х h,ц c,ч ch,ш sh,щ sh,ъ u,ы y,ь ,э e,ю yu,я ya,ё yo,ђ dj,є ye,і i,ї yi,ј j,љ lj,њ nj,ћ c,џ dz,Ґ G,ґ g,฿ baht,ა a,ბ b,გ g,დ d,ე e,ვ v,ზ z,თ t,ი i,კ k,ლ l,მ m,ნ n,ო o,პ p,ჟ zh,რ r,ს s,ტ t,უ u,ფ f,ქ k,ღ gh,ყ q,შ sh,ჩ ch,ც ts,ძ dz,წ ts,ჭ ch,ხ kh,ჯ j,ჰ h,ẞ SS,Ạ A,ạ a,Ả A,ả a,Ấ A,ấ a,Ầ A,ầ a,Ẩ A,ẩ a,Ẫ A,ẫ a,Ậ A,ậ a,Ắ A,ắ a,Ằ A,ằ a,Ẳ A,ẳ a,Ẵ A,ẵ a,Ặ A,ặ a,Ẹ E,ẹ e,Ẻ E,ẻ e,Ẽ E,ẽ e,Ế E,ế e,Ề E,ề e,Ể E,ể e,Ễ E,ễ e,Ệ E,ệ e,Ỉ I,ỉ i,Ị I,ị i,Ọ O,ọ o,Ỏ O,ỏ o,Ố O,ố o,Ồ O,ồ o,Ổ O,ổ o,Ỗ O,ỗ o,Ộ O,ộ o,Ớ O,ớ o,Ờ O,ờ o,Ở O,ở o,Ỡ O,ỡ o,Ợ O,ợ o,Ụ U,ụ u,Ủ U,ủ u,Ứ U,ứ u,Ừ U,ừ u,Ử U,ử u,Ữ U,ữ u,Ự U,ự u,Ỳ Y,ỳ y,Ỵ Y,ỵ y,Ỷ Y,ỷ y,Ỹ Y,ỹ y,‘ \',’ \',“ ",” ",† +,• *,… ...,₠ ecu,₢ cruzeiro,₣ french franc,₤ lira,₥ mill,₦ naira,₧ peseta,₨ rupee,₩ won,₪ new shequel,₫ dong,€ euro,₭ kip,₮ tugrik,₯ drachma,₰ penny,₱ peso,₲ guarani,₳ austral,₴ hryvnia,₵ cedi,₹ indian rupee,₽ russian ruble,₿ bitcoin,℠ sm,™ tm,∂ d,∆ delta,∑ sum,∞ infinity,♥ love,元 yuan,円 yen,﷼ rial';

  const defReplacement: any = {};

  REPLACEMENT.split(',').forEach((item: any) => {
    item = item.split(' ');
    defReplacement[item[0]] = item[1];
  });

  defReplacement[' '] = '_';

  const tempReplacement = union(replacement ?? {}, defReplacement);
  return str
    .split('')
    .reduce((total: string, char: string) => total + (tempReplacement[char] || char), '')
    .replace(regForbidden, '');
}

/**
 * 截取字符串，使其长度为指定值，包含省略符。
 * Example:
 * `truncate('HXB HXB HXB HXB HXB HXB', 12) => 'HXB HXB H...'`
 * `truncate('OQM-OQM-OQM-OQM-OQM-OQM', 10, { ellipsis: '～', separator: '-' }) => 'OQM-OQM～'`
 * @param txt
 * @param width
 * @param options
 * @returns
 */
export function truncate(
  txt: string,
  width: number,
  options?: {
    ellipsis?: string; // 省略符
    separator?: string; // 分隔符，尽可能使截取位置在该处。
  }
) {
  const defOptions = {
    ellipsis: '...',
    separator: undefined
  };
  const tempOpts: {
    ellipsis: string;
    separator: string;
  } = union(options ?? {}, defOptions);

  const { ellipsis, separator } = tempOpts;
  const len = txt.length;

  if (width >= len) return txt;

  const end = width - ellipsis.length;
  if (end < 1) return ellipsis;

  let ret = txt.slice(0, end);
  if (isUndef(separator)) return ret + ellipsis;

  if (txt.indexOf(separator, end) !== end) {
    const idx = ret.lastIndexOf(separator);
    if (idx > -1) {
      ret = ret.slice(0, idx);
    }
  }

  return ret + ellipsis;
}

/**
 * 格式化 JSON 字符串
 * Example:
 * `formatJSON({ a: 123, b: 456 }, null, 2) => '{\n  "a": 123,\n  "b": 456\n}'`
 * `formatJSON('123', null, 2) => '"123"'`
 * `formatJSON(123, null, 2) => '123'`
 * `formatJSON(null, null, 2) => 'null'`
 * `formatJSON(true, null, 2) => 'true'`
 * `formatJSON(undefined, null, 2) => 'undefined'`
 * `formatJSON(new Date(), null, 2) => '"2023-03-02T10:02:42.019Z"'`
 * @param value
 * @returns
 */
export function formatJSON(value: any): string {
  try {
    return JSON.stringify(value, null, 2) ?? 'undefined';
  } catch (e) {
    return `${value}`;
  }
}
