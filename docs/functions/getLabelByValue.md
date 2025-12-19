[**js-xxx v2.2.35**](../README.md) • **Docs**

***

[js-xxx v2.2.35](../README.md) / getLabelByValue

# Function: getLabelByValue()

> **getLabelByValue**(`value`, `options`, `defaultText`): `string`

根据 value 获取 options 中对应的 label

## Parameters

• **value**: `string`

value 值

• **options**: `object`[]

options 数组

• **defaultText**: `string` = `''`

未找到时的默认文本

## Returns

`string`

## Example

```ts
const options = [ { label: '选项一', value: '1' }, { label: '选项二', value: '2' } ];
getLabelByValue('1', options); /// '选项一'
getLabelByValue('3', options, '默认文本'); /// '默认文本'
```
