export declare function initWebSocket(options: {
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
}): WebSocket | undefined;
export declare function sendWsMessage(message: any, isJSONEncode?: boolean): boolean;
export declare function closeWebSocket(): boolean;
export declare function getWebSocket(): WebSocket | undefined;
export declare function setWsBinaryType(binaryType?: BinaryType): boolean;
//# sourceMappingURL=index.d.ts.map