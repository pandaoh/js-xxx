[**js-xxx v2.2.23**](../README.md) • **Docs**

***

[js-xxx v2.2.23](../README.md) / downloadFile

# Function: downloadFile()

> **downloadFile**(`url`, `fileName`?): `void`

下载文件

## Parameters

• **url**: `string`

文件的 URL 地址。

• **fileName?**: `string`

可选。下载的文件名，默认为 URL 中的文件名。

## Returns

`void`

## Example

```ts
// 下载并保存为 'xxx'
downloadFile('https://example.com/path/to/file.jpg', 'xxx'); // 将文件保存为 'xxx.jpg'
// 下载并保存为链接中的文件名
downloadFile('https://example.com/path/to/file.jpg'); // 将文件保存为 'file.jpg'
// 下载并保存为指定的文件名（没有扩展名）
downloadFile('https://example.com/path/to/file.jpg', 'customFileName'); // 将文件保存为 'customFileName.jpg'
// 下载并保存为带有扩展名的自定义文件名
downloadFile('https://example.com/path/to/file.jpg', 'customFileName.png'); // 将文件保存为 'customFileName.png'
```
