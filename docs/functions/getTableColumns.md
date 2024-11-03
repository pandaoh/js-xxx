[**js-xxx v2.2.25**](../README.md) • **Docs**

***

[js-xxx v2.2.25](../README.md) / getTableColumns

# Function: getTableColumns()

> **getTableColumns**(`fields`): `object`[]

生成 table columns 数组

## Parameters

• **fields**: `object`[]

基础数据

## Returns

`object`[]

## Example

```ts
const fields = [
  { label: 'Name', value: 'name' },
  { label: 'Email', key: 'email' },
  { label: 'Age' },
];
const columns = getTableColumns(fields);
console.log(columns);
// Output: [
//   { title: 'Name', dataIndex: 'name', key: 'name', label: 'Name', value: 'name' },
//   { title: 'Email', dataIndex: 'email', key: 'email', label: 'Email' },
//   { title: 'Age', dataIndex: 'Age', key: 'Age', label: 'Age' },
// ]
```
