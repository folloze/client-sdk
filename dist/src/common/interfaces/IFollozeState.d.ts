import { InitialState } from "./IInitialState";
import { FetcherOptions } from "../FetchService";
export declare type IFollozeState = {
    initialState: InitialState;
    baseRoute: string;
    envConfig: {
        fetcherOptions: FetcherOptions;
        pingInterval?: number | null;
        cookiePostfix?: string;
    };
    platform: "desktop" | "mobile";
};
