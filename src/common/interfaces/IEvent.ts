
export const FLZ_PUBLIC_EVENT_ACTION = {
    ctaClick: 'Folloze.ctaClick',
    ctaSubmit: 'Folloze.ctaSubmit',
    pageView: 'Folloze.pageview',
    onConsent: 'Folloze.onConsent',
    consentGiven: 'Folloze.consentGiven',
    stopTrackingForVisit: 'Folloze.stopTrackingForVisit'
};

export type FLZ_EVENT_ACTION =
    "append-to-liveboard" |
    "append-to-liveboard-light-dom" |
    "widget-connected" |
    "widget-update" |
    "widget-updated" |
    "widget-first-updated" |
    "change-category" |
    "changeItem" |
    "close-modal" |
    "closeItemViewerRequest" |
    "ctaClick" |
    "ctaSubmit" |
    "consentGiven" |
    "itemViewerClosed" |
    "itemViewerLoaded" |
    "get-current-item" |
    "get-current-journey" |
    "get-category-slug" |
    "get-all-categories" |
    "get-modal-element" |
    "get-item" |
    "get-items" |
    "get-lead" |
    "get-journey" |
    "getFormData" |
    "get-form-privacy-message" |
    "get-contact-card-info" |
    "get-file-metadata" |
    "get-file-download-url" |
    "get-footers" |
    "get-org-header-config" |
    "stop-tracking-consent" |
    "like-item" |
    "open-link-by-target-type" |
    "openItemViewer" |
    "open-modal" |
    "register-floating-widgets-triggers" |
    "stopTrackingForVisit";