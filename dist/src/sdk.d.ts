import { Analytics } from "./analytics/Analytics";
import { FetcherOptions, FetchService } from "./common/FetchService";
import { Designer } from "./designer/Designer";
import { Liveboard } from "./liveboard/Liveboard";
export declare class ClientSDK {
    fetcher: FetchService;
    analytics: Analytics;
    designer: Designer;
    liveboard: Liveboard;
    private constructor();
    static create(options: FetcherOptions): Promise<ClientSDK>;
}
