import { LiveWidget } from "./LiveWidget";
export declare class FlzEvent extends Event {
    private action;
    private payload;
    private emitter;
    private callback;
    constructor(emitter: LiveWidget, action: string, payload: any, cb?: CallableFunction);
}
