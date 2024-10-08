/**
 * 获取 16 位可读时间戳
 * @example
 * getTimeCode(); /// '2036551026042022'
 * @returns
 * @category Tools-工具方法
 */
export declare function getTimeCode(): string;
/**
 * 判断值是否为空
 * @example
 * empty(''); /// true
 * empty(null); /// true
 * empty('null'); /// true
 * empty('undefined'); /// true
 * empty(undefined); /// true
 * empty(0); /// false
 * empty('0'); /// false
 * empty(NaN); /// true
 * empty('NaN'); /// true
 * empty({}); /// true
 * empty([]); /// true
 * @param variable 变量
 * @returns
 * @category Tools-工具方法
 */
export declare function empty(variable: any): boolean;
/**
 * 获取对象/数组第一个值
 * @example
 * getFirstVar([1, 2]); /// 1
 * getFirstVar({a: 2,b: 1}); /// 2
 * @param data 源数据
 * @returns
 * @category Tools-工具方法
 */
export declare function getFirstVar(data: any): any;
/**
 * 获取对象/数组最后一个值(对象为 Object.keys 的顺序)
 * @example
 * getLastVar([1, 2]); /// 2
 * getLastVar({a: 2, b: 1}); /// b
 * @param data 源数据
 * @returns
 * @category Tools-工具方法
 */
export declare function getLastVar(data: any): any;
/**
 * 获取数组或对象随机数据
 * @example
 * getRandVar({ a: 1, b: 3 }); /// 1
 * getRandVar([1, 2, 3, 4], 2); /// [2, 4]
 * @param value 值
 * @param count 获取数据量
 * @returns
 * @category Tools-工具方法
 */
export declare function getRandVar(value: any, count?: number): any | any[];
/**
 * 防抖函数-最后一次有效（抢购）
 * @example
 * debounce(() => {}, 1000); /// 防抖执行
 * @param fn 执行的函数
 * @param delay 延迟时间
 * @returns
 * @category Tools-工具方法
 */
export declare function debounce(fn: any, delay?: number): () => void;
/**
 * 节流函数-第一次有效（游戏开枪间隔）
 * @example
 * throttle(() => {}, 1000); /// 节流执行
 * @param fn 执行的函数
 * @param delay 延迟时间
 * @returns
 * @category Tools-工具方法
 */
export declare function throttle(fn: any, delay?: number): () => void;
/**
 * 全局尽可能捕获异常
 * @example
 * globalError((error) => console.log('全局捕获异常'), false); /// '全局捕获异常'
 * @param fn (error)
 * @param notShowConsole 是否不回显控制台
 * @returns
 * @category Tools-工具方法
 */
export declare function globalError(fn: any, notShowConsole?: boolean): void;
/**
 * 监听资源找不到的情况，刷新页面。
 * @example
 * observeResource(() => console.log('Refreshing')); /// 找不到资源时输出 "Refreshing"
 * observeResource(); /// 找不到资源时刷新页面
 * @param callback
 * @returns
 * @category Tools-工具方法
 */
export declare function observeResource(callback?: any): void;
/**
 * 刷新页面或执行回调函数，用于检测服务端是否发布了更新
 * @example
 * checkUpdate((type) => console.log({ type })); /// 检测服务端是否发布了更新，若更新或请求失败则执行回调。
 * checkUpdate(); /// 检测服务端是否发布了更新，若更新或请求失败则刷新页面。
 * checkUpdate((type) => window.location.reload(), 5 * 60 * 1000, '/index.js'); /// 检测服务端某个文件是否发布了更新，若更新或请求失败则刷新页面。
 * @param callback 文件更新时要执行的回调函数
 * @param interval 请求文件的时间间隔（毫秒），默认为 15 分钟，最小值 1 分钟。
 * @param url 要检测的文件路径（默认为页面最后一个 JavaScript/CSS 文件）
 * @returns
 * @category Tools-工具方法
 */
export declare function checkUpdate(callback: any, interval?: number, url?: string): (() => void) | undefined;
/**
 * 获取随机数字
 * @example
 * getRandNum(1, 10); /// 1~10 之间的随机数，闭区间。
 * @param min 最小值
 * @param max 最大值
 * @returns
 * @category Tools-工具方法
 */
