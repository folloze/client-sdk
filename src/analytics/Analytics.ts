import {type AxiosResponse} from "axios";
import {FLZ_SESSION_GUID_HEADER, type FetchService} from "../common/FetchService";
import {type SessionResponseV1} from "../liveboard/ILiveboardTypes";
import {type AnalyticEventPrepared} from "../common/helpers/analyticEventTracking";
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

export type SourceType = "item" | "ai" | "recommendations"

export enum LiveBoardEventTypes {
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
    searched_items = 12,
}

export enum DesignerEventTypes {
    clicked_on_logo = 17,
    clicked_on_campaign_preview = 18,
    viewed_design_tab = 19,
    viewed_content_tab = 20,
    changed_board_privacy_settings = 47, //might be unneccessary after general settings are out
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
    gen_ai_translate = 355,
}

export class Analytics {
    private fetchService: FetchService;
    liveEvent: LiveEventAnalytics;

    constructor(fetch: FetchService) {
        this.fetchService = fetch;
        this.liveEvent = new LiveEventAnalytics(fetch);
    }

    /**
     * Lead viewed board
     *
     * @param {number} boardId
     */
    trackLeadBoardView(boardId: number): Promise<AxiosResponse> {
        return this.fetchService.withDisableOnPreview(() => {
            return this.fetchService.fetcher
                .post(
                    `${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/boards/${boardId}/lead_views`,
                )
                .catch(e => {
                    console.error("could not track lead board view", e);
                    throw e;
                });
        });
    }

    /**
     * Lead viewed content
     *
     * @param {number} itemId
     * @param {number} contentItemId
     * @param {SourceType} sourceType
     * @param {string} guid
     */
    trackLeadContentView(
        contentItemId: number,
        sourceType: SourceType,
        guid: string,
        itemId?: number,
    ): Promise<AxiosResponse> {
        return this.fetchService.withDisableOnPreview(() => {
            return this.fetchService.fetcher
                .post(
                    `${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/content_items/${contentItemId}/lead_views`,
                    {
                        guid,
                        item_id: itemId,
                        source_type: sourceType,
                    },
                )
                .catch(e => {
                    console.error("could not track lead item view", e);
                    throw e;
                });
        });
    }

    /**
     * Tracks an event - only in designer
     *
     * @param {LiveBoardEventTypes|DesignerEventTypes} eventId the event that occurred
     * @param {any} data the data to report
     */
    trackUserEvent(eventId: LiveBoardEventTypes | DesignerEventTypes, data: any): Promise<AxiosResponse> {
        return this.fetchService.fetcher
            .post(`/api/v1/tracking`, {
                event: {
                    id: eventId,
                    data: data,
                    platform: {id: 1, name: "App"},
                },
            })
            .catch(e => {
                console.error("could not track action", e);
                throw e;
            });
    }

    /**
     * Tracks an event - only in liveboard
     *
     * @param {LiveBoardEventTypes|DesignerEventTypes} eventId the event that occurred
     * @param {any} data the data to report
     */
    trackLeadEvent(eventId: LiveBoardEventTypes | DesignerEventTypes, data: any): Promise<AxiosResponse> {
        return this.fetchService.fetcher
            .post(`/live_board/v1/tracking`, {
                event: {
                    id: eventId,
                    data: data,
                    platform: {id: 2, name: "Campaign"},
                },
            })
            .catch(e => {
                console.error("could not track action", e);
                throw e;
            });
    }

    sendPing(payload: PingPayload) {
        return this.fetchService.withDisableOnPreview(() => {
            try {
                const url = `${this.fetchService.options.pingEndpoint}/pings`;
                const body = {
                    lead_id: payload.leadId,
                    board_id: payload.boardId,
                    item_id: payload.itemId,
                    content_item_id: payload.contentItemId,
                    client_guid: payload.guid,
                    session_guid: this.fetchService.sessionGuid,
                    analyticsData: payload.analyticsData
                };
                return navigator.sendBeacon(url, JSON.stringify(body));
            } catch (e) {
                console.error("could not send pings", e);
            }
        });
    }

    validateSession(): Promise<AxiosResponse> {
        return this.fetchService.withDisableOnPreview(() => {
            return this.fetchService.fetcher.post("/live_board/v1/session_validations").catch(e => {
                console.error("could not validate session", e);
                throw e;
            });
        });
    }

