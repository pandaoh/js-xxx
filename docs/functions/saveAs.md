[**js-xxx v2.2.30**](../README.md) • **Docs**

***

[js-xxx v2.2.30](../README.md) / saveAs

# Function: saveAs()

> **saveAs**(`blob`, `filename`?): `void`

将 Blob 对象保存为文件并下载。

## Parameters

• **blob**: `Blob`

要保存的 Blob 对象。

• **filename?**: `string`

可选。保存的文件名。

## Returns

`void`

## Example

```ts
const blob = new Blob(['Hello, World!'], { type: 'text/plain' });
saveAs(blob, 'hello.txt'); // 下载文件名为 'hello.txt'
const jsonBlob = new Blob([JSON.stringify({ a: 1, b: 2 }, null, 2)], { type: 'application/json' });
saveAs(jsonBlob, 'data.json'); // 下载文件名为 'data.json'
```