export declare function getRandNum(min?: number, max?: number): number;
/**
 * 获取随机颜色
 * @example
 * getRandColor(); /// '#xxxxxx'
 * @returns
 * @category Tools-工具方法
 */
export declare function getRandColor(): string;
/**
 * 获取 bootstrap 颜色
 * @example
 * getBSColor(); /// '#6c757d'
 * getBSColor('red'); /// '#dc3545'
 * getBSColor('warning'); /// '#ffc107'
 * @param key color name
 * @returns
 * @category Tools-工具方法
 */
export declare function getBSColor(key?: string): string;
/**
 * 获取任意变量长度
 * @example
 * getVarSize([]); /// 0
 * getVarSize({a: 1, b: 2}); /// 2
 * getVarSize(null); /// 0
 * @param value 值
 * @returns
 * @category Tools-工具方法
 */
export declare function getVarSize(value: any): number;
/**
 * 在浏览器中打开文件选择框
 * @example
 * openFileSelect({ multiple: true }).then(fileList => console.log(fileList));
 * openFileSelect({ multiple: true, accept: 'image/*', resultType: 'blob' }).then(fileBlobList => console.log(fileBlobList));
 * openFileSelect({ multiple: true, accept: '.txt', resultType: 'base64' }).then(fileDataUrlList => console.log(fileDataUrlList));
 * @param options 打开配置
 * @returns
 * @category Tools-下载/文件相关
 */
export declare function openFileSelect(options?: {
    accept?: string;
    multiple?: boolean;
    resultType?: 'blob' | 'base64';
}): Promise<any>;
/**
 * 将 Blob 对象保存为文件并下载。
 * @example
 * const blob = new Blob(['Hello, World!'], { type: 'text/plain' });
 * saveAs(blob, 'hello.txt'); // 下载文件名为 'hello.txt'
 * const jsonBlob = new Blob([JSON.stringify({ a: 1, b: 2 }, null, 2)], { type: 'application/json' });
 * saveAs(jsonBlob, 'data.json'); // 下载文件名为 'data.json'
 * @param blob 要保存的 Blob 对象。
 * @param filename 可选。保存的文件名。
 * @returns
 * @category Tools-下载/文件相关
 */
export declare function saveAs(blob: Blob, filename?: string): void;
/**
 * 根据 Blob 下载图片。
 * @example
 * // 下载远程图片，并保存为 'image.jpg'
 * downloadImgByBlob('https://example.com/path/to/image.jpg', 'image.jpg');
 * // 下载远程图片，并保存为默认文件名（通常是图片的原始文件名）
 * downloadImgByBlob('https://example.com/path/to/image.jpg');
 * // 尝试下载一个无效的 URL，不会进行下载操作
 * downloadImgByBlob('invalid-url');
 * // 下载一张跨域图片（需要支持跨域下载）
 * downloadImgByBlob('https://a.example.com/path/to/cross-origin-image.jpg', 'cross-origin-image.jpg');
 * @param url 图片的 URL 地址。
 * @param fileName 可选。下载的文件名。
 * @returns
 * @category Tools-下载/文件相关
 */
export declare function downloadImg(url: string, fileName?: string): void;
/**
 * 下载文件
 * @example
 * // 下载并保存为 'xxx'
 * downloadFile('https://example.com/path/to/file.jpg', 'xxx'); // 将文件保存为 'xxx.jpg'
 * // 下载并保存为链接中的文件名
 * downloadFile('https://example.com/path/to/file.jpg'); // 将文件保存为 'file.jpg'
 * // 下载并保存为指定的文件名（没有扩展名）
 * downloadFile('https://example.com/path/to/file.jpg', 'customFileName'); // 将文件保存为 'customFileName.jpg'
 * // 下载并保存为带有扩展名的自定义文件名
 * downloadFile('https://example.com/path/to/file.jpg', 'customFileName.png'); // 将文件保存为 'customFileName.png'
 * @param url 文件的 URL 地址。
 * @param fileName 可选。下载的文件名，默认为 URL 中的文件名。
 * @returns
 * @category Tools-下载/文件相关
 */
