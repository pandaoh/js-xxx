/*
 * @Author: HxB
 * @Date: 2022-04-26 15:18:13
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-05-09 11:30:10
 * @Description: Promise 常用方法，或者扩展方法。
 * @FilePath: \js-xxx\src\Promise\index.ts
 */

/**
 * 睡眠
 * Example: `await sleep(1000) => 等待 1000 毫秒再执行后面的`
 * @param milliseconds 睡眠时间
 * @returns
 */
export function sleep(milliseconds: number | undefined): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

/**
 * 参考了 to.js，扩展 Promise 用来直接帮助执行且处理异常。
 * promise 报错不会阻断后面的 Promise，适用于多个 await Promise 情况。
 * Example: `to(Promise.resolve(1)) => Promise.resolve(1)`
 * @param promise promise
 * @param res 成功回调
 * @param rej 失败回调
 * @returns
 */
export function to(promise: Promise<any>, res?: Function, rej?: Function): Promise<any> {
  return promise
    .then((data) => {
      res && res(data);
      return data;
    })
    .catch((err) => {
      rej && rej(err);
      console.log(err);
    });
}

/**
 * Promise 重试
 * Example: `retry(() => Promise.reject(new Error('error')), 3) => Promise.reject(new Error('error')) 执行 3 次`
 * @param promise promise
 * @param count 次数
 * @param delay 延迟时间
 * @returns
 */
export function retry(promise: Promise<any>, count: number = 0, delay: number = 0) {
  return new Promise((resolve, reject) => {
    promise
      .then((res) => {
        resolve(res);
      })
      .catch(async (e) => {
        if (count > 0) {
          // 此处也可使用 setTimeout 实现
          await sleep(delay);
          --count;
          resolve(retry(promise, count, count * delay));
        } else {
          reject('重试结束');
        }
      });
  });
}

/**
 * 同步执行 promise，已做错误处理。
 * Example: `await all(...promise array) => [...result array]`
 * @param promises promises
 * @param errorHandler errorHandler
 * @returns
 */
export function all(promises: Promise<any>[], errorHandler?: Function): Promise<any> {
  return Promise.all(promises).catch((e: any) => errorHandler && errorHandler(e));
}

/**
 * 同步执行多个 promise，返回最先成功的结果，已做错误处理。
 * Example: `await any(...promise array) => success result`
 * @param promises promises
 * @param errorHandler errorHandler
 * @returns
 */
export function any(promises: Promise<any>[], errorHandler?: Function): Promise<any> {
  return Promise.any(promises).catch((e: any) => errorHandler && errorHandler(e));
}

/**
 * New 一个自带错误处理的 Promise，适用于只处理成功情况，不关注失败的 Promise，省去写 catch 的时间与空间。
 * Example: `new catchPromise(resolve, reject, rejectHandler) => Promise`
 * @param promiseHandler promiseHandler
 * @param errorHandler errorHandler
 * @returns
 */
export function catchPromise(promiseHandler: any, errorHandler?: Function): Promise<any> {
  return new Promise(promiseHandler).catch((e: any) => errorHandler && errorHandler(e));
}
