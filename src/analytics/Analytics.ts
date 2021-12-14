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

    sendLeadBoardView(payload: {boardId: number}): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {
            this.fetcher.post(`/live_board/v2/boards/${payload.boardId}/lead_views`)
                .then(result => {
                    resolve(result);
                })
                .catch(e => {
                    console.error("could not track lead board view", e);
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
