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
//# sourceMappingURL=index.d.ts.map