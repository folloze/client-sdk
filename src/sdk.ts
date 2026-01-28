import {AllEventTypes, Analytics, type UserTrackedEventsV2} from "./analytics/Analytics";
import {FetcherOptions, FetchService} from "./common/FetchService";
import {Designer} from "./designer/Designer";
import {Liveboard} from "./liveboard/Liveboard";

export class ClientSDK {
    public static instance: ClientSDK;
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

        ClientSDK.instance = instance;
        globalThis["flzTrack"] = ClientSDK.flzTrack;

        return instance;
    }

    public static async flzTrack<K extends AllEventTypes>(type: "user" | "lead", eventId: K, data: UserTrackedEventsV2[K]["payload"]): Promise<void> {
        console.log(eventId, data);
        if (type === "user") {
            await ClientSDK.instance.analytics.trackUserEvent(eventId, data);
        }
        else if (type === "lead") {
            await ClientSDK.instance.analytics.trackLeadEvent(eventId, data);
        }
    }

   
}
