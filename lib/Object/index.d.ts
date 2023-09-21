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
 * 对象/数组包含某个 key/index 或者属性
 * @example
 * hasKey({ a: 1 }, 'a'); /// true
 * hasKey([0, 1], '0'); /// true
 * hasKey([0, 1], 2); /// false
 * hasKey({ a: 1 }, 'b'); /// false
 * const a = { a: 1 };
 * a.__proto__.x = 1;
 * hasKey(a, 'x'); /// true;
 * @param data 对象
 * @param key 需要判断的 key
 * @returns
 */
export declare function hasKey(data: any, key: string): boolean;
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
 * every 函数
 * 因为默认的 every 空数组会返回 true
 * @example
 * every([]); /// false
 * every([1, 2, 3], (item) => item > 0); /// true
 * every({}); /// false
 * every(undefined); /// false
 * @param collection 源数据
 * @param callback 回调
 * @returns
 */
export declare function every(collection: any, callback?: any): boolean;
/**
 * 找到对象数组具有最多 key 的对象，并返回其 key 组成的数组。
 * @example
 * const objects = [
 *  { id: 1, name: 'a', age: 25 },
 *  { id: 2, name: 'b', age: 30, city: '123' },
 *  { id: 3, name: 'c', age: 35, city: '456', profession: 'Engineer' }
 * ];
 *  findMaxKey(objects); /// ['id', 'name', 'age', 'city', 'profession']
 * @param objArray 源数据
 * @returns
 */
export declare function findMaxKey(objArray: any[]): never[];
//# sourceMappingURL=index.d.ts.map