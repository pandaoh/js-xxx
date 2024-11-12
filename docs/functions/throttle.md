[**js-xxx v2.2.27**](../README.md) • **Docs**

***

[js-xxx v2.2.27](../README.md) / throttle

# Function: throttle()

> **throttle**(`fn`, `delay`): () => `void`

节流函数-第一次有效（游戏开枪间隔）

## Parameters

• **fn**: `any`

执行的函数

• **delay**: `number` = `2000`

延迟时间

## Returns

`Function`

### Returns

`void`

## Example

```ts
throttle(() => {}, 1000); /// 节流执行
```
