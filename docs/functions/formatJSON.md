[**js-xxx v2.2.27**](../README.md) • **Docs**

***

[js-xxx v2.2.27](../README.md) / formatJSON

# Function: formatJSON()

> **formatJSON**(`value`): `string`

格式化 JSON 字符串

## Parameters

• **value**: `any`

值

## Returns

`string`

## Example

```ts
formatJSON({ a: 123, b: 456 }); /// '{\n  "a": 123,\n  "b": 456\n}'
formatJSON('123'); /// '"123"'
formatJSON(123); /// '123'
formatJSON(null); /// 'null'
formatJSON(true); /// 'true'
formatJSON(undefined); /// 'undefined'
formatJSON(new Date()); /// '"2023-03-02T10:02:42.019Z"'
```
