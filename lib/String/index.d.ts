export declare function unicode2str(value: string): string;
export declare function str2unicode(value: string): string;
export declare function trim(str: string, type?: number | string): string;
export declare function base64Encode(str: string, replaceChar?: boolean): string;
export declare function base64Decode(str: string): string;
export declare function maskString(str: string): string;
export declare function transferCase(str: string, type: 1 | 2 | 3 | 'upper' | 'lower' | 'first'): string;
export declare function splitCase(str: string): string[];
export declare function camelCase(str: string): string;
export declare function repeat(str: string, n?: number): string;
export declare function isUrl(value: string): boolean;
export declare function isEmail(value: string): boolean;
export declare function isPhoneNum(value: string): boolean;
export declare function isChar(value: string, hasChinese?: boolean): boolean;
export declare function isStrongPassWord(value: string): boolean;
export declare function isCarCode(value: string): boolean;
export declare function isIpv4(value: string): boolean;
export declare function isIpv6(value: string): boolean;
export declare function isIpAddress(value: string): boolean;
export declare function checkFileExt(arr: string[], value: string): boolean;
export declare function isHttp(value: string): -1 | 1 | 0;
export declare function slugify(str: string, replacement?: {
    [index: string]: string;
}): string;
export declare function truncate(txt: string, width: number, options?: {
    ellipsis?: string;
    separator?: string;
}): string;
//# sourceMappingURL=index.d.ts.map