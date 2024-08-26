[**js-xxx v2.2.22**](../README.md) • **Docs**

***

[js-xxx v2.2.22](../README.md) / leftJoin

# Function: leftJoin()

> **leftJoin**(`str`, `length`, `char`): `string`

左边补某个字符

## Parameters

• **str**: `string` \| `number`

字符串

• **length**: `string` \| `number` = `2`

• **char**: `string` \| `number` = `0`

## Returns

`string`

## Example

```ts
leftJoin('1', 3, '0'); /// '001'
leftJoin(0, 3, 1); /// '110'
```
