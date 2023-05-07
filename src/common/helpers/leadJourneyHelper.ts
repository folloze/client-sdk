import {OpenItemViewerPayload} from "../../liveboard/ILiveboardTypes";

export function isAiJourney(item: OpenItemViewerPayload) {
   return getJourneyType(item) === "ai";
}

export function getJourneyType(item: OpenItemViewerPayload) {
   return item.viewer_settings?.lead_journey?.type === "ai" ? "ai" : "item";
}