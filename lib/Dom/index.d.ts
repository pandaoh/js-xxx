/**
 * 开启全屏
 * @example
 * openFullscreen(); /// 开启全屏
 * @param element 元素
 * @returns
 * @category Dom-工具方法
 */
export declare function openFullscreen(element?: any): void;
/**
 * 关闭全屏
 * @example
 * closeFullscreen(); /// 关闭全屏
 * @returns
 * @category Dom-工具方法
 */
export declare function closeFullscreen(): void;
/**
 * 字符串转实体字符
 * @example
 * str2html('<>&"'); /// '&lt;&gt;&amp;&quot;'
 * @param str 字符串
 * @returns
 * @category Custom-转码
 */
export declare function str2html(str: string): string;
/**
 * 实体字符转字符串
 * @example
 * html2str('&lt;&gt;&amp;&quot;'); /// '<>&"'
 * @param value 实体字符串
 * @returns
 * @category Custom-转码
 */
export declare function html2str(value: string): string | null;
/**
 * 插入某元素到指定 Element 之后
 * @example
 * insertAfter(document.getElementById('a'), document.getElementById('b'));
 * @param newElement 某元素
 * @param targetElement 指定元素
 * @returns
 * @category Dom-工具方法
 */
export declare function insertAfter(newElement: any, targetElement: any): void;
/**
 * Y 轴滚动到指定位置
 * @example
 * scrollYTo(0); /// 滚动到顶部
 * scrollYTo('start', null, document.documentElement); /// 滚动到顶部
 * scrollYTo('end', (percent) => console.log(percent), document.querySelector('body')); /// 滚动到底部
 * @param targetVal 'start' | 'end' | number
 * @param callback 回调
 * @param dom 元素对象
 * @returns
 * @category Scroll-滚动相关
 */
export declare function scrollYTo(targetVal: 'start' | 'end' | number, callback: any, dom?: any): void;
/**
 * X 轴滚动到指定位置
 * @example
 * scrollXTo(0); /// 滚动到左侧
 * scrollXTo('start', null, document.documentElement); /// 滚动到左侧
 * scrollXTo('end', (percent) => console.log(percent), document.querySelector('body')); /// 滚动到右侧
 * @param targetVal 'start' | 'end' | number
 * @param callback 回调
 * @param dom 元素对象
 * @returns
 * @category Scroll-滚动相关
 */
export declare function scrollXTo(targetVal: 'start' | 'end' | number, callback: any, dom?: any): void;
/**
 * 将元素滚动到视野范围
 * @example
 * scrollIntoView(document.querySelector('.test')); /// test 元素滚动到视野范围
 * scrollIntoView(document.querySelector('.test'), 'start'); /// test 元素滚动到视野范围顶部
 * @param dom 元素对象
 * @param targetVal 'start' | 'end' | 'center' | 'nearest'
 * @returns
 * @category Scroll-滚动相关
 */
export declare function scrollToView(dom?: any, targetVal?: 'start' | 'end' | 'center' | 'nearest'): void;
/**
 * 获取滚动条百分比
 * @example
 * getScrollPercent(document.documentElement, 'Y'); /// 0.581134549876
 * @param direction X/Y 轴的进度条
 * @param dom 元素
 * @returns
 * @category Scroll-滚动相关
 */
export declare function getScrollPercent(direction?: 'X' | 'Y', dom?: any): number;
/**
 * 获取最近的可滚动父元素。
 * 支持普通 DOM 、 Shadow DOM 和 iframe 。
 * @example
 * getScrollParent(document.querySelector('.form-error')); // Form
 * getScrollParent(); /// document.documentElement
 * @param element 目标元素
 * @returns
 * @category Scroll-滚动相关
 */
export declare function getScrollParent(element?: HTMLElement | any): HTMLElement | Document | any;
/**
 * 滚动到指定元素，并将其显示在可滚动容器的中间。
 * 适用于表单报错时定位报错元素，支持嵌套滚动容器。
 * @param options 配置对象，包含以下属性：
 *   - {string} selector - 目标元素的 CSS 选择器。
 *   - {number} [delay=0] - 滚动执行的延迟时间（毫秒）。
 *   - {boolean} [parent=false] - 是否在主应用中查找元素（适用于 Shadow DOM 情况）。
 * @example
 * // 立即滚动到指定元素
 * scrollToElement({
 *   selector: '#error-element',
 *   delay: 0,
 *   parent: true,
 * });
 * // 延迟滚动到指定元素
 * scrollToElement({
 *   selector: '.form-error',
 *   delay: 100,
 * });
 * @returns
 * @category Scroll-滚动相关
 */
