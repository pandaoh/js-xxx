[**js-xxx v2.2.26**](../README.md) • **Docs**

***

[js-xxx v2.2.26](../README.md) / arr2select

# Function: arr2select()

> **arr2select**(`arr`, `options`): `any`[]

转化为 Select 数据，至少有 label/value/key 字段。

## Parameters

• **arr**: `any`[]

数组

• **options**

配置 { label?: 'label', value: 'value', key?: 'key' }

• **options.key?**: `string`

• **options.label?**: `string`

• **options.value**: `string`

## Returns

`any`[]

## Example

```ts
arr2select([{ id: 1, name: 'A' }, { id: 2, name: 'B' }], { label: 'name', value: 'id' });
/// [{ label: 'A', value: 1, key: 'selectKey-Random1' }, { label: 'B', value: 2, key: 'selectKey-Random2' }]
arr2select([{ id: 1, name: 'A' }, { id: 2, name: 'B' }], { value: 'id', key: 'UNDEFINED' });
/// [{ label: 1, value: 1, key: 1 }, { label: 2, value: 2, key: 2 }]
arr2select([{ data: { id: 1, name: 'A' }, key: 'test1' }, { data: { id: 2, name: 'B' }, key: 'test2' }], { value: 'data.id', key: 'key', label: 'data.name' });
/// [{ value: 1, label: "A", key: "test1" }, { value: 2, label: "B", key: "test2" }]
```
