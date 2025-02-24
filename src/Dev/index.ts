/* eslint-disable */
// @ts-nocheck

export const prettierRules = (rules = {}) => ({
  printWidth: 120, // 最大行宽
  proseWrap: 'never', // 不要换行
  semi: true, // 末尾是否要分号
  singleQuote: true, // 单引号
  jsxSingleQuote: false, // 在 JSX 中使用单引号而不是双引号。
  bracketSpacing: true, // 在对象括号之间增加空格
  bracketSameLine: false, // 将多行 HTML（HTML 、 JSX 、 Vue 、 Angular）元素放在最后一行的末尾，而不是单独放在下一行。
  arrowParens: 'always', // 必须包含箭头函数的括号，而不是 avoid 。
  insertPragma: false, // 是否插入已经被格式化的标识
  tabWidth: 2, // 缩进空格数
  useTabs: false, // 是否使用 tab 缩进
  endOfLine: 'lf', // 行尾换行符
  trailingComma: 'all', // 尽可能使用尾随逗号，结尾处不加逗号 none 。
  htmlWhitespaceSensitivity: 'ignore', // 忽略 '>' 下落问题
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  quoteProps: 'as-needed', // 对象的 key 仅在必要时用引号
  ...(rules ?? {}),
});

export const eslintRules = (skipWords = [], rules = {}) => ({
  'zob/comment': 'error', // 中英文空格间距 找英文符号正则 ([\u4e00-\u9fa5]\s*[!@#$%^&*_+=;:'"{\[\]},.\/\\`\(\)])
  '@typescript-eslint/ban-ts-comment': 'off', // 允许使用 ts 注释
  'no-useless-escape': 'warn', // 非必要的转义符号，允许但提示。
  'prettier/prettier': [
    'error',
    {
      // trailingComma: 'all',
      // arrowParens: 'always',
      // htmlWhitespaceSensitivity: 'ignore',
    },
    { usePrettierrc: true },
  ], // prettier 相关的规则必须遵守
  'no-undef': ['error'], // 禁止未声明变量的引用
  'spaced-comment': ['error', 'always'], // 注释开始后，此规则将强制间距的一致性 // 或 /*。
  'space-before-blocks': ['error', 'always'], // 块必须至少有一个先前的空格
  'no-multiple-empty-lines': ['error', { max: 5 }], // 最大空行数量
  'no-mixed-spaces-and-tabs': ['error', false], // 不允许使用混合空格和制表符进行缩进
  'comma-dangle': ['error', 'only-multiline'], // 多行时才可以使用尾随逗号
  indent: ['error', 2, { SwitchCase: 1 }], // 强制执行一致的缩进样式
  'linebreak-style': ['error', 'unix'], // 强制执行统一的行结尾 lf
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
  'max-statements': ['error', 100], // 一个方法限制行数最大 100 行
  'spellcheck/spell-checker': [
    // 拼写检查警告
    'warn',
    {
      comments: false, // 注释也要检查
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
        'biugle',
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
        'dayjs',
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
        'multipart',
        'contextmenu',
        'loadend',
        'callee',
        'slugify',
        'ciphertext',
        'urlencoded',
        'cancelable',
        'ascii',
        'unicode',
        'rollup',
        'axios',
        'redux',
        'unlink',
        'macos',
        'submenu',
        'nodemon',
        'hhiiss',
        'hhmmss',
        'hhmmdd',
        'whitesmoke',
        'esbuild',
        'commonjs',
        'preset',
        'presets',
        'browsers',
        'iframe',
        'contenttype',
        'immer',
        'ahooks',
        'devtool',
        'devtools',
        'register',
        'unregister',
        'maximize',
        'unmaximize',
        'unminimize',
        'minimize',
        'localhost',
        'uninstall',
        'unhandled',
        'unhandledrejection',
        ...(skipWords ?? []),
      ],
      skipIfMatch: [
        // http url
        'http://[^s]*',
        // Auxiliary werbs
        // see: https://github.com/aotaduy/eslint-plugin-spellcheck/issues/7
        // eslint-disable-next-line quotes
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
  ...(rules ?? {}),
});

export const sortJSON = (obj) => {
  // 去重并获取对象的键数组
  const keys = Object.keys(obj);

  // 按键的首字符进行排序
  const sortedKeys = keys.sort((a, b) => {
    const aKey = a[0];
    const bKey = b[0];
    return aKey.localeCompare(bKey);
  });

  // 构建分类和排序后的对象
  const sortedAndGroupedObject = sortedKeys.reduce((result, key) => {
    const firstChar = key[0];
    if (!result[firstChar]) {
      result[firstChar] = [];
    }
    result[firstChar].push(key);
    return result;
  }, {});

  // 在每个分类中按键的长度进行排序
  for (const group in sortedAndGroupedObject) {
    sortedAndGroupedObject[group].sort((a, b) => a.length - b.length);
  }

  // 拼接分类后的键数组
  const finalKeys = Object.values(sortedAndGroupedObject).flat();

  // 构建排序后的对象
  const sortedObject = finalKeys.reduce((result, key) => {
    result[key] = obj[key];
    return result;
  }, {});

  // 转换为 JSON 字符串并输出
  const jsonString = JSON.stringify(sortedObject);
  return jsonString;
};
