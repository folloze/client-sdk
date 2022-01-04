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
    /**
     * Lead viewed board
     *
     * @param {number} boardId
     */
    sendLeadBoardView(boardId: number): Promise<void>;
    /**
     * Lead viewed item
     *
     * @param {number} itemId
     * @param {string} guid
     */
    sendLeadItemView(itemId: number, guid: string): Promise<void>;
    sendCustomAnalyticEvent(payload: {
        type: string;
        data: any;
    }): Promise<AxiosResponse>;
    sendPing(payload: PingPayload): Promise<AxiosResponse<any>>;
}
export {};
