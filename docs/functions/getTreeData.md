[**js-xxx v2.2.31**](../README.md) • **Docs**

***

[js-xxx v2.2.31](../README.md) / getTreeData

# Function: getTreeData()

> **getTreeData**(`treeData`, `key`): `object`

获取转换后树的映射对象、数组 `{ map: any, list: any[] }`

## Parameters

• **treeData**: `any`[]

树值

• **key**: `string` = `'key'`

key

## Returns

`object`

### list

> **list**: `any`[]

### map

> **map**: `any`

## Example

```ts
getTreeData(treeData, 'id'); /// { map: any, list: any[] }
getTreeData(treeData, 'data.id'); /// { map: any, list: any[] }
```
