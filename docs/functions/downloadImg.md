[**js-xxx v2.2.26**](../README.md) • **Docs**

***

[js-xxx v2.2.26](../README.md) / downloadImg

# Function: downloadImg()

> **downloadImg**(`url`, `fileName`?): `void`

根据 Blob 下载图片。

## Parameters

• **url**: `string`

图片的 URL 地址。

• **fileName?**: `string`

可选。下载的文件名。

## Returns

`void`

## Example

```ts
// 下载远程图片，并保存为 'image.jpg'
downloadImgByBlob('https://example.com/path/to/image.jpg', 'image.jpg');
// 下载远程图片，并保存为默认文件名（通常是图片的原始文件名）
downloadImgByBlob('https://example.com/path/to/image.jpg');
// 尝试下载一个无效的 URL，不会进行下载操作
downloadImgByBlob('invalid-url');
// 下载一张跨域图片（需要支持跨域下载）
downloadImgByBlob('https://a.example.com/path/to/cross-origin-image.jpg', 'cross-origin-image.jpg');
```
