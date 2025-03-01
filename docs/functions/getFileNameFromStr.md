[**js-xxx v2.2.31**](../README.md) • **Docs**

***

[js-xxx v2.2.31](../README.md) / getFileNameFromStr

# Function: getFileNameFromStr()

> **getFileNameFromStr**(`str`, `keepExt`): `string`

根据字符串获取文件名（支持 URL 或其他路径字符串）。
- 支持处理带有查询参数的路径。
- 若无扩展名且 `keepExt` 为 `true`，默认使用 `.unknown`。
- 对于根路径或无文件名的情况，使用当前时间戳作为文件名。

## Parameters

• **str**: `string`

字符串（URL 、路径或文件名）。

• **keepExt**: `boolean` = `false`

可选。如果为 true，则返回包含文件扩展名的完整文件名，若无扩展名则使用 `.unknown`。

## Returns

`string`

## Example

```ts
getFileNameFromStr('https://example.com/path/to/file.jpg'); // 'file'
getFileNameFromStr('https://example.com/path/to/file.jpg', true); // 'file.jpg'
getFileNameFromStr('https://example.com/path/to/file'); // 'file'
getFileNameFromStr('https://example.com/path/to/file', true); // 'file.unknown'
getFileNameFromStr('/path/to/file.jpg'); // 'file'
getFileNameFromStr('simple-file.png'); // 'simple-file'
getFileNameFromStr('https://example.com/'); // '1691830390281' (假设当前时间为 1691830390281)
```
