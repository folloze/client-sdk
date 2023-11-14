declare type AnalyticTypeToPayload = {
    video_started: {
        content_id: number;
        content_item_id: number;
        guid: string;
    };
    video_ended: {
        content_id: number;
        content_item_id: number;
        guid: string;
        duration: number;
    };
    send_email_clicked: {
        email: string;
        subject: string;
    };
    anchor_clicked: {
        hash: string;
        button_text: string;
        origin_section: {
            name: string | null;
            id: string | null;
            anchor: string | null;
        };
        target_section: {
            name: string | null;
            id: string | null;
            anchor: string | null;
        };
    };
    cta_clicked: {
        cta_text: string;
        cta_type: string;
        data: Record<string, unknown>;
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
