import { LiveWidget } from "./LiveWidget";
export declare const FLZ_DESIGNER_EVENT_TYPE = "flz-designer-event-type";
export declare abstract class FlzEvent extends Event {
    action: string;
    payload: any;
    emitter: LiveWidget;
    onSuccess: Function | undefined;
    onError: Function | undefined;
    protected constructor(emitter: LiveWidget, listenerStr: string, action: string, payload: any, onSuccess?: CallableFunction, onError?: CallableFunction);
}
export declare class FlzBoardEvent extends FlzEvent {
    constructor(emitter: LiveWidget, action: string, payload: any, onSuccess?: CallableFunction, onError?: CallableFunction);
}
export declare class FlzDesignerEvent extends FlzEvent {
    constructor(emitter: LiveWidget, action: string, payload: any, onSuccess?: CallableFunction, onError?: CallableFunction);
}
