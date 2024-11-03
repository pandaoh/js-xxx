[**js-xxx v2.2.25**](../README.md) • **Docs**

***

[js-xxx v2.2.25](../README.md) / safeEncodeURI

# Function: safeEncodeURI()

> **safeEncodeURI**(`s`): `string`

安全编码 URI，遇到错误时返回原始字符串。

## Parameters

• **s**: `string`

要编码的字符串。

## Returns

`string`

## Example

```ts
safeEncodeURI('Hello World'); // 'Hello%20World'
safeEncodeURI('你好'); // '%E4%BD%A0%E5%A5%BD'
safeEncodeURI('https://example.com?param=1&param=2'); // 'https%3A%2F%2Fexample.com%3Fparam%3D1%26param%3D2'
safeEncodeURI('特殊字符 !@#'); // '%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%20%21%40%23'
```
