[**js-xxx v2.2.23**](../README.md) • **Docs**

***

[js-xxx v2.2.23](../README.md) / onResize

# Function: onResize()

> **onResize**(`foo`): `any`

设置 resize 时的监听函数，默认重新加载页面。
返回取消该监听的函数 return cancel

## Parameters

• **foo**: `any`

函数

## Returns

`any`

## Example

```ts
onResize(); /// cancel 当前 listener 的 function
onResize('resize', () => { console.log('resize'); }); /// cancel 当前 listener 的 function
```
