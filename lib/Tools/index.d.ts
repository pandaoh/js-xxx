/**
 * 获取 16 位可读时间戳
 * Example: `getTimeCode() => '2036551026042022'`
 * @returns
 */
export declare function getTimeCode(): string;
/**
 * 判断值是否为空
 * Example:
 * `empty('') => true`
 * `empty(null) => true`
 * `empty('null') => true`
 * `empty('undefined') => true`
 * `empty(undefined) => true`
 * `empty(0) => false`
 * `empty('0') => false`
 * `empty(NaN) => true`
 * `empty('NaN') => true`
 * `empty({}) => true`
 * `empty([]) => true`
 * @param variable 变量
 * @returns
 */
export declare function empty(variable: any): boolean;
/**
 * 获取对象/数组第一个值
 * Example:
 * `get1Var([1, 2]) => 1`
 * `get1Var({a: 2,b: 1}) => 2`
 * @param data 源数据
 * @returns
 */
export declare function get1Var(data: any): any;
/**
 * 获取数组或对象随机数据
 * Example:
 * `getRandVar({ a: 1, b: 3 }) => 1`
 * `getRandomVar([1, 2, 3, 4], 2) => [2, 4]`
 * @param value
 * @param count
 * @returns
 */
export declare function getRandVar(value: any, count?: number): any | any[];
/**
 * 获取对象/数组最后一个值(对象为 Object.keys 的顺序)
 * Example:
 * `getLastVar([1, 2]) => 2`
 * `getLastVar({a: 2, b: 1}) => b`
 * @param data 源数据
 * @returns
 */
export declare function getLastVar(data: any): any;
/**
 * 防抖函数-最后一次有效（抢购）
 * Example: `debounce(() => {}, 1000) => 防抖执行`
 * @param fn 执行的函数
 * @param delay 延迟时间
 * @returns
 */
export declare function debounce(fn: any, delay?: number): () => void;
/**
 * 节流函数-第一次有效（游戏开枪间隔）
 * Example: `throttle(() => {}, 1000) => 节流执行`
 * @param fn 执行的函数
 * @param delay 延迟时间
 * @returns
 */
export declare function throttle(fn: any, delay?: number): () => void;
/**
 * 函数柯里化
 * 是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。
 * Example: `curryIt(function (a, b, c) {return a + b + c})(1)(2)(3) => 6`
 * @param fn
 * @returns
 */
export declare function curryIt(fn: any): (arg: any) => any;
/**
 * 全局捕获异常
 * Example: `globalError((message, source, lineNo, colNo, error) => console.log('全局捕获异常'), false) => '全局捕获异常'`
 * @param {any} fn (message, source, lineNo, colNo, error)
 * @param {boolean} notShowConsole 是否不回显控制台
 * @returns
 */
export declare function globalError(fn: any, notShowConsole?: boolean): void;
/**
 * 获取随机数字
 * Example: `getRandNum(1, 10) => 1~10 之间的随机数，闭区间。`
 * @param min 最小值
 * @param max 最大值
 * @returns
 */
export declare function getRandNum(min?: number, max?: number): number;
/**
 * 获取随机颜色
 * Example: `getRandColor() => '#xxxxxx'`
 * @returns
 */
export declare function getRandColor(): string;
/**
 * 获取随机数字字符串
 * Example: `getRandStr(6) => 'xxxxxx'`
 * @param len 长度
 * @returns
 */
export declare function getRandStr(len?: number): string;
/**
 * 获取简单的唯一字符串(时间戳+随机数+进制转换)
 * Example: `getTimeAndStr(5, 36) => 'xxxxxx'`
 * @param len 随机字符的长度
 * @param radix 结果以此进行进制转换
 * @returns
 */
export declare function getTimeAndStr(len?: number, radix?: number | undefined): string;
/**
 * 获取简单的 UUID
 * Example: `getUUID() => 'ghijklmn'`
 * @param length 指定位数
 * @param radix 指定字符
 * @returns
 */
