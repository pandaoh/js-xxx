/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * @Author: HxB
 * @Date: 2022-04-26 16:08:25
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-05-11 11:44:32
 * @Description: 测试文件
 * @FilePath: \js-xxx\demo\test.js
 */

// node .\demo\test.js
// nodemon .\demo\test.js

const {
  base64Decode,
  base64Encode,
  md5,
  sha1,
  sha256,
  encrypt,
  decrypt,
  mergeObj,
  getTimeAndStr,
  qsStringify,
  getCryptoJS,
} = require('../dist/index.js');
// import { base64Decode, base64Encode, mergeObj, getTimeAndStr, qsStringify } from '../dist/index.js';
// const { base64Decode, base64Encode, mergeObj, getTimeAndStr, qsStringify } = require('js-xxx');
// import { base64Decode, base64Encode, mergeObj, getTimeAndStr, qsStringify } from 'js-xxx';

console.log(
  base64Encode('我是老A'),
  base64Decode(base64Encode('我是老A')),
  mergeObj({ name: 1, oldValue: 2 }, { name: 3, value: 4 }, ['name'], true),
  getTimeAndStr(),
  qsStringify({ start: 0, count: 20, obj: { a: 1 }, arr: [1, 2, 3], str: '1' }, { hasIndex: true }),
);

let base64 = base64Encode('我是老A');
console.log('base64加密', base64);
console.log('base64解密', base64Decode(base64));
let base64Replace = base64Encode('我是老A', true);
console.log('base64加密替换+/=', base64Replace);
console.log('base64替换+/=解密', base64Decode(base64Replace));
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
console.log('===========================================================');
console.log('getCryptoJS', getCryptoJS().MD5('我是老A').toString());
let customEncryptStr = encrypt('我是老A', '1234567887654321', '1234567887654321');
console.log('自定义加密', customEncryptStr);
console.log('自定义解密', decrypt(customEncryptStr, false, '1234567887654321', '1234567887654321'));
