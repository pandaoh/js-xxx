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
export declare function disableConflictEvent(event: any): boolean;
export declare function checkVersion(targetVersion: string, currentVersion: string, testStr?: string): number;
export declare function versionUpgrade(version: string, maxVersionCode?: number): string;
//# sourceMappingURL=index.d.ts.map