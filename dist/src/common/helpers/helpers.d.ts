export declare const keysToSnakeCase: (params: any) => any;
export declare type FileUploadParams = {
    url: string;
    headers?: Record<string, string>;
    data?: Record<string, any>;
    method?: string;
};
export declare const fileUpload: (file: File, params: FileUploadParams, progressCallback: (file: File, n: number) => any) => Promise<any>;
