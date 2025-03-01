[**js-xxx v2.2.31**](../README.md) • **Docs**

***

[js-xxx v2.2.31](../README.md) / emitEvent

# Function: emitEvent()

> **emitEvent**(`eventType`, `eventDetail`?, `element`?): `void`

触发元素事件

## Parameters

• **eventType**: `string` = `'click'`

事件类型，默认为 'click' 。

• **eventDetail?**: `any`

事件自定义参数可以为空。不为空触发 CustomEvent 。

• **element?**: `null` \| `HTMLElement` = `document.body`

目标元素，默认为 document.body ，支持传 document 。

## Returns

`void`

## Example

```ts
emitEvent('click', null, document.getElementById('myButton')); // 触发元素点击事件
emitEvent('click', { logKey: 'test', params: { hello: 'world' } }); // 触发自定义元素点击事件
```
