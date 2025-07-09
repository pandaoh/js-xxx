[**js-xxx v2.2.33**](../README.md) • **Docs**

***

[js-xxx v2.2.33](../README.md) / getContentType

# Function: getContentType()

> **getContentType**(`fileType`): `string`

获取常见的 content-type

## Parameters

• **fileType**: `string`

文件类型

## Returns

`string`

## Example

```ts
getContentType('form'); /// 'application/x-www-form-urlencoded'
getContentType('file'); /// 'multipart/form-data'
getContentType('pdf'); /// 'application/pdf'
getContentType('PDF'); /// 'application/pdf'
getContentType('unknown'); /// 'application/octet-stream'
```
