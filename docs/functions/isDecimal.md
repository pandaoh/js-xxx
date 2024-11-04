[**js-xxx v2.2.26**](../README.md) • **Docs**

***

[js-xxx v2.2.26](../README.md) / isDecimal

# Function: isDecimal()

> **isDecimal**(`value`, `type`?, `noLastZero`?): `boolean`

是否小数(严格匹配)

## Parameters

• **value**: `string`

• **type?**: `"-"` \| `"+"`

• **noLastZero?**: `boolean` = `false`

## Returns

`boolean`

## Example

```ts
isDecimal('0.0'); /// true
isDecimal('0.0', '+', true); /// false
isDecimal('-0.1', '+'); /// false
isDecimal('-0.10', '-'); /// true
```
