[**js-xxx v2.2.35**](../README.md) • **Docs**

***

[js-xxx v2.2.35](../README.md) / retry

# Function: retry()

> **retry**(`promise`, `count`, `delay`): `Promise`\<`unknown`\>

Promise 重试

## Parameters

• **promise**: `Promise`\<`any`\>

promise

• **count**: `number` = `0`

次数

• **delay**: `number` = `0`

延迟时间

## Returns

`Promise`\<`unknown`\>

## Example

```ts
retry(() => Promise.reject(new Error('error')), 3); /// Promise.reject(new Error('error')) 执行 3 次
```
