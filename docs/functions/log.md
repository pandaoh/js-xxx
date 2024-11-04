[**js-xxx v2.2.26**](../README.md) • **Docs**

***

[js-xxx v2.2.26](../README.md) / log

# Function: log()

> **log**(...`args`): `string`

在页面上打印数据，我们打包通常会设置清除 console，使用此函数打印关键信息就不会被清除啦。

## Parameters

• ...**args**: `any`[]

打印数据 rest 参数

## Returns

`string`

## Example

```ts
log([1, 2, 2, 3, 3], {a: 1, b: 2}, 'test', true); /// 打印数据
log('danger'); /// 打印数据
```
