import {LiveWidget} from "../LiveWidget";

// ctaClick - ctaType:string, ctaData:object
// ctaSubmit - ctaType:string, ctaData:object
// consentGiven - no params
// stopTrackingForVisit - no params
// openItemViewer - item({id:number, slug:string}), category({id:number, slug:string}), queryString:string, options:object(all I could find for options is isLanding)
// closeItemViewer - no params (only item viewer widget)
// itemViewerLoaded - item:object (only item viewer widget)
// liveEventMounted - no params (only live event widgets)

export const FLZ_EVENT_TYPE = "flz-event-type";

export class FlzEvent extends Event {

    private action: string;
    private payload: any;

    constructor(emitter: LiveWidget, type: string, payload: any) {
        super(FLZ_EVENT_TYPE, {bubbles: true, composed: true});
        this.action = type;
        this.payload = payload;
    }
}
