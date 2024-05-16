# 前端 JavaScript 常用函数/工具/方法库

## [文档(x.biugle.cn)](http://x.biugle.cn)

[![OSCS Status](https://www.oscs1024.com/platform/badge/pandaoh/js-xxx.svg?size=small)](https://www.oscs1024.com/project/pandaoh/js-xxx?ref=badge_small)

> 封装前端常用函数/方法/工具库，支持按需引入；无依赖和第三方库，无冗余代码，无需改动原代码结构；拆箱即用，简单便捷。

* [GitHub](https://github.com/pandaoh/js-xxx)
* [Npm](https://www.npmjs.com/package/js-xxx)
* [Docs-在线文档](https://pandaoh.github.io/js-xxx/html/) `已引入 (js-xxx)，可直接在控制台调试。`

## Install-安装

```bash
npm i js-xxx
```

## Use-使用

```javascript
// Es or Node
import { xFunctionName } from 'js-xxx';
const { xFunctionName } = require('js-xxx');
xFunctionName();

// Browser
<script src="/iife/index.min.js"></script>
$xxx.xFunctionName();
$xxx.formatDate(new Date(), 'mm-dd');

// 可参考 ./demo/test.js，示例如下。
import { showToast, md5, scrollToTop, formatDate, uuid } from 'js-xxx';
const { showToast, md5, scrollToTop, formatDate, uuid } = require('js-xxx');
formatDate(new Date(), 'yyyy-mm-dd hh:ii:ss');
```

## Docs-文档

* [Web 网页在线文档](https://pandaoh.github.io/js-xxx/html/)
* [Docs MarkDown-文档](https://github.com/pandaoh/js-xxx/blob/main/docs/README.md)
* [Docs MarkDown-文档镜像](https://gitee.com/doubleam/js-xxx/blob/main/docs/README.md)

## Others

* [Issue](https://github.com/pandaoh/js-xxx/issues)
* [Pull Request](https://github.com/pandaoh/js-xxx/pulls)
* [hxbpandaoh@163.com](mailto:hxbpandaoh@163.com)
* [Blog](http://a.biugle.cn)
* Leo He
