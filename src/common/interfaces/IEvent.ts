export type PUBLIC_OUTGOING_EVENT_ACTION =
    | "Folloze.ctaClick"
    | "Folloze.ctaSubmit"
    | "Folloze.pageview"
    | "Folloze.onConsent"
    | "Folloze.linkClick";
export type PUBLIC_INCOMING_EVENT_ACTION =
    | "Folloze.consentGiven"
    | "Folloze.stopTrackingForVisit"
    | "Folloze.triggerCtaSubmit";

export type FLZ_EVENT_ACTION = FLZ_LIVEBOARD_EVENT_ACTION | FLZ_DESIGNER_EVENT_ACTION;

export type FLZ_LIVEBOARD_EVENT_ACTION =
    | "board-ready"
    | "append-to-liveboard"
    | "append-to-liveboard-light-dom"
    | "widget-connected"
    | "widget-update"
    | "widget-updated"
    | "widget-first-updated"
    | "widgets-scripts-loaded"
    | "resize"
    | "change-category"
    | "changeItem"
    | "close-modal"
    | "closeItemViewerRequest"
    | "ctaClick"
    | "ctaSubmit"
    | "consent-given"
    | "get-current-item"
    | "get-initial-journey-item"
    | "get-category-slug"
    | "get-all-categories"
    | "get-modal-element"
    | "get-item"
    | "get-items"
    | "get-lead"
    | "get-journey"
    | "getFormData"
    | "get-form-privacy-message"
    | "get-contact-card-info"
    | "get-file-metadata"
    | "get-file-download-url"
    | "get-footers"
    | "get-org-header-config"
    | "stop-tracking-for-visit"
    | "like-item"
    | "open-link-by-target-type"
    | "openItemViewer"
    | "itemViewerClosed"
    | "open-modal"
    | "register-floating-widgets-triggers"
    | "get-form-privacy-messages"
    | "share-by-email"
    | "get-privacy-messages"
    | "get-state"
    | "is-personalization-mod"
    | "floating-widget-manager"
    | "track-lead-event"
    | "analytic-event"
    | "link-click"
    | "get-is-regulated-country"
    | "join-event"
    | "get-public-url"
    | "load-add-to-calendar"
    | "load-chat"
    | "create-chat-user"
    | "join-chat-conversation"
    | "leave-chat-conversation";

export type FLZ_DESIGNER_EVENT_ACTION =
    | FLZ_LIVEBOARD_EVENT_ACTION
    | "searchBoardContacts"
    | "update-form"
    | "create-form"
    | "get-email-templates"
    | "get-forms"
    | "get-merge-tag-values"
    | "get-board-merge-tags"
    | "saveFormCta"
    | "saveLinkCta"
    | "saveShareCta"
    | "saveContactCta"
    | "saveMessageCta"
    | "edit-floating-widget"
    | "edit-floating-widget-perso"
    | "save-section-config"
    | "delete-widget"
    | "close-all-editors"
    | "append-to-designer"
    | "get-user"
    | "get-is-internal-cookie-management"
    | "add-merge-tag-values"
    | "refresh-designer"
    | "track-user-event"
    | "save-config-lazy"
    | "designer-open-preview"
    | "get-designer-themes"
    | "navigate-to-documentation"
    | "open-generic-dialog"
    | "custom-sections-action"
    | "generate-ai-action"
    | "upload-file"
    | "create-or-update-chat-conversation";
