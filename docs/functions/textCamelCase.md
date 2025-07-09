[**js-xxx v2.2.33**](../README.md) • **Docs**

***

[js-xxx v2.2.33](../README.md) / textCamelCase

# Function: textCamelCase()

> **textCamelCase**(`str`): `string`

字符串转驼峰

## Parameters

• **str**: `string`

字符串

## Returns

`string`

## Example

```ts
textCamelCase('foo-bar'); /// 'fooBar'
textCamelCase('foo_bar'); /// 'fooBar'
textCamelCase('foo bar'); /// 'fooBar'
textCamelCase('foo.bar'); /// 'fooBar'
```
