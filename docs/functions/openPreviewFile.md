[**js-xxx v2.2.31**](../README.md) • **Docs**

***

[js-xxx v2.2.31](../README.md) / openPreviewFile

# Function: openPreviewFile()

> **openPreviewFile**(`url`, `serviceUrl`): `void`

新开页面预览文件。

## Parameters

• **url**: `string`

要预览的 URL 地址。

• **serviceUrl**: `string`

## Returns

`void`

## Example

```ts
// 预览 Word 文档
openPreviewFile('https://example.com/path/to/document.docx');
// 预览 Excel 表格
openPreviewFile('https://example.com/path/to/spreadsheet.xlsx');
// 预览 PDF 文件
openPreviewFile('https://example.com/path/to/document.pdf');
// 预览图片
openPreviewFile('https://example.com/path/to/image.png');
// 预览其他文件或未匹配的文件类型
openPreviewFile('https://example.com/path/to/otherfile.zip'); // 将直接打开链接
```
