import {LitElement} from "lit";
import {FlzBoardEvent, FlzDesignerEvent} from "../FlzEvent";
import {FLZ_DESIGNER_EVENT_ACTION, FLZ_LIVEBOARD_EVENT_ACTION} from "../interfaces/IEvent";
import {LeadResponseV1} from "../../liveboard/ILiveboardTypes";

export function customEmit(
    el: LitElement,
    action: string,
    payload?: any,
    onSuccess?: Function,
    onError?: Function,
): void {
    el.dispatchEvent(new FlzBoardEvent(el, action, payload, onSuccess, onError));
}

export function widgetEmit(
    el: LitElement,
    action: FLZ_LIVEBOARD_EVENT_ACTION,
    payload?: any,
    onSuccess?: Function,
    onError?: Function,
): void;
// todo: overload all Events_Actions - "get-lead" example, maybe there is a better way?
export function widgetEmit(
    el: LitElement,
    action: "get-lead",
    payload?: any,
    onSuccess?: (lead: LeadResponseV1) => void,
    onError?: Function,
): void {
    el.dispatchEvent(new FlzBoardEvent(el, action, payload, onSuccess, onError));
}

export function editorEmit(
    el: LitElement,
    action: FLZ_DESIGNER_EVENT_ACTION,
    payload?: any,
    onSuccess?: Function,
    onError?: Function,
): void {
    el.dispatchEvent(new FlzDesignerEvent(el, action, payload, onSuccess, onError));
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

export function widgetEmitPromise(el: LitElement, action: FLZ_LIVEBOARD_EVENT_ACTION, payload?: any): Promise<any> {
    return new Promise((resolve, reject) => {
        widgetEmit(el, action, payload, resolve, reject);
    });
}

export function editorEmitPromise(el: LitElement, action: FLZ_DESIGNER_EVENT_ACTION, payload?: any): Promise<any> {
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
