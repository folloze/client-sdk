import {LiveWidget} from "./LiveWidget";
import {FLZ_WIDGET_EVENT_TYPE} from "./interfaces/IWidgetCommunication";
import {LitElement} from "lit";
export const FLZ_DESIGNER_EVENT_TYPE = "flz-designer-event-type";

export abstract class FlzEvent extends Event {

    public action: string;
    public payload: any;
    public emitter: LitElement;
    public onSuccess: Function | undefined;
    public onError: Function | undefined;

    protected constructor(emitter: LitElement, listenerStr: string, action: string, payload: any, onSuccess?: CallableFunction, onError?: CallableFunction) {
        super(listenerStr, {bubbles: true, composed: true});
        this.action = action;
        this.payload = payload;
        this.emitter = emitter;
        this.onSuccess = onSuccess;
        this.onError = onError;
    }
}

export class FlzBoardEvent extends FlzEvent {
    constructor(emitter: LiveWidget | LitElement, action: string, payload: any, onSuccess?: CallableFunction, onError?: CallableFunction) {
        super(emitter, FLZ_WIDGET_EVENT_TYPE, action, payload, onSuccess, onError);
    }
}

export class FlzDesignerEvent extends FlzEvent {
    constructor(emitter: LitElement, action: string, payload: any, onSuccess?: CallableFunction, onError?: CallableFunction) {
        super(emitter, FLZ_DESIGNER_EVENT_TYPE, action, payload, onSuccess, onError);
    }
}
