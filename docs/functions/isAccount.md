[**js-xxx v2.2.32**](../README.md) • **Docs**

***

[js-xxx v2.2.32](../README.md) / isAccount

# Function: isAccount()

> **isAccount**(`value`, `hasChinese`): `boolean`

检查是否为 char string 用户名规范(字母数字下划线或中文)

## Parameters

• **value**: `string`

字符串值

• **hasChinese**: `boolean` = `false`

## Returns

`boolean`

## Example

```ts
isAccount('test123@qq.com'); /// false
isAccount('_test123_qq_com'); /// false
isAccount('test123_qq_com'); /// true
isAccount('我test123_qq_com'); /// false
isAccount('我test123_qq_com', true); /// true
```
