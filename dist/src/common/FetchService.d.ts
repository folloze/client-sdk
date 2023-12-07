import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare type FetcherOptions = {
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
export declare class FetchService {
    private readonly useMock;
    fetcher: AxiosInstance;
    private mock;
    options: FetcherOptions;
    private sessionGuid;
    private jwt;
    organizationId: number;
    urlToken: string;
    private isEmbeddedRequest;
    private constructor();
    static create(options: FetcherOptions): Promise<FetchService>;
    private createMockFetcher;
    withPartialContent(promiseFunc: (resolve: any, reject: any, guid: any) => any, timeout?: number, retry?: number, guid?: string): Promise<any>;
    withDisableOnPreview(apiCall: Function): Promise<any>;
    private handleSuccess;
    private handleError;
    private MockHandleError;
    private withCredentials;
    private createAxiosFetcher;
}
