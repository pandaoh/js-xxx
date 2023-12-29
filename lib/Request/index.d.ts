import { HttpMethod } from '@/Data';
/**
 * 对象转 queryString 暂时只支持两层数据，第二层对象与与数组值不能为引用类型。
 * @example
 * qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3] }); /// 'start=0&count=20&obj[a]=1&arr[]=1&arr[]=2&arr[]=3'
 * qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3] }, { arr2str: true }); /// 'start=0&count=20&obj[a]=1&arr=1,2,3'
 * qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3], str: '1' }, { hasIndex: true }); /// 'start=0&count=20&obj[a]=1&arr[0]=1&arr[1]=2&arr[2]=3&str=1'
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
 * 获取 query string 参数转对象
 * @example
 * qsParse('start=0&count=20&x=1&x=2&x=3', 'x'); /// [1, 2, 3]
 * qsParse('start=0&count=20&x=1&x=2&x=3'); /// { start: '0', count: '20', x: [1, 2, 3], '/': 'start=0&count=20&x=1&x=2&x=3' }
 * @param url query string
 * @param key 参数名
 * @returns
 */
export declare function qsParse(url?: string, key?: string): any;
/**
 * 获取不带任何参数或片段标识符的当前 URL
 * @example
 * getBaseURL('https://test.com/index?name=leo&org=biugle#test'); /// 'https://test.com/index'
 * getBaseURL(''); /// ''
 * getBaseURL(); /// 当前页面 BaseURL
 * getBaseURL('https://test.com/#/test?name=leo&org=biugle', true); /// 'https://test.com/#/test'
 * getBaseURL(null); /// 相当于 window.location.origin
 * @param url 地址/链接
 * @param hashRoute 是否为 hash 路由，默认为 false 。
 * @returns
 */
export declare function getBaseURL(url?: string, hashRoute?: boolean): string;
/**
 * 获取 url 查询参数字符串
 * @example
 * getQueryString('https://test.com/index?name=leo&org=biugle#test'); /// 'name=leo&org=biugle'
 * getQueryString(''); /// ''
 * getQueryString(); /// 当前页面 QueryString 字符串部分
 * @param url 地址/链接
 * @returns
 */
export declare function getQueryString(url?: string): any;
/**
 * 改变 URL 地址而不刷新页面，并且支持保留或替换历史记录
 * @example
 * 假如当前地址为：https://test.com/user
 * changeURL('leo'); /// url 变为 'https://test.com/user/leo'
 * changeURL('./leo'); /// url 变为 'https://test.com/user/leo'
 * changeURL('/users'); /// url 变为 'https://test.com/users'
 * changeURL('https://test.com/test'); /// url 变为 'https://test.com/test' (若域名不同，会报错中断。)
 * changeURL('/users', false); /// url 变为 'https://test.com/users' (不覆盖历史记录，返回时会再显示 'https://test.com/user'，而上面的例子返回时是直接显示 'https://test.com/user' 的上一条。)
 * @param url URL 地址
 * @param replaceHistory 是否替换历史记录，默认为 true 。
 */
export declare function changeURL(url: string, replaceHistory?: boolean): void;
/**
 * 获取查询地址/链接中的参数对象
 * @example
 * getSearchParams('https://test.com/index?name=leo&org=biugle#test'); /// {name: 'leo', org: 'biugle'}
 * getSearchParams(''); /// {}
 * getSearchParams(); /// 当前页面 SearchParams 对象
 * @param url 地址/链接
 * @returns
 */
export declare function getSearchParams(url?: string): any;
/**
 * ajax 简单封装
 * @example
 * xAjax('get', 'https://test.cn', { params: { test: 123, hello: 456 }, success: (data) => console.log('success', data), fail: (error) => console.log('fail', error) }); /// ajax
 * xAjax('POST', 'https://test.cn', { contentType: 'application/json', data: { test: 123 }, success: (data) => console.log('success', data), fail: (error) => console.log('fail', error) }); /// ajax
 * @param method Http Method
 * @param url 地址/链接
 * @param options 请求配置
 * @returns
 */
export declare function xAjax(method: string | HttpMethod, url: string, options?: {
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
 * @example
 * xFetch('get', 'https://test.cn', { params: { test: 123, hello: 456 } }).then(res => res.json()).then(data => console.log(data)); /// fetchXPromise
 * xFetch('POST', 'https://test.cn', { contentType: 'application/json', data: { test: 123 } }).catch(error => console.log(error)); /// fetchXPromise
 * @param method Http Method
 * @param url 地址/链接
 * @param options 请求配置
 * @returns
 */
export declare function xFetch(method: string | HttpMethod, url: string, options?: {
    data?: any;
    params?: any;
    raw?: boolean;
    contentType?: string;
}): any;
/**
 * 获取常见的 content-type
 * @example
 * getContentType('form'); /// 'application/x-www-form-urlencoded'
 * getContentType('file'); /// 'multipart/form-data'
 * getContentType('pdf'); /// 'application/pdf'
 * getContentType('PDF'); /// 'application/pdf'
 * getContentType('unknown'); /// 'application/octet-stream'
 * @param fileType 文件类型
 * @returns
 */
export declare function getContentType(fileType: string): string;
//# sourceMappingURL=index.d.ts.map