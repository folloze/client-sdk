import { AxiosResponse } from "axios";
import { FetchService } from "../common/FetchService";
import { BoardResponseV1, BoardSellerV1, CategoryV2, CategoriesV2 } from './ILiveboardTypes';
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
     * @returns {BoardContactV1} BoardContact
     */
    getSellerInformation(boardId: number, token?: string): Promise<BoardSellerV1>;
    /**
     * gets category by id, board id, and slug
     *
     * @param {number | string} categoryIdOrSlug
     * @param {number} boardId
     * @param {boolean} bySlug
     * @returns {CategoryV2} Category
     */
    getCategory(categoryIdOrSlug: number | string, boardId: number, bySlug: boolean): Promise<CategoryV2>;
    /**
     * gets all categories of a board
     *
     * @param {string} boardId
     * @returns
     */
    getCategories(boardId: number): Promise<CategoriesV2>;
    getUserChat(payload: {
        boardId: number;
        leadId: number;
    }): Promise<AxiosResponse>;
    createSnapshotUrl(payload: {
        contentItemId: number;
        guid?: number;
    }): Promise<AxiosResponse>;
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
