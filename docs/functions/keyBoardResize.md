[**js-xxx v2.2.32**](../README.md) • **Docs**

***

[js-xxx v2.2.32](../README.md) / keyBoardResize

# Function: keyBoardResize()

> **keyBoardResize**(`downCb`, `upCb`): `any`

H5 移动端软键盘缩回/弹起回调
`return cancel listener of keyBoardResize`

## Parameters

• **downCb**: `any`

缩回回调

• **upCb**: `any`

弹起回调

## Returns

`any`

## Example

```ts
keyBoardResize(() => { console.log('downCb'); }, () => { console.log('upCb'); }); /// do something
```
