[**js-xxx v2.2.21**](../README.md) • **Docs**

***

[js-xxx v2.2.21](../README.md) / javaEncrypt

# Function: javaEncrypt()

> **javaEncrypt**(`dataStr`, `secretKey`?, `secretIv`?): `string`

配合使用 Java 加密算法对字符串进行对称加密

## Parameters

• **dataStr**: `string`

待加密的字符串

• **secretKey?**: `string`

可选的加密密钥，默认为 SECRET_KEY

• **secretIv?**: `string`

可选的加密向量，默认为 SECRET_IV

## Returns

`string`

## Example

```ts
javaEncrypt("需要加密的字符串"); /// 'SotKrdjNkEIvnQ0OBImYuViSs+WdpjjILvxE1UpNedA='
javaDecrypt("SotKrdjNkEIvnQ0OBImYuViSs+WdpjjILvxE1UpNedA="); /// '需要加密的字符串'
// java 实例代码
import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class EncryptionUtils {
    private static final String SECRET_KEY = "自定义的密钥";
    private static final String SECRET_IV = "自定义的偏移量";

    public static String encrypt(String data, String secretKey, String secretIV) throws Exception {
        SecretKeySpec secretKeySpec = new SecretKeySpec(secretKey.getBytes(StandardCharsets.UTF_8), "AES");
        IvParameterSpec ivParameterSpec = new IvParameterSpec(secretIV.getBytes(StandardCharsets.UTF_8));

        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
        cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec, ivParameterSpec);

        byte[] encryptedBytes = cipher.doFinal(data.getBytes(StandardCharsets.UTF_8));
        return Base64.getEncoder().encodeToString(encryptedBytes);
    }

    public static String decrypt(String encryptedData) throws Exception {
        SecretKeySpec secretKeySpec = new SecretKeySpec(SECRET_KEY.getBytes(StandardCharsets.UTF_8), "AES");
        IvParameterSpec ivParameterSpec = new IvParameterSpec(SECRET_IV.getBytes(StandardCharsets.UTF_8));

        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
        cipher.init(Cipher.DECRYPT_MODE, secretKeySpec, ivParameterSpec);

        byte[] encryptedBytes = Base64.getDecoder().decode(encryptedData);
        byte[] decryptedBytes = cipher.doFinal(encryptedBytes);
        return new String(decryptedBytes, StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        try {
            String encryptedData = encrypt("需要加密的字符串", SECRET_KEY, SECRET_IV);
            System.out.println("Encrypted data: " + encryptedData); // SotKrdjNkEIvnQ0OBImYuViSs+WdpjjILvxE1UpNedA=

            String decryptedData = decrypt(encryptedData);
            System.out.println("Decrypted data: " + decryptedData); // 需要加密的字符串
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```