export declare function downloadFile(url: string, fileName?: string): void;
/**
 * 根据 URL 获取文件名。
 * @example
 * // 获取一个简单 URL 的文件名
 * getFileNameFromUrl('https://example.com/path/to/file.jpg'); // 'file.jpg'
 * // 获取带有查询参数的 URL 的文件名
 * getFileNameFromUrl('https://example.com/path/to/file.jpg?version=1.2'); // 'file.jpg'
 * // 获取没有文件扩展名的 URL 的文件名
 * getFileNameFromUrl('https://example.com/path/to/file'); // 'file.txt'
 * // 获取根路径 URL 的文件名
 * getFileNameFromUrl('https://example.com/'); // '1691830390281.txt' (假设当前时间为 1691830390281)
 * // 获取一个复杂编码的 URL 的文件名
 * getFileNameFromUrl('https://example.com/path/to/%E4%BD%A0%E5%A5%BD.jpg'); // '你好.jpg'
 * // 获取包含多个查询参数的 URL 的文件名
 * getFileNameFromUrl('https://example.com/path/to/file.jpg?param1=value1&param2=value2'); // 'file.jpg'
 * // 仅获取文件扩展名
 * getFileNameFromUrl('https://example.com/path/to/file.jpg', true); // 'jpg'
 * @param url 要获取文件名的 URL 。
 * @param onlyExt 可选。如果为 true，则仅返回文件扩展名。
 * @returns
 * @category Tools-下载/文件相关
 */
export declare function getFileNameFromUrl(url: string, onlyExt?: boolean): string;
/**
 * 新开页面预览文件。
 * @example
 * // 预览 Word 文档
 * openPreviewFile('https://example.com/path/to/document.docx');
 * // 预览 Excel 表格
 * openPreviewFile('https://example.com/path/to/spreadsheet.xlsx');
 * // 预览 PDF 文件
 * openPreviewFile('https://example.com/path/to/document.pdf');
 * // 预览图片
 * openPreviewFile('https://example.com/path/to/image.png');
 * // 预览其他文件或未匹配的文件类型
 * openPreviewFile('https://example.com/path/to/otherfile.zip'); // 将直接打开链接
 * @param url 要预览的 URL 地址。
 * @returns
 * @category Tools-下载/文件相关
 */
export declare function openPreviewFile(url: string, serviceUrl: string): void;
/**
 * 获取数组或对象交集
 * @example
 * intersection([1, 2, 2, 3, 3], [1, 2, 4, 5]); /// [1, 2]
 * intersection({a: 1, b: 2}, {a: 1, c: 3, b: 4}); /// {a: 1}
 * @param paramA 值 A
 * @param paramB 值 B
 * @returns
 * @category Tools-工具方法
 */
export declare function intersection(paramA: any, paramB: any): any;
/**
 * 获取数组或对象并集
 * @example
 * union([1, 2, 2, 3, 3], [1, 2, 4, 5]); /// [1, 2, 3, 4, 5]
 * union({a: 1, b: 2}, {a: 1, c: 3, b: 4}); /// {a: 1, c: 3, b: 2}
 * @param paramA 值 A，若冲突以此值为准。
 * @param paramB 值 B
 * @returns
 * @category Tools-工具方法
 */
export declare function union(paramA: any, paramB: any): any;
/**
 * 获取数组或对象不同值集合
 * @example
 * difference([1, 2, 2, 3, 3], [1, 2, 4, 5]); /// [3]
 * difference({a: 1, b: 2}, {a: 1, c: 3, b: 4}); /// {b: 2}
 * @param paramA 值 A，若冲突以此值为准。
 * @param paramB 值 B
 * @returns
 * @category Tools-工具方法
 */
export declare function difference(paramA: any, paramB: any): any;
/**
 * JSON 转字符串式克隆
 * @example
 * jsonClone([1, 2, 2, 3, 3]); /// [1, 2, 2, 3, 3]
 * jsonClone({a: 1, b: 2}); /// {a: 1, b: 2}
 * @param value 值
 * @returns
 * @category JSON-相关
 */
export declare function jsonClone(value: any): any;
/**
 * 打印某个函数运行时间
 * @example
 * logRunTime(() => [1, 2, 3].reduce(...));
 * logRunTime(() => [1, 2, 3].reduce(...), 'timeKey');
 * logRunTime(async () => { await fun1(); await fun2(); });
 * logRunTime($promiseReturnFunction);
 * logRunTime(new Promise((resolve, reject) => { setTimeout(() => resolve('test'), 1000) }));
 * @param fn 方法函数
 * @param timeKey 打印时间记录关键 key
 * @returns
 * @category Extra-日志/调试
 */
