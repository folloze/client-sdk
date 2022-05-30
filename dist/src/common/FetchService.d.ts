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
};
export declare class FetchService {
    private readonly useMock;
    fetcher: AxiosInstance;
    private mock;
    options: FetcherOptions;
    private sessionGuid;
    private jwt;
    organizationId: number;
    private constructor();
    static create(options: FetcherOptions): Promise<FetchService>;
    private createMockFetcher;
    withPartialContent(apiCall: any): void;
    private handleSuccess;
    private handleError;
    private MockHandleError;
    private createAxiosFetcher;
}
