/**
 * Toast Options Type
 */
export declare type ToastOptions = {
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
 * Example: `showToast({ type: 'success', content: '这是一个演示 Toast' }); => 显示 success 类型的 toast`
 * @param options
 * @returns
 */
export declare const showToast: (options: ToastOptions) => HTMLDivElement;
/**
 * 隐藏 toast
 * Example: `const toast = showToast({ content: '这是一个演示 Toast' }); => hideToast(toast);`
 * @param toast
 * @returns
 */
export declare function hideToast(toast: any): void;
//# sourceMappingURL=index.d.ts.map