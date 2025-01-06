[**js-xxx v2.2.29**](../README.md) • **Docs**

***

[js-xxx v2.2.29](../README.md) / getNumberReg

# Function: getNumberReg()

> **getNumberReg**(`options`): `RegExp`

获取用于匹配数字的正则表达式。

## Parameters

• **options**

配置选项，options.integer 最大整数位数，options.decimal 最大小数位数。

• **options.decimal?**: `number`

• **options.integer?**: `number`

## Returns

`RegExp`

## Example

```ts
// 匹配最多 2 位整数，且不允许小数
const regex = getNumberReg({ integer: 2 });
regex.test('99'); // true
regex.test('123'); // false
regex.test('99.99'); // false
// 匹配最多 3 位整数和最多 2 位小数
const regex = getNumberReg({ integer: 3, decimal: 2 });
regex.test('999'); // true
regex.test('999.99'); // true
regex.test('999.999'); // false
// 匹配任意长度的整数和小数
const regex = getNumberReg({});
regex.test('123456789'); // true
regex.test('12345.6789'); // true
```
