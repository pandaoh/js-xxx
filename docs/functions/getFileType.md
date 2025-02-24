[**js-xxx v2.2.30**](../README.md) • **Docs**

***

[js-xxx v2.2.30](../README.md) / getFileType

# Function: getFileType()

> **getFileType**(`str`): `string`

获取文件类型（扩展名）的小写格式。
- 支持处理带有查询参数的路径。
- 若无扩展名，返回 `unknown`。

## Parameters

• **str**: `string`

字符串（URL 、路径或文件名）。

## Returns

`string`

## Example

```ts
getFileType('https://example.com/path/to/file.pdf'); // 'pdf'
getFileType('file.JPG'); // 'jpg'
getFileType('document'); // 'unknown'
```
