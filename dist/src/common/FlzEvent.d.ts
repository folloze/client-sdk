import { LiveWidget } from "./LiveWidget";
export declare class FlzEvent extends Event {
    action: string;
    payload: any;
    emitter: LiveWidget;
    callback: Function | undefined;
    constructor(emitter: LiveWidget, action: string, payload: any, cb?: CallableFunction);
}
