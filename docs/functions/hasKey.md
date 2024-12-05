[**js-xxx v2.2.28**](../README.md) • **Docs**

***

[js-xxx v2.2.28](../README.md) / hasKey

# Function: hasKey()

> **hasKey**(`data`, `key`): `boolean`

对象/数组包含某个 key/index 或者属性

## Parameters

• **data**: `any`

对象

• **key**: `string`

需要判断的 key

## Returns

`boolean`

## Example

```ts
hasKey({ a: 1 }, 'a'); /// true
hasKey([0, 1], '0'); /// true
hasKey([0, 1], 2); /// false
hasKey({ a: 1 }, 'b'); /// false
const a = { a: 1 };
a.__proto__.x = 1;
hasKey(a, 'x'); /// true;
```
