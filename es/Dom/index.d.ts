/**
 * 字符串转实体字符
 * @example
 * str2html('<>&"'); /// '&lt;&gt;&amp;&quot;'
 * @param str 字符串
 * @returns
 */
export declare function str2html(str: string): string;
/**
 * 实体字符转字符串
 * @example
 * html2str('&lt;&gt;&amp;&quot;'); /// '<>&"'
 * @param value 实体字符串
 * @returns
 */
export declare function html2str(value: string): string | null;
/**
 * 插入某元素到指定 Element 之后
 * @example
 * insertAfter(document.getElementById('a'), document.getElementById('b'));
 * @param newElement 某元素
 * @param targetElement 指定元素
 * @returns
 */
export declare function insertAfter(newElement: any, targetElement: any): void;
/**
 * 阻止冒泡事件&阻止默认行为&阻止事件捕获
 * @example
 * offDefaultEvent(event); /// 阻止冒泡事件&阻止默认行为&阻止事件捕获
 * @param event 事件
 * @returns
 */
export declare function offDefaultEvent(event: any): boolean;
/**
 * 添加指定元素复制事件
 * @example
 * copyContent(document.getElementById('copy')); /// 复制 #copy 的内容成功
 * @param targetDom 目标内容元素
 * @param addMsg 复制后增加内容
 * @returns
 */
export declare function copyContent(targetDom: any, addMsg?: any): any;
/**
 * 滚动到顶部
 * `平滑滚动 css：`scroll-behavior: smooth;`
 * @example
 * scrollToTop('body'); /// 滚动到顶部
 * @param elementSelector 指定元素选择器
 * @param to `('start'|'end')[default: 'start']`
 * @returns
 */
export declare function scrollToTop(elementSelector: string, to?: 'start' | 'end'): void;
/**
 * 滚动到底部
 * `平滑滚动 css：`scroll-behavior: smooth;`
 * @example
 * scrollToBottom('body'); /// 滚动到底部
 * @param elementSelector 指定元素选择器
 * @returns
 */
export declare function scrollToBottom(elementSelector: string): void;
/**
 * Y 轴滚动到指定位置
 * @example
 *  `scrollYTo(0); /// 滚动到顶部
 *  `scrollYTo('start', null, document.documentElement); /// 滚动到顶部
 *  `scrollYTo('end', (percent) => console.log(percent), document.querySelector('body')); /// 滚动到底部
 * @param targetVal 'start' | 'end' | number
 * @param callback 回调
 * @param dom 元素对象
 * @returns
 */
export declare function scrollYTo(targetVal: 'start' | 'end' | number, callback: any, dom?: any): void;
/**
 * X 轴滚动到指定位置
 * @example
 *  `scrollXTo(0); /// 滚动到左侧
 *  `scrollXTo('start', null, document.documentElement); /// 滚动到左侧
 *  `scrollXTo('end', (percent) => console.log(percent), document.querySelector('body')); /// 滚动到右侧
 * @param targetVal 'start' | 'end' | number
 * @param callback 回调
 * @param dom 元素对象
 * @returns
 */
export declare function scrollXTo(targetVal: 'start' | 'end' | number, callback: any, dom?: any): void;
/**
 * 获取滚动条百分比
 * @example
 * getScrollPercent(document.documentElement, 'Y'); /// 0.581134549876
 * @param direction X/Y 轴的进度条
 * @param dom 元素
 * @returns
 */
export declare function getScrollPercent(direction?: 'X' | 'Y', dom?: any): number;
/**
 * 找元素的第 n 级父元素
 * @example
 * findParents(document.getElementById('test'), 3); /// #test 的第三个父元素
 * @param element 指定元素
 * @param n 第几个
 * @returns
 */
export declare function findParents(element: any, n: number): any;
/**
 * 找元素的所有子元素，解决浏览器兼容问题。
 * @example
 * findChildren(document.getElementById('test')); /// #test 的所有子元素数组
 * @param element 指定元素
 * @returns
 */
export declare function findChildren(element: any): any[];
/**
 * 获取窗口尺寸
 * @example
 * getViewportSize(); /// { width: 1280, height: 649 }
 * @returns
 */
