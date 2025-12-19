[**js-xxx v2.2.35**](../README.md) • **Docs**

***

[js-xxx v2.2.35](../README.md) / sleep

# Function: sleep()

> **sleep**(`milliseconds`, `returnValue`?): `Promise`\<`any`\>

睡眠指定时间，或者 mock 接口数据。

## Parameters

• **milliseconds**: `undefined` \| `number`

睡眠时间

• **returnValue?**: `any`

返回值

## Returns

`Promise`\<`any`\>

## Example

```ts
await sleep(1000); /// 等待 1000 毫秒再执行后面的
await sleep(1000, '1'); /// 等待 1000 毫秒再执行后面的，并且返回 '1'，方便 mock 数据。
```
