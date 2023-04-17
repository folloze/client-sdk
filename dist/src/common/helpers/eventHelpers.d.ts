import { LitElement } from "lit";
import { FLZ_DESIGNER_EVENT_ACTION, FLZ_LIVEBOARD_EVENT_ACTION } from "../interfaces/IEvent";
import { CategoriesResponseV2, LeadResponseV1 } from "../../liveboard/ILiveboardTypes";
import { LiveFloatingWidget } from "../LiveFloatingWidget";
declare type ExcludedAction = Exclude<FLZ_LIVEBOARD_EVENT_ACTION, "get-lead" & "get-all-categories" & "floating-widget-manager">;
export declare function widgetEmit(el: LitElement, action: ExcludedAction, payload?: any, onSuccess?: Function, onError?: Function): void;
export declare function widgetEmit(el: LitElement, action: "get-lead", payload: undefined, onSuccess: (lead: LeadResponseV1) => void, onError?: Function): void;
export declare function widgetEmit(el: LitElement, action: "get-all-categories", payload: undefined, onSuccess?: (data: CategoriesResponseV2) => void, onError?: Function): void;
export declare function widgetEmit(el: LitElement, action: "floating-widget-manager", payload: {
    widget: LiveFloatingWidget;
    command: "hide" | "show" | "remove";
}, onSuccess?: Function, onError?: Function): void;
export declare function editorEmit(el: LitElement, action: FLZ_DESIGNER_EVENT_ACTION, payload?: any, onSuccess?: Function, onError?: Function): void;
export declare function componentEmit(el: LitElement, action: FLZ_LIVEBOARD_EVENT_ACTION, payload?: any, onSuccess?: Function, onError?: Function): void;
export declare function widgetEmitPromise(el: LitElement, action: ExcludedAction, payload?: any): Promise<any>;
export declare function widgetEmitPromise(el: LitElement, action: "get-lead", payload?: any): Promise<LeadResponseV1>;
export declare function widgetEmitPromise(el: LitElement, action: "get-all-categories", payload?: any): Promise<CategoriesResponseV2>;
export declare function widgetEmitPromise(el: LitElement, action: "floating-widget-manager", payload: {
    widget: LiveFloatingWidget;
    command: "hide" | "show" | "remove";
}, onSuccess?: Function, onError?: Function): void;
export declare function editorEmitPromise(el: LitElement, action: FLZ_DESIGNER_EVENT_ACTION, payload?: any): Promise<any>;
export declare function emit(el: HTMLElement, name: string, options?: CustomEventInit): CustomEvent<any>;
export declare function waitForEvent(el: HTMLElement, eventName: string): Promise<void>;
export {};
