import {AxiosInstance, AxiosRequestConfig} from "axios";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import MockConnector from "./MockConnector";

export type FetcherOptions = {
    useMock: boolean;
    isPreview?: boolean,
    config?: AxiosRequestConfig;
};

const defaultFetcherOptions: FetcherOptions = {
    useMock: false,
    isPreview: false,
    config: {
        baseURL: "/",
        headers: {},
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
        //                 if(status == PARTIAL_CONTENT) {
        //                     setTimeout(() => {
        //                         withPartialContent(apiCall)({
        //                             ...params,
        //                             guid: data.guid
        //                         })
        //                             .then(resolve)
        //                             .catch(reject)
        //                     }, 2000)
        //                 }
        //                 else {
        //                     resolve(data)
        //                 }
        //             })
        //             .catch(error => reject(error))
        //     })
        // }
    }

    private createAxiosFetcher(options: FetcherOptions) {
        // options.config.headers["folloze-session-guid"] = "get guid from cookie?";
        // options.config.headers["Authorization"] = "get token from?";
        // options.config.xsrfHeaderName = 'X-CSRF-TOKEN';

        options.config.headers["X-Requested-With"] = "XMLHttpRequest";
        // if (document?.querySelector("meta[name=csrf-token]")) {
        //   options.config.headers["X-Requested-With"] = "XMLHttpRequest";
        //   // @ts-ignore
        //   options.config.headers["X-CSRF-Token"] = document.querySelector("meta[name=csrf-token]").content;
        // }

        this.fetcher = axios.create(options.config);
    }
}
