[**js-xxx v2.2.32**](../README.md) • **Docs**

***

[js-xxx v2.2.32](../README.md) / getUTCTime

# Function: getUTCTime()

> **getUTCTime**(`timezone`): `Date`

获取标准时间 UTC
适用于本地时间不准确或者获取其他时区时间的情况

## Parameters

• **timezone**: `number` = `0`

时区数字，东八区为 8，西八区为 -8 。

## Returns

`Date`

## Example

```ts
getUTCTime(8); /// 中国标准时间-东八区
```
