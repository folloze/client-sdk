import { LitElement } from "lit";
import { JourneyItemsResponseV2, OpenItemViewerPayload } from "../../liveboard/ILiveboardTypes";
import { LiveWidget } from "../LiveWidget";
export interface IItemViewer extends LitElement {
    open(item?: OpenItemViewerPayload, journey?: JourneyItemsResponseV2, headerElement?: LiveWidget): void;
    close(): void;
    changeItem(item: OpenItemViewerPayload): any;
}
