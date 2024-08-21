[**js-xxx v2.2.21**](../README.md) • **Docs**

***

[js-xxx v2.2.21](../README.md) / getFileNameFromUrl

# Function: getFileNameFromUrl()

> **getFileNameFromUrl**(`url`, `onlyExt`): `string`

根据 URL 获取文件名。

## Parameters

• **url**: `string`

要获取文件名的 URL 。

• **onlyExt**: `boolean` = `false`

可选。如果为 true，则仅返回文件扩展名。

## Returns

`string`

## Example

```ts
// 获取一个简单 URL 的文件名
getFileNameFromUrl('https://example.com/path/to/file.jpg'); // 'file.jpg'
// 获取带有查询参数的 URL 的文件名
getFileNameFromUrl('https://example.com/path/to/file.jpg?version=1.2'); // 'file.jpg'
// 获取没有文件扩展名的 URL 的文件名
getFileNameFromUrl('https://example.com/path/to/file'); // 'file.txt'
// 获取根路径 URL 的文件名
getFileNameFromUrl('https://example.com/'); // '1691830390281.txt' (假设当前时间为 1691830390281)
// 获取一个复杂编码的 URL 的文件名
getFileNameFromUrl('https://example.com/path/to/%E4%BD%A0%E5%A5%BD.jpg'); // '你好.jpg'
// 获取包含多个查询参数的 URL 的文件名
getFileNameFromUrl('https://example.com/path/to/file.jpg?param1=value1&param2=value2'); // 'file.jpg'
// 仅获取文件扩展名
getFileNameFromUrl('https://example.com/path/to/file.jpg', true); // 'jpg'
```
