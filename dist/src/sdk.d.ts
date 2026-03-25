import { AllEventTypes, Analytics, type UserTrackedEventsV2 } from "./analytics/Analytics";
import { FetcherOptions, FetchService } from "./common/FetchService";
import { Designer } from "./designer/Designer";
import { Identity } from "./identity/Identity";
import { Liveboard } from "./liveboard/Liveboard";
export declare class ClientSDK {
    static instance: ClientSDK;
    fetcher: FetchService;
    analytics: Analytics;
    designer: Designer;
    identity: Identity;
    liveboard: Liveboard;
    private constructor();
    static create(options: FetcherOptions): Promise<ClientSDK>;
    static flzTrack<K extends AllEventTypes>(type: "user" | "lead", eventId: K, data: UserTrackedEventsV2[K]["payload"]): Promise<void>;
}
