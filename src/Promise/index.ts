/*
 * @Author: HxB
 * @Date: 2022-04-26 15:18:13
 * @LastEditors: DoubleAm
 * @LastEditTime: 2024-03-21 10:38:46
 * @Description: Promise 常用函数，或者扩展函数。
 * @FilePath: \js-xxx\src\Promise\index.ts
 */

/**
 * 睡眠指定时间，或者 mock 接口数据。
 * @example
 * await sleep(1000); /// 等待 1000 毫秒再执行后面的
 * await sleep(1000, '1'); /// 等待 1000 毫秒再执行后面的，并且返回 '1'，方便 mock 数据。
 * @param milliseconds 睡眠时间
 * @param returnValue 返回值
 * @returns
 * @category Promise-相关
 */
export function sleep(milliseconds: number | undefined, returnValue?: any): Promise<any> {
  return new Promise((resolve) => setTimeout(() => resolve(returnValue), milliseconds));
}

/**
 * 参考了 to.js，扩展 Promise 用来直接帮助执行且处理异常。
 * promise 报错不会阻断后面的 Promise，适用于多个 await Promise 情况。
 * @example
 * to(Promise.resolve(1)); /// Promise.resolve(1)
 * // 也可挂载在 Promise 原型上
 * @param promise promise
 * @param res 成功回调
 * @param rej 失败回调
 * @returns
 * @category Promise-相关
 */
export function to(promise: Promise<any>, res?: any, rej?: any): Promise<any> {
  return promise
    .then((data) => {
      res && res(data);
      return data;
    })
    .catch((e) => {
      rej && rej(e);
      console.log('js-xxx:toError--->', e);
    });
}

/**
 * 自定义封装 Promise 的 finally 方法，小程序使用。
 * @example
 * customFinally(Promise.resolve(1), () => console.log(1)); /// finally 回调
 * // 也可挂载在 Promise 原型上
 * @param promise 要封装的 Promise 对象
 * @param onFinally finally 回调函数 (可选)
 * @returns
 * @category Promise-相关
 */
export function customFinally(promise: Promise<any>, onFinally?: any): Promise<any> {
  return promise.then(
    (value: any) => {
      // 在 Promise 被 resolved 后执行 finally 回调，并将 resolved 值传递下去
      return Promise.resolve(onFinally && onFinally()).then(() => value);
    },
    (reason: any) => {
      // 在 Promise 被 rejected 后执行 finally 回调，并将原始的 rejected 值抛出
      return Promise.resolve(onFinally && onFinally()).then(() => {
        throw reason;
      });
    },
  );
}

/**
 * Promise 重试
 * @example
 * retry(() => Promise.reject(new Error('error')), 3); /// Promise.reject(new Error('error')) 执行 3 次
 * @param promise promise
 * @param count 次数
 * @param delay 延迟时间
 * @returns
 * @category Promise-相关
 */
export function retry(promise: Promise<any>, count = 0, delay = 0) {
  return new Promise((resolve, reject) => {
    promise
      .then((res) => {
        resolve(res);
      })
      .catch(async (e) => {
        console.log('js-xxx:retryError--->', e);
        if (count > 0) {
          // 此处也可使用 setTimeout 实现
          await sleep(delay);
          --count;
          resolve(retry(promise, count, delay));
        } else {
          reject('重试结束');
        }
      });
  });
}

/**
 * 同步执行 promise，已做错误处理。
 * @example
 * await all(...promise array); /// [...result array]
 * @param promises promises
 * @param errorHandler errorHandler
 * @returns
 * @category Promise-相关
 */
export function all(promises: Promise<any>[], errorHandler?: any): Promise<any> {
  return Promise.all(promises).catch((e: any) => errorHandler && errorHandler(e));
}

/**
 * 同步执行多个 promise，返回最先成功的结果，已做错误处理。
 * @example
 * await any(...promise array); /// success result
 * @param promises promises
 * @param errorHandler errorHandler
 * @returns
 * @category Promise-相关
 */
export function any(promises: Promise<any>[], errorHandler?: any): Promise<any> {
  return Promise.any(promises).catch((e: any) => errorHandler && errorHandler(e));
}

/**
 * New 一个自带错误处理的 Promise，适用于只处理成功情况，不关注失败的 Promise，省去写 catch 的时间与空间。
 * @example
 * new catchPromise(resolve, reject, rejectHandler); /// Promise
 * @param promiseHandler promiseHandler
 * @param errorHandler errorHandler
 * @returns
 * @category Promise-相关
 */
export function catchPromise(promiseHandler: any, errorHandler?: any): Promise<any> {
  return new Promise(promiseHandler).catch((e: any) => errorHandler && errorHandler(e));
}
