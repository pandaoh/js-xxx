[**js-xxx v2.2.33**](../README.md) • **Docs**

***

[js-xxx v2.2.33](../README.md) / transferNumber

# Function: transferNumber()

> **transferNumber**(`number`, `from`, `to`): `string` \| `number`

提供进制转换，最大为 64 进制。

## Parameters

• **number**: `number`

数值

• **from**: `number` = `10`

原进制

• **to**: `number` = `2`

目标进制

## Returns

`string` \| `number`

## Example

```ts
transferNumber(100); /// '1100100'
transferNumber(1100100, 2, 10); /// 100
```
