[**js-xxx v2.2.30**](../README.md) • **Docs**

***

[js-xxx v2.2.30](../README.md) / bindMoreClick

# Function: bindMoreClick()

> **bindMoreClick**(`fn`, `times`, `delay`): (...`args`) => `void`

单独绑定多击事件

## Parameters

• **fn**: `any`

触发方法

• **times**: `number` = `3`

几次点击触发

• **delay**: `number` = `300`

点击间隔

## Returns

`Function`

### Parameters

• ...**args**: `any`[]

### Returns

`void`

## Example

```ts
dom.onclick = bindMoreClick(moreClickCallBack, 4, 500); /// 绑定 4 击事件
```
