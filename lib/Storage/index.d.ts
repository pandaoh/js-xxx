/**
 * 获取 localStorage
 * Example: `localStorageGet("key") => 处理过后的 value，不需要再 decode 。`
 * @param key 存储 key
 * @returns
 */
export declare function localStorageGet(key: string): any;
/**
 * 设置 localStorage
 * Example: `localStorageSet("key", "value") => 存储时不需要处理数据，value === null|undefined 清除数据。(boolean)`
 * @param key 存储 key
 * @param value 存储 value，value === null|undefined 清除数据。
 * @returns
 */
export declare function localStorageSet(key: string, value: any): boolean;
/**
 * 获取 sessionStorage
 * Example: `sessionStorageGet("key") => 处理过后的 value，不需要再 decode 。`
 * @param key 存储 key
 * @returns
 */
export declare function sessionStorageGet(key: string): any;
/**
 * 设置 sessionStorage
 * Example: `sessionStorageSet("key", "value") => 存储时不需要处理数据，value === null|undefined 清除数据。`
 * @param key 存储 key
 * @param value 存储 value，value === null|undefined 清除数据。
 * @returns
 */
export declare function sessionStorageSet(key: string, value: any): boolean;
/**
 * 获取 localStorage 对象值
 * Example: `getLocalObj("key") => 处理过后的 value，不需要再 decode，且有默认值 {}。`
 * @param key 存储 key
 * @returns
 */
export declare function getLocalObj(key: string): any;
/**
 * 获取 sessionStorage 对象值
 * Example: `getSessionObj("key") => 处理过后的 value，不需要再 decode，且有默认值 {}。`
 * @param key 存储 key
 * @returns
 */
export declare function getSessionObj(key: string): any;
/**
 * 获取 localStorage 数组值
 * Example: `getLocalArr("key") => 处理过后的 value，不需要再 decode，且有默认值 []。`
 * @param key 存储 key
 * @returns
 */
export declare function getLocalArr(key: string): any[];
/**
 * 获取 sessionStorage 数组值
 * Example: `getSessionArr("key") => 处理过后的 value，不需要再 decode，且有默认值 []。`
 * @param key 存储 key
 * @returns
 */
export declare function getSessionArr(key: string): any[];
/**
 * 获取 Storage 加密数据
 * Example: `getDecodeStorage("key") => 处理过后的 value，不需要再 decode 和解密。`
 * @param key 存储 key
 * @param isLocal 是否 localStorage
 * @returns
 */
export declare function getDecodeStorage(key: string, isLocal?: boolean): any;
/**
 * 设置 Storage 加密数据
 * Example: `setEncodeStorage("key", "value") => 存储时不需要处理数据，自动加密，value === null|undefined 清除数据。(boolean)`
 * @param key 存储 key
 * @param value 存储 value 字符串，value === null|undefined 清除数据。
 * @param isLocal 是否 localStorage
 * @returns
 */
export declare function setEncodeStorage(key: string, value: string, isLocal?: boolean): boolean;
//# sourceMappingURL=index.d.ts.map