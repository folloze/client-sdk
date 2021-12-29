import { Analytics } from "./analytics/Analytics";
import { FetcherOptions } from "./common/FetchService";
import { Designer } from "./designer/Designer";
import { Liveboard } from "./liveboard/Liveboard";
export declare class ClientSDK {
    private readonly fetcher;
    analytics: Analytics;
    designer: Designer;
    liveboard: Liveboard;
    constructor(options: FetcherOptions);
}
