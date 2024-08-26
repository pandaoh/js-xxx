[**js-xxx v2.2.22**](../README.md) • **Docs**

***

[js-xxx v2.2.22](../README.md) / getSearchParams

# Function: getSearchParams()

> **getSearchParams**(`url`?): `any`

获取查询地址/链接中的参数对象

## Parameters

• **url?**: `string`

地址/链接

## Returns

`any`

## Example

```ts
getSearchParams('https://test.com/index?name=leo&org=biugle#test'); /// {name: 'leo', org: 'biugle'}
getSearchParams(''); /// {}
getSearchParams(); /// 当前页面 SearchParams 对象
```
