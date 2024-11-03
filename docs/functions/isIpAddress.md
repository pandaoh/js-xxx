[**js-xxx v2.2.25**](../README.md) • **Docs**

***

[js-xxx v2.2.25](../README.md) / isIpAddress

# Function: isIpAddress()

> **isIpAddress**(`value`): `boolean`

检查是否为 ip string

## Parameters

• **value**: `string`

字符串值

## Returns

`boolean`

## Example

```ts
isIpAddress('::1'); /// true
isIpAddress('127.0.0.1'); /// true
isIpAddress('2001:DB8:0:0:8:800:200C:417A'); /// true
isIpAddress('255.255.255.123.123'); /// false
```
