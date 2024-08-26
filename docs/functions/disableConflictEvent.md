[**js-xxx v2.2.22**](../README.md) • **Docs**

***

[js-xxx v2.2.22](../README.md) / disableConflictEvent

# Function: disableConflictEvent()

> **disableConflictEvent**(`event`): `boolean`

禁用冲突事件，条码枪、关闭窗口快捷键等。

## Parameters

• **event**: `any`

触发事件

## Returns

`boolean`

## Example

```ts
document.addEventListener('keydown', disableConflictEvent); /// 进入页面后禁用冲突事件
document.removeEventListener('keydown', disableConflictEvent); /// 退出页面后关闭监听
```
