[**js-xxx v2.2.25**](../README.md) • **Docs**

***

[js-xxx v2.2.25](../README.md) / buf2obj

# Function: buf2obj()

> **buf2obj**(`data`, `transfer`): `any`

buffer to object

## Parameters

• **data**: `any`

buffer 数据

• **transfer**: `any`

转换器

## Returns

`any`

## Example

```ts
const _protoBuffer = _proto.lookupType('MonitorMessage');
const obj = buf2obj(event.data, _protoBuffer);
console.log(obj);
```
