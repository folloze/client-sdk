import { AxiosResponse } from "axios";
import { FetchService } from "../common/FetchService";
export declare class Liveboard {
    private fetcher;
    constructor(fetch: FetchService);
    getItems(payload: any): Promise<AxiosResponse>;
}
