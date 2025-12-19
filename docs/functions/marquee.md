[**js-xxx v2.2.35**](../README.md) • **Docs**

***

[js-xxx v2.2.35](../README.md) / marquee

# Function: marquee()

> **marquee**(`selector`, `options`?): `void`

给元素设置 marquee 内容滚动效果，支持来回滚动，正常跑马灯，无限无缝滚动。
一般来说设置两层，滚动的区间就是父元素的大小。
若 #demo 高度小于 container，除非 loopType 设置 infinite，否则不会有动画。
<div class="demo-container"><div id="#demo">...span.items...</div></div>

## Parameters

• **selector**: `string`

选择器字符串

• **options?**

动画配置

• **options.direction?**: `"X"` \| `"Y"`

• **options.loopType?**: `"infinite"` \| `"normal"` \| `"origin"`

• **options.parentStyle?**: `string`

• **options.speed?**: `number`

• **options.style?**: `string`

## Returns

`void`

## Example

```ts
marquee('#demo'); /// 默认横向正常滚动(loopType=normal)
marquee('.demo-y', {direction: 'Y', loopType: 'infinite', speed: 3}); /// Y 轴无限无缝滚动，speed > 0 越小速度越快。
marquee('.demo-x', {direction: 'X', loopType: 'origin', speed: 3, style: 'animation-delay:2s;', parentStyle: 'color:red;'}); /// X 轴无限来回滚动
```
