import {OpenItemViewerPayload} from "../../liveboard/ILiveboardTypes";

export function getJourneyType(item: OpenItemViewerPayload) {
   return item.viewer_settings?.lead_journey?.type === "ai" ? "ai" : "item";
}