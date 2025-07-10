[**js-xxx v2.2.34**](../README.md) • **Docs**

***

[js-xxx v2.2.34](../README.md) / round

# Function: round()

> **round**(`number`, `d`): `number`

四舍五入
`const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);`
`const toPrecision = (number, c) => (Math.round(+number * 10 ** c) / 10 ** c).toFixed(c);`

## Parameters

• **number**: `any`

浮点数

• **d**: `number`

保留小数位

## Returns

`number`

## Example

```ts
round(1.2345, 2); /// 1.23
round(0.355, 2); /// 0.36
round(1.005, 2); /// 1.01
```
