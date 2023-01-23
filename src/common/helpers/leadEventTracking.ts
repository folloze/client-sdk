import {LitElement} from "lit";
import { componentEmit } from "./eventHelpers";
import { TargetType } from "../../liveboard/ILiveboardTypes";

type TrackedLeadActions = "lead-link-click" | "lead-video-analytics";

export class AbstractLeadTracker {
    public payload: unknown;
    public action: TrackedLeadActions;
}

export type TrackedLeadLinkClickPayload = {
    url: string;
    targetType: TargetType
    details: {
        sectionName: string;
        widgetTag: string;
    }
}

export type TrackedLeadItemEngagementPayload = {
    url: string;
    targetType: TargetType
    details: {
        sectionName: string;
        widgetTag: string;
    }
}

export class TrackedLeadLinkClick extends AbstractLeadTracker {
    constructor(payload: TrackedLeadLinkClickPayload) {
        super();

        this.payload =  payload;
        this.action = "lead-link-click";
    }
}

export class TrackedLeadItemEngagement extends AbstractLeadTracker {
    constructor(payload: TrackedLeadItemEngagementPayload) {
        super();

        this.payload =  payload;
        this.action = "lead-video-analytics";
    }
}

export type TrackedLeadEvent = TrackedLeadLinkClick | TrackedLeadItemEngagement;

export function trackLeadEvent(el: LitElement, trackedLeadEvent: TrackedLeadEvent, onSuccess?: Function, onError?: Function) {
    componentEmit(el, "track-lead-event", { trackedLeadEvent }, onSuccess, onError);
}
