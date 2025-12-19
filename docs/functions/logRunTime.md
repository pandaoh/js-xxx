[**js-xxx v2.2.35**](../README.md) • **Docs**

***

[js-xxx v2.2.35](../README.md) / logRunTime

# Function: logRunTime()

> **logRunTime**(`fn`, `timeKey`): `void`

打印某个函数运行时间

## Parameters

• **fn**: `any`

方法函数

• **timeKey**: `string`

打印时间记录关键 key

## Returns

`void`

## Example

```ts
logRunTime(() => [1, 2, 3].reduce(...));
logRunTime(() => [1, 2, 3].reduce(...), 'timeKey');
logRunTime(async () => { await fun1(); await fun2(); });
logRunTime($promiseReturnFunction);
logRunTime(new Promise((resolve, reject) => { setTimeout(() => resolve('test'), 1000) }));
```
