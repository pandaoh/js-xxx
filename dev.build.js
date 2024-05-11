/*
 * @Author: HxB
 * @Date: 2024-05-11 11:04:49
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-05-11 16:57:11
 * @Description: 转化开发相关内容并导出
 * @FilePath: \js-xxx\dev.build.js
 */
const fs = require('fs');
const path = require('path');
const transferObj = require('./dev.config.js');

console.log('---转换 Dev 开始---');

let es6ModuleContent = '';

Object.keys(transferObj).forEach((i) => {
  const val = transferObj[i];
  const type = typeof val;
  if (val === undefined) {
    return;
  }
  console.log(`(${type}) export const ${i}`);
  es6ModuleContent += `\nexport const ${i} = ${type === 'function' ? val.toString() : JSON.stringify(val, null, 2)};\n`;
});

// 输出到新文件
const outputFolder = './src/Dev/';
const outputPath = path.join(outputFolder, 'index.ts');
fs.writeFileSync(outputPath, es6ModuleContent);

console.log('---转换 Dev 完成---');
