import {LitElement} from "lit";
import {FlzBoardEvent, FlzDesignerEvent, type FlzEvent} from "../FlzEvent";
import {FLZ_DESIGNER_EVENT_ACTION, FLZ_DESIGNER_EVENT_REQUEST_ACTION, FLZ_EVENT_TYPE_PAYLOAD_MAP, FLZ_EVENT_TYPE_RESPONSE_MAP, FLZ_LIVEBOARD_EVENT_ACTION} from "../interfaces/IEvent";
import {CategoriesResponseV2, LeadResponseV1} from "../../liveboard/ILiveboardTypes";
import {LiveFloatingWidget} from "../LiveFloatingWidget";

// todo: overload all Events_Actions - "get-lead" example, maybe there is a better way?
type ExcludedAction = Exclude<
    FLZ_LIVEBOARD_EVENT_ACTION,
    "get-lead" & "get-all-categories" & "floating-widget-manager"
>;
export function widgetEmit(
    el: LitElement,
    action: ExcludedAction,
    payload?: any,
    onSuccess?: Function,
    onError?: Function,
): void;
export function widgetEmit(
    el: LitElement,
    action: "get-lead",
    payload: undefined,
    onSuccess: (lead: LeadResponseV1) => void,
    onError?: Function,
): void;
export function widgetEmit(
    el: LitElement,
    action: "get-all-categories",
    payload: undefined,
    onSuccess?: (data: CategoriesResponseV2) => void,
    onError?: Function,
): void;
export function widgetEmit(
    el: LitElement,
    action: "floating-widget-manager",
    payload: {widget: LiveFloatingWidget; command: "hide" | "show" | "remove"},
    onSuccess?: Function,
    onError?: Function,
): void;
export function widgetEmit(
    el: LitElement,
    action: FLZ_LIVEBOARD_EVENT_ACTION,
    payload?: any,
    onSuccess?: Function,
    onError?: Function,
): void {
    window["board"]
        ? window["board"]!.dispatchEvent(new FlzBoardEvent(el, action, payload, onSuccess, onError))
        : el.dispatchEvent(new FlzBoardEvent(el, action, payload, onSuccess, onError));
}

export function editorEmit<T extends FLZ_DESIGNER_EVENT_ACTION>(
    el: LitElement,
    action: T,
    payload?: FLZ_EVENT_TYPE_PAYLOAD_MAP[T],
    onSuccess?: Function,
    onError?: Function,
): void {
    window["board"]
        ? window["board"]!.dispatchEvent(new FlzDesignerEvent(el, action, payload, onSuccess, onError))
        : el.dispatchEvent(new FlzDesignerEvent(el, action, payload, onSuccess, onError));
}

export function componentEmit(
    el: LitElement,
    action: FLZ_LIVEBOARD_EVENT_ACTION,
    payload?: any,
    onSuccess?: Function,
    onError?: Function,
): void {
    widgetEmit(el, action, payload, onSuccess, onError);
}

export function widgetEmitPromise(el: LitElement, action: ExcludedAction, payload?: any): Promise<any>;
export function widgetEmitPromise(el: LitElement, action: "get-lead", payload?: any): Promise<LeadResponseV1>;
export function widgetEmitPromise(
    el: LitElement,
    action: "get-all-categories",
    payload?: any,
): Promise<CategoriesResponseV2>;
export function widgetEmitPromise(
    el: LitElement,
    action: "floating-widget-manager",
    payload: {widget: LiveFloatingWidget; command: "hide" | "show" | "remove"},
    onSuccess?: Function,
    onError?: Function,
): void;
export function widgetEmitPromise(el: LitElement, action: FLZ_LIVEBOARD_EVENT_ACTION, payload?: any): Promise<any> {
    return new Promise((resolve, reject) => {
        widgetEmit(el, action, payload, resolve, reject);
    });
}

export function editorEmitPromise<
    T extends FLZ_DESIGNER_EVENT_REQUEST_ACTION,
    P extends FLZ_EVENT_TYPE_PAYLOAD_MAP[T],
    A extends P['action']
>(
    el: LitElement, 
    action: T,
    payload: P
): Promise<FLZ_EVENT_TYPE_RESPONSE_MAP[T][A]>;
export function editorEmitPromise<T extends Exclude<FLZ_DESIGNER_EVENT_ACTION, FLZ_DESIGNER_EVENT_REQUEST_ACTION>>(
    el: LitElement, 
    action: T, 
    payload?: any
): Promise<any>;
export function editorEmitPromise(
    el: LitElement, 
    action: FLZ_DESIGNER_EVENT_ACTION, 
    payload?: any
): Promise<any> {
    return new Promise((resolve, reject) => {
        editorEmit(el, action, payload, resolve, reject);
    });
}

//
// Emits a custom event with more convenient defaults.
//
export function emit(el: HTMLElement, name: string, options?: CustomEventInit) {
    const event = new CustomEvent(
        name,
        Object.assign(
            {
                bubbles: true,
                cancelable: false,
                composed: true,
                detail: {},
            },
            options,
        ),
    );
    el.dispatchEvent(event);
    return event;
}

//
// Emits a custom event with a promise.
//
export async function emitPromise(el: HTMLElement, eventName: string, detail: any): Promise<any> {
    const result = {promise: undefined};
    emit(el, eventName, {detail: {...detail, result}});

    return result.promise;
}

//
// Waits for a specific event to be emitted from an element. Ignores events that bubble up from child elements.
//
export function waitForEvent(el: HTMLElement, eventName: string) {
    return new Promise<void>(resolve => {
        function done(event: Event) {
            if (event.target === el) {
                el.removeEventListener(eventName, done);
                resolve();
            }
        }

        el.addEventListener(eventName, done);
    });
}

export function onSuccessIfExists<T>(e: FlzEvent, result?: T) {
    if (e.onSuccess) {
        result ? e.onSuccess(result) : e.onSuccess();
    } else {
        console.warn("onSuccess is not defined for event", e.action);
    }
}

export function onErrorIfExists<T>(e: FlzEvent, err: T) {
    if (e.onError) {
        e.onError(err);
    } else {
        console.error(`onError is not defined for event ${e.action}`, err);
    }
}
