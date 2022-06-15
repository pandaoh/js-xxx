import CryptoJS from 'crypto-js';
export declare function encrypt(data: any, secretKey?: string, secretIv?: string): string;
export declare function decrypt(dataStr: string, jsonDecode?: boolean, secretKey?: string, secretIv?: string): string;
export declare function md5(str: string): string;
export declare function sha1(str: string): string;
export declare function sha256(str: string): string;
export declare function Base64Encode(str: string, replaceChar?: boolean): string;
export declare function Base64Decode(str: string): string;
export declare function getCryptoJS(): typeof CryptoJS;
//# sourceMappingURL=index.d.ts.map