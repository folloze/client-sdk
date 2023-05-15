import { OpenItemViewerPayload } from "../../liveboard/ILiveboardTypes";
export declare function getItemSourceType(item: OpenItemViewerPayload): "item" | "recommendation";
export declare function getAnalyticsItemId(item: OpenItemViewerPayload): number;
