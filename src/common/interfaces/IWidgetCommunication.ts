


export const FLZ_WIDGET_EVENT_TYPE = "flz-widget-event-type";
export const FLZ_EVENTS_ACTIONS = {
    ctaClick: "ctaClick",
    ctaSubmit: "ctaSubmit",
    consentGiven: "consentGiven",
    stopTrackingForVisit: "stopTrackingForVisit",
    openItemViewer: "openItemViewer",
    closeItemViewer: "closeItemViewer",
    itemViewerLoaded: "itemViewerLoaded",
    liveEventMounted: "liveEventMounted",
};

// ctaClick - ctaType:string, ctaData:object
// ctaSubmit - ctaType:string, ctaData:object
// consentGiven - no params
// stopTrackingForVisit - no params
// openItemViewer - item({id:number, slug:string}), category({id:number, slug:string}), queryString:string, options:object(all I could find for options is isLanding)
// closeItemViewer - no params (only item viewer widget)
// itemViewerLoaded - item:object (only item viewer widget)
// liveEventMounted - no params (only live event widgets)
