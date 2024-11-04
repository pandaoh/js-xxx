[**js-xxx v2.2.26**](../README.md) • **Docs**

***

[js-xxx v2.2.26](../README.md) / getFingerprint

# Function: getFingerprint()

> **getFingerprint**(`extraString`): `string`

获取简单的浏览器指纹

## Parameters

• **extraString**: `string` \| `number`

额外的字符串，可以说用户名等。

## Returns

`string`

## Example

```ts
getFingerprint(); /// md5 加密后的指纹
getFingerprint('test'); /// md5 加密后的指纹-建议增加使用者标识，避免指纹冲突。
```
