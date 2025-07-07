[**js-xxx v2.2.32**](../README.md) • **Docs**

***

[js-xxx v2.2.32](../README.md) / getQueryString

# Function: getQueryString()

> **getQueryString**(`url`?): `any`

获取 url 查询参数字符串

## Parameters

• **url?**: `string`

地址/链接

## Returns

`any`

## Example

```ts
getQueryString('https://test.com/index?name=leo&org=biugle#test'); /// 'name=leo&org=biugle'
getQueryString(''); /// ''
getQueryString(); /// 当前页面 QueryString 字符串部分
```
