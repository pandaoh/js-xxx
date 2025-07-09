[**js-xxx v2.2.33**](../README.md) • **Docs**

***

[js-xxx v2.2.33](../README.md) / getKey

# Function: getKey()

> **getKey**(`size`, `prefix`?, `suffix`?): `string`

获取带前/后缀的唯一 key

## Parameters

• **size**: `number` = `21`

指定长度

• **prefix?**: `string`

前缀

• **suffix?**: `string`

## Returns

`string`

## Example

```ts
getKey(); /// 'M2rmCcGpXCa5MTdN4Kks5'
getKey(2, 'test'); /// 'test-aK'
getKey(2, null, 'last'); /// 'aK-last'
```
