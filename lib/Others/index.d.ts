/**
 * 文件大小格式化
 * @example
 * formatBytes(1024); /// '1.00 KB'
 * @param bytes 文件大小 bytes
 * @param precision 精度
 * @returns
 * @category Others-业务/其他
 */
export declare function formatBytes(bytes: number, precision?: number): string;
/**
 * 获取浏览器信息
 * @example
 * getUserAgent(); /// { browserName: 'Chrome', browserVersion: '102.0.0.0', osName: 'Windows', osVersion: '10.0', deviceName: '' }
 * @returns
 * @category Others-业务/其他
 */
export declare function getUserAgent(): {
    browserName: string;
    browserVersion: string;
    osName: string;
    osVersion: string;
};
/**
 * 判断当前运行环境是否为 Node.js
 * @example
 * isNode(); /// true
 * @returns
 * @category Others-业务/其他
 */
export declare function isNode(): boolean;
/**
 * 判断当前运行环境是否为浏览器
 * @example
 * isBrowser(); /// true
 * @returns
 * @category Others-业务/其他
 */
export declare function isBrowser(): boolean;
/**
 * 检测黑暗模式
 * @example
 * isDarkMode(); /// true
 * @returns
 * @category Others-业务/其他
 */
export declare function isDarkMode(): boolean;
/**
 * 是否苹果设备
 * @example
 * isAppleDevice(); /// true
 * @returns
 * @category Others-业务/其他
 */
export declare function isAppleDevice(): boolean;
/**
 * 判断是否客户端渲染
 * @example
 * isCSR(); /// true
 * @returns
 * @category Others-业务/其他
 */
export declare function isCSR(): boolean;
/**
 * 判断是否 Windows
 * @example
 * isWin(); /// true
 * @returns
 * @category Others-业务/其他
 */
export declare function isWin(): boolean;
/**
 * 判断是否 MacOS
 * @example
 * isMac(); /// true
 * @returns
 * @category Others-业务/其他
 */
export declare function isMac(): boolean;
/**
 * 判断是否 Chrome 内核
 * @example
 * isChrome(); /// true
 * @returns
 * @category Others-业务/其他
 */
export declare function isChrome(): boolean;
/**
 * 版本号比对算法
 * @example
 * checkVersion('1.0.1-rc', '1.0.0', '-rc'); /// 1
 * checkVersion('1.0.0', '1.0.1'); /// -1
 * checkVersion('1.0.0', '1.0.0'); /// 0
 * @param targetVersion 目标版本
 * @param currentVersion 当前版本
 * @param testStr 需要替换的字符串 default(-rc)
 * @returns
 * @category Others-业务/其他
 */
export declare function checkVersion(targetVersion: string, currentVersion: string, testStr?: string): -1 | 1 | 0;
/**
 * 版本号升级算法
 * @example
 * versionUpgrade('0.0.1'); /// '0.0.2'
 * versionUpgrade('0.0.0.9'); /// '0.0.0.10'
 * versionUpgrade('0.0.0.9', 9); /// '0.0.1.0'
 * versionUpgrade('0.0.9.9', 9); /// '0.1.0.0'
 * @param version 版本号
 * @param maxVersionCode 最大版本号
 * @returns
 * @category Others-业务/其他
 */
export declare function versionUpgrade(version: string, maxVersionCode?: number): string;
/**
 * 处理 rh 血型
 * @example
 * formatRh('**d**'); /// '阴性'
 * formatRh('**d**', { format: [true, false], default: false }); /// true
 * @param input 输入值
 * @param options 处理配置
 * @returns
 * @category Others-业务/其他
 */
export declare function formatRh(input: string, options?: {
    format?: [string | number | boolean, string | number | boolean];
    default?: string | number | boolean;
    negative?: Array<string>;
    positive?: Array<string>;
}): string | boolean | number;
/**
 * 是否阴性血
 * @example
 * isRhNegative('**d**'); /// true
 * @param input 输入值
 * @returns
 * @category Others-业务/其他
 */
export declare function isRhNegative(input: string): boolean;
/**
 * 获取血型枚举信息
 * @example
 * getBloodGroup('A'); /// { value: 'A', label: 'A 型', color: '#1890FF', lower: 'a', upper: 'A' }
 * @param bloodGroup 血型
 * @returns
 * @category Others-业务/其他
 */
