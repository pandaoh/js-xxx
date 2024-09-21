[**js-xxx v2.2.23**](../README.md) • **Docs**

***

[js-xxx v2.2.23](../README.md) / exportFile

# Function: exportFile()

> **exportFile**(`data`, `fileName`?, `fileType`?): `void`

导出数据为文件

## Parameters

• **data**: `string`

数据

• **fileName?**: `string`

文件名

• **fileType?**: `string` = `'txt'`

文件类型

## Returns

`void`

## Example

```ts
exportFile(data); /// 导出 txt 文件
exportFile(data, 'csv-导出文件测试', 'csv'); /// 导出 csv 文件
exportFile(document.getElementById('table_to_xls').outerHTML, 'excelWithStyle', 'xls'); /// 导出表格为带样式的 excel xls 文件
exportFile('http://a.biugle.cn/img/cdn/dev/avatar/1.png', 'test', 'png'); /// 导出 png 文件
```
