[**js-xxx v2.2.30**](../README.md) • **Docs**

***

[js-xxx v2.2.30](../README.md) / any

# Function: any()

> **any**(`promises`, `errorHandler`?): `Promise`\<`any`\>

同步执行多个 promise，返回最先成功的结果，已做错误处理。

## Parameters

• **promises**: `Promise`\<`any`\>[]

promises

• **errorHandler?**: `any`

errorHandler

## Returns

`Promise`\<`any`\>

## Example

```ts
await any(...promise array); /// success result
```