export declare function getUUID(length: number, chars: string | any[]): string;
/**
 * 获取 bootstrap 颜色
 * Example:
 * `getBSColor() => '#6c757d'`
 * `getBSColor('red') => '#dc3545'`
 * `getBSColor('warning') => '#ffc107'`
 * @param key color name
 * @returns
 */
export declare function getBSColor(key?: string): string;
/**
 * 获取 V4 版本 UUID
 * Example: `uuid() => '7b72e264-61fe-426e-b95f-35d4e61c5742'`
 * @returns
 */
export declare function uuid(): string;
/**
 * 获取带前缀的唯一 key
 * Example:
 * `getKey() => 'M2rmCcGpXCa5MTdN4Kks5'`
 * `getKey(2, 'test-') => test-aK'`
 * @param size
 * @param prefix
 * @returns
 */
export declare function getKey(size?: number, prefix?: string): string;
/**
 * 获取任意变量长度
 * Example:
 * `getSize([]) => 0`
 * `getSize({a: 1, b: 2}) => 2`
 * `getSize(null) => 0`
 * @param value
 * @returns
 */
export declare function getSize(value: any): number;
/**
 * 在浏览器中打开文件选择框
 * Example: `openFile({ multiple: true, accept: '.txt' }).then(fileList => console.log(fileList));`
 * @param options
 * @returns
 */
export declare function openFile(options?: {
    accept?: string;
    multiple?: boolean;
}): Promise<any>;
/**
 * 开启全屏
 * Example: `openFullscreen() => 开启全屏`
 * @param element
 * @returns
 */
export declare function openFullscreen(element?: any): void;
/**
 * 关闭全屏
 * Example: `closeFullscreen() => 关闭全屏`
 * @param
 * @returns
 */
export declare function closeFullscreen(): void;
/**
 * 获取数组或对象交集
 * Example:
 * `intersection([1, 2, 2, 3, 3], [1, 2, 4, 5]) => [1, 2]`
 * `intersection({a: 1, b: 2}, {a: 1, c: 3, b: 4}) => {a: 1}`
 * @param paramA
 * @param paramB
 * @returns
 */
export declare function intersection(paramA: any, paramB: any): any;
/**
 * 获取数组或对象并集
 * Example:
 * `union([1, 2, 2, 3, 3], [1, 2, 4, 5]) => [1, 2, 3, 4, 5]`
 * `union({a: 1, b: 2}, {a: 1, c: 3, b: 4}) => {a: 1, c: 3, b: 2}`
 * @param paramA
 * @param paramB
 * @returns
 */
export declare function union(paramA: any, paramB: any): any;
/**
 * 获取数组或对象不同值集合
 * Example:
 * `difference([1, 2, 2, 3, 3], [1, 2, 4, 5]) => [3]`
 * `difference({a: 1, b: 2}, {a: 1, c: 3, b: 4}) => {b: 2}`
 * @param paramA
 * @param paramB
 * @returns
 */
export declare function difference(paramA: any, paramB: any): any;
/**
 * JSON 转字符串式克隆
 * Example:
 * `jsonClone([1, 2, 2, 3, 3]) => [1, 2, 2, 3, 3]`
 * `jsonClone({a: 1, b: 2}) => {a: 1, b: 2}`
 * @param value
 * @returns
 */
export declare function jsonClone(value: any): any;
/**
 * 打印某个函数运行时间
 * Example:
 * `logRunTime(() => [1, 2, 3].reduce(...))`
 * `logRunTime(() => [1, 2, 3].reduce(...), 'timeKey')`
 * `logRunTime(async () => { await fun1(); await fun2(); })`
 * `logRunTime($promiseReturnFunction)`
 * `logRunTime(new Promise((resolve, reject) => { setTimeout(() => resolve('test'), 1000) }))`
 * @param fn
 * @param timeKey
 * @returns
 */
export declare function logRunTime(fn: any, timeKey: string): void;
/**
 * 打印日志工具类
 * Example:
 * `const {log, warning, success, danger, dark, primary, info} = Logger()`
 * `log(1, new Date, 'test', [1, 2, 3], {log})`
 * @returns
 */
