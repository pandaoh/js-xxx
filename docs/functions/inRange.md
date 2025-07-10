[**js-xxx v2.2.34**](../README.md) • **Docs**

***

[js-xxx v2.2.34](../README.md) / inRange

# Function: inRange()

> **inRange**(`value`, `min`, `max`): `boolean`

判断一个数是否在指定范围（闭区间）

## Parameters

• **value**: `any`

数值

• **min**: `number`

最小值

• **max**: `number`

最大值

## Returns

`boolean`

## Example

```ts
inRange(null, 0, 3); /// false
inRange(0, 0, 3); /// true
inRange(3, 0, 3); /// true
inRange(5, 0, 3); /// false
```
