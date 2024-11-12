[**js-xxx v2.2.27**](../README.md) • **Docs**

***

[js-xxx v2.2.27](../README.md) / getScrollParent

# Function: getScrollParent()

> **getScrollParent**(`element`?): `HTMLElement` \| `Document` \| `any`

获取最近的可滚动父元素。
支持普通 DOM 、 Shadow DOM 和 iframe 。

## Parameters

• **element?**: `any`

目标元素

## Returns

`HTMLElement` \| `Document` \| `any`

## Example

```ts
getScrollParent(document.querySelector('.form-error')); // Form
getScrollParent(); /// document.documentElement
```
