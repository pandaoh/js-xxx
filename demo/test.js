/*
 * @Author: HxB
 * @Date: 2022-04-26 16:08:25
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-04-27 11:22:07
 * @Description: 测试文件
 * @FilePath: \js-xxx\demo\test.js
 */
const { base64Decode, base64Encode, mergeObj } = require('../dist/index.js');
// import { base64Decode, base64Encode } from '../dist/index.js';
// const { base64Decode, base64Encode } = require('js-xxx');
// import { base64Decode, base64Encode } from 'js-xxx';

console.log(
  base64Encode('我是老A'),
  base64Decode(base64Encode('我是老A')),
  mergeObj({ name: 1, oldValue: 2 }, { name: 3, value: 4 }, ['name'], true)
);
