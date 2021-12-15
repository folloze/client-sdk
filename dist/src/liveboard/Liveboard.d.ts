import { AxiosResponse } from "axios";
import { FetchService } from "../common/FetchService";
import { BoardResponseV1, BoardSellerV1 } from './ILiveboardTypes';
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
    getCampaign(payload: {
        boardId: number;
    }): Promise<AxiosResponse>;
    getCategory(payload: {
        categoryId: number;
        boardId: number;
        bySlug: boolean;
    }): Promise<AxiosResponse>;
    getCategories(payload: {
        boardId: number;
    }): Promise<AxiosResponse>;
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
