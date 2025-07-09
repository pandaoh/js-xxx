/* eslint-disable indent */
/*
 * @Author: HxB
 * @Date: 2022-04-26 14:15:37
 * @LastEditors: DoubleAm
 * @LastEditTime: 2025-07-09 17:36:32
 * @Description: 请求相关函数
 * @FilePath: /js-xxx/src/Request/index.ts
 */
import { CONTENT_TYPES, FileType, HttpMethod } from '@/Data';
import { getType, isObj, toBool } from '@/Types';

/**
 * 对象转 queryString 暂时只支持两层数据，第二层对象与与数组值不能为引用类型。
 * @example
 * qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3] }); /// 'start=0&count=20&obj[a]=1&arr[]=1&arr[]=2&arr[]=3'
 * qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3] }, { arr2str: true }); /// 'start=0&count=20&obj[a]=1&arr=1,2,3'
 * qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3], str: '1' }, { hasIndex: true }); /// 'start=0&count=20&obj[a]=1&arr[0]=1&arr[1]=2&arr[2]=3&str=1'
 * @param obj 源数据
 * @returns
 * @category Request-请求相关
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
          // val.filter(Boolean)
          val.filter(toBool).forEach((arrVal: any, arrIndex: number) => {
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
  return options?.urlEncode ? queryString.toString() : safeDecodeURI(queryString.toString());
}

/**
 * 获取 query string 参数转对象
 * @example
 * qsParse('start=0&count=20&x=1&x=2&x=3', 'x'); /// [1, 2, 3]
 * qsParse('http://a.cn/123/test?start=0&count=20&x=1&x=2&x=3#123'); /// { start: '0', count: '20', x: [1, 2, 3], '#': 123, '_': 'test', '/': 'test?start=0&count=20&x=1&x=2&x=3#123' }
 * @param url query string
 * @param key 参数名
 * @returns
 * @category Request-请求相关
 */
