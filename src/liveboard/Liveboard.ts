import { AxiosInstance, AxiosResponse } from "axios";
import { default as mapKeys, default as snakeCase } from 'lodash';
import { FetchService } from "../common/FetchService";
import {
    BoardResponseV1, BoardSellerResponseV1, CategoryResponseV2, CategoriesResponseV2,
    UserChatResponseV1, SnapshotUrlResponseV1, ItemAnalysisResponseV1, ItemFileMetadataResponseV1,
    CtaResponseV1,
    CookieConsentParams, CtaParams
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
                {...this.keysToSnakeCase(options)}
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

    //TODO: replace
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
                {...this.keysToSnakeCase(options)}
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
                {...this.keysToSnakeCase(options)}
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
                {...this.keysToSnakeCase(options)}
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
                {...this.keysToSnakeCase(options)}
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
                {...this.keysToSnakeCase(options)}
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

    private keysToSnakeCase(params: object): object {
        return mapKeys(params, (value, key) => {
            return snakeCase(key);
        });
    }
}
