[**js-xxx v2.2.29**](../README.md) • **Docs**

***

[js-xxx v2.2.29](../README.md) / scrollXTo

# Function: scrollXTo()

> **scrollXTo**(`targetVal`, `callback`, `dom`): `void`

X 轴滚动到指定位置

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
scrollXTo(0); /// 滚动到左侧
scrollXTo('start', null, document.documentElement); /// 滚动到左侧
scrollXTo('end', (percent) => console.log(percent), document.querySelector('body')); /// 滚动到右侧
```
