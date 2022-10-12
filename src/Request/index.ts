/*
 * @Author: HxB
 * @Date: 2022-04-26 14:15:37
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-10-12 16:11:09
 * @Description: 请求相关方法
 * @FilePath: \js-xxx\src\Request\index.ts
 */
import { getType, isObj, toBool } from '@/Types';

/**
 * Http Method
 */
export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS',
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  patch = 'PATCH',
  delete = 'DELETE',
  options = 'OPTIONS'
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
export function qsStringify(
  obj: any,
  options?: { arr2str?: boolean; hasIndex?: boolean; urlEncode?: boolean; hasBrackets?: boolean }
): string {
  if (!obj) {
    return '';
  }
  let queryString: URLSearchParams = new URLSearchParams();
  // 不用 for...in，避免污染原对象，且数组遍历效率高。
  Object.keys(obj).forEach((key: string) => {
    let val: any = obj[key];
    switch (getType(val)) {
      case 'object':
        Object.keys(val).forEach((objKey: string) => {
          queryString.append(
            `${key}[${objKey}]`,
            getType(val[objKey]) == 'object' ? JSON.stringify(val[objKey]) : val[objKey]
          );
        });
        break;
      case 'array':
        if (options?.arr2str) {
          queryString.append(key, val.join(','));
        } else {
          val.filter(Boolean).forEach((arrVal: any, arrIndex: number) => {
            let newArrVal: any = getType(arrVal) == 'object' ? JSON.stringify(arrVal) : arrVal;
            options?.hasBrackets
              ? queryString.append(options?.hasIndex ? `${key}[${arrIndex}]` : `${key}[]`, newArrVal)
              : queryString.append(key, newArrVal);
          });
        }
        break;
      default:
        queryString.append(key, val);
        break;
    }
  });
  return options?.urlEncode ? queryString.toString() : decodeURIComponent(queryString.toString());
}

/**
 * 获取 query string 参数
 * Example:
 * `qsParse('start=0&count=20&x=1&x=2&x=3', 'x') => [1, 2, 3]`
 * `qsParse('start=0&count=20&x=1&x=2&x=3') => { start: '0', count: '20', x: [1, 2, 3], '/': 'start=0&count=20&x=1&x=2&x=3' }`
 * @param url query string
 * @param key 参数名
 * @returns
 */
export function qsParse(url?: string, key?: string): any {
  // 也可使用 new URL(url) 或者 new URLSearchParams(params) API 获取
  let pathname: string = url ?? window.location.pathname;
  url = url ?? window.location.search;
  let filename: string = pathname.substring(pathname.lastIndexOf('/') + 1);
  let paramMap: any = {
    '/': filename ?? undefined
  };
  let querystring: string = url.indexOf('?') === 0 ? url.substring(1) : url;
  if (querystring.length !== 0) {
    let parts: any[] = querystring.split('&');
    for (let i = 0; i < parts.length; i++) {
      let component: any[] = parts[i].split('=');
      let paramKey = decodeURIComponent(component[0]);
      let paramVal = decodeURIComponent(component[1]);
      if (!paramMap[paramKey]) {
        paramMap[paramKey] = paramVal;
        continue;
      }
      !Array.isArray(paramMap[paramKey]) && (paramMap[paramKey] = Array(paramMap[paramKey]));
      paramMap[paramKey].push(paramVal);
    }
  }
  return key ? paramMap?.[key] : paramMap;
}

/**
 * 获取不带任何参数或片段标识符的当前 URL
 * Example:
 * `getBaseURL('https://test.com/index?name=leo&org=biugle#test') => 'https://test.com/index'`
 * `getBaseURL('') => ''`
 * `getBaseURL() => 当前页面 BaseURL`
 * @param url
 * @returns
 */
export function getBaseURL(url?: string): string {
  url = url ?? window.location.href;
  return url.replace(/[?#].*$/, '');
}

/**
 * 获取 url 查询参数字符串
 * Example:
 * `getQueryString('https://test.com/index?name=leo&org=biugle#test') => 'name=leo&org=biugle'`
 * `getQueryString('') => ''`
 * `getQueryString() => 当前页面 QueryString 字符串部分`
 * @param url
 * @returns
 */
export function getQueryString(url?: string): any {
  return toBool(url) ? url?.split('?')?.[1]?.split('#')?.[0] ?? '' : window.location.search?.replace('?', '');
}

/**
 * 获取查询参数对象
 * Example:
 * `getSearchParams('https://test.com/index?name=leo&org=biugle#test') => {name: 'leo', org: 'biugle'}`
 * `getSearchParams('') => {}`
 * `getSearchParams() => 当前页面 SearchParams 对象`
 * @param url
 * @returns
 */
export function getSearchParams(url?: string): any {
  const searchPar = new URLSearchParams(getQueryString(url));
  const paramsObj: any = {};
  for (const [key, value] of searchPar.entries()) {
    paramsObj[key] = value;
  }
  return paramsObj;
}

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
export function xAjax(
  method: HttpMethod | string,
  url: string,
  options?: {
    data?: any;
    params?: any;
    success?: any;
    fail?: any;
    contentType?: string;
    async?: boolean;
    raw?: boolean;
    withCredentials?: boolean;
  }
): any {
  var xhr: any;
  method = method.toUpperCase();
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    // @ts-ignore
    xhr = new ActiveXObject('Microsoft.XMLHttp');
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status < 400) {
        options?.success?.(xhr.response);
      } else if (xhr.status >= 400) {
        options?.fail?.(xhr.response);
      }
    }
  };
  let async: boolean = options?.async ?? true;
  // setting after open for compatibility with IE versions <=10
  xhr.withCredentials = options?.withCredentials ?? false;
  if (options?.data) {
    options.data = !options?.raw && isObj(options.data) ? JSON.stringify(options.data) : options.data;
  }
  if (method == 'GET') {
    xhr.open(
      'GET',
      !options?.params
        ? url
        : `${url}${url.includes('?') ? '&' : '?'}${new URLSearchParams(options.params).toString()}`,
      async
    );
    xhr.send();
  } else {
    xhr.open(method, url, async);
    xhr.setRequestHeader('Content-Type', options?.contentType ?? 'application/x-www-form-urlencoded;charset=UTF-8');
    xhr.send(options?.data ?? null);
  }
  return xhr;
}

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
export function xFetch(
  method: HttpMethod,
  url: string,
  options?: {
    data?: any;
    params?: any;
    raw?: boolean;
    contentType?: string;
  }
): any {
  if (options?.params) {
    url = `${url}${url.includes('?') ? '&' : '?'}${new URLSearchParams(options.params).toString()}`;
  }
  if (options?.data) {
    options.data = !options?.raw && isObj(options.data) ? JSON.stringify(options.data) : options.data;
  }
  return fetch(url, {
    headers: {
      'content-type': options?.contentType ?? 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    method: method,
    body: options?.data
  });
}