export declare function scrollToElement(options: {
    selector: string;
    delay?: number;
    parent?: boolean;
}): void;
/**
 * 找元素的第 n 级父元素
 * @example
 * findParents(document.getElementById('test'), 3); /// #test 的第三个父元素
 * @param element 指定元素
 * @param n 第几个
 * @returns
 * @category Dom-工具方法
 */
export declare function findParents(element: any, n: number): any;
/**
 * 找元素的所有子元素，解决浏览器兼容问题。
 * @example
 * findChildren(document.getElementById('test')); /// #test 的所有子元素数组
 * @param element 指定元素
 * @returns
 * @category Dom-工具方法
 */
export declare function findChildren(element: any): any[];
/**
 * 获取窗口尺寸
 * @example
 * getViewportSize(); /// { width: 1280, height: 649 }
 * @returns
 * @category Dom-工具方法
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
 * @category Dom-工具方法
 */
export declare function getStyleByName(element: any, name: any): any;
/**
 * 添加 link 标签
 * @example
 * appendLink('favicon', 'favicon'); /// 添加一个 link 标签
 * @param linkUrl 链接地址
 * @param rel 类型
 * @returns
 * @category Dom-工具方法
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
 * @category Dom-工具方法
 */
export declare function appendScript(scriptUrl: string, async?: boolean, defer?: boolean): HTMLScriptElement;
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
 * @category BXH-自定义动画
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
 * @category Dom-工具方法
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
 * @category Dom-工具方法
 */
export declare function calcFontSize(clientRatio: number | undefined, contentCenter: boolean | undefined, offsetSelector: any): () => void;
/**
 * px 转 rem
 * @example
 * px2rem(30); /// 转化后的 rem
 * @param px 像素值
 * @returns
 * @category Dom-工具方法
 */
export declare function px2rem(px: number): number;
/**
 * 填对应值到对应的 dom 中
 * @example
 * dataTo('.className', 'xxx'); /// xxx 会填入到类名为 class-name 的元素中
 * dataTo('.class-name', 'xxx'); /// xxx 会填入到类名为 class-name 的元素中
 * dataTo('.class_name', 'xxx'); /// xxx 会填入到类名为 class-name 的元素中
 * dataTo('.class.name', 'xxx'); /// xxx 会填入到类名为 class-name 的元素中
 * dataTo('#id.name', 'xxx'); /// xxx 会填入到 id 名为 id-name 的元素中
 * @param key key 值
 * @param value value 值
 * @returns
 * @category Dom-工具方法
 */
export declare function dataTo(key: string, value: any): void;
/**
 * 给元素添加/删除类
 * @example
 * toggleClass(myElement, 'active'); /// 给元素添加/删除 active 类
 * toggleClass(myElement, ['active', 'disabled']); /// 给元素添加/删除 active/disabled 类
 * @param element 元素
 * @param className 类
 * @returns
 * @category Dom-工具方法
 */
export declare function toggleClass(element: any, className: string | Array<string>): void;
/**
 * 展示水滴加载动画
 * @example
 * const hideProcess = showProcess(myElement); /// 在元素中显示水滴加载动画
 * hideProcess(); /// 隐藏水滴加载动画
 * @param element 元素
 * @returns
 * @category BXH-自定义动画
 */
export declare function showProcess(element: any): () => void;
/**
 * 单击事件转换为多击事件
 * Author: WuXingHeng
 * @example
 * dom.onclick = onClick2MoreClick(300, clickOneCallBack, clickTwoCallBack, clickThreeCallBack, clickFourCallBack); /// void
 * @param delay 点击间隔
 * @param events 事件多击 rest 参数
 * @returns
 * @category Tools-点击事件相关
 */
export declare function onClick2MoreClick(delay?: number, ...events: Array<any>): any;
/**
 * 单独绑定多击事件
 * @example
 * dom.onclick = bindMoreClick(moreClickCallBack, 4, 500); /// 绑定 4 击事件
 * @param fn 触发方法
 * @param times 几次点击触发
 * @param delay 点击间隔
 * @returns
 * @category Tools-点击事件相关
 */
export declare function bindMoreClick(fn: any, times?: number, delay?: number): (...args: any[]) => void;
/**
 * 设置长按事件-支持加入单击事件
 * @example
 * addLongPressEvent(document.querySelector('.img-btn'), (event); /// console.log('addLongPressEvent'), 3000); /// 长按会触发事件
 * @param element 需要绑定事件的元素
 * @param longPressCallback 长按事件函数
 * @param duration 长按时间
 * @param clickCallback 单击事件函数(可选)
 * @returns
 * @category Tools-点击事件相关
 */
