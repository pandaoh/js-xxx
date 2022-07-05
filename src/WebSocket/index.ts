/*
 * @Author: HxB
 * @Date: 2022-04-26 14:10:35
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-07-05 11:52:21
 * @Description: websocket
 * @FilePath: \js-xxx\src\WebSocket\index.ts
 */
var xWebSocket: WebSocket;

/**
 * 初始化 websocket
 * Example: `initWebSocket({ url: 'ws://localhost:8080/ws', onOpen: () => {}, onMessage: () => {}, onClose: () => {}, onError: () => {}, reconnect: {} })`
 * @param options {url, onOpen, onMessage, onClose, onError, reconnect: {timeout, onReconnect} | boolean} WebSocket 配置
 * @returns {WebSocket}
 */
export function initWebSocket(options: {
  url: string;
  onOpen?: Function;
  onClose?: Function;
  onMessage?: Function;
  onError?: Function;
  reconnect?: {
    timeout?: number;
    onReconnect?: Function;
  };
}): WebSocket {
  xWebSocket = new WebSocket(options.url);
  xWebSocket.onopen = () => {
    options?.onOpen?.call(xWebSocket);
  };
  xWebSocket.onclose = function () {
    options?.onClose?.call(xWebSocket);
    if (options.reconnect) {
      setTimeout(() => {
        initWebSocket(options);
      }, options.reconnect?.timeout || 1000);
      options.reconnect?.onReconnect?.call(xWebSocket);
    }
  };
  xWebSocket.onmessage = function (event: any | MessageEvent) {
    options?.onMessage?.call(event, xWebSocket);
  };
  xWebSocket.onerror = function (event: any | MessageEvent) {
    options?.onError?.call(event, xWebSocket);
  };
  return xWebSocket;
}

/**
 * 发送消息
 * Example: `sendWsMessage({ type: 'login', data: { username: 'admin', password: '123456' } }) => true/false`
 * @param message 消息
 * @returns
 */
export function sendWsMessage(message: any): boolean {
  if (!xWebSocket) {
    return false;
  }
  xWebSocket.send(JSON.stringify(message));
  return true;
}

/**
 * 关闭 websocket
 * Example: `closeWebSocket() => true/false`
 * @returns
 */
export function closeWebSocket(): boolean {
  if (!xWebSocket) {
    return false;
  }
  xWebSocket.close();
  return true;
}

/**
 * 获取 websocket 实例
 * Example: `getWebSocket() => [websocket object]`
 * @returns
 */
export function getWebSocket(): WebSocket {
  return xWebSocket;
}

/**
 * 设置 websocket binaryType default: 'blob'
 * Example: `setWsBinaryType() => true/false`
 * @param binaryType 二进制类型 default: 'arraybuffer'
 * @returns
 */
export function setWsBinaryType(binaryType: BinaryType = 'arraybuffer'): boolean {
  if (!xWebSocket) {
    return false;
  }
  xWebSocket.binaryType = binaryType;
  return true;
}

// 使用 grpc 记得 buffer2obj 和 obj2buffer
