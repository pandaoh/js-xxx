[**js-xxx v2.2.27**](../README.md) • **Docs**

***

[js-xxx v2.2.27](../README.md) / formatRh

# Function: formatRh()

> **formatRh**(`input`, `options`?): `string` \| `boolean` \| `number`

处理 rh 血型

## Parameters

• **input**: `string`

输入值

• **options?**

处理配置

• **options.default?**: `string` \| `number` \| `boolean`

• **options.format?**: [`string` \| `number` \| `boolean`, `string` \| `number` \| `boolean`]

• **options.negative?**: `string`[]

• **options.positive?**: `string`[]

## Returns

`string` \| `boolean` \| `number`

## Example

```ts
formatRh('**d**'); /// '阴性'
formatRh('**d**', { format: [true, false], default: false }); /// true
```
