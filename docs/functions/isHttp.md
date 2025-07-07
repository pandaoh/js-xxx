[**js-xxx v2.2.32**](../README.md) • **Docs**

***

[js-xxx v2.2.32](../README.md) / isHttp

# Function: isHttp()

> **isHttp**(`value`): `-1` \| `1` \| `0`

检查是否为 http 协议，1 是，-1 为 https，0 啥也不是。

## Parameters

• **value**: `string`

字符串值

## Returns

`-1` \| `1` \| `0`

## Example

```ts
isHttp('http://test.com'); /// 1
isHttp('http:test.com'); /// 0
isHttp('https://test.com'); /// -1
isHttp('12345'); /// 0
```
