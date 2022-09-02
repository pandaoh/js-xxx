export declare function empty(variable: any): boolean;
export declare function get1Var(data: any): any;
export declare function getRandVar(value: any, count?: number): any | any[];
export declare function getLastVar(data: any): any;
export declare function debounce(fn: Function, delay?: number): () => void;
export declare function throttle(fn: Function, delay?: number): () => void;
export declare function curryIt(fn: Function): (arg: any) => any;
export declare function globalError(fn: Function, notShowConsole?: boolean): void;
export declare function getRandNum(min?: number, max?: number): number;
export declare function getRandColor(): string;
export declare function getRandStr(len?: number): string;
export declare function getTimeAndStr(len?: number, radix?: number | undefined): string;
export declare function getUUID(length: number, chars: string | any[]): string;
export declare function getBSColor(key?: string): string;
export declare function uuid(): string;
export declare function getKey(size?: number, prefix?: string): string;
export declare function getSize(value: any): number;
export declare function openFile(options?: {
    accept?: string;
    multiple?: boolean;
}): Promise<any>;
export declare function openFullscreen(element?: any): void;
export declare function closeFullscreen(): void;
export declare function intersection(paramA: any, paramB: any): any;
export declare function union(paramA: any, paramB: any): any;
export declare function difference(paramA: any, paramB: any): any;
export declare function jsonClone(value: any): any;
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
//# sourceMappingURL=index.d.ts.map