export declare function getBloodGroup(bloodGroup: string): {
    value: string;
    label: string;
    color: string;
    lower: string;
    upper: string;
};
/**
 * 生成 cron 表达式
 * @example
 * calcCron(); /// '* * * * *'
 * calcCron({ minute: '30', hour: '1', day: '10'}); /// '30 1 10 * *'
 * calcCron({  week: '?' }); /// '* * * * ?'
 * calcCron({ week: '*' }); /// '* * * * *'
 * calcCron({ week: 0 }); /// '* * * * 0'
 * calcCron({ week: '0' }); /// '* * * * 0'
 * calcCron({ week: '7' }); /// '* * * * 0'
 * calcCron({ week: 'SUN,天,日,六,6,5' }); /// '* * * * 0,5,6'
 * calcCron({ day: '1-5' }); /// '* * 1-5 * * '
 * calcCron({ day: '1,5' }); /// '* * 1,5 * * '
 * calcCron({ day: '1/5' }); /// '* * 1/5 * * '
 * @param options cron 配置
 * @returns
 * @category Others-业务/其他
 */
export declare function calcCron({ minute, hour, day, month, week }?: {
    minute?: string | undefined;
    hour?: string | undefined;
    day?: string | undefined;
    month?: string | undefined;
    week?: string | undefined;
}): string;
/**
 * 在页面上打印数据，我们打包通常会设置清除 console，使用此函数打印关键信息就不会被清除啦。
 * @example
 * log([1, 2, 2, 3, 3], {a: 1, b: 2}, 'test', true); /// 打印数据
 * log('danger'); /// 打印数据
 * @param args 打印数据 rest 参数
 * @returns
 * @category Extra-日志/调试
 */
export declare function log(...args: any[]): string;
/**
 * 强制转化为字符串，避免导出表格显示科学计数法。
 * @example
 * forceToStr(123123123); /// '123123123'
 * forceToStr(undefined); /// '-'
 * forceToStr(undefined, 0); /// '0'
 * @param value 值
 * @param defaultValue 默认值
 * @returns
 * @category Tools-下载/文件相关
 */
export declare function forceToStr(value: any, defaultValue?: string): string;
/**
 * 转换 data 为可导出的 csv 数据
 * @example
 * transferCSVData([{ prop: 'name' }, { prop: 'age' }], [{ name: '张三', age: 15 }]); /// 可以导出的字符数据
 * transferCSVData([{ label: '姓名', prop: 'name' }, { label: '年龄', prop: 'age' }], [{ name: '张三', age: 15 }]); /// 可以导出的字符数据
 * @param fields 导出的栏位
 * @param data 数据
 * @returns
 * @category Tools-下载/文件相关
 */
export declare function transferCSVData(fields: {
    label?: string;
    prop: string;
}[], data: any[]): string;
/**
 * 导出数据为文件
 * @example
 * exportFile(data); /// 导出 txt 文件
 * exportFile(data, 'csv-导出文件测试', 'csv'); /// 导出 csv 文件
 * exportFile(document.getElementById('table_to_xls').outerHTML, 'excelWithStyle', 'xls'); /// 导出表格为带样式的 excel xls 文件
 * exportFile('http://a.biugle.cn/img/cdn/dev/avatar/1.png', 'test', 'png'); /// 导出 png 文件
 * @param data 数据
 * @param fileName 文件名
 * @param fileType 文件类型
 * @returns
 * @category Tools-下载/文件相关
 */
export declare function exportFile(data: string, fileName?: string, fileType?: string): void;
/**
 * 华氏/摄氏度互转
 * @example
 * transferTemperature(30.5); /// '86.9 °F'
 * transferTemperature(86, false, false); /// 30
 * @returns
 * @category Others-业务/其他
 */
