import {OpenItemViewerPayload} from "../../liveboard/ILiveboardTypes";

export function getItemContentType(item: OpenItemViewerPayload) {
   return item.is_content_item === true ? "ai" : "item";
}