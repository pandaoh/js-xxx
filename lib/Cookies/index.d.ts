/**
 * Get Cookie
 * @example
 * getCookie('name'); /// 获取 name 对应的 Cookie 值
 * @param key Cookie key
 * @returns
 * @category Storage-存储相关
 */
export declare function getCookie(key: string): any;
/**
 * Set Cookie
 * @example
 * setCookie('name', 'value', 1); /// 设置 name 对应的 Cookie 值
 * @param key Cookie key
 * @param value Cookie value
 * @param expires Cookie expires
 * @returns
 * @category Storage-存储相关
 */
export declare function setCookie(key: string, value: any, expires: number): void;
/**
 * Remove Cookie
 * @example
 * removeCookie('name'); /// 删除 name 对应的 Cookie
 * @param key Cookie key
 * @returns
 * @category Storage-存储相关
 */
export declare function removeCookie(key: string): void;
/**
 * Clear Cookie
 * @example
 * clearCookies(); /// 删除所有的 Cookie
 * @returns
 * @category Storage-存储相关
 */
export declare function clearCookies(): void;
//# sourceMappingURL=index.d.ts.map