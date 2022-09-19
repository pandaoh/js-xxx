export declare function str2html(str: string): string;
export declare function html2str(value: string): string | null;
export declare function insertAfter(newElement: any, targetElement: any): void;
export declare function offDefaultEvent(event: any): boolean;
export declare function copyContent(targetDom: any, addMsg?: any): any;
export declare function scrollToTop(elementSelector: string, to?: 'start' | 'end'): void;
export declare function scrollToBottom(elementSelector: string): void;
export declare function findParents(element: any, n: number): any;
export declare function findChildren(element: any): any[];
export declare function getViewportSize(): {
    w: number;
    h: number;
};
export declare function getStyleByName(element: any, name: any): any;
export declare function appendLink(linkUrl: string, rel?: string): HTMLLinkElement;
export declare function appendScript(scriptUrl: string, async?: boolean, defer?: boolean): HTMLScriptElement;
export declare function download(link: string, name: string): void;
export declare function downloadContent(name: string, content: BlobPart | any): void;
export declare function marquee(selector: string, options?: {
    direction?: 'X' | 'Y';
    loopType?: 'infinite' | 'normal' | 'origin';
    speed?: number;
    style?: string;
    parentStyle?: string;
}): void;
//# sourceMappingURL=index.d.ts.map