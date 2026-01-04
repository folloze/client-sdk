import { AxiosInstance, AxiosRequestConfig } from "axios";
export type FetcherOptions = {
    organizationId: number;
    useMock: boolean;
    isPreview?: boolean;
    config?: AxiosRequestConfig;
    jwt?: string;
    sessionGuid?: string;
    csrfToken?: string;
    pingEndpoint?: string;
    analyticsServiceEndpoint: string;
    flzClientFeature?: "embedded";
};
declare module 'axios' {
    interface AxiosRequestConfig {
        captcha?: boolean;
    }
}
export declare const FLZ_SESSION_GUID_HEADER = "folloze-session-guid";
export declare class FetchService {
    private readonly useMock;
    fetcher: AxiosInstance;
    sessionGuid: String;
    private mock;
    options: FetcherOptions;
    private jwt;
    organizationId: number;
    urlToken: string;
    private isEmbeddedRequest;
    private constructor();
    static create(options: FetcherOptions): Promise<FetchService>;
    private createMockFetcher;
    withPartialContent(promiseFunc: (resolve: any, reject: any, guid: any) => any, timeout?: number, retry?: number, guid?: string, captcha?: boolean): Promise<any>;
    withDisableOnPreview(apiCall: Function): Promise<any>;
    setSessionGuid(guid: string): void;
    private handleSuccess;
    private handleError;
    private MockHandleError;
    private createAxiosFetcher;
}
