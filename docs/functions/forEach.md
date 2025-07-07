[**js-xxx v2.2.32**](../README.md) • **Docs**

***

[js-xxx v2.2.32](../README.md) / forEach

# Function: forEach()

> **forEach**(`data`, `callback`, `hasReturn`): `any`

遍历数组或对象，并对每个元素执行回调函数，支持中途 break 和 continue 。

## Parameters

• **data**: `any`

要遍历的数据，可以是数组或对象。

• **callback**

回调函数

• **hasReturn**: `boolean` = `false`

是否返回一个新值

## Returns

`any`

## Example

```ts
forEach([1, 2, 3], (item, index) => console.log(item, index));
forEach([1, 2, 3], (item, index) => item * 2, true); /// [2, 4, 6]
forEach({a: 1, b: 2}, (value, key) => console.log(value, key));
forEach({a: 1, b: 2}, (value, key) => value * 2, true); /// {a: 2, b: 4}
```
