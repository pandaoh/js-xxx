[**js-xxx v2.2.28**](../README.md) • **Docs**

***

[js-xxx v2.2.28](../README.md) / xAjax

# Function: xAjax()

> **xAjax**(`method`, `url`, `options`?): `any`

ajax 简单封装

## Parameters

• **method**: `string`

Http Method

• **url**: `string`

地址/链接

• **options?**

请求配置

• **options.async?**: `boolean`

• **options.contentType?**: `string`

• **options.data?**: `any`

• **options.fail?**: `any`

• **options.params?**: `any`

• **options.raw?**: `boolean`

• **options.success?**: `any`

• **options.withCredentials?**: `boolean`

## Returns

`any`

## Example

```ts
xAjax('get', 'https://test.cn', { params: { test: 123, hello: 456 }, success: (data) => console.log('success', data), fail: (error) => console.log('fail', error) }); /// ajax
xAjax('POST', 'https://test.cn', { contentType: 'application/json', data: { test: 123 }, success: (data) => console.log('success', data), fail: (error) => console.log('fail', error) }); /// ajax
```
