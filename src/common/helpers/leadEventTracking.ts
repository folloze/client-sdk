import {LitElement} from "lit";
import { componentEmit, emit } from "./eventHelpers";

export class AbstractLeadTracker {
    public payload: unknown;
}

export class TrackedLeadLinkClick extends AbstractLeadTracker {
    constructor(payload) {
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

export type TrackedLeadEvent = any;

export function trackLeadEvent(el: LitElement, trackedLeadEvent: any) {
    componentEmit(el, "track-image-link-click", { trackedLeadEvent });
}
