[**js-xxx v2.2.28**](../README.md) • **Docs**

***

[js-xxx v2.2.28](../README.md) / rightJoin

# Function: rightJoin()

> **rightJoin**(`str`, `length`, `char`): `string`

右边补某个字符

## Parameters

• **str**: `string` \| `number`

字符串

• **length**: `string` \| `number` = `2`

• **char**: `string` \| `number` = `0`

## Returns

`string`

## Example

```ts
rightJoin('1', 3, 'x'); /// '1xx'
rightJoin(0, 3, 1); /// '011'
```
