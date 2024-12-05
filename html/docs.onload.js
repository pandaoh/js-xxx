/*
 * @Author: HxB
 * @Date: 2023-08-25 17:08:31
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-08-25 18:42:01
 * @Description: 自定义文档执行脚本
 * @FilePath: \js-xxx\_docs.onload.js
 */

console.log(
  '%c ',
  `line-height:10px;padding:10px;background-image:url(${$xxx.ICONS['loading']});background-position:center;background-repeat:no-repeat;background-size:contain;`,
);
console.log(
  '%cLibrary%cWelcome to js-xxx!',
  'line-height:28px;padding:4px;background:#a1afc9;color:#000;font-size:16px;margin-right:15px',
  'color:#3fa9f5;line-height:28px;font-size:16px;',
);
console.log(
  '%cBlog%chttps://a.biugle.cn',
  'line-height:28px;padding:4px;background:#a1afc9;color:#000;font-size:16px;margin-right:15px',
  'color:#00bc12;line-height:28px;font-size:16px;',
);
console.log(
  '%cQQ%c1005760694',
  'line-height:28px;padding:4px;background:#a1afc9;color:#000;font-size:16px;margin-right:15px',
  'color:#ff9900;line-height:28px;font-size:16px;',
);
console.log(
  'https://www.npmjs.com/package/js-xxx',
  'https://github.com/pandaoh/js-xxx',
  'https://gitee.com/doubleam/js-xxx',
);
console.log($xxx);

try {
  document.querySelector('.tsd-navigation').ondblclick = () => {
    $xxx.Toast('F12');
  };
} catch (e) {
  console.log(e);
}
