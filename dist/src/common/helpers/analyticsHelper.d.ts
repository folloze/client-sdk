import { OpenItemViewerPayload } from "../../liveboard/ILiveboardTypes";
export declare function getAnalyticsSourceType(item: OpenItemViewerPayload): "item" | "recommendations";
export declare function getAnalyticsItemId(item: OpenItemViewerPayload): number;
