/*
 * @Author: HxB
 * @Date: 2022-04-26 11:33:01
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-06-16 14:29:05
 * @Description: rollup 配置文件
 * @FilePath: \js-xxx\rollup.config.js
 */
import path from 'path';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import alias from '@rollup/plugin-alias';
import pkg from './package.json';

const getPath = (_path) => path.resolve(__dirname, _path);

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

/** @type {import('rollup').RollupOptions} */
const options = {
  input: getPath('src/index.ts'),
  output: [
    {
      file: getPath(pkg.iife),
      format: 'iife', // iife 支持 自执行函数, 可通过 `<script>` 标签加载
      name: '$xxx',
      plugins: [terser()]
    },
    {
      file: getPath(pkg.main),
      format: 'cjs', // lib 兼容 CommonJS Node 默认的模块规范, 可通过 Webpack 加载
      name: '$xxx',
      plugins: [terser()]
    },
    {
      file: getPath(pkg.module),
      format: 'es', // es es6模块 ES module 规范, 可用 Webpack, Rollup 加载
      name: '$xxx',
      plugins: [terser()]
    },
    {
      file: getPath(pkg.unpkg),
      format: 'umd', // dist 通用模块 IIFE, AMD[`amd`: 浏览器端的模块规范, 可通过 RequireJS 可加载], CJS
      name: '$xxx',
      plugins: [terser()]
    },
    {
      file: getPath(pkg['iife-source']),
      name: '$xxx',
      format: 'iife' // iife
    },
    {
      file: getPath(pkg['main-source']),
      name: '$xxx',
      format: 'cjs' // lib
    },
    {
      file: getPath(pkg['module-source']),
      name: '$xxx',
      format: 'es' // es
    },
    {
      file: getPath(pkg['unpkg-source']),
      name: '$xxx',
      format: 'umd' // dist
    }
  ],
  plugins: [
    resolve(extensions),
    commonjs(),
    typescript({ tsconfig: getPath('tsconfig.json'), extensions }),
    alias({
      entries: [{ find: '@', replacement: getPath('src') }]
    })
  ]
};

export default options;
