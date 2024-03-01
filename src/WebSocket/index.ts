/* eslint-disable spellcheck/spell-checker */
/*
 * @Author: HxB
 * @Date: 2022-04-26 14:10:35
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-03-01 17:30:30
 * @Description: websocket
 * @FilePath: \js-xxx\src\WebSocket\index.ts
 */
let xWebSocket: WebSocket;
// 用于设置 websocket 连接超时问题 timeout 计时器
let xWebSocketTimer: any;

// eslint-disable-next-line spellcheck/spell-checker
/**
 * 初始化 websocket
 * @example
 * initWebSocket({ url: 'ws://localhost:8080/ws', timeout: 30000, onOpen: () => {}, onMessage: () => {}, onClose: () => {}, onError: () => {}, reconnect: {} })
 * @param options `{url, onOpen, onMessage, onClose, onError, timeout, reconnect: {times, delay, onReconnect} | boolean} WebSocket 配置`
 * @returns
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
        // 重新赋值
        xWebSocket = initWebSocket({ ...options, reconnect: { ...options.reconnect, times: times } });
      }, options.reconnect?.delay ?? 1000);
    }
  };

  // @ts-ignore
  xWebSocket.options = options;
  // @ts-ignore
  xWebSocket.sendWsMsg = sendWsMsg;
  // @ts-ignore
  xWebSocket.closeWebSocket = closeWebSocket;
  // @ts-ignore
  xWebSocket.setWsBinaryType = setWsBinaryType;
  // @ts-ignore
  xWebSocket.buf2obj = buf2obj;
  // @ts-ignore
  xWebSocket.obk2buf = obj2buf;

  // xWebSocket.readyState == 1 正常状态
  return xWebSocket;
}

/**
 * 发送消息
 * @example
 * sendWsMsg({ type: 'login', data: { username: 'admin', password: '123456' }}, true); /// true/false
 * sendWsMsg('testMsg'); /// true/false
 * @param message 消息
 * @param isJSONEncode 是否对数据 JSON 序列化
 * @returns
 */
export function sendWsMsg(message: any, isJSONEncode = false): boolean {
  if (!xWebSocket) {
    return false;
  }
  if (xWebSocket.readyState == 1) {
    xWebSocket.send(isJSONEncode ? JSON.stringify(message) : message);
    return true;
  } else {
    return false;
  }
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
 * `设置 websocket binaryType default: 'blob'`
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
// 使用专用工具（pbjs/protoc/protobufjs-cli）进行封装与解析

/**
 * buffer to object
 * @example
 * const _protoBuffer = _proto.lookupType('MonitorMessage');
 * const obj = buf2obj(event.data, _protoBuffer);
 * console.log(obj);
 * @param data buffer 数据
 * @param transfer 转换器
 * @returns
 */
export function buf2obj(data: any, transfer: any): any {
  try {
    const result = transfer.toObject(transfer.decode(new Uint8Array(data)), {
      enums: String, // enums as string names
      longs: String, // longs as strings (requires long.js)
      bytes: String, // bytes as base64 encoded strings
      defaults: true, // includes default values
      arrays: true, // populates empty arrays (repeated fields) even if defaults=false
      objects: true, // populates empty objects (map fields) even if defaults=false
      oneofs: true,
    });
    return result;
  } catch (e) {
    return data;
  }
}

/**
 * object to buffer
 * @example
 * const _protoBuffer = _proto.lookupType('MonitorMessage');
 * const bufferData = obj2buf(obj, _protoBuffer);
 * console.log(bufferData);
 * webSocket.send(bufferData);
 * @param data object 数据
 * @param transfer 转换器
 * @returns
 */
export function obj2buf(data: any, transfer: any): any {
  try {
    const result = transfer.encode(transfer.create(data ?? {})).finish();
    return result;
  } catch (e) {
    return data;
  }
}

/**
 * 获取 websocket 实例
 * @example
 * getWebSocket(); /// [websocket object]
 * @returns
 */
export function getWebSocket(): WebSocket | undefined {
  return xWebSocket;
}
