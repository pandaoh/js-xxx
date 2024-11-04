[**js-xxx v2.2.26**](../README.md) • **Docs**

***

[js-xxx v2.2.26](../README.md) / observeResource

# Function: observeResource()

> **observeResource**(`callback`?): `void`

监听资源找不到的情况，刷新页面。

## Parameters

• **callback?**: `any`

## Returns

`void`

## Example

```ts
observeResource(() => console.log('Refreshing')); /// 找不到资源时输出 "Refreshing"
observeResource(); /// 找不到资源时刷新页面
```
