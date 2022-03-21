import { AxiosInstance } from "axios";
import {keysToSnakeCase} from "../common/helpers/helpers";
import { FetchService } from "../common/FetchService";
import {
    BoardResponseV1, BoardSellerResponseV1, CategoryResponseV2, CategoriesResponseV2,
    UserChatResponseV1, ItemResponseV2, ItemsResponseV2, HasItemResponseV2, SnapshotUrlResponseV1,
    ItemAnalysisResponseV1, ItemFileMetadataResponseV1, CtaResponseV1, GeoLocationResponseV1,
    LeadResponseV1, JourneyItemsResponseV2, ItemDownloadUrlSuccessResponseV2, ItemDownloadUrlFailedResponseV2,
    LiveEventUrlsResponseV2, OrganizationSettingsResponseV1, SessionResonseV1,
    ItemsParams, JourneyItemParams, CookieConsentParams, CtaParams, FormMetadataDataV1
} from './ILiveboardTypes';

export class Liveboard {
    private fetcher: AxiosInstance;

    constructor(fetch: FetchService) {
        this.fetcher = fetch.fetcher;
    }

    /**
    * given the board slug (i.e. /best-board) it will retrieve the corresponding board
    *
    * @param {string} boardSlug the board's slug
    * @returns {BoardResponseV1} BoardResponse
    */
    getBoard(boardSlug: string): Promise<BoardResponseV1> {
        return new Promise((resolve, reject) => {
            this.fetcher.get<BoardResponseV1>(`/live_board/v1/boards/${boardSlug}/`)
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
     * @param {string=} token
     * @returns {BoardSellerResponseV1} BoardSellerResponse
     */
    getSellerInformation(boardId: number, token?: string): Promise<BoardSellerResponseV1> {
        return new Promise((resolve, reject) => {
            this.fetcher.get<BoardSellerResponseV1>(
                `/live_board/v1/boards/${boardId}/presenter`,
                {params: {token}}
            )
                .then(result => {
                    if(result.status == 206) {
                        setTimeout(() => {
                            this.getSellerInformation(boardId, token)
                            .then(resolve)
                          . catch(reject);
                        }, 2000);
                    }
                    else {
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
            this.fetcher.get<CategoryResponseV2>(
                `/live_board/v2/categories/${categoryIdOrSlug}`,
                {
                    params: {
                        board_id: boardId,
                        by_slug: bySlug
                    }
                }
            )
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
            this.fetcher.get<CategoriesResponseV2>(`/live_board/v2/boards/${boardId}/categories`)
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
            this.fetcher.post<UserChatResponseV1>(
                "/live_board/v1/chat/user_chat",
                {
                    board_id: boardId,
                    lead_id: leadId
                }
            )
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
    getItem(itemId: number|string, boardId: number, bySlug: boolean): Promise<ItemResponseV2> {
        return new Promise(((resolve, reject) => {
            this.fetcher.get(`/live_board/v2/items/${itemId}`, {
                params: { by_slug: bySlug, board_id: boardId }
            })
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not get item", e);
                    reject(e);
                });
        }));
    }

    /**
     * Gets all items by params
     *
     * @param {ItemsParams} params
     * @returns {ItemsResponseV2} ItemsResponse
     */
    getItems(params: ItemsParams): Promise<ItemsResponseV2> {
        return new Promise((resolve, reject) => {
            this.fetcher.get(
                `/live_board/v2/boards/${params.boardId}/items`,
                {params: {...keysToSnakeCase(params)}}
            )
                .then(result => {
                    if(result.status == 206) {
                        setTimeout(() => {
                            this.getItems(params)
                            .then(resolve)
                        . catch(reject);
                        }, 2000);
                    }
                    else {
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
            this.fetcher.get(`/live_board/v2/boards/${boardId}/items_presence`)
                .then(result => {
                    if(result.status == 206) {
                        setTimeout(() => {
                            this.getHasItems(boardId)
                            .then(resolve)
                        . catch(reject);
                        }, 2000);
                    }
                    else {
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
            this.fetcher.post<void>(`/live_board/v2/items/${itemId}/likes`)
                .then(() => { resolve(); })
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
            this.fetcher.get<JourneyItemsResponseV2>(
                `/live_board/v2/journeys/${itemId}`,
                { params: keysToSnakeCase(options)}
            )
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
    getItemDownloadUrl(itemId: number): Promise<ItemDownloadUrlSuccessResponseV2|ItemDownloadUrlFailedResponseV2> {
        return new Promise((resolve, reject) => {
            this.fetcher.get(`/live_board/v2/items/${itemId}/downloads`)
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
            this.fetcher.post<SnapshotUrlResponseV1>(
                `/live_board/v1/content_items/${contentItemId}/snapshots`,
                {guid}
            )
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
            this.fetcher.post<ItemAnalysisResponseV1>(`/live_board/v1/content_items/${contentItemId}/analyses`)
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
            this.fetcher.get<ItemFileMetadataResponseV1>(`/live_board/v1/content_items/${contentItemId}/files`)
                .then(result => {
                    if(result.status == 206) {
                        setTimeout(() => {
                            this.getFileMetadata(contentItemId)
                            .then(resolve)
                        . catch(reject);
                        }, 2000);
                    }
                    else {
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
            this.fetcher.post(
                `/live_board/v1/boards/${boardId}/cookies_consents`,
                {...keysToSnakeCase(options)}
            )
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not get file url", e);
                    reject(e);
                });
        });
    }

    // CTA

    /**
     * submit a message CTA
     *
     * @param {number} boardId
     * @param {CtaParams} options
     * @returns {CtaResponseV1} CtaResponse
     */
    saveMessageCta(boardId: number, options: CtaParams): Promise<CtaResponseV1> {
        return new Promise((resolve, reject) => {
            this.fetcher.post<CtaResponseV1>(
                `/live_board/v1/boards/${boardId}/campaign/message`,
                {...keysToSnakeCase(options)}
            )
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not submit cta", e);
                    reject(e);
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
    saveContactCta(boardId: number, options: CtaParams): Promise<CtaResponseV1> {
        return new Promise((resolve, reject) => {
            this.fetcher.post<CtaResponseV1>(
                `/live_board/v1/boards/${boardId}/campaign/contact`,
                {...keysToSnakeCase(options)}
            )
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not submit cta", e);
                    reject(e);
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
    saveFormCta(boardId: number, options: CtaParams): Promise<CtaResponseV1> {
        return new Promise((resolve, reject) => {
            this.fetcher.post<CtaResponseV1>(
                `/live_board/v1/boards/${boardId}/campaign/form`,
                {...keysToSnakeCase(options)}
            )
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not submit cta", e);
                    reject(e);
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
    saveLinkCta(boardId: number, options: CtaParams): Promise<CtaResponseV1> {
        return new Promise((resolve, reject) => {
            this.fetcher.post<CtaResponseV1>(
                `/live_board/v1/boards/${boardId}/campaign/link`,
                {...keysToSnakeCase(options)}
            )
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not submit cta", e);
                    reject(e);
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
     saveShareCta(boardId: number, options: CtaParams): Promise<CtaResponseV1> {
        return new Promise((resolve, reject) => {
            this.fetcher.post<CtaResponseV1>(
                `/live_board/v1/boards/${boardId}/campaign/share`,
                {...keysToSnakeCase(options)}
            )
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not submit cta", e);
                    reject(e);
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
    saveShareByEmailCta(boardId: number, email: string, invitationId: number): Promise<void>{
        return new Promise((resolve, reject) => {
            this.fetcher.post<void>(`/live_board/v1/boards/${boardId}/shares`, {
                email,
                invitation_id: invitationId
            })
                .then(() => { resolve(); })
                .catch(e => {
                    console.error("could not submit cta", e);
                    reject(e);
                });
        });
    }

    // end CTA

    /**
     * Update the current lead's account's enrichment data
     *
     * @param {string} type
     * @param {object} enrichmentData
     */
    updateEnrichment(type: string, enrichmentData: object): Promise<void> {
        return new Promise((resolve, reject) => {
            this.fetcher.post<void>("/live_board/v2/enrichments", {
                type,
                enrichment_data: enrichmentData
            })
                .then(() => { resolve(); })
                .catch(e => {
                    console.error("could not update enrichment", e);
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
        return new Promise((resolve, reject) => {
            this.fetcher.get<GeoLocationResponseV1>("/live_board/v1/geo_location")
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not get geolocation", e);
                    reject(e);
                });
        });
    }

    /**
     * Set invitation wrapper to used
     *
     * @param {string} token
     */
    updateInvitationUsed(token: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.fetcher.post<void>(`/live_board/v2/invitation_wrappers/${token}`)
                .then(() => { resolve(); })
                .catch(e => {
                    console.error("could not update invitation wrapper", e);
                    reject(e);
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
            this.fetcher.get<LeadResponseV1>("/live_board/v1/leads/me")
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
            this.fetcher.post<void>("/live_board/v2/lead_validations", {board_id: boardId})
                .then(() => { resolve(); })
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
            this.fetcher.delete<LeadResponseV1>("/live_board/v2/track_leads")
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
            this.fetcher.get<LiveEventUrlsResponseV2>(`/live_board/v2/boards/${boardId}/live_event`)
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
            this.fetcher.get<OrganizationSettingsResponseV1>(`/live_board/v1/boards/${boardId}/organization_settings`)
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
     * Create a new session
     *
     * @returns {SessionResonseV1} SessionResonse
     */
    createSession(): Promise<SessionResonseV1> {
        return new Promise((resolve, reject) => {
            this.fetcher.post<SessionResonseV1>("/live_board/v1/sessions")
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not create session", e);
                    reject(e);
                });
        });
    }

    /**
     * Validates the session
     *
     * @returns {SessionResonseV1|void} new SessionResonse if session is invalid, otherwise nothing
     */
    validateSession(): Promise<SessionResonseV1|void> {
        return new Promise((resolve, reject) => {
            this.fetcher.post("/live_board/v1/session_validations")
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not validate session", e);
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
            this.fetcher.post(`/live_board/v1/boards/${boardId}/session_cookies`)
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
            this.fetcher
                .get<FormMetadataDataV1>(`/live_board/v2/boards/${boardId}/forms/${formId}`, {
                    params: {
                        privacy_message_id: privacyMessageId
                    }
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

    //TODO: pings
}
