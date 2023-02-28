declare type AnalyticTypeToPayload = {
    video_start: {
        contentId: number;
        guid: string;
    };
    video_end: {
        contentId: number;
        guid: string;
        duration: number;
    };
    scroll_end: undefined;
};
declare type TypeMapAsGeneric<K extends keyof AnalyticTypeToPayload = keyof AnalyticTypeToPayload> = {
    [P in K]: AnalyticTypeToPayload[P];
}[K];
/**
 *
 * @param el - the dispatching dom element
 * @param type - string for the event name / type
 * @param payload - any data that can convert to json
 */
export declare function analyticEvent(el: HTMLElement, type: string, payload?: unknown): void;
/**
 *
 * @param el - the dispatching dom element
 * @param type - (string) any key name from AnalyticTypeToPayload
 * @param payload - data structure per type
 */
export declare function analyticInternalEvent<K extends keyof AnalyticTypeToPayload>(el: HTMLElement, type: K, payload?: TypeMapAsGeneric<K>): void;
export {};
