[**js-xxx v2.2.21**](../README.md) • **Docs**

***

[js-xxx v2.2.21](../README.md) / transferTreeData

# Function: transferTreeData()

> **transferTreeData**(`sourceData`, `options`): `any`[]

转换数组数据为树状数据

## Parameters

• **sourceData**: `any`[]

源数据

• **options** = `...`

转化选项

• **options.labelKey**: `string`

• **options.parentKey**: `string`

• **options.valueKey**: `string`

## Returns

`any`[]

## Example

```ts
transferTreeData(treeData); /// ...
transferTreeData(treeData, { labelKey: 'title', valueKey: 'key', parentKey: 'parent' }); /// ...
```
