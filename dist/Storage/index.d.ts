/**
 * 获取 localStorage
 * @example
 * localStorageGet("key"); /// 处理过后的 value，不需要再 decode 。
 * @param key 存储 key
 * @returns
 * @category Storage-存储相关
 */
export declare function localStorageGet(key: string): any;
/**
 * 设置 localStorage
 * @example
 * localStorageSet("key", "value"); /// 存储时不需要处理数据，value === null|undefined 清除数据。(boolean)
 * @param key 存储 key
 * @param value 存储 value，value === null|undefined 清除数据。
 * @returns
 * @category Storage-存储相关
 */
export declare function localStorageSet(key: string, value: any): boolean;
/**
 * 获取 sessionStorage
 * @example
 * sessionStorageGet("key"); /// 处理过后的 value，不需要再 decode 。
 * @param key 存储 key
 * @returns
 * @category Storage-存储相关
 */
export declare function sessionStorageGet(key: string): any;
/**
 * 设置 sessionStorage
 * @example
 * sessionStorageSet("key", "value"); /// 存储时不需要处理数据，value === null|undefined 清除数据。
 * @param key 存储 key
 * @param value 存储 value，value === null|undefined 清除数据。
 * @returns
 * @category Storage-存储相关
 */
export declare function sessionStorageSet(key: string, value: any): boolean;
/**
 * 获取 localStorage 对象值
 * @example
 * getLocalObj("key"); /// 处理过后的 value，不需要再 decode，且有默认值 {}。
 * @param key 存储 key
 * @returns
 * @category Storage-存储相关
 */
export declare function getLocalObj(key: string): any;
/**
 * 获取 sessionStorage 对象值
 * @example
 * getSessionObj("key"); /// 处理过后的 value，不需要再 decode，且有默认值 {}。
 * @param key 存储 key
 * @returns
 * @category Storage-存储相关
 */
export declare function getSessionObj(key: string): any;
/**
 * 获取 localStorage 数组值
 * @example
 * getLocalArr("key"); /// 处理过后的 value，不需要再 decode，且有默认值 []。
 * @param key 存储 key
 * @returns
 * @category Storage-存储相关
 */
export declare function getLocalArr(key: string): any[];
/**
 * 获取 sessionStorage 数组值
 * @example
 * getSessionArr("key"); /// 处理过后的 value，不需要再 decode，且有默认值 []。
 * @param key 存储 key
 * @returns
 * @category Storage-存储相关
 */
export declare function getSessionArr(key: string): any[];
/**
 * 获取 Storage 加密数据
 * @example
 * getDecodeStorage("key"); /// 处理过后的 value，不需要再 decode 和解密。
 * @param key 存储 key
 * @param isLocal 是否 localStorage
 * @returns
 * @category Storage-存储相关
 */
export declare function getDecodeStorage(key: string, isLocal?: boolean): any;
/**
 * 设置 Storage 加密数据
 * @example
 * setEncodeStorage("key", "value"); /// 存储时不需要处理数据，自动加密，value === null|undefined 清除数据。(boolean)
 * @param key 存储 key
 * @param value 存储 value 字符串，value === null|undefined 清除数据。
 * @param isLocal 是否 localStorage
 * @returns
 * @category Storage-存储相关
 */
export declare function setEncodeStorage(key: string, value: string, isLocal?: boolean): boolean;
//# sourceMappingURL=index.d.ts.map