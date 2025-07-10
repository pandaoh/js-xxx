[**js-xxx v2.2.34**](../README.md) • **Docs**

***

[js-xxx v2.2.34](../README.md) / calcCron

# Function: calcCron()

> **calcCron**(`options`): `string`

生成 cron 表达式

## Parameters

• **options** = `{}`

cron 配置

• **options.day**: `undefined` \| `string` = `'*'`

• **options.hour**: `undefined` \| `string` = `'*'`

• **options.minute**: `undefined` \| `string` = `'*'`

• **options.month**: `undefined` \| `string` = `'*'`

• **options.week**: `undefined` \| `string` = `'*'`

## Returns

`string`

## Example

```ts
calcCron(); /// '* * * * *'
calcCron({ minute: '30', hour: '1', day: '10'}); /// '30 1 10 * *'
calcCron({  week: '?' }); /// '* * * * ?'
calcCron({ week: '*' }); /// '* * * * *'
calcCron({ week: 0 }); /// '* * * * 0'
calcCron({ week: '0' }); /// '* * * * 0'
calcCron({ week: '7' }); /// '* * * * 0'
calcCron({ week: 'SUN,天,日,六,6,5' }); /// '* * * * 0,5,6'
calcCron({ day: '1-5' }); /// '* * 1-5 * * '
calcCron({ day: '1,5' }); /// '* * 1,5 * * '
calcCron({ day: '1/5' }); /// '* * 1/5 * * '
```
