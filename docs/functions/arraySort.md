[**js-xxx v2.2.32**](../README.md) • **Docs**

***

[js-xxx v2.2.32](../README.md) / arraySort

# Function: arraySort()

> **arraySort**(`arr`, `type`, `keys`?): `any`[]

数组排序(支持多条件排序+中文)

## Parameters

• **arr**: `any`[]

数组

• **type**: `boolean` \| `"desc"` \| `"asc"` \| `"ASC"` \| `"DESC"` = `'asc'`

类型

• **keys?**: `string` \| `string`[]

关键字/集合

## Returns

`any`[]

## Example

```ts
arraySort(["a", "3", 1, 2, "b"]); /// [1, 2, '3', 'a', 'b']
arraySort(["a", "3", 1, 2, "b"], 'asc'); /// [1, 2, '3', 'a', 'b']
arraySort(["a", "3", 1, 2, "b"], false); /// ['b', 'a', '3', 2, 1]
arraySort(["a", "3", 1, 2, "b"], 'desc'); /// ['b', 'a', '3', 2, 1]
let arr1 = [{ a: 'a', b: 'b', c: '张三', d: 1 }, { a: 'c', b: 'd', c: '李四', d: 2 }, { a: 'e', b: 'f', c: '王五', d: 3 }];
arraySort(arr1, false, 'a'); /// e - c - a
arraySort(arr1, false, ['d', 'c']); /// 3 - 2 - 1
arraySort(arr1, 'DESC', ['c']); /// 张三 - 王五 - 李四
```
