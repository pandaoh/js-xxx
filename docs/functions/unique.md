[**js-xxx v2.2.26**](../README.md) • **Docs**

***

[js-xxx v2.2.26](../README.md) / unique

# Function: unique()

> **unique**(`arr`, `filter`?): `any`[]

数组去重

## Parameters

• **arr**: `any`[]

数组

• **filter?**: `any`

过滤逻辑

## Returns

`any`[]

## Example

```ts
unique([1, 2, 3, 1, 2, 3]); /// [1, 2, 3]
unique([{id: 1, value: 'hello'}, {id: 2, value: 'world'}, {id: 2, value: 'world', others: true}], (a, b) => a.id === b.id); /// [id1, id2 带 true]
```
