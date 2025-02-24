[**js-xxx v2.2.30**](../README.md) • **Docs**

***

[js-xxx v2.2.30](../README.md) / arrayFill

# Function: arrayFill()

> **arrayFill**(`arr`, `n`?): `number`[]

填充数组空值，取前后值得中间数。

## Parameters

• **arr**: `any`[]

数组

• **n?**: `number`

保留小数位

## Returns

`number`[]

## Example

```ts
arrayFill([1, undefined, 3, undefined, 4]); /// [1, 2, 3, 3.5, 4]
arrayFill([1, undefined, 3, undefined, 4], 0); ///  [1, 2, 3, 4, 4]
arrayFill([1, undefined, 3, undefined, 10.55], 2); /// [1, 2, 3, 6.78, 10.55]
```