export declare function logRunTime(fn: any, timeKey: string): void;
/**
 * 在页面上显示某个值
 * @example
 * showVar([1, 2, 2, 3, 3]); /// 显示序列化之后的数据
 * showVar({a: 1, b: 2}); /// 显示序列化之后的数据
 * @param value 值
 * @returns
 * @category Extra-日志/调试
 */
export declare function showVar(value: any): any;
/**
 * 检测某个数组是否包含某个值
 * @example
 * contains([1, 2, 2, 3, 3], 3); /// true
 * contains([1, 2, 2, 3, 3], '3'); /// false
 * contains(['test1', 'test2'],'test'); /// false
 * contains([{a: 1, b: 2}, {a: 2, b: 3}], {a: 2, b: 3}); /// true
 * contains([{a: 1, b: 2}, {a: 2, b: 3}], {b: 3, a: 2}); /// true
 * contains([[1, 2], [3, 4]], [4, 3]); /// true
 * contains([[1, 2], [3, 4]], [3, 4]); /// true
 * contains([[1, 2], [3, 4]], [1, 3]); /// false
 * @param value 值
 * @param target 目标值
 * @returns
 * @category Tools-工具方法
 */
export declare function contains(value: any[], target: any): boolean;
/**
 * 两个数值是否有相同的值（交集）
 * @example
 * same(['admin','manager','user','viewer','guest'], ['admin','user']); /// true
 * same(['admin','manager','user','viewer','guest'], 'admin'); /// true
 * same('admin', ['admin','user']); /// true
 * same('admin', 'admin'); /// true
 * same('admin', 'admins'); /// false
 * same('admins', 'admin'); /// false
 * @param valueA 值 A
 * @param valueB 值 B
 * @returns
 * @category Tools-工具方法
 */
export declare function same(valueA: any[] | string, valueB: any[] | string): boolean;
/**
 * 获取排序转换后的数组或对象（仅支持单层简单结构）
 * @example
 * getSortVar({ b: 3, a: 2 }); /// { a: 2, b: 3 }
 * getSortVar({ a: 2, b: 3 }); /// { a: 2, b: 3 }
 * getSortVar([1, 3, 2]); /// [1, 2, 3]
 * @param value 值
 * @returns
 * @category Tools-工具方法
 */
export declare function getSortVar(value: any): any;
/**
 * 反转数组或者字符串
 * @example
 * inversion([1, 2, 3]); /// [3, 2, 1]
 * inversion('123'); /// '321'
 * inversion(); /// undefined
 * inversion(true); /// true
 * @param value 值
 * @returns
 * @category Tools-工具方法
 */
export declare function inversion(value: any): any;
/**
 * 直到某个函数返回 toBool(true) 的结果(执行完成)
 * @example
 * let a = 5;
 * setTimeout(() => (a = 10), 5000);
 * waitUntil(() => a === 10).then(() => { console.log(a) });
 * @param condition 函数
 * @param timeout 超时
 * @param interval 执行间隔
 * @returns
 * @category Tools-工具方法
 */
export declare function waitUntil(condition: any, timeout?: number, interval?: number): Promise<any>;
/**
 * 毫秒转换
 * @example
 * ms('1s'); /// 1000
 * ms('1m'); /// 60000
 * ms('1.5h'); /// 5400000
 * ms('1d'); /// 86400000
 * ms('1y'); /// 31557600000
 * ms('1000'); /// 1000
 * ms(1500); /// '1.5s'
 * ms(60000); /// '1m'
 * @param str 值
 * @returns
 * @category Tools-工具方法
 */
export declare function ms(str: any): string | number;
/**
 * 文件流或内容转 Base64
 * @example
 * transferFileToBase64(file, 'application/pdf;charset=utf-8', (res) => console.log({ res })); /// result object
 * transferFileToBase64('test', 'text/plain', (res) => console.log({ res })); /// result object
 * @param content BlobPart | any 内容
 * @param contentType 内容类型
 * @param callBack 回调函数
 * @returns
 * @category Tools-下载/文件相关
 */
