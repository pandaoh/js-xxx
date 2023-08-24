/**
 * 对象转 FormData 格式
 * @example
 * toFormData({a: 1, b: 2}); /// FormData
 * @param obj 源数据
 * @param hasBrackets 是否带括号
 * @param hasIndex 是否带 index
 * @returns
 */
export declare function toFormData(obj: any, hasBrackets?: boolean, hasIndex?: boolean): FormData;
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
 */
export declare function toQueryString(obj: any, hasBrackets?: boolean, hasIndex?: boolean): URLSearchParams;
//# sourceMappingURL=index.d.ts.map