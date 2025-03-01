[**js-xxx v2.2.31**](../README.md) • **Docs**

***

[js-xxx v2.2.31](../README.md) / openFileSelect

# Function: openFileSelect()

> **openFileSelect**(`options`?): `Promise`\<`any`\>

在浏览器中打开文件选择框

## Parameters

• **options?**

打开配置

• **options.accept?**: `string`

• **options.multiple?**: `boolean`

• **options.resultType?**: `"blob"` \| `"base64"`

## Returns

`Promise`\<`any`\>

## Example

```ts
openFileSelect({ multiple: true }).then(fileList => console.log(fileList));
openFileSelect({ multiple: true, accept: 'image/*', resultType: 'blob' }).then(fileBlobList => console.log(fileBlobList));
openFileSelect({ multiple: true, accept: '.txt', resultType: 'base64' }).then(fileDataUrlList => console.log(fileDataUrlList));
```
