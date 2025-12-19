[**js-xxx v2.2.35**](../README.md) • **Docs**

***

[js-xxx v2.2.35](../README.md) / isYes

# Function: isYes()

> **isYes**(`v`, `checkMap`): `boolean`

判断是否为 yes

## Parameters

• **v**: `unknown`

字符串、字符串数组或其他

• **checkMap**: `string`[] = `...`

比较映射表

## Returns

`boolean`

## Example

```ts
isYes('yes'); /// true
isYes(['no', 'true']); /// true
isYes('test'); /// false
isYes(1); /// true
```
