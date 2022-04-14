import { AxiosResponse } from "axios";
import { FetchService } from "../common/FetchService";
export declare type PingPayload = {
    leadId: number;
    boardId: number;
    itemId?: number;
    guid: string;
};
export declare enum EventSources {
    designer = "api",
    liveboard = "live_board"
}
export declare enum LiveBoardEventTypes {
    viewed_board = 1,
    viewed_item = 2,
    clicked_on_next_item = 3,
    clicked_on_previous_item = 4,
    confirmed_cookie_usage = 5,
    clicked_on_share_button = 6,
    shared_a_campaign = 7,
    liked_an_item = 8,
    clicked_on_cta = 9,
    downloaded_an_item = 10,
    changed_category = 11,
    searched_items = 12
}
export declare enum DesignerEventTypes {
    clicked_on_logo = 17,
    clicked_on_campaign_preview = 18,
    viewed_design_tab = 19,
    viewed_content_tab = 20,
    changed_board_privacy_settings = 47,
    clicked_on_find_more_images = 51,
    clicked_on_search_image = 52,
    clicked_on_upload_an_image = 53,
    uploaded_an_image = 54,
    saved_campaign_design = 76,
    discarded_campaign_design_changes = 77,
    configured_personalization = 261,
    deleted_personalization = 262,
    created_new_block = 282,
    added_rule = 283,
    added_items_to_visible_to_everyone = 284,
    changed_rule = 285,
    changed_block_title = 286,
    saved_personalization_changes = 290,
    discarded_personalization_changes = 291,
    change_rule_set_priority = 292
}
export declare class Analytics {
    private fetcher;
    private pingEndpoint;
    private isPreview;
    constructor(fetch: FetchService);
    analyticsRequestWrapper(apiCall: Function): Promise<any>;
    /**
     * Lead viewed board
     *
     * @param {number} boardId
     */
    trackLeadBoardView(boardId: number): Promise<AxiosResponse>;
    /**
     * Lead viewed item
     *
     * @param {number} itemId
     * @param {string} guid
     */
    trackLeadItemView(itemId: number, guid: string): Promise<AxiosResponse>;
    /**
     * Tracks an event
     *
     * @param {LiveBoardEventTypes|DesignerEventTypes} eventId the event that accured
     * @param {any} data the data to report
     * @param {EventSources} source where the event happened
     */
    trackEvent(eventId: LiveBoardEventTypes | DesignerEventTypes, data: any, source: EventSources): Promise<AxiosResponse>;
    sendPing(payload: PingPayload): Promise<any>;
}
