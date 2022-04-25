/*
 * @Author: HxB
 * @Date: 2022-04-26 15:53:02
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-26 18:06:33
 * @Description: 表单相关
 * @FilePath: \js-xxx\src\Form\index.ts
 */

import { getType } from '@/Tools';

/**
 * 对象转 FormData
 * Example: `formatFormData({a: 1, b: 2}) => FormData`
 * @param obj 源数据
 * @returns
 */
export function formatFormData(obj: any): FormData {
  let formData: FormData = new FormData();
  for (let key in obj) {
    formData.append(key, getType(obj[key]) == 'object' ? JSON.stringify(obj[key]) : obj[key]);
  }
  return formData;
}
