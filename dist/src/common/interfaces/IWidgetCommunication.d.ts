import { LiveWidget } from "../LiveWidget";
export declare class FlzEvent extends Event {
    private payload;
    constructor(emitter: LiveWidget, type: string, payload: any);
}
