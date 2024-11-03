[**js-xxx v2.2.25**](../README.md) • **Docs**

***

[js-xxx v2.2.25](../README.md) / downloadContent

# Function: downloadContent()

> **downloadContent**(`name`, `content`): `void`

在浏览器中自定义下载一些内容，与 download 不同的是，downloadContent 采用 Blob 可能会有长度限制。

## Parameters

• **name**: `string`

文件名称(需带后缀)，默认 txt 。

• **content**: `any`

内容 BlobPart | any

## Returns

`void`

## Example

```ts
downloadContent('test.txt', 'test txt content'); /// 下载返回的流
downloadContent('test.json', JSON.stringify({content: 'test json'})); /// 下载返回的流
```
