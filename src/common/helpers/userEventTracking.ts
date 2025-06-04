import {LitElement} from "lit";
import { DesignerEventTypes } from "../../analytics/Analytics";
import { SectionConfig, SectionListItem } from "../interfaces/ISection";
import { LiveWidget } from "../LiveWidget";
import { FloatEditor } from "../FloatEditor";
import { editorEmit } from "./eventHelpers";
import { IPersonalizationRule } from "../interfaces/IPersonalization";

export class AbstractTracker {
    public payload: unknown;
    public action: DesignerEventTypes;
}

export class TrackedUserAddSection extends AbstractTracker {
    constructor(section: SectionListItem) {
        super();

        this.action = DesignerEventTypes.add_new_section;
        this.payload = {
            section_name: section.name,
            section_type: section.type,
        };
    }
}

export class TrackedUserDeleteSection extends AbstractTracker {
    constructor(section: SectionConfig) {
        super();

        this.action = DesignerEventTypes.delete_section;
        this.payload = {
            section_name: section.name,
            section_type: section.type,
        };
    }
}

export class TrackedUserAddFloatingWidget extends AbstractTracker {
    constructor(widget: LiveWidget) {
        super();

        this.action = DesignerEventTypes.add_floating_section;
        this.payload = {
            widget_tag: widget.config.widgetTag.toLowerCase(),
            widget_title: widget.widgetTitle,
        };
    }
}

export class TrackedUserDeleteFloatingWidget extends AbstractTracker {
    constructor(widget: LiveWidget) {
        super();

        this.action = DesignerEventTypes.delete_floating_section;
        this.payload = {
            widget_tag: widget.config.widgetTag.toLowerCase(),
            widget_title: widget.widgetTitle,
        };
    }
}

export class TrackedUserEditSection extends AbstractTracker {
    constructor(section: SectionConfig) {
        super();

        this.action = DesignerEventTypes.edit_section;
        this.payload = {
            section_name: section.name,
            section_type: section.type,
        };
    }
}

export class TrackedUserEditComponent extends AbstractTracker {
    constructor(editorContainer: FloatEditor) {
        super();

        this.action = DesignerEventTypes.edit_editable_component;
        this.payload = {
            component_tag: editorContainer.getChildEl().tagName.toLowerCase(),
            widget_tag: editorContainer.getChildEl().widget.tagName.toLowerCase()
        };
    }
}

export class TrackedUserPublishBoard extends AbstractTracker {
    constructor() {
        super();

        this.action = DesignerEventTypes.publish_board;
    }
}

export class TrackedUserPreviewBoard extends AbstractTracker {
    constructor() {
        super();

        this.action = DesignerEventTypes.preview_board;
    }
}

export class TrackedUserAddPersonalizationRule extends AbstractTracker {
    constructor(rule: IPersonalizationRule) {
        super();

        this.action = DesignerEventTypes.add_personalization_rule_from_designer;
        this.payload = {
            rule: {
                attribute_id: rule.mergeTagId,
                attribute_values: rule.mergeTagValues,
            }
        };
    }
}


type GenAITargetAudiencePayload = {
    
}

type EventPayloadMap = {
    [DesignerEventTypes.gen_ai_personalize_existing_target_audience]: GenAITargetAudiencePayload;
};

type UserTrackedEventsV2 = {
    [K in DesignerEventTypes]: {
        action: K;
        payload: K extends keyof EventPayloadMap ? EventPayloadMap[K] : {};
    };
};
  

export type TrackedUserEvent =
    TrackedUserAddSection
    | TrackedUserEditSection
    | TrackedUserEditComponent
    | TrackedUserDeleteSection
    | TrackedUserPreviewBoard
    | TrackedUserPublishBoard
    | TrackedUserDeleteFloatingWidget
    | TrackedUserAddFloatingWidget
    | TrackedUserAddPersonalizationRule;

export function trackEvent(el: LitElement, trackedUserEvent: TrackedUserEvent | UserTrackedEventsV2[keyof UserTrackedEventsV2]) {
    editorEmit(el, "track-user-event", { trackedUserEvent });
}