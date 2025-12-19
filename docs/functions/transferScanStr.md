[**js-xxx v2.2.35**](../README.md) • **Docs**

***

[js-xxx v2.2.35](../README.md) / transferScanStr

# Function: transferScanStr()

> **transferScanStr**(`value`, `higherReplace`): `string`

强制转换扫描字符串的特殊字符
`/(=)|(<)|(>)|(《)|(》)|(&)|(%)|(\^)|(!)|(~)|(#)|(@)|(:)|(\s)|(')|(")|(‘)|(’)|(“)|(”)/g`

## Parameters

• **value**: `string`

值

• **higherReplace**: `boolean` = `false`

严格替换

## Returns

`string`

## Example

```ts
transferScanStr('=900182201234500'); /// '900182201234500'
transferScanStr('=<E5433000'); /// 'E5433000'
transferScanStr('@123', true); /// '123'
transferScanStr('#te st~ ', true); /// 'test'
transferScanStr(undefined); /// ''
```
