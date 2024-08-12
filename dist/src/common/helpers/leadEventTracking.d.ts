import { LitElement } from "lit";
import { TargetType } from "../../liveboard/ILiveboardTypes";
import { SourceType } from "../../analytics/Analytics";
type TrackedLeadActions = "lead-link-click" | "track-download-file" | "track-lead-like-content";
export declare class AbstractLeadTracker {
    payload: unknown;
    action: TrackedLeadActions;
}
export type TrackedLeadLinkClickPayload = {
    url: string;
    targetType: TargetType;
    details: {
        sectionName: string;
        widgetTag: string;
    };
};
export type TrackedContentActionPayload = {
    sourceType: SourceType;
    contentItemId: number;
    itemId?: number;
};
export declare class TrackedLeadLinkClick extends AbstractLeadTracker {
    constructor(payload: TrackedLeadLinkClickPayload);
}
export declare class TrackedLeadDownloadFile extends AbstractLeadTracker {
    constructor(payload: TrackedContentActionPayload);
}
export declare class TrackedLeadLikeContent extends AbstractLeadTracker {
    constructor(payload: TrackedContentActionPayload);
}
export type TrackedLeadEvent = TrackedLeadLinkClick | TrackedLeadDownloadFile | TrackedLeadLikeContent;
export declare function trackLeadEvent(el: LitElement, trackedLeadEvent: TrackedLeadEvent, onSuccess?: Function, onError?: Function): void;
export {};
