[**js-xxx v2.2.25**](../README.md) • **Docs**

***

[js-xxx v2.2.25](../README.md) / getSortVar

# Function: getSortVar()

> **getSortVar**(`value`): `any`

获取排序转换后的数组或对象（仅支持单层简单结构）

## Parameters

• **value**: `any`

值

## Returns

`any`

## Example

```ts
getSortVar({ b: 3, a: 2 }); /// { a: 2, b: 3 }
getSortVar({ a: 2, b: 3 }); /// { a: 2, b: 3 }
getSortVar([1, 3, 2]); /// [1, 2, 3]
```
