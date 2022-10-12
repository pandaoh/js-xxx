/*
 * @Author: HxB
 * @Date: 2022-06-04 20:07:41
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-10-12 15:34:42
 * @Description: 系统推送通知 https://developer.mozilla.org/zh-CN/docs/Web/API/Notifications_API
 * @FilePath: \js-xxx\src\Notify\index.ts
 */
import { getRandStr } from '@/Tools';

/**
 * 初始化 Notification
 * Example: `initNotification() => true||false`
 * @returns
 */
export function initNotification(): boolean {
  // @ts-ignore
  const NOTIFICATION = window.Notification || window?.mozNotification || window?.webkitNotification;
  if (!NOTIFICATION) {
    // 不支持
    return false;
  }
  if (
    NOTIFICATION.permission === 'default' ||
    NOTIFICATION.permission === 'denied' ||
    // @ts-ignore
    NOTIFICATION.permission === 'undefined'
  ) {
    Notification.requestPermission().then(function (permission) {
      if (permission === 'denied') {
        return false;
      }
      if (permission === 'granted') {
        // 同意
        return true;
      }
    });
  }
  return true;
}

/**
 * 发送 Notification
 * Example: `sendNotification('测试通知', '测试标题', {...options}) => 发送成功/失败`
 * @returns
 */
export function sendNotification(
  msg: string,
  title?: string,
  options?:
    | {
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
      }
    | NotificationOptions
    | undefined
): void {
  // @ts-ignore
  const NOTIFICATION = window.Notification || window?.mozNotification || window?.webkitNotification;
  if (!NOTIFICATION) {
    console.log('js-xxx:sendNotification', '系统不支持 Notification API');
    return;
  }
  const notify = new Notification(title ?? 'js-xxx Notification', {
    ...options,
    dir: options?.dir ?? 'auto',
    lang: options?.lang ?? 'zh-CN',
    requireInteraction: options?.requireInteraction ?? false,
    tag: options?.tag ?? getRandStr(8),
    icon: options?.icon ?? 'favicon.ico',
    timestamp: options?.timestamp ?? new Date().getTime(),
    body: msg
  });
  notify.onclick = function () {
    // 如果通知消息被点击 通知窗口将被激活
    window.focus();
    // @ts-ignore
    options?.onClick?.call(this);
    notify.close();
  };
  notify.onerror = function () {
    // @ts-ignore
    options?.onError?.call(this);
  };
  notify.onclose = function () {
    // @ts-ignore
    options?.onClose?.call(this);
  };
}
