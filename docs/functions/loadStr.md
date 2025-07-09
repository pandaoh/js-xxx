[**js-xxx v2.2.33**](../README.md) • **Docs**

***

[js-xxx v2.2.33](../README.md) / loadStr

# Function: loadStr()

> **loadStr**(`str`, `params`, `emptyStr`?): `string`

将字符串中的占位符替换为对应的值

## Parameters

• **str**: `string`

原始字符串

• **params**: `any`

参数对象，包含占位符的键值对。

• **emptyStr?**: `string`

对象不存在键值时的占位符，默认不变。

## Returns

`string`

## Example

```ts
loadStr('hello ${test}', { test: 123 }); // 'hello 123'
loadStr('hello ${test}', undefined); // 'hello ${test}'
loadStr('hello ${test}', undefined, '$'); // 'hello $'
loadStr('hello ${name.first}-${name.last} ${ test }', { name: { first: 'A', last: 'B' }, test: '!' }); // 'hello A-B !'
```
