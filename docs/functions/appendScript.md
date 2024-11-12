[**js-xxx v2.2.27**](../README.md) • **Docs**

***

[js-xxx v2.2.27](../README.md) / appendScript

# Function: appendScript()

> **appendScript**(`scriptUrl`, `async`, `defer`): `HTMLScriptElement`

添加 script 标签

## Parameters

• **scriptUrl**: `string`

脚本地址

• **async**: `boolean` = `false`

是否异步

• **defer**: `boolean` = `false`

是否延迟加载

## Returns

`HTMLScriptElement`

## Example

```ts
appendScript('./test.js'); /// 添加一个 script 标签
```
