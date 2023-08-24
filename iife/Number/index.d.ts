/**
 * 四舍五入
 * `const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);`
 * @example
 * round(1.2345, 2); /// 1.23
 * round(0.355, 2); /// 0.36
 * round(1.005, 2); /// 0.36
 * @param number 浮点数
 * @param d 保留小数位
 * @returns
 */
export declare function round(number: any, d: number): number;
/**
 * 是否整数(严格匹配)
 * @example
 * isInteger('0'); /// true
 * isInteger('-0', '+'); /// false
 * @returns
 */
export declare function isInteger(value: string, type?: '-' | '+'): boolean;
/**
 * 是否小数(严格匹配)
 * @example
 * isDecimal('0.0'); /// true
 * isDecimal('0.0', '+', true); /// false
 * isDecimal('-0.1', '+'); /// false
 * isDecimal('-0.10', '-'); /// true
 * @returns
 */
export declare function isDecimal(value: string, type?: '-' | '+', noLastZero?: boolean): boolean;
/**
 * 数字人性化显示
 * @example
 * formatNumber('12312300'); /// '12,312,300'
 * formatNumber(851232.1314); /// '851,232.13'
 * formatNumber(851232.1314, 0); /// '851,232'
 * @param value 数值
 * @param n 精度
 * @returns
 */
export declare function formatNumber(value: string | number, n?: number): string;
//# sourceMappingURL=index.d.ts.map