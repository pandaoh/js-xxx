[**js-xxx v2.2.29**](../README.md) • **Docs**

***

[js-xxx v2.2.29](../README.md) / getDateDifference

# Function: getDateDifference()

> **getDateDifference**(`oldDate`, `nowDate`?, `type`?): `number` \| `object`

两个时间差距计算

## Parameters

• **oldDate**: `string` \| `Date`

久远一点的时间

• **nowDate?**: `string` \| `Date`

近一点的时间，默认当前时间。

• **type?**: `"ALL"` \| `"all"` \| `"day"` \| `"days"` \| `"hour"` \| `"hours"` \| `"minute"` \| `"minutes"` \| `"second"` \| `"seconds"` \| `"DAY"` \| `"DAYS"` \| `"HOUR"` \| `"HOURS"` \| `"MINUTE"` \| `"MINUTES"` \| `"SECOND"` \| `"SECONDS"` = `'all'`

计算方式，默认计算差距的精确天数、时分秒。

## Returns

`number` \| `object`

## Example

```ts
getDateDifference(new Date('2022-05-01'), new Date(), 'day'); /// 37
getDateDifference(new Date('2022-05-01'), new Date(), 'all'); /// {days: 37, hours: 8, minutes: 46, seconds: 47}
```
