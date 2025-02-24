[**js-xxx v2.2.30**](../README.md) • **Docs**

***

[js-xxx v2.2.30](../README.md) / to

# Function: to()

> **to**(`promise`, `res`?, `rej`?): `Promise`\<`any`\>

参考了 to.js，扩展 Promise 用来直接帮助执行且处理异常。
promise 报错不会阻断后面的 Promise，适用于多个 await Promise 情况。

## Parameters

• **promise**: `Promise`\<`any`\>

promise

• **res?**: `any`

成功回调

• **rej?**: `any`

失败回调

## Returns

`Promise`\<`any`\>

## Example

```ts
to(Promise.resolve(1)); /// Promise.resolve(1)
// 也可挂载在 Promise 原型上
```
