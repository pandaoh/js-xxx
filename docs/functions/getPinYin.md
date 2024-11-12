[**js-xxx v2.2.27**](../README.md) • **Docs**

***

[js-xxx v2.2.27](../README.md) / getPinYin

# Function: getPinYin()

> **getPinYin**(`str`, `extractFirst`): `string`

获取汉字拼音或首字母

## Parameters

• **str**: `string`

字符串值

• **extractFirst**: `boolean` = `false`

是否只获取首字母

## Returns

`string`

## Example

```ts
getPinYin('你好'); /// 'NiHao'
getPinYin('你好', true); /// 'NH'
getPinYin('贺'); /// 'He'
```
