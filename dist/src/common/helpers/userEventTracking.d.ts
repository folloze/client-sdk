import { LitElement } from "lit";
import { DesignerEventTypes } from "../../analytics/Analytics";
import { SectionConfig, SectionListItem } from "../interfaces/ISection";
import { LiveWidget } from "../LiveWidget";
import { FloatEditor } from "../FloatEditor";
import { IPersonalizationRule } from "../interfaces/IPersonalization";
export declare class AbstractTracker {
    payload: unknown;
    action: DesignerEventTypes;
}
export declare class TrackedUserAddSection extends AbstractTracker {
    constructor(section: SectionListItem);
}
export declare class TrackedUserDeleteSection extends AbstractTracker {
    constructor(section: SectionConfig);
}
export declare class TrackedUserAddFloatingWidget extends AbstractTracker {
    constructor(widget: LiveWidget);
}
export declare class TrackedUserDeleteFloatingWidget extends AbstractTracker {
    constructor(widget: LiveWidget);
}
export declare class TrackedUserEditSection extends AbstractTracker {
    constructor(section: SectionConfig);
}
export declare class TrackedUserEditComponent extends AbstractTracker {
    constructor(editorContainer: FloatEditor);
}
export declare class TrackedUserPublishBoard extends AbstractTracker {
    constructor();
}
export declare class TrackedUserPreviewBoard extends AbstractTracker {
    constructor();
}
export declare class TrackedUserAddPersonalizationRule extends AbstractTracker {
    constructor(rule: IPersonalizationRule);
}
export declare type TrackedUserEvent = TrackedUserAddSection | TrackedUserEditSection | TrackedUserEditComponent | TrackedUserDeleteSection | TrackedUserPreviewBoard | TrackedUserPublishBoard | TrackedUserDeleteFloatingWidget | TrackedUserAddFloatingWidget | TrackedUserAddPersonalizationRule;
export declare function trackEvent(el: LitElement, trackedUserEvent: TrackedUserEvent): void;
