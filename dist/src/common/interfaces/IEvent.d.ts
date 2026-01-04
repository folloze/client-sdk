import { type LiveWidget } from "../LiveWidget";
import { type FloatEditor } from "../FloatEditor";
import { hasFloatingChildren } from "../controllers/FloatersChildrenContainer";
import { VideoAIAvatar, VideoAIGenerateRequest, VideoAIGenerateResponse, VideoAIVoice } from "../../designer/IDesignerTypes";
export type PUBLIC_OUTGOING_EVENT_ACTION = "Folloze.ctaClick" | "Folloze.ctaSubmit" | "Folloze.pageview" | "Folloze.onConsent" | "Folloze.linkClick";
export type PUBLIC_INCOMING_EVENT_ACTION = "Folloze.consentGiven" | "Folloze.showCookieConsent" | "Folloze.rejectCookies" | "Folloze.stopTrackingForVisit" | "Folloze.triggerCtaSubmit" | "Folloze.closeFormRequest";
export type FLZ_EVENT_ACTION = FLZ_LIVEBOARD_EVENT_ACTION | FLZ_DESIGNER_EVENT_ACTION;
export type FLZ_LIVEBOARD_EVENT_ACTION = "board-ready" | "board-idle" | "append-to-liveboard" | "append-to-liveboard-light-dom" | "widget-connected" | "widget-update" | "widget-updated" | "widget-first-updated" | "widgets-scripts-loaded" | "resize" | "change-category" | "changeItem" | "close-modal" | "closeItemViewerRequest" | "ctaClick" | "ctaSubmit" | "cookie-consent" | "get-current-item" | "get-initial-journey-item" | "get-category-slug" | "get-all-categories" | "get-modal-element" | "get-item" | "get-items" | "get-lead" | "get-journey" | "getFormData" | "get-form-privacy-message" | "close-form-request" | "get-contact-card-info" | "get-file-metadata" | "get-file-download-url" | "get-footers" | "get-org-header-config" | "stop-tracking-for-visit" | "like-item" | "open-link-by-target-type" | "openItemViewer" | "itemViewerClosed" | "item-viewer-new-item" | "open-modal" | "register-floating-widgets-triggers" | "get-form-privacy-messages" | "share-by-email" | "get-privacy-messages" | "get-state" | "is-personalization-mod" | "floating-widget-manager" | "track-lead-event" | "analytic-event" | "link-click" | "get-is-regulated-country" | "join-event" | "get-public-url" | "load-add-to-calendar" | "load-chat-script" | "create-chat-user" | "join-chat-conversation" | "leave-chat-conversation" | "track-live-event-attendance" | "get-live-event-participants" | "join-live-event" | "leave-live-event" | "scroll" | "get-open-zoom-urls";
export type FLZ_DESIGNER_EVENT_REQUEST_ACTION = "generate-ai-video";
export type FLZ_DESIGNER_EVENT_ACTION = FLZ_LIVEBOARD_EVENT_ACTION | FLZ_DESIGNER_EVENT_REQUEST_ACTION | "searchBoardContacts" | "update-form" | "create-form" | "get-email-templates" | "get-forms" | "get-merge-tag-values" | "get-board-merge-tags" | "saveFormCta" | "saveLinkCta" | "saveShareCta" | "saveContactCta" | "saveMessageCta" | "edit-floating-widget" | "edit-floating-widget-perso" | "save-section-config" | "delete-widget" | "close-all-editors" | "append-to-designer" | "get-user" | "get-is-internal-cookie-management" | "add-merge-tag-values" | "refresh-designer" | "track-user-event" | "save-config-lazy" | "designer-open-preview" | "get-designer-themes" | "navigate-to-documentation" | "open-generic-dialog" | "custom-sections-action" | "generate-ai-action" | "upload-file" | "create-or-update-chat-conversation" | "open-editor";
export interface FLZ_EVENT_TYPE_PAYLOAD_MAP {
    "open-editor": OpenEditorPayload;
    "generate-ai-video": GenerateAiVideoPayload;
    [eventName: string]: any;
}
export interface FLZ_EVENT_TYPE_RESPONSE_MAP {
    "generate-ai-video": {
        "avatars": VideoAIAvatar[];
        "generate": VideoAIGenerateResponse;
        "voices": VideoAIVoice[];
        "status": VideoAIGenerateResponse;
    };
}
export type OpenEditorPayload = {
    widget: LiveWidget;
    editTag: string;
    title?: string;
    pos?: MouseEvent | {
        x: number;
        y: number;
    };
    parentEl?: HTMLElement & hasFloatingChildren;
    propertyPath?: string;
    isFloatingWidget?: boolean;
    layer?: number;
    width?: string | "610px";
    response?: {
        editorContainer?: FloatEditor;
    };
};
export type GenerateAiVideoPayload = {
    action: "generate";
    request: VideoAIGenerateRequest;
} | {
    action: "voices" | "avatars";
} | {
    action: "status";
    id: string;
};
