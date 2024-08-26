[**js-xxx v2.2.22**](../README.md) • **Docs**

***

[js-xxx v2.2.22](../README.md) / changeURL

# Function: changeURL()

> **changeURL**(`url`, `replaceHistory`): `void`

改变 URL 地址而不刷新页面，并且支持保留或替换历史记录

## Parameters

• **url**: `string`

URL 地址

• **replaceHistory**: `boolean` = `true`

是否替换历史记录，默认为 true 。

## Returns

`void`

## Example

```ts
假如当前地址为：https://test.com/user
changeURL('leo'); /// url 变为 'https://test.com/user/leo'
changeURL('./leo'); /// url 变为 'https://test.com/user/leo'
changeURL('/users'); /// url 变为 'https://test.com/users'
changeURL('https://test.com/test'); /// url 变为 'https://test.com/test' (若域名不同，会报错中断。)
changeURL('/users', false); /// url 变为 'https://test.com/users' (不覆盖历史记录，返回时会再显示 'https://test.com/user'，而上面的例子返回时是直接显示 'https://test.com/user' 的上一条。)
```
