[**js-xxx v2.2.26**](../README.md) • **Docs**

***

[js-xxx v2.2.26](../README.md) / empty

# Function: empty()

> **empty**(`variable`): `boolean`

判断值是否为空

## Parameters

• **variable**: `any`

变量

## Returns

`boolean`

## Example

```ts
empty(''); /// true
empty(null); /// true
empty('null'); /// true
empty('undefined'); /// true
empty(undefined); /// true
empty(0); /// false
empty('0'); /// false
empty(NaN); /// true
empty('NaN'); /// true
empty({}); /// true
empty([]); /// true
```