export function qsParse(url?: string, key?: string): any {
  // 也可使用 new URL(url) 或者 new URLSearchParams(params) API 获取
  const pathname: string = url ?? window.location.pathname ?? '';
  url = url ?? window.location.search ?? '';
  const filename: string = pathname.substring(pathname.lastIndexOf('/') + 1);
  const paramMap: any = {
    '/': filename,
    _: filename?.split('?')?.[0] ?? '',
  };
  const queryString: string = url.includes('?') ? url.split('?')[1] : url;
  const queryStringList: string[] = queryString.split('#');
  paramMap['#'] = queryStringList?.[1] ?? '';
  if (queryString.length !== 0) {
    const parts: any[] = queryStringList[0].split('&');
    for (let i = 0; i < parts.length; i++) {
      const component: any[] = parts[i].split('=');
      const paramKey = safeDecodeURI(component[0]);
      const paramVal = safeDecodeURI(component[1]);
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
 * @category Request-请求相关
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
 * @category Request-请求相关
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
 * @returns
 * @category Request-请求相关
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
 * @category Request-请求相关
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
 * @category xAjax-请求封装
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
 * xFetch('get', 'https://api.uomg.com/api/rand.qinghua?x=1', { params: { format: 'json', hello: 456 } }).then(data => console.log(data)); /// fetchXPromise
 * xFetch('POST', 'https://test.cn', { headers: { contentType: 'application/json' }, data: { test: 123 } }).catch(error => console.log(error)); /// fetchXPromise
 * @param method Http Method
 * @param url 地址/链接
 * @param options 请求配置
 * @returns
 * @category xFetch-封装
 */
export function xFetch(
  method: string | HttpMethod,
  url: string,
  options?: {
    data?: any;
    params?: any;
    raw?: boolean;
    isFile?: boolean;
    callback?: any;
    headers?: any;
  },
): Promise<any> {
  if (options?.params) {
    url = `${url}${url.includes('?') ? '&' : '?'}${new URLSearchParams(options.params).toString()}`;
  }
  if (options?.data) {
    options.data = !options?.raw && isObj(options.data) ? JSON.stringify(options.data) : options.data;
  }
  const headers = options?.headers ?? {};
  const contentType =
    headers.contenttype ??
    headers.contentType ??
    headers.ContentType ??
    headers.Contenttype ??
    headers['content-type'] ??
    headers['content-Type'] ??
    headers?.['Content-Type'] ??
    headers?.['Content-type'];
  return fetch(url, {
    // 文件请求相关处理时需注意别写 content-type
    headers: {
      ...headers,
      ...(!contentType || options?.isFile
        ? {}
        : {
            'content-type': contentType ?? 'application/x-www-form-urlencoded;charset=UTF-8',
            // ?? 'application/json;charset=UTF-8',
          }),
    },
    method: method,
    body: options?.data,
  })
    .then((res: any) => {
      const type = res.headers.get('content-type');
      if (type?.includes('json')) {
        return res.json();
      } else if (type?.includes('text')) {
        return res.text();
      } else if (type?.includes('form')) {
        return res.formData();
      } else if (type?.includes('video') || type?.includes('image')) {
        return res.blob();
      } else if (type?.includes('arrayBuffer')) {
        return res.arrayBuffer();
      } else {
        try {
          if (options?.callback) {
            return options?.callback(res);
          }
          return res;
        } catch (e) {
          return res;
        }
      }
    })
    .catch((error: any) => {
      return Promise.reject(error);
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
 * @category Request-请求相关
 */
export function getContentType(fileType: FileType | string): string {
  // @ts-ignore
  return CONTENT_TYPES[`${fileType}`.toLowerCase()] ?? 'application/octet-stream';
}

/**
 * 安全编码 URI，遇到错误时返回原始字符串。
 * @example
 * safeEncodeURI('Hello World'); // 'Hello%20World'
 * safeEncodeURI('你好'); // '%E4%BD%A0%E5%A5%BD'
 * safeEncodeURI('https://example.com?param=1&param=2'); // 'https%3A%2F%2Fexample.com%3Fparam%3D1%26param%3D2'
 * safeEncodeURI('特殊字符 !@#'); // '%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6%20%21%40%23'
 * @param s 要编码的字符串。
 * @returns
 * @category Custom-转码
 */
export function safeEncodeURI(s: string): string {
  try {
    return encodeURIComponent(s);
  } catch (e) {
    console.warn(`Failed to encode URI component: ${s}`, e);
    return s;
  }
}

/**
 * 安全解码 URI，遇到错误时返回原始字符串。
 * @example
 * safeDecodeURI('Hello%20World'); // 'Hello World'
 * safeDecodeURI('%E4%BD%A0%E5%A5%BD'); // '你好'
 * safeDecodeURI('%E4%BD%A0%E5%A5'); // '%E4%BD%A0%E5%A5' （无效的 URI 片段）
 * safeDecodeURI('%'); // '%' （无效的 URI 片段）
 * @param s 要解码的 URI 。
 * @returns
 * @category Custom-转码
 */
export function safeDecodeURI(s: string): string {
  try {
    return decodeURIComponent(s);
  } catch (e) {
    console.warn(`Failed to decode URI component: ${s}`, e);
    return s;
  }
}

/**
 * 转换常用的查询参数，确保请求参数的一致性。
 * - 将值为 `ALL`（不区分大小写）转为空字符串或自定义空值。
 * - 去除字符串值的多余空格。
 * - 如果 `emptyValue` 参数存在，则将 `null` 或 `undefined` 值转换为 `emptyValue`，否则保留原值。
 * - 支持嵌套对象的递归转换。
 * @example
 * transferQueryParams({ status: 'ALL', user: '  John  ', id: null }, 'N/A');
 * /// { status: 'N/A', user: 'John', id: 'N/A' }
 * transferQueryParams({ status: 'ALL', user: '  John  ', id: null, list: [1, 2, 'All', null] });
 * /// { status: '', user: 'John', id: null, list: [1, 2] }
 * transferQueryParams({ status: 'ALL', user: '  John  ', id: null, dep: { a: 'all', id: undefined } }, '');
 * /// { status: '', user: 'John', id: '', dep: { a: '', id: '' } }
 * @param obj 查询参数对象
 * @param emptyValue 可选的空值填充值，若提供则将 `null` 和 `undefined` 替换为该值
 * @returns
 * @category Request-请求相关
 */
export function transferQueryParams(obj: Record<string, any>, emptyValue?: any): Record<string, any> {
  const result: Record<string, any> = {};

  for (const key in obj) {
    const value = obj[key];

    if (Array.isArray(value)) {
      result[key] = value.filter((i) => i != null && `${i}`.toUpperCase() !== 'ALL');
    } else if (typeof value === 'object' && value !== null) {
      result[key] = transferQueryParams(value, emptyValue);
    } else if (`${value}`.toUpperCase() === 'ALL') {
      result[key] = emptyValue !== undefined ? emptyValue : '';
    } else if (value === null || value === undefined) {
      result[key] = emptyValue !== undefined ? emptyValue : value;
    } else if (typeof value === 'string') {
      result[key] = value.trim();
    } else {
      result[key] = value;
    }
  }

  return result;
}
