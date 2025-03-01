[**js-xxx v2.2.31**](../README.md) • **Docs**

***

[js-xxx v2.2.31](../README.md) / xTimer

# Function: xTimer()

> **xTimer**(`callback`, `time`?, `once`?, `immediate`?): () => `void`

创建定时器

## Parameters

• **callback**: `any`

回调函数

• **time?**: `number` = `0`

时间间隔（毫秒），默认为 1 。

• **once?**: `boolean` = `false`

是否为一次性定时器，默认为 false 。

• **immediate?**: `boolean` = `false`

是否立即执行回调函数，默认为 false 。

## Returns

`Function`

### Returns

`void`

## Example

```ts
const cancelTimer = xTimer(() => {
  console.log('Timer executed!');
}, 1000, true, true);
cancelTimer();
const cancelIntervalTimer = xTimer(() => {
  console.log('IntervalTimer executed!');
}, 1000, false);
cancelIntervalTimer();
```
