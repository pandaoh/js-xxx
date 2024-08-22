[**js-xxx v2.2.21**](../README.md) • **Docs**

***

[js-xxx v2.2.21](../README.md) / createTimeLogListener

# Function: createTimeLogListener()

> **createTimeLogListener**(`eventName`, `eventParams`, `callback`?): `object`

创建间隔时间日志

## Parameters

• **eventName**: `string`

事件名称

• **eventParams** = `{}`

参数列表

• **callback?**

回调函数

## Returns

`object`

### endTime

> **endTime**: `null` \| `number`

### startTime

> **startTime**: `null` \| `number`

### end()

#### Parameters

• **moreParams** = `{}`

#### Returns

`void`

### start()

#### Parameters

• **moreParams** = `{}`

#### Returns

`void`

## Example

```ts
// 创建日志实例
const myCustomLog = createTimeLogListener('扫描时长', { menuCode: 'Login' });
// 开始计时
myCustomLog.start({ user: 'admin' });
// ... 执行一些操作 ...
// 结束计时并记录日志
myCustomLog.end({ isLogin: true });
// 输出到控制台和执行回调
// 输出格式包括：logKey, ms, s, menuCode, user, isLogin
```
