import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare type FetcherOptions = {
    useMock: boolean;
    config?: AxiosRequestConfig;
};
export declare class FetchService {
    private readonly useMock;
    fetcher: AxiosInstance;
    private mock;
    constructor(options: FetcherOptions);
    private createMockFetcher;
    private createAxiosFetcher;
}
