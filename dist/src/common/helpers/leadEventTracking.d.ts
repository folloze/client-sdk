import { LitElement } from "lit";
import { TargetType } from "../../liveboard/ILiveboardTypes";
import { SourceType } from "../../analytics/Analytics";
declare type TrackedLeadActions = "lead-link-click" | "track-download-file";
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
};
export declare class TrackedLeadLinkClick extends AbstractLeadTracker {
    constructor(payload: TrackedLeadLinkClickPayload);
}
export declare class TrackedLeadDownloadFile extends AbstractLeadTracker {
    constructor(payload: {
        sourceType: SourceType;
        contentItemId: number;
        itemId?: number;
    });
}
export declare type TrackedLeadEvent = TrackedLeadLinkClick | TrackedLeadDownloadFile;
export declare function trackLeadEvent(el: LitElement, trackedLeadEvent: TrackedLeadEvent, onSuccess?: Function, onError?: Function): void;
export {};
