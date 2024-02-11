import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import MockConnector from "./MockConnector";
import mergeWith from "lodash/mergeWith";
import get from "lodash/get";

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

const defaultFetcherOptions: FetcherOptions = {
    organizationId: -1,
    useMock: false,
    isPreview: false, // in designer or preview it is true - should indicate to not track analytics
    config: {
        baseURL: "/",
        headers: {},
    },
    analyticsServiceEndpoint: "",
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
    public sessionGuid: String;
    private mock: MockAdapter;
    public options: FetcherOptions;
    private jwt: String;
    public organizationId: number;
    public urlToken: string;
    private isEmbeddedRequest: boolean;

    private constructor(options: FetcherOptions) {
        this.useMock = options.useMock;
        this.options = options;
        this.organizationId = options.organizationId;
        if (options.sessionGuid) {
            this.sessionGuid = options.sessionGuid;
        }
        if (options.jwt) {
            this.jwt = options.jwt;
        }
        if (options.flzClientFeature === "embedded") {
            this.isEmbeddedRequest = true;
        }

        const token =
            typeof window !== "undefined" && window["FollozeState"].initialState?.token
                ? window["FollozeState"].initialState?.token
                : undefined;
        if (token) {
            this.urlToken = token;
        }
    }

    public static async create(options: FetcherOptions): Promise<FetchService> {
        options = mergeWith(defaultFetcherOptions, options, (a, b) => b === null ? a : undefined);
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
                this.fetcher.interceptors.response.use(this.handleSuccess, this.MockHandleError);
                this.mock = new module.default(this.fetcher);
                await Promise.all([
                    MockConnector.bindLiveBoard(this.mock),
                    MockConnector.bindDesigner(this.mock),
                    MockConnector.bindAnalytics(this.mock),
                ]);
            })
            .catch(e => console.error("could not create mock fetcher", e));
    }

    // todo: this method will need backoff implementation
    withPartialContent(promiseFunc: (resolve, reject, guid) => any, timeout: number = 2000, retry: number = 1, guid?: string): Promise<any> {
        return new Promise((resolve, reject) => {
            if (retry <= 0) {
                console.warn("stop retrying partial content");
                reject("stop retrying");
                return;
            }
            const innerPromise = new Promise((resolve, reject) => promiseFunc(resolve, reject, guid));
            innerPromise
                .then((result: any) => {
                    if (result.status == 206) {
                        console.debug(`retry partial content ${retry}`);
                        retry = retry - 1;
                        setTimeout(() => {
                            resolve(this.withPartialContent(promiseFunc, timeout, retry, result.data.guid));
                        }, timeout);
                    } else {
                        console.debug(`partial content resolved`, result.data);
                        resolve(result.data);
                    }
                })
                .catch(e => {
                    console.error("could not finish partial content request", e);
                    reject(e);
                });
        });
    }

    public withDisableOnPreview(apiCall: Function): Promise<any> {
        if (this.options?.isPreview) {
            return new Promise(resolve => resolve({status: 200}));
        } else {
            return apiCall();
        }
    }

    private handleSuccess = (response): AxiosResponse => {
        if (response.headers?.["authorization"]) {
            this.jwt = response.headers["authorization"].replace("bearer ", "");
        }
        if (response.headers?.["folloze-session-guid"]) {
            this.sessionGuid = response.headers["folloze-session-guid"];
        }
        return response;
    };

    private handleError(error) {
        switch (get(error, "response.status")) {
            case 410:
                window.location.reload();
                break;
        }
        console.error(`could not complete axios request to: ${error.config?.url}`, error.config);
        return Promise.reject(error);
    }

    private MockHandleError(error) {
        switch (get(error, "response.status")) {
            case 410:
                window.location.reload();
                break;
            case 409:
                // do nothings - conflict of liveBoard versions
                return Promise.reject(error);
        }
        // checks ifs its a test process
        if (process?.env) {
            return Promise.reject(error);
        }
        console.warn(`could not complete mock request to: ${error.config?.url}`, error.config);
        return Promise.reject(error);
    }

    private createAxiosFetcher(options: FetcherOptions) {
        options.config.headers["X-Requested-With"] = "XMLHttpRequest";
        if (options.csrfToken) {
            options.config.headers["X-CSRF-Token"] = options.csrfToken;
        }

        this.fetcher = axios.create(options.config);
        this.fetcher.interceptors.response.use(this.handleSuccess, this.handleError);
        this.fetcher.interceptors.request.use(config => {
            if (this.sessionGuid) {
                config.headers["folloze-session-guid"] = this.sessionGuid;
            }
            if (this.jwt) {
                config.headers["Authorization"] = `Bearer ${this.jwt}`;
            }
            if (this.isEmbeddedRequest) {
                config.headers["flz-client-feature"] = `embedded`;

                // When the credentials flag is set to true on the client-side,
                // browsers do not allow the use of wildcards ( * ) for Access-Control-Allow-Origin.
                if (!(config.url?.includes(this.options.analyticsServiceEndpoint) || config.url?.includes(this.options.pingEndpoint))) {
                    config.withCredentials = true;
                }
            }
            return config;
        });
    }
}
