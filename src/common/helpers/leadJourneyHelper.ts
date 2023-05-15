import {OpenItemViewerPayload} from "../../liveboard/ILiveboardTypes";

export function getItemSourceType(item: OpenItemViewerPayload) {
   return item.is_content_item === true ? "ai" : "item";
}

/// Deprecated - to remove once updated 'widgets' and 'liveboard' live on production
export function getJourneyType(item: OpenItemViewerPayload) {
   return item.viewer_settings?.lead_journey?.type === "recommendations" ? "ai" : "item";
}