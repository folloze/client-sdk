export * from "./IDesignerTypes";
import { AxiosResponse } from "axios";
import { FetchService } from "../common/FetchService";
import { ImageBankResponseV1, ImageGalleryParams, GalleryImage, ImageBankCategory, UploadUrlResponseV1 } from "./IDesignerTypes";
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
     * When searching the web for an image
     *
     * @param {string} query
     * @returns {GalleryImage[]} an array of GalleryImage
     */
    getQueryImageGallery(query: string): Promise<GalleryImage[]>;
    /**
     * When a section has image bank set to 'organization'
     *
     * @param {number} organizationId
     * @param {ImageBankCategory} bankCategory
     * @returns {GalleryImage[]} an array of GalleryImage
     */
    getImageBankGallery(organizationId: number, bankCategory: ImageBankCategory): Promise<GalleryImage[]>;
    /**
     * When a section of the designer has image bank set to 'folloze', get generic images
     * or organization doesn't have image bank set
     *
     * @returns {GalleryImage[]} an array of GalleryImage
     */
    getCampaignImageGallery(): Promise<GalleryImage[]>;
    /**
     * Fetches all the parameters required to upload a file
     *
     * @param {string} uploadType the type of file to be uploaded
     * @returns {UploadUrlResponseV1} UploadUrlResponse
     */
    getImageUploadUrl(uploadType: string): Promise<UploadUrlResponseV1>;
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
}
