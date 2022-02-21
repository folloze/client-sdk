import {
  require_axios
} from "./chunk.NG7TLSQO.js";
import {
  Analytics
} from "./chunk.YHWKAM4X.js";
import {
  Designer
} from "./chunk.4I3QHWMW.js";
import {
  Liveboard
} from "./chunk.E2WLG55Y.js";
import {
  __toModule
} from "./chunk.Z3GS5MY4.js";

// src/common/FetchService.ts
var import_axios = __toModule(require_axios());

// src/common/MockConnector.ts
var MockConnector = class {
  static async bindLiveBoard(mock) {
    await import("./mocks.QVQHDJTX.js").then((module) => module.rules(mock)).catch((e) => console.error("could not import liveboard mocks", e));
  }
  static async bindDesigner(mock) {
    await import("./mocks.IPHNIVFC.js").then((module) => module.rules(mock)).catch((e) => console.error("could not import designer mocks", e));
  }
  static async bindAnalytics(mock) {
    await import("./mocks.LF7HGLSV.js").then((module) => module.rules(mock)).catch((e) => console.error("could not import analytics mocks", e));
  }
};

// src/common/FetchService.ts
var defaultFetcherOptions = {
  useMock: false,
  isPreview: false,
  config: {
    baseURL: "/",
    headers: {}
  }
};
var FetchService = class {
  constructor(options) {
    this.useMock = options.useMock;
    this.options = options;
  }
  static async create(options) {
    options = Object.assign(defaultFetcherOptions, options);
    const instance = new FetchService(options);
    if (options.useMock) {
      await instance.createMockFetcher(options);
    } else {
      instance.createAxiosFetcher(options);
    }
    return instance;
  }
  async createMockFetcher(options) {
    return await import("./src.QMSX7QCF.js").then(async (module) => {
      this.createAxiosFetcher(options);
      this.mock = new module.default(this.fetcher);
      await Promise.all([
        MockConnector.bindLiveBoard(this.mock),
        MockConnector.bindDesigner(this.mock),
        MockConnector.bindAnalytics(this.mock)
      ]);
    }).catch((e) => console.error(e));
  }
  withPartialContent(apiCall) {
  }
  createAxiosFetcher(options) {
    options.config.headers["X-Requested-With"] = "XMLHttpRequest";
    this.fetcher = import_axios.default.create(options.config);
  }
};

// src/sdk.ts
var ClientSDK = class {
  constructor() {
  }
  static async create(options) {
    const instance = new ClientSDK();
    const fetcher = await FetchService.create(options);
    instance.fetcher = fetcher;
    instance.analytics = new Analytics(fetcher);
    instance.designer = new Designer(fetcher);
    instance.liveboard = new Liveboard(fetcher);
    return instance;
  }
};

export {
  FetchService,
  ClientSDK
};
