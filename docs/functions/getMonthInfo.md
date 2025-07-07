[**js-xxx v2.2.32**](../README.md) • **Docs**

***

[js-xxx v2.2.32](../README.md) / getMonthInfo

# Function: getMonthInfo()

> **getMonthInfo**(`n`): `object` \| `object`[]

获取月份信息

## Parameters

• **n**: `string` \| `number`

值

## Returns

`object` \| `object`[]

## Example

```ts
getMonthInfo(); /// MONTH_INFO
getMonthInfo('0'); /// MONTH_INFO
getMonthInfo('ALL'); /// MONTH_INFO
getMonthInfo('all'); /// MONTH_INFO
getMonthInfo('unknown'); /// MONTH_INFO
getMonthInfo(1); /// 一月相关信息
getMonthInfo(13); /// MONTH_INFO
```
