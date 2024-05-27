import {LitElement} from "lit";
import {OpenItemViewerPayload} from "../../liveboard/ILiveboardTypes";
import {LiveWidget} from "../LiveWidget";
import {FlzEvent} from "../FlzEvent";

export type ItemViewerDesign = "lightbox" | "classic";

export interface FlzVItemViewerSettings {
    design: ItemViewerDesign;
    allow_download: boolean;
    allow_likes?: boolean;
    lead_journey?: {
        type: "curated" | "recommendations",
        layout: "arrow" | "bottom",
        disableScrollingAnimation: boolean
    }
}
export interface IItemViewer extends LitElement {
    open(item?: OpenItemViewerPayload): void;
    close(): void;
    changeItem(item: OpenItemViewerPayload);
    stateChanged(state: any);
    incomingEvents(e: FlzEvent);
    setItemViewerTopPosition(item?: OpenItemViewerPayload);
    headerLoadedPromise: Promise<LiveWidget>;
}
