/* eslint-disable max-lines */
/*
 * @Author: HxB
 * @Date: 2022-04-26 15:45:48
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-04-13 11:14:52
 * @Description: 字符串常用函数
 * @FilePath: \js-xxx\src\String\index.ts
 */
import { BASE_NUMBER, PY_MAPS } from '@/Data';
import { union } from '@/Tools';
import { isStr, isUndef } from '@/Types';

// eslint-disable-next-line spellcheck/spell-checker, zob/comment
/**
 * 字符转 unicode
 * @example
 * unicode2str("我是老A"); /// '\\u6211\\u662f\\u8001a'
 * @param value 中文字符串
 * @returns
 */
export function unicode2str(value: string): string {
  return escape(value).toLowerCase().replace(/%u/gi, '\\u');
}

// eslint-disable-next-line spellcheck/spell-checker, zob/comment
/**
 * unicode 转字符
 * @example
 * str2unicode("\\u6211\\u662f\\u8001a"); /// '我是老a'
 * @param value unicode 字符串
 * @returns
 */
export function str2unicode(value: string): string {
  return unescape(value.replace(/\\u/gi, '%u'));
}

/**
 * 去除字符串空格
 * `可选值：0|ba：去除前后空格，1|b：去除前空格，2|a：去除后空格，3|all：去除所有空格，4|pro：去除所有空格，中间的空格保留一个。`
 * @example
 * trim('  a  b  ', 4); /// 'a b'
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
      // 去除前后空格并将中间的单个空格保留，多个空格变为一个空格。
      return (str = str.replace(/(^\s*)|(\s*$)|\s(?=\s)/g, ''));
    default:
      return str;
  }
}

// eslint-disable-next-line spellcheck/spell-checker, zob/comment
/**
 * 字符串脱敏(biugle 自定义规则)
 * @example
 * maskString(undefined); /// '-'
 * maskString('13579246810'); /// '135****6810'
 * maskString('王小二'); /// '王***二'
 * maskString('123456789'); /// '123****89'
 * maskString('130223199809282927'); /// '13022********927'
 * maskString('广东省深圳市龙华区'); /// 广东省****华区'
 * maskString('广东省深圳市福田区福田保税区xxx小区xxx单元x栋x楼xxx号'); /// '广东省深圳市福田区******xx号'
 * @param str 字符串
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
 * @example
 * textTransferCase('red', 'upper'|1); /// 'RED'
 * textTransferCase('red', 'lower'|2); /// 'red'
 * textTransferCase('red', 'first'|3); /// 'Red'
 * @param str 字符串
 * @param type 目标类型
 * @returns
 */
