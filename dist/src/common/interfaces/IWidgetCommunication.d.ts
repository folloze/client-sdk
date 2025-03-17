export declare const FLZ_WIDGET_EVENT_TYPE = "flz-widget-event-type";
export type CtaClickData = {
    form: {
        "fields": {
            "name": {
                "label": "Name";
                "state": "required";
                "placeholder": "First Name";
            };
            "email": {
                "label": "Email";
                "state": "required";
                "placeholder": "your@email.here";
            };
            "phone": {
                "label": "Phone";
                "state": "optional";
                "placeholder": "Phone Number";
            };
            "company": {
                "label": "Company";
                "state": "optional";
                "placeholder": "Company";
            };
            "headline": {
                "label": "Title";
                "state": "optional";
                "placeholder": "Title";
            };
        };
        "form_title": "Fill in";
        "privacy_message": null;
    };
    text: string;
    type: string;
    metadata: {
        form_id?: 234234;
        url?: "https://example.com";
    };
};
export type CtaSubmitData = {
    cta: {
        area: string;
        label: string;
    };
    type: "message" | "form" | "share" | "email";
    fields: Record<string, string>;
};
