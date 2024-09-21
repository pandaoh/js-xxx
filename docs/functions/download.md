[**js-xxx v2.2.23**](../README.md) • **Docs**

***

[js-xxx v2.2.23](../README.md) / download

# Function: download()

> **download**(`link`, `name`): `void`

下载一个链接文档

## Parameters

• **link**: `string`

链接

• **name**: `string`

文件名称(可选，默认以链接最好一段作为名称，填写时可不带后缀自动识别，写了后缀会以写的后缀为准。)

## Returns

`void`

## Example

```ts
download('https://xxx.com/xxx', 'xxx'); /// 下载后端返回的流
```