export function textTransferCase(str: string, type: 1 | 2 | 3 | 'upper' | 'lower' | 'first') {
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
 * @example
 * textSplitCase('foo-bar'); /// ['foo', 'bar']
 * textSplitCase('foo_bar'); /// ['foo', 'bar']
 * textSplitCase('foo bar'); /// ['foo', 'bar']
 * textSplitCase('foo.bar'); /// ['foo', 'bar']
 * textSplitCase('fooBar'); /// ['foo', 'bar']
 * textSplitCase('foo-Bar'); /// ['foo', 'bar']
 * @param str 字符串
 * @returns
 */
export function textSplitCase(str: string): string[] {
  const regUpperCase = /([A-Z])/g;
  const regSeparator = /[_.\- ]+/g;
  const regTrim = /(^-)|(-$)/g;
  str = str.replace(regUpperCase, '-$1').toLowerCase().replace(regSeparator, '-').replace(regTrim, '');

  return str.split('-');
}

/**
 * 字符串转驼峰
 * @example
 * textCamelCase('foo-bar'); /// 'fooBar'
 * textCamelCase('foo_bar'); /// 'fooBar'
 * textCamelCase('foo bar'); /// 'fooBar'
 * textCamelCase('foo.bar'); /// 'fooBar'
 * @param str 字符串
 * @returns
 */
export function textCamelCase(str: string) {
  const arr = textSplitCase(str);

  let ret = arr[0];
  arr.shift();

  arr.forEach((i, idx) => {
    arr[idx] = textTransferCase(i, 'first');
  });
  ret += arr.join('');

  return ret;
}

/**
 * 字符串 repeat
 * @example
 * repeat('*'); /// '*'
 * repeat('*', 3); /// '***'
 * @param str 字符串
 * @returns
 */
export function repeat(str: string, n = 1): string {
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
 * @example
 * isUrl('http://www.example.com?foo=bar&param=test'); /// true
 * isUrl(http://www); /// false
 * @param value 字符串值
 * @returns
 */
export function isUrl(value: string): boolean {
  const regUrl = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/;
  return regUrl.test(value);
}

/**
 * 检查是否为 email string 邮箱
 * @example
 * isEmail('test@qq.com'); /// true
 * isEmail('@qq.com'); /// false
 * @param value 字符串值
 * @returns
 */
export function isEmail(value: string): boolean {
  const regEmail = /.+@.+\..+/;
  return regEmail.test(value);
}

/**
 * 检查是否为 string 手机号
 * @example
 * isMobile('13579246810'); /// true
 * isMobile('12345678910'); /// false
 * @param value 字符串值
 * @returns
 */
export function isMobile(value: string): boolean {
  const regPhoneNum = /^(0|86|17951)?(1[3-9][0-9])[0-9]{8}$/;
  return regPhoneNum.test(value);
}

// eslint-disable-next-line zob/comment
/**
 * 检查是否为 char string 用户名规范(字母数字下划线或中文)
 * @example
 * isAccount('test123@qq.com'); /// false
 * isAccount('_test123_qq_com'); /// false
 * isAccount('test123_qq_com'); /// true
 * isAccount('我test123_qq_com'); /// false
 * isAccount('我test123_qq_com', true); /// true
 * @param value 字符串值
 * @returns
 */
export function isAccount(value: string, hasChinese = false): boolean {
  if (!value) {
    return false;
  }
  const regChar = hasChinese
    ? /^[a-zA-Z\u4E00-\u9FA5]([a-zA-Z0-9_\u4E00-\u9FA5]{5,17})$/
    : /^[a-zA-Z]([a-zA-Z0-9_\u4E00-\u9FA5]{5,17})$/;
  return regChar.test(value);
}

/**
 * 检查密码强度是否足够
 * @example
 * isStrongPassWord('test@qq.com'); /// false
 * isStrongPassWord('test@qq.com123'); /// true
 * @param value 字符串值
 * @returns
 */
export function isStrongPassWord(value: string): boolean {
  const pwChar = /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,16}/;
  return pwChar.test(value);
}

// eslint-disable-next-line zob/comment
/**
 * 检查是否为 carCode string 车牌号
 * @example
 * isCarCode('粤B68928'); /// true
 * isCarCode('粤-B68928'); /// true
 * isCarCode('粤 B68928'); /// true
 * isCarCode('粤B.68928'); /// true
 * isCarCode('粤B 68928'); /// true
 * isCarCode('广东 B12345'); /// false
 * @param value 字符串值
 * @returns
 */
export function isCarCode(value: string): boolean {
  const regCarCode =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[\s\-]{0,1}[A-Z]{1}[\.\s]{0,1}[A-Z0-9]{4,5}[A-Z0-9挂学警港澳]{1}$/;
  return regCarCode.test(value);
}

/**
 * 检查是否为 ipv4 string
 * @example
 * isIpv4('127.0.0.1'); /// true
 * isIpv4('255.255.255.0'); /// true
 * isIpv4('255.255.255.2555'); /// false
 * isIpv4('255.255.255.2555.255'); /// false
 * @param value 字符串值
 * @returns
 */
export function isIpv4(value: string): boolean {
  const regIpv4 = /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/;
  return regIpv4.test(value + '.');
}

// eslint-disable-next-line spellcheck/spell-checker
/**
 * 检查是否为 ipv6 string
 * @example
 * isIpv6('::1'); /// true
 * isIpv6('127.0.0.1'); /// false
 * isIpv6('2000:0000:0000:0000:0001:2345:6789:abcd'); /// true
 * isIpv6('2001:DB8:0:0:8:800:200C:417A'); /// true
 * isIpv6('2001:DB8::8:800:200C:417A'); /// false 暂不兼容缩写
 * isIpv6('2001:DB8:0:0:8:800:200C:417A:123'); /// false
 * isIpv6('2000:0000:0000:0000:0001:2345:6789:abcd:1'); /// false
 * @param value 字符串值
 * @returns
 */
export function isIpv6(value: string): boolean {
  if (value == '::1') return true;
  const regIpv6 = /^(([\da-fA-F]{1,4}):){8}$/;
  return regIpv6.test(value + ':');
}

/**
 * 检查是否为 ip string
 * @example
 * isIpAddress('::1'); /// true
 * isIpAddress('127.0.0.1'); /// true
 * isIpAddress('2001:DB8:0:0:8:800:200C:417A'); /// true
 * isIpAddress('255.255.255.123.123'); /// false
 * @param value 字符串值
 * @returns
 */
export function isIpAddress(value: string): boolean {
  return isIpv4(value) || isIpv6(value);
}

// eslint-disable-next-line spellcheck/spell-checker
/**
 * 检查是否为 file.ext string 文件扩展名
 * @example
 * checkFileExt(['png', 'jpg'], 'test.jpg'); /// true
 * checkFileExt(['png', 'jpg'], 'test.jpg.txt'); /// false
 * @param value 字符串值
 * @returns
 */
export function checkFileExt(arr: string[], value: string): boolean {
  const regFileExt = arr.map((name) => `.${name}`).join('|');
  return new RegExp(`(${regFileExt})$`).test(value);
}

/**
 * 检查是否为 http 协议，1 是，-1 为 https，0 啥也不是。
 * @example
 * isHttp('http://test.com'); /// 1
 * isHttp('http:test.com'); /// 0
 * isHttp('https://test.com'); /// -1
 * isHttp('12345'); /// 0
 * @param value 字符串值
 * @returns
 */
export function isHttp(value: string): -1 | 1 | 0 {
  const flag = value.substring(0, 8);
  return flag.includes('http://') ? 1 : flag.includes('https://') ? -1 : 0;
}

/**
 * Slug 化字符串 URL，将字符串转换为 URL 友好的格式。
 * @example
 * slugify('I LOVE OQM'); /// 'I_LOVE_OQM'
 * slugify('I LOVE OQM', { ' ': '-' }); /// 'I-LOVE-OQM'
 * @param str 字符串值
 * @param replacement 替换字符串映射
 * @returns
 */
export function slugify(str: string, replacement?: { [index: string]: string }): string {
  const regForbidden = /[^\w\s$*_+~.()'"!\-:@]/g;

  // https://github.com/simov/slugify
  const REPLACEMENT =
    // eslint-disable-next-line spellcheck/spell-checker
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
 * @example
 * truncate('HXB HXB HXB HXB HXB HXB', 12); /// 'HXB HXB H...'
 * truncate('OQM-OQM-OQM-OQM-OQM-OQM', 10, { ellipsis: '～', separator: '-' }); /// 'OQM-OQM～'
 * @param txt 字符串值
 * @param width 指定长度
 * @param options 截取配置
 * @returns
 */
export function truncate(
  txt: string,
  width: number,
  options?: {
    // 省略符
    ellipsis?: string;
    // 分隔符，尽可能使截取位置在该处。
    separator?: string;
  },
) {
  const defOptions = {
    ellipsis: '...',
    separator: undefined,
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
 * @example
 * formatJSON({ a: 123, b: 456 }); /// '{\n  "a": 123,\n  "b": 456\n}'
 * formatJSON('123'); /// '"123"'
 * formatJSON(123); /// '123'
 * formatJSON(null); /// 'null'
 * formatJSON(true); /// 'true'
 * formatJSON(undefined); /// 'undefined'
 * formatJSON(new Date()); /// '"2023-03-02T10:02:42.019Z"'
 * @param value 值
 * @returns
 */
export function formatJSON(value: any): string {
  try {
    // JSON.stringify(value, ['key']); // 只取对象某个字段
    return JSON.stringify(value, null, 2) ?? 'undefined';
  } catch (e) {
    return `${value}`;
  }
}

/**
 * 检查是否为 QQ 号
 * @example
 * isQQ('1005760694'); /// true
 * isQQ('123456789101'); /// false
 * @param value 字符串值
 * @returns
 */
export function isQQ(value: string): boolean {
  const reg = /^[1-9][0-9]{4,10}$/;
  return reg.test(value);
}

/**
 * 是否全为英文
 * @example
 * isEnglish('Aa'); /// true
 * isEnglish('a1'); /// false
 * @param value 字符串值
 * @returns
 */
export function isEnglish(value: string): boolean {
  const reg = /^[a-zA-Z]+$/;
  return reg.test(value);
}

/**
 * 是否全为英文
 * @example
 * hasSpecialChar('Aa('); /// true
 * hasSpecialChar('a1'); /// false
 * @param value 字符串值
 * @returns
 */
export function hasSpecialChar(value: string): boolean {
  if (value) {
    // 英文符号
    const containSpecialForEnglish = RegExp(
      // eslint-disable-next-line no-useless-escape
      /[(\s)(\`)(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/,
    );
    // 中文符号
    const containSpecialForChinese = RegExp(
      // eslint-disable-next-line no-useless-escape
      /[(\·)(\~)(\！)(\￥)(\%)(\……)(\&)(\*)(\（)(\）)(\——)(\【)(\】)(\；)(\：)(\”)(\“)(\’)(\，)(\《)(\。)(\》)(\？)(\、)(\‘)(\’)]+/,
    );
    return containSpecialForEnglish.test(value) || containSpecialForChinese.test(value);
  }
  return false;
}

/**
 * 判断数据是否为座机号(固定电话)
 * @example
 * isTel('0731-24722145'); /// true
 * isTel('13579246810'); /// false
 * @param value 字符串值
 * @returns
 */
export function isTel(value: string): boolean {
  if (value.match(/^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/) == null) {
    return false;
  } else {
    return true;
  }
}

/**
 * 是否全为中文
 * @example
 * isChinese('呜呜呜'); /// true
 * isChinese('我 1'); /// false
 * @param value 字符串值
 * @returns
 */
export function isChinese(value: string): boolean {
  return /^[\u4E00-\u9FA5]*$/.test(value);
}

/**
 * 判断是否为统一社会信用代码
 * @example
 * isCreditCode('9144030071526726XG'); /// true
 * isCreditCode('12312312312'); /// false
 * @param value 字符串值
 * @returns
 */
export function isCreditCode(value: string): boolean {
  const reg = /^[0-9A-Z]+$/;
  // 18 位校验及大写校验
  if (value.length != 18 || reg.test(value) == false) {
    return false;
  } else {
    // 统一社会信用代码的每一个值
    let AnCode;
    // 统一社会信用代码每一个值的权重
    let AnCodeValue;
    let total = 0;
    // 加权因子
    const weightedFactors = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];
    // 不用 I 、 O 、 S 、 V 、 Z
    const str = `${BASE_NUMBER}ABCDEFGHJKLMNPQRTUWXY`;
    for (let i = 0; i < value.length - 1; i++) {
      AnCode = value.substring(i, i + 1);
      AnCodeValue = str.indexOf(AnCode);
      total = total + AnCodeValue * weightedFactors[i];
      // 权重与加权因子相乘之和
    }
    let logicCheckCode: any = 31 - (total % 31);
    if (logicCheckCode == 31) {
      logicCheckCode = 0;
    }
    const Str = '0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,T,U,W,X,Y';
    const Array_Str = Str.split(',');
    logicCheckCode = Array_Str[logicCheckCode];

    const checkCode = value.substring(17, 18);
    if (logicCheckCode != checkCode) {
      return false;
    }
    return true;
  }
}

/**
 * 判断是否为银行卡号
 * @example
 * isBankCard('6217003810026896707'); /// true
 * isBankCard('12312312312'); /// false
 * @param value 字符串值
 * @returns
 */
export function isBankCard(value: string): boolean {
  if ('' == value.trim() || undefined == value) {
    return false;
  }
  // 取出最后一位
  const lastNum: any = value.substring(value.length - 1);

  // 前 15 或 18 位
  const first15Num = value.substring(0, value.length - 1);
  const newArr = [];
  for (let i = first15Num.length - 1; i > -1; i--) {
    // 前 15 或 18 位倒序存进数组
    newArr.push(first15Num.substring(i, i + 1));
  }
  // 奇数位*2 的积 < 9
  const arrJiShu: any = [];
  // 奇数位*2 的积 > 9
  const arrJiShu2: any = [];
  // 偶数位数组
  const arrOuShu: any = [];
  for (let j = 0; j < newArr.length; j++) {
    if ((j + 1) % 2 == 1) {
      // 奇数位
      if (parseInt(newArr[j]) * 2 < 9) {
        arrJiShu.push(parseInt(newArr[j]) * 2);
      } else {
        arrJiShu2.push(parseInt(newArr[j]) * 2);
      }
    } else {
      // 偶数位
      arrOuShu.push(newArr[j]);
    }
  }

  // 奇数位*2 > 9 的分割之后的数组个位数
  const jsShuChild1: any = [];
  // 奇数位*2 > 9 的分割之后的数组十位数
  const jsShuChild2: any = [];
  for (let h = 0; h < arrJiShu2.length; h++) {
    jsShuChild1.push(parseInt(arrJiShu2[h]) % 10);
    jsShuChild2.push(parseInt(arrJiShu2[h]) / 10);
  }

  // 奇数位*2 < 9 的数组之和
  let sumJiShu: any = 0;
  // 偶数位数组之和
  let sumOuShu: any = 0;
  // 奇数位*2 > 9 的分割之后的数组个位数之和
  let sumJiShuChild1: any = 0;
  // 奇数位*2 > 9 的分割之后的数组十位数之和
  let sumJiShuChild2: any = 0;
  let sumTotal: any = 0;
  for (let m = 0; m < arrJiShu.length; m++) {
    sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
  }

  for (let n = 0; n < arrOuShu.length; n++) {
    sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
  }

  for (let p = 0; p < jsShuChild1.length; p++) {
    sumJiShuChild1 = sumJiShuChild1 + parseInt(jsShuChild1[p]);
    sumJiShuChild2 = sumJiShuChild2 + parseInt(jsShuChild2[p]);
  }
  // 计算总和
  sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);

  // 计算 LuhM 值
  const k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
  const LuhM = 10 - k;

  if (lastNum == LuhM) {
    return true;
  } else {
    return false;
  }
}

/**
 * 密码强度等级检测(-1~5)
 * @example
 * checkPassWordLevel('123'); /// -1
 * checkPassWordLevel('123456'); /// 1
 * checkPassWordLevel('12345678'); /// 2
 * checkPassWordLevel('12345678.'); /// 3
 * checkPassWordLevel('123456789654321.'); /// 4
 * checkPassWordLevel('123456789654321.H'); /// 5
 * @param passWord 字符串值-密码
 * @returns
 */
export function checkPassWordLevel(passWord: string) {
  const a = /[^ \f\n\r\t\v\da-zA-Z]/,
    b = /\d/,
    c = /[a-zA-Z]/;
  const d = /^[^ \f\n\r\t\v\da-zA-Z]+$/,
    e = /^\d+$/,
    f = /^[a-zA-Z]+$/;
  if (6 <= passWord.length) {
    if (a.test(passWord) && b.test(passWord) && c.test(passWord)) {
      if (8 > passWord.length) {
        return 2;
      }
      if (12 > passWord.length) {
        return 3;
      }
      if (15 > passWord.length) {
        return 4;
      }
      if (15 <= passWord.length) {
        return 5;
      }
    }
    if (
      (a.test(passWord) && b.test(passWord)) ||
      (a.test(passWord) && c.test(passWord)) ||
      (b.test(passWord) && c.test(passWord))
    ) {
      if (8 > passWord.length) {
        return 2;
      }
      if (12 > passWord.length) {
        return 3;
      }
      if (15 > passWord.length) {
        return 4;
      }
      if (15 <= passWord.length) {
        return 4;
      }
    }
    if (d.test(passWord) || e.test(passWord) || f.test(passWord)) {
      if (8 <= passWord.length) {
        return 2;
      }
    }
    return 1;
  }
  return -1;
}

/**
 * 获取汉字拼音或首字母
 * @example
 * getPinYin('你好'); /// 'NiHao'
 * getPinYin('你好', true); /// 'NH'
 * getPinYin('贺'); /// 'He'
 * @param str 字符串值
 * @param extractFirst 是否只获取首字母
 * @returns
 */
export function getPinYin(str: string, extractFirst = false) {
  let i,
    tmp,
    key,
    result = '',
    flag,
    firstChar;

  for (i = 0; i < str.length; i++) {
    tmp = str.substring(i, i + 1);
    flag = false;
    for (key in PY_MAPS) {
      if (isStr(PY_MAPS[key]) && PY_MAPS[key].indexOf(tmp) != -1) {
        firstChar = key.substring(0, 1).toUpperCase();

        if (true == extractFirst) {
          result += firstChar;
        } else {
          result += firstChar + key.substring(1, key.length).toLowerCase();
        }

        flag = true;
        break;
      }
    }
    if (!flag) {
      result += tmp;
    }
  }
  return result;
}

/**
 * 强制转换扫描字符串的特殊字符
 * `/(=)|(<)|(>)|(《)|(》)|(&)|(%)|(\^)|(!)|(~)|(#)|(@)|(:)|(\s)|(')|(")|(‘)|(’)|(“)|(”)/g`
 * @example
 * transferScanStr('=900182201234500'); /// '900182201234500'
 * transferScanStr('=<E5433000'); /// 'E5433000'
 * transferScanStr('@123', true); /// '123'
 * transferScanStr('#te st~ ', true); /// 'test'
 * transferScanStr(undefined); /// ''
 * @param value 值
 * @param higherReplace 严格替换
 * @returns
 */
export function transferScanStr(value: string, higherReplace = false): string {
  if (!value) {
    return '';
  }
  value = trim(`${value}`);
  if (higherReplace) {
    return `${value}`.replace(
      /(=)|(<)|(>)|(《)|(》)|(&)|(%)|(\^)|(!)|(~)|(#)|(@)|(:)|(\s)|(')|(")|(‘)|(’)|(“)|(”)/g,
      '',
    );
  }
  return `${value}`.replace(/(=)|(<)|(>)|(《)|(》)|(&)|(%)|(\^)|(!)|(~)/g, '');
}

/**
 * 强制给字符串添加空格间隔
 * @example
 * addSpace('test'); /// 't e s t'
 * addSpace(null); /// ''
 * addSpace('123 45'); /// '1 2 3 4 5'
 * @param str 字符串
 * @returns
 */
export function addSpace(str: string | number): string {
  if (!str) {
    return '';
  }
  return `${str}`.replaceAll(' ', '').split('').join(' ');
}

/**
 * 左边补某个字符
 * @example
 * leftJoin('1', 3, '0'); /// '001'
 * leftJoin(0, 3, 1); /// '110'
 * @param str 字符串
 * @returns
 */
export function leftJoin(str: string | number, length: string | number = 2, char: string | number = 0): string {
  return `${str ?? ''}`.padStart(Number(length), `${char}`);
}

/**
 * 右边补某个字符
 * @example
 * rightJoin('1', 3, 'x'); /// '1xx'
 * rightJoin(0, 3, 1); /// '011'
 * @param str 字符串
 * @returns
 */
export function rightJoin(str: string | number, length: string | number = 2, char: string | number = 0): string {
  return `${str ?? ''}`.padEnd(Number(length), `${char}`);
}
