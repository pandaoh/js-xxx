[**js-xxx v2.2.35**](../README.md) • **Docs**

***

[js-xxx v2.2.35](../README.md) / decryptStringRSA

# Function: decryptStringRSA()

> **decryptStringRSA**(`encrypted`, `privateKey`): `string`

JSEncrypt 私钥解密

## Parameters

• **encrypted**: `string`

加密后的字符串（base64）

• **privateKey**: `string`

私钥

## Returns

`string`

## Example

```ts
decryptStringRSA('加密后的字符串（base64）', '-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY----- '); /// 明文字符串
```
