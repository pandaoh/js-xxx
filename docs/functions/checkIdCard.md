[**js-xxx v2.2.32**](../README.md) • **Docs**

***

[js-xxx v2.2.32](../README.md) / checkIdCard

# Function: checkIdCard()

> **checkIdCard**(`value`): `boolean`

检查是否为 idCard string 身份证
支持 15 、 18 位

## Parameters

• **value**: `string`

字符串值

## Returns

`boolean`

## Example

```ts
checkIdCard('350424870506202'); /// true
checkIdCard('003424870506202'); /// false
checkIdCard('415106199801012130'); /// true
checkIdCard('123123123123123222'); /// false
```
