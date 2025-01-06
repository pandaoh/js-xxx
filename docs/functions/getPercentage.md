[**js-xxx v2.2.29**](../README.md) • **Docs**

***

[js-xxx v2.2.29](../README.md) / getPercentage

# Function: getPercentage()

> **getPercentage**(`value`, `total`, `decimals`, `options`): `string` \| `number`

获取百分比

## Parameters

• **value**: `any`

数值

• **total**: `any`

总数

• **decimals**: `number` = `0`

• **options** = `...`

配置

• **options.float**: `boolean` = `false`

• **options.suffix**: `boolean` = `false`

## Returns

`string` \| `number`

## Example

```ts
getPercentage(102, 1020, 2); /// 10
getPercentage(102, 1020, 2, { float: true, suffix: true }); /// '10.00%'
getPercentage(17, 1020, 2); /// 1.67
getPercentage(1020, null, 2); /// 0
getPercentage(0, 1020, 2, { float: false, suffix: true }); /// '0%'
```
