[**js-xxx v2.2.25**](../README.md) • **Docs**

***

[js-xxx v2.2.25](../README.md) / waitUntil

# Function: waitUntil()

> **waitUntil**(`condition`, `timeout`, `interval`): `Promise`\<`any`\>

直到某个函数返回 toBool(true) 的结果(执行完成)

## Parameters

• **condition**: `any`

函数

• **timeout**: `number` = `0`

超时

• **interval**: `number` = `250`

执行间隔

## Returns

`Promise`\<`any`\>

## Example

```ts
let a = 5;
setTimeout(() => (a = 10), 5000);
waitUntil(() => a === 10).then(() => { console.log(a) });
```
