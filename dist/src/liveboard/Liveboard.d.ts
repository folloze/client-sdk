import { AxiosResponse } from "axios";
import { FetchService } from "../common/FetchService";
import { BoardResponseV1, BoardSellerResponseV1, CategoryResponseV2, CategoriesResponseV2, UserChatResponseV1, SnapshotUrlResponseV1 } from './ILiveboardTypes';
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
     *
     * For url items that cannot be rendered inside an iframe, this creates a snapshot and returns the original url and the new image
     *
     * @param {number} contentItemId
     * @param {number=} guid
     * @returns {SnapshotUrlResponseV1} SnapshotUrlResponse
     */
    createSnapshotUrl(contentItemId: number, guid?: number): Promise<SnapshotUrlResponseV1>;
    createItemAnalysis(payload: {
        contentItemId: number;
    }): Promise<AxiosResponse>;
    getFileUrl(payload: {
        contentItemId: number;
    }): Promise<AxiosResponse>;
    setCookiesConsent(payload: {
        boardId: number;
        leadId: number;
        constentOrigin: string;
        isoCode: string;
    }): Promise<AxiosResponse>;
    getItems(payload?: any): Promise<AxiosResponse>;
    private keysToSnakeCase;
}
