[**js-xxx v2.2.33**](../README.md) • **Docs**

***

[js-xxx v2.2.33](../README.md) / stringifyJSON

# Function: stringifyJSON()

> **stringifyJSON**(`value`): `string`

将任意值序列化为 JSON 字符串，处理无法序列化的情况。

## Parameters

• **value**: `any`

需要序列化的值

## Returns

`string`

## Example

```ts
stringifyJSON({ name: 'leo', age: 20 }); /// '{"name":"leo","age":20}'
stringifyJSON(123); /// '123'
stringifyJSON(true); /// 'true'
stringifyJSON(null); /// 'null'
stringifyJSON(() => {}); /// ''
stringifyJSON(Symbol('test')); /// ''
```
