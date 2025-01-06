[**js-xxx v2.2.29**](../README.md) • **Docs**

***

[js-xxx v2.2.29](../README.md) / isCarCode

# Function: isCarCode()

> **isCarCode**(`value`): `boolean`

检查是否为 carCode string 车牌号

## Parameters

• **value**: `string`

字符串值

## Returns

`boolean`

## Example

```ts
isCarCode('粤B68928'); /// true
isCarCode('粤-B68928'); /// true
isCarCode('粤 B68928'); /// true
isCarCode('粤B.68928'); /// true
isCarCode('粤B 68928'); /// true
isCarCode('广东 B12345'); /// false
```
