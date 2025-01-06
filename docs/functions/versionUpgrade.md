[**js-xxx v2.2.29**](../README.md) • **Docs**

***

[js-xxx v2.2.29](../README.md) / versionUpgrade

# Function: versionUpgrade()

> **versionUpgrade**(`version`, `maxVersionCode`): `string`

版本号升级算法

## Parameters

• **version**: `string`

版本号

• **maxVersionCode**: `number` = `99`

最大版本号

## Returns

`string`

## Example

```ts
versionUpgrade('0.0.1'); /// '0.0.2'
versionUpgrade('0.0.0.9'); /// '0.0.0.10'
versionUpgrade('0.0.0.9', 9); /// '0.0.1.0'
versionUpgrade('0.0.9.9', 9); /// '0.1.0.0'
```
