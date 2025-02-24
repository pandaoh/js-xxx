[**js-xxx v2.2.30**](../README.md) • **Docs**

***

[js-xxx v2.2.30](../README.md) / getDefaultLang

# Function: getDefaultLang()

> **getDefaultLang**(`opts`?): `string`

获取默认语言。
返回的是中划线格式，如：zh-CN 。
从 Cookie 获取语言，如果不存在则获取 local 存储中的语言，都不存在则使用浏览器语言。

## Parameters

• **opts?**

可选配置项。

• **opts.key?**: `string`

用于获取语言的 key 默认为 'js-xxx-lang'

• **opts.supportLangs?**: `string`[]

支持的语言列表。如果返回的语言不在此列表中，将返回默认语言 'en-US'。

## Returns

`string`

## Example

```ts
getDefaultLang({ supportLangs: ['zh-CN', 'en-US'] }); // 'zh-CN' 或 'en-US'
// 指定一个自定义 key
getDefaultLang({ supportLangs: ['fr-FR', 'es-ES'], key: 'USER_LANG' }); // 'fr-FR' 或 'es-ES'
// 如果语言不在支持的语言列表中，则返回默认语言 'en-US'。
getDefaultLang({ supportLangs: ['es-ES'], key: 'USER_LANG' }); // 'en-US' (假设获取的语言为 'fr_FR')
```
