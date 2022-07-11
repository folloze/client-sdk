
export const FLZ_WIDGET_EVENT_TYPE = "flz-widget-event-type";

// ctaClick - ctaType:string, ctaData:object
export type CtaClickData =  {
    // todo: (ask shimi) about this
    form: {
        "fields": {
            "name": {
                "label": "Name",
                "state": "required",
                "placeholder": "First Name"
            },
            "email": {
                "label": "Email",
                "state": "required",
                "placeholder": "your@email.here"
            },
            "phone": {
                "label": "Phone",
                "state": "optional",
                "placeholder": "Phone Number"
            },
            "company": {
                "label": "Company",
                "state": "optional",
                "placeholder": "Company"
            },
            "headline": {
                "label": "Title",
                "state": "optional",
                "placeholder": "Title"
            }
        },
        "form_title": "Fill in",
        "privacy_message": null
    },
    text: string,
    type: string,
    metadata: {
        form_id?: 234234,
        url?: "https://example.com"
    }
}

// ctaSubmit - ctaType:string, ctaData:object
export type CtaSubmitData = {
    cta: {
        area: string; //"banner",
        label: string; //"Register here!"
    },
    type: "message"|"form"|"share"|"email";

    // todo: (ask shimi) - how to send customized fields to server
    // fields: {
    //     "email": "john@company.com",
    //     "name": "John",
    //     "last_name": "Doe",
    //     "headline": "CMO",
    //     "company": "company",
    //     "phone": "12345",
    //     "note": "Very interesting ",
    // }
    fields: Record<string, string>;
}

// closedItemViewer - no params (only item viewer widget) - fire when item viewer is closed
// closeItemViewerRequest - no params - closes the item viewer.
// itemViewerLoaded - payload: ItemResponseV2 - fires when item viewer load an item

// todo: maybe for an outside customer to know about live event loaded
// liveEventMounted - no params (only live event widgets) - fires on component mounted
