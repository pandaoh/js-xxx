export declare function getTimeCode(): string;
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
export declare function logRunTime(fn: any, timeKey: string): void;
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
export declare function showVar(value: any): any;
export declare function logVar(value: any): any;
export declare function contains(value: any[], target: any): boolean;
export declare function waitUntil(condition: any, timeout?: number, interval?: number): Promise<any>;
export declare function ms(str: any): string | number;
export declare function transferFileToBase64(content: BlobPart | any, contentType: string, callBack: any): void;
export declare function checkIdCard(value: string): boolean;
export declare function getAge(birthday: any, targetDate?: any): number;
export declare function getAnimal(date: any): string;
export declare function transferIdCard(idCard: string): any;
export declare function transferMoney(n: number): string;
export declare function Speaker(text: string, lang?: string, volume?: number, pitch?: number, rate?: number): {
    getInstance: () => SpeechSynthesisUtterance;
    setText: (txt: string) => void;
    setLang: (lang: string) => void;
    setVolume: (volume: number) => void;
    setPitch: (pitch: number) => void;
    setRate: (rate: number) => void;
    setVoice: (voice: any) => void;
    getVoices: () => SpeechSynthesisVoice[];
    speak: () => void;
    stop: () => void;
};
export declare function rip(): void;
export declare function getConstellation(date: any): {
    cn: string;
    en: string;
    date: any;
};
export declare function setEventListener(eventKey: string, foo: any, dom?: any): any;
export declare function H5Resize(downCb: any, upCb: any): any;
export declare function banConsole(): Function;
export declare function getWeekInfo(n: string | number): {
    key: string;
    name: string;
    abbr: string;
    id: number;
    others: string;
} | {
    key: string;
    name: string;
    abbr: string;
    id: number;
    others: string;
}[];
export declare function getMonthInfo(n: string | number): {
    key: string;
    name: string;
    abbr: string;
    id: number;
    others: string;
} | {
    key: string;
    name: string;
    abbr: string;
    id: number;
    others: string;
}[];
//# sourceMappingURL=index.d.ts.map