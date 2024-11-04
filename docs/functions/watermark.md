[**js-xxx v2.2.26**](../README.md) • **Docs**

***

[js-xxx v2.2.26](../README.md) / watermark

# Function: watermark()

> **watermark**(`dom`, `text`, `options`): `void`

给对应 dom 生成水印
窗口 resize 的时候最好要重新调用渲染

## Parameters

• **dom**: `any`

需要生成水印的 dom

• **text**: `string`

水印文本，支持换行符 `\n` 。

• **options**: `any` = `{}`

样式配置

## Returns

`void`

## Example

```ts
watermark(document.body, 'My Watermark', { fontSize: 20, opacity: 0.5, angle: -30, color: 'red', fontFamily: 'Arial', repeat: true, backgroundOpacity: 0.05 });
watermark(document.body, 'My Watermark'); /// 在 body 中生成水印
watermark(document.body, 'My Watermark\n2024-07-11'); /// 在 body 中生成水印，支持换行符。
watermark(document.body, 'My Watermark', { fontSize: 120, color: 'red', repeat: false, angle: 0 }); /// 在 body 中生成水印
watermark(document.body, 'My Watermark', { fontSize: 20, color: 'red', repeat: true, angle: 90 }); /// 在 body 中生成水印
```
