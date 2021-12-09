import { AxiosResponse } from "axios";
import { FetchService } from "../common/FetchService";
export declare class Designer {
    private fetcher;
    constructor(fetch: FetchService);
    saveLiveBoard(payload: any): Promise<AxiosResponse>;
}
