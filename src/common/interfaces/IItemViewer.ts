import { LitElement } from "lit";
import {OpenItemViewerPayload} from "../../liveboard/ILiveboardTypes";
import { LiveWidget } from "../LiveWidget";

export interface IItemViewer extends LitElement {
    open(item?: OpenItemViewerPayload, headerElement?: LiveWidget): void;
    close(): void;
    changeItem(item: OpenItemViewerPayload);
    stateChanged(state: any);
}
