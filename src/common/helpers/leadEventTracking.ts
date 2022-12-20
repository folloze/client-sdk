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
            targetType: payload.targetType,
            details: {
                sectionName: payload.details.sectionName,
                widgetTag: payload.details.widgetTag
            },
            onResolve: payload.onResolve
        };
    }
}

export type TrackedLeadEvent = any;

export function trackLeadEvent(el: LitElement, trackedLeadEvent: any) {
    componentEmit(el, "track-image-link-click", { trackedLeadEvent });
}
