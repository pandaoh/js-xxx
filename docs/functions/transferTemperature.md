[**js-xxx v2.2.27**](../README.md) • **Docs**

***

[js-xxx v2.2.27](../README.md) / transferTemperature

# Function: transferTemperature()

> **transferTemperature**(`temperature`, `isCelsius`, `addSuffix`): `string` \| `number`

华氏/摄氏度互转

## Parameters

• **temperature**: `string` \| `number`

• **isCelsius**: `boolean` = `true`

• **addSuffix**: `boolean` = `true`

## Returns

`string` \| `number`

## Example

```ts
transferTemperature(30.5); /// '86.9 °F'
transferTemperature(86, false, false); /// 30
```
