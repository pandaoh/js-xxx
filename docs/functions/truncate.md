[**js-xxx v2.2.23**](../README.md) • **Docs**

***

[js-xxx v2.2.23](../README.md) / truncate

# Function: truncate()

> **truncate**(`txt`, `width`, `options`?): `string`

截取字符串，使其长度为指定值，包含省略符。

## Parameters

• **txt**: `string`

字符串值

• **width**: `number`

指定长度

• **options?**

截取配置

• **options.ellipsis?**: `string`

• **options.separator?**: `string`

## Returns

`string`

## Example

```ts
truncate('HXB HXB HXB HXB HXB HXB', 12); /// 'HXB HXB H...'
truncate('OQM-OQM-OQM-OQM-OQM-OQM', 10, { ellipsis: '～', separator: '-' }); /// 'OQM-OQM～'
```
