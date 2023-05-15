import { OpenItemViewerPayload } from "../../liveboard/ILiveboardTypes";
export declare function getAnalyticsSourceType(item: OpenItemViewerPayload): "recommendations" | "item";
export declare function getAnalyticsItemId(item: OpenItemViewerPayload): number;
