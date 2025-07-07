/*
 * @Author: HxB
 * @Date: 2022-04-26 15:53:02
 * @LastEditors: DoubleAm
 * @LastEditTime: 2025-07-07 15:17:27
 * @Description: 表单相关
 * @FilePath: /js-xxx/src/Form/index.ts
 */
import { getType } from '@/Types';

export interface URLParamsOptions {
  defaultParams?: Record<string, string>;
  location?: Location | URL;
}

export interface URLParamsReturn {
  resetParams: (scope?: 'controlled' | 'all') => URLSearchParams;
  setParams: (key: string | Record<string, any>, value?: any) => URLSearchParams;
  getParams: (key?: string) => any;
  deleteParams: (key?: string | 'all') => URLSearchParams;
  setArrayParams: (key: string, values: any[]) => URLSearchParams;
  subscribe: (callback: (params: URLSearchParams, url: string) => void) => () => void;
  searchParams: URLSearchParams;
  controlledKeys: string[];
}

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
 * @param formData The FormData object to convert
 * @example
 * const formData = new FormData();
 * formData.append('name', 'John Doe');
 * formData.append('email', 'john.doe@demo.com');
 * formData.append('hobbies', 'reading');
 * formData.append('hobbies', 'coding');
 * const result = formDataToObject(formData);
 * console.log(result);
 * /// { name: 'John Doe', email: 'john.doe@demo.com', hobbies: ['reading', 'coding'] }
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

/**
 * URL 参数管理
 * @example
 * const { resetParams, setParams, getParams, deleteParams, setArrayParams, subscribe, searchParams, controlledKeys } = useURLParams({
 *   defaultParams: { a: '1', b: '2' },
 *   location: window.location,
 * });
 * // 设置参数
 * setParams('a', '3'); // 设置单个参数
 * setParams({ b: '4', c: '5' }); // 设置多个参数
 * // 获取参数
 * console.log(searchParams.toString()); // 获取当前查询参数字符串
 * const a = getParams('a'); // 获取单个参数
 * const allParams = getParams(); // 获取所有参数
 * // 删除参数
 * deleteParams('all'); // 删除所有参数
 * deleteParams(); // 删除所有受控参数
 * deleteParams('b'); // 删除单个参数
 * // 设置数组参数
 * setArrayParams('tags', ['tag1', 'tag2', 'tag3']); // 设置数组参数
 * // 订阅参数变化
 * const unsubscribe = subscribe((params, url) => {
 *   console.log('参数变化:', params.toString(), '新 URL:', url);
 * });
 * // 重置参数
 * resetParams('all'); // 重置为默认参数，包括非受控参数
 * resetParams(); // 重置为默认参数
 * // 获取受控参数键名集合
 * console.log(controlledKeys); // 获取受控参数键名集合
 * @param options 配置选项
 * @returns
 * @category URLParams-URL 参数管理
 */
export function useURLParams({
  defaultParams = {},
  location = typeof window !== 'undefined' && window.location ? window.location : new URL('http://localhost'),
}: URLParamsOptions = {}): URLParamsReturn {
  // 受控参数键名集合
  const controlledKeys = new Set(Object.keys(defaultParams));

  // 单例状态：当前查询参数
  let searchParams = new URLSearchParams(location.search);

  // 订阅者列表
  const subscribers = new Set<(params: URLSearchParams, url: string) => void>();

  /**
   * 通知订阅者
   * @param params 新查询参数
   */
  const notifySubscribers = (params: URLSearchParams) => {
    const newUrl = `${location.pathname}?${params.toString()}${location.hash || ''}`;
    subscribers.forEach((callback) => callback(params, newUrl));
  };

  /**
   * 订阅参数变化
   * @param callback 回调函数
   */
  const subscribe = (callback: (params: URLSearchParams, url: string) => void) => {
    if (typeof callback !== 'function') throw new Error('callback must be a function!');
    subscribers.add(callback);
    return () => subscribers.delete(callback);
  };

  /**
   * 内部更新参数
   * @param changes 参数变更对象
   * @param scope 操作范围
   */
  const updateParams = (changes: Record<string, any>, scope: 'controlled' | 'all' = 'controlled') => {
    if (typeof changes !== 'object' || changes === null) throw new Error('changes must be an object!');
    const newParams = new URLSearchParams(searchParams);
    Object.entries(changes).forEach(([key, value]) => {
      if (typeof key !== 'string' || key === '') return;
      if (value == null) {
        newParams.delete(key);
      } else {
        newParams.set(key, String(value));
      }
    });
    if (scope === 'all') {
      for (const key of newParams.keys()) {
        if (!controlledKeys.has(key) && !(key in changes)) newParams.delete(key);
      }
    }
    return newParams;
  };

  /**
   * 重置参数为默认值
   * @param scope 重置范围
   */
  const resetParams = (scope: 'controlled' | 'all' = 'controlled') => {
    const newParams = updateParams(defaultParams, scope);
    searchParams = newParams;
    notifySubscribers(newParams);
    return newParams;
  };

  /**
   * 设置参数
   * @param key 参数键名或参数对象
   * @param value 参数值（当 key 为字符串时需要）
   */
  const setParams = (key: string | Record<string, any>, value?: any) => {
    const changes = typeof key === 'object' ? key : { [key]: value };
    const newParams = updateParams(changes);
    searchParams = newParams;
    notifySubscribers(newParams);
    return newParams;
  };

  /**
   * 获取参数值
   * @param key 参数键名
   */
  const getParams = (key?: string): any => {
    if (key) {
      if (typeof key !== 'string') throw new Error('key must be a string!');
      return searchParams.has(key) ? searchParams.get(key) : defaultParams[key] ?? null;
    }
    return Array.from(controlledKeys).reduce((result, k) => {
      result[k] = searchParams.has(k) ? searchParams.get(k) : defaultParams[k] ?? null;
      return result;
    }, {} as any);
  };

  /**
   * 删除参数
   * @param key 要删除的参数键名或 'all'
   */
  const deleteParams = (key?: string | 'all') => {
    if (key === 'all') {
      searchParams = new URLSearchParams();
      notifySubscribers(searchParams);
      return searchParams;
    }
    if (typeof key === 'string') {
      const newParams = updateParams({ [key]: undefined });
      searchParams = newParams;
      notifySubscribers(newParams);
      return newParams;
    }
    const resetValues = Array.from(controlledKeys).reduce((obj, k) => ({ ...obj, [k]: undefined }), {});
    const newParams = updateParams(resetValues);
    searchParams = newParams;
    notifySubscribers(newParams);
    return newParams;
  };

  /**
   * 设置数组参数
   * @param key 参数键
   * @param values 参数值数组
   */
  const setArrayParams = (key: string, values: any[]) => {
    if (typeof key !== 'string' || key === '') throw new Error('key must be a non-empty string!');
    if (!Array.isArray(values)) throw new Error('values must be an array!');
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(key);
    values.forEach((value) => newParams.append(key, String(value)));
    searchParams = newParams;
    notifySubscribers(newParams);
    return newParams;
  };

  // 初始化：仅更新受控参数，保留其他参数
  let hasChanges = false;
  Object.entries(defaultParams).forEach(([key, value]) => {
    if (!searchParams.has(key)) {
      searchParams.set(key, String(value));
      hasChanges = true;
    }
  });
  if (hasChanges) {
    notifySubscribers(searchParams);
  }

  return {
    resetParams,
    setParams,
    getParams,
    deleteParams,
    setArrayParams,
    subscribe,
    get searchParams() {
      return new URLSearchParams(searchParams);
    },
    controlledKeys: Array.from(controlledKeys),
  };
}