export declare function Logger(): {
    log: (...args: any[]) => void;
    info: (...args: any[]) => void;
    success: (...args: any[]) => void;
    warning: (...args: any[]) => void;
    danger: (...args: any[]) => void;
    primary: (...args: any[]) => void;
    dark: (...args: any[]) => void;
    [key: string]: (...args: any[]) => void;
};
/**
 * 在页面上显示某个值
 * Example:
 * `showVar([1, 2, 2, 3, 3]) => 显示序列化之后的数据`
 * `showVar({a: 1, b: 2}) => 显示序列化之后的数据`
 * @param value
 * @returns
 */
export declare function showVar(value: any): any;
/**
 * 在页面上打印某个值，我们打包通常会设置清除 console，使用此函数打印关键信息就不会被清除啦。
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
 * 检测某个数组是否包含某个值
 * Example:
 * `contains([1, 2, 2, 3, 3], 3) => true`
 * `contains([1, 2, 2, 3, 3], '3') => false`
 * `contains([{a: 1, b: 2}, {a: 2, b: 3}], {a: 2, b: 3}) => true`
 * `contains([[1, 2], [3, 4]], [1, 3]) => false`
 * @param value
 * @param target
 * @returns
 */
export declare function contains(value: any[], target: any): boolean;
/**
 * 直到某个函数返回 toBool(true) 的结果(执行完成)
 * Example:
 * `let a = 5;`
 * `setTimeout(() => (a = 10), 5000);`
 * `waitUntil(() => a === 10).then(() => { console.log(a) });`
 * @param condition
 * @param timeout
 * @param interval
 * @returns
 */
export declare function waitUntil(condition: any, timeout?: number, interval?: number): Promise<any>;
/**
 * 毫秒转换
 * Example:
 * `ms('1s') => 1000`
 * `ms('1m') => 60000`
 * `ms('1.5h') => 5400000`
 * `ms('1d') => 86400000`
 * `ms('1y') => 31557600000`
 * `ms('1000') => 1000`
 * `ms(1500) => '1.5s'`
 * `ms(60000) => '1m'`
 * @param str
 * @returns
 */
export declare function ms(str: any): string | number;
/**
 * 文件流或内容转 Base64
 * Example:
 * `transferFileToBase64(file, 'application/pdf;charset=utf-8', (res) => console.log({ res })) => result object`
 * `transferFileToBase64('test', 'text/plain', (res) => console.log({ res })) => result object`
 * @param content BlobPart | any
 * @param contentType
 * @param callBack
 * @returns
 */
export declare function transferFileToBase64(content: any, contentType: string, callBack: any): void;
/**
 * 检查是否为 idCard string 身份证
 * 支持 15 、 18 位
 * Example:
 * `checkIdCard('350424870506202') => true`
 * `checkIdCard('003424870506202') => false`
 * `checkIdCard('415106199801012130') => true`
 * `checkIdCard('123123123123123222') => false`
 * @param value
 * @returns
 */
export declare function checkIdCard(value: string): boolean;
/**
 * 获取年龄
 * Example:
 * `getAge('1998-9-28') => 24`
 * `getAge('1998-6-8', '2023-7') => 25`
 * `getAge('2023') => -1`
 * @param birthday
 * @param targetDate
 * @returns
 */
export declare function getAge(birthday: any, targetDate?: any): number;
/**
 * 获取生肖
 * Example:
 * `getAnimal('1998') => '虎'`
 * `getAnimal('1998-6-8') => '虎'`
 * `getAnimal('2023') => '兔'`
 * @param date
 * @returns
 */
export declare function getAnimal(date: any): string;
/**
 * 身份证解析
 * Example:
 * `transferIdCard('350424870506202') => {"age":35,"year":"1987","idCard":"350424870506202","sex":"女","constellation":{"cn":"金牛","en":"Taurus","date":"4.20-5.20"},"gender":0,"province":"福建","animal":"兔","birthday":"1987-05-06"}`
 * `transferIdCard('415106199801012130') => {"age":24,"year":"1998","idCard":"415106199801012130","sex":"男","constellation":{"cn":"魔羯","en":"Capricorn","date":"12.22-1.19"},"gender":1,"province":"河南","animal":"虎","birthday":"1998-01-01"}`
 * `transferIdCard('xxxxx') => {}`
 * @param idCard
 * @returns
 */