    createSession(): Promise<AxiosResponse> {
        return this.fetchService.withDisableOnPreview(() => {
            return this.fetchService.fetcher.post<SessionResponseV1>("/live_board/v1/sessions").catch(e => {
                console.error("could not create session", e);
                throw e;
            });
        }).then(response => {
            const sessionGuid = response.headers?.[FLZ_SESSION_GUID_HEADER] || response.data.guid;
            this.fetchService.setSessionGuid(sessionGuid);
            return response;
        });
    }

    updateInvitationUsed(token: string): Promise<AxiosResponse> {
        return this.fetchService.withDisableOnPreview(() => {
            return this.fetchService.fetcher.put(`/live_board/v2/invitation_wrappers/${token}`).catch(e => {
                console.error("could not update invitation wrapper", e);
                throw e;
            });
        });
    }

    sendBeacon(data: AnalyticEventPrepared[]): boolean {
        if (this.fetchService.options?.isPreview) {
            return true;
        }

        try {
            const url = `${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/lead_events`;
            const payload = JSON.stringify({events: data});
            // const blob = new Blob([payload], {type: "application/json"});
            return navigator.sendBeacon(url, payload);
        } catch (e) {
            console.error("could not send beacon", e);
        }
    }

    /**
     * Tracking for download file action
     *
     * @param {SourceType} sourceType
     * @param {number} contentItemId
     * @param {number} itemId
     * deprecated Use trackDownloadFileV2 instead
     */
    trackDownloadFile(sourceType: SourceType, contentItemId: number, itemId?: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .post<void>(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/downloads`, {
                    source_type: sourceType,
                    content_item_id: contentItemId,
                    item_id: itemId,
                })
                .then(() => {
                    resolve();
                })
                .catch(e => {
                    console.error("could not track download content", e);
                    reject(e);
                });
        });
    }

    /**
     * Tracking for download file action V2
     *
     * @param {SourceType} sourceType
     * @param {number} contentItemId
     * @param {number} itemId
     */
    trackDownloadFileV2(sourceType: SourceType, contentItemId: number, itemId?: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .post<void>(
                    `${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/content_items/${contentItemId}/downloads`,
                    {
                        source_type: sourceType,
                        item_id: itemId,
                    },
                )
                .then(() => {
                    resolve();
                })
                .catch(e => {
                    console.error("could not track download content", e);
                    reject(e);
                });
        });
    }

    /**
     * Tracking for lead like content action
     *
     * @param {number} contentItemId
     * @param {number} itemId
     * @param {SourceType} sourceType
     * deprecated Use trackLeadLikeContentV2 instead
     */
    trackLeadLikeContent(sourceType: SourceType, contentItemId: number, itemId?: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .post<void>(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/likes`, {
                    source_type: sourceType,
                    content_item_id: contentItemId,
                    item_id: itemId,
                })
                .then(() => {
                    resolve();
                })
                .catch(e => {
                    console.error("could not track like content", e);
                    reject(e);
                });
        });
    }

    /**
     * Tracking for lead like content action V2
     *
     * @param {number} contentItemId
     * @param {number} itemId
     * @param {SourceType} sourceType
     */
    trackLeadLikeContentV2(sourceType: SourceType, contentItemId: number, itemId?: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .post<void>(
                    `${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/content_items/${contentItemId}/likes`,
                    {
                        source_type: sourceType,
                        item_id: itemId,
                    },
                )
                .then(() => {
                    resolve();
                })
                .catch(e => {
                    console.error("could not track like content", e);
                    reject(e);
                });
        });
    }

    /**
     * Publish lead event externally
     *
     * @param {number} contentItemId
     * @param {Date} timestamp
     * @param {string} eventName
     */
    publishLeadEvents(contentItemId: number, timestamp: number, eventName: string): Promise<void> {
        return this.fetchService.withDisableOnPreview(() => {
            return this.fetchService.fetcher
                .post<void>("/live_board/v2/sphere/publish_lead_events", {
                    content_item_id: contentItemId,
                    timestamp,
                    event_name: eventName,
                })
                .catch(e => {
                    console.error("could not update invitation wrapper", e);
                    throw e;
                });
        });
    }
}