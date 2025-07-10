[**js-xxx v2.2.34**](../README.md) • **Docs**

***

[js-xxx v2.2.34](../README.md) / isIpv6

# Function: isIpv6()

> **isIpv6**(`value`): `boolean`

检查是否为 ipv6 string

## Parameters

• **value**: `string`

字符串值

## Returns

`boolean`

## Example

```ts
isIpv6('::1'); /// true
isIpv6('127.0.0.1'); /// false
isIpv6('2000:0000:0000:0000:0001:2345:6789:abcd'); /// true
isIpv6('2001:DB8:0:0:8:800:200C:417A'); /// true
isIpv6('2001:DB8::8:800:200C:417A'); /// false 暂不兼容缩写
isIpv6('2001:DB8:0:0:8:800:200C:417A:123'); /// false
isIpv6('2000:0000:0000:0000:0001:2345:6789:abcd:1'); /// false
```
