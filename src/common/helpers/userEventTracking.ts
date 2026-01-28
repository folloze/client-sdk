import {LitElement} from "lit";
import { DesignerEventTypes, TrackedUserEvent, UserTrackedEventsV2 } from "../../analytics/Analytics";
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
    override payload: {section_name: string; section_type: string};
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
    override payload: {section_name: string; section_type: string};
    constructor(section: SectionConfig) {
        super();

        this.action = DesignerEventTypes.delete_section;
        this.payload = {
            section_name: section.name,
            section_type: section.type,
        };
    }
}

export class TrackedUserAddFloatingWidget extends AbstractTracker{
    override payload: {widget_tag: string; widget_title: string};
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
    override payload: {widget_tag: string; widget_title: string};
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
    override payload: {section_name: string; section_type: string};
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
    override payload: {component_tag: string; widget_tag: string};
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
    override payload: undefined;
    constructor() {
        super();

        this.action = DesignerEventTypes.publish_board;
    }
}

export class TrackedUserPreviewBoard extends AbstractTracker {
    override payload: undefined;
    constructor() {
        super();

        this.action = DesignerEventTypes.preview_board;
    }
}

export class TrackedUserAddPersonalizationRule extends AbstractTracker {
    override payload: {
        rule: {
            attribute_id: string;
            attribute_values: string[];
        };
    };
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

export function trackEvent(el: LitElement, trackedUserEvent: TrackedUserEvent | UserTrackedEventsV2[keyof UserTrackedEventsV2]) {
    editorEmit(el, "track-user-event", { trackedUserEvent });
}