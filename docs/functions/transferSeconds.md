[**js-xxx v2.2.26**](../README.md) • **Docs**

***

[js-xxx v2.2.26](../README.md) / transferSeconds

# Function: transferSeconds()

> **transferSeconds**(`duration`, `returnObj`): `string` \| `any`

转换音视频时长，把秒数转换为 hh:ii:ss 格式。

## Parameters

• **duration**: `number`

时间/秒

• **returnObj**: `boolean` = `false`

是否返回对象

## Returns

`string` \| `any`

## Example

```ts
transferSeconds(1234); /// '00:20:34'
transferSeconds(1234, true); /// {h: '00', i: 20, s: 34}
```
