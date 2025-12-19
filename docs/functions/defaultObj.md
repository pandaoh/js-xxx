[**js-xxx v2.2.35**](../README.md) • **Docs**

***

[js-xxx v2.2.35](../README.md) / defaultObj

# Function: defaultObj()

> **defaultObj**\<`T`\>(`obj`): `T`

扁平化对象（简单浅拷贝）

## Type Parameters

• **T** *extends* `object`

## Parameters

• **obj**: `T`

任意对象

## Returns

`T`

## Example

```ts
defaultObj({ a: 1, b: 2 }); /// { a: 1, b: 2 }
defaultObj(null); /// {}
```
