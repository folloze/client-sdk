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

    constructor(options: FetcherOptions) {
        options = Object.assign(defaultFetcherOptions, options);
        this.useMock = options.useMock;
        if (this.useMock) {
            this.createMockFetcher(options);
        } else {
            this.createAxiosFetcher(options);
        }
    }

    private createMockFetcher(options: FetcherOptions) {
        this.createAxiosFetcher(options);
        import("axios-mock-adapter")
            .then(module => {
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
