[**js-xxx v2.2.31**](../README.md) • **Docs**

***

[js-xxx v2.2.31](../README.md) / slugify

# Function: slugify()

> **slugify**(`str`, `replacement`?): `string`

Slug 化字符串 URL，将字符串转换为 URL 友好的格式。

## Parameters

• **str**: `string`

字符串值

• **replacement?**

替换字符串映射

## Returns

`string`

## Example

```ts
slugify('I LOVE OQM'); /// 'I_LOVE_OQM'
slugify('I LOVE OQM', { ' ': '-' }); /// 'I-LOVE-OQM'
```
