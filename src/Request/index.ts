/*
 * @Author: HxB
 * @Date: 2022-04-26 14:15:37
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-12-29 11:12:17
 * @Description: 请求相关函数
 * @FilePath: \js-xxx\src\Request\index.ts
 */
import { CONTENT_TYPES, HttpMethod } from '@/Data';
import { getType, isObj, toBool } from '@/Types';

/**
 * 对象转 queryString 暂时只支持两层数据，第二层对象与与数组值不能为引用类型。
 * @example
 * qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3] }); /// 'start=0&count=20&obj[a]=1&arr[]=1&arr[]=2&arr[]=3'
 * qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3] }, { arr2str: true }); /// 'start=0&count=20&obj[a]=1&arr=1,2,3'
 * qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3], str: '1' }, { hasIndex: true }); /// 'start=0&count=20&obj[a]=1&arr[0]=1&arr[1]=2&arr[2]=3&str=1'
 * @param obj 源数据
 * @returns
 */
export function qsStringify(
  obj: any,
  options?: { arr2str?: boolean; hasIndex?: boolean; urlEncode?: boolean; hasBrackets?: boolean },
): string {
  if (!obj) {
    return '';
  }
  const queryString: URLSearchParams = new URLSearchParams();
  // 不用 for...in，避免污染原对象，且数组遍历效率高。
  Object.keys(obj).forEach((key: string) => {
    const val: any = obj[key];
    switch (getType(val)) {
      case 'object':
        Object.keys(val).forEach((objKey: string) => {
          queryString.append(
            `${key}[${objKey}]`,
            getType(val[objKey]) == 'object' ? JSON.stringify(val[objKey]) : val[objKey],
          );
        });
        break;
      case 'array':
        if (options?.arr2str) {
          queryString.append(key, val.join(','));
        } else {
          val.filter(Boolean).forEach((arrVal: any, arrIndex: number) => {
            const newArrVal: any = getType(arrVal) == 'object' ? JSON.stringify(arrVal) : arrVal;
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
 * 获取 query string 参数转对象
 * @example
 * qsParse('start=0&count=20&x=1&x=2&x=3', 'x'); /// [1, 2, 3]
 * qsParse('start=0&count=20&x=1&x=2&x=3'); /// { start: '0', count: '20', x: [1, 2, 3], '/': 'start=0&count=20&x=1&x=2&x=3' }
 * @param url query string
 * @param key 参数名
 * @returns
 */
export function qsParse(url?: string, key?: string): any {
  // 也可使用 new URL(url) 或者 new URLSearchParams(params) API 获取
  const pathname: string = url ?? window.location.pathname;
  url = url ?? window.location.search;
  const filename: string = pathname.substring(pathname.lastIndexOf('/') + 1);
  const paramMap: any = {
    '/': filename ?? undefined,
  };
  const queryString: string = url.indexOf('?') === 0 ? url.substring(1) : url;
  if (queryString.length !== 0) {
    const parts: any[] = queryString.split('&');
    for (let i = 0; i < parts.length; i++) {
      const component: any[] = parts[i].split('=');
      const paramKey = decodeURIComponent(component[0]);
      const paramVal = decodeURIComponent(component[1]);
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
export function getBaseURL(url?: string, hashRoute = false): string {
  if (url === null) {
    return window.location.origin;
  }
  url = url ?? window.location.href;
  if (hashRoute) {
    return url.split('?')[0];
  }
  return url.replace(/[?#].*$/, '');
}

/**
 * 获取 url 查询参数字符串
 * @example
 * getQueryString('https://test.com/index?name=leo&org=biugle#test'); /// 'name=leo&org=biugle'
 * getQueryString(''); /// ''
 * getQueryString(); /// 当前页面 QueryString 字符串部分
 * @param url 地址/链接
 * @returns
 */
export function getQueryString(url?: string): any {
  return toBool(url) ? url?.split('?')?.[1]?.split('#')?.[0] ?? '' : window.location.search?.replace('?', '');
}

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
export function changeURL(url: string, replaceHistory = true) {
  if (replaceHistory) {
    window.history.replaceState({}, '', url);
  } else {
    window.history.pushState({}, '', url);
  }
}

/**
 * 获取查询地址/链接中的参数对象
 * @example
 * getSearchParams('https://test.com/index?name=leo&org=biugle#test'); /// {name: 'leo', org: 'biugle'}
 * getSearchParams(''); /// {}
 * getSearchParams(); /// 当前页面 SearchParams 对象
 * @param url 地址/链接
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
 * @example
 * xAjax('get', 'https://test.cn', { params: { test: 123, hello: 456 }, success: (data) => console.log('success', data), fail: (error) => console.log('fail', error) }); /// ajax
 * xAjax('POST', 'https://test.cn', { contentType: 'application/json', data: { test: 123 }, success: (data) => console.log('success', data), fail: (error) => console.log('fail', error) }); /// ajax
 * @param method Http Method
 * @param url 地址/链接
 * @param options 请求配置
 * @returns
 */
export function xAjax(
  method: string | HttpMethod,
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
  },
): any {
  let xhr: any;
  method = method.toUpperCase();
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    // @ts-ignore
    // eslint-disable-next-line no-undef
    xhr = new ActiveXObject('Microsoft.XMLHttp');
  }
  // eslint-disable-next-line spellcheck/spell-checker
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status < 400) {
        options?.success?.(xhr.response);
      } else if (xhr.status >= 400) {
        options?.fail?.(xhr.response);
      }
    }
  };
  const async: boolean = options?.async ?? true;
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
      async,
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
 * @example
 * xFetch('get', 'https://test.cn', { params: { test: 123, hello: 456 } }).then(res => res.json()).then(data => console.log(data)); /// fetchXPromise
 * xFetch('POST', 'https://test.cn', { contentType: 'application/json', data: { test: 123 } }).catch(error => console.log(error)); /// fetchXPromise
 * @param method Http Method
 * @param url 地址/链接
 * @param options 请求配置
 * @returns
 */
export function xFetch(
  method: string | HttpMethod,
  url: string,
  options?: {
    data?: any;
    params?: any;
    raw?: boolean;
    contentType?: string;
  },
): any {
  if (options?.params) {
    url = `${url}${url.includes('?') ? '&' : '?'}${new URLSearchParams(options.params).toString()}`;
  }
  if (options?.data) {
    options.data = !options?.raw && isObj(options.data) ? JSON.stringify(options.data) : options.data;
  }
  return fetch(url, {
    headers: {
      'content-type': options?.contentType ?? 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    method: method,
    body: options?.data,
  });
}

// eslint-disable-next-line spellcheck/spell-checker
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
export function getContentType(fileType: string): string {
  return CONTENT_TYPES[fileType.toLowerCase()] ?? 'application/octet-stream';
}
