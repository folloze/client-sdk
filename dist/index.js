import {
  require_axios
} from "./chunks/chunk.MRSYPSGR.js";
import {
  __toModule
} from "./chunks/chunk.CDYLR4M5.js";

// src/analytics/Analytics.ts
var Analytics = class {
  fetcher;
  constructor(fetch) {
    this.fetcher = fetch.fetcher;
  }
  sendCustomAnalyticEvent(payload) {
    return this.fetcher.post("/url-for-custom-analytic-event", payload);
  }
  sendPing(payload) {
    return this.fetcher.post("/url-for-ping", payload);
  }
};

// src/common/FetchService.ts
var import_axios = __toModule(require_axios());

// src/common/MockConnector.ts
var MockConnector = class {
  static bindLiveBoard(mock) {
    import("./chunks/mocks.YLC5PSWS.js").then((module) => module.rules(mock)).catch((e) => console.error("could not import liveboard mocks", e));
  }
  static bindDesigner(mock) {
    import("./chunks/mocks.U35S3E2B.js").then((module) => module.rules(mock)).catch((e) => console.error("could not import designer mocks", e));
  }
  static bindAnalytics(mock) {
    import("./chunks/mocks.H4D3XF45.js").then((module) => module.rules(mock)).catch((e) => console.error("could not import analytics mocks", e));
  }
};

// src/common/FetchService.ts
var defaultFetcherOptions = {
  useMock: false,
  config: {
    baseURL: "/",
    headers: {}
  }
};
var FetchService = class {
  useMock = false;
  fetcher;
  mock;
  constructor(options) {
    options = Object.assign(defaultFetcherOptions, options);
    this.useMock = options.useMock;
    if (this.useMock) {
      this.createMockFetcher(options);
    } else {
      this.createAxiosFetcher(options);
    }
  }
  createMockFetcher(options) {
    this.createAxiosFetcher(options);
    import("./chunks/src.U6RWTQP3.js").then((module) => {
      this.mock = new module.default(this.fetcher);
      MockConnector.bindLiveBoard(this.mock);
      MockConnector.bindDesigner(this.mock);
      MockConnector.bindAnalytics(this.mock);
    }).catch((e) => console.error(e));
  }
  createAxiosFetcher(options) {
    options.config.headers["folloze-session-guid"] = "get guid from cookie?";
    options.config.headers["Authorization"] = "get token from?";
    options.config.xsrfHeaderName = "X-CSRF-TOKEN";
    this.fetcher = import_axios.default.create(options.config);
  }
};

// src/designer/Designer.ts
var Designer = class {
  fetcher;
  constructor(fetch) {
    this.fetcher = fetch.fetcher;
  }
  saveLiveBoard(payload) {
    return new Promise((resolve, reject) => {
      this.fetcher.post("/url-for-saving-live-board", payload).then((result) => {
        resolve(result);
      }).catch((e) => {
        console.error("could not save liveboard", e);
        reject(e);
      });
    });
  }
};

// src/liveboard/Liveboard.ts
var Liveboard = class {
  fetcher;
  constructor(fetch) {
    this.fetcher = fetch.fetcher;
  }
  getItems(payload) {
    return new Promise((resolve, reject) => {
      this.fetcher.get("/url-getting-items", payload).then((result) => {
        resolve(result);
      }).catch((e) => {
        console.error("could not get items", e);
        reject(e);
      });
    });
  }
};

// src/sdk.ts
var ClientSDK = class {
  fetcher;
  analytics;
  designer;
  liveboard;
  constructor(options) {
    this.fetcher = new FetchService(options);
    this.analytics = new Analytics(this.fetcher);
    this.designer = new Designer(this.fetcher);
    this.liveboard = new Liveboard(this.fetcher);
  }
};
export {
  Analytics,
  ClientSDK,
  Designer,
  FetchService,
  Liveboard
};
