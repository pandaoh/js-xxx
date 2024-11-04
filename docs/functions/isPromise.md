[**js-xxx v2.2.26**](../README.md) • **Docs**

***

[js-xxx v2.2.26](../README.md) / isPromise

# Function: isPromise()

> **isPromise**(`value`): `boolean`

检查是否为 Promise

## Parameters

• **value**: `any`

值

## Returns

`boolean`

## Example

```ts
isPromise(function(){}); /// false
isPromise(async function(){}); /// false
isPromise(new Promise((resolve, reject) => resolve())); /// true
```
