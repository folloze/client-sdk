import { FetchService } from "../common/FetchService";
import { BoardResponseV1, BoardSellerResponseV1, CategoryResponseV2, CategoriesResponseV2, UserChatResponseV1, ItemResponseV2, ItemsResponseV2, SnapshotUrlResponseV1, ItemAnalysisResponseV1, ItemFileMetadataResponseV1, CtaResponseV1, GeoLocationResponseV1, ItemsParams, CookieConsentParams, CtaParams } from './ILiveboardTypes';
export declare class Liveboard {
    private fetcher;
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
     * @param {string=} token
     * @returns {BoardSellerResponseV1} BoardSellerResponse
     */
    getSellerInformation(boardId: number, token?: string): Promise<BoardSellerResponseV1>;
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
     * submit a message CTA
     *
     * @param {number} boardId
     * @param {CtaParams} options
     * @returns {CtaResponseV1} CtaResponse
     */
    saveMessageCta(boardId: number, options: CtaParams): Promise<CtaResponseV1>;
    /**
     * submit a contact CTA
     *
     * @param {number} boardId
     * @param {CtaParams} options
     * @returns {CtaResponseV1} CtaResponse
     */
    saveContactCta(boardId: number, options: CtaParams): Promise<CtaResponseV1>;
    /**
     * submit a form CTA
     *
     * @param {number} boardId
     * @param {CtaParams} options
     * @returns {CtaResponseV1} CtaResponse
     */
    saveFormCta(boardId: number, options: CtaParams): Promise<CtaResponseV1>;
    /**
     * submit a link CTA
     *
     * @param {number} boardId
     * @param {CtaParams} options
     * @returns {CtaResponseV1} CtaResponse
     */
    saveLinkCta(boardId: number, options: CtaParams): Promise<CtaResponseV1>;
    /**
     * submit a share CTA
     *
     * @param {number} boardId
     * @param {CtaParams} options
     * @returns {CtaResponseV1} CtaResponse
     */
    saveShareCta(boardId: number, options: CtaParams): Promise<CtaResponseV1>;
    /**
     * Submit a share by email cta
     *
     * @param {number} boardId
     * @param {string} email
     * @param {number} invitationId
     */
    saveShareByEmailCta(boardId: number, email: string, invitationId: number): Promise<void>;
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
     * Set invitation wrapper to used
     *
     * @param {string} token
     */
    updateInvitationUsed(token: string): Promise<void>;
}
