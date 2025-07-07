[**js-xxx v2.2.32**](../README.md) • **Docs**

***

[js-xxx v2.2.32](../README.md) / float

# Function: float()

> **float**(`value`, `d`, `isStr`): `number` \| `string`

去尾法获取数值

## Parameters

• **value**: `number`

数值

• **d**: `number` = `0`

精度

• **isStr**: `boolean` = `false`

是否返回字符串

## Returns

`number` \| `string`

## Example

```ts
float(1.135, 0, true); /// '1'
float(1.135, 2, true); /// '1.13'
float(1.135, 1); /// 1.1
float(1.135, 4); /// 1.135
float(1.135, 4, true); /// '1.1350'
```