export declare function transferFileToBase64(content: any, contentType: string, callBack: any): void;
/**
 * 检查是否为 idCard string 身份证
 * 支持 15 、 18 位
 * @example
 * checkIdCard('350424870506202'); /// true
 * checkIdCard('003424870506202'); /// false
 * checkIdCard('415106199801012130'); /// true
 * checkIdCard('123123123123123222'); /// false
 * @param value 字符串值
 * @returns
 * @category Tools-工具方法
 */
export declare function checkIdCard(value: string): boolean;
/**
 * 获取年龄
 * @example
 * getAge('1998-9-28'); /// 24
 * getAge('1998-6-8', '2023-7'); /// 25
 * getAge('2023'); /// -1
 * @param birthday 生日
 * @param targetDate 目标日期
 * @returns
 * @category Tools-工具方法
 */
export declare function getAge(birthday: any, targetDate?: any): number;
/**
 * 获取生肖
 * @example
 * getAnimal('1998'); /// '虎'
 * getAnimal('1998-6-8'); /// '虎'
 * getAnimal('2023'); /// '兔'
 * @param date 日期
 * @returns
 * @category Tools-工具方法
 */
export declare function getAnimal(date: any): string;
/**
 * 身份证解析
 * @example
 * transferIdCard('350424870506202');
 * /// {"age":35,"year":"1987","idCard":"350424870506202","sex":"女","constellation":{"cn":"金牛","en":"Taurus","date":"4.20-5.20"},"gender":0,"province":"福建","animal":"兔","birthday":"1987-05-06"}
 * transferIdCard('415106199801012130');
 * /// {"age":24,"year":"1998","idCard":"415106199801012130","sex":"男","constellation":{"cn":"魔羯","en":"Capricorn","date":"12.22-1.19"},"gender":1,"province":"河南","animal":"虎","birthday":"1998-01-01"}
 * transferIdCard('xxxxx'); /// {}
 * @param idCard 字符串值
 * @returns
 * @category Tools-工具方法
 */
export declare function transferIdCard(idCard: string): any;
/**
 * 金额转中文
 * @example
 * transferMoney(900); /// '玖佰元整'
 * transferMoney(852.5); /// '捌佰伍拾贰元伍角'
 * @param n 数值
 * @returns
 * @category Tools-工具方法
 */
export declare function transferMoney(n: number): string;
/**
 * TTS 语音，可以在现代浏览器直接运行。
 * @example
 * const mySpeaker = Speaker();
 * mySpeaker.setText('你好，这是一条测试语音！hello');
 * mySpeaker.speak();
 * @param text 内容
 * @param lang 语言
 * @param volume 音量 [0, 1]
 * @param pitch 音高 [0, 2]
 * @param rate 速度 [0.1, 10]
 * @returns
 * @category TTS-文字转语音
 */
export declare function Speaker(text: string, lang?: string, volume?: number, pitch?: number, rate?: number): {
    getInstance: () => SpeechSynthesisUtterance;
    setText: (txt: string) => void;
    setLang: (lang: string) => void;
    setVolume: (volume: number) => void;
    setPitch: (pitch: number) => void;
    setRate: (rate: number) => void;
    setVoice: (voice: any) => void;
    getVoices: () => SpeechSynthesisVoice[];
    speak: () => void;
    stop: () => void;
};
/**
 * 页面灰白屏幕
 * @example
 * rip(); /// 页面灰白
 * @returns
 * @category BXH-自定义动画
 */
export declare function rip(): void;
/**
 * 获取星座
 * @example
 * getConstellation('11-24'); /// { cn: '射手', en: 'Sagittarius', date: '11.23-12.21' }
 * getConstellation('xxx'); /// {cn: '未知', en: 'unknown', date: 'xxx'}
 * getConstellation(new Date('2022-11-24')); /// { cn: '射手', en: 'Sagittarius', date: '11.23-12.21' }
 * @param date 日期
 * @returns
 * @category Tools-工具方法
 */
