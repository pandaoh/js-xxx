[**js-xxx v2.2.35**](../README.md) • **Docs**

***

[js-xxx v2.2.35](../README.md) / createBroadcastChannel

# Function: createBroadcastChannel()

> **createBroadcastChannel**(`channelName`): `object`

创建 BroadcastChannel 实例

## Parameters

• **channelName**: `string`

通道名称

## Returns

`object`

### close()

> **close**: () => `void`

#### Returns

`void`

### getChannel()

> **getChannel**: () => `BroadcastChannel`

#### Returns

`BroadcastChannel`

### listen()

> **listen**: (`callback`) => () => `void`

#### Parameters

• **callback**

#### Returns

`Function`

##### Returns

`void`

### send()

> **send**: (`type`, `message`) => `void`

#### Parameters

• **type**: `string`

• **message**: `unknown`

#### Returns

`void`

## Example

```ts
const channel = createBroadcastChannel('my-channel');
const removeListener = channel.listen((event) => {
  console.log({ type: event.type, data: event.message });
});
channel.send('message', { message: 'Hello' });
channel.getChannel(); // BroadcastChannel 实例
removeListener(); // 移除监听器
channel.close(); // 关闭通道
```
