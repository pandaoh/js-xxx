[**js-xxx v2.2.35**](../README.md) • **Docs**

***

[js-xxx v2.2.35](../README.md) / createIdleListener

# Function: createIdleListener()

> **createIdleListener**(`callback`, `timeout`?, `immediate`?): `object`

创建一个空闲监听器，监测用户的活动状态。

## Parameters

• **callback**: `any`

用户空闲时执行的回调函数。

• **timeout?**: `number` = `60`

空闲时间，单位为秒，默认值为 60 秒。

• **immediate?**: `boolean` = `true`

是否立即开始监测，默认为 true 。

## Returns

`object`

### getIdleCount()

> **getIdleCount**: () => `number`

#### Returns

`number`

### getVisibleCount()

> **getVisibleCount**: () => `number`

#### Returns

`number`

### restartDetection()

> **restartDetection**: () => `void`

#### Returns

`void`

### startDetection()

> **startDetection**: () => `void`

#### Returns

`void`

### stopDetection()

> **stopDetection**: () => `void`

#### Returns

`void`

## Example

```ts
const idleListener = createIdleListener(() => console.log('用户空闲了'), 15, true); // 15 秒超时
console.log(`可见状态次数: ${idleListener.getVisibleCount()}`);
console.log(`空闲状态次数: ${idleListener.getIdleCount()}`);
idleListener.stopDetection(); // 停止监听
idleListener.startDetection(); // 重新开始监听
```
