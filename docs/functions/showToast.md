[**js-xxx v2.2.31**](../README.md) • **Docs**

***

[js-xxx v2.2.31](../README.md) / showToast

# Function: showToast()

> **showToast**(`options`): `HTMLDivElement`

显示 Toast
`export function showToast(options: xToastOptions);`

## Parameters

• **options**: [`xToastOptions`](../type-aliases/xToastOptions.md)

显示配置

## Returns

`HTMLDivElement`

## Example

```ts
showToast({ type: 'success', content: '这是一个演示 Toast' }); /// 显示 success 类型的 toast
```
