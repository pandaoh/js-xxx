[**js-xxx v2.2.34**](../README.md) • **Docs**

***

[js-xxx v2.2.34](../README.md) / scrollToView

# Function: scrollToView()

> **scrollToView**(`dom`, `targetVal`): `void`

将元素滚动到视野范围

## Parameters

• **dom**: `any` = `document.documentElement`

元素对象

• **targetVal**: `"center"` \| `"start"` \| `"end"` \| `"nearest"` = `'center'`

'start' | 'end' | 'center' | 'nearest'

## Returns

`void`

## Example

```ts
scrollIntoView(document.querySelector('.test')); /// test 元素滚动到视野范围
scrollIntoView(document.querySelector('.test'), 'start'); /// test 元素滚动到视野范围顶部
```
