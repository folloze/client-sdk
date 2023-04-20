import {type LitElement} from "lit";
import {componentEmit} from "./eventHelpers";

type AnalyticTypeToPayload = {
    video_started: {
        content_id: number;
        guid: string;
    };

    video_ended: {
        content_id: number;
        guid: string;
        duration: number; // the time in seconds
    };

    send_email_clicked: {
        email: string;
        subject: string;
    };
};

type TypeMapAsGeneric<K extends keyof AnalyticTypeToPayload = keyof AnalyticTypeToPayload> = {
    [P in K]: AnalyticTypeToPayload[P];
}[K];

export type AnalyticEventPrepared = {
    type: string; // or string when its custom
    timezone_offset: number;
    timezone: string; // 'Asia/Jerusalem'
    timestamp_delta: number; // (-5) delta seconds from timestamp to now
    session_guid: string;
    is_custom: boolean; // is it a user defined event
    metadata: unknown;

    _timestamp?: number; // for client use only - wont be sent to server
};

/**
 *
 * @param el - the dispatching dom element
 * @param type - string for the event name / type
 * @param payload - any data that can convert to json
 */
export function analyticEvent(el: HTMLElement, type: string, payload?: unknown) {
    analyticEventDispatch(el, type, true, payload);
}

/**
 *
 * @param el - the dispatching dom element
 * @param type - (string) any key name from AnalyticTypeToPayload
 * @param payload - data structure per type
 */
export function analyticInternalEvent<K extends keyof AnalyticTypeToPayload>(
    el: HTMLElement,
    type: K,
    payload?: TypeMapAsGeneric<K>,
) {
    analyticEventDispatch(el, type, false, payload);
}

function analyticEventDispatch(el: HTMLElement, type: string, isCustom: boolean = false, payload?: unknown) {
    componentEmit(el as LitElement, "analytic-event", {type, payload, isCustom});
}
