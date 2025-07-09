[**js-xxx v2.2.33**](../README.md) • **Docs**

***

[js-xxx v2.2.33](../README.md) / forceToStr

# Function: forceToStr()

> **forceToStr**(`value`, `defaultValue`): `string`

强制转化为字符串，避免导出表格显示科学计数法。

## Parameters

• **value**: `any`

值

• **defaultValue**: `string` = `'-'`

默认值

## Returns

`string`

## Example

```ts
forceToStr(123123123); /// '123123123'
forceToStr(undefined); /// '-'
forceToStr(undefined, 0); /// '0'
```
