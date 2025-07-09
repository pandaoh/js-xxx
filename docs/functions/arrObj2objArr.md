[**js-xxx v2.2.33**](../README.md) • **Docs**

***

[js-xxx v2.2.33](../README.md) / arrObj2objArr

# Function: arrObj2objArr()

> **arrObj2objArr**(`data`, `key`): `object`

数组对象转换为对象数组，需确保源数据已经去重哦，否则会暴力去重，最后一条数据有效。
一般图表类插件需要此类转换

## Parameters

• **data**: `object`[]

源数据

• **key**: `string`

用于转换的 key

## Returns

`object`

## Example

```ts
const data = [{ id: 1, name: '张三', score: 98, remark: '语文成绩' }, { id: 3, name: '王五', score: 98 }, { id: 3, name: '王五', score: 99, remark: '最后一条有效成绩' }, { id: 2, name: '李四', score: 100 }];
arrObj2objArr(data, 'id'); /// {"id": [1, 2, 3], "name": ["张三", "李四", "王五"], "score": [98, 100, 99], "remark": ["语文成绩", null, "最后一条有效成绩"]}
```
