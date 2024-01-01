export declare function waitForFollozeScriptsToLoad(): Promise<boolean>;
export declare const keysToSnakeCase: (params: any) => any;
export declare type FileUploadParams = {
    url: string;
    headers?: Record<string, string>;
    data?: Record<string, any>;
    method?: string;
};
export declare function fileUpload(file: File, params: FileUploadParams, progressCallback: (file: File, n: number) => any): Promise<any>;
export declare function isObjsEqual(obj1: any, obj2: any): boolean;
export declare function hashObj(obj: any): string;
export declare function simpleDebounce(callback: CallableFunction, delay?: number): (...args: any[]) => void;
export declare function simpleThrottle(callback: CallableFunction, delay?: number): (...args: any[]) => void;
export declare type DotPrefix<T extends string> = T extends "" ? "" : `.${T}`;
export declare type DotNestedKeys<T> = (T extends Array<infer E> ? "" | `${number}` | `${number}.${DotNestedKeys<E>}` : T extends object ? "" | {
    [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<DotNestedKeys<T[K]>>}`;
}[Exclude<keyof T, symbol>] : "") extends infer D ? Extract<D, string> : never;
export declare function isInDesigner(): boolean;
export declare function isInPreview(): boolean;
export declare function getBoardId(): number;
export declare type XhrRequestParams = {
    url: string;
    headers?: Record<string, string>;
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    data?: any;
    retries?: number;
    signal?: AbortSignal;
    progressCallback?: (bytesLoaded: number) => void;
};
export declare function sendXhrRequest(params: XhrRequestParams): Promise<any>;
