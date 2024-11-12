/**
 * 获取多级对象值
 * @example
 * getV('默认值', {name: {children: [123, 456]}}, 'name', 'children', '0'); /// 123
 * getV('默认值', {name: {children: [123, 456]}}, 'name.children.0'); /// 123
 * getV('默认值', {name: {children: [123, 456]}}, 'name.children.xxx'); /// 默认值
 * getV('默认值', {name: {children: [123, 456], '[]': ['test']}}, 'name.[].0'); /// 'test'
 * getV('默认值', {name: {children: [123, 456], '[]': ['test']}}, 'name', '[]', 0); /// 'test'
 * @param defaultResult 默认值
 * @param args 需要获取的多级 rest 参数或者独立多级 string
 * @returns
 * @category Object-对象相关
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
 * @category Object-对象相关
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
 * @category Object-对象相关
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
 * @category Object-对象相关
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
 * @category Object-对象相关
 */
export declare function findMaxKey(objArray: any[]): never[];
/**
 * 转化为 Select 数据，至少有 label/value/key 字段。
 * @example
 * arr2select([{ id: 1, name: 'A' }, { id: 2, name: 'B' }], { label: 'name', value: 'id' });
 * /// [{ label: 'A', value: 1, key: 'selectKey-Random1' }, { label: 'B', value: 2, key: 'selectKey-Random2' }]
 * arr2select([{ id: 1, name: 'A' }, { id: 2, name: 'B' }], { value: 'id', key: 'UNDEFINED' });
 * /// [{ label: 1, value: 1, key: 1 }, { label: 2, value: 2, key: 2 }]
 * arr2select([{ data: { id: 1, name: 'A' }, key: 'test1' }, { data: { id: 2, name: 'B' }, key: 'test2' }], { value: 'data.id', key: 'key', label: 'data.name' });
 * /// [{ value: 1, label: "A", key: "test1" }, { value: 2, label: "B", key: "test2" }]
 * @param arr 数组
 * @param options 配置 { label?: 'label', value: 'value', key?: 'key' }
 * @returns
 * @category Object-对象相关
 */
export declare function arr2select(arr: any[], options: {
    label?: string;
    value: string;
    key?: string;
}): any[];
/**
 * 获取对象中的多个值，支持为空时使用默认值。
 * @param obj 需要获取值的对象
 * @param keys 要获取的键数组，支持多级别。
 * @param defaultValue 默认值，当对象中不存在某个键时，使用该值替换。
 * @returns 返回包含键值对的结果对象
 * @example
 * getObjectValue({ a: 1, b: null, c: undefined, d: '' }, ['a', 'b', 'c', 'd', 'e']);
 * // 返回: { a: 1, b: null, c: 0, d: undefined, e: undefined }

 * getObjectValue({ a: 1, b: null, c: undefined, d: '' }, ['a', 'b', 'c', 'd', 'e'], 0);
 * // 返回: { a: 1, b: null, c: 0, d: '', e: 0 }
 *
 * getObjectValue({ a: 1, b: undefined, c: { d: 'test' } }, ['a', 'b', 'c.d'], 'default');
 * // 返回: { a: 1, b: 'default', d: 'test' }

 * getObjectValue({ a: 1, b: undefined, c: { d: 'test', e: [0] } }, ['a', 'b', 'c.d', 'c.e.0'], 'default');
 * // 返回: { a: 1, b: 'default', c.d: 'test', 'c.e.0': 0 }
 * @category Others-业务/其他
 */
export declare const getObjectValue: (obj: any, keys: string[], defaultValue?: any) => any;
//# sourceMappingURL=index.d.ts.map