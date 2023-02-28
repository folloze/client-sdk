import {type LitElement} from "lit";
import {componentEmit} from "./eventHelpers";

type AnalyticTypeToPayload = {
    video_start: {
        contentId: number;
        guid: string;
    };
    video_end: {
        contentId: number;
        guid: string;
        duration: number; // the time in seconds
    };
    scroll_end: undefined;
};

type TypeMapAsGeneric<K extends keyof AnalyticTypeToPayload = keyof AnalyticTypeToPayload> = {
    [P in K]: AnalyticTypeToPayload[P];
}[K];

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
