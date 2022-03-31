import {LitElement} from "lit";
import {LiveWidget} from "../LiveWidget";
import {FlzBoardEvent, FlzDesignerEvent} from "../FlzEvent";

export function widgetEmit(el: LiveWidget | LitElement, action: string, payload?: any, onSuccess?: CallableFunction, onError?: CallableFunction): void {
    el.dispatchEvent(new FlzBoardEvent(this, action, payload, onSuccess, onError));
}

export function editorEmit(el: LitElement, action: string, payload?: any, onSuccess?: CallableFunction, onError?: CallableFunction): void {
    el.dispatchEvent(new FlzDesignerEvent(this, action, payload, onSuccess, onError));
}

export function componentEmit(el: LitElement, action: string, payload?: any, onSuccess?: CallableFunction, onError?: CallableFunction): void {
    widgetEmit(el, action, payload, onSuccess, onError);
}

export function widgetEmitPromise(el: LiveWidget, action: string, payload?: any): Promise<any> {
    return new Promise((resolve, reject) => {
        widgetEmit(el, action, payload, resolve, reject);
    });
}

export function editorEmitPromise(el: LitElement, action: string, payload?: any): Promise<any> {
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
                detail: {}
            },
            options
        )
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
