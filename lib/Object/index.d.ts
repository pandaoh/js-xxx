/**
 * 获取多级对象值
 * @example
 * getV('默认值', {name: {children: [123, 456]}}, 'name', 'children', '0'); /// 123
 * @param defaultResult 默认值
 * @param args 需要获取的多级 rest 参数
 * @returns
 */
export declare function getV(defaultResult: any, ...args: any): any;
/**
 * 获取多级对象值通过字符串 keys
 * @example
 * getVar({name: {children: [123, 456]}}, 'name.children.1', '默认值'); /// 456
 * getVar([1, 2, 3, 4], '100', '默认值'); /// '默认值'
 * @param data 源数据
 * @param keys 多级对象字符串
 * @param defaultResult 默认值
 * @returns
 */
export declare function getVar(data: any, keys: string, defaultResult?: any): any;
/**
 * 合并对象
 * @example
 * mergeObj({name: 1, oldValue: 2}, {name: 3, value: 4}, []); /// {name: 1, oldValue: 2, value: 4}
 * mergeObj({name: 1, oldValue: 2}, {name: 3, value: 4}, ['name'], true); /// {name: 3, value: 4}
 * @param oldObj 源对象
 * @param newObj 要合并的对象
 * @param keys 要覆盖的属性 key，不指定时以源对象为准，指定时以新对象为准。
 * @param noOld 新对象中不存在的属性直接删除，默认不删除 false，true 删除。
 * @returns
 */
export declare function mergeObj(oldObj: {
    [key: string]: any;
}, newObj: {
    [key: string]: any;
}, keys?: string | string[], noOld?: boolean): {
    [key: string]: any;
};
/**
 * 深拷贝
 * @link https://juejin.cn/post/7075351322014253064
 * @example
 * deepClone({a: 1, b: {c: 2}}); /// 新的 {a: 1, b: {c: 2}}
 * @param data 源数据
 * @param hash hash 存储，避免循环引用。
 * @returns
 */
export declare function deepClone(data: any, hash?: WeakMap<object, any>): any;
/**
 * 对象包含某个 key 或者属性
 * @example
 * hasKey({ a: 1 }, 'a'); /// true
 * hasKey({ a: 1 }, 'b'); /// false
 * const a = { a: 1 };
 * a.__proto__.x = 1;
 * hasKey(a, 'x'); /// true;
 * @param obj
 * @param key
 * @returns
 */
export declare function hasKey(obj: any, key: string): boolean;
//# sourceMappingURL=index.d.ts.map