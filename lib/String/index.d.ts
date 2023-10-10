/**
 * 字符转 unicode
 * @example
 * unicode2str("我是老A"); /// '\\u6211\\u662f\\u8001a'
 * @param value 中文字符串
 * @returns
 */
export declare function unicode2str(value: string): string;
/**
 * unicode 转字符
 * @example
 * str2unicode("\\u6211\\u662f\\u8001a"); /// '我是老a'
 * @param value unicode 字符串
 * @returns
 */
export declare function str2unicode(value: string): string;
/**
 * 去除字符串空格
 * `可选值：0|ba：去除前后空格，1|b：去除前空格，2|a：去除后空格，3|all：去除所有空格，4|pro：去除所有空格，中间的空格保留一个。`
 * @example
 * trim('  a  b  ', 4); /// 'a b'
 * @param str 字符串
 * @param type 类型，默认为 0|ba，错误 type 会返回原字符串。
 * @returns
 */
export declare function trim(str: string, type?: number | string): string;
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
export declare function maskString(str: string): string;
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
export declare function textTransferCase(str: string, type: 1 | 2 | 3 | 'upper' | 'lower' | 'first'): string;
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
export declare function textSplitCase(str: string): string[];
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
export declare function textCamelCase(str: string): string;
/**
 * 字符串 repeat
 * @example
 * repeat('*'); /// '*'
 * repeat('*', 3); /// '***'
 * @param str 字符串
 * @returns
 */
export declare function repeat(str: string, n?: number): string;
/**
 * 检查是否为 url string
 * @example
 * isUrl('http://www.example.com?foo=bar&param=test'); /// true
 * isUrl(http://www); /// false
 * @param value 字符串值
 * @returns
 */
export declare function isUrl(value: string): boolean;
/**
 * 检查是否为 email string 邮箱
 * @example
 * isEmail('test@qq.com'); /// true
 * isEmail('@qq.com'); /// false
 * @param value 字符串值
 * @returns
 */
export declare function isEmail(value: string): boolean;
/**
 * 检查是否为 string 手机号
 * @example
 * isMobile('13579246810'); /// true
 * isMobile('12345678910'); /// false
 * @param value 字符串值
 * @returns
 */
export declare function isMobile(value: string): boolean;
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
export declare function isAccount(value: string, hasChinese?: boolean): boolean;
/**
 * 检查密码强度是否足够
 * @example
 * isStrongPassWord('test@qq.com'); /// false
 * isStrongPassWord('test@qq.com123'); /// true
 * @param value 字符串值
 * @returns
 */
export declare function isStrongPassWord(value: string): boolean;
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
export declare function isCarCode(value: string): boolean;
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
export declare function isIpv4(value: string): boolean;
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
export declare function isIpv6(value: string): boolean;
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
export declare function isIpAddress(value: string): boolean;
/**
 * 检查是否为 file.ext string 文件扩展名
 * @example
 * checkFileExt(['png', 'jpg'], 'test.jpg'); /// true
 * checkFileExt(['png', 'jpg'], 'test.jpg.txt'); /// false
 * @param value 字符串值
 * @returns
 */
export declare function checkFileExt(arr: string[], value: string): boolean;
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
export declare function isHttp(value: string): -1 | 1 | 0;
/**
 * Slug 化字符串 URL，将字符串转换为 URL 友好的格式。
 * @example
 * slugify('I LOVE OQM'); /// 'I_LOVE_OQM'
 * slugify('I LOVE OQM', { ' ': '-' }); /// 'I-LOVE-OQM'
 * @param str 字符串值
 * @param replacement 替换字符串映射
 * @returns
 */
export declare function slugify(str: string, replacement?: {
    [index: string]: string;
}): string;
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
export declare function truncate(txt: string, width: number, options?: {
    ellipsis?: string;
    separator?: string;
}): string;
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
export declare function formatJSON(value: any): string;
/**
 * 检查是否为 QQ 号
 * @example
 * isQQ('1005760694'); /// true
 * isQQ('123456789101'); /// false
 * @param value 字符串值
 * @returns
 */
export declare function isQQ(value: string): boolean;
/**
 * 是否全为英文
 * @example
 * isEnglish('Aa'); /// true
 * isEnglish('a1'); /// false
 * @param value 字符串值
 * @returns
 */
export declare function isEnglish(value: string): boolean;
/**
 * 是否全为英文
 * @example
 * hasSpecialChar('Aa('); /// true
 * hasSpecialChar('a1'); /// false
 * @param value 字符串值
 * @returns
 */
export declare function hasSpecialChar(value: string): boolean;
/**
 * 判断数据是否为座机号(固定电话)
 * @example
 * isTel('0731-24722145'); /// true
 * isTel('13579246810'); /// false
 * @param value 字符串值
 * @returns
 */
export declare function isTel(value: string): boolean;
/**
 * 是否全为中文
 * @example
 * isChinese('呜呜呜'); /// true
 * isChinese('我 1'); /// false
 * @param value 字符串值
 * @returns
 */
export declare function isChinese(value: string): boolean;
/**
 * 判断是否为统一社会信用代码
 * @example
 * isCreditCode('9144030071526726XG'); /// true
 * isCreditCode('12312312312'); /// false
 * @param value 字符串值
 * @returns
 */
export declare function isCreditCode(value: string): boolean;
/**
 * 判断是否为银行卡号
 * @example
 * isBankCard('6217003810026896707'); /// true
 * isBankCard('12312312312'); /// false
 * @param value 字符串值
 * @returns
 */
export declare function isBankCard(value: string): boolean;
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
export declare function checkPassWordLevel(passWord: string): 1 | 2 | 3 | 4 | 5 | -1;
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
export declare function getPinYin(str: string, extractFirst?: boolean): string;
/**
 * 强制转换扫描字符串的特殊字符
 * `/(=)|(<)|(>)|(&)|(%)|(#)|(@)|(~)/g`
 * @example
 * transferScanStr('=900182201234500'); /// '900182201234500'
 * transferScanStr('=<E5433000'); /// 'E5433000'
 * transferScanStr('@123'); /// '123'
 * transferScanStr('#test~'); /// 'test'
 * transferScanStr(undefined); /// ''
 * @param value 值
 * @returns
 */
export declare function transferScanStr(value: string): string;
/**
 * 强制给字符串添加空格间隔
 * @example
 * addSpace('test'); /// 't e s t'
 * addSpace(null); /// ''
 * addSpace('123 45'); /// '1 2 3 4 5'
 * @param str 字符串
 * @returns
 */
export declare function addSpace(str: string | number): string;
/**
 * 左边补某个字符
 * @example
 * leftJoin('1', 3, '0'); /// '001'
 * leftJoin(0, 3, 1); /// '110'
 * @param str 字符串
 * @returns
 */
export declare function leftJoin(str: string | number, length?: string | number, char?: string | number): string;
/**
 * 右边补某个字符
 * @example
 * rightJoin('1', 3, 'x'); /// '1xx'
 * rightJoin(0, 3, 1); /// '011'
 * @param str 字符串
 * @returns
 */
export declare function rightJoin(str: string | number, length?: string | number, char?: string | number): string;
//# sourceMappingURL=index.d.ts.map