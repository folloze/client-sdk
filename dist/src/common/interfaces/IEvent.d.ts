export declare type FLZ_PUBLIC_EVENT_ACTION = "Folloze.ctaClick" | "Folloze.ctaSubmit" | "Folloze.pageview" | "Folloze.onConsent" | "Folloze.consentGiven" | "Folloze.stopTrackingForVisit";
export declare type FLZ_EVENT_ACTION = FLZ_LIVEBOARD_EVENT_ACTION | FLZ_DESIGNER_EVENT_ACTION;
export declare type FLZ_LIVEBOARD_EVENT_ACTION = "append-to-liveboard" | "append-to-liveboard-light-dom" | "widget-connected" | "widget-update" | "widget-updated" | "widget-first-updated" | "widgets-scripts-loaded" | "resize" | "change-category" | "changeItem" | "close-modal" | "closeItemViewerRequest" | "ctaClick" | "ctaSubmit" | "consent-given" | "get-current-item" | "get-current-journey" | "get-category-slug" | "get-all-categories" | "get-modal-element" | "get-item" | "get-items" | "get-lead" | "get-journey" | "getFormData" | "get-form-privacy-message" | "get-contact-card-info" | "get-file-metadata" | "get-file-download-url" | "get-footers" | "get-org-header-config" | "stop-tracking-for-visit" | "like-item" | "open-link-by-target-type" | "openItemViewer" | "itemViewerClosed" | "open-modal" | "register-floating-widgets-triggers" | "get-form-privacy-messages";
export declare type FLZ_DESIGNER_EVENT_ACTION = "get-modal-element" | "getFormData" | "get-form-privacy-message" | "get-contact-card-info" | "get-footers" | "get-org-header-config" | "get-items" | "get-all-categories" | "open-modal" | "register-floating-widgets-triggers" | "searchBoardContacts" | "update-form" | "create-form" | "get-email-templates" | "get-forms" | "get-form-privacy-messages" | "get-merge-tag-values" | "get-board-merge-tags" | "saveFormCta" | "saveLinkCta" | "saveShareCta" | "saveContactCta" | "saveMessageCta" | "edit-floating-widget" | "save-section-config" | "delete-widget";
