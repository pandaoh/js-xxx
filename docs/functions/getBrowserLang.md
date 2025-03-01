[**js-xxx v2.2.31**](../README.md) • **Docs**

***

[js-xxx v2.2.31](../README.md) / getBrowserLang

# Function: getBrowserLang()

> **getBrowserLang**(`opts`?): `string`

获取浏览器语言。
返回的是中划线格式，如：zh-CN 。

## Parameters

• **opts?**

可选配置项。

• **opts.supportLangs?**: `string`[]

可支持的语言，传入时，会用此数组来限制返回的语言值，防止返回的 navigator.language 和系统定义的语言值不匹配。

## Returns

`string`

## Example

```ts
// 如果浏览器语言为中文（简体）
getBrowserLang(); // 'zh-CN'
// 如果浏览器语言为英文
getBrowserLang(); // 'en-US'
// 限制返回语言为支持的语言之一
getBrowserLang({ supportLangs: ['zh-CN', 'en-US'] }); // 'zh-CN' 或 'en-US'
// 限制返回语言为不支持的语言之一
getBrowserLang({ supportLangs: ['es-ES', 'fr-FR'] }); // 'en-US'
```