export declare function getViewportSize(): {
    w: number;
    h: number;
};
/**
 * 获取任一元素的 style 任意属性
 * @example
 * getStyle(document.getElementById('test'), 'width'); /// #test 的 width 属性
 * @param element 指定元素
 * @param name 属性名称
 * @returns
 */
export declare function getStyleByName(element: any, name: any): any;
/**
 * 添加 link 标签
 * @example
 * appendLink('favicon', 'favicon'); /// 添加一个 link 标签
 * @param linkUrl 链接地址
 * @param rel 类型
 * @returns
 */
export declare function appendLink(linkUrl: string, rel?: string): HTMLLinkElement;
/**
 * 添加 script 标签
 * @example
 * appendScript('./test.js'); /// 添加一个 script 标签
 * @param scriptUrl 脚本地址
 * @param async 是否异步
 * @param defer 是否延迟加载
 * @returns
 */
export declare function appendScript(scriptUrl: string, async?: boolean, defer?: boolean): HTMLScriptElement;
/**
 * 下载一个链接文档
 * @example
 * download('https://xxx.com/xxx', 'xxx'); /// 下载后端返回的流
 * @param link 链接
 * @param name 文件名称(可选，默认以链接最好一段作为名称，填写时可不带后缀自动识别，写了后缀会以写的后缀为准。)
 * @returns
 */
export declare function download(link: string, name: string): void;
/**
 * 在浏览器中自定义下载一些内容
 * @example
 * downloadContent('test.txt', 'test txt content'); /// 下载返回的流
 * downloadContent('test.json', JSON.stringify({content: 'test json'})); /// 下载返回的流
 * @param name 文件名称(需带后缀)，默认 txt 。
 * @param content 内容 BlobPart | any
 * @returns
 */
export declare function downloadContent(name: string, content: any): void;
/**
 * 给元素设置 marquee 内容滚动效果，支持来回滚动，正常跑马灯，无限无缝滚动。
 * 一般来说设置两层，滚动的区间就是父元素的大小。
 * 若 #demo 高度小于 container，除非 loopType 设置 infinite，否则不会有动画。
 * <div class="demo-container"><div id="#demo">...span.items...</div></div>
 * @example
 * marquee('#demo'); /// 默认横向正常滚动(loopType=normal)
 * marquee('.demo-y', {direction: 'Y', loopType: 'infinite', speed: 3}); /// Y 轴无限无缝滚动，speed > 0 越小速度越快。
 * marquee('.demo-x', {direction: 'X', loopType: 'origin', speed: 3, style: 'animation-delay:2s;', parentStyle: 'color:red;'}); /// X 轴无限来回滚动
 * @param selector 选择器字符串
 * @param options 动画配置
 * @returns
 */
export declare function marquee(selector: string, options?: {
    direction?: 'X' | 'Y';
    loopType?: 'infinite' | 'normal' | 'origin';
    speed?: number;
    style?: string;
    parentStyle?: string;
}): void;
/**
 * 自动堆叠
 * @example
 * stackSticky('.stack', 'top'); /// 所有 .stack 元素自动在 top 上堆叠
 * stackSticky('.stack', 'left'); /// 所有 .stack 元素自动在 left 上堆叠
 * @param selectors 选择器字符串
 * @param direction 堆叠方向
 * @returns
 */
export declare function stackSticky(selectors: string, direction?: string): void;
/**
 * 自动计算 font-size 并设置
 * @example
 * calcFontSize(); /// 按 16/9 计算并设置
 * calcFontSize(16/10, true); /// 按 16/10 计算并设置内容居中
 * calcFontSize(16/10, true, 'body'); /// 按 16/10 计算并设置 body 偏移使得内容居中
 * @param clientRatio 屏幕比例
 * @param contentCenter 内容是否居中
 * @param offsetSelector 偏移元素选择器，默认设置 html 根节点偏移。
 * @returns
 */
export declare function calcFontSize(clientRatio: number | undefined, contentCenter: boolean | undefined, offsetSelector: any): () => void;
/**
 * px 转 rem
 * @example
 * px2rem(30); /// 转化后的 rem
 * @param px 像素值
 * @returns
 */
export declare function px2rem(px: number): number;
//# sourceMappingURL=index.d.ts.map