export declare function transferTemperature(temperature: number | string, isCelsius?: boolean, addSuffix?: boolean): string | number;
/**
 * 获取数据，支持格式化，默认值。
 * @example
 * getDataStr(123123123); /// '123123123'
 * getDataStr(undefined); /// '-'
 * getDataStr(undefined, 0); /// '0'
 * getDataStr('test', '', '(', ')'); /// '(test)'
 * getDataStr(undefined, '', '(', ')'); /// ''
 * getDataStr(false); /// 'false'
 * @param value 值
 * @param defaultValue 默认值
 * @param prefix 前缀
 * @param suffix 后缀
 * @returns
 * @category Others-业务/其他
 */
export declare function getDataStr(value: any, defaultValue?: string, prefix?: string, suffix?: string): string;
/**
 * 比较两个值是否相等，支持严格模式和忽略大小写的比较。
 * @example
 * compareTo(1, 2); /// false
 * compareTo('a', 'A'); /// true
 * compareTo('a', 'A', true); /// false
 * compareTo(3, 3); /// true
 * compareTo(2, '2'); /// true
 * compareTo('apple', 'banana'); /// false
 * compareTo('2', 2, true); /// false
 * compareTo('2', 2); /// true
 * @param value1 第一个值
 * @param value2 第二个值
 * @param strict 是否启用严格模式: true 表示严格比较，false 表示忽略大小写和类型比较，默认值为 false 。
 * @returns
 * @category Others-业务/其他
 */
export declare function compareTo(value1: any, value2: any, strict?: boolean): boolean;
/**
 * 获取转换后树的映射对象、数组 `{ map: any, list: any[] }`
 * @example
 * getTreeData(treeData, 'id'); /// { map: any, list: any[] }
 * getTreeData(treeData, 'data.id'); /// { map: any, list: any[] }
 * @param treeData 树值
 * @param key key
 * @returns
 * @category Others-Tree
 */
export declare function getTreeData(treeData: any[], key?: string): {
    map: any;
    list: any[];
};
/**
 * 过滤树级数据，并支持显示完整结构。
 * @example
 * searchTreeData(treeData, '测试搜索关键字', 'id'); /// ...
 * searchTreeData(treeData, '测试搜索关键字', ['key', 'title']); /// ...
 * searchTreeData(treeData, '测试搜索关键字', ['data.key', 'title'], true); /// ...
 * @param treeData 树值
 * @param searchText 过滤的值
 * @param searchKeys 用于过滤的 key
 * @param strictMode 搜索配置 strictMode 时，会强制平铺排列返回符合条件的节点，默认不开启，保持树排列。
 * @returns
 * @category Others-Tree
 */
export declare function searchTreeData(treeData: any[], searchText: string, searchKeys?: string | string[], strictMode?: boolean): any[];
/**
 * 转换数组数据为树状数据
 * @example
 * transferTreeData(treeData); /// ...
 * transferTreeData(treeData, { labelKey: 'title', valueKey: 'key', parentKey: 'parent' }); /// ...
 * @param sourceData 源数据
 * @param options 转化选项
 * @returns
 * @category Others-Tree
 */
export declare function transferTreeData(sourceData: any[], options?: {
    labelKey: string;
    valueKey: string;
    parentKey: string;
}): any[];
/**
 * 获取筛选后的树数据，自定义方法。
 * @example
 * filterTreeData(treeData, (item) => item); /// ...
 * filterTreeData(treeData, (item) => filterIds.includes(item.id)); /// ...
 * @param treeData 树值
 * @param callback 过滤的方法，默认不过滤。
 * @returns
 * @category Others-Tree
 */
export declare function filterTreeData(treeData: any[], callback?: (item: any) => boolean): any[];
/**
 * 主动获取树的半选/全选节点
 * @example
 * getTreeCheckNodes(treeData, ['0-0', '0-1']); /// ...
 * getTreeCheckNodes(treeData, ['0-0', '0-1'], ['0']); /// ...
 * @param treeData 树值
 * @param checkedKeys 已经全选的节点
 * @param halfCheckedKeys 已经半选的节点
 * @returns
 * @category Others-Tree
 */
export declare function getTreeCheckNodes(treeData: any[], checkedKeys: any[], halfCheckedKeys?: any[]): {
    nodeMap: Map<any, any>;
    parentMap: Map<any, any>;
    checkedKeys: any[] | undefined;
    halfCheckedKeys: any[] | undefined;
};
//# sourceMappingURL=index.d.ts.map