[**js-xxx v2.2.25**](../README.md) • **Docs**

***

[js-xxx v2.2.25](../README.md) / searchTreeData

# Function: searchTreeData()

> **searchTreeData**(`treeData`, `searchText`, `searchKeys`, `strictMode`): `any`[]

过滤树级数据，并支持显示完整结构。

## Parameters

• **treeData**: `any`[]

树值

• **searchText**: `string`

过滤的值

• **searchKeys**: `string` \| `string`[] = `...`

用于过滤的 key

• **strictMode**: `boolean` = `false`

搜索配置 strictMode 时，会强制平铺排列返回符合条件的节点，默认不开启，保持树排列。

## Returns

`any`[]

## Example

```ts
searchTreeData(treeData, '测试搜索关键字', 'id'); /// ...
searchTreeData(treeData, '测试搜索关键字', ['key', 'title']); /// ...
searchTreeData(treeData, '测试搜索关键字', ['data.key', 'title'], true); /// ...
```
