import { AxiosInstance, AxiosResponse } from "axios";
import { default as mapKeys, default as snakeCase } from 'lodash';
import { FetchService } from "../common/FetchService";
import { BoardResponseV1, BoardSellerV1 } from './ILiveboardTypes';

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
    
    /**
     * gets the seller to be displayed for the board
     * 
     * @param {number} boardId the board's id
     * @param {string=} token 
     * @returns {BoardContactV1} BoardContact
     */
    getSellerInformation(boardId: number, token?: string): Promise<BoardSellerV1> {
        return new Promise((resolve, reject) => {
            this.fetcher.get<BoardSellerV1>(
                `/live_board/v1/boards/${boardId}/presenter`,
                {params: {token}}
            )
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not get seller");
                    reject(e);
                });
        });
    }

    // this will probably be one of the first things to go
    getCampaign(payload: {boardId: number}): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {
            this.fetcher.get(`/live_board/v2/boards/${payload.boardId}/campaign`)
                .then(result => {
                    resolve(result);
                })
                .catch(e => {
                    console.error("could not get campaign");
                    reject(e);
                });
        });
    }

    getCategory(payload: {categoryId: number, boardId: number, bySlug: boolean}): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {
            this.fetcher.get(
                `/live_board/v2/categories/${payload.categoryId}`,
                {params: this.keysToSnakeCase(payload)}
            )
                .then(result => {
                    resolve(result);
                })
                .catch(e => {
                    console.error("could not get category", e);
                    reject(e);
                });
        });
    }

    getCategories(payload: {boardId: number}): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {
            this.fetcher.get(`/live_board/v2/boards/${payload.boardId}/categories`)
                .then(result => {
                    resolve(result);
                })
                .catch(e => {
                    console.error("could not get categories", e);
                    reject(e);
                });
        });
    }

    getUserChat(payload: {boardId: number, leadId: number}): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {
            this.fetcher.post(
                "/live_board/v1/chat/user_chat", 
                {params: this.keysToSnakeCase(payload)}
            )
                .then(result => {
                    resolve(result);
                })
                .catch(e => {
                    console.error("could not get user chat", e);
                    reject(e);
                });
        });
    }

    createSnapshotUrl(payload: {contentItemId: number, guid?: number}): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {
            this.fetcher.post(
                `/live_board/v1/content_items/${payload.contentItemId}/snapshots`,
                {params: this.keysToSnakeCase(payload)}
            )
                .then(result => {
                    resolve(result);
                })
                .catch(e => {
                    console.error("could not create snapshot", e);
                    reject(e);
                });
        });
    }

    createItemAnalysis(payload: {contentItemId: number}): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {
            this.fetcher.post(`/live_board/v1/content_items/${payload.contentItemId}/analyses`)
                .then(result => {
                    resolve(result);
                })
                .catch(e => {
                    console.error("could not create analysis", e);
                    reject(e);
                });
        });
    }

    getFileUrl(payload: {contentItemId: number}): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {
            this.fetcher.get(`/live_board/v1/content_items/${payload.contentItemId}/files`)
                .then(result => {
                    resolve(result);
                })
                .catch(e => {
                    console.error("could not get file url", e);
                    reject(e);
                });
        });
    }

    setCookiesConsent(payload: {
        boardId: number,
        leadId: number,
        constentOrigin: string,
        isoCode: string
    }): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {
            this.fetcher.get(
                `/live_board/v1/boards/${payload.boardId}/cookies_consents`,
                {params: this.keysToSnakeCase(payload)}
            )
                .then(result => {
                    resolve(result);
                })
                .catch(e => {
                    console.error("could not get file url", e);
                    reject(e);
                });
        });
    }

    getItems(payload?: any): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {
            this.fetcher.get("/url-getting-items", payload)
                .then(result => {
                    resolve(result);
                })
                .catch(e => {
                    console.error("could not get items", e);
                    reject(e);
                });
        });
    }

    private keysToSnakeCase(params: object): object {
        return mapKeys(params, (value, key) => {
            return snakeCase(key);
        });
    }
}
