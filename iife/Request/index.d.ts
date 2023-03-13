/**
 * content types
 */
export declare const CONTENT_TYPES: {
    [propName: string]: string;
};
/**
 * Http Method
 */
export declare enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
    OPTIONS = "OPTIONS",
    get = "GET",
    post = "POST",
    put = "PUT",
    patch = "PATCH",
    delete = "DELETE",
    options = "OPTIONS"
}
/**
 * 对象转 querystring 暂时只支持两层数据，第二层对象与与数组值不能为引用类型。
 * Example:
 * `qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3] }) => 'start=0&count=20&obj[a]=1&arr[]=1&arr[]=2&arr[]=3'`
 * `qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3] }, { arr2str: true }) => 'start=0&count=20&obj[a]=1&arr=1,2,3'`
 * `qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3], str: '1' }, { hasIndex: true }) => 'start=0&count=20&obj[a]=1&arr[0]=1&arr[1]=2&arr[2]=3&str=1'`
 * @param obj 源数据
 * @returns
 */
export declare function qsStringify(obj: any, options?: {
    arr2str?: boolean;
    hasIndex?: boolean;
    urlEncode?: boolean;
    hasBrackets?: boolean;
}): string;
/**
 * 获取 query string 参数
 * Example:
 * `qsParse('start=0&count=20&x=1&x=2&x=3', 'x') => [1, 2, 3]`
 * `qsParse('start=0&count=20&x=1&x=2&x=3') => { start: '0', count: '20', x: [1, 2, 3], '/': 'start=0&count=20&x=1&x=2&x=3' }`
 * @param url query string
 * @param key 参数名
 * @returns
 */
export declare function qsParse(url?: string, key?: string): any;
/**
 * 获取不带任何参数或片段标识符的当前 URL
 * Example:
 * `getBaseURL('https://test.com/index?name=leo&org=biugle#test') => 'https://test.com/index'`
 * `getBaseURL('') => ''`
 * `getBaseURL() => 当前页面 BaseURL`
 * @param url
 * @returns
 */
export declare function getBaseURL(url?: string): string;
/**
 * 获取 url 查询参数字符串
 * Example:
 * `getQueryString('https://test.com/index?name=leo&org=biugle#test') => 'name=leo&org=biugle'`
 * `getQueryString('') => ''`
 * `getQueryString() => 当前页面 QueryString 字符串部分`
 * @param url
 * @returns
 */
export declare function getQueryString(url?: string): any;
/**
 * 获取查询参数对象
 * Example:
 * `getSearchParams('https://test.com/index?name=leo&org=biugle#test') => {name: 'leo', org: 'biugle'}`
 * `getSearchParams('') => {}`
 * `getSearchParams() => 当前页面 SearchParams 对象`
 * @param url
 * @returns
 */
export declare function getSearchParams(url?: string): any;
/**
 * ajax 简单封装
 * Example:
 * `xAjax('get', 'https://test.cn', { params: { test: 123, hello: 456 }, success: (data) => console.log('success', data), fail: (error) => console.log('fail', error) }) => ajax`
 * `xAjax('POST', 'https://test.cn', { contentType: 'application/json', data: { test: 123 }, success: (data) => console.log('success', data), fail: (error) => console.log('fail', error) }) => ajax`
 * @param method
 * @param url
 * @param options
 * @returns
 */
export declare function xAjax(method: HttpMethod | string, url: string, options?: {
    data?: any;
    params?: any;
    success?: any;
    fail?: any;
    contentType?: string;
    async?: boolean;
    raw?: boolean;
    withCredentials?: boolean;
}): any;
/**
 * fetch 简单封装
 * Example:
 * `xFetch('get', 'https://test.cn', { params: { test: 123, hello: 456 } }).then(res => res.json()).then(data => console.log(data)) => fetchXPromise`
 * `xFetch('POST', 'https://test.cn', { contentType: 'application/json', data: { test: 123 } }).catch(error => console.log(error)) => fetchXPromise`
 * @param method
 * @param url
 * @param options
 * @returns
 */
export declare function xFetch(method: HttpMethod, url: string, options?: {
    data?: any;
    params?: any;
    raw?: boolean;
    contentType?: string;
}): any;
/**
 * 获取常见的 content-type
 * Example:
 * `getContentType('form') => 'application/x-www-form-urlencoded'`
 * `getContentType('file') => 'multipart/form-data'`
 * `getContentType('pdf') => 'application/pdf'`
 * `getContentType('unknown') => 'application/octet-stream'`
 * @param fileType
 * @returns
 */
export declare function getContentType(fileType: string): string;
//# sourceMappingURL=index.d.ts.map