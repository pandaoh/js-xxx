[**js-xxx v2.2.29**](../README.md) • **Docs**

***

[js-xxx v2.2.29](../README.md) / transferQueryParams

# Function: transferQueryParams()

> **transferQueryParams**(`obj`, `emptyValue`?): `Record`\<`string`, `any`\>

转换常用的查询参数，确保请求参数的一致性。
- 将值为 `ALL`（不区分大小写）转为空字符串或自定义空值。
- 去除字符串值的多余空格。
- 如果 `emptyValue` 参数存在，则将 `null` 或 `undefined` 值转换为 `emptyValue`，否则保留原值。
- 支持嵌套对象的递归转换。

## Parameters

• **obj**: `Record`\<`string`, `any`\>

查询参数对象

• **emptyValue?**: `any`

可选的空值填充值，若提供则将 `null` 和 `undefined` 替换为该值

## Returns

`Record`\<`string`, `any`\>

## Example

```ts
transferQueryParams({ status: 'ALL', user: '  John  ', id: null }, 'N/A');
/// { status: 'N/A', user: 'John', id: 'N/A' }
transferQueryParams({ status: 'ALL', user: '  John  ', id: null });
/// { status: '', user: 'John', id: null }
transferQueryParams({ status: 'ALL', user: '  John  ', id: null, dep: { a: 'all', id: undefined } }, '');
/// { status: '', user: 'John', id: '', dep: { a: '', id: '' } }
```
