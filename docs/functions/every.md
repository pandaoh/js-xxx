[**js-xxx v2.2.31**](../README.md) • **Docs**

***

[js-xxx v2.2.31](../README.md) / every

# Function: every()

> **every**(`collection`, `callback`?): `boolean`

every 函数
因为默认的 every 空数组会返回 true

## Parameters

• **collection**: `any`

源数据

• **callback?**: `any`

回调

## Returns

`boolean`

## Example

```ts
every([]); /// false
every([1, 2, 3], (item) => item > 0); /// true
every({}); /// false
every(undefined); /// false
```
