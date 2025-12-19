[**js-xxx v2.2.35**](../README.md) • **Docs**

***

[js-xxx v2.2.35](../README.md) / handleMultipleSelectAll

# Function: handleMultipleSelectAll()

> **handleMultipleSelectAll**(`value`, `option`, `allValue`): `string`[]

处理多选时全选选项的变更逻辑

## Parameters

• **value**: `string`[]

当前选中的值数组

• **option**

当前变更的选项对象

• **option.value**: `string`

• **allValue**: `string` = `'All'`

全选的值，默认为 'All'

## Returns

`string`[]

## Example

```ts
handleMultipleSelectAll(['All', 'Option1'], { value: 'Option1' }); /// ['Option1']
handleMultipleSelectAll(['Option1'], { value: 'All' }); /// ['All']
handleMultipleSelectAll([], { value: 'Option1' }); /// ['All']
onChange={(v, option) => {
  const newValue = handleMultipleSelectAll(v, option, 'All');
  setValue({ selectedOptions: newValue });
}}
```
