import {Analytics} from "./analytics/Analytics";
import {FetcherOptions, FetchService} from "./common/FetchService";
import {Designer} from "./designer/Designer";
import {Liveboard} from "./liveboard/Liveboard";

export class ClientSDK {

    private readonly fetcher: FetchService;
    public analytics: Analytics;
    public designer: Designer;
    public liveboard: Liveboard;

    constructor(options: FetcherOptions) {
        this.fetcher = new FetchService(options);
        this.analytics = new Analytics(this.fetcher);
        this.designer = new Designer(this.fetcher);
        this.liveboard = new Liveboard(this.fetcher);
    }

}
