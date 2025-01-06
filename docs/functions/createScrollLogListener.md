[**js-xxx v2.2.29**](../README.md) • **Docs**

***

[js-xxx v2.2.29](../README.md) / createScrollLogListener

# Function: createScrollLogListener()

> **createScrollLogListener**(`element`?, `callback`?, `delay`?, `threshold`?): `undefined` \| () => `void`

创建全局 scroll 事件埋点与回调
若 log-* 属性报错，记得 eslint 关闭 `'react/no-unknown-property': 'warn'`。

## Parameters

• **element?**: `any`

元素

• **callback?**: `any`

监听 Track 回调

• **delay?**: `number` = `800`

防抖延迟

• **threshold?**: `number` = `30`

触发滚动事件阈值

## Returns

`undefined` \| () => `void`

## Example

```ts
const cancel = createScrollLogListener(document.querySelector('.demo-scroll-dom'), (event, eventKey, data) => console.log({ event, eventKey, data })); /// 页面加载完成后创建监听器，取消监听器 cancel(); 。
<div log-scroll={JSON.stringify({ logKey: 'example-scroll-X' })}>{...X 滚动埋点元素...}</div> /// 滚动埋点元素
```
