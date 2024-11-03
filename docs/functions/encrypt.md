[**js-xxx v2.2.25**](../README.md) • **Docs**

***

[js-xxx v2.2.25](../README.md) / encrypt

# Function: encrypt()

> **encrypt**(`data`, `secretKey`?, `secretIv`?): `string`

加密函数
防君子不防小人，也可以通过后台获取密钥。

## Parameters

• **data**: `any`

需要加密的数据

• **secretKey?**: `string`

[可选] 十六位十六进制数作为密钥

• **secretIv?**: `string`

[可选] 十六位十六进制数作为密钥偏移量

## Returns

`string`

## Example

```ts
encrypt("value"); /// 加密后的字符串
encrypt("value", "1234567887654321","1234567887654321"); /// 自定义密钥加密后的字符串
```
