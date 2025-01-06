[**js-xxx v2.2.29**](../README.md) • **Docs**

***

[js-xxx v2.2.29](../README.md) / contains

# Function: contains()

> **contains**(`value`, `target`): `boolean`

检测某个数组是否包含某个值

## Parameters

• **value**: `any`[]

值

• **target**: `any`

目标值

## Returns

`boolean`

## Example

```ts
contains([1, 2, 2, 3, 3], 3); /// true
contains([1, 2, 2, 3, 3], '3'); /// false
contains(['test1', 'test2'],'test'); /// false
contains([{a: 1, b: 2}, {a: 2, b: 3}], {a: 2, b: 3}); /// true
contains([{a: 1, b: 2}, {a: 2, b: 3}], {b: 3, a: 2}); /// true
contains([[1, 2], [3, 4]], [4, 3]); /// true
contains([[1, 2], [3, 4]], [3, 4]); /// true
contains([[1, 2], [3, 4]], [1, 3]); /// false
```
