import { LitElement } from "lit";
import { OpenItemViewerPayload } from "../../liveboard/ILiveboardTypes";
import { LiveWidget } from "../LiveWidget";
import { FlzEvent } from "../FlzEvent";
export interface IItemViewer extends LitElement {
    open(item?: OpenItemViewerPayload, headerElement?: Promise<LiveWidget>, isLanding?: Boolean): void;
    close(): void;
    changeItem(item: OpenItemViewerPayload): any;
    stateChanged(state: any): any;
    incomingEvents(e: FlzEvent): any;
    setItemViewerTopPosition(item?: OpenItemViewerPayload): any;
    headerLoadedPromise: Promise<LiveWidget>;
}
