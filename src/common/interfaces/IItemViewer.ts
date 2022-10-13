import {LitElement} from "lit";
import {OpenItemViewerPayload} from "../../liveboard/ILiveboardTypes";
import {LiveWidget} from "../LiveWidget";
import {FlzEvent} from "../FlzEvent";

export interface IItemViewer extends LitElement {
    open(item?: OpenItemViewerPayload, headerElement?: LiveWidget, isLanding?: Boolean): void;
    close(): void;
    changeItem(item: OpenItemViewerPayload);
    stateChanged(state: any);
    incomingEvents(e: FlzEvent);
}
