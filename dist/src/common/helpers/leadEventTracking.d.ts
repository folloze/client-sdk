import { LitElement } from "lit";
import { TargetType } from "../../liveboard/ILiveboardTypes";
declare type TrackedLeadActions = "lead-link-click" | "lead-video-analytics";
declare type LeadVideoActivities = "play" | "pause" | "ended";
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
export declare type TrackedLeadItemEngagementPayload = {
    details: {
        leadActivity: LeadVideoActivities;
        sectionName: string;
        widgetTag: string;
        eventId: number;
        guid: string;
    };
};
export declare class TrackedLeadLinkClick extends AbstractLeadTracker {
    constructor(payload: TrackedLeadLinkClickPayload);
}
export declare class TrackedLeadItemEngagement extends AbstractLeadTracker {
    constructor(payload: TrackedLeadItemEngagementPayload);
}
export declare type TrackedLeadEvent = TrackedLeadLinkClick | TrackedLeadItemEngagement;
export declare function trackLeadEvent(el: LitElement, trackedLeadEvent: TrackedLeadEvent, onSuccess?: Function, onError?: Function): void;
export {};
