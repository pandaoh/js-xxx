[**js-xxx v2.2.26**](../README.md) • **Docs**

***

[js-xxx v2.2.26](../README.md) / isEqual

# Function: isEqual()

> **isEqual**(`obj1`, `obj2`): `boolean`

判断两个值是否相等

## Parameters

• **obj1**: `any`

值 1

• **obj2**: `any`

值 2

## Returns

`boolean`

## Example

```ts
isEqual([1, 2, 3], [1, 2, 3]); /// true
isEqual({a: 1, b: 2}, {a: 1, b: 2}); /// true
isEqual({}, {}); /// true
isEqual(1, 1); /// true
isEqual(1, '1'); /// false
```
