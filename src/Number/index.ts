/*
 * @Author: HxB
 * @Date: 2022-04-26 16:24:47
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-06-14 18:09:33
 * @Description: 常用数字相关方法
 * @FilePath: \js-xxx\src\Number\index.ts
 */

/**
 * 四舍五入
 * Example: `round(1.2345, 2) => 1.23`
 * const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);
 * @param number 浮点数
 * @param d 保留小数位
 * @returns
 */
export function round(number: any, d: number): number | undefined {
  let tempNum: string = number + ''; //example-0.155
  d = !d ? 0 : d;
  if (d == 0) {
    //保留0位小数直接取整就好了
    return Math.round(number);
  }
  if (tempNum.indexOf('.') === -1) {
    tempNum += '.';
  }
  tempNum += new Array(d + 1).join('0'); //-0.15500
  if (new RegExp('^(-|\\+)?(\\d+(\\.\\d{0,' + (d + 1) + '})?)\\d*$').test(tempNum)) {
    //  【/^(-|\+)?(\d+(\.\d{0,3})?)\d*$/】
    let tempStr = '0' + RegExp.$2,
      pm = RegExp.$1,
      a: any = RegExp.$3.length,
      flag = true; //tempStr：数值部分（0.155）加0是为了防止产生进位，pm：正负号（-），a：小数点+小数（.155）长度为上一条正则表达式得出的结果（此处为{0,3}），flag：首位0是否未产生进位。
    if (a == d + 1 + 1) {
      //一个1为小数点，一个1为需要多一位数字才能判断，此处判断是否有足够的数字来得出结果。
      a = tempStr.match(/\d/g); //["0", "0", "1", "5", "5"]
      let aLen = a.length;
      if (parseInt(a[aLen - 1]) > 4) {
        //保留小数的后一位是否大于4
        for (let i = aLen - 2; i >= 0; i--) {
          a[i] = parseInt(a[i]) + 1;
          if (a[i] == 10) {
            a[i] = 0;
            flag = i != 1; //判断首位0是否未产生进位，false为产生了进位，后续不裁剪首位0（因为i==1时，首位0发生了变化，0变为1）。
          } else break;
        }
      }
      tempStr = a.join('').replace(new RegExp('(\\d+)(\\d{' + d + '})\\d$'), '$1.$2'); //【/(\d+)(\d{2})\d$/】$1至少包含一个数字，$2必须为保留的小数位，结尾必须有一个数字，所以如果00155，d=2,结果为00.15，若d=1，则结果为001.5。
    }
    if (flag) {
      //如果首位0未产生进位，去掉多余的0。
      tempStr = tempStr.substr(1);
    }
    return parseFloat((pm + tempStr).replace(/\.$/, '')); //返回浮点数，以防万一去掉结尾的小数点（.）。
  }
}

/**
 * 是否整数(严格匹配)
 * Example:
 * `isInteger('0') => true`
 * `isInteger('-0', '+') => false`
 * @returns
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
 * Example:
 * `isDecimal('0.0') => true`
 * `isDecimal('0.0', '+', true) => false`
 * `isDecimal('-0.1', '+') => false`
 * `isDecimal('-0.10', '-') => true`
 * @returns
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
