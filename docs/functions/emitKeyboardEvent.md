[**js-xxx v2.2.32**](../README.md) • **Docs**

***

[js-xxx v2.2.32](../README.md) / emitKeyboardEvent

# Function: emitKeyboardEvent()

> **emitKeyboardEvent**(`keyOrKeyCode`, `eventType`, `element`): `void`

触发某个键盘按键事件

## Parameters

• **keyOrKeyCode**: `string` \| `number` = `13`

触发键盘 code，默认为 13 。

• **eventType**: `"keydown"` \| `"keypress"` \| `"keyup"` = `'keydown'`

事件类型，默认为 'keydown' 。

• **element**: `null` \| `HTMLElement` = `document.body`

目标元素，默认为 document.body ，支持传 document 。

## Returns

`void`

## Example

```ts
emitKeyboardEvent(108, 'keyup'); // 小键盘回车事件
emitKeyboardEvent('Enter'); // 回车事件
emitKeyboardEvent(KEYBOARD_CODE.TAB, 'keypress'); // TAB 事件
```
