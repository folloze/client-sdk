import {AxiosInstance, AxiosRequestConfig} from "axios";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import MockConnector from "./MockConnector";

export type FetcherOptions = {
    useMock: boolean;
    config?: AxiosRequestConfig;
};

const defaultFetcherOptions: FetcherOptions = {
    useMock: false,
    config: {
        baseURL: "/",
        headers: {},
    }
};

export class FetchService {

    private readonly useMock: boolean = false;
    public fetcher: AxiosInstance;
    private mock: MockAdapter;
    private options: FetcherOptions;

    private constructor(options: FetcherOptions) {
        this.useMock = options.useMock;
        this.options = options;
    }

    public static async create(options: FetcherOptions): Promise<FetchService> {
        options = Object.assign(defaultFetcherOptions, options);
        const instance = new FetchService(options);
        if (options.useMock) {
            await instance.createMockFetcher(options);
        } else {
            instance.createAxiosFetcher(options);
        }
        return instance;
    }

    private async createMockFetcher(options: FetcherOptions) {
        this.createAxiosFetcher(options);
        return await import("axios-mock-adapter")
            .then(async module => {
                this.mock = new module.default(this.fetcher);
                MockConnector.bindLiveBoard(this.mock);
                MockConnector.bindDesigner(this.mock);
                MockConnector.bindAnalytics(this.mock);
            })
            .catch(e => console.error(e));
    }

    private createAxiosFetcher(options: FetcherOptions) {
        options.config.headers["folloze-session-guid"] = "get guid from cookie?";
        options.config.headers["Authorization"] = "get token from?";
        options.config.xsrfHeaderName = 'X-CSRF-TOKEN';
        this.fetcher = axios.create(options.config);
    }
}
