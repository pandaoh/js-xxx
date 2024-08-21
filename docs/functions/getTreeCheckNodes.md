[**js-xxx v2.2.21**](../README.md) • **Docs**

***

[js-xxx v2.2.21](../README.md) / getTreeCheckNodes

# Function: getTreeCheckNodes()

> **getTreeCheckNodes**(`treeData`, `checkedKeys`, `halfCheckedKeys`?): `object`

主动获取树的半选/全选节点

## Parameters

• **treeData**: `any`[]

树值

• **checkedKeys**: `any`[]

已经全选的节点

• **halfCheckedKeys?**: `any`[]

已经半选的节点

## Returns

`object`

### checkedKeys

> **checkedKeys**: `undefined` \| `any`[]

### halfCheckedKeys

> **halfCheckedKeys**: `undefined` \| `any`[]

### nodeMap

> **nodeMap**: `Map`\<`any`, `any`\>

### parentMap

> **parentMap**: `Map`\<`any`, `any`\>

## Example

```ts
getTreeCheckNodes(treeData, ['0-0', '0-1']); /// ...
getTreeCheckNodes(treeData, ['0-0', '0-1'], ['0']); /// ...
```
