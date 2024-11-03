[**js-xxx v2.2.25**](../README.md) • **Docs**

***

[js-xxx v2.2.25](../README.md) / findMaxKey

# Function: findMaxKey()

> **findMaxKey**(`objArray`): `never`[]

找到对象数组具有最多 key 的对象，并返回其 key 组成的数组。

## Parameters

• **objArray**: `any`[]

源数据

## Returns

`never`[]

## Example

```ts
const objects = [
 { id: 1, name: 'a', age: 25 },
 { id: 2, name: 'b', age: 30, city: '123' },
 { id: 3, name: 'c', age: 35, city: '456', profession: 'Engineer' }
];
 findMaxKey(objects); /// ['id', 'name', 'age', 'city', 'profession']
```
