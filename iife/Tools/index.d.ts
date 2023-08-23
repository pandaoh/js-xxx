/**
 * 获取 16 位可读时间戳
 * @example
 * getTimeCode(); /// '2036551026042022'
 * @returns
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
 */
export declare function empty(variable: any): boolean;
/**
 * 获取对象/数组第一个值
 * @example
 * get1Var([1, 2]); /// 1
 * get1Var({a: 2,b: 1}); /// 2
 * @param data 源数据
 * @returns
 */
export declare function get1Var(data: any): any;
/**
 * 获取数组或对象随机数据
 * @example
 * getRandVar({ a: 1, b: 3 }); /// 1
 * getRandomVar([1, 2, 3, 4], 2); /// [2, 4]
 * @param value 值
 * @param count 获取数据量
 * @returns
 */
export declare function getRandVar(value: any, count?: number): any | any[];
/**
 * 获取对象/数组最后一个值(对象为 Object.keys 的顺序)
 * @example
 * getLastVar([1, 2]); /// 2
 * getLastVar({a: 2, b: 1}); /// b
 * @param data 源数据
 * @returns
 */
export declare function getLastVar(data: any): any;
/**
 * 防抖函数-最后一次有效（抢购）
 * @example
 * debounce(() => {}, 1000); /// 防抖执行
 * @param fn 执行的函数
 * @param delay 延迟时间
 * @returns
 */
export declare function debounce(fn: any, delay?: number): () => void;
/**
 * 节流函数-第一次有效（游戏开枪间隔）
 * @example
 * throttle(() => {}, 1000); /// 节流执行
 * @param fn 执行的函数
 * @param delay 延迟时间
 * @returns
 */
export declare function throttle(fn: any, delay?: number): () => void;
/**
 * 函数柯里化
 * 是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。
 * @example
 * curryIt(function (a, b, c) {return a + b + c})(1)(2)(3); /// 6
 * @param fn 函数
 * @returns
 */
export declare function curryIt(fn: any): (arg: any) => any;
/**
 * 全局捕获异常
 * @example
 * globalError((message, source, lineNo, colNo, error) => console.log('全局捕获异常'), false); /// '全局捕获异常'
 * @param fn (message, source, lineNo, colNo, error)
 * @param notShowConsole 是否不回显控制台
 * @returns
 */
export declare function globalError(fn: any, notShowConsole?: boolean): void;
/**
 * 获取随机数字
 * @example
 * getRandNum(1, 10); /// 1~10 之间的随机数，闭区间。
 * @param min 最小值
 * @param max 最大值
 * @returns
 */
export declare function getRandNum(min?: number, max?: number): number;
/**
 * 获取随机颜色
 * @example
 * getRandColor(); /// '#xxxxxx'
 * @returns
 */
export declare function getRandColor(): string;
/**
 * 获取随机数字字符串
 * @example
 * getRandStr(6); /// 'xxxxxx'
 * @param len 长度
 * @returns
 */
export declare function getRandStr(len?: number): string;
/**
 * 获取简单的唯一字符串(时间戳+随机数+进制转换)
 * @example
 * getTimeAndStr(5, 36); /// 'xxxxxx'
 * @param len 随机字符的长度
 * @param radix 结果以此进行进制转换
 * @returns
 */
export declare function getTimeAndStr(len?: number, radix?: number | undefined): string;
/**
 * 获取简单的 UUID
 * @example
 * getUUID(); /// 'ghijklmn'
 * @param length 指定位数
 * @param chars 指定字符
 * @returns
 */
export declare function getUUID(length: number, chars: string | any[]): string;
/**
 * 获取 bootstrap 颜色
 * @example
 * getBSColor(); /// '#6c757d'
 * getBSColor('red'); /// '#dc3545'
 * getBSColor('warning'); /// '#ffc107'
 * @param key color name
 * @returns
 */
export declare function getBSColor(key?: string): string;
/**
 * 获取 V4 版本 UUID
 * @example
 * uuid(); /// '7b72e264-61fe-426e-b95f-35d4e61c5742'
 * @returns
 */
