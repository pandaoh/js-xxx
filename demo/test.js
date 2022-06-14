/*
 * @Author: HxB
 * @Date: 2022-04-26 16:08:25
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-06-14 18:27:29
 * @Description: 测试文件
 * @FilePath: \js-xxx\demo\test.js
 */
const { base64Decode, base64Encode, mergeObj, getTimeAndStr, qsStringify } = require('../dist/index.js');
// import { base64Decode, base64Encode, mergeObj, getTimeAndStr, qsStringify } from '../dist/index.js';
// const { base64Decode, base64Encode, mergeObj, getTimeAndStr, qsStringify } = require('js-xxx');
// import { base64Decode, base64Encode, mergeObj, getTimeAndStr, qsStringify } from 'js-xxx';

const { Base64Decode, Base64Encode, md5, sha1, sha256, decrypt, encrypt } = require('../dist/index.js');

console.log(
  base64Encode('我是老A'),
  base64Decode(base64Encode('我是老A')),
  mergeObj({ name: 1, oldValue: 2 }, { name: 3, value: 4 }, ['name'], true),
  getTimeAndStr(),
  qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3], str: '1' }, { hasIndex: true })
);

let base64 = Base64Encode('我是老A');
console.log('base64加密', base64);
console.log('base64解密', Base64Decode(base64));
let base64Replace = Base64Encode('我是老A', true);
console.log('base64加密替换+/=', base64Replace);
console.log('base64替换+/=解密', Base64Decode(base64Replace));
let md5Str = md5('我是老A');
console.log('md5加密', md5Str);
let sha1Str = sha1('我是老A');
console.log('sha1加密', sha1Str);
let sha256Str = sha256('我是老A');
console.log('sha256加密', sha256Str);
let encryptStr = encrypt('我是老A');
console.log('加密', encryptStr);
console.log('解密', decrypt(encryptStr));
let encryptJSONStr = encrypt({ name: '我是老A' });
console.log('加密JSON', encryptJSONStr);
console.log('解密JSON', decrypt(encryptJSONStr, false));
console.log('解密JSON', decrypt(encryptJSONStr, true));
