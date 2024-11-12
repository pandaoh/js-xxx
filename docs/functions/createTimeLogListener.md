[**js-xxx v2.2.27**](../README.md) • **Docs**

***

[js-xxx v2.2.27](../README.md) / createTimeLogListener

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

### clear()

> **clear**: () => `void`

#### Returns

`void`

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

### update()

#### Parameters

• **moreParams** = `{}`

#### Returns

`void`

## Example

```ts
// 创建日志实例
const myCustomLog = createTimeLogListener('扫描时长', { menuCode: 'Login' });
// 开始计时，如果短时间多个实例计时，最好增加 key 参数，没有 key 默认 key 为 'undefined' 。
myCustomLog.start({ user: 'admin' });
myCustomLog.start({ user: 'admin123', key: 'custom-123' });
myCustomLog.start({ user: 'admin456', key: 'custom-456' });
// ... 执行一些操作 ...
// ... 中途更新一些参数 ...
myCustomLog.update({ userAgent: 'Chrome' });
myCustomLog.update({ test: 'test' });
myCustomLog.update({ test: 'test123', key: 'custom-123' });
// 结束计时并记录日志
myCustomLog.end({ isLogin: true });
myCustomLog.end({ isLogin: false, key: 'custom-123' });
myCustomLog.end({ isLogin: true, key: 'custom-456' });
// 输出到控制台和执行回调
// 输出格式包括：logKey, ms, s, menuCode, user, isLogin, userAgent, test
myCustomLog.clear(); // 清空所有缓存数据
// react
const log = useMemo(() => createTimeEventLog('扫描时长', { menuCode: 'scan' }), []);
```
