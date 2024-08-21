[**js-xxx v2.2.21**](../README.md) • **Docs**

***

[js-xxx v2.2.21](../README.md) / compareTo

# Function: compareTo()

> **compareTo**(`value1`, `value2`, `strict`): `boolean`

比较两个值是否相等，支持严格模式和忽略大小写的比较。

## Parameters

• **value1**: `any`

第一个值

• **value2**: `any`

第二个值

• **strict**: `boolean` = `false`

是否启用严格模式: true 表示严格比较，false 表示忽略大小写和类型比较，默认值为 false 。

## Returns

`boolean`

## Example

```ts
compareTo(1, 2); /// false
compareTo('a', 'A'); /// true
compareTo('a', 'A', true); /// false
compareTo(3, 3); /// true
compareTo(2, '2'); /// true
compareTo('apple', 'banana'); /// false
compareTo('2', 2, true); /// false
compareTo('2', 2); /// true
```
