[**js-xxx v2.2.30**](../README.md) • **Docs**

***

[js-xxx v2.2.30](../README.md) / formatNumber

# Function: formatNumber()

> **formatNumber**(`value`, `n`): `string`

数字人性化显示

## Parameters

• **value**: `string` \| `number`

数值

• **n**: `number` = `2`

精度

## Returns

`string`

## Example

```ts
formatNumber('12312300'); /// '12,312,300'
formatNumber(851232.1314); /// '851,232.13'
formatNumber(851232.1314, 0); /// '851,232'
```
