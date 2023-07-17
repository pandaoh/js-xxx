/**
 * 除法函数
 * Example:
 * `div(1, 2) => 0.5`
 * `div(0.55, 100) => 0.0055`
 * @param div1 被除数
 * @param div2 除数
 * @returns
 */
export declare function div(div1: number | string, div2: number | string): number;
/**
 * 乘法函数
 * Example:
 * `times(1, 2) => 2`
 * `times(0.55, 100) => 55`
 * @param mul1 被乘数
 * @param mul2 乘数
 * @returns
 */
export declare function times(mul1: number | string, mul2: number | string): number;
/**
 * 加法函数
 * Example:
 * `add(1, 2) => 3`
 * `add(0.1, 0.2) => 0.3`
 * @param add1 被加数
 * @param add2 加数
 * @returns
 */
export declare function add(add1: number | string, add2: number | string): number;
/**
 * 减法函数
 * Example:
 * `sub(1, 2) => -1`
 * `sub(0.55, 0.1) => 0.45`
 * @param sub1 被减数
 * @param sub2 减数
 * @returns
 */
export declare function sub(sub1: number | string, sub2: number | string): number;
/**
 * 获取平均数
 * Example:
 * `average(1, 2, 3, 4) => 2.5`
 * `average(1, 2, 3, 4.123) => 2.53075`
 * @param args
 * @returns
 */
export declare function average(...args: any[]): number;
/**
 * 获取绝对值
 * Example:
 * `abs(-1) => 1`
 * `abs(1) => 1`
 * @param value
 * @returns
 */
export declare function abs(value: number): number;
/**
 * 检查一个数字是否偶数
 * Example:
 * `isEven(-2) => true`
 * `isEven(1) => false`
 * @param value
 * @returns
 */
export declare function isEven(value: number): boolean;
/**
 * 去尾法获取数值
 * Example:
 * `float(1.135, 0, true) => '1'`
 * `float(1.135, 2, true) => '1.13'`
 * `float(1.135, 1) => 1.1`
 * `float(1.135, 4) => 1.135`
 * `float(1.135, 4, true) => '1.1350'`
 * @param value
 * @param d
 * @param isStr
 * @returns
 */
export declare function float(value: number, d?: number, isStr?: boolean): number | string;
/**
 * 判断一个数是否在指定范围
 * Example:
 * `inRange(null, 0, 3) => false`
 * `inRange(0, 0, 3) => true`
 * `inRange(3, 0, 3) => true`
 * `inRange(5, 0, 3) => false`
 * @param value
 * @param min
 * @param max
 * @returns
 */
export declare function inRange(value: any, min: number, max: number): boolean;
/**
 * 获取百分比
 * Example:
 * `getPercentage(102, 1020, 2) => 10`
 * `getPercentage(102, 1020, 2, { float: true, suffix: true }) => '10.00%'`
 * `getPercentage(17, 1020, 2) => 1.67`
 * `getPercentage(1020, null, 2) => 0`
 * `getPercentage(0, 1020, 2, { float: false, suffix: true }) => '0%'`
 * @param value
 * @param total
 * @param options
 * @returns
 */
export declare function getPercentage(value: any, total: any, decimals?: number, options?: {
    float: boolean;
    suffix: boolean;
}): string | number;
//# sourceMappingURL=index.d.ts.map