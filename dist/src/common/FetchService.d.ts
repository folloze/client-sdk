import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare type FetcherOptions = {
    useMock: boolean;
    isPreview?: boolean;
    config?: AxiosRequestConfig;
    jwt?: string;
    sessionGuid?: string;
};
export declare class FetchService {
    private readonly useMock;
    fetcher: AxiosInstance;
    private mock;
    private options;
    private sessionGuid;
    private jwt;
    private constructor();
    static create(options: FetcherOptions): Promise<FetchService>;
    private createMockFetcher;
    withPartialContent(apiCall: any): void;
    private handleSuccess;
    private handleError;
    private createAxiosFetcher;
}
