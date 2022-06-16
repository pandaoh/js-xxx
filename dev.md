# 开发指南

> 开发这么久，受星恒大佬启发，也想着做一个纯函数库，开发时候按需引入，既不会影响项目结构，也不会影响打包后的代码，该用的方法函数反正都要写和用。

## 添加方法

* 在对应分类的文件夹下的 `index.ts` 文件中添加方法即可(注意：请参考原有方法规则，必须要有方法、参数解释与范例，且 Example 的内容需使用 \` 包起来，也可以参考原因的范例，一个 Function 写一个 Example 注释即可，多个示例代码时换行写入并都使用 \` 包起来即可。)。
* 统一使用 `export function functionName() {}` 导出方法，不要使用 `export const functionName = function() {}` 或者箭头函数，确保每次提交时 `export function` 的数目与 `* Example:` 的数目一致。
* `npm run build && npm run doc` or `npm run push:before`
* `package.json` 中修改版本号 `push` 到 `publish` 分支即可发布新版本。

## 创建分类

* 创建分类文件夹后，请添加文件头说明此分类主要内容。(注意：批量导出时请勿使用路径别名，否则会导致声明文件路径失效。)
* 在 `src/index.ts` 中 `export * ...` 新分类的文件。
* `npm run build && npm run doc` or `npm run push:before`
* `package.json` 修改版本号 `push` 到 `publish` 分支即可发布新版本。

## 测试函数

* 可在 `demo` 文件夹中进行测试，但注意先 `npm run build`。

## Developers

### Leo He
### RuiHao Li

## Others

* [Issue](https://github.com/pandaoh/js-xxx/issues)
* [Pull Request](https://github.com/pandaoh/js-xxx/pulls)
* [hxbpandaoh@163.com](mailto:hxbpandaoh@163.com)
