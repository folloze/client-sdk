import { type AxiosResponse } from "axios";
import { type FetchService } from "../common/FetchService";
import { type AnalyticEventPrepared } from "../common/helpers/analyticEventTracking";
import LiveEventAnalytics from "./LiveEventAnalytics";
export * from "./LiveEventAnalytics";
export type PingPayload = {
    leadId: number;
    boardId: number;
    itemId?: number;
    contentItemId?: number;
    guid: string;
    analyticsData: any;
};
export type SourceType = "item" | "ai" | "recommendations";
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
    changed_board_privacy_settings = 47,//might be unneccessary after general settings are out
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
    change_rule_set_priority = 292,
    add_new_section = 325,
    add_floating_section = 326,
    delete_section = 327,
    delete_floating_section = 328,
    edit_section = 329,
    publish_board = 330,
    preview_board = 331,
    edit_editable_component = 332,
    add_personalization_rule_from_designer = 333,
    gen_ai_brand_voice = 350,
    gen_ai_personalize_existing_target_audience = 351,
    gen_ai_personalize_new_target_audience = 352,
    gen_ai_generate_by_goal = 353,
    gen_ai_generate_by_free_prompt = 354,
    gen_ai_translate = 355
}
export declare class Analytics {
    private fetchService;
    liveEvent: LiveEventAnalytics;
    constructor(fetch: FetchService);
    /**
     * Lead viewed board
     *
     * @param {number} boardId
     */
    trackLeadBoardView(boardId: number): Promise<AxiosResponse>;
    /**
     * Lead viewed content
     *
     * @param {number} itemId
     * @param {number} contentItemId
     * @param {SourceType} sourceType
     * @param {string} guid
     */
    trackLeadContentView(contentItemId: number, sourceType: SourceType, guid: string, itemId?: number): Promise<AxiosResponse>;
    /**
     * Tracks an event - only in designer
     *
     * @param {LiveBoardEventTypes|DesignerEventTypes} eventId the event that occurred
     * @param {any} data the data to report
     */
    trackUserEvent(eventId: LiveBoardEventTypes | DesignerEventTypes, data: any): Promise<AxiosResponse>;
    /**
     * Tracks an event - only in liveboard
     *
     * @param {LiveBoardEventTypes|DesignerEventTypes} eventId the event that occurred
     * @param {any} data the data to report
     */
    trackLeadEvent(eventId: LiveBoardEventTypes | DesignerEventTypes, data: any): Promise<AxiosResponse>;
    sendPing(payload: PingPayload): Promise<any>;
    validateSession(): Promise<AxiosResponse>;
    createSession(): Promise<AxiosResponse>;
    updateInvitationUsed(token: string): Promise<AxiosResponse>;
    sendBeacon(data: AnalyticEventPrepared[]): boolean;
    /**
     * Tracking for download file action
     *
     * @param {SourceType} sourceType
     * @param {number} contentItemId
     * @param {number} itemId
     * deprecated Use trackDownloadFileV2 instead
     */
    trackDownloadFile(sourceType: SourceType, contentItemId: number, itemId?: number): Promise<void>;
    /**
     * Tracking for download file action V2
     *
     * @param {SourceType} sourceType
     * @param {number} contentItemId
     * @param {number} itemId
     */
    trackDownloadFileV2(sourceType: SourceType, contentItemId: number, itemId?: number): Promise<void>;
    /**
     * Tracking for lead like content action
     *
     * @param {number} contentItemId
     * @param {number} itemId
     * @param {SourceType} sourceType
     * deprecated Use trackLeadLikeContentV2 instead
     */
    trackLeadLikeContent(sourceType: SourceType, contentItemId: number, itemId?: number): Promise<void>;
    /**
     * Tracking for lead like content action V2
     *
     * @param {number} contentItemId
     * @param {number} itemId
     * @param {SourceType} sourceType
     */
    trackLeadLikeContentV2(sourceType: SourceType, contentItemId: number, itemId?: number): Promise<void>;
    /**
     * Publish lead event externally
     *
     * @param {number} contentItemId
     * @param {Date} timestamp
     * @param {string} eventName
     */
    publishLeadEvents(contentItemId: number, timestamp: number, eventName: string): Promise<void>;
}
