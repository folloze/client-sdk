import { LitElement } from "lit";
import { TargetType } from "../../liveboard/ILiveboardTypes";
declare type TrackedLeadActions = "track-lead-link-click";
export declare class AbstractLeadTracker {
    payload: unknown;
    action: TrackedLeadActions;
}
export declare type TrackedLeadLinkClickPayload = {
    url: string;
    targetType: TargetType;
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
export {};
