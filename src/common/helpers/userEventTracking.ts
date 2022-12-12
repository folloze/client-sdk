import {LitElement} from "lit";
import { DesignerEventTypes } from "../../analytics/Analytics";
import { SectionConfig, SectionListItem } from "../interfaces/ISection";
import { LiveWidget } from "../LiveWidget";
import { FloatEditor } from "../FloatEditor";
import { editorEmit } from "./eventHelpers";

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

export class TrackedUserAddPersonalizationRule extends AbstractTracker { //widgetTag, widgetTitle, sectionName?
    constructor(data) {
        super();

        this.action = DesignerEventTypes.added_rule;
        this.payload = {
            // widgetTag:, widgetTitle, sectionName?
        };
    }
}

export type TrackedUserEvent =
    TrackedUserAddSection
    | TrackedUserEditSection
    | TrackedUserDeleteSection
    | TrackedUserPreviewBoard
    | TrackedUserPublishBoard
    | TrackedUserDeleteFloatingWidget
    | TrackedUserAddFloatingWidget
    | TrackedUserAddPersonalizationRule;

export function trackEvent(el: LitElement, trackedUserEvent: TrackedUserEvent) {
    editorEmit(el, "track-user-event", { trackedUserEvent });
}
