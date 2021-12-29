import {AxiosInstance, AxiosResponse} from "axios";
import {FetchService} from "../common/FetchService";
import { default as mapKeys, default as snakeCase } from 'lodash';
import {ImageBankResponseV1, ImageGalleryParams, GalleryImage} from "./IDesignerTypes";

export class Designer {
    private fetcher: AxiosInstance;

    constructor(fetch: FetchService) {
        this.fetcher = fetch.fetcher;
    }

    /**
     * Gets the image gallery for given types
     * 
     * @param {ImageGalleryParams} payload 
     * @returns {GalleryImage[]} an array of GalleryImage
     */
    getImageGallery(payload: ImageGalleryParams): Promise<GalleryImage[]> {
        return new Promise((resolve, reject) => {
            this.fetcher.post<GalleryImage[]>(
                "/api/imagegallery",
                {params: this.keysToSnakeCase(payload)}
            )
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not get image gallery", e);
                    reject(e);
                });
        });
    }

    /**
     * Get the settings for the organization's image bank
     * 
     * @param organizationId 
     * @returns {ImageBankResponseV1} ImageBankResponse
     */
    getImageBankSettings(organizationId: number): Promise<ImageBankResponseV1> {
        return new Promise((resolve, reject) => {
            this.fetcher.get<ImageBankResponseV1>(
                `/api/v1/organizations/${organizationId}/settings/image_bank`
            )
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not get image bank settings", e);
                    reject(e);
                });
        });
    }

    //TODO: remove if not needed - currently used only in admin tab
    /**
     * Set the settings for the organization's image bank
     * 
     * @param {number} organizationId 
     * @param {string} categoryName which type of images are being changes
     * @param {string} source the source of the images
     * @returns {ImageBankResponseV1} ImageBankResponse
     */
    saveImageBankSettings(organizationId: number, categoryName: string, source: string): Promise<ImageBankResponseV1> {
        return new Promise((resolve, reject) => {
            this.fetcher.put<ImageBankResponseV1>(
                `/api/v1/organizations/${organizationId}/settings/image_bank`,
                {
                    params: {
                        category_name: categoryName,
                        value: source
                    }
                }
            )
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not set image bank settings", e);
                    reject(e);
                });
        });
    }

    saveLiveBoard(payload: any): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {
            this.fetcher.post("/url-for-saving-live-board", payload)
                .then(result => {
                    resolve(result);
                })
                .catch(e => {
                    console.error("could not save liveboard", e);
                    reject(e);
                });
        });
    }

    //TODO: DRY
    private keysToSnakeCase(params: object): object {
        return mapKeys(params, (value, key) => {
            return snakeCase(key);
        });
    }
}
