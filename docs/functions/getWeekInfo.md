[**js-xxx v2.2.23**](../README.md) • **Docs**

***

[js-xxx v2.2.23](../README.md) / getWeekInfo

# Function: getWeekInfo()

> **getWeekInfo**(`n`): `object` \| `object`[]

获取星期信息

## Parameters

• **n**: `string` \| `number`

值

## Returns

`object` \| `object`[]

## Example

```ts
getWeekInfo(); /// WEEKS_INFO
getWeekInfo('0'); /// WEEKS_INFO
getWeekInfo('ALL'); /// WEEKS_INFO
getWeekInfo('all'); /// WEEKS_INFO
getWeekInfo('unknown'); /// WEEKS_INFO
getWeekInfo(1); /// 星期一相关信息
getWeekInfo(8); /// WEEKS_INFO
```
