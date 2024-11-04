[**js-xxx v2.2.26**](../README.md) • **Docs**

***

[js-xxx v2.2.26](../README.md) / getV

# Function: getV()

> **getV**(`defaultResult`, ...`args`): `any`

获取多级对象值

## Parameters

• **defaultResult**: `any`

默认值

• ...**args**: `any`

需要获取的多级 rest 参数或者独立多级 string

## Returns

`any`

## Example

```ts
getV('默认值', {name: {children: [123, 456]}}, 'name', 'children', '0'); /// 123
getV('默认值', {name: {children: [123, 456]}}, 'name.children.0'); /// 123
getV('默认值', {name: {children: [123, 456]}}, 'name.children.xxx'); /// 默认值
getV('默认值', {name: {children: [123, 456], '[]': ['test']}}, 'name.[].0'); /// 'test'
getV('默认值', {name: {children: [123, 456], '[]': ['test']}}, 'name', '[]', 0); /// 'test'
```
