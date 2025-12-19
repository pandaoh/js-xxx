[**js-xxx v2.2.35**](../README.md) • **Docs**

***

[js-xxx v2.2.35](../README.md) / dataTo

# Function: dataTo()

> **dataTo**(`key`, `value`): `void`

填对应值到对应的 dom 中

## Parameters

• **key**: `string`

key 值

• **value**: `any`

value 值

## Returns

`void`

## Example

```ts
dataTo('.className', 'xxx'); /// xxx 会填入到类名为 class-name 的元素中
dataTo('.class-name', 'xxx'); /// xxx 会填入到类名为 class-name 的元素中
dataTo('.class_name', 'xxx'); /// xxx 会填入到类名为 class-name 的元素中
dataTo('.class.name', 'xxx'); /// xxx 会填入到类名为 class-name 的元素中
dataTo('#id.name', 'xxx'); /// xxx 会填入到 id 名为 id-name 的元素中
```