export declare function addLongPressEvent(element: any, longPressCallback: any, duration?: number, clickCallback?: any): void;
/**
 * 设置网页 icon
 * @example
 * setIcon('/favicon.ico')
 * @param iconLink icon 链接
 * @returns
 * @category Dom-工具方法
 */
export declare function setIcon(iconLink: string): void;
/**
 * 复制到剪贴板
 * @example
 * copyToClipboard('hello world')
 * @param text 内容文本
 * @returns
 * @category Dom-工具方法
 */
export declare function copyToClipboard(text: string): void;
/**
 * 获取鼠标选中内容
 * @example
 * getSelectText()
 * @returns
 * @category Dom-工具方法
 */
export declare function getSelectText(): string | undefined;
/**
 * 触发某个键盘按键事件
 * @example
 * emitKeyboardEvent(108, 'keyup'); // 小键盘回车事件
 * emitKeyboardEvent('Enter'); // 回车事件
 * emitKeyboardEvent(KEYBOARD_CODE.TAB, 'keypress'); // TAB 事件
 * @param keyOrKeyCode 触发键盘 code，默认为 13 。
 * @param eventType 事件类型，默认为 'keydown' 。
 * @param element 目标元素，默认为 document.body ，支持传 document 。
 * @returns
 * @category Tools-事件相关
 */
export declare function emitKeyboardEvent(keyOrKeyCode?: string | number, eventType?: 'keydown' | 'keypress' | 'keyup', element?: HTMLElement | null): void;
/**
 * 触发元素事件
 * @example
 * emitEvent('click', null, document.getElementById('myButton')); // 触发元素点击事件
 * emitEvent('click', { logKey: 'test', params: { hello: 'world' } }); // 触发自定义元素点击事件
 * @param eventType 事件类型，默认为 'click' 。
 * @param eventDetail 事件自定义参数可以为空。不为空触发 CustomEvent 。
 * @param element 目标元素，默认为 document.body ，支持传 document 。
 * @returns
 * @category Tools-事件相关
 */
export declare function emitEvent(eventType?: string, eventDetail?: any, element?: HTMLElement | null): void;
/**
 * 禁用冲突事件，条码枪、关闭窗口快捷键等。
 * @example
 * document.addEventListener('keydown', disableConflictEvent); /// 进入页面后禁用冲突事件
 * document.removeEventListener('keydown', disableConflictEvent); /// 退出页面后关闭监听
 * @param event 触发事件
 * @returns
 * @category Tools-事件相关
 */
export declare function disableConflictEvent(event: any): boolean;
/**
 * 阻止冒泡事件&阻止默认行为&阻止事件捕获
 * @example
 * offDefaultEvent(event); /// 阻止冒泡事件&阻止默认行为&阻止事件捕获
 * @param event 事件
 * @returns
 * @category Tools-事件相关
 */
export declare function offDefaultEvent(event: any): boolean;
/**
 * 在打印预览中打印指定元素，并设置样式。
 * 需在浏览器打印设置中-更多设置-开启背景与图形打印选项
 * @example
 * printElement('#print-table', {
 *   bodyStyle: {
 *     padding: '10px',
 *     backgroundColor: 'red',
 *   },
 * });
 * @param selector - 要打印的元素的 CSS 选择器。
 * @param styles - iframe 的 style 配置对象。
 *   @property {any} style - iframe 的基本样式。
 *   @property {any} bodyStyle - iframe 的 body 样式。
 *   @property {any} htmlStyle - iframe 的 html 样式。
 * @returns
 * @category Dom-工具方法
 */
export declare function printDom(selector: string, styles?: {
    iframeStyle?: any;
    bodyStyle?: any;
    htmlStyle?: any;
}): any;
/**
 * 创建全局 click 事件埋点与回调，也可使用 `emitEvent` 主动触发。
 * 若 log-* 属性报错，记得 eslint 关闭 `'react/no-unknown-property': 'warn'`。
 * @example
 * const clickListenerObj = createClickLogListener((event, key, data) => console.log({ event, key, data })); /// 页面加载完成后创建监听器，取消监听器 clickListenerObj.cancel(); 。
 * <div log-click={JSON.stringify({ trigger: 'click', params: { name: '普通日志' }, logKey: 'example-key-0' })}>普通埋点元素</div> /// 普通埋点元素写法
 * <div log-click={JSON.stringify({ maxSequence: 2, sequence: 1, trigger: 'click', params: { name: '固定顺序日志' }, logKey: 'example-key-1' })}>固定顺序埋点元素 1</div> /// 固定顺序埋点元素写法
 * <div log-click={JSON.stringify({ maxSequence: 2, sequence: 2, trigger: 'click', params: { name: '固定顺序日志' }, logKey: 'example-key-1' })}>固定顺序埋点元素 2</div> /// 固定顺序埋点元素写法
 * <div log-click={JSON.stringify({ isOrder: true, orderKey: '元素 1', params: { name: '非固定顺序日志' }, logKey: 'example-key-2' })}>非固定顺序埋点元素 1</div> /// 非固定顺序埋点元素写法
 * <div log-click={JSON.stringify({ isOrder: true, orderKey: '元素 2', params: { name: '非固定顺序日志' }, logKey: 'example-key-2' })}>非固定顺序埋点元素 2</div> /// 非固定顺序埋点元素写法
 * @param callback 监听 Track 回调
 * @returns
 * @category Log-日志埋点
 */
