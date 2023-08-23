/*
 * @Author: HxB
 * @Date: 2022-04-26 14:10:35
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-08-23 09:56:42
 * @Description: websocket
 * @FilePath: \js-xxx\src\WebSocket\index.ts
 */
let xWebSocket: WebSocket;
// 用于设置 websocket 连接超时问题 timeout
let xWebSocketTimer: any;

// eslint-disable-next-line spellcheck/spell-checker
/**
 * 初始化 websocket
 * @example
 * initWebSocket({ url: 'ws://localhost:8080/ws', timeout: 30000, onOpen: () => {}, onMessage: () => {}, onClose: () => {}, onError: () => {}, reconnect: {} })
 * @param options `{url, onOpen, onMessage, onClose, onError, timeout, reconnect: {times, delay, onReconnect} | boolean} WebSocket 配置`
 * @returns {WebSocket}
 */
export function initWebSocket(options: {
  url: string;
  onOpen?: any;
  onClose?: any;
  onMessage?: any;
  onError?: any;
  timeout?: number;
  reconnect?: {
    times: number;
    delay?: number;
    onReconnect?: any;
  };
}): WebSocket {
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
      // 记得重新赋值
      xWebSocket = initWebSocket(options);
      return;
    }

    options?.onClose?.(xWebSocket, options);

    /* 未超时不算重连，超时计算结束后看看是否有配置重连机制，有则进行重连。 */
    let times = options?.reconnect?.times ?? 1;
    if (options.reconnect && times > 0) {
      times--;
      setTimeout(() => {
        options.reconnect?.onReconnect?.(xWebSocket, options);
        // 记得重新赋值
        xWebSocket = initWebSocket({ ...options, reconnect: { ...options.reconnect, times: times } });
      }, options.reconnect?.delay ?? 1000);
    }
  };

  // @ts-ignore
  xWebSocket.sendWsMsg = sendWsMsg;
  // @ts-ignore
  xWebSocket.closeWebSocket = closeWebSocket;
  // @ts-ignore
  xWebSocket.setWsBinaryType = setWsBinaryType;

  // xWebSocket.readyState == 1 正常状态
  return xWebSocket;
}

/**
 * 发送消息
 * @example
 * sendWsMsg({ type: 'login', data: { username: 'admin', password: '123456' }}, true); /// true/false
 * sendWsMsg('testMsg'); /// true/false
 * @param message 消息
 * @param isJSONEncode 是否 JSON 序列化
 * @returns
 */
export function sendWsMsg(message: any, isJSONEncode = false): boolean {
  if (!xWebSocket) {
    return false;
  }
  xWebSocket.send(isJSONEncode ? JSON.stringify(message) : message);
  return true;
}

/**
 * 关闭 websocket
 * @example
 * closeWebSocket(); /// true/false
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
 * 设置 websocket binaryType default: 'blob'
 * @example
 * setWsBinaryType(); /// true/false
 * @param binaryType `BinaryType 二进制类型 default: 'arraybuffer'`
 * @returns
 */
export function setWsBinaryType(binaryType: any = 'arraybuffer'): boolean {
  if (!xWebSocket) {
    return false;
  }
  xWebSocket.binaryType = binaryType;
  return true;
}

// eslint-disable-next-line spellcheck/spell-checker
// 使用 grpc 或 protobuf 记得 buffer2obj 和 obj2buffer
// 使用专用工具进行封装与解析

/**
 * 获取 websocket 实例
 * @example
 * getWebSocket(); /// [websocket object]
 * @returns
 */
export function getWebSocket(): WebSocket | undefined {
  return xWebSocket;
}
