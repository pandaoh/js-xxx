[**js-xxx v2.2.25**](../README.md) • **Docs**

***

[js-xxx v2.2.25](../README.md) / getMockData

# Function: getMockData()

> **getMockData**(`type`, `options`): `any`

生成 Mock 模拟数据的方法

## Parameters

• **type**: [`MockDataType`](../type-aliases/MockDataType.md)

要生成的数据类型

• **options**: [`MockOptions`](../interfaces/MockOptions.md) = `{}`

生成数据的选项

## Returns

`any`

## Example

```ts
getMockData('string', { length: 10 }); /// "aB3dE6gH1j"
getMockData('number', { min: 10, max: 100 }); /// 42
getMockData('boolean'); /// true
getMockData('date', { startDate: new Date(2020, 0, 1), endDate: new Date(2021, 0, 1) }); /// "2020-06-15 12:34:56"
getMockData('date', { format: false }); /// Date object
getMockData('object', { objectKeys: { name: 'string', age: 'number', birthDate: { type: 'date', options: { format: 'yyyy/mm/dd' } } } }); /// { name: "aBc", age: 25, birthDate: "1995/05/17" }
getMockData('array', { length: 5, arrayTypes: ['string', 'number'] }); /// [ "aB3", 42, "xYz", 7, "MN1" ]
getMockData('array', { length: 5, objectKeys: { name: 'string', age: 'number', birthDate: { type: 'date', options: { format: 'yyyy/mm/dd' } } } }); /// [{ name: "aBc", age: 25, birthDate: "1995/05/17" } * 5 ......]
getMockData('array', { length: 5, arrayTypes: [{ type: 'object', objectKeys: { name: 'string', age: 'number', birthDate: { type: 'date', options: { format: 'yyyy/mm/dd' } } } }] }); /// [{ name: "aBc", age: 25, birthDate: "1995/05/17" } * 5 ......]
getMockData('array', { length: 10, arrayTypes: ['string', { type: 'number', options: { min: 10, max: 100 } }, { type: 'date', options: { format: 'yyyy/mm/dd' } }] }); /// [47, 49, 'uCp1bxDo', '2003/05/14', 'MUQSOf0W', '2011/07/01', 'nDYZD4Lu', 'YFSCEQvV', '2021/06/03', '1yaIgwhh']
```
