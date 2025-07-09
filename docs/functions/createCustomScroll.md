[**js-xxx v2.2.33**](../README.md) • **Docs**

***

[js-xxx v2.2.33](../README.md) / createCustomScroll

# Function: createCustomScroll()

> **createCustomScroll**(`selector`, `options`): () => `void`

为指定元素创建自定义滚动条

## Parameters

• **selector**: `string`

目标元素选择器

• **options** = `{}`

配置选项

• **options.scrollClassName?**: `string`

滚动条容器类名

• **options.scrollContainer?**: `string`

滚动条插入的容器选择器,默认插入到目标元素顶部

• **options.scrollCssDirection?**: `"horizontal"` \| `"vertical"`

滚动条样式方向

• **options.scrollCtrlDirection?**: `"y"` \| `"x"`

控制滚动方向

## Returns

`Function`

### Returns

`void`

## Example

```ts
// 创建一个垂直样式的滚动条，控制横向滚动
const destroy = createCustomScroll('#my-element', {
  scrollCssDirection: 'vertical', // 滚动条样式方向
  scrollCtrlDirection: 'x', // 控制滚动方向
  scrollContainer: '.custom-container', // 滚动条插入位置
  scrollClassName: 'my-scroll', // 自定义类名
});

// 销毁滚动条
destroy();
```
