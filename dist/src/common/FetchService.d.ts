import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare type FetcherOptions = {
    useMock: boolean;
    isPreview?: boolean;
    config?: AxiosRequestConfig;
};
export declare class FetchService {
    private readonly useMock;
    fetcher: AxiosInstance;
    private mock;
    private options;
    private constructor();
    static create(options: FetcherOptions): Promise<FetchService>;
    private createMockFetcher;
    private createAxiosFetcher;
}
