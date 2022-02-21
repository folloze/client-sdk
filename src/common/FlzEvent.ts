import {LiveWidget} from "./LiveWidget";
import {FLZ_WIDGET_EVENT_TYPE} from "./interfaces/IWidgetCommunication";


export class FlzEvent extends Event {

    public action: string;
    public payload: any;
    public emitter: LiveWidget;
    private onSuccess: Function | undefined;
    private onError: Function | undefined;

    constructor(emitter: LiveWidget, action: string, payload: any, onSuccess?: CallableFunction, onError?: CallableFunction) {
        super(FLZ_WIDGET_EVENT_TYPE, {bubbles: true, composed: true});
        this.action = action;
        this.payload = payload;
        this.emitter = emitter;
        this.onSuccess = onSuccess;
        this.onError = onError;
    }
}
