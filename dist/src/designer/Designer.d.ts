import { AxiosResponse } from "axios";
import { FetchService } from "../common/FetchService";
import { ImageBankResponseV1, ImageGalleryParams, GalleryImage } from "./IDesignerTypes";
export declare class Designer {
    private fetcher;
    constructor(fetch: FetchService);
    /**
     * Gets the image gallery for given types
     *
     * @param {ImageGalleryParams} payload
     * @returns {GalleryImage[]} an array of GalleryImage
     */
    getImageGallery(payload: ImageGalleryParams): Promise<GalleryImage[]>;
    /**
     * Get the settings for the organization's image bank
     *
     * @param organizationId
     * @returns {ImageBankResponseV1} ImageBankResponse
     */
    getImageBankSettings(organizationId: number): Promise<ImageBankResponseV1>;
    /**
     * Set the settings for the organization's image bank
     *
     * @param {number} organizationId
     * @param {string} categoryName which type of images are being changes
     * @param {string} source the source of the images
     * @returns {ImageBankResponseV1} ImageBankResponse
     */
    saveImageBankSettings(organizationId: number, categoryName: string, source: string): Promise<ImageBankResponseV1>;
    saveLiveBoard(payload: any): Promise<AxiosResponse>;
    private keysToSnakeCase;
}
