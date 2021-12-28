export * from "./IDesignerTypes";
import {AxiosInstance, AxiosResponse} from "axios";
import {FetchService} from "../common/FetchService";
import {keysToSnakeCase} from "../common/helpers/helpers";
import {
    ImageBankResponseV1, ImageGalleryParams, GalleryImage, ImageGalleryTypes, ImageBankCategory,
    UploadUrlResponseV1
} from "./IDesignerTypes";

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
     public getImageGallery(payload: ImageGalleryParams): Promise<GalleryImage[]> {
        return new Promise((resolve, reject) => {
            this.fetcher.post<GalleryImage[]>(
                "/api/imagegallery",
                {...keysToSnakeCase(payload)}
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
     * When searching the web for an image
     * 
     * @param {string} query 
     * @returns {GalleryImage[]} an array of GalleryImage
     */
    getQueryImageGallery(query: string): Promise<GalleryImage[]> {
        return this.getImageGallery({type: ImageGalleryTypes.search, query});
    }
    
    /**
     * When a section has image bank set to 'organization'
     * 
     * @param {number} organizationId 
     * @param {ImageBankCategory} bankCategory 
     * @returns {GalleryImage[]} an array of GalleryImage
     */
    getImageBankGallery(organizationId: number, bankCategory: ImageBankCategory): Promise<GalleryImage[]> {
        return this.getImageGallery({
            type: ImageGalleryTypes.imageBank,
            organizationId,
            bankCategory
        });
    }

    /**
     * When a section of the designer has image bank set to 'folloze', get generic images
     * or organization doesn't have image bank set
     * 
     * @returns {GalleryImage[]} an array of GalleryImage
     */
    getCampaignImageGallery(): Promise<GalleryImage[]> {
        return this.getImageGallery({type: ImageGalleryTypes.campaign});
    }

    uploadImage(image: File, fileType?: string): Promise<string> {
        fileType = fileType || image.type.split("/")[0];

        return this.getImageUploadUrl(fileType)
            .then((data) => this.uploadImageToProvider(data, image, fileType));
    }

    // TODO: possibly extract to a file service
    /**
     * Fetches all the parameters required to upload a file
     * 
     * @param {string} uploadType the type of file to be uploaded
     * @returns {UploadUrlResponseV1} UploadUrlResponse
     */
    public getImageUploadUrl(uploadType: string): Promise<UploadUrlResponseV1> {
        return new Promise((resolve, reject) => {
            this.fetcher.post("/api/v1/upload_urls", {type: uploadType})
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not get upload url", e);
                    reject(e);
                });
        });
    }

    // TODO: possibly extract to a file service
    /**
     * 
     * @param {UploadUrlResponseV1} data 
     * @param {File} image 
     * @param {string} fileType 
     * @returns {string} the url of the image in the provider
     */
    private uploadImageToProvider(data: UploadUrlResponseV1, image: File, fileType: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.fetcher.post(
                data.put_url,
                {
                    file: image,
                    ...data.params
                },
                {
                    headers: {"Content-type": fileType}
                }
            )
                .then(result => {
                    resolve(result.data.secure_url);
                })
                .catch(e => {
                    console.error("could not upload image to provider", e);
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
}
