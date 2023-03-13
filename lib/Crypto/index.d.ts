import CryptoJS from 'crypto-js';
/**
 * 加密方法
 * 防君子不防小人，也可以通过后台获取密钥。
 * Example:
 * `encrypt("value") => 加密后的字符串`
 * `encrypt("value", "1234567887654321","1234567887654321") => 自定义密钥加密后的字符串`
 * @param data 需要加密的数据
 * @param secretKey [可选] 十六位十六进制数作为密钥
 * @param secretIv [可选] 十六位十六进制数作为密钥偏移量
 * @returns {string}
 */
export declare function encrypt(data: any, secretKey?: string, secretIv?: string): string;
/**
 * 解密方法
 * 防君子不防小人，也可以通过后台获取密钥。
 * Example:
 * `decrypt("加密后的字符串") => 解密后的字符串`
 * `decrypt("加密后的字符串", true) => 解密后的字符串并转换为 JSON 对象`
 * `decrypt("加密后的字符串", "1234567887654321","1234567887654321") => 自定义密钥解密后的字符串`
 * @param dataStr 加密后的字符串
 * @param jsonDecode 是否需要解析成 json
 * @param secretKey [可选] 十六位十六进制数作为密钥
 * @param secretIv [可选] 十六位十六进制数作为密钥偏移量
 * @returns {string}
 */
export declare function decrypt(dataStr: string, jsonDecode?: boolean, secretKey?: string, secretIv?: string): string;
/**
 * md5 加密方法
 * Example: `md5("value") => 加密后的字符串`
 * @param str 需要加密的字符串
 * @returns
 */
export declare function md5(str: string): string;
/**
 * sha1 加密方法
 * Example: `sha1("value") => 加密后的字符串`
 * @param str 需要加密的字符串
 * @returns
 */
export declare function sha1(str: string): string;
/**
 * sha256 加密方法
 * Example: `sha256("value") => 加密后的字符串`
 * @param str 需要加密的字符串
 * @returns
 */
export declare function sha256(str: string): string;
/**
 * base64 加密方法
 * 使用 url 中时建议使用 encodeURIComponent 再次编码，因为单独 + 号在 url 中会被解析成空格。
 * 使用 encodeURIComponent 会把 + 解析为 %2B 与空格 %20 区分
 * Example:
 * `base64Encode("value") => 加密后的字符串`
 * `base64Encode("value", true) => 加密后的字符串并替换 +/=`
 * @param str 需要加密的字符串
 * @param replaceChar 是否替换结果字符串中的特殊字符 '+/='，适用于 url 编码。
 * @returns
 */
export declare function base64Encode(str: string, replaceChar?: boolean): string;
/**
 * base64 解密方法
 * Example: `base64Decode("加密后的字符串") => 解密后的字符串`
 * @param str 需要加密的字符串
 * @returns
 */
export declare function base64Decode(str: string): string;
/**
 * 获取 CryptoJS
 * Example:
 * `getCryptoJS() => CryptoJS`
 * `getCryptoJS().MD5(str).toString() => md5 加密后的字符串`
 * @returns
 */
export declare function getCryptoJS(): typeof CryptoJS;
//# sourceMappingURL=index.d.ts.map