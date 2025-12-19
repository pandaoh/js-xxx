[**js-xxx v2.2.35**](../README.md) • **Docs**

***

[js-xxx v2.2.35](../README.md) / catchPromise

# Function: catchPromise()

> **catchPromise**(`promiseHandler`, `errorHandler`?): `Promise`\<`any`\>

New 一个自带错误处理的 Promise，适用于只处理成功情况，不关注失败的 Promise，省去写 catch 的时间与空间。

## Parameters

• **promiseHandler**: `any`

promiseHandler

• **errorHandler?**: `any`

errorHandler

## Returns

`Promise`\<`any`\>

## Example

```ts
new catchPromise(resolve, reject, rejectHandler); /// Promise
```
