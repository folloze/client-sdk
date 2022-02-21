import { LiveWidget } from "./LiveWidget";
export declare class FlzEvent extends Event {
    action: string;
    payload: any;
    emitter: LiveWidget;
    private onSuccess;
    private onError;
    constructor(emitter: LiveWidget, action: string, payload: any, onSuccess?: CallableFunction, onError?: CallableFunction);
}
