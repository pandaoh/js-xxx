/* eslint-disable spellcheck/spell-checker */
/*
 * @Author: HxB
 * @Date: 2022-04-26 15:54:41
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-08-21 11:46:17
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
 * @example
 * encrypt("value"); /// 加密后的字符串
 * encrypt("value", "1234567887654321","1234567887654321"); /// 自定义密钥加密后的字符串
 * @param data 需要加密的数据
 * @param secretKey [可选] 十六位十六进制数作为密钥
 * @param secretIv [可选] 十六位十六进制数作为密钥偏移量
 * @returns
 * @category Crypto-密码学
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

/**
 * 解密函数
 * 防君子不防小人，也可以通过后台获取密钥。
 * @example
 * decrypt("加密后的字符串"); /// 解密后的字符串
 * decrypt("加密后的字符串", true); /// 解密后的字符串并转换为 JSON 对象
 * decrypt("加密后的字符串", "1234567887654321","1234567887654321"); /// 自定义密钥解密后的字符串
 * @param dataStr 加密后的字符串
 * @param jsonDecode 是否需要解析成 json
 * @param secretKey [可选] 十六位十六进制数作为密钥
 * @param secretIv [可选] 十六位十六进制数作为密钥偏移量
 * @returns
 * @category Crypto-密码学
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
 * 配合使用 Java 加密算法对字符串进行对称加密
 * @example
 * javaEncrypt("需要加密的字符串"); /// 'SotKrdjNkEIvnQ0OBImYuViSs+WdpjjILvxE1UpNedA='
 * javaDecrypt("SotKrdjNkEIvnQ0OBImYuViSs+WdpjjILvxE1UpNedA="); /// '需要加密的字符串'
 * // java 实例代码
 * import javax.crypto.Cipher;
 * import javax.crypto.spec.IvParameterSpec;
 * import javax.crypto.spec.SecretKeySpec;
 * import java.nio.charset.StandardCharsets;
 * import java.util.Base64;
 *
 * public class EncryptionUtils {
 *     private static final String SECRET_KEY = "自定义的密钥";
 *     private static final String SECRET_IV = "自定义的偏移量";
 *
 *     public static String encrypt(String data, String secretKey, String secretIV) throws Exception {
 *         SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "AES");
 *         IvParameterSpec ivParameterSpec = new IvParameterSpec(secretIV.getBytes(StandardCharsets.UTF_8));
 *
 *         Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
 *         cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec, ivParameterSpec);
 *
 *         byte[] encryptedBytes = cipher.doFinal(data.getBytes(StandardCharsets.UTF_8));
 *         return Base64.getEncoder().encodeToString(encryptedBytes);
 *     }
 *
 *     public static String decrypt(String encryptedData) throws Exception {
 *         SecretKeySpec secretKeySpec = new SecretKeySpec(SECRET_KEY.getBytes(StandardCharsets.UTF_8), "AES");
 *         IvParameterSpec ivParameterSpec = new IvParameterSpec(SECRET_IV.getBytes(StandardCharsets.UTF_8));
 *
 *         Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
 *         cipher.init(Cipher.DECRYPT_MODE, secretKeySpec, ivParameterSpec);
 *
 *         byte[] encryptedBytes = Base64.getDecoder().decode(encryptedData);
 *         byte[] decryptedBytes = cipher.doFinal(encryptedBytes);
 *         return new String(decryptedBytes, StandardCharsets.UTF_8);
 *     }
 *
 *     public static void main(String[] args) {
 *         try {
 *             String encryptedData = encrypt("需要加密的字符串", SECRET_KEY, SECRET_IV);
 *             System.out.println("Encrypted data: " + encryptedData); // SotKrdjNkEIvnQ0OBImYuViSs+WdpjjILvxE1UpNedA=
 *
 *             String decryptedData = decrypt(encryptedData);
 *             System.out.println("Decrypted data: " + decryptedData); // 需要加密的字符串
 *         } catch (Exception e) {
 *             e.printStackTrace();
 *         }
 *     }
 * }
 * @param dataStr 待加密的字符串
 * @param secretKey 可选的加密密钥，默认为 SECRET_KEY
 * @param secretIv 可选的加密向量，默认为 SECRET_IV
 * @returns
 * @category Crypto-密码学
 */
