export declare function initWebSocket(options: {
    url: string;
    onOpen?: Function;
    onClose?: Function;
    onMessage?: Function;
    onError?: Function;
    reconnect?: {
        timeout?: number;
        onReconnect?: Function;
    };
}): WebSocket;
export declare function sendWsMessage(message: any): boolean;
export declare function closeWebSocket(): boolean;
export declare function getWebSocket(): WebSocket;
export declare function setWsBinaryType(binaryType?: BinaryType): boolean;
//# sourceMappingURL=index.d.ts.map