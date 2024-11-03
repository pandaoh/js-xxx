[**js-xxx v2.2.25**](../README.md) • **Docs**

***

[js-xxx v2.2.25](../README.md) / calcDate

# Function: calcDate()

> **calcDate**(`date`, `calcStrOrArr`): `Date`

时间计算

## Parameters

• **date**: `string` \| `Date`

时间

• **calcStrOrArr**: `string` \| `string`[]

'1 days' or ['-1 day', '3 month']

## Returns

`Date`

## Example

```ts
calcDate(new Date(), '-1 days'); /// date object
calcDate(new Date(), '-1 DAYS'); /// date object
calcDate(new Date(), ['-1 day', '+1 year', '-2 month', '2 weeks', '1 hour', '-3 minute', '45 seconds']); /// date object
```
