[**js-xxx v2.2.30**](../README.md) • **Docs**

***

[js-xxx v2.2.30](../README.md) / transferFileToBase64

# Function: transferFileToBase64()

> **transferFileToBase64**(`content`, `contentType`, `callBack`): `void`

文件流或内容转 Base64

## Parameters

• **content**: `any`

BlobPart | any 内容

• **contentType**: `string`

内容类型

• **callBack**: `any`

回调函数

## Returns

`void`

## Example

```ts
transferFileToBase64(file, 'application/pdf;charset=utf-8', (res) => console.log({ res })); /// result object
transferFileToBase64('test', 'text/plain', (res) => console.log({ res })); /// result object
```
