import { LiveWidget } from "./LiveWidget";
export declare class FlzEvent extends Event {
    private action;
    private payload;
    private emitter;
    constructor(emitter: LiveWidget, action: string, payload: any);
}
