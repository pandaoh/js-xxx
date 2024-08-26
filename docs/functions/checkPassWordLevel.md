[**js-xxx v2.2.22**](../README.md) • **Docs**

***

[js-xxx v2.2.22](../README.md) / checkPassWordLevel

# Function: checkPassWordLevel()

> **checkPassWordLevel**(`passWord`): `-1` \| `1` \| `2` \| `3` \| `4` \| `5`

密码强度等级检测(-1~5)

## Parameters

• **passWord**: `string`

字符串值-密码

## Returns

`-1` \| `1` \| `2` \| `3` \| `4` \| `5`

## Example

```ts
checkPassWordLevel('123'); /// -1
checkPassWordLevel('123456'); /// 1
checkPassWordLevel('12345678'); /// 2
checkPassWordLevel('12345678.'); /// 3
checkPassWordLevel('123456789654321.'); /// 4
checkPassWordLevel('123456789654321.H'); /// 5
```
