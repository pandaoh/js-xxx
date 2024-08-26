[**js-xxx v2.2.22**](../README.md) • **Docs**

***

[js-xxx v2.2.22](../README.md) / parseJSON

# Function: parseJSON()

> **parseJSON**(`value`): `any`

解析 JSON 字符串

## Parameters

• **value**: `any`

需要解析的值

## Returns

`any`

## Example

```ts
parseJSON('{"name":"leo", "age":20}'); /// {"name": "leo", "age": 20}
parseJSON(123); /// 123
parseJSON(true); /// true
parseJSON(null); /// null
parseJSON('test error'); /// null
```
