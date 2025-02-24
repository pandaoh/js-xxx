[**js-xxx v2.2.30**](../README.md) • **Docs**

***

[js-xxx v2.2.30](../README.md) / isFn

# Function: isFn()

> **isFn**(`value`): `boolean`

检查是否为 function

## Parameters

• **value**: `any`

值

## Returns

`boolean`

## Example

```ts
isFn(function(){}); /// true
isFn(async function(){}); /// true
isFn(new Promise((resolve, reject) => resolve()); /// false
isFn({}); /// false
```
