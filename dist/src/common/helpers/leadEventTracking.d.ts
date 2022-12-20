import { LitElement } from "lit";
export declare class AbstractLeadTracker {
    payload: unknown;
}
export declare type TrackedLeadLinkClickPayload = {
    url: string;
    targetType: string;
    details: {
        sectionName: string;
        widgetTag: string;
    };
    onResolve?: () => void;
};
export declare class TrackedLeadLinkClick extends AbstractLeadTracker {
    constructor(payload: TrackedLeadLinkClickPayload);
}
export declare type TrackedLeadEvent = TrackedLeadLinkClick;
export declare function trackLeadEvent(el: LitElement, trackedLeadEvent: TrackedLeadEvent): void;
