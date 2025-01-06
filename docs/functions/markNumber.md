[**js-xxx v2.2.29**](../README.md) • **Docs**

***

[js-xxx v2.2.29](../README.md) / markNumber

# Function: markNumber()

> **markNumber**(`value`): `string`

转换数字为大致数字描述

## Parameters

• **value**: `number`

数值

## Returns

`string`

## Example

```ts
markNumber(10000123111); /// '100.00 亿'
markNumber(12345); /// '1.2 万'
markNumber(123); /// '123'
```
