[**js-xxx v2.2.27**](../README.md) • **Docs**

***

[js-xxx v2.2.27](../README.md) / calculate

# Function: calculate()

> **calculate**(`operator`, ...`args`): `number`

计算所有数

## Parameters

• **operator**: `string`

操作符

• ...**args**: `any`[]

需要计算的数...

## Returns

`number`

## Example

```ts
calculate('+', 1, 2, 3, 4); /// 10
calculate('+', 1, 2, 3, undefined); /// 6
calculate('*', 1, 2, 3); /// 6
calculate('*', 1, 2, 3, undefined); /// 0
calculate('-', 10, 2, 3); /// 5
calculate('/', 10, 2, 2); /// 2.5
```
