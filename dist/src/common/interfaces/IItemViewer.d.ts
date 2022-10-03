import { LitElement } from "lit";
import { OpenItemViewerPayload } from "../../liveboard/ILiveboardTypes";
import { LiveWidget } from "../LiveWidget";
export interface IItemViewer extends LitElement {
    open(item?: OpenItemViewerPayload, headerElement?: LiveWidget, isLanding?: Boolean): void;
    close(): void;
    changeItem(item: OpenItemViewerPayload): any;
    stateChanged(state: any): any;
}
