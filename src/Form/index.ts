/*
 * @Author: HxB
 * @Date: 2022-04-26 15:53:02
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-08-27 10:52:09
 * @Description: 表单相关
 * @FilePath: \js-xxx\src\Form\index.ts
 */
import { getType } from '@/Types';

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
export function toFormData(obj: any, hasBrackets = false, hasIndex = false): FormData {
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
export function formDataToObject(formData: any) {
  if (!(formData instanceof FormData)) {
    throw new Error('The provided argument is not an instance of FormData.');
  }

  const result: any = {};
  try {
    formData.forEach((value, key) => {
      if (!value) return; // Skip empty or null values

      // eslint-disable-next-line no-prototype-builtins
      if (result?.hasOwnProperty(key)) {
        // If the key already exists and is an array, push the new value
        if (Array.isArray(result[key])) {
          result[key].push(value);
        } else {
          // If the key exists but is not an array, convert it to an array
          result[key] = [result[key], value];
        }
      } else {
        // If the key does not exist, set it directly
        result[key] = value;
      }
    });
  } catch (e) {
    return {};
  }
  return result;
}

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
export function toQueryString(obj: any, hasBrackets = false, hasIndex = false): URLSearchParams {
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
export function useStateData(initialData: any) {
  let data = initialData;

  /**
   * 设置数据
   * @param value 新的数据
   */
  function setData(value: any) {
    data = value;
    return data;
  }

  /**
   * 重置数据为初始值
   */
  function resetData() {
    data = initialData;
    return data;
  }

  /**
   * 获取数据
   */
  function getData() {
    return data;
  }

  return [getData, setData, resetData];
}
