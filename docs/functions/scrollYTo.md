[**js-xxx v2.2.21**](../README.md) • **Docs**

***

[js-xxx v2.2.21](../README.md) / scrollYTo

# Function: scrollYTo()

> **scrollYTo**(`targetVal`, `callback`, `dom`): `void`

Y 轴滚动到指定位置

## Parameters

• **targetVal**: `number` \| `"start"` \| `"end"`

'start' | 'end' | number

• **callback**: `any`

回调

• **dom**: `any` = `document.documentElement`

元素对象

## Returns

`void`

## Example

```ts
scrollYTo(0); /// 滚动到顶部
scrollYTo('start', null, document.documentElement); /// 滚动到顶部
scrollYTo('end', (percent) => console.log(percent), document.querySelector('body')); /// 滚动到底部
```
