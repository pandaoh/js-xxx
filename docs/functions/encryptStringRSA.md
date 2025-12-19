[**js-xxx v2.2.35**](../README.md) • **Docs**

***

[js-xxx v2.2.35](../README.md) / encryptStringRSA

# Function: encryptStringRSA()

> **encryptStringRSA**(`input`, `publicKey`?): `string`

JSEncrypt 公钥加密

## Parameters

• **input**: `string`

明文字符串

• **publicKey?**: `string`

公钥

## Returns

`string`

## Example

```ts
encryptStringRSA('hello world', '-----BEGIN PUBLIC KEY-----\n...\n-----END PUBLIC KEY-----'); /// 加密后的字符串（base64）
```
