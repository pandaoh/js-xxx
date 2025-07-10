[**js-xxx v2.2.34**](../README.md) • **Docs**

***

[js-xxx v2.2.34](../README.md) / scrollToElement

# Function: scrollToElement()

> **scrollToElement**(`options`): `void`

滚动到指定元素，并将其显示在可滚动容器的中间。
适用于表单报错时定位报错元素，支持嵌套滚动容器。

## Parameters

• **options**

配置对象，包含以下属性：
  - {string} selector - 目标元素的 CSS 选择器。
  - {number} [delay=0] - 滚动执行的延迟时间（毫秒）。
  - {boolean} [parent=false] - 是否在主应用中查找元素（适用于 Shadow DOM 情况）。

• **options.delay?**: `number`

• **options.parent?**: `boolean`

• **options.selector**: `string`

## Returns

`void`

## Example

```ts
// 立即滚动到指定元素
scrollToElement({
  selector: '#error-element',
  delay: 0,
  parent: true,
});
// 延迟滚动到指定元素
scrollToElement({
  selector: '.form-error',
  delay: 100,
});
```