export declare function uuid(): string;
/**
 * 获取带前缀的唯一 key
 * @example
 * getKey(); /// 'M2rmCcGpXCa5MTdN4Kks5'
 * getKey(2, 'test-'); /// test-aK'
 * @param size 指定长度
 * @param prefix 前缀
 * @returns
 */
export declare function getKey(size?: number, prefix?: string): string;
/**
 * 获取任意变量长度
 * @example
 * getSize([]); /// 0
 * getSize({a: 1, b: 2}); /// 2
 * getSize(null); /// 0
 * @param value 值
 * @returns
 */
export declare function getSize(value: any): number;
/**
 * 在浏览器中打开文件选择框
 * @example
 * openFile({ multiple: true, accept: '.txt' }).then(fileList => console.log(fileList));
 * @param options 打开配置
 * @returns
 */
export declare function openFile(options?: {
    accept?: string;
    multiple?: boolean;
}): Promise<any>;
/**
 * 开启全屏
 * @example
 * openFullscreen(); /// 开启全屏
 * @param element 元素
 * @returns
 */
export declare function openFullscreen(element?: any): void;
/**
 * 关闭全屏
 * @example
 * closeFullscreen(); /// 关闭全屏
 * @returns
 */
export declare function closeFullscreen(): void;
/**
 * 获取数组或对象交集
 * @example
 * intersection([1, 2, 2, 3, 3], [1, 2, 4, 5]); /// [1, 2]
 * intersection({a: 1, b: 2}, {a: 1, c: 3, b: 4}); /// {a: 1}
 * @param paramA 值 A
 * @param paramB 值 B
 * @returns
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
 */
export declare function difference(paramA: any, paramB: any): any;
/**
 * JSON 转字符串式克隆
 * @example
 * jsonClone([1, 2, 2, 3, 3]); /// [1, 2, 2, 3, 3]
 * jsonClone({a: 1, b: 2}); /// {a: 1, b: 2}
 * @param value 值
 * @returns
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
 * @param timeKey 打印关键 key
 * @returns
 */
export declare function logRunTime(fn: any, timeKey: string): void;
/**
 * 打印日志工具类
 * @example
 * const {log, warning, success, danger, dark, primary, info} = Logger();
 * log(1, new Date, 'test', [1, 2, 3], {log});
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
 * @example
 * showVar([1, 2, 2, 3, 3]); /// 显示序列化之后的数据
 * showVar({a: 1, b: 2}); /// 显示序列化之后的数据
 * @param value 值
 * @returns
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
 */
export declare function transferIdCard(idCard: string): any;
/**
 * 金额转中文
 * @example
 * transferMoney(900); /// '玖佰元整'
 * transferMoney(852.5); /// '捌佰伍拾贰元伍角'
 * @param n 数值
 * @returns
 */
export declare function transferMoney(n: number): string;
/**
 * 格式化金额，展示位银行金额格式。
 * @example
 * formatMoney(90000); /// '90,000.00'
 * formatMoney(852.1314, 2); /// '852.13'
 * @param longData 数值
 * @param length 精度
 * @returns
 */
export declare function formatMoney(longData: string | number, length: number): string;
/**
 * TTS 语音，可以在现代浏览器直接运行。
 * @example
 * const mySpeaker = Speaker();
 * mySpeaker.setText('你好，这是一条测试语音！hello'); mySpeaker.speak();
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
 * @example
 * rip(); /// 页面灰白
 * @returns
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
 */
export declare function setEventListener(eventKey: string, foo: any, once?: boolean, dom?: any): any;
/**
 * H5 软键盘缩回/弹起回调
 * return cancel listener of H5Resize
 * @example
 * H5Resize(()=>{ console.log('downCb'); }, ()=>{ console.log('upCb'); }); /// do something
 * @param downCb 缩回回调
 * @param upCb 弹起回调
 * @returns
 */
export declare function H5Resize(downCb: any, upCb: any): any;
/**
 * 禁用控制台
 * windows
 * 防君子不防小人
 * 监听页面大小变化没必要
 * 监听编辑 dom 事件 reload 也算了
 * @example
 * banConsole(); /// 返回取消禁用的 function
 * @returns
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
 */
export declare function forEach(data: any, callback: (value: any, ik: any) => any | '_break' | '_continue', hasReturn?: boolean): any;
//# sourceMappingURL=index.d.ts.map