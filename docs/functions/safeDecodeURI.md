[**js-xxx v2.2.27**](../README.md) • **Docs**

***

[js-xxx v2.2.27](../README.md) / safeDecodeURI

# Function: safeDecodeURI()

> **safeDecodeURI**(`s`): `string`

安全解码 URI，遇到错误时返回原始字符串。

## Parameters

• **s**: `string`

要解码的 URI 。

## Returns

`string`

## Example

```ts
safeDecodeURI('Hello%20World'); // 'Hello World'
safeDecodeURI('%E4%BD%A0%E5%A5%BD'); // '你好'
safeDecodeURI('%E4%BD%A0%E5%A5'); // '%E4%BD%A0%E5%A5' （无效的 URI 片段）
safeDecodeURI('%'); // '%' （无效的 URI 片段）
```
