[**js-xxx v2.2.27**](../README.md) • **Docs**

***

[js-xxx v2.2.27](../README.md) / countdown

# Function: countdown()

> **countdown**(`seconds`, `callback`?, `finishCallBack`?): `any`

倒计时

## Parameters

• **seconds**: `number`

秒数

• **callback?**: `any`

回调函数

• **finishCallBack?**: `any`

完成回调函数

## Returns

`any`

## Example

```ts
console.time('test'); countdown(10, (x) => console.log('--->', x), () => console.timeEnd('test')); /// test: 10023.636962890625 ms
```
