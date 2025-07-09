[**js-xxx v2.2.33**](../README.md) • **Docs**

***

[js-xxx v2.2.33](../README.md) / timeSince

# Function: timeSince()

> **timeSince**(`date`?, `longAgo`?, `formatter`?): `any`

人性化时间

## Parameters

• **date?**: `string` \| `Date`

时间/string

• **longAgo?**: `boolean` = `false`

是否显示周月甚至更久

• **formatter?**: `string` = `'yyyy-mm-dd hh:ii:ss'`

正常显示时的时间显示格式

## Returns

`any`

## Example

```ts
timeSince(new Date()); /// '刚刚'
```
