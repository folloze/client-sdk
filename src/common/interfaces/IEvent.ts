
export const FLZ_PUBLIC_EVENTS_ACTIONS = {
    ctaClick: 'Folloze.ctaClick',
    ctaSubmit: 'Folloze.ctaSubmit',
    pageView: 'Folloze.pageview',
    onConsent: 'Folloze.onConsent',
    consentGiven: 'Folloze.consentGiven',
    stopTrackingForVisit: 'Folloze.stopTrackingForVisit'
};

export type FLZ_EVENTS_ACTIONS =
    "append-to-liveboard" |
    "append-to-liveboard-light-dom" |
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
    "liveEventMounted" |
    "like-item" |
    "open-link-by-target-type" |
    "openItemViewer" |
    "open-modal" |
    "register-floating-widgets-triggers" |
    "stopTrackingForVisit";
