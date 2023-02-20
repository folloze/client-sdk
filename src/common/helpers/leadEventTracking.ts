import {LitElement} from "lit";
import { componentEmit } from "./eventHelpers";
import { TargetType } from "../../liveboard/ILiveboardTypes";

type TrackedLeadActions = "lead-link-click" | "lead-video-analytics";
type LeadVideoActivities = "play" | "pause" | "ended";

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

export type TrackedLeadVideoEngagementPayload = {
    details: {
        leadActivity: LeadVideoActivities,
        sectionName: string;
        widgetTag: string;
        eventId: number;
        guid: string;
    }
}

export class TrackedLeadLinkClick extends AbstractLeadTracker {
    constructor(payload: TrackedLeadLinkClickPayload) {
        super();

        this.payload =  payload;
        this.action = "lead-link-click";
    }
}

export class TrackedLeadVideoEngagement extends AbstractLeadTracker {
    constructor(payload: TrackedLeadVideoEngagementPayload) {
        super();

        this.payload =  payload;
        this.action = "lead-video-analytics";
    }
}

export type TrackedLeadEvent = TrackedLeadLinkClick | TrackedLeadVideoEngagement;

export function trackLeadEvent(el: LitElement, trackedLeadEvent: TrackedLeadEvent, onSuccess?: Function, onError?: Function) {
    componentEmit(el, "track-lead-event", { trackedLeadEvent }, onSuccess, onError);
}
