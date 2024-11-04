[**js-xxx v2.2.26**](../README.md) • **Docs**

***

[js-xxx v2.2.26](../README.md) / globalError

# Function: globalError()

> **globalError**(`fn`, `notShowConsole`): `void`

全局尽可能捕获异常

## Parameters

• **fn**: `any`

(error)

• **notShowConsole**: `boolean` = `true`

是否不回显控制台

## Returns

`void`

## Example

```ts
globalError((error) => console.log('全局捕获异常'), false); /// '全局捕获异常'
```
