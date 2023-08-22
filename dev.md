# 开发指南

* 前端 JavaScript 常用函数/工具/方法库-([js-xxx](https://github.com/pandaoh/js-xxx))

> 开发这么久，受星恒大佬启发，也想着做一个纯函数库，开发时候按需引入，既不会影响项目结构，也不会影响打包后的代码，该用的函数函数反正都要写和用。

## 添加函数

* 在对应分类的文件夹下的 `index.ts` 文件中添加函数即可(注意：请参考原有函数规则，必须要有函数、参数解释与范例，且 `@example` 的内容需换行，也可以参考已存在的函数范例，一个 `Function` 写一个 `@example` 注释即可)。
* 统一使用 `export function functionName() {}` 导出函数，不要使用 `export const functionName = function() {}` 或者`箭头函数`，确保每次提交时 `src` 目录下的 `export function` 的数目与 `* @example` 的数目一致。
* `npm run build && npm run doc` or `npm run push:before`
* `npm run lint` 可进行代码检查
* `package.json` 中修改版本号 `push` 到 `publish` 分支即可发布新版本。

```javascript
/**
 * 注释说明
 * @link http://a.biugle.cn/参考或说明文档链接(可写可不写)
 * @example
 * demo('1'); // 'demo'
 * demo('test', 100); // 'demo'
 * @param a 参数 a
 * @param b 参数 b
 * @returns
 */
export function demo(a: string, b: number = 0): string {
  return 'demo';
}
```

## 创建分类

* 常用/共用常量导出请写到 `Data` 目录下，使用 `export const .` 导出，并使用 `@const` 说明用途。
* 创建分类文件夹后，请添加文件头说明此分类主要内容。(注意：批量导出时请勿使用路径别名，否则会导致声明文件路径失效。)
* 在 `src/index.ts` 中 `export * ...` 新分类的文件。
* `npm run build && npm run doc` or `npm run push:before`
* `package.json` 修改版本号 `push` 到 `publish` 分支即可发布新版本。

## 测试函数

* 可在 `demo` 文件夹中进行测试，但注意先 `npm run build`。

## Developers

### Leo He
### XingHeng Wu
### RuiHao Li

## Others

* [Issue](https://github.com/pandaoh/js-xxx/issues)
* [Pull Request](https://github.com/pandaoh/js-xxx/pulls)
* [hxbpandaoh@163.com](mailto:hxbpandaoh@163.com)
