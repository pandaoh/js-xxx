[**js-xxx v2.2.30**](../README.md) • **Docs**

***

[js-xxx v2.2.30](../README.md) / textSplitCase

# Function: textSplitCase()

> **textSplitCase**(`str`): `string`[]

按照普遍的特殊字符分割字符串

## Parameters

• **str**: `string`

字符串

## Returns

`string`[]

## Example

```ts
textSplitCase('foo-bar'); /// ['foo', 'bar']
textSplitCase('foo_bar'); /// ['foo', 'bar']
textSplitCase('foo bar'); /// ['foo', 'bar']
textSplitCase('foo.bar'); /// ['foo', 'bar']
textSplitCase('fooBar'); /// ['foo', 'bar']
textSplitCase('foo-Bar'); /// ['foo', 'bar']
```
