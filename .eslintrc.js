/*
 * @Author: HxB
 * @Date: 2023-03-13 15:05:27
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-05-11 11:32:19
 * @Description: eslint 配置文件
 * @FilePath: \js-xxx\.eslintrc.js
 */
const { eslintRules } = require('./dev.config.js');

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
  rules: eslintRules(),
};
