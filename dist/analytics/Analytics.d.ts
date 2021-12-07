import { AxiosResponse } from "axios";
import { FetchService } from "../common/FetchService";
export declare class Analytics {
    private fetcher;
    constructor(fetch: FetchService);
    sendCustomAnalyticEvent(payload: {
        type: string;
        data: any;
    }): Promise<AxiosResponse>;
}
