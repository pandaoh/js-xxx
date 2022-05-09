export declare function sleep(milliseconds: number | undefined): Promise<void>;
export declare function to(promise: Promise<any>, res?: Function, rej?: Function): Promise<any>;
export declare function retry(promise: Promise<any>, count?: number, delay?: number): Promise<unknown>;
export declare function all(promises: Promise<any>[], errorHandler?: Function): Promise<any>;
export declare function any(promises: Promise<any>[], errorHandler?: Function): Promise<any>;
export declare function catchPromise(promiseHandler: any, errorHandler?: Function): Promise<any>;
//# sourceMappingURL=index.d.ts.map