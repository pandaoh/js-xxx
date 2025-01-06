[**js-xxx v2.2.29**](../README.md) • **Docs**

***

[js-xxx v2.2.29](../README.md) / obj2buf

# Function: obj2buf()

> **obj2buf**(`data`, `transfer`): `any`

object to buffer

## Parameters

• **data**: `any`

object 数据

• **transfer**: `any`

转换器

## Returns

`any`

## Example

```ts
const _protoBuffer = _proto.lookupType('MonitorMessage');
const bufferData = obj2buf(obj, _protoBuffer);
console.log(bufferData);
webSocket.send(bufferData);
```
