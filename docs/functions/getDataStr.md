[**js-xxx v2.2.25**](../README.md) • **Docs**

***

[js-xxx v2.2.25](../README.md) / getDataStr

# Function: getDataStr()

> **getDataStr**(`value`, `defaultValue`, `prefix`, `suffix`): `string`

获取数据，支持格式化，默认值。

## Parameters

• **value**: `any`

值

• **defaultValue**: `string` = `'-'`

默认值

• **prefix**: `string` = `''`

前缀

• **suffix**: `string` = `''`

后缀

## Returns

`string`

## Example

```ts
getDataStr(123123123); /// '123123123'
getDataStr(undefined); /// '-'
getDataStr(undefined, 0); /// '0'
getDataStr('test', '', '(', ')'); /// '(test)'
getDataStr(undefined, '', '(', ')'); /// ''
getDataStr(false); /// 'false'
```
