[**js-xxx v2.2.32**](../README.md) • **Docs**

***

[js-xxx v2.2.32](../README.md) / qsParse

# Function: qsParse()

> **qsParse**(`url`?, `key`?): `any`

获取 query string 参数转对象

## Parameters

• **url?**: `string`

query string

• **key?**: `string`

参数名

## Returns

`any`

## Example

```ts
qsParse('start=0&count=20&x=1&x=2&x=3', 'x'); /// [1, 2, 3]
qsParse('http://a.cn/123/test?start=0&count=20&x=1&x=2&x=3#123'); /// { start: '0', count: '20', x: [1, 2, 3], '#': 123, '_': 'test', '/': 'test?start=0&count=20&x=1&x=2&x=3#123' }
```
