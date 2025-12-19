[**js-xxx v2.2.35**](../README.md) • **Docs**

***

[js-xxx v2.2.35](../README.md) / isNo

# Function: isNo()

> **isNo**(`v`, `checkMap`): `boolean`

判断是否为 no

## Parameters

• **v**: `any`

字符串、字符串数组或其他

• **checkMap**: `string`[] = `...`

比较映射表

## Returns

`boolean`

## Example

```ts
isNo('no'); /// true
isNo(['yes', 'false']); /// true
isNo('test'); /// false
isNo(0); /// true
```
