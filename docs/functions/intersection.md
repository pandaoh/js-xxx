[**js-xxx v2.2.30**](../README.md) • **Docs**

***

[js-xxx v2.2.30](../README.md) / intersection

# Function: intersection()

> **intersection**(`paramA`, `paramB`): `any`

获取数组或对象交集

## Parameters

• **paramA**: `any`

值 A

• **paramB**: `any`

值 B

## Returns

`any`

## Example

```ts
intersection([1, 2, 2, 3, 3], [1, 2, 4, 5]); /// [1, 2]
intersection({a: 1, b: 2}, {a: 1, c: 3, b: 4}); /// {a: 1}
```
