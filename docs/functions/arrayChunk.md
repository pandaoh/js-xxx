[**js-xxx v2.2.34**](../README.md) • **Docs**

***

[js-xxx v2.2.34](../README.md) / arrayChunk

# Function: arrayChunk()

> **arrayChunk**(`arrayData`, `n`): `any`[][]

将数组拆分为多个子数组（每组 n 个元素）

## Parameters

• **arrayData**: `any`[]

原始数组

• **n**: `number`

每组元素个数

## Returns

`any`[][]

## Example

```ts
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arrayChunk(arr, 3)); ///[ [1, 2, 3], [4, 5, 6], [7] ]
console.log(arrayChunk(arr, 8)); ///[ [1, 2, 3, 4, 5, 6, 7] ]
```
