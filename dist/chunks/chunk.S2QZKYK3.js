// src/common/interfaces/IWidgetCommunication.ts
var FLZ_WIDGET_EVENT_TYPE = "flz-widget-event-type";

// src/common/interfaces/IEvent.ts
var FLZ_PUBLIC_EVENT_ACTION = {
  ctaClick: "Folloze.ctaClick",
  ctaSubmit: "Folloze.ctaSubmit",
  pageView: "Folloze.pageview",
  onConsent: "Folloze.onConsent",
  consentGiven: "Folloze.consentGiven",
  stopTrackingForVisit: "Folloze.stopTrackingForVisit"
};

export {
  FLZ_WIDGET_EVENT_TYPE,
  FLZ_PUBLIC_EVENT_ACTION
};
