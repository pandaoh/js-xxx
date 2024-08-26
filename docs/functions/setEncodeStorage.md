[**js-xxx v2.2.22**](../README.md) • **Docs**

***

[js-xxx v2.2.22](../README.md) / setEncodeStorage

# Function: setEncodeStorage()

> **setEncodeStorage**(`key`, `value`, `isLocal`): `boolean`

设置 Storage 加密数据

## Parameters

• **key**: `string`

存储 key

• **value**: `string`

存储 value 字符串，value === null|undefined 清除数据。

• **isLocal**: `boolean` = `true`

是否 localStorage

## Returns

`boolean`

## Example

```ts
setEncodeStorage("key", "value"); /// 存储时不需要处理数据，自动加密，value === null|undefined 清除数据。(boolean)
```
