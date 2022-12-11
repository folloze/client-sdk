import { LitElement } from "lit";
import { DesignerEventTypes } from "../../analytics/Analytics";
declare type AddSectionEventPayload = {
    sectionId?: string;
    sectionName: string;
    sectionType?: string;
    sectionCategory?: string;
};
declare type EditSectionEventPayload = {
    sectionName: string;
    isSectionManager: boolean;
};
declare type DeleteSectionEventPayload = {
    widgetId?: string;
    widgetName?: string;
    sectionName?: string;
    isFloatingWidget: boolean;
};
declare type DeleteWidgetEventPayload = {
    widgetId?: string;
    isFloatingWidget: boolean;
};
declare type EventPayload = AddSectionEventPayload | EditSectionEventPayload | DeleteSectionEventPayload;
export declare class AbstractTracker {
    trackingEventPayload: any;
    action: DesignerEventTypes;
    constructor(trackingEventPayload: EventPayload);
}
export declare class TrackAddSection extends AbstractTracker {
    constructor(trackingEventPayload: AddSectionEventPayload);
}
export declare class TrackDeleteSection extends AbstractTracker {
    constructor(trackingEventPayload: DeleteSectionEventPayload);
}
export declare class TrackDeleteWidget extends AbstractTracker {
    constructor(trackingEventPayload: DeleteWidgetEventPayload);
}
export declare class TrackAddFloatingSection extends AbstractTracker {
    constructor(trackingEventPayload: any);
}
export declare class TrackEditSection extends AbstractTracker {
    constructor(trackingEventPayload: EditSectionEventPayload);
}
export declare class TrackPublishBoard extends AbstractTracker {
    constructor();
}
export declare class TrackPreviewBoard extends AbstractTracker {
    constructor();
}
export declare class TrackAddPersonalizationRule extends AbstractTracker {
    constructor(trackingEventPayload: any);
}
export declare type EventTracker = TrackAddSection | TrackDeleteSection | TrackDeleteWidget | TrackAddFloatingSection | TrackEditSection | TrackPreviewBoard | TrackPublishBoard | TrackAddPersonalizationRule;
export declare function trackEvent(host: LitElement, tracker: EventTracker): void;
export {};
