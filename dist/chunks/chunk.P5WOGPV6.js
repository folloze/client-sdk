// src/common/interfaces/IWidgetCommunication.ts
var FLZ_WIDGET_EVENT_TYPE = "flz-widget-event-type";
var FLZ_EVENTS_ACTIONS = {
  ctaClick: "ctaClick",
  ctaSubmit: "ctaSubmit",
  consentGiven: "consentGiven",
  stopTrackingForVisit: "stopTrackingForVisit",
  openItemViewer: "openItemViewer",
  closeItemViewer: "closeItemViewer",
  itemViewerLoaded: "itemViewerLoaded",
  liveEventMounted: "liveEventMounted"
};

export {
  FLZ_WIDGET_EVENT_TYPE,
  FLZ_EVENTS_ACTIONS
};
