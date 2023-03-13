/**
 * 字符串转实体字符
 * Example: `str2html('<>&"') => '&lt;&gt;&amp;&quot;'`
 * @param str 字符串
 * @returns
 */
export declare function str2html(str: string): string;
/**
 * 实体字符转字符串
 * Example: `html2str('&lt;&gt;&amp;&quot;') => '<>&"'`
 * @param value 实体字符串
 * @returns
 */
export declare function html2str(value: string): string | null;
/**
 * 插入某元素到指定 Element 之后
 * Example: `insertAfter(document.getElementById('a'), document.getElementById('b'));`
 * @param newElement 某元素
 * @param targetElement 指定元素
 * @returns
 */
export declare function insertAfter(newElement: any, targetElement: any): void;
/**
 * 阻止冒泡事件&阻止默认行为&阻止事件捕获
 * Example: `offDefaultEvent(event) => 阻止冒泡事件&阻止默认行为&阻止事件捕获`
 * @param event 事件
 * @returns
 */
export declare function offDefaultEvent(event: any): boolean;
/**
 * 添加指定元素复制事件
 * Example: `copyContent(document.getElementById('copy')) => 复制 #copy 的内容成功`
 * @param targetDom 目标内容元素
 * @param addMsg 复制后增加内容
 * @returns
 */
export declare function copyContent(targetDom: any, addMsg?: any): any;
/**
 * 滚动到顶部
 * 平滑滚动 css：`scroll-behavior: smooth;`
 * Example: `scrollToTop('body') => 滚动到顶部`
 * @param elementSelector 指定元素选择器
 * @param to ('start'|'end')[default: 'start']
 * @returns
 */
export declare function scrollToTop(elementSelector: string, to?: 'start' | 'end'): void;
/**
 * 滚动到底部
 * 平滑滚动 css：`scroll-behavior: smooth;`
 * Example: `scrollToBottom('body') => 滚动到底部`
 * @param elementSelector 指定元素选择器
 * @returns
 */
export declare function scrollToBottom(elementSelector: string): void;
/**
 * Y 轴滚动到指定位置
 * Example:
 *  `scrollYTo(0) => 滚动到顶部`
 *  `scrollYTo('start', null, document.documentElement) => 滚动到顶部`
 *  `scrollYTo('end', (percent) => console.log(percent), document.querySelector('body')) => 滚动到底部`
 * @param targetVal 'start' | 'end' | number
 * @param callback 回调
 * @param dom 元素对象
 * @returns
 */
export declare function scrollYTo(targetVal: 'start' | 'end' | number, callback: any, dom?: any): void;
/**
 * X 轴滚动到指定位置
 * Example:
 *  `scrollXTo(0) => 滚动到左侧`
 *  `scrollXTo('start', null, document.documentElement) => 滚动到左侧`
 *  `scrollXTo('end', (percent) => console.log(percent), document.querySelector('body')) => 滚动到右侧`
 * @param targetVal 'start' | 'end' | number
 * @param callback 回调
 * @param dom 元素对象
 * @returns
 */
export declare function scrollXTo(targetVal: 'start' | 'end' | number, callback: any, dom?: any): void;
/**
 * 获取滚动条百分比
 * Example: `getScrollPercent(document.documentElement, 'Y') => 0.581134549876`
 * @param direction X/Y 轴的进度条
 * @param dom 元素
 * @returns
 */
export declare function getScrollPercent(direction?: 'X' | 'Y', dom?: any): number;
/**
 * 找元素的第 n 级父元素
 * Example: `findParents(document.getElementById('test'), 3) => #test 的第三个父元素`
 * @param element 指定元素
 * @param n 第几个
 * @returns
 */
export declare function findParents(element: any, n: number): any;
/**
 * 找元素的所有子元素，解决浏览器兼容问题。
 * Example: `findChildren(document.getElementById('test')) => #test 的所有子元素数组`
 * @param element 指定元素
 * @returns
 */
export declare function findChildren(element: any): any[];
/**
 * 获取窗口尺寸
 * Example: `getViewportSize() => { width: 1280, height: 649 }`
 * @returns
 */
export declare function getViewportSize(): {
    w: number;
    h: number;
};
/**
 * 获取任一元素的 style 任意属性
 * Example: `getStyle(document.getElementById('test'), 'width') => #test 的 width 属性`
 * @param element 指定元素
 * @param name 属性名称
 * @returns
 */
export declare function getStyleByName(element: any, name: any): any;
/**
 * 添加 link 标签
 * Example: `appendLink('favicon', 'favicon') => 添加一个 link 标签`
 * @param linkUrl 链接地址
 * @param rel 类型
 * @returns
 */
export declare function appendLink(linkUrl: string, rel?: string): HTMLLinkElement;
/**
 * 添加 script 标签
 * Example: `appendScript('./test.js') => 添加一个 script 标签`
 * @param scriptUrl 脚本地址
 * @param async 是否异步
 * @param defer 是否延迟加载
 * @returns
 */
export declare function appendScript(scriptUrl: string, async?: boolean, defer?: boolean): HTMLScriptElement;
/**
 * 下载一个链接文档
 * Example: `download('https://xxx.com/xxx', 'xxx') => 下载后端返回的流`
 * @param link 链接
 * @param name 文件名称(可选，默认以链接最好一段作为名称，填写时可不带后缀自动识别，写了后缀会以写的后缀为准。)
 * @returns
 */
export declare function download(link: string, name: string): void;
/**
 * 在浏览器中自定义下载一些内容
 * Example:
 * `downloadContent('test.txt', 'test txt content') => 下载返回的流`
 * `downloadContent('test.json', JSON.stringify({content: 'test json'})) => 下载返回的流`
 * @param name 文件名称(需带后缀)，默认 txt 。
 * @param content 内容 BlobPart | any
 * @returns
 */
export declare function downloadContent(name: string, content: any): void;
/**
 * 给元素设置 marquee 内容滚动效果，支持来回滚动，正常跑马灯，无限无缝滚动。
 * 一般来说设置两层，滚动的区间就是父元素的大小。
 * 若 #demo 高度小于 container，除非 loopType 设置 infinite，否则不会有动画。
 * `<div class="demo-container"><div id="#demo">...span.items...</div></div>`
 * Example:
 * `marquee('#demo') => 默认横向正常滚动(loopType=normal)`
 * `marquee('.demo-y', {direction: 'Y', loopType: 'infinite', speed: 3}) => Y 轴无限无缝滚动，speed > 0 越小速度越快。`
 * `marquee('.demo-x', {direction: 'X', loopType: 'origin', speed: 3, style: 'animation-delay:2s;', parentStyle: 'color:red;'}) => X 轴无限来回滚动`
 * @param selector
 * @param options
 * @returns
 */
export declare function marquee(selector: string, options?: {
    direction?: 'X' | 'Y';
    loopType?: 'infinite' | 'normal' | 'origin';
    speed?: number;
    style?: string;
    parentStyle?: string;
}): void;
//# sourceMappingURL=index.d.ts.map