[**js-xxx v2.2.34**](../README.md) • **Docs**

***

[js-xxx v2.2.34](../README.md) / toQueryString

# Function: toQueryString()

> **toQueryString**(`obj`, `hasBrackets`, `hasIndex`): `URLSearchParams`

对象转 URLSearchParams 字符串

## Parameters

• **obj**: `any`

源数据

• **hasBrackets**: `boolean` = `false`

是否带括号

• **hasIndex**: `boolean` = `false`

是否带 index

## Returns

`URLSearchParams`

## Example

```ts
toQueryString({a: 1, b: 2, c: [1, 2]}); /// a=1&b=2&c=1&c=2
toQueryString({a: 1, b: 2, c: [1, 2]}, true); /// a=1&b=2&c[]=1&c[]=2
toQueryString({a: 1, b: 2, c: [1, 2]}, true, true); /// a=1&b=2&c[0]=1&c[1]=2
```
