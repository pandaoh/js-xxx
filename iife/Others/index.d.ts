export declare function formatBytes(bytes: number, precision?: number): string;
export declare function setIcon(iconLink: string): void;
export declare function copyToClipboard(text: string): void;
export declare function getUserAgent(): {
    browserName: string;
    browserVersion: string;
    osName: string;
    osVersion: string;
};
export declare function isNode(): boolean;
export declare function isBrowser(): boolean;
export declare function isDarkMode(): boolean;
export declare function isAppleDevice(): boolean;
export declare function onClick2MoreClick(delay?: number, ...events: Array<Function>): Function;
export declare function bindMoreClick(fn: Function | any, times?: number, delay?: number): (...args: any[]) => void;
export declare function emitKeyboardEvent(eventType?: 'keydown' | 'keypress' | 'keyup', keyCode?: number): void;
export declare function disableConflictEvent(event: any): boolean;
export declare function checkVersion(targetVersion: string, currentVersion: string, testStr?: string): number;
export declare function versionUpgrade(version: string, maxVersionCode?: number): string;
export declare function formatRh(input: string, options?: {
    format?: [string | number | boolean, string | number | boolean];
    default?: string | number | boolean;
    negative?: Array<string>;
    positive?: Array<string>;
}): string | boolean | number;
export declare function isRhNegative(input: string): boolean;
export declare function getBloodGroup(bloodGroup: string): {
    value: string;
    label: string;
    color: string;
    lower: string;
    upper: string;
};
//# sourceMappingURL=index.d.ts.map