/**
 * 文件大小格式化
 * Example: `formatBytes(1024) => '1.00 KB'`
 * @param bytes 文件大小 bytes
 * @param precision 精度
 * @returns
 */
export declare function formatBytes(bytes: number, precision?: number): string;
/**
 * 设置网页 icon
 * Example: `setIcon('/favicon.ico')`
 * @param iconLink icon 链接
 * @returns
 */
export declare function setIcon(iconLink: string): void;
/**
 * 复制到剪贴板
 * Example: `copyToClipboard('hello world')`
 * @param text 内容文本
 * @returns
 */
export declare function copyToClipboard(text: string): void;
/**
 * 获取浏览器信息
 * Example: `getUserAgent() => { browserName: 'Chrome', browserVersion: '102.0.0.0', osName: 'Windows', osVersion: '10.0', deviceName: '' }`
 * @returns
 */
export declare function getUserAgent(): {
    browserName: string;
    browserVersion: string;
    osName: string;
    osVersion: string;
};
/**
 * 判断当前运行环境是否为 Node.js
 * Example: `isNode() => true`
 * @returns
 */
export declare function isNode(): boolean;
/**
 * 判断当前运行环境是否为浏览器
 * Example: `isBrowser() => true`
 * @returns
 */
export declare function isBrowser(): boolean;
/**
 * 检测黑暗模式
 * Example: `isDarkMode() => true`
 * @returns
 */
export declare function isDarkMode(): boolean;
/**
 * 是否苹果设备
 * Example: `isAppleDevice() => true`
 * @returns
 */
export declare function isAppleDevice(): boolean;
/**
 * 单击事件转换为多击事件
 * Author: wuxingheng
 * Example: `onClick2MoreClick(300, clickOneCallBack, clickTwoCallBack, clickThreeCallBack, clickFourCallBack) => void`
 * @param {number} delay
 * @param {Array} events
 * @returns
 */
export declare function onClick2MoreClick(delay?: number, ...events: Array<any>): any;
/**
 * 单独绑定多击事件
 * Example: `bindMoreClick(moreClickCallBack, 4, 500) => 绑定 4 击事件`
 * @param fn
 * @param times
 * @param delay
 * @returns
 */
export declare function bindMoreClick(fn: any, times?: number, delay?: number): (...args: any[]) => void;
/**
 * 设置长按事件
 * Example: `addLongPress(document.querySelector('.img-btn'), (event) => console.log('addLongPress'), 3000); => 长按会触发事件`
 * @param element
 * @param callback
 * @param duration
 * @returns
 */
export declare function addLongPress(element: any, callback: any, duration?: number): void;
/**
 * 触发某个键盘按键事件
 * Example: `emitKeyboardEvent('keydown', 108) => 小键盘回车事件`
 * @param eventType 事件类型
 * @param keyCode 触发键盘 code
 * @returns
 */
export declare function emitKeyboardEvent(eventType?: 'keydown' | 'keypress' | 'keyup', keyCode?: number): void;
/**
 * 禁用冲突事件，条码枪、关闭窗口快捷键等。
 * Example:
 * `document.addEventListener('keydown', disableConflictEvent) => 进入页面后禁用冲突事件`
 * `document.removeEventListener('keydown', disableConflictEvent) => 退出页面后关闭监听`
 * @param event 触发事件
 * @returns
 */
export declare function disableConflictEvent(event: any): boolean;
/**
 * 版本号比对算法
 * Example:
 * `checkVersion('1.0.1-rc', '1.0.0', '-rc') => 1`
 * `checkVersion('1.0.0', '1.0.1') => -1`
 * `checkVersion('1.0.0', '1.0.0') => 0`
 * @param targetVersion
 * @param currentVersion
 * @param testStr default(-rc)
 * @returns
 */
export declare function checkVersion(targetVersion: string, currentVersion: string, testStr?: string): -1 | 1 | 0;
/**
 * 版本号升级算法
 * Example:
 * `versionUpgrade('0.0.1') => '0.0.2'`
 * `versionUpgrade('0.0.0.9') => '0.0.0.10'`
 * `versionUpgrade('0.0.0.9', 9) => '0.0.1.0'`
 * `versionUpgrade('0.0.9.9', 9) => '0.1.0.0'`
 * @param version 版本号
 * @param maxVersionCode 最大版本号
 * @returns
 */
export declare function versionUpgrade(version: string, maxVersionCode?: number): string;
/**
 * 处理 rh 血型
 * Example:
 * `formatRh('**d**') => '阴性'`
 * `formatRh('**d**', { format: [true, false], default: false }) => true`
 * @param input 输入值
 * @param options 处理配置
 * @returns
 */
export declare function formatRh(input: string, options?: {
    format?: [string | number | boolean, string | number | boolean];
    default?: string | number | boolean;
    negative?: Array<string>;
    positive?: Array<string>;
}): string | boolean | number;
/**
 * 是否阴性血
 * Example: `isRhNegative('**d**') => true`
 * @param input 输入值
 * @returns
 */
export declare function isRhNegative(input: string): boolean;
/**
 * 获取血型枚举信息
 * Example: `getBloodGroup('A') => { value: 'A', label: 'A 型', color: '#1890FF', lower: 'a', upper: 'A' }`
 * @param bloodGroup
 * @returns
 */
