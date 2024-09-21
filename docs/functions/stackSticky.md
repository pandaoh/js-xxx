[**js-xxx v2.2.23**](../README.md) • **Docs**

***

[js-xxx v2.2.23](../README.md) / stackSticky

# Function: stackSticky()

> **stackSticky**(`selectors`, `direction`): `void`

自动堆叠

## Parameters

• **selectors**: `string`

选择器字符串

• **direction**: `string` = `'top'`

堆叠方向

## Returns

`void`

## Example

```ts
stackSticky('.stack', 'top'); /// 所有 .stack 元素自动在 top 上堆叠
stackSticky('.stack', 'left'); /// 所有 .stack 元素自动在 left 上堆叠
```
