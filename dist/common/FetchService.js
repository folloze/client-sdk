import axios from "axios";
import MockConnector from "./MockConnector";
const defaultFetcherOptions = {
    useMock: false,
    config: {
        baseURL: "/",
        headers: {},
    }
};
export class FetchService {
    constructor(options) {
        this.useMock = false;
        options = Object.assign(defaultFetcherOptions, options);
        console.log({ options });
        this.useMock = options.useMock;
        if (this.useMock) {
            this.createMockFetcher(options);
        }
        else {
            this.createAxiosFetcher(options);
        }
    }
    createMockFetcher(options) {
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
    createAxiosFetcher(options) {
        options.config.headers["folloze-session-guid"] = "get guid from cookie?";
        options.config.headers["Authorization"] = "get token from?";
        options.config.xsrfHeaderName = 'X-CSRF-TOKEN';
        this.fetcher = axios.create(options.config);
    }
}
//# sourceMappingURL=FetchService.js.map