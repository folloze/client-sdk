import {LiveWidget} from "./LiveWidget";
import {FLZ_WIDGET_EVENT_TYPE} from "./interfaces/IWidgetCommunication";


export class FlzEvent extends Event {

    private action: string;
    private payload: any;
    private emitter: LiveWidget;
    private callback: Function;

    constructor(emitter: LiveWidget, action: string, payload: any, cb?: CallableFunction) {
        super(FLZ_WIDGET_EVENT_TYPE, {bubbles: true, composed: true});
        this.action = action;
        this.payload = payload;
        this.emitter = emitter;
        this.callback = cb;
    }
}
