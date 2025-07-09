[**js-xxx v2.2.33**](../README.md) • **Docs**

***

[js-xxx v2.2.33](../README.md) / union

# Function: union()

> **union**(`paramA`, `paramB`): `any`

获取数组或对象并集

## Parameters

• **paramA**: `any`

值 A，若冲突以此值为准。

• **paramB**: `any`

值 B

## Returns

`any`

## Example

```ts
union([1, 2, 2, 3, 3], [1, 2, 4, 5]); /// [1, 2, 3, 4, 5]
union({a: 1, b: 2}, {a: 1, c: 3, b: 4}); /// {a: 1, c: 3, b: 2}
```
