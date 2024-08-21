import CryptoJS from 'crypto-js';
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
export declare function encrypt(data: any, secretKey?: string, secretIv?: string): string;
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
export declare function decrypt(dataStr: string, jsonDecode?: boolean, secretKey?: string, secretIv?: string): string;
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
export declare function javaEncrypt(dataStr: string, secretKey?: string, secretIv?: string): string;
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
export declare function javaDecrypt(encryptedData: string, secretKey?: string, secretIv?: string): string;
/**
 * md5 加密函数
 * @example
 * md5("value"); /// 加密后的字符串
 * @param str 需要加密的字符串
 * @returns
 * @category Crypto-密码学
 */
export declare function md5(str: string): string;
/**
 * sha1 加密函数
 * @example
 * sha1("value"); /// 加密后的字符串
 * @param str 需要加密的字符串
 * @returns
 * @category Crypto-密码学
 */
export declare function sha1(str: string): string;
/**
 * sha256 加密函数
 * @example
 * sha256("value"); /// 加密后的字符串
 * @param str 需要加密的字符串
 * @returns
 * @category Crypto-密码学
 */
export declare function sha256(str: string): string;
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
export declare function base64Encode(str: string, replaceChar?: boolean): string;
/**
 * base64 解密函数
 * @example
 * base64Decode("加密后的字符串"); /// 解密后的字符串
 * @param str 需要加密的字符串
 * @returns
 * @category Crypto-密码学
 */
export declare function base64Decode(str: string): string;
/**
 * 获取 CryptoJS
 * @example
 * getCryptoJS(); /// CryptoJS
 * getCryptoJS().MD5(str).toString(); /// md5 加密后的字符串
 * @returns
 * @category Crypto-密码学
 */
export declare function getCryptoJS(): typeof CryptoJS;
//# sourceMappingURL=index.d.ts.map