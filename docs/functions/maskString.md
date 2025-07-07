[**js-xxx v2.2.32**](../README.md) • **Docs**

***

[js-xxx v2.2.32](../README.md) / maskString

# Function: maskString()

> **maskString**(`str`): `string`

字符串脱敏(biugle 自定义规则)

## Parameters

• **str**: `string`

字符串

## Returns

`string`

## Example

```ts
maskString(undefined); /// '-'
maskString('13579246810'); /// '135****6810'
maskString('王小二'); /// '王***二'
maskString('123456789'); /// '123****89'
maskString('130223199809282927'); /// '13022********927'
maskString('广东省深圳市龙华区'); /// 广东省****华区'
maskString('广东省深圳市福田区福田保税区xxx小区xxx单元x栋x楼xxx号'); /// '广东省深圳市福田区******xx号'
```
