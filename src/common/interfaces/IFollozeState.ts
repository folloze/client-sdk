import {InitialState} from "./IInitialState";
import {FetcherOptions} from "../FetchService";

export type IFollozeState = {
    initialState: InitialState;
    baseRoute: string;

    envConfig: {
        fetcherOptions: FetcherOptions;
        pingInterval?: number | null;
        cookiePostfix?: string;
    };

    // not really using this but nice to keep
    platform: "desktop" | "mobile"; // <- check this

    // todo: remove this from server-side we are not using it in liveboard
    // trackingConfig: ???
};
