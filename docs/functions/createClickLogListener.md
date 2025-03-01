[**js-xxx v2.2.31**](../README.md) • **Docs**

***

[js-xxx v2.2.31](../README.md) / createClickLogListener

# Function: createClickLogListener()

> **createClickLogListener**(`callback`?): `any`

创建全局 click 事件埋点与回调，也可使用 `emitEvent` 主动触发。
若 log-* 属性报错，记得 eslint 关闭 `'react/no-unknown-property': 'warn'`。

## Parameters

• **callback?**: `any`

监听 Track 回调

## Returns

`any`

## Example

```ts
const clickListenerObj = createClickLogListener((event, key, data) => console.log({ event, key, data })); /// 页面加载完成后创建监听器，取消监听器 clickListenerObj.cancel(); 。
<div log-click={JSON.stringify({ trigger: 'click', params: { name: '普通日志' }, logKey: 'example-key-0' })}>普通埋点元素</div> /// 普通埋点元素写法
<div log-click={JSON.stringify({ maxSequence: 2, sequence: 1, trigger: 'click', params: { name: '固定顺序日志' }, logKey: 'example-key-1' })}>固定顺序埋点元素 1</div> /// 固定顺序埋点元素写法
<div log-click={JSON.stringify({ maxSequence: 2, sequence: 2, trigger: 'click', params: { name: '固定顺序日志' }, logKey: 'example-key-1' })}>固定顺序埋点元素 2</div> /// 固定顺序埋点元素写法
<div log-click={JSON.stringify({ isOrder: true, orderKey: '元素 1', params: { name: '非固定顺序日志' }, logKey: 'example-key-2' })}>非固定顺序埋点元素 1</div> /// 非固定顺序埋点元素写法
<div log-click={JSON.stringify({ isOrder: true, orderKey: '元素 2', params: { name: '非固定顺序日志' }, logKey: 'example-key-2' })}>非固定顺序埋点元素 2</div> /// 非固定顺序埋点元素写法
```
