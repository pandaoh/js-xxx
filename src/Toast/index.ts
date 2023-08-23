/* eslint-disable indent */
/*
 * @Author: HxB
 * @Date: 2022-06-16 15:37:27
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-08-23 11:47:31
 * @Description: 自定义 toast
 * @FilePath: \js-xxx\src\Toast\index.ts
 */

import { ICONS } from '@/Data';
import { log } from '@/Others';

/**
 * @type
 * Toast Options Type
 */
export type ToastOptions = {
  content: string;
  type?: 'info' | 'success' | 'error' | 'warning' | 'loading' | 'default';
  delay?: number;
  position?: string;
  parent?: string;
  color?: string;
  background?: string;
  fontSize?: string;
  iconSize?: string;
};

/**
 * 显示 Toast
 * `export function showToast(options: ToastOptions);`
 * @example
 * showToast({ type: 'success', content: '这是一个演示 Toast' }); /// 显示 success 类型的 toast
 * @param options 显示配置
 * @returns
 */
export const showToast = (function () {
  const defaultOptions = {
    type: 'default',
    content: '',
    delay: 2600,
    position: 'center',
    parent: 'body',
    color: 'whitesmoke',
    background: 'rgba(0, 0, 0, 0.68)',
    fontSize: '1.3rem',
    iconSize: '1.98rem',
  };

  try {
    if (document && !document?.getElementById('biugle-toast-style')) {
      // eslint-disable-next-line spellcheck/spell-checker
      const style = `.biugle-toast{position:fixed;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;max-width:50%;min-width:180px;padding:10px 15px;border-radius:5px;font-size:${defaultOptions.fontSize};box-shadow:0 3px 8px rgba(0,0,0,0.15);background-color:${defaultOptions.background};color:${defaultOptions.color};opacity:1;transition:opacity 0.5s;}.biugle-toast-hide{opacity:0;}.biugle-toast-icon{width:${defaultOptions.iconSize};height:${defaultOptions.iconSize};background-size:100% 100%;background-repeat:no-repeat;background-position:center center;}.biugle-toast-icon.biugle-default{display:none;}.biugle-toast-content{word-break:break-all;word-wrap:break-word;white-space:pre-wrap;font-weight:400;}.biugle-toast-icon.biugle-loading{animation:biugle-toast-rotate 1s linear infinite;}.biugle-toast-top-center{top:3%;left:50%;transform:translateX(-50%);}.biugle-toast-top-left{top:3%;left:3%;}.biugle-toast-top-right{top:3%;right:3%;}.biugle-toast-bottom-center{bottom:3%;left:50%;transform:translateX(-50%);}.biugle-toast-bottom-left{bottom:3%;left:3%;}.biugle-toast-bottom-right{bottom:3%;right:3%;}.biugle-toast-center{top:50%;left:50%;transform:translate(-50%,-50%);}@keyframes biugle-toast-rotate{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}`;
      const styleElement = document.createElement('style');
      styleElement.id = 'biugle-toast-style';
      styleElement.innerHTML = style;
      document.head.appendChild(styleElement);
    }
  } catch (e) {
    log({ toastError: e });
  }

  function _createToast(options: ToastOptions) {
    const toast = document.createElement('div');
    toast.classList.add('biugle-toast', `biugle-toast-${options.position}`);
    toast.style.color = options.color || defaultOptions.color;
    toast.style.background = options.background || defaultOptions.background;
    toast.style.fontSize = options.fontSize || defaultOptions.fontSize;
    toast.innerHTML = `<div class="biugle-toast-icon biugle-${options.type}"
    style="background-image: url(${ICONS[options.type || 'default']});
    width: ${options.iconSize || defaultOptions.iconSize};
    height: ${options.iconSize || defaultOptions.iconSize};"></div>
    <div class="biugle-toast-content">${options.content}</div>`;
    return toast;
  }

  function _showToast(options: ToastOptions) {
    const newOptions: ToastOptions = Object.assign({}, defaultOptions, options);
    const toast = _createToast(newOptions);
    document.querySelector(newOptions.parent || 'body')?.appendChild(toast);
    if (newOptions.delay && newOptions.type !== 'loading') {
      setTimeout(() => {
        hideToast(toast);
      }, newOptions.delay);
    }
    return toast;
  }

  return function (options: ToastOptions) {
    const toast = _showToast(options);
    return toast;
  };
})();

/**
 * 隐藏 toast 不传值关闭所有 toast
 * @example
 * const toast = showToast({ content: '这是一个演示 Toast' }); /// hideToast(toast);
 * @param toast toast 实例
 * @returns
 */
export function hideToast(toast?: any) {
  if (!toast) {
    const toasts = document.querySelectorAll('.biugle-toast');
    toasts?.forEach((toast) => toast && hideToast(toast));
    return;
  }
  toast?.classList?.toggle('biugle-toast-hide');
  setTimeout(() => {
    toast?.remove();
  }, 500);
}

/**
 * 快速展示 Toast
 * @example
 * const myToast = Toast('这是一个快速演示 Toast'); /// hideToast(myToast);
 * @param msg 内容
 * @param type 类型
 * @returns
 */
export function Toast(
  msg: string,
  type: 'info' | 'success' | 'error' | 'warning' | 'loading' | 'default' = 'info',
): any {
  if (!msg) {
    return;
  }
  return showToast({
    content: msg,
    type: type ?? 'default',
  });
}

/**
 * Loading Toast 不会自动关闭
 * @example
 * const myLoading = Loading(msg?); /// hideToast(myLoading);
 * @param msg 内容
 * @returns
 */
export function Loading(msg: string): any {
  return showToast({
    content: msg ?? '...',
    type: 'loading',
  });
}
