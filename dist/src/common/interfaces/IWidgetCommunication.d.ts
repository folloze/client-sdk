import { LiveWidget } from "../LiveWidget";
export declare const FLZ_EVENT_TYPE = "flz-event-type";
export declare class FlzEvent extends Event {
    private action;
    private payload;
    constructor(emitter: LiveWidget, type: string, payload: any);
}
