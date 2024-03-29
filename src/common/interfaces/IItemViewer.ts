import {LitElement} from "lit";
import {OpenItemViewerPayload} from "../../liveboard/ILiveboardTypes";
import {LiveWidget} from "../LiveWidget";
import {FlzEvent} from "../FlzEvent";

export interface IItemViewer extends LitElement {
    open(item?: OpenItemViewerPayload): void;
    close(): void;
    changeItem(item: OpenItemViewerPayload);
    stateChanged(state: any);
    incomingEvents(e: FlzEvent);
    setItemViewerTopPosition(item?: OpenItemViewerPayload);
    headerLoadedPromise: Promise<LiveWidget>;
}
