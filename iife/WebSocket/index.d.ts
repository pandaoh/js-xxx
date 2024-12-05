/**
 * 初始化 websocket
 * @category WebSocket-封装
 * @example
 * initWebSocket({ url: 'ws://localhost:8080/ws', timeout: 30000, onOpen: () => {}, onMessage: () => {}, onClose: () => {}, onError: () => {}, reconnect: {} })
 * @param options `{url, onOpen, onMessage, onClose, onError, timeout, reconnect: {times, delay, onReconnect} | boolean} WebSocket 配置`
 * @returns
 */
export declare function initWebSocket(options: {
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
}): WebSocket;
/**
 * 发送消息
 * @category WebSocket-封装
 * @example
 * sendWsMsg({ type: 'login', data: { username: 'admin', password: '123456' }}, true); /// true/false
 * sendWsMsg('testMsg'); /// true/false
 * @param message 消息
 * @param isJSONEncode 是否对数据 JSON 序列化
 * @returns
 */
export declare function sendWsMsg(message: any, isJSONEncode?: boolean): boolean;
/**
 * 关闭 websocket
 * @category WebSocket-封装
 * @example
 * closeWebSocket(); /// true/false
 * @returns
 */
export declare function closeWebSocket(): boolean;
/**
 * `设置 websocket binaryType default: 'blob'`
 * @category WebSocket-封装
 * @example
 * setWsBinaryType(); /// true/false
 * @param binaryType `BinaryType 二进制类型 default: 'arraybuffer'`
 * @returns
 */
export declare function setWsBinaryType(binaryType?: any): boolean;
/**
 * buffer to object
 * @category WebSocket-封装
 * @example
 * const _protoBuffer = _proto.lookupType('MonitorMessage');
 * const obj = buf2obj(event.data, _protoBuffer);
 * console.log(obj);
 * @param data buffer 数据
 * @param transfer 转换器
 * @returns
 */
export declare function buf2obj(data: any, transfer: any): any;
/**
 * object to buffer
 * @category WebSocket-封装
 * @example
 * const _protoBuffer = _proto.lookupType('MonitorMessage');
 * const bufferData = obj2buf(obj, _protoBuffer);
 * console.log(bufferData);
 * webSocket.send(bufferData);
 * @param data object 数据
 * @param transfer 转换器
 * @returns
 */
export declare function obj2buf(data: any, transfer: any): any;
/**
 * 获取 websocket 实例
 * @category WebSocket-封装
 * @example
 * getWebSocket(); /// [websocket object]
 * @returns
 */
export declare function getWebSocket(): WebSocket | undefined;
//# sourceMappingURL=index.d.ts.map