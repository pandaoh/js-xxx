[**js-xxx v2.2.27**](../README.md) • **Docs**

***

[js-xxx v2.2.27](../README.md) / setEventListener

# Function: setEventListener()

> **setEventListener**(`eventKey`, `foo`, `once`, `dom`): `any`

设置监听函数
返回取消该监听的函数 return cancel

## Parameters

• **eventKey**: `string`

事件 key

• **foo**: `any`

函数

• **once**: `boolean` = `false`

是否只触发一次

• **dom**: `any` = `window`

document.querySelector<HTMLDivElement>('.xxx')

## Returns

`any`

## Example

```ts
setEventListener('resize', () => { console.log('resize'); }); /// cancel 当前 listener 的 function
```
