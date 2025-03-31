import { LitElement } from "lit";
import { type FlzEvent } from "../FlzEvent";
import { FLZ_DESIGNER_EVENT_ACTION, FLZ_DESIGNER_EVENT_REQUEST_ACTION, FLZ_EVENT_TYPE_PAYLOAD_MAP, FLZ_EVENT_TYPE_RESPONSE_MAP, FLZ_LIVEBOARD_EVENT_ACTION } from "../interfaces/IEvent";
import { CategoriesResponseV2, LeadResponseV1 } from "../../liveboard/ILiveboardTypes";
import { LiveFloatingWidget } from "../LiveFloatingWidget";
type ExcludedAction = Exclude<FLZ_LIVEBOARD_EVENT_ACTION, "get-lead" & "get-all-categories" & "floating-widget-manager">;
export declare function widgetEmit(el: LitElement, action: ExcludedAction, payload?: any, onSuccess?: Function, onError?: Function): void;
export declare function widgetEmit(el: LitElement, action: "get-lead", payload: undefined, onSuccess: (lead: LeadResponseV1) => void, onError?: Function): void;
export declare function widgetEmit(el: LitElement, action: "get-all-categories", payload: undefined, onSuccess?: (data: CategoriesResponseV2) => void, onError?: Function): void;
export declare function widgetEmit(el: LitElement, action: "floating-widget-manager", payload: {
    widget: LiveFloatingWidget;
    command: "hide" | "show" | "remove";
}, onSuccess?: Function, onError?: Function): void;
export declare function editorEmit<T extends FLZ_DESIGNER_EVENT_ACTION>(el: LitElement, action: T, payload?: FLZ_EVENT_TYPE_PAYLOAD_MAP[T], onSuccess?: Function, onError?: Function): void;
export declare function componentEmit(el: LitElement, action: FLZ_LIVEBOARD_EVENT_ACTION, payload?: any, onSuccess?: Function, onError?: Function): void;
export declare function widgetEmitPromise(el: LitElement, action: ExcludedAction, payload?: any): Promise<any>;
export declare function widgetEmitPromise(el: LitElement, action: "get-lead", payload?: any): Promise<LeadResponseV1>;
export declare function widgetEmitPromise(el: LitElement, action: "get-all-categories", payload?: any): Promise<CategoriesResponseV2>;
export declare function widgetEmitPromise(el: LitElement, action: "floating-widget-manager", payload: {
    widget: LiveFloatingWidget;
    command: "hide" | "show" | "remove";
}, onSuccess?: Function, onError?: Function): void;
export declare function editorEmitPromise<T extends FLZ_DESIGNER_EVENT_REQUEST_ACTION, P extends FLZ_EVENT_TYPE_PAYLOAD_MAP[T], A extends P['action']>(el: LitElement, action: T, payload: P): Promise<FLZ_EVENT_TYPE_RESPONSE_MAP[T][A]>;
export declare function emit(el: HTMLElement, name: string, options?: CustomEventInit): CustomEvent<any>;
export declare function waitForEvent(el: HTMLElement, eventName: string): Promise<void>;
export declare function onSuccessIfExists<T>(e: FlzEvent, result?: T): void;
export declare function onErrorIfExists<T>(e: FlzEvent, err: T): void;
export {};
