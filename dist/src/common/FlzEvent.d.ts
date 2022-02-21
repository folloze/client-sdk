import { LiveWidget } from "./LiveWidget";
export declare class FlzEvent extends Event {
    action: string;
    payload: any;
    emitter: LiveWidget;
    onSuccess: Function | undefined;
    onError: Function | undefined;
    constructor(emitter: LiveWidget, action: string, payload: any, onSuccess?: CallableFunction, onError?: CallableFunction);
}
