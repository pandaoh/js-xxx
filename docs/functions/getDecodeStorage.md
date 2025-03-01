[**js-xxx v2.2.31**](../README.md) • **Docs**

***

[js-xxx v2.2.31](../README.md) / getDecodeStorage

# Function: getDecodeStorage()

> **getDecodeStorage**(`key`, `isLocal`): `any`

获取 Storage 加密数据

## Parameters

• **key**: `string`

存储 key

• **isLocal**: `boolean` = `true`

是否 localStorage

## Returns

`any`

## Example

```ts
getDecodeStorage("key"); /// 处理过后的 value，不需要再 decode 和解密。
```
