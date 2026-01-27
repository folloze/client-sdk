import {LitElement} from "lit";
import { DesignerEventTypes, WidgetEventTypes } from "../../analytics/Analytics";
import { SectionConfig, SectionListItem } from "../interfaces/ISection";
import { LiveWidget } from "../LiveWidget";
import { FloatEditor } from "../FloatEditor";
import { editorEmit } from "./eventHelpers";
import { IPersonalizationRule } from "../interfaces/IPersonalization";
import { GenAudienceTarget } from "../interfaces/IGenerationTypes";

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
    target_audience: GenAudienceTarget | null;
    target_audience_text: string;
}

type GenAIGenerateByFreePromptPayload = GenAIPayload & {
    prompt: string;
}

type GenAITranslatePayload = GenAIPayload & {
    language: string;
};

type AIBoardCreationChatAttachmentAddedPayload = {
    attachment_type: 'url' | 'file';
    file_name?: string;
    file_type?: string;
    url?: string;
};

type AIBoardCreationChatSuggestionClickedPayload = {
    text: string;
};

type AIBoardCreationChatEditClickedPayload = {
    component_key: string;
};

type AIBoardCreationChatCreateBoardClickedPayload = {
    gathered_info: string[];
};

type AIBoardCreationChatBoardCreatedPayload = {
    board_id: number;
};

type EventPayloadMap = {
    [DesignerEventTypes.gen_ai_personalize_existing_target_audience]: GenAITargetAudiencePayload;
    [DesignerEventTypes.gen_ai_personalize_new_target_audience]: GenAITargetAudiencePayload;
    [DesignerEventTypes.gen_ai_generate_by_goal]: GenAIGenerateByGoalPayload;
    [DesignerEventTypes.gen_ai_generate_by_free_prompt]: GenAIGenerateByFreePromptPayload;
    [DesignerEventTypes.gen_ai_translate]: GenAITranslatePayload;
    [WidgetEventTypes.ai_board_creation_chat_attachment_added]: AIBoardCreationChatAttachmentAddedPayload;
    [WidgetEventTypes.ai_board_creation_chat_suggestion_clicked]: AIBoardCreationChatSuggestionClickedPayload;
    [WidgetEventTypes.ai_board_creation_chat_edit_clicked]: AIBoardCreationChatEditClickedPayload;
    [WidgetEventTypes.ai_board_creation_chat_create_board_clicked]: AIBoardCreationChatCreateBoardClickedPayload;
    [WidgetEventTypes.ai_board_creation_chat_board_created]: AIBoardCreationChatBoardCreatedPayload;
};

type UserTrackedEventsV2 = {
    [K in DesignerEventTypes | WidgetEventTypes]: {
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