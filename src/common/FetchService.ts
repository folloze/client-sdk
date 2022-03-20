import {AxiosInstance, AxiosRequestConfig} from "axios";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import MockConnector from "./MockConnector";
import merge from "lodash/merge";
import get from "lodash/get";

export type FetcherOptions = {
    useMock: boolean;
    isPreview?: boolean;
    config?: AxiosRequestConfig;
    jwt?: string;
    sessionGuid?: string;
};

const defaultFetcherOptions: FetcherOptions = {
    useMock: false,
    isPreview: false,
    config: {
        baseURL: "/",
        headers: {}
    }
};

// fetchCategories: api.fetchCategories,      // replace "live_board" with "api"
// fetchItems: api.fetchItems,                // replace "live_board" with "api"
// fetchHasItems: api.fetchHasItems,          // replace "live_board" with "api"
// fetchItem: api.fetchItem,                  // replace "live_board" with "api"

// createServerSessionCookies: () => Promise.resolve(1),
// updateCookiesConsent: () => Promise.resolve(),
// setConsentCookie: () => Promise.resolve(),
// getIsoCode: () => Promise.resolve(),
// fetchEventUrls: () => Promise.resolve("")

export class FetchService {
    private readonly useMock: boolean;
    public fetcher: AxiosInstance;
    private mock: MockAdapter;
    private options: FetcherOptions;
    private sessionGuid: String;
    private jwt: String;

    private constructor(options: FetcherOptions) {
        this.useMock = options.useMock;
        this.options = options;
        if (options.sessionGuid) {
            this.sessionGuid = options.sessionGuid;
        }
        if (options.jwt) {
            this.jwt = options.jwt;
        }
    }

    public static async create(options: FetcherOptions): Promise<FetchService> {
        options = merge(defaultFetcherOptions, options);
        const instance = new FetchService(options);
        if (options.useMock) {
            await instance.createMockFetcher(options);
        } else {
            instance.createAxiosFetcher(options);
        }
        return instance;
    }

    private async createMockFetcher(options: FetcherOptions) {
        return await import("axios-mock-adapter")
            .then(async module => {
                this.createAxiosFetcher(options);
                this.mock = new module.default(this.fetcher);
                await Promise.all([
                    MockConnector.bindLiveBoard(this.mock),
                    MockConnector.bindDesigner(this.mock),
                    MockConnector.bindAnalytics(this.mock),
                ]);
            })
            .catch(e => console.error(e));
    }

    // todo: connect async polling to get partial data (getItems, getCategory, etc...)
    withPartialContent(apiCall) {
        // return (params) => {
        //     return new Promise((resolve, reject) => {
        //         apiCall(params)
        //             .then(({status, data}) => {
        //                 if(status == 206) {
        //                     setTimeout(() => {
        //                         this.withPartialContent(apiCall)({
        //                             ...params,
        //                             guid: data.guid
        //                         })
        //                             .then(resolve)
        //                             .catch(reject);
        //                     }, 2000);
        //                 }
        //                 else {
        //                     resolve(data);
        //                 }
        //             })
        //             .catch(error => reject(error));
        //     });
        // };
    }

    private handleSuccess(response) {
        if (response.headers?.["authorization"]) {
            this.jwt = response.headers['authorization'].replace('bearer ', '');
        }
        if (response.headers?.["folloze-session-guid"]) {
            this.sessionGuid = response.headers["folloze-session-guid"];
        }
        return response;
    }

    private handleError(error) {
        switch (get(error, 'response.status')) {
            case 410:
                window.location.reload();
                break;
        }

        return Promise.reject(error);
    }

    private createAxiosFetcher(options: FetcherOptions) {
        options.config.headers["X-Requested-With"] = "XMLHttpRequest";

        this.fetcher = axios.create(options.config);
        this.fetcher.interceptors.response.use(this.handleSuccess, this.handleError);
        this.fetcher.interceptors.request.use((config) => {
            if (this.sessionGuid) {
                config.headers['folloze-session-guid'] = this.sessionGuid;
            }
            if (this.jwt) {
                config.headers['Authorization'] = `Bearer ${this.jwt}`;
            }
            return config;
        });
    }
}
