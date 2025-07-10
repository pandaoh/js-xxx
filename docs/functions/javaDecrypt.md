[**js-xxx v2.2.34**](../README.md) • **Docs**

***

[js-xxx v2.2.34](../README.md) / javaDecrypt

# Function: javaDecrypt()

> **javaDecrypt**(`encryptedData`, `secretKey`?, `secretIv`?): `string`

配合使用 Java 对称解密函数

## Parameters

• **encryptedData**: `string`

待解密数据

• **secretKey?**: `string`

可选参数，密钥，若不传入则使用默认密钥 SECRET_KEY

• **secretIv?**: `string`

可选参数，向量，若不传入则使用默认向量 SECRET_IV

## Returns

`string`

## Example

```ts
javaEncrypt("需要加密的字符串"); /// 'SotKrdjNkEIvnQ0OBImYuViSs+WdpjjILvxE1UpNedA='
javaDecrypt("SotKrdjNkEIvnQ0OBImYuViSs+WdpjjILvxE1UpNedA="); /// '需要加密的字符串'
```
