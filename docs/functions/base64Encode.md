[**js-xxx v2.2.23**](../README.md) • **Docs**

***

[js-xxx v2.2.23](../README.md) / base64Encode

# Function: base64Encode()

> **base64Encode**(`str`, `replaceChar`): `string`

base64 加密函数
`使用 url 中时建议使用 encodeURIComponent 再次编码，因为单独 + 号在 url 中会被解析成空格。`
`使用 encodeURIComponent 会把 + 解析为 %2B 与空格 %20 区分`

## Parameters

• **str**: `string`

需要加密的字符串

• **replaceChar**: `boolean` = `false`

是否替换结果字符串中的特殊字符 '+/='，适用于 url 编码。

## Returns

`string`

## Example

```ts
base64Encode("value"); /// 加密后的字符串
base64Encode("value", true); /// 加密后的字符串并替换 +/=
```
