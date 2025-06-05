import { LitElement } from "lit";
import { DesignerEventTypes } from "../../analytics/Analytics";
import { SectionConfig, SectionListItem } from "../interfaces/ISection";
import { LiveWidget } from "../LiveWidget";
import { FloatEditor } from "../FloatEditor";
import { IPersonalizationRule } from "../interfaces/IPersonalization";
import { GenAudienceTarget } from "../interfaces/IGenerationTypes";
export declare class AbstractTracker<K extends DesignerEventTypes> {
    payload: unknown;
    action: K;
}
export declare class TrackedUserAddSection extends AbstractTracker<DesignerEventTypes.add_new_section> {
    constructor(section: SectionListItem);
}
export declare class TrackedUserDeleteSection extends AbstractTracker<DesignerEventTypes.delete_section> {
    constructor(section: SectionConfig);
}
export declare class TrackedUserAddFloatingWidget extends AbstractTracker<DesignerEventTypes.add_floating_section> {
    constructor(widget: LiveWidget);
}
export declare class TrackedUserDeleteFloatingWidget extends AbstractTracker<DesignerEventTypes.delete_floating_section> {
    constructor(widget: LiveWidget);
}
export declare class TrackedUserEditSection extends AbstractTracker<DesignerEventTypes.edit_section> {
    constructor(section: SectionConfig);
}
export declare class TrackedUserEditComponent extends AbstractTracker<DesignerEventTypes.edit_editable_component> {
    constructor(editorContainer: FloatEditor);
}
export declare class TrackedUserPublishBoard extends AbstractTracker<DesignerEventTypes.publish_board> {
    constructor();
}
export declare class TrackedUserPreviewBoard extends AbstractTracker<DesignerEventTypes.preview_board> {
    constructor();
}
export declare class TrackedUserAddPersonalizationRule extends AbstractTracker<DesignerEventTypes.add_personalization_rule_from_designer> {
    constructor(rule: IPersonalizationRule);
}
type GenAIPayload = {
    level: 'board';
} | {
    level: 'section';
    section_name: string;
};
type GenAITargetAudiencePayload = GenAIPayload & {
    text: string;
    target_type: string;
};
type GenAIGenerateByGoalPayload = GenAIPayload & {
    goal: string;
    target_audience: GenAudienceTarget | null;
    target_audience_text: string;
};
type GenAIGenerateByFreePromptPayload = GenAIPayload & {
    prompt: string;
};
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
export type TrackedUserEvent = TrackedUserAddSection | TrackedUserEditSection | TrackedUserEditComponent | TrackedUserDeleteSection | TrackedUserPreviewBoard | TrackedUserPublishBoard | TrackedUserDeleteFloatingWidget | TrackedUserAddFloatingWidget | TrackedUserAddPersonalizationRule;
export declare function trackEvent(el: LitElement, trackedUserEvent: TrackedUserEvent | UserTrackedEventsV2[keyof UserTrackedEventsV2]): void;
export {};
