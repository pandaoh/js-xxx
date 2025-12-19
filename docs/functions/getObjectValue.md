[**js-xxx v2.2.35**](../README.md) • **Docs**

***

[js-xxx v2.2.35](../README.md) / getObjectValue

# Function: getObjectValue()

> **getObjectValue**(`obj`, `keys`, `defaultValue`?, `isLastKeyOnly`?): `any`

获取对象中的多个值，支持为空时使用默认值。

## Parameters

• **obj**: `any` = `{}`

需要获取值的对象

• **keys**: `string`[]

要获取的键数组，支持多级别。

• **defaultValue?**: `any`

默认值，当对象中不存在某个键时，使用该值替换。

• **isLastKeyOnly?**: `boolean` = `true`

是否只使用最后一级键作为结果对象的键名，默认为 true 。

## Returns

`any`

返回包含键值对的结果对象

## Example

```ts
getObjectValue({ a: 1, b: null, c: undefined, d: '' }, ['a', 'b', 'c', 'd', 'e']);
// 返回: { a: 1, b: null, c: 0, d: undefined, e: undefined }

getObjectValue({ a: 1, b: null, c: undefined, d: '' }, ['a', 'b', 'c', 'd', 'e'], 0);
// 返回: { a: 1, b: null, c: 0, d: '', e: 0 }

getObjectValue({ a: 1, b: undefined, c: { d: 'test' } }, ['a', 'b', 'c.d'], 'default');
// 返回: { a: 1, b: 'default', d: 'test' }

getObjectValue({ a: 1, b: undefined, c: { d: 'test', e: [0] } }, ['a', 'b', 'c.d', 'c.e.0'], 'default');
// 返回: { a: 1, b: 'default', c.d: 'test', 'c.e.0': 0 }

getObjectValue({ a: { b: { c: 3 } } }, ['a.b.c', 'a.b.d'], '-', false);
// 返回: { c: 3, d: '-' }
```
