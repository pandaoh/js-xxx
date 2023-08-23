/**
 * 初始化 Notification
 * @example
 * initNotification(); /// true||false
 * @returns
 */
export declare function initNotification(): boolean;
/**
 * 发送 Notification
 * @example
 * sendNotification('测试通知', '测试标题', {...options}); /// 发送成功/失败
 * @returns
 */
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
    onClick?: any;
    onError?: any;
    onClose?: any;
} | NotificationOptions | undefined): void;
//# sourceMappingURL=index.d.ts.map