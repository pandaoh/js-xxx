[**js-xxx v2.2.23**](../README.md) • **Docs**

***

[js-xxx v2.2.23](../README.md) / getDateList

# Function: getDateList()

> **getDateList**(`n`, `type`, `date`): `string`[]

获取指定日期数目的数组

## Parameters

• **n**: `number`

数目

• **type**: `"year"` \| `"month"` \| `"day"` \| `"hour"` \| `"minute"` \| `"second"` = `'day'`

类型

• **date**: `any` = `...`

日期

## Returns

`string`[]

## Example

```ts
getDateList(7, 'day'); /// 得到今天到未来 7 天的日期数组
getDateList(-7, 'day'); /// 得到今天到之前 7 天的日期数组
getDateList(7, 'year'); /// 得到今年到未来 7 年的日期数组
getDateList(7, 'month'); /// 得到本月到未来 7 个月的日期数组
getDateList(7, 'day', '2023-02-01'); /// 得到 2023-02-01 日到未来 7 天的日期数组
```
