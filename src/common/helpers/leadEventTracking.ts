import {LitElement} from "lit";
import { componentEmit } from "./eventHelpers";
import { TargetType } from "../../liveboard/ILiveboardTypes";

type TrackedLeadActions = "lead-link-click"

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

export class TrackedLeadLinkClick extends AbstractLeadTracker {
    constructor(payload: TrackedLeadLinkClickPayload) {
        super();

        this.payload =  payload;
        this.action = "lead-link-click";
    }
}

export type TrackedLeadEvent = TrackedLeadLinkClick;

export function trackLeadEvent(el: LitElement, trackedLeadEvent: TrackedLeadEvent, onSuccess?: Function, onError?: Function) {
    componentEmit(el, "track-lead-event", { trackedLeadEvent }, onSuccess, onError);
}
