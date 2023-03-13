/**
 * 获取 localStorage
 * Example: `localStorageGet("key") => 处理过后的 value，不需要再 decode`
 * @param key 存储key
 * @returns
 */
export declare function localStorageGet(key: string): any;
/**
 * 设置 localStorage
 * Example: `localStorageSet("key", "value") => 存储时不需要处理数据，value === null|undefined 清除数据。(boolean)`
 * @param key 存储key
 * @param value 存储value，value === null|undefined 清除数据。
 * @returns
 */
export declare function localStorageSet(key: string, value: any): boolean;
/**
 * 获取 sessionStorage
 * Example: `sessionStorageGet("key") => 处理过后的 value，不需要再 decode`
 * @param key 存储key
 * @returns
 */
export declare function sessionStorageGet(key: string): any;
/**
 * 设置 sessionStorage
 * Example: `sessionStorageSet("key", "value") => 存储时不需要处理数据，value === null|undefined 清除数据。`
 * @param key 存储key
 * @param value 存储value，value === null|undefined 清除数据。
 * @returns
 */
export declare function sessionStorageSet(key: string, value: any): boolean;
//# sourceMappingURL=index.d.ts.map