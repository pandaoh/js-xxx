[**js-xxx v2.2.27**](../README.md) • **Docs**

***

[js-xxx v2.2.27](../README.md) / sortCallBack

# Function: sortCallBack()

> **sortCallBack**(`key`, `isAscend`): `any`

返回排序回调函数(支持中文，不支持一级数据与混合类型。)

## Parameters

• **key**: `string`

排序的字段

• **isAscend**: `boolean` = `true`

是否升序

## Returns

`any`

## Example

```ts
sortCallBack('createDt', true); /// 按照 createDt 升序排列
const arr = [{name: '666'}, {name: '333'}]
arr.sort(sortCallBack('name')); /// [{name: '333'}, {name: '666'}]
arr.sort(sortCallBack('name', false)); /// [{name: '666'}, {name: '333'}]
```
