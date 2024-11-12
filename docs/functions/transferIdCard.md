[**js-xxx v2.2.27**](../README.md) • **Docs**

***

[js-xxx v2.2.27](../README.md) / transferIdCard

# Function: transferIdCard()

> **transferIdCard**(`idCard`): `any`

身份证解析

## Parameters

• **idCard**: `string`

字符串值

## Returns

`any`

## Example

```ts
transferIdCard('350424870506202');
/// {"age":35,"year":"1987","idCard":"350424870506202","sex":"女","constellation":{"cn":"金牛","en":"Taurus","date":"4.20-5.20"},"gender":0,"province":"福建","animal":"兔","birthday":"1987-05-06"}
transferIdCard('415106199801012130');
/// {"age":24,"year":"1998","idCard":"415106199801012130","sex":"男","constellation":{"cn":"魔羯","en":"Capricorn","date":"12.22-1.19"},"gender":1,"province":"河南","animal":"虎","birthday":"1998-01-01"}
transferIdCard('xxxxx'); /// {}
```
