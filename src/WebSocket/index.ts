/*
 * @Author: HxB
 * @Date: 2022-04-26 14:10:35
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-09-09 11:01:46
 * @Description: websocket
 * @FilePath: \js-xxx\src\WebSocket\index.ts
 */
var xWebSocket: WebSocket;
// 用于设置 websocket 连接超时问题 timeout
var xWebSocketTimer: any;

/**
 * 初始化 websocket
 * Example: `initWebSocket({ url: 'ws://localhost:8080/ws', timeout: 30000, onOpen: () => {}, onMessage: () => {}, onClose: () => {}, onError: () => {}, reconnect: {} })`
 * @param options `{url, onOpen, onMessage, onClose, onError, timeout, reconnect: {times, delay, onReconnect} | boolean} WebSocket 配置`
 * @returns {WebSocket}
 */
export function initWebSocket(options: {
  url: string;
  onOpen?: Function;
  onClose?: Function;
  onMessage?: Function;
  onError?: Function;
  timeout?: number;
  reconnect?: {
    times: number;
    delay?: number;
    onReconnect?: Function;
  };
}): WebSocket | undefined {
  xWebSocket = new WebSocket(options.url);

  /* 是否连接超时计时器 */
  if (!xWebSocketTimer) {
    xWebSocketTimer = setTimeout(() => {
      xWebSocketTimer = null;
    }, options.timeout ?? 10000);
  }

  xWebSocket.onopen = () => {
    options?.onOpen?.(xWebSocket, options);
  };
  xWebSocket.onmessage = function (event: any | MessageEvent) {
    options?.onMessage?.(event, xWebSocket, options);
  };
  xWebSocket.onerror = function (event: any | MessageEvent) {
    options?.onError?.(event, xWebSocket, options);
  };

  xWebSocket.onclose = function () {
    /* 未超时就继续连接 */
    if (xWebSocketTimer) {
      initWebSocket(options);
      return;
    }

    options?.onClose?.(xWebSocket, options);

    /* 未超时不算重连，超时计算结束后看看是否有配置重连机制，有则进行重连。 */
    let times = options?.reconnect?.times ?? 1;
    if (options.reconnect && times > 0) {
      times--;
      setTimeout(() => {
        options.reconnect?.onReconnect?.(xWebSocket, options);
        initWebSocket({ ...options, reconnect: { ...options.reconnect, times: times } });
      }, options.reconnect?.delay ?? 1000);
    }
  };
  {
  }
  return xWebSocket;
}

/**
 * 发送消息
 * Example:
 * `sendWsMessage({ type: 'login', data: { username: 'admin', password: '123456' }}, true) => true/false`
 * `sendWsMessage('testMsg') => true/false`
 * @param message 消息
 * @param isJSONEncode 是否 JSON 序列化
 * @returns
 */
export function sendWsMessage(message: any, isJSONEncode: boolean = false): boolean {
  if (!xWebSocket) {
    return false;
  }
  xWebSocket.send(isJSONEncode ? JSON.stringify(message) : message);
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
export function getWebSocket(): WebSocket | undefined {
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
