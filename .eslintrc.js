/*
 * @Author: HxB
 * @Date: 2023-03-13 15:05:27
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-03-14 11:11:50
 * @Description: eslint 配置文件
 * @FilePath: \js-xxx\.eslintrc.js
 */
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['prettier', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint', 'spellcheck', 'import', 'zob'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    'prettier/prettier': 'error',
    'no-useless-escape': 'warn',
    'no-undef': ['error'], // 禁止未声明变量的引用
    'spaced-comment': ['error', 'always'], // 注释开始后，此规则将强制间距的一致性 // 或 /*。
    'space-before-blocks': ['error', 'always'], // 块必须至少有一个先前的空格
    'no-multiple-empty-lines': ['error', { max: 5 }], // 最大空行数量
    'no-mixed-spaces-and-tabs': ['error', false], // 不允许使用混合空格和制表符进行缩进
    'comma-dangle': ['error', 'only-multiline'], // 多行时才可以使用尾随逗号
    indent: ['error', 2, { SwitchCase: 1 }], // 强制执行一致的缩进样式
    'linebreak-style': ['error', 'windows'], // 强制执行统一的行结尾 CRLF
    quotes: ['error', 'single'], // 单引号
    semi: ['error', 'always'], // 在语句结尾需要分号
    // 'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }], // @typescript-eslint/no-unused-vars
    '@typescript-eslint/no-explicit-any': ['off'], // 允许使用 any 类型，但是我们不要滥用，允许使用是为了不给开发设限，但是该定义的还是要做的。
    'no-irregular-whitespace': [
      'error',
      { skipStrings: true, skipComments: true, skipRegExps: true, skipTemplates: true },
    ], // 禁止使用无效或不规则的空格，字符串等特殊情况跳过。
    'no-multi-spaces': ['error', { ignoreEOLComments: true }], // 禁止在某些表达式，函数周围使用多个空格，行尾注释除外。
    'no-trailing-spaces': ['error', { skipBlankLines: false }], // 禁止行尾添加尾随空白，空行也是一样。
    'brace-style': ['error', '1tbs', { allowSingleLine: false }], // 强制执行一个真正的大括号风格，括号必须跟在块后。
    'key-spacing': ['warn', { beforeColon: false, afterColon: true }], // 对象 key 与冒号之间不允许使用空格，值与冒号间必须使用空格。
    'object-curly-spacing': ['error', 'always'], // 需要大括号内的空格，比如解构赋值，导入导出。
    'array-bracket-spacing': ['error', 'never'], // 数组括号内强制实现一致的间距空格
    'max-lines': ['error', 800], // 文件限制行数最大 800 行
    'max-statements': ['error', 100], // 一个函数限制行数最大 100 行
    'spellcheck/spell-checker': [
      // 拼写检查警告
      'warn',
      {
        comments: true, // 注释也要检查
        strings: true,
        identifiers: true,
        lang: 'en_US',
        skipWords: [
          // npm i modules-words // 常用词库
          'javascript',
          'debounce',
          'pathname',
          'minify',
          'charset',
          'unmount',
          'poweroff',
          'resize',
          'linux',
          'darwin',
          'resizable',
          'renderer',
          'unordered',
          'dropdown',
          'checkbox',
          'tooltip',
          'namespaced',
          'echarts',
          'onopen',
          'formatter',
          'xlocation',
          'xcall',
          'utils',
          'cordova',
          'ionics',
          'lodash',
          'splashscreen',
          'uglify',
          'jsonp',
          'async',
          'bcrypt',
          'werbs',
          'navbar',
          'popover',
          'substr',
          'zindex',
          'viewport',
          'validator',
          'webserver',
          'whitelist',
          'runtime',
          'proto',
          'popup',
          'polyfill',
          'preload',
          'mixin',
          'middleware',
          'lifecycle',
          'linter',
          'hostname',
          'dirname',
          'autocomplete',
          'sourcemap',
          'dicts',
          'undef',
          'asyncfunction',
          'xxxxx',
          'keydown',
          'keyup',
          'keypress',
          'webkit',
          'uint8',
          'radix',
          'storage',
          'favicon',
          'compat',
          'keyframes',
          'padlen',
          'tring',
          'xhtml',
          'xmind',
          'decrypt',
          'decrypted',
          'str2html',
          'html2str',
          'builtins',
          'arr2str',
          'multipart',
          'contextmenu',
          'grayscale',
          'loadend',
          'callee',
          'slugify',
          'unicode2str',
          'str2unicode',
          'ciphertext',
          'urlencoded',
          'cancelable',
          'renotify',
          'generatorfunction',
          'ascii',
          'unicode',
          'torage',
          'xxxxxx',
        ],
        skipIfMatch: [
          // http url
          'http://[^s]*',
          // Auxiliary werbs
          // see: https://github.com/aotaduy/eslint-plugin-spellcheck/issues/7
          "(\\s|^)\\w+'t(\\s|$)",
          // ordinals
          // https://github.com/aotaduy/eslint-plugin-spellcheck/issues/8
          '(\\s|^|\\w+)\\d+(st|nd|rd|th)(\\s|[A-Z][a-zA-Z]+|$)',
          // pre/post prefixes both in kebab case and camel case
          '(\\s|^)(pre|post)([-\\w]|[A-Z])[a-zA-Z]+(\\s|$)',
          // xml tags
          '<(?:/)?[\\w-]+>',
          // cryptographic octal hashes
          '^[0-9a-f]{5,999}$',
          // hex colors
          '^#[0-9a-f]{3,6}$',
          // For MIME Types
          '^[-\\w]+/[-\\w\\.]+$',
        ],
        skipWordIfMatch: [
          '^foobar.*$', // words that begin with foobar will not be checked
        ],
        minLength: 5, // >=5 个字符以上才监测
      },
    ],
    'import/first': ['error'], // 导入必须在最前面
    'import/exports-last': ['error'], // 导出必须在最后面
    'import/newline-after-import': ['error'], // 导入后必须留出空行
    'import/no-duplicates': ['error'], // 同一个文件的导入必须写在一行
    'import/order': ['error', { 'newlines-between': 'never' }], // 导入排序
    'zob/comment': 'error', // 中英文空格间距 搜索中找英文符号正则 ([\u4e00-\u9fa5]\s*[!@#$%^&*_+=;:'"{\[\]},.\/\\`\(\)])
  },
};