export declare function getConstellation(date: any): {
    cn: string;
    en: string;
    date: any;
};
/**
 * 设置监听函数
 * 返回取消该监听的函数 return cancel
 * @example
 * setEventListener('resize', () => { console.log('resize'); }); /// cancel 当前 listener 的 function
 * @param eventKey 事件 key
 * @param foo 函数
 * @param once 是否只触发一次
 * @param dom document.querySelector<HTMLDivElement>('.xxx')
 * @returns
 * @category Tools-工具方法
 */
export declare function setEventListener(eventKey: string, foo: any, once?: boolean, dom?: any): any;
/**
 * H5 移动端软键盘缩回/弹起回调
 * `return cancel listener of keyBoardResize`
 * @example
 * keyBoardResize(() => { console.log('downCb'); }, () => { console.log('upCb'); }); /// do something
 * @param downCb 缩回回调
 * @param upCb 弹起回调
 * @returns
 * @category Tools-工具方法
 */
export declare function keyBoardResize(downCb: any, upCb: any): any;
/**
 * 设置 resize 时的监听函数，默认重新加载页面。
 * 返回取消该监听的函数 return cancel
 * @example
 * onResize(); /// cancel 当前 listener 的 function
 * onResize('resize', () => { console.log('resize'); }); /// cancel 当前 listener 的 function
 * @param foo 函数
 * @returns
 * @category Tools-工具方法
 */
export declare function onResize(foo: any): any;
/**
 * 获取简单的浏览器指纹
 * @example
 * getFingerprint(); /// md5 加密后的指纹
 * getFingerprint('test'); /// md5 加密后的指纹-建议增加使用者标识，避免指纹冲突。
 * @param extraString 额外的字符串，可以说用户名等。
 * @returns
 * @category Tools-工具方法
 */
export declare function getFingerprint(extraString: string | number): string;
/**
 * 禁用控制台
 * windows
 * 防君子不防小人
 * 监听页面大小变化没必要
 * 监听编辑 dom 事件 reload 也算了
 * @example
 * banConsole(); /// 返回取消禁用的 function
 * @returns
 * @category Tools-工具方法
 */
export declare function banConsole(): any;
/**
 * 获取星期信息
 * @example
 * getWeekInfo(); /// WEEKS_INFO
 * getWeekInfo('0'); /// WEEKS_INFO
 * getWeekInfo('ALL'); /// WEEKS_INFO
 * getWeekInfo('all'); /// WEEKS_INFO
 * getWeekInfo('unknown'); /// WEEKS_INFO
 * getWeekInfo(1); /// 星期一相关信息
 * getWeekInfo(8); /// WEEKS_INFO
 * @param n 值
 * @returns
 * @category Tools-工具方法
 */
export declare function getWeekInfo(n: string | number): {
    key: string;
    name: string;
    abbr: string;
    id: number;
    others: string;
} | {
    key: string;
    name: string;
    abbr: string;
    id: number;
    others: string;
}[];
/**
 * 获取月份信息
 * @example
 * getMonthInfo(); /// MONTH_INFO
 * getMonthInfo('0'); /// MONTH_INFO
 * getMonthInfo('ALL'); /// MONTH_INFO
 * getMonthInfo('all'); /// MONTH_INFO
 * getMonthInfo('unknown'); /// MONTH_INFO
 * getMonthInfo(1); /// 一月相关信息
 * getMonthInfo(13); /// MONTH_INFO
 * @param n 值
 * @returns
 * @category Tools-工具方法
 */
export declare function getMonthInfo(n: string | number): {
    key: string;
    name: string;
    abbr: string;
    id: number;
    others: string;
} | {
    key: string;
    name: string;
    abbr: string;
    id: number;
    others: string;
}[];
/**
 * 判断两个值是否相等
 * @example
 * isEqual([1, 2, 3], [1, 2, 3]); /// true
 * isEqual({a: 1, b: 2}, {a: 1, b: 2}); /// true
 * isEqual({}, {}); /// true
 * isEqual(1, 1); /// true
 * isEqual(1, '1'); /// false
 * @param obj1 值 1
 * @param obj2 值 2
 * @returns
 * @category Tools-工具方法
 */
