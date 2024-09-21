[**js-xxx v2.2.23**](../README.md) • **Docs**

***

[js-xxx v2.2.23](../README.md) / isUndef

# Function: isUndef()

> **isUndef**(`value`): `boolean`

检查是否 undefined
该函数使用 `void 0` 来判断是否为 `undefined`，而不是直接与全局的 `undefined` 变量比较。
使用 `void 0` 的好处是，即使全局的 `undefined` 变量被重新赋值，`void 0` 依然保证返回真正的 undefined 。

## Parameters

• **value**: `any`

值

## Returns

`boolean`

## Example

```ts
isUndef(undefined); /// true
isUndef(null); /// false
isUndef(void 0); /// true
```
