/**
 * 字符转 unicode
 * Example: `unicode2str("我是老A") => '\\u6211\\u662f\\u8001a'`
 * @param value 中文字符串
 * @returns
 */
export declare function unicode2str(value: string): string;
/**
 * unicode 转字符
 * Example: `str2unicode("\\u6211\\u662f\\u8001a") => '我是老a'`
 * @param value unicode 字符串
 * @returns
 */
export declare function str2unicode(value: string): string;
/**
 * 去除字符串空格
 * 可选值：0|ba：去除前后空格，1|b：去除前空格，2|a：去除后空格，3|all：去除所有空格，4|pro：去除所有空格，中间的空格保留一个。
 * Example: `trim('  a  b  ', 4) => 'a b'`
 * @param str 字符串
 * @param type 类型，默认为 0|ba，错误 type 会返回原字符串。
 * @returns
 */
export declare function trim(str: string, type?: number | string): string;
/**
 * base64 编码 btoa(binary to ascii)(not support unicode)
 * 使用 url 中时建议使用 encodeURIComponent 再次编码，因为单独 + 号在 url 中会被解析成空格。
 * 使用 encodeURIComponent 会把 + 解析为 %2B 与空格 %20 区分
 * `btoa(encodeURIComponent(str))`
 * Example:
 * `btoa('我是 leo') => '5oiR5pivIGxlbw=='`
 * `btoa('我是 leo', true) => '5oiR5pivIGxlbw'`
 * @param str 字符串
 * @param replaceChar 是否替换结果字符串中的特殊字符 '+/='，适用于 url 编码。
 * @returns
 */
export declare function btoa(str: string, replaceChar?: boolean): string;
/**
 * base64 解码 atob(ascii to binary)(not support unicode)
 * `decodeURIComponent(atob(encodeStr))`
 * Example:
 * `atob('5oiR5pivIGxlbw==') => '我是 leo'`
 * `atob('5oiR5pivIGxlbw') => '我是 leo'`
 * @param str base64 加密后的字符串
 * @returns
 */
export declare function atob(str: string): string;
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
export declare function maskString(str: string): string;
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
export declare function transferCase(str: string, type: 1 | 2 | 3 | 'upper' | 'lower' | 'first'): string;
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
export declare function splitCase(str: string): string[];
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
export declare function camelCase(str: string): string;
/**
 * 字符串 repeat
 * Example:
 * `repeat('*') => '*'`
 * `repeat('*', 3) => '***'`
 * @param str
 * @returns
 */
export declare function repeat(str: string, n?: number): string;
/**
 * 检查是否为 url string
 * Example:
 * `isUrl('http://www.example.com?foo=bar&param=test') => true`
 * `isUrl(http://www) => false`
 * @param value
 * @returns
 */
export declare function isUrl(value: string): boolean;
/**
 * 检查是否为 email string 邮箱
 * Example:
 * `isEmail('test@qq.com') => true`
 * `isEmail('@qq.com') => false`
 * @param value
 * @returns
 */
export declare function isEmail(value: string): boolean;
/**
 * 检查是否为 phoneNum string 手机号
 * Example:
 * `isPhoneNum('13579246810') => true`
 * `isPhoneNum('12345678910') => false`
 * @param value
 * @returns
 */
export declare function isPhoneNum(value: string): boolean;
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
export declare function isChar(value: string, hasChinese?: boolean): boolean;
/**
 * 检查密码强度是否足够
 * Example:
 * `isStrongPassWord('test@qq.com') => false`
 * `isStrongPassWord('test@qq.com123') => true`
 * @param value
 * @returns
 */
export declare function isStrongPassWord(value: string): boolean;
/**
 * 检查是否为 carCode string 车牌号
 * Example:
 * `isCarCode('粤B68928') => true`
 * `isCarCode('粤B.68928') => true`
 * `isCarCode('广东B12345') => false`
 * @param value
 * @returns
 */
export declare function isCarCode(value: string): boolean;
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
export declare function isIpv4(value: string): boolean;
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
export declare function isIpv6(value: string): boolean;
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
export declare function isIpAddress(value: string): boolean;
/**
 * 检查是否为 file.ext string 文件扩展名
 * Example:
 * `checkFileExt(['png', 'jpg'], 'test.jpg') => true`
 * `checkFileExt(['png', 'jpg'], 'test.jpg.txt') => false`
 * @param value
 * @returns
 */
export declare function checkFileExt(arr: string[], value: string): boolean;
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
export declare function isHttp(value: string): -1 | 1 | 0;
/**
 * Slug 化字符串 => URL
 * Example:
 * `slugify('I LOVE OQM') => 'I_LOVE_OQM'`
 * `slugify('I LOVE OQM', { ' ': '-' }) => 'I-LOVE-OQM'`
 * @param str
 * @param replacement
 * @returns
 */
export declare function slugify(str: string, replacement?: {
    [index: string]: string;
}): string;
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
export declare function truncate(txt: string, width: number, options?: {
    ellipsis?: string;
    separator?: string;
}): string;
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
export declare function formatJSON(value: any): string;
//# sourceMappingURL=index.d.ts.map