[**js-xxx v2.2.34**](../README.md) • **Docs**

***

[js-xxx v2.2.34](../README.md) / data2Obj

# Function: data2Obj()

> **data2Obj**(`sourceData`, `key`, `vKey`?): `object`

数组对象转对象，按照指定的 key 分组。

## Parameters

• **sourceData**: `object`[]

源数据

• **key**: `string`

分组的 key

• **vKey?**: `string`

值的 key，默认为整个值。

## Returns

`object`

## Example

```ts
data2Obj([{a: 1, b: 2}, {a: 3}, {b: 1}, {c: 1}], 'a'); /// {1: {a: 1, b: 2}, 3: {a: 3}, undefined: {c: 1}}
data2Obj([{a: 1, b: 'b1'}, {a: 3}, {a: 2, b: 'b2'}], 'a', 'b'); /// { '1': 'b1', '2': 'b2', '3': undefined }
```
