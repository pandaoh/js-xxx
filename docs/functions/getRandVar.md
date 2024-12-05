[**js-xxx v2.2.28**](../README.md) • **Docs**

***

[js-xxx v2.2.28](../README.md) / getRandVar

# Function: getRandVar()

> **getRandVar**(`value`, `count`): `any` \| `any`[]

获取数组或对象随机数据

## Parameters

• **value**: `any`

值

• **count**: `number` = `1`

获取数据量

## Returns

`any` \| `any`[]

## Example

```ts
getRandVar({ a: 1, b: 3 }); /// 1
getRandVar([1, 2, 3, 4], 2); /// [2, 4]
```
