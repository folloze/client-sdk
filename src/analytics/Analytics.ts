import {type AxiosResponse} from "axios";
import {FLZ_SESSION_GUID_HEADER, type FetchService} from "../common/FetchService";
import {type SessionResponseV1} from "../liveboard/ILiveboardTypes";
import {type AnalyticEventPrepared} from "../common/helpers/analyticEventTracking";
import LiveEventAnalytics from "./LiveEventAnalytics";
import { GenAudienceTarget } from "../common/interfaces/IGenerationTypes";
import type { 
    TrackedUserAddFloatingWidget,
    TrackedUserAddPersonalizationRule, TrackedUserAddSection, TrackedUserDeleteFloatingWidget, TrackedUserDeleteSection, TrackedUserEditComponent, TrackedUserEditSection, TrackedUserPreviewBoard, TrackedUserPublishBoard } from "../common/common";

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

export type AllEventTypes = LiveBoardEventTypes | DesignerEventTypes | WidgetEventTypes;

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
    gen_ai_generate_text_from_input = 356,
    clicked_on_create_ad = 357,
    created_an_ad = 358,
    clicked_create_ad_chat_attach = 359,
    clicked_ad_download = 360,
    duplicated_an_ad = 361,
    clicked_on_edit_ad = 362,
    clicked_ad_text_assist_button = 363,
    copied_ad_text = 364,
    clicked_edit_ad_chat_attach = 365,
    saved_ad_changes = 366,
    clicked_ad_retry = 367,
    edit_ad_image_actions = 368
}

export enum WidgetEventTypes {
    ai_board_creation_chat_attachment_added = 358,
    ai_board_creation_chat_suggestion_clicked = 359,
    ai_board_creation_chat_edit_clicked = 360,
    ai_board_creation_chat_create_board_clicked = 361,
    ai_board_creation_chat_board_created = 362
}

type GenAIPayload = {
    level: 'board';
} | {
    level: 'section';
    section_name: string;
}

type GenAITargetAudiencePayload = GenAIPayload & {
    text: string;
    target_type: string;
};

type GenAIGenerateByGoalPayload = GenAIPayload & {
    goal: string;
    target_audience: GenAudienceTarget | null;
    target_audience_text: string;
}

type GenAIGenerateByFreePromptPayload = GenAIPayload & {
    prompt: string;
}

type GenAITranslatePayload = GenAIPayload & {
    language: string;
};

type AIBoardCreationChatAttachmentAddedPayload = {
    attachment_type: 'url' | 'file';
    file_name?: string;
    file_type?: string;
    url?: string;
};

type AIBoardCreationChatSuggestionClickedPayload = {
    text: string;
};

type AIBoardCreationChatEditClickedPayload = {
    component_key: string;
};

type AIBoardCreationChatGatheredInfoItem = {
    title: string;
    content: string;
};

type AIBoardCreationChatCreateBoardClickedPayload = {
    gathered_info: {
        product: AIBoardCreationChatGatheredInfoItem;
        targetAudience: AIBoardCreationChatGatheredInfoItem;
        campaignMessage: AIBoardCreationChatGatheredInfoItem;
        goal: AIBoardCreationChatGatheredInfoItem;
        additionalInformation: AIBoardCreationChatGatheredInfoItem;
        generationInstructions: AIBoardCreationChatGatheredInfoItem;
    };
};

type AIBoardCreationChatBoardCreatedPayload = {
    board_id: number;
};

type EventPayloadMap = {
    [DesignerEventTypes.gen_ai_personalize_existing_target_audience]: GenAITargetAudiencePayload;
    [DesignerEventTypes.gen_ai_personalize_new_target_audience]: GenAITargetAudiencePayload;
    [DesignerEventTypes.gen_ai_generate_by_goal]: GenAIGenerateByGoalPayload;
    [DesignerEventTypes.gen_ai_generate_by_free_prompt]: GenAIGenerateByFreePromptPayload;
    [DesignerEventTypes.gen_ai_translate]: GenAITranslatePayload;
    [WidgetEventTypes.ai_board_creation_chat_attachment_added]: AIBoardCreationChatAttachmentAddedPayload;
    [WidgetEventTypes.ai_board_creation_chat_suggestion_clicked]: AIBoardCreationChatSuggestionClickedPayload;
    [WidgetEventTypes.ai_board_creation_chat_edit_clicked]: AIBoardCreationChatEditClickedPayload;
    [WidgetEventTypes.ai_board_creation_chat_create_board_clicked]: AIBoardCreationChatCreateBoardClickedPayload;
    [WidgetEventTypes.ai_board_creation_chat_board_created]: AIBoardCreationChatBoardCreatedPayload;
};

export type UserTrackedEventsV2 = {
    [K in AllEventTypes]: {
        action: K;
        payload: K extends keyof EventPayloadMap ? EventPayloadMap[K] : {};
    };
};

export type TrackedUserEvent =
    TrackedUserAddSection
    | TrackedUserEditSection
    | TrackedUserEditComponent
    | TrackedUserDeleteSection
    | TrackedUserPreviewBoard
    | TrackedUserPublishBoard
    | TrackedUserDeleteFloatingWidget
    | TrackedUserAddFloatingWidget
    | TrackedUserAddPersonalizationRule;

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
     * Tracks a user event
     *
     * @param {LiveBoardEventTypes|DesignerEventTypes|WidgetEventTypes} eventId the event that occurred
     * @param {any} data the data to report
     */
    trackUserEvent(eventId: LiveBoardEventTypes | DesignerEventTypes | WidgetEventTypes, data: any): Promise<AxiosResponse> {
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
    trackLeadEvent(eventId: AllEventTypes, data: any): Promise<AxiosResponse> {
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

    /**
     * Caching the HubSpot user token (HUTK) for the current lead
     *
     * @param {string} hutk - The HubSpot user token
    */
    cacheLeadHubSpotHutk(hutk: string): Promise<{success: boolean, error?: string}> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .post<{success: boolean, error?: string}>(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/hubspot/set_hutk`, {
                    hutk: hutk
                })
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error(e);
                    reject(e);
                });
        });
    }
}