import { LitElement } from "lit";
import { FLZ_EVENT_ACTION } from "../interfaces/IEvent";
export declare function widgetEmit(el: LitElement, action: FLZ_EVENT_ACTION, payload?: any, onSuccess?: CallableFunction, onError?: CallableFunction): void;
export declare function editorEmit(el: LitElement, action: FLZ_EVENT_ACTION, payload?: any, onSuccess?: CallableFunction, onError?: CallableFunction): void;
export declare function componentEmit(el: LitElement, action: FLZ_EVENT_ACTION, payload?: any, onSuccess?: CallableFunction, onError?: CallableFunction): void;
export declare function widgetEmitPromise(el: LitElement, action: FLZ_EVENT_ACTION, payload?: any): Promise<any>;
export declare function editorEmitPromise(el: LitElement, action: FLZ_EVENT_ACTION, payload?: any): Promise<any>;
export declare function emit(el: HTMLElement, name: string, options?: CustomEventInit): CustomEvent<any>;
export declare function waitForEvent(el: HTMLElement, eventName: string): Promise<void>;
