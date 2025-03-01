[**js-xxx v2.2.31**](../README.md) • **Docs**

***

[js-xxx v2.2.31](../README.md) / getBaseURL

# Function: getBaseURL()

> **getBaseURL**(`url`?, `hashRoute`?): `string`

获取不带任何参数或片段标识符的当前 URL

## Parameters

• **url?**: `string`

地址/链接

• **hashRoute?**: `boolean` = `false`

是否为 hash 路由，默认为 false 。

## Returns

`string`

## Example

```ts
getBaseURL('https://test.com/index?name=leo&org=biugle#test'); /// 'https://test.com/index'
getBaseURL(''); /// ''
getBaseURL(); /// 当前页面 BaseURL
getBaseURL('https://test.com/#/test?name=leo&org=biugle', true); /// 'https://test.com/#/test'
getBaseURL(null); /// 相当于 window.location.origin
```
