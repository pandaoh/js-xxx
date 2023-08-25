/*
 * @Author: HxB
 * @Date: 2023-08-25 17:08:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-08-25 18:38:17
 * @Description: 引入 js-xxx 到文档中
 * @FilePath: \js-xxx\_docs.build.js
 */
const fs = require('fs');

/**
 * 复制文件
 * @param {*} src
 * @param {*} target
 */
const copyFile = (src, target) => {
  if (fs.existsSync(target)) {
    console.log('目标文件已存在');
    return;
  }
  try {
    fs.writeFileSync(target, fs.readFileSync(src));
  } catch (e) {
    console.log({ 'copyFile error': e });
    try {
      fs.createReadStream(src).pipe(fs.createWriteStream(target)); // 大文件复制
    } catch (err) {
      console.log({ 'copyBigFile error': err });
    }
  }
};

copyFile('./iife/index.min.js', './html/js-xxx.min.js');

copyFile('./_docs.onload.js', './html/_docs.onload.js');

// 读取生成的 HTML 文件
const filePath = './html/index.html';
const html = fs.readFileSync(filePath, 'utf-8');

// 添加自定义的 JavaScript 文件引入
const scriptPath = './js-xxx.min.js';
const onloadPath = './_docs.onload.js';
const modifiedHtml = html.replace(
  '</body>',
  `\n<script src="${scriptPath}"></script>\n<script src="${onloadPath}"></script>\n</body>`,
);

// 将修改后的 HTML 文件保存
fs.writeFileSync(filePath, modifiedHtml, 'utf-8');
