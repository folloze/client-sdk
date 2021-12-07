import {AxiosInstance, AxiosResponse} from "axios";
import {FetchService} from "../common/FetchService";

export class Liveboard {
    private fetcher: AxiosInstance;

    constructor(fetch: FetchService) {
        this.fetcher = fetch.fetcher;
    }

    getItems(payload?: any): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {
            this.fetcher.get("/url-getting-items", payload)
                .then(result => {
                    resolve(result);
                })
                .catch(e => {
                    console.error("could not get items", e);
                    reject(e);
                });
        });
    }
}
