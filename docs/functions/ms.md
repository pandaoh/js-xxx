[**js-xxx v2.2.23**](../README.md) • **Docs**

***

[js-xxx v2.2.23](../README.md) / ms

# Function: ms()

> **ms**(`str`): `string` \| `number`

毫秒转换

## Parameters

• **str**: `any`

值

## Returns

`string` \| `number`

## Example

```ts
ms('1s'); /// 1000
ms('1m'); /// 60000
ms('1.5h'); /// 5400000
ms('1d'); /// 86400000
ms('1y'); /// 31557600000
ms('1000'); /// 1000
ms(1500); /// '1.5s'
ms(60000); /// '1m'
```
