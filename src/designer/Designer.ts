import {AxiosInstance, AxiosResponse} from "axios";
import {FetchService} from "../common/FetchService";

export class Designer {
    private fetcher: AxiosInstance;

    constructor(fetch: FetchService) {
        this.fetcher = fetch.fetcher;
    }

    saveLiveBoard(payload: any): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {
            this.fetcher.post("/url-for-saving-live-board", payload)
                .then(result => {
                    resolve(result);
                })
                .catch(e => {
                    console.error("could not save liveboard", e);
                    reject(e);
                });
        });
    }
}
