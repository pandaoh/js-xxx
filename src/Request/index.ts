/*
 * @Author: HxB
 * @Date: 2022-04-26 14:15:37
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-09-02 10:17:54
 * @Description: 请求相关方法
 * @FilePath: \js-xxx\src\Request\index.ts
 */
import { getType } from '@/Types';

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
 * Example: `getBaseURL('https://test.com/index?name=leo&org=biugle') => 'https://test.com/index'`
 * @param url 当前 URL
 * @returns
 */
export function getBaseURL(url: string): string {
  return url.replace(/[?#].*$/, '');
}
