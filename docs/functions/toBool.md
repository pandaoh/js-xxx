[**js-xxx v2.2.32**](../README.md) • **Docs**

***

[js-xxx v2.2.32](../README.md) / toBool

# Function: toBool()

> **toBool**(`value`, `falseList`): `boolean`

任意值转换为布尔类型

## Parameters

• **value**: `any`

值

• **falseList**: `any`[] = `[]`

判断为 false 的值列表

## Returns

`boolean`

## Example

```ts
toBool(0); /// true
toBool(''); /// true
toBool('', [0, '']); /// false
toBool(0, [0, '']); /// false
toBool('0'); /// true
toBool(1); /// true
toBool('false'); /// false
toBool('null'); /// false
toBool('undefined'); /// false
toBool('NaN'); /// false
toBool(null); /// false
```
