import {AxiosResponse} from "axios";
import {keysToSnakeCase} from "../common/helpers/helpers";
import {FetchService} from "../common/FetchService";
import {
    BoardResponseV1,
    BoardSellerResponseV1,
    CategoryResponseV2,
    CategoriesResponseV2,
    UserChatResponseV1,
    ItemResponseV2,
    ItemsResponseV2,
    HasItemResponseV2,
    SnapshotUrlResponseV1,
    ItemAnalysisResponseV1,
    ItemFileMetadataResponseV1,
    GeoLocationResponseV1,
    LeadResponseV1,
    JourneyItemsResponseV2,
    ItemDownloadUrlSuccessResponseV2,
    ItemDownloadUrlFailedResponseV2,
    LiveEventUrlsResponseV2,
    OrganizationSettingsResponseV1,
    ItemsParams,
    JourneyItemParams,
    CookieConsentParams,
    FormMetadataDataV1,
    CampaignElementDataV2,
    CtaParams,
    CtaResponseV1,
    EnrichmentBoardConfigV3, LeadLinkClickResponseV1
} from "./ILiveboardTypes";
import {CampaignElementsTypes} from "../designer/IDesignerTypes";
import { TrackedLeadLinkClickPayload } from "../common/helpers/leadEventTracking";

export class Liveboard {
    private fetchService: FetchService;

    constructor(fetch: FetchService) {
        this.fetchService = fetch;
    }

