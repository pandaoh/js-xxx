/* eslint-disable spellcheck/spell-checker */
/*
 * @Author: HxB
 * @Date: 2025-12-16 13:14:41
 * @LastEditors: DoubleAm
 * @LastEditTime: 2025-12-19 16:44:21
 * @Description: 加密相关函数 依赖 jsencrypt
 * @FilePath: /js-xxx/src/JSEncrypt/index.ts
 */
import JSEncrypt from 'jsencrypt';

/**
 * 获取 JSEncrypt 实例
 * @param publicKey 公钥
 * @example
 * getJSEncrypt('-----BEGIN PUBLIC KEY-----\n...\n-----END PUBLIC KEY-----'); /// JSEncrypt 实例
 * @category JSEncrypt-密码学-RSA
 * @returns
 */
export function getJSEncrypt(publicKey?: string): JSEncrypt {
  const jSEncrypt = new JSEncrypt();
  if (publicKey) {
    jSEncrypt.setPublicKey(publicKey);
  } else {
    console.warn('js-xxx:getJSEncryptError--->', 'JSEncrypt not set public key!');
  }
  return jSEncrypt;
}

/**
 * JSEncrypt 公钥加密
 * @param input 明文字符串
 * @param publicKey 公钥
 * @example
 * encryptStringRSA('hello world', '-----BEGIN PUBLIC KEY-----\n...\n-----END PUBLIC KEY-----'); /// 加密后的字符串（base64）
 * @category JSEncrypt-密码学-RSA
 * @returns
 */
export function encryptStringRSA(input: string, publicKey?: string): string {
  if (!input) return '';
  try {
    const encryptInstance = getJSEncrypt(publicKey);
    return encryptInstance.encrypt(input) || '';
  } catch (error) {
    console.error('js-xxx:encryptStringRSAError--->', error);
    return '';
  }
}

/**
 * JSEncrypt 私钥解密
 * @param encrypted 加密后的字符串（base64）
 * @param privateKey 私钥
 * @example
 * decryptStringRSA('加密后的字符串（base64）', '-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY----- '); /// 明文字符串
 * @category JSEncrypt-密码学-RSA
 * @returns
 */
export function decryptStringRSA(encrypted: string, privateKey: string): string {
  if (!encrypted) return '';
  try {
    const decryptInstance = new JSEncrypt();
    decryptInstance.setPrivateKey(privateKey);
    return decryptInstance.decrypt(encrypted) || '';
  } catch (error) {
    console.error('js-xxx:decryptStringRSAError--->', error);
    return '';
  }
}
