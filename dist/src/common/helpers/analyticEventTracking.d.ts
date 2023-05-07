declare type AnalyticTypeToPayload = {
    video_started: {
        content_id: number;
        guid: string;
    };
    video_ended: {
        content_id: number;
        guid: string;
        duration: number;
    };
    send_email_clicked: {
        email: string;
        subject: string;
    };
};
declare type TypeMapAsGeneric<K extends keyof AnalyticTypeToPayload = keyof AnalyticTypeToPayload> = {
    [P in K]: AnalyticTypeToPayload[P];
}[K];
export declare type AnalyticEventPrepared = {
    type: string;
    timezone_offset: number;
    timezone: string;
    timestamp_delta: number;
    session_guid: string;
    is_custom: boolean;
    metadata: unknown;
    _timestamp?: number;
};
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
