[**js-xxx v2.2.23**](../README.md) • **Docs**

***

[js-xxx v2.2.23](../README.md) / sessionStorageSet

# Function: sessionStorageSet()

> **sessionStorageSet**(`key`, `value`): `boolean`

设置 sessionStorage

## Parameters

• **key**: `string`

存储 key

• **value**: `any`

存储 value，value === null|undefined 清除数据。

## Returns

`boolean`

## Example

```ts
sessionStorageSet("key", "value"); /// 存储时不需要处理数据，value === null|undefined 清除数据。
```
