[**js-xxx v2.2.23**](../README.md) • **Docs**

***

[js-xxx v2.2.23](../README.md) / debounce

# Function: debounce()

> **debounce**(`fn`, `delay`): () => `void`

防抖函数-最后一次有效（抢购）

## Parameters

• **fn**: `any`

执行的函数

• **delay**: `number` = `1000`

延迟时间

## Returns

`Function`

### Returns

`void`

## Example

```ts
debounce(() => {}, 1000); /// 防抖执行
```
