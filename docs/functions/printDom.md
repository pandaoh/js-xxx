[**js-xxx v2.2.26**](../README.md) • **Docs**

***

[js-xxx v2.2.26](../README.md) / printDom

# Function: printDom()

> **printDom**(`selector`, `styles`?): `any`

在打印预览中打印指定元素，并设置样式。
需在浏览器打印设置中-更多设置-开启背景与图形打印选项

## Parameters

• **selector**: `string`

要打印的元素的 CSS 选择器。

• **styles?**

iframe 的 style 配置对象。

• **styles.bodyStyle?**: `any`

• **styles.htmlStyle?**: `any`

• **styles.iframeStyle?**: `any`

## Returns

`any`

## Example

```ts
printElement('#print-table', {
  bodyStyle: {
    padding: '10px',
    backgroundColor: 'red',
  },
});
```
