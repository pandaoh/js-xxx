[**js-xxx v2.2.34**](../README.md) • **Docs**

***

[js-xxx v2.2.34](../README.md) / getTreeCheckNodes

# Function: getTreeCheckNodes()

> **getTreeCheckNodes**(`treeData`, `checkedKeys`, `halfCheckedKeys`, `fieldNames`): `object` \| `object`

主动获取树的半选/全选节点

## Parameters

• **treeData**: `any`[]

树值

• **checkedKeys**: `string`[]

已经全选的节点

• **halfCheckedKeys**: `string`[] = `[]`

已经半选的节点

• **fieldNames** = `...`

自定义字段名

• **fieldNames.children?**: `string`

• **fieldNames.key?**: `string`

## Returns

`object` \| `object`

## Example

```ts
getTreeCheckNodes(treeData, ['0-0', '0-1']); /// ...
getTreeCheckNodes(treeData, ['0-0', '0-1'], ['0']); /// ...
getTreeCheckNodes(treeData, ['0-0', '0-1'], ['0'], { key: 'id' }); /// 使用 id 作为唯一标识
```
