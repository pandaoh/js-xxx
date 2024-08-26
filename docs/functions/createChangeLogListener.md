[**js-xxx v2.2.22**](../README.md) • **Docs**

***

[js-xxx v2.2.22](../README.md) / createChangeLogListener

# Function: createChangeLogListener()

> **createChangeLogListener**(`callback`?): () => `void`

创建全局 change 事件埋点与回调，也可使用 `emitEvent` 主动触发。

## Parameters

• **callback?**: `any`

监听 Track 回调

## Returns

`Function`

### Returns

`void`

## Example

```ts
const cancel = createChangeLogListener((event, key, data) => console.log({ event, key, data })); /// 页面加载完成后创建监听器，取消监听器 cancel(); 。
<div log-change={JSON.stringify({ logKey: 'div-input-change-0' })}><input /></div> /// 父元素总监听
<input log-change={JSON.stringify({ logKey: 'input-change-1' })} /> /// 普通监听
```
