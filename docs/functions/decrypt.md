[**js-xxx v2.2.25**](../README.md) • **Docs**

***

[js-xxx v2.2.25](../README.md) / decrypt

# Function: decrypt()

> **decrypt**(`dataStr`, `jsonDecode`, `secretKey`?, `secretIv`?): `string`

解密函数
防君子不防小人，也可以通过后台获取密钥。

## Parameters

• **dataStr**: `string`

加密后的字符串

• **jsonDecode**: `boolean` = `false`

是否需要解析成 json

• **secretKey?**: `string`

[可选] 十六位十六进制数作为密钥

• **secretIv?**: `string`

[可选] 十六位十六进制数作为密钥偏移量

## Returns

`string`

## Example

```ts
decrypt("加密后的字符串"); /// 解密后的字符串
decrypt("加密后的字符串", true); /// 解密后的字符串并转换为 JSON 对象
decrypt("加密后的字符串", "1234567887654321","1234567887654321"); /// 自定义密钥解密后的字符串
```
