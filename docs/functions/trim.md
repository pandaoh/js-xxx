[**js-xxx v2.2.21**](../README.md) • **Docs**

***

[js-xxx v2.2.21](../README.md) / trim

# Function: trim()

> **trim**(`str`, `type`): `string`

去除字符串空格
`可选值：0|ba：去除前后空格，1|b：去除前空格，2|a：去除后空格，3|all：去除所有空格，4|pro：去除所有空格，中间的空格保留一个。`

## Parameters

• **str**: `string`

字符串

• **type**: `string` \| `number` = `0`

类型，默认为 0|ba，错误 type 会返回原字符串。

## Returns

`string`

## Example

```ts
trim('  a  b  ', 4); /// 'a b'
```
