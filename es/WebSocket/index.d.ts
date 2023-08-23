/**
 * 初始化 websocket
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
 * @example
 * closeWebSocket(); /// true/false
 * @returns
 */
export declare function closeWebSocket(): boolean;
/**
 * 设置 websocket binaryType default: 'blob'
 * @example
 * setWsBinaryType(); /// true/false
 * @param binaryType `BinaryType 二进制类型 default: 'arraybuffer'`
 * @returns
 */
export declare function setWsBinaryType(binaryType?: any): boolean;
/**
 * 获取 websocket 实例
 * @example
 * getWebSocket(); /// [websocket object]
 * @returns
 */
export declare function getWebSocket(): WebSocket | undefined;
//# sourceMappingURL=index.d.ts.map