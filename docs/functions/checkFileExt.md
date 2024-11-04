[**js-xxx v2.2.26**](../README.md) • **Docs**

***

[js-xxx v2.2.26](../README.md) / checkFileExt

# Function: checkFileExt()

> **checkFileExt**(`arr`, `value`): `boolean`

检查是否为 file.ext string 文件扩展名

## Parameters

• **arr**: `string`[]

• **value**: `string`

字符串值

## Returns

`boolean`

## Example

```ts
checkFileExt(['png', 'jpg'], 'test.jpg'); /// true
checkFileExt(['png', 'jpg'], 'test.JPG'); /// true
checkFileExt(['png', 'jpg'], 'test.jpg.txt'); /// false
```
