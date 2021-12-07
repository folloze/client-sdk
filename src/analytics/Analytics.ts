import {AxiosInstance, AxiosResponse} from "axios";
import {FetchService} from "../common/FetchService";

export class Analytics {
    private fetcher: AxiosInstance;

    constructor(fetch: FetchService) {
        this.fetcher = fetch.fetcher;
    }

    sendCustomAnalyticEvent(payload: {type: string, data: any}): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {
            this.fetcher.post("/url-for-custom-analytic-event", payload)
                .then(result => {
                    resolve(result);
                })
                .catch(e => {
                    console.error("could not send custom analytic event", e);
                    reject(e);
                });
        });
    }
}
