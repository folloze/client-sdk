import {Analytics} from "./analytics/Analytics";
import {FetcherOptions, FetchService} from "./common/FetchService";
import {Designer} from "./designer/Designer";
import {Liveboard} from "./liveboard/Liveboard";

export class ClientSDK {

    public fetcher: FetchService;
    public analytics: Analytics;
    public designer: Designer;
    public liveboard: Liveboard;

    private constructor() {
        // do not allow to call it from outside of this class
    }

    public static async create(options: FetcherOptions): Promise<ClientSDK> {
        const instance = new ClientSDK();
        const fetcher = await FetchService.create(options);
        instance.fetcher = fetcher;
        instance.analytics = new Analytics(fetcher);
        instance.designer = new Designer(fetcher);
        instance.liveboard = new Liveboard(fetcher);
        return instance;
    }
}
