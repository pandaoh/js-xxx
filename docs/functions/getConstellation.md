[**js-xxx v2.2.27**](../README.md) • **Docs**

***

[js-xxx v2.2.27](../README.md) / getConstellation

# Function: getConstellation()

> **getConstellation**(`date`): `object`

获取星座

## Parameters

• **date**: `any`

日期

## Returns

`object`

### cn

> **cn**: `string`

### date

> **date**: `any`

### en

> **en**: `string`

## Example

```ts
getConstellation('11-24'); /// { cn: '射手', en: 'Sagittarius', date: '11.23-12.21' }
getConstellation('xxx'); /// {cn: '未知', en: 'unknown', date: 'xxx'}
getConstellation(new Date('2022-11-24')); /// { cn: '射手', en: 'Sagittarius', date: '11.23-12.21' }
```
