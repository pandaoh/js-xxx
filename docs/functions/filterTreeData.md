[**js-xxx v2.2.25**](../README.md) • **Docs**

***

[js-xxx v2.2.25](../README.md) / filterTreeData

# Function: filterTreeData()

> **filterTreeData**(`treeData`, `callback`?): `any`[]

获取筛选后的树数据，自定义方法。

## Parameters

• **treeData**: `any`[]

树值

• **callback?**

过滤的方法，默认不过滤。

## Returns

`any`[]

## Example

```ts
filterTreeData(treeData, (item) => item); /// ...
filterTreeData(treeData, (item) => filterIds.includes(item.id)); /// ...
```
