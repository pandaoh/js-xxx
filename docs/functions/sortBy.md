[**js-xxx v2.2.27**](../README.md) • **Docs**

***

[js-xxx v2.2.27](../README.md) / sortBy

# Function: sortBy()

> **sortBy**(`keys`?, `isAscend`?): `any`

返回排序回调函数(也支持中文、多个字段、混合类型)

## Parameters

• **keys?**: `string` \| `string`[]

排序的字段/集合

• **isAscend?**: `boolean` = `true`

是否升序

## Returns

`any`

## Example

```ts
['a', '3', 1, 2, 'b'].sort(sortBy('', false)); /// ['b', 'a', '3', 2, 1]
['a', '3', 1, 2, 'b'].sort(sortBy()); /// [1, 2, '3', 'a', 'b']
sortBy('createDt'); /// 按照 createDt 升序排列
sortBy(['name', 'age'], false); /// 按照 name + age 降序排列
```
