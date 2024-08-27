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
 * @param formData The FormData object to convert.
 * @example
 * const formData = new FormData();
 * formData.append('name', 'John Doe');
 * formData.append('email', 'john.doe@example.com');
 * formData.append('hobbies', 'reading');
 * formData.append('hobbies', 'coding');
 * const result = formDataToObject(formData);
 * console.log(result);
 * /// { name: 'John Doe', email: 'john.doe@example.com', hobbies: ['reading', 'coding'] }
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
//# sourceMappingURL=index.d.ts.map