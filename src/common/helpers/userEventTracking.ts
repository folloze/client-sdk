import {LitElement} from "lit";
import { DesignerEventTypes } from "../../analytics/Analytics";
import { SectionConfig, SectionListItem } from "../interfaces/ISection";
import { LiveWidget } from "../LiveWidget";
import { FloatEditor } from "../FloatEditor";
import { editorEmit } from "./eventHelpers";
import { IPersonalizationRule } from "../interfaces/IPersonalization";

export class AbstractTracker<K extends DesignerEventTypes> {
    public payload: unknown;
    public action: K;
}

export class TrackedUserAddSection extends AbstractTracker<DesignerEventTypes.add_new_section> {
    constructor(section: SectionListItem) {
        super();

        this.action = DesignerEventTypes.add_new_section;
        this.payload = {
            section_name: section.name,
            section_type: section.type,
        };
    }
}

export class TrackedUserDeleteSection extends AbstractTracker<DesignerEventTypes.delete_section> {
    constructor(section: SectionConfig) {
        super();

        this.action = DesignerEventTypes.delete_section;
        this.payload = {
            section_name: section.name,
            section_type: section.type,
        };
    }
}

export class TrackedUserAddFloatingWidget extends AbstractTracker<DesignerEventTypes.add_floating_section> {
    constructor(widget: LiveWidget) {
        super();

        this.action = DesignerEventTypes.add_floating_section;
        this.payload = {
            widget_tag: widget.config.widgetTag.toLowerCase(),
            widget_title: widget.widgetTitle,
        };
    }
}

export class TrackedUserDeleteFloatingWidget extends AbstractTracker<DesignerEventTypes.delete_floating_section> {
    constructor(widget: LiveWidget) {
        super();

        this.action = DesignerEventTypes.delete_floating_section;
        this.payload = {
            widget_tag: widget.config.widgetTag.toLowerCase(),
            widget_title: widget.widgetTitle,
        };
    }
}

export class TrackedUserEditSection extends AbstractTracker<DesignerEventTypes.edit_section> {
    constructor(section: SectionConfig) {
        super();

        this.action = DesignerEventTypes.edit_section;
        this.payload = {
            section_name: section.name,
            section_type: section.type,
        };
    }
}

export class TrackedUserEditComponent extends AbstractTracker<DesignerEventTypes.edit_editable_component> {
    constructor(editorContainer: FloatEditor) {
        super();

        this.action = DesignerEventTypes.edit_editable_component;
        this.payload = {
            component_tag: editorContainer.getChildEl().tagName.toLowerCase(),
            widget_tag: editorContainer.getChildEl().widget.tagName.toLowerCase()
        };
    }
}

export class TrackedUserPublishBoard extends AbstractTracker<DesignerEventTypes.publish_board> {
    constructor() {
        super();

        this.action = DesignerEventTypes.publish_board;
    }
}

export class TrackedUserPreviewBoard extends AbstractTracker<DesignerEventTypes.preview_board> {
    constructor() {
        super();

        this.action = DesignerEventTypes.preview_board;
    }
}

export class TrackedUserAddPersonalizationRule extends AbstractTracker<DesignerEventTypes.add_personalization_rule_from_designer> {
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

type GenAIPayload = {
    level: 'board';
} | {
    level: 'section';
    section_name: string;
}

type GenAITargetAudiencePayload = GenAIPayload & {
    text: string;
    target_type: string;
};

type GenAIGenerateByGoalPayload = GenAIPayload & {
    goal: string;
    target_audience: any[];
    target_audience_text: string;
}

type GenAIGenerateByFreePromptPayload = GenAIPayload & {
    prompt: string;
}

type GenAITranslatePayload = GenAIPayload & {
    language: string;
};

type EventPayloadMap = {
    [DesignerEventTypes.gen_ai_personalize_existing_target_audience]: GenAITargetAudiencePayload;
    [DesignerEventTypes.gen_ai_personalize_new_target_audience]: GenAITargetAudiencePayload;
    [DesignerEventTypes.gen_ai_generate_by_goal]: GenAIGenerateByGoalPayload;
    [DesignerEventTypes.gen_ai_generate_by_free_prompt]: GenAIGenerateByFreePromptPayload;
    [DesignerEventTypes.gen_ai_translate]: GenAITranslatePayload;
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