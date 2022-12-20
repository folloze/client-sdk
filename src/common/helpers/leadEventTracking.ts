import {LitElement} from "lit";
import { componentEmit, emit } from "./eventHelpers";

export class AbstractLeadTracker {
    public payload: unknown;
}

export class TrackedLeadLinkClick extends AbstractLeadTracker {
    constructor(data) {
        super();

        this.payload = {
            section_name: data.sectionName,
            widget_tag: data.widgetTag,
        };
    }
}

export type TrackedLeadEvent = any;

export function trackLeadEvent(el: LitElement, trackedLeadEvent: any) {
    componentEmit(el, "track-image-link-click", { trackedLeadEvent });
}
