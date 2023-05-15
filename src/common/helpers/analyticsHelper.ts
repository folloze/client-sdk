import {OpenItemViewerPayload} from "../../liveboard/ILiveboardTypes";

export function getAnalyticsSourceType(item: OpenItemViewerPayload) {
   return item.is_content_item === true ? "recommendation" : "item";
}

export function getAnalyticsItemId(item: OpenItemViewerPayload) {
   return item.is_content_item === true ? null : item.id;
}