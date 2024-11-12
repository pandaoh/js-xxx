[**js-xxx v2.2.27**](../README.md) • **Docs**

***

[js-xxx v2.2.27](../README.md) / difference

# Function: difference()

> **difference**(`paramA`, `paramB`): `any`

获取数组或对象不同值集合

## Parameters

• **paramA**: `any`

值 A，若冲突以此值为准。

• **paramB**: `any`

值 B

## Returns

`any`

## Example

```ts
difference([1, 2, 2, 3, 3], [1, 2, 4, 5]); /// [3]
difference({a: 1, b: 2}, {a: 1, c: 3, b: 4}); /// {b: 2}
```
