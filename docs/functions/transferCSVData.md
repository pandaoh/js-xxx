[**js-xxx v2.2.30**](../README.md) • **Docs**

***

[js-xxx v2.2.30](../README.md) / transferCSVData

# Function: transferCSVData()

> **transferCSVData**(`fields`, `data`): `string`

转换 data 为可导出的 csv 数据

## Parameters

• **fields**: `object`[]

导出的栏位

• **data**: `any`[]

数据

## Returns

`string`

## Example

```ts
transferCSVData([{ prop: 'name' }, { prop: 'age' }], [{ name: '张三', age: 15 }]); /// 可以导出的字符数据
transferCSVData([{ label: '姓名', prop: 'name' }, { label: '年龄', prop: 'age' }], [{ name: '张三', age: 15 }]); /// 可以导出的字符数据
```
