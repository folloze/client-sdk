import { AxiosInstance, AxiosResponse } from "axios";
import { default as mapKeys, default as snakeCase } from 'lodash';
import { FetchService } from "../common/FetchService";
import {
    BoardResponseV1, BoardSellerResponseV1, CategoryResponseV2, CategoriesResponseV2,
    UserChatResponseV1, SnapshotUrlResponseV1
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
            this.fetcher.get(`/live_board/v2/boards/${boardId}/categories`)
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
            this.fetcher.post(
                "/live_board/v1/chat/user_chat", 
                {
                    params: {
                        board_id: boardId,
                        leadId: leadId
                    }
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
            this.fetcher.post(
                `/live_board/v1/content_items/${contentItemId}/snapshots`,
                {params: {guid}}
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
