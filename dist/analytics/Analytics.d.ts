import { AxiosResponse } from "axios";
import { FetchService } from "../common/FetchService";
declare type PingPayload = {
    time: string;
    guid: string;
    leadId: number;
    boardId: number;
    itemId?: number;
};
export declare class Analytics {
    private fetcher;
    constructor(fetch: FetchService);
    sendCustomAnalyticEvent(payload: {
        type: string;
        data: any;
    }): Promise<AxiosResponse>;
    sendPing(payload: PingPayload): Promise<AxiosResponse<any>>;
}
export {};
