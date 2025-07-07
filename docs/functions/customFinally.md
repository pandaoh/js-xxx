[**js-xxx v2.2.32**](../README.md) • **Docs**

***

[js-xxx v2.2.32](../README.md) / customFinally

# Function: customFinally()

> **customFinally**(`promise`, `onFinally`?): `Promise`\<`any`\>

自定义封装 Promise 的 finally 方法，小程序使用。

## Parameters

• **promise**: `Promise`\<`any`\>

要封装的 Promise 对象

• **onFinally?**: `any`

finally 回调函数 (可选)

## Returns

`Promise`\<`any`\>

## Example

```ts
customFinally(Promise.resolve(1), () => console.log(1)); /// finally 回调
// 也可挂载在 Promise 原型上
```
