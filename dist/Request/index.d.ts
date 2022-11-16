export declare const CONTENT_TYPES: {
    [propName: string]: string;
};
export declare enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
    OPTIONS = "OPTIONS",
    get = "GET",
    post = "POST",
    put = "PUT",
    patch = "PATCH",
    delete = "DELETE",
    options = "OPTIONS"
}
export declare function qsStringify(obj: any, options?: {
    arr2str?: boolean;
    hasIndex?: boolean;
    urlEncode?: boolean;
    hasBrackets?: boolean;
}): string;
export declare function qsParse(url?: string, key?: string): any;
export declare function getBaseURL(url?: string): string;
export declare function getQueryString(url?: string): any;
export declare function getSearchParams(url?: string): any;
export declare function xAjax(method: HttpMethod | string, url: string, options?: {
    data?: any;
    params?: any;
    success?: any;
    fail?: any;
    contentType?: string;
    async?: boolean;
    raw?: boolean;
    withCredentials?: boolean;
}): any;
export declare function xFetch(method: HttpMethod, url: string, options?: {
    data?: any;
    params?: any;
    raw?: boolean;
    contentType?: string;
}): any;
export declare function getContentType(fileType: string): string;
//# sourceMappingURL=index.d.ts.map