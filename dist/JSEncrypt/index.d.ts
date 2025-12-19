import JSEncrypt from 'jsencrypt';
/**
 * 获取 JSEncrypt 实例
 * @param publicKey 公钥
 * @example
 * getJSEncrypt('-----BEGIN PUBLIC KEY-----\n...\n-----END PUBLIC KEY-----'); /// JSEncrypt 实例
 * @category JSEncrypt-密码学-RSA
 * @returns
 */
export declare function getJSEncrypt(publicKey?: string): JSEncrypt;
/**
 * JSEncrypt 公钥加密
 * @param input 明文字符串
 * @param publicKey 公钥
 * @example
 * encryptStringRSA('hello world', '-----BEGIN PUBLIC KEY-----\n...\n-----END PUBLIC KEY-----'); /// 加密后的字符串（base64）
 * @category JSEncrypt-密码学-RSA
 * @returns
 */
export declare function encryptStringRSA(input: string, publicKey?: string): string;
/**
 * JSEncrypt 私钥解密
 * @param encrypted 加密后的字符串（base64）
 * @param privateKey 私钥
 * @example
 * decryptStringRSA('加密后的字符串（base64）', '-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY----- '); /// 明文字符串
 * @category JSEncrypt-密码学-RSA
 * @returns
 */
export declare function decryptStringRSA(encrypted: string, privateKey: string): string;
//# sourceMappingURL=index.d.ts.map