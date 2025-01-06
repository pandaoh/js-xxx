[**js-xxx v2.2.29**](../README.md) • **Docs**

***

[js-xxx v2.2.29](../README.md) / isIpv4

# Function: isIpv4()

> **isIpv4**(`value`): `boolean`

检查是否为 ipv4 string

## Parameters

• **value**: `string`

字符串值

## Returns

`boolean`

## Example

```ts
isIpv4('127.0.0.1'); /// true
isIpv4('255.255.255.0'); /// true
isIpv4('255.255.255.2555'); /// false
isIpv4('255.255.255.2555.255'); /// false
```
