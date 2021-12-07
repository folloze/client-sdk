import {AxiosInstance, AxiosResponse} from "axios";
import {FetchService} from "../common/FetchService";


type PingPayload = {
    time: string;
    guid: string;
    leadId: number;
    boardId: number;
    itemId?: number;
}


export class Analytics {
    private fetcher: AxiosInstance;

    constructor(fetch: FetchService) {
        this.fetcher = fetch.fetcher;
    }

    sendCustomAnalyticEvent(payload: {type: string, data: any}): Promise<AxiosResponse> {
        return this.fetcher.post("/url-for-custom-analytic-event", payload);
    }

    sendPing(payload: PingPayload) {
        return this.fetcher.post("/url-for-ping", payload);
    }
}
