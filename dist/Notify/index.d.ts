export declare function initNotification(): boolean;
export declare function sendNotification(msg: string, title?: string, options?: {
    badge?: string;
    data?: any;
    image?: string;
    renotify?: boolean;
    silent?: boolean;
    vibrate?: VibratePattern;
    dir?: 'auto' | 'ltr' | 'rtl';
    lang?: 'en-US' | 'zh-CN';
    requireInteraction?: boolean;
    tag?: string;
    icon?: string;
    body?: 'msg content' | string;
    timestamp?: EpochTimeStamp;
    onClick?: Function | any;
    onError?: Function | any;
    onClose?: Function | any;
} | NotificationOptions | undefined): void;
//# sourceMappingURL=index.d.ts.map