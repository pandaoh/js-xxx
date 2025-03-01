[**js-xxx v2.2.31**](../README.md) • **Docs**

***

[js-xxx v2.2.31](../README.md) / xFetch

# Function: xFetch()

> **xFetch**(`method`, `url`, `options`?): `Promise`\<`any`\>

fetch 简单封装

## Parameters

• **method**: `string`

Http Method

• **url**: `string`

地址/链接

• **options?**

请求配置

• **options.callback?**: `any`

• **options.data?**: `any`

• **options.headers?**: `any`

• **options.isFile?**: `boolean`

• **options.params?**: `any`

• **options.raw?**: `boolean`

## Returns

`Promise`\<`any`\>

## Example

```ts
xFetch('get', 'https://api.uomg.com/api/rand.qinghua?x=1', { params: { format: 'json', hello: 456 } }).then(data => console.log(data)); /// fetchXPromise
xFetch('POST', 'https://test.cn', { headers: { contentType: 'application/json' }, data: { test: 123 } }).catch(error => console.log(error)); /// fetchXPromise
```
