import {LitElement} from "lit";
import { componentEmit, emit } from "./eventHelpers";

export class AbstractLeadTracker {
    public payload: unknown;
}

export type TrackedLeadLinkClickPayload = {
    url: string;
    targetType: string;
    details: {
        sectionName: string;
        widgetTag: string;
    },
    onResolve?: () => void;
}

export class TrackedLeadLinkClick extends AbstractLeadTracker {
    constructor(payload: TrackedLeadLinkClickPayload) {
        super();

        this.payload = {
            url: payload.url,
            target_type: payload.targetType,
            details: {
                section_name: payload.details.sectionName,
                widget_tag: payload.details.widgetTag
            },
            onResolve: payload.onResolve
        };
    }
}

export type TrackedLeadEvent = TrackedLeadLinkClick;

export function trackLeadEvent(el: LitElement, trackedLeadEvent: TrackedLeadEvent) {
    componentEmit(el, "track-image-link-click", { trackedLeadEvent });
}
