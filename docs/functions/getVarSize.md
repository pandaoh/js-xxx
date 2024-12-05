[**js-xxx v2.2.28**](../README.md) • **Docs**

***

[js-xxx v2.2.28](../README.md) / getVarSize

# Function: getVarSize()

> **getVarSize**(`value`): `number`

获取任意变量长度

## Parameters

• **value**: `any`

值

## Returns

`number`

## Example

```ts
getVarSize([]); /// 0
getVarSize({a: 1, b: 2}); /// 2
getVarSize(null); /// 0
```