export declare function createClickLogListener(callback?: any): any;
/**
 * 创建全局 scroll 事件埋点与回调
 * 若 log-* 属性报错，记得 eslint 关闭 `'react/no-unknown-property': 'warn'`。
 * @example
 * const cancel = createScrollLogListener(document.querySelector('.demo-scroll-dom'), (event, eventKey, data) => console.log({ event, eventKey, data })); /// 页面加载完成后创建监听器，取消监听器 cancel(); 。
 * <div log-scroll={JSON.stringify({ logKey: 'example-scroll-X' })}>{...X 滚动埋点元素...}</div> /// 滚动埋点元素
 * @param element 元素
 * @param callback 监听 Track 回调
 * @param delay 防抖延迟
 * @param threshold 触发滚动事件阈值
 * @returns
 * @category Log-日志埋点
 */
export declare function createScrollLogListener(element?: any, callback?: any, delay?: number, threshold?: number): (() => void) | undefined;
/**
 * 创建全局 change 事件埋点与回调，也可使用 `emitEvent` 主动触发。
 * @example
 * const cancel = createChangeLogListener((event, key, data) => console.log({ event, key, data })); /// 页面加载完成后创建监听器，取消监听器 cancel(); 。
 * <div log-change={JSON.stringify({ logKey: 'div-input-change-0' })}><input /></div> /// 父元素总监听
 * <input log-change={JSON.stringify({ logKey: 'input-change-1' })} /> /// 普通监听
 * @param callback 监听 Track 回调
 * @returns
 * @category Log-日志埋点
 */
export declare function createChangeLogListener(callback?: any): () => void;
/**
 * 创建间隔时间日志
 * @param eventName 事件名称
 * @param eventParams 参数列表
 * @param callback 回调函数
 * @returns
 * @example
 * // 创建日志实例
 * const myCustomLog = createTimeLogListener('扫描时长', { menuCode: 'Login' });
 * // 开始计时，如果短时间多个实例计时，最好增加 key 参数，没有 key 默认 key 为 'undefined' 。
 * myCustomLog.start({ user: 'admin' });
 * myCustomLog.start({ user: 'admin123', key: 'custom-123' });
 * myCustomLog.start({ user: 'admin456', key: 'custom-456' });
 * // ... 执行一些操作 ...
 * // ... 中途更新一些参数 ...
 * myCustomLog.update({ userAgent: 'Chrome' });
 * myCustomLog.update({ test: 'test' });
 * myCustomLog.update({ test: 'test123', key: 'custom-123' });
 * // 结束计时并记录日志
 * myCustomLog.end({ isLogin: true });
 * myCustomLog.end({ isLogin: false, key: 'custom-123' });
 * myCustomLog.end({ isLogin: true, key: 'custom-456' });
 * // 输出到控制台和执行回调
 * // 输出格式包括：logKey, ms, s, menuCode, user, isLogin, userAgent, test
 * myCustomLog.clear(); // 清空所有缓存数据
 * // react
 * const log = useMemo(() => createTimeEventLog('扫描时长', { menuCode: 'scan' }), []);
 * @category Log-日志埋点
 */
export declare function createTimeLogListener(eventName: string, eventParams?: {}, callback?: (logInfo: any, logKey: string) => void): {
    clear: () => void;
    start(moreParams?: {}): void;
    update(moreParams?: {}): void;
    end(moreParams?: {}): void;
};
/**
 * 合并类名 emotion-js
 * @example
 * cx('class1', 'class2', { 'class3': true, 'class4': false }, null, undefined); /// "class1 class2 class3"
 * @param classNames 要合并的类名、对象或空值
 * @returns
 * @category Dom-工具方法
 */
export declare function cx(...classNames: any[]): string;
/**
 * 去除字符串中的元素标记
 * @example
 * removeTag('<div>Hello Wife</div>'); /// 'Hello Wife'
 * @param str 字符串
 * @returns
 * @category Dom-工具方法
 */
export declare function removeTag(str: string): string;
//# sourceMappingURL=index.d.ts.map