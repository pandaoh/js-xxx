[**js-xxx v2.2.23**](../README.md) • **Docs**

***

[js-xxx v2.2.23](../README.md) / getType

# Function: getType()

> **getType**(`variable`): `string`

获取变量类型

## Parameters

• **variable**: `any`

变量

## Returns

`string`

## Example

```ts
getType(1); /// 'number'
getType(async function(){}); /// 'asyncfunction'
```
