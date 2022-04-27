/*
 * @Author: HxB
 * @Date: 2022-04-26 16:08:25
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-27 11:33:42
 * @Description: 测试文件
 * @FilePath: \js-xxx\demo\test.js
 */
const { base64Decode, base64Encode, mergeObj, getTimeAndStr, qsStringify } = require('../dist/index.js');
// import { base64Decode, base64Encode, mergeObj, getTimeAndStr, qsStringify } from '../dist/index.js';
// const { base64Decode, base64Encode, mergeObj, getTimeAndStr, qsStringify } = require('js-xxx');
// import { base64Decode, base64Encode, mergeObj, getTimeAndStr, qsStringify } from 'js-xxx';

console.log(
  base64Encode('我是老A'),
  base64Decode(base64Encode('我是老A')),
  mergeObj({ name: 1, oldValue: 2 }, { name: 3, value: 4 }, ['name'], true),
  getTimeAndStr(),
  qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3], str: '1' }, { hasIndex: true })
);
