[**js-xxx v2.2.31**](../README.md) • **Docs**

***

[js-xxx v2.2.31](../README.md) / onClick2MoreClick

# Function: onClick2MoreClick()

> **onClick2MoreClick**(`delay`, ...`events`): `any`

单击事件转换为多击事件
Author: WuXingHeng

## Parameters

• **delay**: `number` = `300`

点击间隔

• ...**events**: `any`[]

事件多击 rest 参数

## Returns

`any`

## Example

```ts
dom.onclick = onClick2MoreClick(300, clickOneCallBack, clickTwoCallBack, clickThreeCallBack, clickFourCallBack); /// void
```
