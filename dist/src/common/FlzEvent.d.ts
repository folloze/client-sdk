import { LitElement } from "lit";
export declare const FLZ_DESIGNER_EVENT_TYPE = "flz-designer-event-type";
export declare abstract class FlzEvent extends Event {
    action: string;
    payload: any;
    emitter: LitElement;
    onSuccess: Function | undefined;
    onError: Function | undefined;
    skipWidgetsNotify: boolean;
    protected constructor(emitter: LitElement, listenerStr: string, action: string, payload: any, onSuccess?: CallableFunction, onError?: CallableFunction);
}
export declare class FlzBoardEvent extends FlzEvent {
    constructor(emitter: LitElement, action: string, payload: any, onSuccess?: CallableFunction, onError?: CallableFunction);
}
export declare class FlzDesignerEvent extends FlzEvent {
    constructor(emitter: LitElement, action: string, payload: any, onSuccess?: CallableFunction, onError?: CallableFunction);
}
