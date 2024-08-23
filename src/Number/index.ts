/*
 * @Author: HxB
 * @Date: 2022-04-26 16:24:47
 * @LastEditors: DoubleAm
 * @LastEditTime: 2023-08-28 14:45:17
 * @Description: 常用数字相关函数
 * @FilePath: \js-xxx\src\Number\index.ts
 */

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
export function round(number: any, d: number): number {
  // example-0.155
  let tempNum: string = number + '';
  d = !d ? 0 : d;
  if (d == 0) {
    // 保留 0 位小数直接取整就好了
    return Math.round(number);
  }
  if (tempNum.indexOf('.') === -1) {
    tempNum += '.';
  }
  // -0.15500
  tempNum += new Array(d + 1).join('0');
  if (new RegExp('^(-|\\+)?(\\d+(\\.\\d{0,' + (d + 1) + '})?)\\d*$').test(tempNum)) {
    //  【/^(-|\+)?(\d+(\.\d{0,3})?)\d*$/】
    let tempStr = '0' + RegExp.$2,
      // eslint-disable-next-line prefer-const
      pm = RegExp.$1,
      a: any = RegExp.$3.length,
      flag = true;
    // tempStr：数值部分（0.155）加 0 是为了防止产生进位，pm：正负号（-），a：小数点+小数（.155）长度为上一条正则表达式得出的结果（此处为{0,3}），flag：首位 0 是否未产生进位。
    if (a == d + 1 + 1) {
      // 一个 1 为小数点，一个 1 为需要多一位数字才能判断，此处判断是否有足够的数字来得出结果。
      a = tempStr.match(/\d/g);
      // ["0", "0", "1", "5", "5"]
      const aLen = a.length;
      if (parseInt(a[aLen - 1]) > 4) {
        // 保留小数的后一位是否大于 4
        for (let i = aLen - 2; i >= 0; i--) {
          a[i] = parseInt(a[i]) + 1;
          if (a[i] == 10) {
            a[i] = 0;
            flag = i != 1;
            // 判断首位 0 是否未产生进位，false 为产生了进位，后续不裁剪首位 0（因为 i==1 时，首位 0 发生了变化，0 变为 1）。
          } else break;
        }
      }
      tempStr = a.join('').replace(new RegExp('(\\d+)(\\d{' + d + '})\\d$'), '$1.$2');
      // 【/(\d+)(\d{2})\d$/】$1 至少包含一个数字，$2 必须为保留的小数位，结尾必须有一个数字，所以如果 00155，d=2,结果为 00.15，若 d=1，则结果为 001.5 。
    }
    if (flag) {
      // 如果首位 0 未产生进位，去掉多余的 0 。
      tempStr = tempStr.substring(1);
    }
    // 返回浮点数，以防万一去掉结尾的小数点（.）。
    return parseFloat((pm + tempStr).replace(/\.$/, ''));
  } else {
    return Number(number);
  }
}

/**
 * 是否整数(严格匹配)
 * @example
 * isInteger('0'); /// true
 * isInteger('-0', '+'); /// false
 * @returns
 * @category Number-数字相关
 */
export function isInteger(value: string, type?: '-' | '+'): boolean {
  if (type == '+') {
    return /(^[1-9]\d*$)|(^0$)/.test(value);
  }
  if (type == '-') {
    return /(^\-0$)|(^\-[1-9]\d*$)/.test(value);
  }
  return /(^[1-9]\d*$)|(^0$)|(^\-0$)|(^\-[1-9]\d*$)/.test(value);
}

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
export function isDecimal(value: string, type?: '-' | '+', noLastZero = false): boolean {
  if (type == '+') {
    const reg = noLastZero ? /(^0\.[1-9]*\d*[1-9]$)|(^[1-9]\d*\.\d*[1-9]$)/ : /(^0\.\d+$)|(^[1-9]\d*\.\d+$)/;
    return reg.test(value);
  }
  if (type == '-') {
    const reg = noLastZero ? /(^\-0\.[1-9]*\d*[1-9]$)|(^\-[1-9]\d*\.\d*[1-9]$)/ : /(^\-0\.\d+$)|(^\-[1-9]\d*\.\d+$)/;
    return reg.test(value);
  }
  if (noLastZero) {
    return /(^0\.[1-9]*\d*[1-9]$)|(^[1-9]\d*\.\d*[1-9]$)|(^\-0\.[1-9]*\d*[1-9]$)|(^\-[1-9]\d*\.\d*[1-9]$)/.test(value);
  }
  return /(^0\.\d+$)|(^[1-9]\d*\.\d+$)|(^\-0\.\d+$)|(^\-[1-9]\d*\.\d+$)/.test(value);
}

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
export function formatNumber(value: string | number, n = 2): string {
  // if (String(value).includes('.')) {
  //   const [a, b] = String(value).split('.');
  //   return String(a).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.' + b;
  // } else {
  //   return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // }
  try {
    n = n >= 0 && n <= 20 ? n : 2;
    value = round(parseFloat((value + '').replace(/[^\d\.-]/g, '')), n) + '';
    const l = value.split('.')[0].split('').reverse(),
      r = value.split('.')?.[1];
    let t = '';
    for (let i = 0; i < l.length; i++) {
      t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? ',' : '');
    }
    return t.split('').reverse().join('') + (r ? '.' + r : '');
  } catch (e) {
    return `${value}`;
  }
}

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
export function getNumberReg(options: { integer?: number; decimal?: number }): RegExp {
  const { integer, decimal } = options;
  const integerPart = integer ? `{0,${integer - 1}}` : '*';
  const decimalPart = decimal ? `{1,${decimal}}` : '*';
  return new RegExp(String.raw`^(0|[1-9]\d${integerPart})(?:\.\d${decimalPart})?$`);
}