export declare function transferIdCard(idCard: string): any;
/**
 * 金额转中文
 * Example:
 * `transferMoney(900) => '玖佰元整'`
 * `transferMoney(852.5) => '捌佰伍拾贰元伍角'`
 * @param n
 * @returns
 */
export declare function transferMoney(n: number): string;
/**
 * TTS 语音，可以在现代浏览器直接运行。
 * Example:
 * `const mySpeaker = Speaker()`
 * `mySpeaker.setText('你好，这是一条测试语音！hello'); mySpeaker.speak();`
 * @param text 内容
 * @param lang 语言
 * @param volume 音量 [0, 1]
 * @param pitch 音高 [0, 2]
 * @param rate 速度 [0.1, 10]
 * @returns
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
 * Example: `rip() => 页面灰白`
 * @returns
 */
export declare function rip(): void;
/**
 * 获取星座
 * Example:
 * `getConstellation('11-24') => { cn: '射手', en: 'Sagittarius', date: '11.23-12.21' }`
 * `getConstellation('xxx') => {cn: '未知', en: 'unknown', date: 'xxx'}`
 * `getConstellation(new Date('2022-11-24')) => { cn: '射手', en: 'Sagittarius', date: '11.23-12.21' }`
 * @param date
 * @returns
 */
export declare function getConstellation(date: any): {
    cn: string;
    en: string;
    date: any;
};
/**
 * 设置监听函数
 * 返回取消该监听的函数 return cancel
 * Example: `setEventListener('resize', () => { console.log('resize'); }) => cancel 当前 listener 的 function`
 * @param eventKey
 * @param foo
 * @param dom
 * @returns
 */
export declare function setEventListener(eventKey: string, foo: any, dom?: any): any;
/**
 * H5 软键盘缩回/弹起回调
 * return cancel listener of H5Resize
 * Example: `H5Resize(()=>{ console.log('downCb'); }, ()=>{ console.log('upCb'); }) => do something`
 * @param downCb
 * @param upCb
 * @returns
 */
export declare function H5Resize(downCb: any, upCb: any): any;
/**
 * 禁用控制台
 * windows
 * 防君子不防小人
 * 监听页面大小变化没必要
 * 监听编辑 dom 事件 reload 也算了
 * Example: `banConsole() => 返回取消禁用的 function`
 * @returns
 */
export declare function banConsole(): any;
/**
 * 获取星期信息
 * Example:
 * `getWeekInfo() => WEEKS_INFO`
 * `getWeekInfo('0') => WEEKS_INFO`
 * `getWeekInfo('ALL') => WEEKS_INFO`
 * `getWeekInfo('all') => WEEKS_INFO`
 * `getWeekInfo('unknown') => WEEKS_INFO`
 * `getWeekInfo(1) => 星期一相关信息`
 * `getWeekInfo(8) => WEEKS_INFO`
 * @param n
 * @returns
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
 * 获取星期信息
 * Example:
 * `getMonthInfo() => MONTH_INFO`
 * `getMonthInfo('0') => MONTH_INFO`
 * `getMonthInfo('ALL') => MONTH_INFO`
 * `getMonthInfo('all') => MONTH_INFO`
 * `getMonthInfo('unknown') => MONTH_INFO`
 * `getMonthInfo(1) => 一月相关信息`
 * `getMonthInfo(13) => MONTH_INFO`
 * @param n
 * @returns
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
 * Example:
 * `isEqual([1, 2, 3], [1, 2, 3]) => true`
 * `isEqual({a: 1, b: 2}, {a: 1, b: 2}) => true`
 * `isEqual({}, {}) => true`
 * `isEqual(1, 1) => true`
 * `isEqual(1, '1') => false`
 * @param obj1
 * @param obj2
 * @returns
 */
export declare function isEqual(obj1: any, obj2: any): boolean;
//# sourceMappingURL=index.d.ts.map