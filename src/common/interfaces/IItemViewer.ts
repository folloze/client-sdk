import { LitElement } from "lit";
import {OpenItemViewerPayload} from "../../liveboard/ILiveboardTypes";

export interface IItemViewer extends LitElement {
    open(item?: OpenItemViewerPayload): void;
    close(): void;
    changeItem(item: OpenItemViewerPayload);
}
