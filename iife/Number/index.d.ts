/**
 * 四舍五入
 * `const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);`
 * `const toPrecision = (number, c) => (Math.round(+number * 10 ** c) / 10 ** c).toFixed(c);`
 * @example
 * round(1.2345, 2); /// 1.23
 * round(0.355, 2); /// 0.36
 * round(1.005, 2); /// 1.01
 * @param number 浮点数
 * @param d 保留小数位
 * @returns
 * @category Number-数字相关
 */
export declare function round(number: any, d: number): number;
/**
 * 是否整数(严格匹配)
 * @example
 * isInteger('0'); /// true
 * isInteger('-0', '+'); /// false
 * @returns
 * @category Number-数字相关
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
 * @category Number-数字相关
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
 * @category Number-数字相关
 */
export declare function formatNumber(value: string | number, n?: number): string;
/**
 * 获取用于匹配数字的正则表达式。
 * @example
 * // 匹配最多 2 位整数，且不允许小数
 * const regex = getNumberReg({ integer: 2 });
 * regex.test('99'); // true
 * regex.test('123'); // false
 * regex.test('99.99'); // false
 * // 匹配最多 3 位整数和最多 2 位小数
 * const regex = getNumberReg({ integer: 3, decimal: 2 });
 * regex.test('999'); // true
 * regex.test('999.99'); // true
 * regex.test('999.999'); // false
 * // 匹配任意长度的整数和小数
 * const regex = getNumberReg({});
 * regex.test('123456789'); // true
 * regex.test('12345.6789'); // true
 * @param options 配置选项，options.integer 最大整数位数，options.decimal 最大小数位数。
 * @returns
 * @category Number-数字相关
 */
export declare function getNumberReg(options: {
    integer?: number;
    decimal?: number;
}): RegExp;
//# sourceMappingURL=index.d.ts.map