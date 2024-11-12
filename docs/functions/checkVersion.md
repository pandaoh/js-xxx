[**js-xxx v2.2.27**](../README.md) • **Docs**

***

[js-xxx v2.2.27](../README.md) / checkVersion

# Function: checkVersion()

> **checkVersion**(`targetVersion`, `currentVersion`, `testStr`): `-1` \| `1` \| `0`

版本号比对算法

## Parameters

• **targetVersion**: `string`

目标版本

• **currentVersion**: `string`

当前版本

• **testStr**: `string` = `'-rc'`

需要替换的字符串 default(-rc)

## Returns

`-1` \| `1` \| `0`

## Example

```ts
checkVersion('1.0.1-rc', '1.0.0', '-rc'); /// 1
checkVersion('1.0.0', '1.0.1'); /// -1
checkVersion('1.0.0', '1.0.0'); /// 0
```
