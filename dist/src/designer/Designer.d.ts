export * from "./IDesignerTypes";
import { AxiosResponse } from "axios";
import { FetchService } from "../common/FetchService";
import { ImageBankResponseV1, ImageGalleryParams, GalleryImage, ImageBankCategory, UploadUrlResponseV1, FormV1, CampaignElementResponseV1, PrivacySettingsResponseV1, BoardHasPersonalizationResponseV1 } from "./IDesignerTypes";
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
    /**
     * Gets all forms of a board
     *
     * @param {number} boardId
     * @returns {Record<string, FormV1>} an object of id and FormResponse
     */
    getForms(boardId: number): Promise<Record<string, FormV1>>;
    /**
     * Create a new form
     *
     * @param {number} boardId
     * @param {FormV1} form
     * @returns {FormV1} the form after it's been saved (include id)
     */
    createForm(boardId: number, form: FormV1): Promise<FormV1>;
    /**
     * Update new form
     *
     * @param {number} boardId
     * @param {FormV1} form
     * @returns {FormV1} the form after it's been saved (include id)
     */
    updateForm(boardId: number, form: FormV1): Promise<FormV1>;
    private getCampaignElements;
    /**
     * Gets all of the organization's footers
     *
     * @param {number} boardId
     * @returns {CampaignElementResponseV1} on object of all of the footers and the default
     */
    getFooters(boardId: any): Promise<CampaignElementResponseV1>;
    /**
     *  Gets all of the organization's privacy messages (cookie consent)
     *
     * @param {number} boardId
     * @returns {CampaignElementResponseV1} on object of all of the privacy messages and the default
     */
    getPrivacyMessages(boardId: any): Promise<CampaignElementResponseV1>;
    /**
     * Gets all of the organization's form privacy messages
     *
     * @param {number} boardId
     * @returns {CampaignElementResponseV1} on object of all of the form privacy messages and the default
     */
    getFormPrivacyMessages(boardId: any): Promise<CampaignElementResponseV1>;
    /**
     * Gets the privacy setting og the organization
     * @param {number} organizationId
     * @returns {PrivacySettingsResponseV1} PrivacySettingsResponse
     */
    getPrivacySettings(organizationId: number): Promise<PrivacySettingsResponseV1>;
    /**
     * Return if a board has personalization
     *
     * @param {number} organizationId
     * @param {number} boardId
     * @returns {BoardHasPersonalizationResponseV1} BoardHasPersonalizationResponse
     */
    getBoardHasPersonalization(organizationId: number, boardId: number): Promise<BoardHasPersonalizationResponseV1>;
    saveLiveBoard(payload: any): Promise<AxiosResponse>;
}
