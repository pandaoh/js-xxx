[**js-xxx v2.2.21**](../README.md) • **Docs**

***

[js-xxx v2.2.21](../README.md) / initWebSocket

# Function: initWebSocket()

> **initWebSocket**(`options`): `WebSocket`

初始化 websocket

## Parameters

• **options**

`{url, onOpen, onMessage, onClose, onError, timeout, reconnect: {times, delay, onReconnect} | boolean} WebSocket 配置`

• **options.onClose?**: `any`

• **options.onError?**: `any`

• **options.onMessage?**: `any`

• **options.onOpen?**: `any`

• **options.reconnect?**

• **options.reconnect.delay?**: `number`

• **options.reconnect.onReconnect?**: `any`

• **options.reconnect.times**: `number`

• **options.timeout?**: `number`

• **options.url**: `string`

## Returns

`WebSocket`

## Example

```ts
initWebSocket({ url: 'ws://localhost:8080/ws', timeout: 30000, onOpen: () => {}, onMessage: () => {}, onClose: () => {}, onError: () => {}, reconnect: {} })
```
