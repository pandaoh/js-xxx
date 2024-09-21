[**js-xxx v2.2.23**](../README.md) • **Docs**

***

[js-xxx v2.2.23](../README.md) / calcFontSize

# Function: calcFontSize()

> **calcFontSize**(`clientRatio`, `contentCenter`, `offsetSelector`): () => `void`

自动计算 font-size 并设置

## Parameters

• **clientRatio**: `number` = `...`

屏幕比例

• **contentCenter**: `boolean` = `false`

内容是否居中

• **offsetSelector**: `any`

偏移元素选择器，默认设置 html 根节点偏移。

## Returns

`Function`

### Returns

`void`

## Example

```ts
calcFontSize(); /// 按 16/9 计算并设置
calcFontSize(16/10, true); /// 按 16/10 计算并设置内容居中
calcFontSize(16/10, true, 'body'); /// 按 16/10 计算并设置 body 偏移使得内容居中
```