    /**
     * given the board slug (i.e. /best-board) it will retrieve the corresponding board
     *
     * @param {string} boardSlug the board's slug
     * @returns {BoardResponseV1} BoardResponse
     */
    getBoard(boardSlug: string): Promise<BoardResponseV1> {
        // TODO - remove all promises as Axios already returns a promise
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .get<BoardResponseV1>(`/live_board/v1/boards/${boardSlug}/`)
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not get board");
                    reject(e);
                });
        });
    }

    //TODO: extract partial response logic
    /**
     * gets the seller to be displayed for the board
     *
     * @param {number} boardId the board's id
     * @returns {BoardSellerResponseV1} BoardSellerResponse
     */
    getSellerInformation(boardId: number): Promise<BoardSellerResponseV1> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .get<BoardSellerResponseV1>(`/live_board/v1/boards/${boardId}/presenter`, {
                    params: {token: this.fetchService.urlToken},
                })
                .then(result => {
                    if (result.status == 206) {
                        setTimeout(() => {
                            this.getSellerInformation(boardId).then(resolve).catch(reject);
                        }, 2000);
                    } else {
                        resolve(result.data);
                    }
                })
                .catch(e => {
                    console.error("could not get seller");
                    reject(e);
                });
        });
    }

    /**
     * gets category by id, board id, and slug
     *
     * @param {number | string} categoryIdOrSlug
     * @param {number} boardId
     * @param {boolean} bySlug
     * @returns {CategoryResponseV2} CategoryResponse
     */
    getCategory(categoryIdOrSlug: number | string, boardId: number, bySlug: boolean): Promise<CategoryResponseV2> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .get<CategoryResponseV2>(`/live_board/v2/categories/${categoryIdOrSlug}`, {
                    params: {
                        board_id: boardId,
                        by_slug: bySlug,
                    },
                })
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not get category", e);
                    reject(e);
                });
        });
    }

    /**
     * gets all categories of a board
     *
     * @param {string} boardId
     * @returns {CategoriesResponseV2} CategoriesResponse
     */
    getCategories(boardId: number): Promise<CategoriesResponseV2> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .get<CategoriesResponseV2>(`/live_board/v2/boards/${boardId}/categories`)
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not get categories", e);
                    reject(e);
                });
        });
    }

    /**
     *
     * Used for livestreams, get the chat id and token for given lead and board
     *
     * @param {number} boardId
     * @param {number} leadId
     * @returns {UserChatResponseV1} UserChatResponse
     */
    getUserChat(boardId: number, leadId: number): Promise<UserChatResponseV1> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .post<UserChatResponseV1>("/live_board/v1/chat/user_chat", {
                    board_id: boardId,
                    lead_id: leadId,
                })
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not get user chat", e);
                    reject(e);
                });
        });
    }

    // Items

    /**
     * Fetches an item
     *
     * @param {number|string} itemId the item id or slug
     * @param {number} boardId
     * @param {boolean} bySlug
     * @returns {ItemResponseV2} ItemResponse
     */
    getItem(itemId: number | string, boardId: number, bySlug: boolean): Promise<ItemResponseV2> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .get(`/live_board/v2/items/${itemId}`, {
                    params: {by_slug: bySlug, board_id: boardId},
                })
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not get item", e);
                    reject(e);
                });
        });
    }

    /**
     * Gets all items by params
     *
     * @param {ItemsParams} params
     * @returns {ItemsResponseV2} ItemsResponse
     */
    getItems(params: ItemsParams): Promise<ItemsResponseV2> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .post(`/live_board/v2/boards/${params.boardId}/items`, keysToSnakeCase(params))
                .then(result => {
                    if (result.status == 206) {
                        setTimeout(() => {
                            this.getItems(params).then(resolve).catch(reject);
                        }, 2000);
                    } else {
                        resolve(result.data);
                    }
                })
                .catch(e => {
                    console.error("could not get items");
                    reject(e);
                });
        });
    }

    /**
     * Get whether a board has items or not
     *
     * @param boardId
     * @returns {HasItemResponseV2} HasItemResponse
     */
    getHasItems(boardId: number): Promise<HasItemResponseV2> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .get(`/live_board/v2/boards/${boardId}/items_presence`)
                .then(result => {
                    if (result.status == 206) {
                        setTimeout(() => {
                            this.getHasItems(boardId).then(resolve).catch(reject);
                        }, 2000);
                    } else {
                        resolve(result.data);
                    }
                })
                .catch(e => {
                    console.error("could not get has items");
                    reject(e);
                });
        });
    }

    /**
     * Like an item
     *
     * @param {number} itemId
     */
    likeItem(itemId: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .post<void>(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v2/items/${itemId}/likes`)
                .then(() => {
                    resolve();
                })
                .catch(e => {
                    console.error("could not like item", e);
                    reject(e);
                });
        });
    }

    /**
     * Gets the item journey
     *
     * @param {number} itemId
     * @param {JourneyItemParams} options JourneyItemParams
     * @returns {JourneyItemsResponseV2} JourneyItemsResponse
     */
    getJourneyItems(itemId: number, options: JourneyItemParams): Promise<JourneyItemsResponseV2> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .post<JourneyItemsResponseV2>(`/live_board/v2/journeys/${itemId}`, keysToSnakeCase(options))
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not get journey items", e);
                    reject(e);
                });
        });
    }

    /**
     * Gets the url to download the item
     *
     * @param {number} itemId
     * @returns {ItemDownloadUrlSuccessResponseV2|ItemDownloadUrlFailedResponseV2} the url or failiure message
     */
    getItemDownloadUrl(itemId: number): Promise<ItemDownloadUrlSuccessResponseV2 | ItemDownloadUrlFailedResponseV2> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .get(`/live_board/v2/items/${itemId}/downloads`)
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not get download url", e);
                    reject(e);
                });
        });
    }

    /**
     *
     * For url items that cannot be rendered inside an iframe, this creates a snapshot and returns the original url and the new image
     *
     * @param {number} contentItemId
     * @param {number=} guid
     * @returns {SnapshotUrlResponseV1} SnapshotUrlResponse
     */
    createSnapshotUrl(contentItemId: number, guid?: number): Promise<SnapshotUrlResponseV1> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .post<SnapshotUrlResponseV1>(`/live_board/v1/content_items/${contentItemId}/snapshots`, {guid})
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not create snapshot", e);
                    reject(e);
                });
        });
    }

    /**
     * Analyses whether the item is secure or not
     *
     * @param {number} contentItemId
     * @returns {ItemAnalysisResponseV1} ItemAnalysisResponse
     */
    createItemAnalysis(contentItemId: number): Promise<ItemAnalysisResponseV1> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .post<ItemAnalysisResponseV1>(`/live_board/v1/content_items/${contentItemId}/analyses`)
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not create analysis", e);
                    reject(e);
                });
        });
    }

    /**
     * Fetches file metadata for given item
     *
     * @param {number} contentItemId
     * @returns {ItemFileMetadataResponseV1} ItemFileMetadataResponse
     */
    getFileMetadata(contentItemId: number): Promise<ItemFileMetadataResponseV1> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .get<ItemFileMetadataResponseV1>(`/live_board/v1/content_items/${contentItemId}/files`)
                .then(result => {
                    if (result.status == 206) {
                        setTimeout(() => {
                            this.getFileMetadata(contentItemId).then(resolve).catch(reject);
                        }, 2000);
                    } else {
                        resolve(result.data);
                    }
                })
                .catch(e => {
                    console.error("could not get file url", e);
                    reject(e);
                });
        });
    }

    // end items

    /**
     * Sets cookies consent for the lead
     *
     * @param {number} boardId
     * @param {CookieConsentParams} options
     */
    setCookiesConsent(boardId: number, options: CookieConsentParams): Promise<void> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .post(`/live_board/v1/boards/${boardId}/cookies_consents`, {...keysToSnakeCase(options)})
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not get file url", e);
                    reject(e);
                });
        });
    }

    /**
     * Update the current lead's account's enrichment data
     *
     * @param {string} type
     * @param {object} enrichmentData
     */
    updateEnrichment(type: string, enrichmentData: object, requestTime?: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .post<void>("/live_board/v2/enrichments", {
                    type,
                    request_time: requestTime,
                    enrichment_data: enrichmentData,
                })
                .then(() => {
                    resolve();
                })
                .catch(e => {
                    console.error("could not update enrichment", e);
                    reject(e);
                });
        });
    }

    /**
     * Update cookie match value for lead data enrichment
     *
     * @param {string} type
     * @param {object} value
     * @param {boolean} success
     */
     updateCookieMatching(type: string, value: object, success: boolean): Promise<void> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .post<void>("/live_board/v2/cookie_matchings", {
                    type: type,
                    value: value,
                    success: success
                })
                .then(() => {
                    resolve();
                })
                .catch(e => {
                    console.error("could not update cookie matching", e);
                    reject(e);
                });
        });
    }

    /**
     * Gets the geo location of the current lead
     *
     * @returns {GeoLocationResponseV1} GeoLocationResponse
     */
    getGeoLocation(): Promise<GeoLocationResponseV1> {
        return this.fetchService.withDisableOnPreview((): Promise<GeoLocationResponseV1> => {
            return new Promise((resolve, reject) => {
                this.fetchService.fetcher
                    .get<GeoLocationResponseV1>("/live_board/v1/geo_location")
                    .then(result => {
                        resolve(result.data);
                    })
                    .catch(e => {
                        console.error("could not get geolocation", e);
                        reject(e);
                    });
            });
        });
    }

    //identity

    /**
     * Fetches the current lead
     *
     * @returns {LeadResponseV1} LeadResponse
     */
    getCurrentLead(): Promise<LeadResponseV1> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .get<LeadResponseV1>("/live_board/v1/leads/me")
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not get current lead", e);
                    reject(e);
                });
        });
    }

    /**
     * Validates that the lead is a human
     *
     * @param {number} boardId
     */
    validateLead(boardId: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .post<void>("/live_board/v2/lead_validations", {board_id: boardId})
                .then(() => {
                    resolve();
                })
                .catch(e => {
                    console.error("could not validate lead", e);
                    reject(e);
                });
        });
    }

    /**
     * Stop tracking and anonimyze lead
     *
     * @returns {LeadResponseV1} LeadResponse new anonymous lead
     */
    stopTrackingForSession(): Promise<LeadResponseV1> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .delete<LeadResponseV1>("/live_board/v2/track_leads")
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not get stop tracking lead", e);
                    reject(e);
                });
        });
    }

    /**
     * Gets the urls to use for the live event
     *
     * @param {number} boardId
     * @returns {LiveEventUrlsResponseV2} LiveEventUrlsResponse
     */
    getLiveEventUrls(boardId: number): Promise<LiveEventUrlsResponseV2> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .get<LiveEventUrlsResponseV2>(`/live_board/v2/boards/${boardId}/live_event`)
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not get current lead", e);
                    reject(e);
                });
        });
    }

    /**
     * Gets the organization's settings
     *
     * @param {number} boardId
     * @returns {OrganizationSettingsResponseV1} OrganizationSettingsResponse
     */
    getOrganizationSettings(boardId: number): Promise<OrganizationSettingsResponseV1> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .get<OrganizationSettingsResponseV1>(`/live_board/v1/boards/${boardId}/organization_settings`)
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not get organization settings", e);
                    reject(e);
                });
        });
    }

    /**
     * Set the lead's session cookie
     *
     * @param {number} boardId
     * @returns {number} the lead's id
     */
    setSessionCookie(boardId: number): Promise<number> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .post(`/live_board/v1/boards/${boardId}/session_cookies`)
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not create session cookie", e);
                    reject(e);
                });
        });
    }

    getFormData(boardId: number, formId: number, privacyMessageId: number = null): Promise<FormMetadataDataV1> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .get<FormMetadataDataV1>(`/live_board/v2/boards/${boardId}/forms/${formId}`, {
                    params: {
                        privacy_message_id: privacyMessageId,
                    },
                })
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not get form data", e);
                    reject(e);
                });
        });
    }

    //Campaign Elements
    getPrivacyMessage(boardId: number, elementId: number): Promise<CampaignElementDataV2> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .get<CampaignElementDataV2>(`/live_board/v2/campaign_elements/${elementId}`, {
                    params: {element_type: CampaignElementsTypes.privacy_message, board_id: boardId},
                })
                .then(result => resolve(result.data))
                .catch(e => {
                    console.error("could not get form privacy message", e);
                    reject(e);
                });
        });
    }

    getFooter(boardId: number, elementId: number): Promise<CampaignElementDataV2> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .get<CampaignElementDataV2>(`/live_board/v2/campaign_elements/${elementId}`, {
                    params: {element_type: CampaignElementsTypes.footer, board_id: boardId},
                })
                .then(result => resolve(result.data))
                .catch(e => {
                    console.error("could not get form privacy message", e);
                    reject(e);
                });
        });
    }

    getFormPrivacyMessage(boardId: number, elementId: number): Promise<CampaignElementDataV2> {
        return new Promise((resolve, reject) => {
            this.fetchService.fetcher
                .get<CampaignElementDataV2>(`/live_board/v2/campaign_elements/${elementId}`, {
                    params: {element_type: CampaignElementsTypes.form_privacy_message, board_id: boardId},
                })
                .then(result => resolve(result.data))
                .catch(e => {
                    console.error("could not get form privacy message", e);
                    reject(e);
                });
        });
    }

    //TODO: pings

    // CTA

    /**
     * submit a message CTA
     *
     * @param {number} boardId
     * @param {CtaParams} options
     * @returns {CtaResponseV1} CtaResponse
     */
    saveMessageCta(boardId: number, options: CtaParams): Promise<AxiosResponse> | Promise<CtaResponseV1> {
        return this.fetchService.withDisableOnPreview(() => {
            return new Promise((resolve, reject) => {
                return this.notifyIdentity(boardId, options).then(_ => {
                    this.fetchService.fetcher
                        .post<CtaResponseV1>(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/boards/${boardId}/campaign/message`, {
                            ...keysToSnakeCase(options),
                        })
                        .then(result => {
                            resolve(result.data);
                        })
                        .catch(e => {
                            console.error("could not submit cta", e);
                            reject(e);
                        });
                });
            });
        });
    }

    /**
     * submit a contact CTA
     *
     * @param {number} boardId
     * @param {CtaParams} options
     * @returns {CtaResponseV1} CtaResponse
     */
    saveContactCta(boardId: number, options: CtaParams): Promise<AxiosResponse> | Promise<CtaResponseV1> {
        return this.fetchService.withDisableOnPreview((): Promise<CtaResponseV1> => {
            return new Promise((resolve, reject) => {
                return this.notifyIdentity(boardId, options).then(_ => {
                    this.fetchService.fetcher
                        .post<CtaResponseV1>(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/boards/${boardId}/campaign/contact`, {
                            ...keysToSnakeCase(options),
                        })
                        .then(result => {
                            resolve(result.data);
                        })
                        .catch(e => {
                            console.error("could not submit cta", e);
                            reject(e);
                        });
                  });
            });
        });
    }

    /**
     * submit a form CTA
     *
     * @param {number} boardId
     * @param {CtaParams} options
     * @returns {CtaResponseV1} CtaResponse
     */
    saveFormCta(boardId: number, options: any): Promise<AxiosResponse> | Promise<CtaResponseV1> {
        return this.fetchService.withDisableOnPreview((): Promise<CtaResponseV1> => {
            return new Promise((resolve, reject) => {
                return this.notifyIdentity(boardId, options).then(_ => {
                    this.fetchService.fetcher
                        .post<CtaResponseV1>(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/boards/${boardId}/campaign/form`, keysToSnakeCase(options))
                        .then(result => resolve(result.data))
                        .catch(e => {
                            console.error("could not submit cta", e);
                            reject(e);
                        });
                });
            });
        });
    }

    /**
     * submit a link CTA
     *
     * @param {number} boardId
     * @param {CtaParams} options
     * @returns {CtaResponseV1} CtaResponse
     */
    saveLinkCta(boardId: number, options: CtaParams): Promise<AxiosResponse> | Promise<CtaResponseV1> {
        return this.fetchService.withDisableOnPreview((): Promise<CtaResponseV1> => {
            return new Promise((resolve, reject) => {
                return this.notifyIdentity(boardId, options).then(_ => {
                    this.fetchService.fetcher
                        .post<CtaResponseV1>(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/boards/${boardId}/campaign/link`, {
                            ...keysToSnakeCase(options),
                        })
                        .then(result => {
                            resolve(result.data);
                        })
                        .catch(e => {
                            console.error("could not submit cta", e);
                            reject(e);
                        });
                });
            });
        });
    }
    /**
     * tracks a "a link click" by a lead
     *
     * @param {number} boardId
     * @param {CtaParams} options
     * @returns {CtaResponseV1} CtaResponse
     */
    trackLinkClick(boardId: number, options: TrackedLeadLinkClickPayload): Promise<AxiosResponse> | Promise<LeadLinkClickResponseV1> {
        return this.fetchService.withDisableOnPreview((): Promise<LeadLinkClickResponseV1> => {
            return new Promise((resolve, reject) => {
                this.fetchService.fetcher
                  .post<CtaResponseV1>(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/boards/${boardId}/campaign/link_click`, {
                      ...keysToSnakeCase(options),
                  })
                  .then(result => {
                      resolve(result);
                  })
                  .catch(e => {
                      console.error("could not submit cta", e);
                      reject(e);
                  });
            });
        });
    }

    /**
     * submit a share CTA
     *
     * @param {number} boardId
     * @param {CtaParams} options
     * @returns {CtaResponseV1} CtaResponse
     */
    saveShareCta(boardId: number, options: CtaParams): Promise<AxiosResponse> | Promise<CtaResponseV1> {
        return this.fetchService.withDisableOnPreview((): Promise<CtaResponseV1> => {
            return new Promise((resolve, reject) => {
                return this.notifyIdentity(boardId, options).then(_ => {
                    this.fetchService.fetcher
                        .post<CtaResponseV1>(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/boards/${boardId}/campaign/share`, {
                            ...keysToSnakeCase(options),
                        })
                        .then(result => {
                            resolve(result.data);
                        })
                        .catch(e => {
                            console.error("could not submit cta", e);
                            reject(e);
                        });
                });
            });
        });
    }

    /**
     * Submit a share by email cta
     *
     * @param {number} boardId
     * @param {string} email
     * @param {number} invitationId
     */
    saveShareByEmailCta(boardId: number, email: string, invitationId: number): Promise<AxiosResponse> | Promise<void> {
        return this.fetchService.withDisableOnPreview((): Promise<void> => {
            return new Promise((resolve, reject) => {
                this.fetchService.fetcher
                    .post<void>(`${this.fetchService.options.analyticsServiceEndpoint}/live_board/v1/boards/${boardId}/shares`, {
                        email,
                        invitation_id: invitationId,
                    })
                    .then(() => {
                        resolve();
                    })
                    .catch(e => {
                        console.error("could not submit cta", e);
                        reject(e);
                    });
            });
        });
    }
    // end CTA

    getEnrichment(boardId: number): Promise<EnrichmentBoardConfigV3> {
        const func = (resolve, reject) => {
            this.fetchService.fetcher
                .get(`/live_board/v3/boards/${boardId}/board_configuration`)
                .then(result => {
                    resolve(result);
                })
                .catch(e => {
                    console.error("could not get enrichment", e);
                    reject();
                });
        };
        return this.fetchService.withPartialContent(func, 500, 20) as Promise<EnrichmentBoardConfigV3>;
    }

    public notifyIdentity(boardId: number, values: CtaParams): Promise<any> {
        if (this.fetchService.options.analyticsServiceEndpoint) {
            return this.fetchService.fetcher.put("/live_board/v2/leads/identity", {
                ...values,
                board_id: boardId
            });
        } else {
            return new Promise(resolve => resolve({status: 200}));
        }
    }
}
