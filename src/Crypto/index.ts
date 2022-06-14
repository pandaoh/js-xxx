/*
 * @Author: HxB
 * @Date: 2022-04-26 15:54:41
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-06-14 18:29:37
 * @Description: 加密相关方法 依赖 crypto-js
 * @FilePath: \js-xxx\src\Crypto\index.ts
 */
import CryptoJS from 'crypto-js';

// 十六位十六进制数作为密钥
const SECRET_KEY = CryptoJS.enc.Utf8.parse('1998092819980608');
// 十六位十六进制数作为密钥偏移量
const SECRET_IV = CryptoJS.enc.Utf8.parse('2017040220220130');

/**
 * 加密方法
 * Example: `encrypt("value") => 加密后的字符串`
 * @param data 需要加密的数据
 * @returns {string}
 */
export function encrypt(data: any): string {
  if (!data) {
    return '';
  }
  if (typeof data == 'object') {
    try {
      data = JSON.stringify(data);
    } catch (error) {
      console.log('encrypt error:', error);
    }
  }
  const dataHex = CryptoJS.enc.Utf8.parse(data);
  const encrypted = CryptoJS.AES.encrypt(dataHex, SECRET_KEY, {
    iv: SECRET_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString();
}

/**
 * 解密方法
 * Example:
 * `decrypt("加密后的字符串") => 解密后的字符串`
 * `decrypt("加密后的字符串", true) => 解密后的字符串并转换为 JSON 对象`
 * @param dataStr 加密后的字符串
 * @param jsonDecode 是否需要解析成 json
 * @returns {string}
 */
export function decrypt(dataStr: string, jsonDecode: boolean = false): string {
  if (!dataStr) {
    return '';
  }
  const encryptedHexStr = CryptoJS.enc.Hex.parse(dataStr);
  const str = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  const decrypt = CryptoJS.AES.decrypt(str, SECRET_KEY, {
    iv: SECRET_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  const result = decryptedStr.toString();
  return jsonDecode ? JSON.parse(result) : result;
}

/**
 * md5 加密方法
 * Example: `md5("value") => 加密后的字符串`
 * @param str 需要加密的字符串
 * @returns
 */
export function md5(str: string): string {
  return CryptoJS.MD5(str).toString();
}

/**
 * sha1 加密方法
 * Example: `sha1("value") => 加密后的字符串`
 * @param str 需要加密的字符串
 * @returns
 */
export function sha1(str: string): string {
  return CryptoJS.SHA1(str).toString();
}

/**
 * sha256 加密方法
 * Example: `sha256("value") => 加密后的字符串`
 * @param str 需要加密的字符串
 * @returns
 */
export function sha256(str: string): string {
  return CryptoJS.SHA256(str).toString();
}

/**
 * Base64 加密方法
 * 使用 url 中时建议使用 encodeURIComponent 再次编码，因为单独 + 号在 url 中会被解析成空格。
 * 使用 encodeURIComponent 会把 + 解析为 %2B 与空格 %20 区分
 * Example:
 * `Base64Encode("value") => 加密后的字符串`
 * `Base64Encode("value", true) => 加密后的字符串并替换 +/=`
 * @param str 需要加密的字符串
 * @param replaceChar 是否替换结果字符串中的特殊字符 '+/='，适用于 url 编码。
 * @returns
 */
export function Base64Encode(str: string, replaceChar: boolean = false): string {
  let result = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(str));
  return replaceChar ? result.replace(/\+\//g, '-_').replace(/\=/g, '') : result;
}

/**
 * Base64 解密方法
 * Example: `Base64Decode("加密后的字符串") => 解密后的字符串`
 * @param str 需要加密的字符串
 * @returns
 */
export function Base64Decode(str: string): string {
  return CryptoJS.enc.Base64.parse(str).toString(CryptoJS.enc.Utf8);
}
