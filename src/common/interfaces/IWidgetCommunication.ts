
// ctaClick - ctaType:string, ctaData:object
// ctaSubmit - ctaType:string, ctaData:object
// consentGiven - no params
// stopTrackingForVisit - no params
// openItemViewer - item({id:number, slug:string}), category({id:number, slug:string}), queryString:string, options:object(all I could find for options is isLanding)
// closeItemViewer - no params (only item viewer widget)
// itemViewerLoaded - item:object (only item viewer widget)
// liveEventMounted - no params (only live event widgets)


import {LiveWidget} from "../LiveWidget";

export class FlzEvent extends Event {

    private payload: any;

    constructor(emitter: LiveWidget, type: string, payload: any) {
        super(type, {bubbles: true, composed: true});
        this.payload = payload;
    }
}