export declare function isEqual(obj1: any, obj2: any): boolean;
/**
 * 遍历数组或对象，并对每个元素执行回调函数，支持中途 break 和 continue 。
 * @example
 * forEach([1, 2, 3], (item, index) => console.log(item, index));
 * forEach([1, 2, 3], (item, index) => item * 2, true); /// [2, 4, 6]
 * forEach({a: 1, b: 2}, (value, key) => console.log(value, key));
 * forEach({a: 1, b: 2}, (value, key) => value * 2, true); /// {a: 2, b: 4}
 * @param data 要遍历的数据，可以是数组或对象。
 * @param callback 回调函数
 * @param hasReturn 是否返回一个新值
 * @returns
 * @category Tools-工具方法
 */
export declare function forEach(data: any, callback: (value: any, ik: any) => any | '_break' | '_continue', hasReturn?: boolean): any;
/**
 * 获取带前/后缀的唯一 key
 * @example
 * getKey(); /// 'M2rmCcGpXCa5MTdN4Kks5'
 * getKey(2, 'test'); /// 'test-aK'
 * getKey(2, null, 'last'); /// 'aK-last'
 * @param size 指定长度
 * @param prefix 前缀
 * @param prefix 后缀
 * @returns
 * @category Crypto-密码学
 */
export declare function getKey(size?: number, prefix?: string, suffix?: string): string;
/**
 * 生成一个指定长度的随机数字符串
 * @example
 * getRandStr(2); /// '43'
 * getRandStr(5); /// '77192'
 * @param length 指定长度
 * @returns
 * @category Crypto-密码学
 */
export declare function getRandStr(length: number): string;
/**
 * 获取 V4 版本 UUID
 * @example
 * uuid(); /// '7b72e264-61fe-426e-b95f-35d4e61c5742'
 * @returns
 * @category Crypto-密码学
 */
export declare function uuid(): string;
/**
 * 获取随机日期时间
 * @example
 * getRandDate(); /// '1923-01-01 01:03:30'
 * @returns
 * @category Tools-工具方法
 */
export declare function getRandDate(): string;
/**
 * 获取随机 IP 地址
 * @example
 * getRandIp(); /// '89.0.142.86'
 * @returns
 * @category Tools-工具方法
 */
export declare function getRandIp(): string;
/**
 * 给对应 dom 生成水印
 * 窗口 resize 的时候最好要重新调用渲染
 * @example
 * watermark(document.body, 'My Watermark', { fontSize: 20, opacity: 0.5, angle: -30, color: 'red', fontFamily: 'Arial', repeat: true, backgroundOpacity: 0.05 });
 * watermark(document.body, 'My Watermark'); /// 在 body 中生成水印
 * watermark(document.body, 'My Watermark\n2024-07-11'); /// 在 body 中生成水印，支持换行符。
 * watermark(document.body, 'My Watermark', { fontSize: 120, color: 'red', repeat: false, angle: 0 }); /// 在 body 中生成水印
 * watermark(document.body, 'My Watermark', { fontSize: 20, color: 'red', repeat: true, angle: 90 }); /// 在 body 中生成水印
 * @param dom 需要生成水印的 dom
 * @param text 水印文本，支持换行符 `\n` 。
 * @param options 样式配置
 * @returns
 * @category Watermark-水印
 */
export declare function watermark(dom: any, text: string, options?: any): void;
/**
 * 创建定时器
 * @example
 * const cancelTimer = xTimer(() => {
 *   console.log('Timer executed!');
 * }, 1000, true, true);
 * cancelTimer();
 * const cancelIntervalTimer = xTimer(() => {
 *   console.log('IntervalTimer executed!');
 * }, 1000, false);
 * cancelIntervalTimer();
 * @param callback 回调函数
 * @param [time=1] 时间间隔（毫秒），默认为 1 。
 * @param [once=false] 是否为一次性定时器，默认为 false 。
 * @param [immediate=false] 是否立即执行回调函数，默认为 false 。
 * @returns
 * @category xTimer-定时器封装
 */
export declare function xTimer(callback: any, time?: number, once?: boolean, immediate?: boolean): () => void;
/**
 * -函数柯里化-
 * 是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。
 * @example
 * curryIt(function (a, b, c) {return a + b + c})(1)(2)(3); /// 6
 * @param fn 函数
 * @returns
 * @category Tools-工具方法
 */
export declare function curryIt(fn: any): (...args: any[]) => any;
//# sourceMappingURL=index.d.ts.map