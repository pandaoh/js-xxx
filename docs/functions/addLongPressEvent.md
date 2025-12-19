[**js-xxx v2.2.35**](../README.md) • **Docs**

***

[js-xxx v2.2.35](../README.md) / addLongPressEvent

# Function: addLongPressEvent()

> **addLongPressEvent**(`element`, `longPressCallback`, `duration`, `clickCallback`?): `void`

设置长按事件-支持加入单击事件

## Parameters

• **element**: `any`

需要绑定事件的元素

• **longPressCallback**: `any`

长按事件函数

• **duration**: `number` = `2500`

长按时间

• **clickCallback?**: `any`

单击事件函数(可选)

## Returns

`void`

## Example

```ts
addLongPressEvent(document.querySelector('.img-btn'), (event); /// console.log('addLongPressEvent'), 3000); /// 长按会触发事件
```
