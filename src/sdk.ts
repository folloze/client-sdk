import {AllEventTypes, Analytics, type UserTrackedEventsV2, LiveBoardEventTypes, DesignerEventTypes, WidgetEventTypes} from "./analytics/Analytics";
import {FetcherOptions, FetchService} from "./common/FetchService";
import {Designer} from "./designer/Designer";
import {Identity} from "./identity/Identity";
import {Liveboard} from "./liveboard/Liveboard";
import {identifyAptrinsicUser} from "./common/helpers/gainsightHelper";

export class ClientSDK {
    public static instance: ClientSDK;
    public fetcher: FetchService;
    public analytics: Analytics;
    public designer: Designer;
    public identity: Identity;
    public liveboard: Liveboard;

    private constructor() {
        // do not allow to call it from outside of this class
    }

    private static get isTryMe() {
        return !!window["FollozeState"]?.envConfig?.tryMe;
    }

    public static async create(options: FetcherOptions): Promise<ClientSDK> {
        const instance = new ClientSDK();
        const fetcher = await FetchService.create(options);
        instance.fetcher = fetcher;
        instance.analytics = new Analytics(fetcher);
        instance.designer = new Designer(fetcher);
        instance.identity = new Identity(fetcher);
        instance.liveboard = new Liveboard(fetcher);

        ClientSDK.instance = instance;
        globalThis["flzTrack"] = ClientSDK.flzTrack;

        return instance;
    }

    public static async flzTrack<K extends AllEventTypes>(type: "user" | "lead", eventId: K, data: UserTrackedEventsV2[K]["payload"]) {
        if (type === "user") {
            if (ClientSDK.isTryMe) {
                const eventName = LiveBoardEventTypes[eventId] || DesignerEventTypes[eventId] || WidgetEventTypes[eventId] || String(eventId);
                ClientSDK.instance.analytics.trackGainsight(eventName, { event_id: eventId, ...data });
                if (eventId === WidgetEventTypes.try_me_user_login) {
                    identifyAptrinsicUser(data as UserTrackedEventsV2[WidgetEventTypes.try_me_user_login]["payload"]);
                }
            } else {
                await ClientSDK.instance.analytics.trackUserEvent(eventId, data);
            }
        }
        else if (type === "lead") {
            await ClientSDK.instance.analytics.trackLeadEvent(eventId, data);
        }
    }
}
