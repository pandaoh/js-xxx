[**js-xxx v2.2.34**](../README.md) • **Docs**

***

[js-xxx v2.2.34](../README.md) / textTransferCase

# Function: textTransferCase()

> **textTransferCase**(`str`, `type`): `string`

改变字符串大小写

## Parameters

• **str**: `string`

字符串

• **type**: `1` \| `2` \| `3` \| `"upper"` \| `"lower"` \| `"first"`

目标类型

## Returns

`string`

## Example

```ts
textTransferCase('red', 'upper'|1); /// 'RED'
textTransferCase('red', 'lower'|2); /// 'red'
textTransferCase('red', 'first'|3); /// 'Red'
```
