import { Analytics } from "./analytics/Analytics";
import { FetcherOptions, FetchService } from "./common/FetchService";
import { Designer } from "./designer/Designer";
import { Identity } from "./identity/Identity";
import { Liveboard } from "./liveboard/Liveboard";
export declare class ClientSDK {
    fetcher: FetchService;
    analytics: Analytics;
    designer: Designer;
    identity: Identity;
    liveboard: Liveboard;
    private constructor();
    static create(options: FetcherOptions): Promise<ClientSDK>;
}
