import { LitElement } from "lit";
import { DesignerEventTypes, TrackedUserEvent, UserTrackedEventsV2 } from "../../analytics/Analytics";
import { SectionConfig, SectionListItem } from "../interfaces/ISection";
import { LiveWidget } from "../LiveWidget";
import { FloatEditor } from "../FloatEditor";
import { IPersonalizationRule } from "../interfaces/IPersonalization";
export declare class AbstractTracker {
    payload: unknown;
    action: DesignerEventTypes;
}
export declare class TrackedUserAddSection extends AbstractTracker {
    payload: {
        section_name: string;
        section_type: string;
    };
    constructor(section: SectionListItem);
}
export declare class TrackedUserDeleteSection extends AbstractTracker {
    payload: {
        section_name: string;
        section_type: string;
    };
    constructor(section: SectionConfig);
}
export declare class TrackedUserAddFloatingWidget extends AbstractTracker {
    payload: {
        widget_tag: string;
        widget_title: string;
    };
    constructor(widget: LiveWidget);
}
export declare class TrackedUserDeleteFloatingWidget extends AbstractTracker {
    payload: {
        widget_tag: string;
        widget_title: string;
    };
    constructor(widget: LiveWidget);
}
export declare class TrackedUserEditSection extends AbstractTracker {
    payload: {
        section_name: string;
        section_type: string;
    };
    constructor(section: SectionConfig);
}
export declare class TrackedUserEditComponent extends AbstractTracker {
    payload: {
        component_tag: string;
        widget_tag: string;
    };
    constructor(editorContainer: FloatEditor);
}
export declare class TrackedUserPublishBoard extends AbstractTracker {
    payload: undefined;
    constructor();
}
export declare class TrackedUserPreviewBoard extends AbstractTracker {
    payload: undefined;
    constructor();
}
export declare class TrackedUserAddPersonalizationRule extends AbstractTracker {
    payload: {
        rule: {
            attribute_id: string;
            attribute_values: string[];
        };
    };
    constructor(rule: IPersonalizationRule);
}
export declare function trackEvent(el: LitElement, trackedUserEvent: TrackedUserEvent | UserTrackedEventsV2[keyof UserTrackedEventsV2]): void;
