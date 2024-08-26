[**js-xxx v2.2.22**](../README.md) • **Docs**

***

[js-xxx v2.2.22](../README.md) / deepClone

# Function: deepClone()

> **deepClone**(`data`, `hash`): `any`

深拷贝

## Parameters

• **data**: `any`

源数据

• **hash**: `WeakMap`\<`object`, `any`\> = `...`

hash 存储，避免循环引用。

## Returns

`any`

## Link

https://juejin.cn/post/7075351322014253064

## Example

```ts
deepClone({a: 1, b: {c: 2}}); /// 新的 {a: 1, b: {c: 2}}
```