export function javaEncrypt(dataStr: string, secretKey?: string, secretIv?: string) {
  if (!dataStr) {
    return '';
  }

  const key = !secretKey ? SECRET_KEY : CryptoJS.enc.Utf8.parse(secretKey);
  const iv = !secretIv ? SECRET_IV : CryptoJS.enc.Utf8.parse(secretIv);

  const encrypted = CryptoJS.AES.encrypt(dataStr, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return encrypted.toString();
}

/**
 * 配合使用 Java 对称解密函数
 * @example
 * javaEncrypt("需要加密的字符串"); /// 'SotKrdjNkEIvnQ0OBImYuViSs+WdpjjILvxE1UpNedA='
 * javaDecrypt("SotKrdjNkEIvnQ0OBImYuViSs+WdpjjILvxE1UpNedA="); /// '需要加密的字符串'
 * @param encryptedData 待解密数据
 * @param secretKey 可选参数，密钥，若不传入则使用默认密钥 SECRET_KEY
 * @param secretIv 可选参数，向量，若不传入则使用默认向量 SECRET_IV
 * @returns
 * @category Crypto-密码学
 */
export function javaDecrypt(encryptedData: string, secretKey?: string, secretIv?: string) {
  if (!encryptedData) {
    return '';
  }

  const key = !secretKey ? SECRET_KEY : CryptoJS.enc.Utf8.parse(secretKey);
  const iv = !secretIv ? SECRET_IV : CryptoJS.enc.Utf8.parse(secretIv);

  const decrypted = CryptoJS.AES.decrypt(encryptedData, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return decrypted.toString(CryptoJS.enc.Utf8);
}

/**
 * md5 加密函数
 * @example
 * md5("value"); /// 加密后的字符串
 * @param str 需要加密的字符串
 * @returns
 * @category Crypto-密码学
 */
export function md5(str: string): string {
  return CryptoJS.MD5(str).toString();
}

/**
 * sha1 加密函数
 * @example
 * sha1("value"); /// 加密后的字符串
 * @param str 需要加密的字符串
 * @returns
 * @category Crypto-密码学
 */
export function sha1(str: string): string {
  return CryptoJS.SHA1(str).toString();
}

/**
 * sha256 加密函数
 * @example
 * sha256("value"); /// 加密后的字符串
 * @param str 需要加密的字符串
 * @returns
 * @category Crypto-密码学
 */
export function sha256(str: string): string {
  return CryptoJS.SHA256(str).toString();
}

/**
 * base64 加密函数
 * `使用 url 中时建议使用 encodeURIComponent 再次编码，因为单独 + 号在 url 中会被解析成空格。`
 * `使用 encodeURIComponent 会把 + 解析为 %2B 与空格 %20 区分`
 * @example
 * base64Encode("value"); /// 加密后的字符串
 * base64Encode("value", true); /// 加密后的字符串并替换 +/=
 * @param str 需要加密的字符串
 * @param replaceChar 是否替换结果字符串中的特殊字符 '+/='，适用于 url 编码。
 * @returns
 * @category Crypto-密码学
 */
export function base64Encode(str: string, replaceChar = false): string {
  const result = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(str));
  return replaceChar ? result.replace(/\+\//g, '-_').replace(/\=/g, '') : result;
}

/**
 * base64 解密函数
 * @example
 * base64Decode("加密后的字符串"); /// 解密后的字符串
 * @param str 需要加密的字符串
 * @returns
 * @category Crypto-密码学
 */
export function base64Decode(str: string): string {
  return CryptoJS.enc.Base64.parse(str).toString(CryptoJS.enc.Utf8);
}

/**
 * 获取 CryptoJS
 * @example
 * getCryptoJS(); /// CryptoJS
 * getCryptoJS().MD5(str).toString(); /// md5 加密后的字符串
 * @returns
 * @category Crypto-密码学
 */
export function getCryptoJS(): typeof CryptoJS {
  return CryptoJS;
}
