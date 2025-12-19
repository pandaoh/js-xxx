[**js-xxx v2.2.35**](../README.md) • **Docs**

***

[js-xxx v2.2.35](../README.md) / isJSON

# Function: isJSON()

> **isJSON**(`str`): `boolean`

检查字符串是否为有效的 JSON

## Parameters

• **str**: `any`

字符串

## Returns

`boolean`

## Example

```ts
isJSON('{"name":"leo", "age":20}'); /// true
isJSON('{"name":"leo", age:"20"}'); /// false
isJSON(null); /// true
```
