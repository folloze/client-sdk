import { LitElement } from "lit";
import { OpenItemViewerPayload } from "../../liveboard/ILiveboardTypes";
import { LiveWidget } from "../LiveWidget";
import { FlzEvent } from "../FlzEvent";
export declare type ItemViewerType = "lightbox" | "classic";
export declare type DefaultItemViewerSettings = {
    allow_download: boolean;
    item_viewer_type: ItemViewerType;
};
export interface IItemViewer extends LitElement {
    open(item?: OpenItemViewerPayload): void;
    close(): void;
    changeItem(item: OpenItemViewerPayload): any;
    stateChanged(state: any): any;
    incomingEvents(e: FlzEvent): any;
    setItemViewerTopPosition(item?: OpenItemViewerPayload): any;
    headerLoadedPromise: Promise<LiveWidget>;
}
