[**js-xxx v2.2.31**](../README.md) • **Docs**

***

[js-xxx v2.2.31](../README.md) / same

# Function: same()

> **same**(`valueA`, `valueB`): `boolean`

两个数值是否有相同的值（交集）

## Parameters

• **valueA**: `string` \| `any`[]

值 A

• **valueB**: `string` \| `any`[]

值 B

## Returns

`boolean`

## Example

```ts
same(['admin','manager','user','viewer','guest'], ['admin','user']); /// true
same(['admin','manager','user','viewer','guest'], 'admin'); /// true
same('admin', ['admin','user']); /// true
same('admin', 'admin'); /// true
same('admin', 'admins'); /// false
same('admins', 'admin'); /// false
```
