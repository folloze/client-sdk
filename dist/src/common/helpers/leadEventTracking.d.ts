import { LitElement } from "lit";
export declare class AbstractLeadTracker {
    payload: unknown;
}
export declare class TrackedLeadLinkClick extends AbstractLeadTracker {
    constructor(data: any);
}
export declare type TrackedLeadEvent = any;
export declare function trackLeadEvent(el: LitElement, trackedLeadEvent: any): void;
