import { Analytics } from "./analytics/Analytics";
import { FetchService } from "./common/FetchService";
import { Designer } from "./designer/Designer";
import { Liveboard } from "./liveboard/Liveboard";
export class ClientSDK {
    constructor(options) {
        this.fetcher = new FetchService(options);
        this.analytics = new Analytics(this.fetcher);
        this.designer = new Designer(this.fetcher);
        this.liveboard = new Liveboard(this.fetcher);
    }
}
//# sourceMappingURL=sdk.js.map