[**js-xxx v2.2.27**](../README.md) • **Docs**

***

[js-xxx v2.2.27](../README.md) / clearObject

# Function: clearObject()

> **clearObject**(`obj`, `replacement`?): `object`

清理对象中的空值，将 `null` 和 `undefined` 删除或替换

## Parameters

• **obj**: `any`

需要清理的对象

• **replacement?**: `any`

替换值，默认为 `undefined`，如果传入值则替换为该值

## Returns

`object`

## Example

```ts
clearObject({ a: 1, b: null, c: undefined, d: '', e: '   ' });
// 返回: { a: 1 }

clearObject({ a: 1, b: null, c: undefined, d: '', e: '   ' }, '');
// 返回: { a: 1, b: '', c: '', d: '', e: '' }
```
