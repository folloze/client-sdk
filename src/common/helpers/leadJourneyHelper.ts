import {OpenItemViewerPayload} from "../../liveboard/ILiveboardTypes";

/// Deprecated - to remove once updated 'widgets' and 'liveboard' live on production
export function getJourneyType(item: OpenItemViewerPayload) {
   return item.viewer_settings?.lead_journey?.type === "recommendations" ? "ai" : "item";
}