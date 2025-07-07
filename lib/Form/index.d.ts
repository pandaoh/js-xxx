export interface URLParamsOptions {
    defaultParams?: Record<string, string>;
    location?: Location | URL;
}
export interface URLParamsReturn {
    resetParams: (scope?: 'controlled' | 'all') => URLSearchParams;
    setParams: (key: string | Record<string, any>, value?: any) => URLSearchParams;
    getParams: (key?: string) => any;
    deleteParams: (key?: string | 'all') => URLSearchParams;
    setArrayParams: (key: string, values: any[]) => URLSearchParams;
    subscribe: (callback: (params: URLSearchParams, url: string) => void) => () => void;
    searchParams: URLSearchParams;
    controlledKeys: string[];
}
/**
 * 对象转 FormData 格式
 * @example
 * toFormData({a: 1, b: 2}); /// FormData
 * @param obj 源数据
 * @param hasBrackets 是否带括号
 * @param hasIndex 是否带 index
 * @returns
 * @category Form-表单相关
 */
export declare function toFormData(obj: any, hasBrackets?: boolean, hasIndex?: boolean): FormData;
/**
 * Converts a FormData object to a plain JavaScript object.
 * @param formData The FormData object to convert
 * @example
 * const formData = new FormData();
 * formData.append('name', 'John Doe');
 * formData.append('email', 'john.doe@demo.com');
 * formData.append('hobbies', 'reading');
 * formData.append('hobbies', 'coding');
 * const result = formDataToObject(formData);
 * console.log(result);
 * /// { name: 'John Doe', email: 'john.doe@demo.com', hobbies: ['reading', 'coding'] }
 * @returns
 * @category Form-表单相关
 */
export declare function formDataToObject(formData: any): any;
/**
 * 对象转 URLSearchParams 字符串
 * @example
 * toQueryString({a: 1, b: 2, c: [1, 2]}); /// a=1&b=2&c=1&c=2
 * toQueryString({a: 1, b: 2, c: [1, 2]}, true); /// a=1&b=2&c[]=1&c[]=2
 * toQueryString({a: 1, b: 2, c: [1, 2]}, true, true); /// a=1&b=2&c[0]=1&c[1]=2
 * @param obj 源数据
 * @param hasBrackets 是否带括号
 * @param hasIndex 是否带 index
 * @returns
 * @category Form-表单相关
 */
export declare function toQueryString(obj: any, hasBrackets?: boolean, hasIndex?: boolean): URLSearchParams;
/**
 * 创建用于处理数据的钩子函数
 * @example
 * const [getData, setData, resetData] = useStateData({a: 1, b: 2, c: 3});
 * console.log(getData()); /// {a: 1, b: 2, c: 3}
 * setData({ a : 10 }); /// {a: 10}
 * resetData(); /// {a: 1, b: 2, c: 3}
 * const [getData, setData, resetData] = useStateData('test');
 * console.log(getData()); /// 'test'
 * setData('test001'); /// 'test001'
 * resetData(); /// 'test'
 * @param initialData 初始数据
 * @returns
 * @category Form-表单相关
 */
export declare function useStateData(initialData: any): ((value: any) => any)[];
/**
 * URL 参数管理
 * @example
 * const { resetParams, setParams, getParams, deleteParams, setArrayParams, subscribe, searchParams, controlledKeys } = useURLParams({
 *   defaultParams: { a: '1', b: '2' },
 *   location: window.location,
 * });
 * // 设置参数
 * setParams('a', '3'); // 设置单个参数
 * setParams({ b: '4', c: '5' }); // 设置多个参数
 * // 获取参数
 * console.log(searchParams.toString()); // 获取当前查询参数字符串
 * const a = getParams('a'); // 获取单个参数
 * const allParams = getParams(); // 获取所有参数
 * // 删除参数
 * deleteParams('all'); // 删除所有参数
 * deleteParams(); // 删除所有受控参数
 * deleteParams('b'); // 删除单个参数
 * // 设置数组参数
 * setArrayParams('tags', ['tag1', 'tag2', 'tag3']); // 设置数组参数
 * // 订阅参数变化
 * const unsubscribe = subscribe((params, url) => {
 *   console.log('参数变化:', params.toString(), '新 URL:', url);
 * });
 * // 重置参数
 * resetParams('all'); // 重置为默认参数，包括非受控参数
 * resetParams(); // 重置为默认参数
 * // 获取受控参数键名集合
 * console.log(controlledKeys); // 获取受控参数键名集合
 * @param options 配置选项
 * @returns
 * @category URLParams-URL 参数管理
 */
export declare function useURLParams({ defaultParams, location, }?: URLParamsOptions): URLParamsReturn;
//# sourceMappingURL=index.d.ts.map