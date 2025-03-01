[**js-xxx v2.2.31**](../README.md) • **Docs**

***

[js-xxx v2.2.31](../README.md) / checkUpdate

# Function: checkUpdate()

> **checkUpdate**(`callback`, `interval`, `url`?): `undefined` \| () => `void`

刷新页面或执行回调函数，用于检测服务端是否发布了更新

## Parameters

• **callback**: `any`

文件更新时要执行的回调函数

• **interval**: `number` = `...`

请求文件的时间间隔（毫秒），默认为 15 分钟，最小值 1 分钟。

• **url?**: `string`

要检测的文件路径（默认为页面最后一个 JavaScript/CSS 文件）

## Returns

`undefined` \| () => `void`

## Example

```ts
checkUpdate((type) => console.log({ type })); /// 检测服务端是否发布了更新，若更新或请求失败则执行回调。
checkUpdate(); /// 检测服务端是否发布了更新，若更新或请求失败则刷新页面。
checkUpdate((type) => window.location.reload(), 5 * 60 * 1000, '/index.js'); /// 检测服务端某个文件是否发布了更新，若更新或请求失败则刷新页面。
```
