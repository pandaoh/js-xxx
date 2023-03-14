/*
 * @Author: HxB
 * @Date: 2022-04-26 15:54:41
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-03-13 18:30:58
 * @Description: 加密相关函数 依赖 crypto-js
 * @FilePath: \js-xxx\src\Crypto\index.ts
 */
import CryptoJS from 'crypto-js';

// 十六位十六进制数作为密钥
const SECRET_KEY = CryptoJS.enc.Utf8.parse('1998092819980608');
// 十六位十六进制数作为密钥偏移量
const SECRET_IV = CryptoJS.enc.Utf8.parse('2017040220220130');
// 密钥测试正则表达式
const SECRET_KEY_REG = /^[0-9a-fA-F]{16}$/i;

/**
 * 加密函数
 * 防君子不防小人，也可以通过后台获取密钥。
 * Example:
 * `encrypt("value") => 加密后的字符串`
 * `encrypt("value", "1234567887654321","1234567887654321") => 自定义密钥加密后的字符串`
 * @param data 需要加密的数据
 * @param secretKey [可选] 十六位十六进制数作为密钥
 * @param secretIv [可选] 十六位十六进制数作为密钥偏移量
 * @returns {string}
 */
export function encrypt(data: any, secretKey?: string, secretIv?: string): string {
  if (!data) {
    return '';
  }
  if (secretKey && !SECRET_KEY_REG.test(secretKey)) {
    throw new Error('secretKey 必须是十六位十六进制数');
  }
  if (secretIv && !SECRET_KEY_REG.test(secretIv)) {
    throw new Error('secretIv 必须是十六位十六进制数');
  }
  if (typeof data == 'object') {
    try {
      data = JSON.stringify(data);
    } catch (error) {
      throw new Error('encrypt error' + JSON.stringify(error));
    }
  }
  const KEY = !secretKey ? SECRET_KEY : CryptoJS.enc.Utf8.parse(secretKey);
  const IV = !secretIv ? SECRET_IV : CryptoJS.enc.Utf8.parse(secretIv);
  const dataHex = CryptoJS.enc.Utf8.parse(data);
  const encrypted = CryptoJS.AES.encrypt(dataHex, KEY, {
    iv: IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.ciphertext.toString();
}

// eslint-disable-next-line spellcheck/spell-checker
/**
 * 解密函数
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
export function decrypt(dataStr: string, jsonDecode = false, secretKey?: string, secretIv?: string): string {
  if (!dataStr) {
    return '';
  }
  if (secretKey && !SECRET_KEY_REG.test(secretKey)) {
    throw new Error('secretKey 必须是十六位十六进制数');
  }
  if (secretIv && !SECRET_KEY_REG.test(secretIv)) {
    throw new Error('secretIv 必须是十六位十六进制数');
  }
  const KEY = !secretKey ? SECRET_KEY : CryptoJS.enc.Utf8.parse(secretKey);
  const IV = !secretIv ? SECRET_IV : CryptoJS.enc.Utf8.parse(secretIv);
  const encryptedHexStr = CryptoJS.enc.Hex.parse(dataStr);
  const str = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  const decrypt = CryptoJS.AES.decrypt(str, KEY, {
    iv: IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  const result = decryptedStr.toString();
  return jsonDecode ? JSON.parse(result) : result;
}

/**
 * md5 加密函数
 * Example: `md5("value") => 加密后的字符串`
 * @param str 需要加密的字符串
 * @returns
 */
export function md5(str: string): string {
  return CryptoJS.MD5(str).toString();
}

/**
 * sha1 加密函数
 * Example: `sha1("value") => 加密后的字符串`
 * @param str 需要加密的字符串
 * @returns
 */
export function sha1(str: string): string {
  return CryptoJS.SHA1(str).toString();
}

/**
 * sha256 加密函数
 * Example: `sha256("value") => 加密后的字符串`
 * @param str 需要加密的字符串
 * @returns
 */
export function sha256(str: string): string {
  return CryptoJS.SHA256(str).toString();
}

/**
 * base64 加密函数
 * 使用 url 中时建议使用 encodeURIComponent 再次编码，因为单独 + 号在 url 中会被解析成空格。
 * 使用 encodeURIComponent 会把 + 解析为 %2B 与空格 %20 区分
 * Example:
 * `base64Encode("value") => 加密后的字符串`
 * `base64Encode("value", true) => 加密后的字符串并替换 +/=`
 * @param str 需要加密的字符串
 * @param replaceChar 是否替换结果字符串中的特殊字符 '+/='，适用于 url 编码。
 * @returns
 */
export function base64Encode(str: string, replaceChar = false): string {
  const result = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(str));
  return replaceChar ? result.replace(/\+\//g, '-_').replace(/\=/g, '') : result;
}

/**
 * base64 解密函数
 * Example: `base64Decode("加密后的字符串") => 解密后的字符串`
 * @param str 需要加密的字符串
 * @returns
 */
export function base64Decode(str: string): string {
  return CryptoJS.enc.Base64.parse(str).toString(CryptoJS.enc.Utf8);
}

/**
 * 获取 CryptoJS
 * Example:
 * `getCryptoJS() => CryptoJS`
 * `getCryptoJS().MD5(str).toString() => md5 加密后的字符串`
 * @returns
 */
export function getCryptoJS(): typeof CryptoJS {
  return CryptoJS;
}