export declare function getBloodGroup(bloodGroup: string): {
    value: string;
    label: string;
    color: string;
    lower: string;
    upper: string;
};
/**
 * 填对应值到对应的 dom 中
 * Example:
 * `dataTo('.className', 'xxx') => xxx 会填入到类名为 class-name 的元素中`
 * `dataTo('.class-name', 'xxx') => xxx 会填入到类名为 class-name 的元素中`
 * `dataTo('.class_name', 'xxx') => xxx 会填入到类名为 class-name 的元素中`
 * `dataTo('.class.name', 'xxx') => xxx 会填入到类名为 class-name 的元素中`
 * `dataTo('#id.name', 'xxx') => xxx 会填入到 id 名为 id-name 的元素中`
 * @param key
 * @param value
 * @returns
 */
export declare function dataTo(key: string, value: any): void;
/**
 * 给对应 dom 生成水印
 * Example:
 * `watermark(document.body, 'My Watermark', { fontSize: 20, opacity: 0.5, angle: -30, color: 'red', fontFamily: 'Arial', repeat: true, backgroundOpacity: 0.05 });`
 * `watermark(document.body, 'My Watermark') => 在 body 中生成水印`
 * `watermark(document.body, 'My Watermark', { fontSize: 120, color: 'red', repeat: false, angle: 0 }) => 在 body 中生成水印`
 * `watermark(document.body, 'My Watermark', { fontSize: 20, color: 'red', repeat: true, angle: 90 }) => 在 body 中生成水印`
 * @param dom
 * @param text
 * @param options
 * @returns
 */
export declare function watermark(dom: any, text: string, options?: any): void;
/**
 * 获取 cron 表达式
 * Example:
 * `getCron() => '* * * * *'`
 * `getCron({ minute: '30', hour: '1', day: '10'}) => '30 1 10 * *'`
 * `getCron({  week: '?' }) => '* * * * ?'`
 * `getCron({ week: '*' }) => '* * * * *'`
 * `getCron({ week: 0 }) => '* * * * 0'`
 * `getCron({ week: '0' }) => '* * * * 0'`
 * `getCron({ week: '7' }) => '* * * * 0'`
 * `getCron({ week: 'SUN,天,日,六,6,5' }) => '* * * * 0,5,6'`
 * `getCron({ day: '1-5' }) => '* * 1-5 * * '`
 * `getCron({ day: '1,5' }) => '* * 1,5 * * '`
 * `getCron({ day: '1/5' }) => '* * 1/5 * * '`
 * @param options
 * @returns
 */
export declare function getCron({ minute, hour, day, month, week }?: {
    minute?: string | undefined;
    hour?: string | undefined;
    day?: string | undefined;
    month?: string | undefined;
    week?: string | undefined;
}): string;
/**
 * 在页面上打印数据，我们打包通常会设置清除 console，使用此函数打印关键信息就不会被清除啦。
 * Example:
 * `log([1, 2, 2, 3, 3], {a: 1, b: 2}, 'test', true) => 打印数据`
 * `log('danger') => 打印数据`
 * @param args
 * @returns
 */
export declare function log(...args: any[]): void;
/**
 * 在页面上打印某个值
 * 且有更好的可读性与日志标识
 * 每次打印会返回日志字符串，可以统一收集写入到文件保存，或者上传到服务器。
 * Example:
 * `logVar([1, 2, 2, 3, 3]) => 打印数据`
 * `logVar({a: 1, b: 2}, 'danger') => 打印数据`
 * `logVar({a: 1, b: 2}, 'success') => 打印数据`
 * @param value
 * @param logLevel
 * @returns
 */
export declare function logVar(value: any, logLevel?: string): string;
/**
 * 强制转化为字符串，避免导出表格显示科学计数法。
 * Example:
 * `forceToStr(123123123) => '123123123'`
 * `forceToStr(undefined) => '-'`
 * `forceToStr(undefined, 0) => '0'`
 * @param value
 * @param defaultValue
 * @returns
 */
export declare function forceToStr(value: any, defaultValue?: string): string;
/**
 * 转换 data 为可导出的 csv 数据
 * Example:
 * `transferCSVData([{ prop: 'name' }, { prop: 'age' }], [{ name: '张三', age: 15 }]) => 可以导出的字符数据`
 * `transferCSVData([{ label: '姓名', prop: 'name' }, { label: '年龄', prop: 'age' }], [{ name: '张三', age: 15 }]) => 可以导出的字符数据`
 * @param fields
 * @param data
 * @returns
 */
export declare function transferCSVData(fields: {
    label?: string;
    prop: string;
}[], data: any[]): string;
/**
 * 导出数据为文件
 * Example:
 * `exportFile(data) => 导出 txt 文件`
 * `exportFile(data, 'csv-导出文件测试', 'csv') => 导出 csv 文件`
 * `exportFile('http://a.biugle.cn/img/cdn/dev/avatar/1.png', 'test', 'png') => 导出 png 文件`
 * @param data
 * @param fileName
 * @param fileType
 * @returns
 */
export declare function exportFile(data: string, fileName?: string, fileType?: string): void;
//# sourceMappingURL=index.d.ts.map