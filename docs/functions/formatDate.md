[**js-xxx v2.2.23**](../README.md) • **Docs**

***

[js-xxx v2.2.23](../README.md) / formatDate

# Function: formatDate()

> **formatDate**(`date`?, `fmt`?, `weeks`?): `any`

时间格式化

## Parameters

• **date?**: `any`

时间

• **fmt?**: `string` = `'yyyy-mm-dd hh:ii:ss'`

格式化模板 'yyyy-mm-dd hh:ii:ss'

• **weeks?**: `any`[] = `...`

星期对应数组 [7, 1, 2, 3, 4, 5, 6]

## Returns

`any`

## Example

```ts
formatDate(new Date(), 'yyyy-mm-dd hh:ii:ss Q S W', ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']); /// '2022-04-26 11:33:53 2 123 星期二'
// @before-2.2.0
formatDate(); /// '当前时间 yyyy-mm-dd hh:ii:ss'
// @since-2.2.0
formatDate(); /// undefined
```
