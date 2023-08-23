/*
 * @Author: HxB
 * @Date: 2022-04-26 15:53:02
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-08-22 10:59:31
 * @Description: 表单相关
 * @FilePath: \js-xxx\src\Form\index.ts
 */
import { getType } from '@/Types';

/**
 * 对象转 FormData 格式
 * @example
 * formatFormData({a: 1, b: 2}); /// FormData
 * @param obj 源数据
 * @param hasBrackets 是否带括号
 * @param hasIndex 是否带 index
 * @returns
 */
export function formatFormData(obj: any, hasBrackets = false, hasIndex = false): FormData {
  const formData: FormData = new FormData();
  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {
      for (const arrIndex in obj[key]) {
        hasBrackets
          ? formData.append(hasIndex ? `${key}[]` : `${key}[${arrIndex}]`, obj[key][arrIndex])
          : formData.append(key, obj[key][arrIndex]);
      }
    } else {
      // 与 Request 分类中的 qsStringify 不同，此处不关心对象结构，省事且适用方便后端解析的情况。
      formData.append(key, getType(obj[key]) == 'object' ? JSON.stringify(obj[key]) : obj[key]);
    }
  });
  return formData;
}

/**
 * 对象转 URLSearchParams 字符串
 * @example
 * formatURLSearchParams({a: 1, b: 2, c: [1, 2]}); /// a=1&b=2&c=1&c=2
 * formatURLSearchParams({a: 1, b: 2, c: [1, 2]}, true); /// a=1&b=2&c[]=1&c[]=2
 * formatURLSearchParams({a: 1, b: 2, c: [1, 2]}, true, true); /// a=1&b=2&c[0]=1&c[1]=2
 * @param obj 源数据
 * @param hasBrackets 是否带括号
 * @param hasIndex 是否带 index
 * @returns
 */
export function formatURLSearchParams(obj: any, hasBrackets = false, hasIndex = false): URLSearchParams {
  const queryString: URLSearchParams = new URLSearchParams();
  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {
      for (const arrIndex in obj[key]) {
        hasBrackets
          ? queryString.append(hasIndex ? `${key}[]` : `${key}[${arrIndex}]`, obj[key][arrIndex])
          : queryString.append(key, obj[key][arrIndex]);
      }
    } else {
      // 与 Request 分类中的 qsStringify 不同，此处不关心对象结构，省事且适用方便后端解析的情况。
      queryString.append(key, getType(obj[key]) == 'object' ? JSON.stringify(obj[key]) : obj[key]);
    }
  });
  return queryString;
}
