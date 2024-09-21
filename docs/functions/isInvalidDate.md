[**js-xxx v2.2.23**](../README.md) • **Docs**

***

[js-xxx v2.2.23](../README.md) / isInvalidDate

# Function: isInvalidDate()

> **isInvalidDate**(`date`): `boolean`

检查是否 Invalid Date 类型

## Parameters

• **date**: `any`

值

## Returns

`boolean`

## Example

```ts
isInvalidDate(new Date()); /// false
isInvalidDate(null); /// false
isInvalidDate(undefined); /// true
isInvalidDate(new Date('invalid date')); /// true
```
