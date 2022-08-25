import { AxiosResponse } from "axios";
import { FetchService } from "../common/FetchService";
import { BoardResponseV1, BoardSellerResponseV1, CategoryResponseV2, CategoriesResponseV2, UserChatResponseV1, ItemResponseV2, ItemsResponseV2, HasItemResponseV2, SnapshotUrlResponseV1, ItemAnalysisResponseV1, ItemFileMetadataResponseV1, GeoLocationResponseV1, LeadResponseV1, JourneyItemsResponseV2, ItemDownloadUrlSuccessResponseV2, ItemDownloadUrlFailedResponseV2, LiveEventUrlsResponseV2, OrganizationSettingsResponseV1, ItemsParams, JourneyItemParams, CookieConsentParams, FormMetadataDataV1, CampaignElementDataV2, CtaParams, CtaResponseV1 } from "./ILiveboardTypes";
export declare class Liveboard {
    private fetchService;
    constructor(fetch: FetchService);
    /**
     * given the board slug (i.e. /best-board) it will retrieve the corresponding board
     *
     * @param {string} boardSlug the board's slug
     * @returns {BoardResponseV1} BoardResponse
     */
    getBoard(boardSlug: string): Promise<BoardResponseV1>;
    /**
     * gets the seller to be displayed for the board
     *
     * @param {number} boardId the board's id
     * @returns {BoardSellerResponseV1} BoardSellerResponse
     */
    getSellerInformation(boardId: number): Promise<BoardSellerResponseV1>;
    /**
     * gets category by id, board id, and slug
     *
     * @param {number | string} categoryIdOrSlug
     * @param {number} boardId
     * @param {boolean} bySlug
     * @returns {CategoryResponseV2} CategoryResponse
     */
    getCategory(categoryIdOrSlug: number | string, boardId: number, bySlug: boolean): Promise<CategoryResponseV2>;
    /**
     * gets all categories of a board
     *
     * @param {string} boardId
     * @returns {CategoriesResponseV2} CategoriesResponse
     */
    getCategories(boardId: number): Promise<CategoriesResponseV2>;
    /**
     *
     * Used for livestreams, get the chat id and token for given lead and board
     *
     * @param {number} boardId
     * @param {number} leadId
     * @returns {UserChatResponseV1} UserChatResponse
     */
    getUserChat(boardId: number, leadId: number): Promise<UserChatResponseV1>;
    /**
     * Fetches an item
     *
     * @param {number|string} itemId the item id or slug
     * @param {number} boardId
     * @param {boolean} bySlug
     * @returns {ItemResponseV2} ItemResponse
     */
    getItem(itemId: number | string, boardId: number, bySlug: boolean): Promise<ItemResponseV2>;
    /**
     * Gets all items by params
     *
     * @param {ItemsParams} params
     * @returns {ItemsResponseV2} ItemsResponse
     */
    getItems(params: ItemsParams): Promise<ItemsResponseV2>;
    /**
     * Get whether a board has items or not
     *
     * @param boardId
     * @returns {HasItemResponseV2} HasItemResponse
     */
    getHasItems(boardId: number): Promise<HasItemResponseV2>;
    /**
     * Like an item
     *
     * @param {number} itemId
     */
    likeItem(itemId: number): Promise<void>;
    /**
     * Gets the item journey
     *
     * @param {number} itemId
     * @param {JourneyItemParams} options JourneyItemParams
     * @returns {JourneyItemsResponseV2} JourneyItemsResponse
     */
    getJourneyItems(itemId: number, options: JourneyItemParams): Promise<JourneyItemsResponseV2>;
    /**
     * Gets the url to download the item
     *
     * @param {number} itemId
     * @returns {ItemDownloadUrlSuccessResponseV2|ItemDownloadUrlFailedResponseV2} the url or failiure message
     */
    getItemDownloadUrl(itemId: number): Promise<ItemDownloadUrlSuccessResponseV2 | ItemDownloadUrlFailedResponseV2>;
    /**
     *
     * For url items that cannot be rendered inside an iframe, this creates a snapshot and returns the original url and the new image
     *
     * @param {number} contentItemId
     * @param {number=} guid
     * @returns {SnapshotUrlResponseV1} SnapshotUrlResponse
     */
    createSnapshotUrl(contentItemId: number, guid?: number): Promise<SnapshotUrlResponseV1>;
    /**
     * Analyses whether the item is secure or not
     *
     * @param {number} contentItemId
     * @returns {ItemAnalysisResponseV1} ItemAnalysisResponse
     */
    createItemAnalysis(contentItemId: number): Promise<ItemAnalysisResponseV1>;
    /**
     * Fetches file metadata for given item
     *
     * @param {number} contentItemId
     * @returns {ItemFileMetadataResponseV1} ItemFileMetadataResponse
     */
    getFileMetadata(contentItemId: number): Promise<ItemFileMetadataResponseV1>;
    /**
     * Sets cookies consent for the lead
     *
     * @param {number} boardId
     * @param {CookieConsentParams} options
     */
    setCookiesConsent(boardId: number, options: CookieConsentParams): Promise<void>;
    /**
     * Update the current lead's account's enrichment data
     *
     * @param {string} type
     * @param {object} enrichmentData
     */
    updateEnrichment(type: string, enrichmentData: object): Promise<void>;
    /**
     * Gets the geo location of the current lead
     *
     * @returns {GeoLocationResponseV1} GeoLocationResponse
     */
    getGeoLocation(): Promise<GeoLocationResponseV1>;
    /**
     * Fetches the current lead
     *
     * @returns {LeadResponseV1} LeadResponse
     */
    getCurrentLead(): Promise<LeadResponseV1>;
    /**
     * Validates that the lead is a human
     *
     * @param {number} boardId
     */
    validateLead(boardId: number): Promise<void>;
    /**
     * Stop tracking and anonimyze lead
     *
     * @returns {LeadResponseV1} LeadResponse new anonymous lead
     */
    stopTrackingForSession(): Promise<LeadResponseV1>;
    /**
     * Gets the urls to use for the live event
     *
     * @param {number} boardId
     * @returns {LiveEventUrlsResponseV2} LiveEventUrlsResponse
     */
    getLiveEventUrls(boardId: number): Promise<LiveEventUrlsResponseV2>;
    /**
     * Gets the organization's settings
     *
     * @param {number} boardId
     * @returns {OrganizationSettingsResponseV1} OrganizationSettingsResponse
     */
    getOrganizationSettings(boardId: number): Promise<OrganizationSettingsResponseV1>;
    /**
     * Set the lead's session cookie
     *
     * @param {number} boardId
     * @returns {number} the lead's id
     */
    setSessionCookie(boardId: number): Promise<number>;
    getFormData(boardId: number, formId: number, privacyMessageId?: number): Promise<FormMetadataDataV1>;
    getPrivacyMessage(boardId: number, elementId: number): Promise<CampaignElementDataV2>;
    getFooter(boardId: number, elementId: number): Promise<CampaignElementDataV2>;
    getFormPrivacyMessage(boardId: number, elementId: number): Promise<CampaignElementDataV2>;
    /**
     * submit a message CTA
     *
     * @param {number} boardId
     * @param {CtaParams} options
     * @returns {CtaResponseV1} CtaResponse
     */
    saveMessageCta(boardId: number, options: CtaParams): Promise<AxiosResponse> | Promise<CtaResponseV1>;
    /**
     * submit a contact CTA
     *
     * @param {number} boardId
     * @param {CtaParams} options
     * @returns {CtaResponseV1} CtaResponse
     */
    saveContactCta(boardId: number, options: CtaParams): Promise<AxiosResponse> | Promise<CtaResponseV1>;
    /**
     * submit a form CTA
     *
     * @param {number} boardId
     * @param {CtaParams} options
     * @returns {CtaResponseV1} CtaResponse
     */
    saveFormCta(boardId: number, options: any): Promise<AxiosResponse> | Promise<CtaResponseV1>;
    /**
     * submit a link CTA
     *
     * @param {number} boardId
     * @param {CtaParams} options
     * @returns {CtaResponseV1} CtaResponse
     */
    saveLinkCta(boardId: number, options: CtaParams): Promise<AxiosResponse> | Promise<CtaResponseV1>;
    /**
     * submit a share CTA
     *
     * @param {number} boardId
     * @param {CtaParams} options
     * @returns {CtaResponseV1} CtaResponse
     */
    saveShareCta(boardId: number, options: CtaParams): Promise<AxiosResponse> | Promise<CtaResponseV1>;
    /**
     * Submit a share by email cta
     *
     * @param {number} boardId
     * @param {string} email
     * @param {number} invitationId
     */
    saveShareByEmailCta(boardId: number, email: string, invitationId: number): Promise<AxiosResponse> | Promise<void>;
    getEnrichment(boardId: number): Promise<any>;
}
