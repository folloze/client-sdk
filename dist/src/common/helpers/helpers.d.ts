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
