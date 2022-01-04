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

    /**
     * Lead viewed board
     * 
     * @param {number} boardId 
     */
    sendLeadBoardView(boardId: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.fetcher.post(`/live_board/v2/boards/${boardId}/lead_views`)
                .then(() => { resolve(); })
                .catch(e => {
                    console.error("could not track lead board view", e);
                    reject(e);
                });
        });
    }

    /**
     * Lead viewed item
     * 
     * @param {number} itemId 
     * @param {string} guid 
     */
    sendLeadItemView(itemId: number, guid: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.fetcher.post(`/live_board/v2/items/${itemId}/lead_views`, {guid})
                .then(() => { resolve(); })
                .catch(e => {
                    console.error("could not track lead item view", e);
                    reject(e);
                });
        });
    }

    sendCustomAnalyticEvent(payload: {type: string, data: any}): Promise<AxiosResponse> {
        return this.fetcher.post("/url-for-custom-analytic-event", payload);
    }

    sendPing(payload: PingPayload) {
        return this.fetcher.post("/url-for-ping", payload);
    }
}
