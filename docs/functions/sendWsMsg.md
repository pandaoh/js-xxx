[**js-xxx v2.2.22**](../README.md) • **Docs**

***

[js-xxx v2.2.22](../README.md) / sendWsMsg

# Function: sendWsMsg()

> **sendWsMsg**(`message`, `isJSONEncode`): `boolean`

发送消息

## Parameters

• **message**: `any`

消息

• **isJSONEncode**: `boolean` = `false`

是否对数据 JSON 序列化

## Returns

`boolean`

## Example

```ts
sendWsMsg({ type: 'login', data: { username: 'admin', password: '123456' }}, true); /// true/false
sendWsMsg('testMsg'); /// true/false
```
