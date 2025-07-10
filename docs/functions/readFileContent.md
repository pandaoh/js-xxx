[**js-xxx v2.2.34**](../README.md) • **Docs**

***

[js-xxx v2.2.34](../README.md) / readFileContent

# Function: readFileContent()

> **readFileContent**(`file`, `type`?): `Promise`\<`any`\>

解析或者读取文件内容

## Parameters

• **file**: `any`

文件

• **type?**: `"blob"` \| `"text"` \| `"arrayBuffer"` \| `"base64"`

类型

## Returns

`Promise`\<`any`\>

## Example

```ts
readFileContent('test.txt', 'text').then(res => console.log(res)); /// 读取文件内容
readFileContent('test.txt').then(res => console.log(res)); /// 读取文件内容
readFileContent('test.csv').then(res => console.log(res)); /// 读取文件内容
readFileContent('test.txt', 'base64').then(res => console.log(res)); /// 读取文件内容为 base64
readFileContent('test.txt', 'blob').then(res => console.log(res)); /// 读取文件内容为 blob
readFileContent('test.txt', 'arrayBuffer').then(res => console.log(res)); /// 读取文件内容为 arrayBuffer
```
