export * from "./IDesignerTypes";
import {AxiosInstance} from "axios";
import {FetchService} from "../common/FetchService";
import {keysToSnakeCase} from "../common/helpers/helpers";
import {
    ImageGalleryParams,
    GalleryImage,
    UploadUrlResponseV1,
    FormV1,
    CampaignElementResponseV1,
    CampaignElementsTypes,
    PrivacySettingsResponseV1,
    BoardHasPersonalizationResponseV1,
    FeatureSettingsResponseV1,
    PersonalizationV1,
    EmailTemplateV1,
    UserV1,
} from "./IDesignerTypes";
import {BoardConfig, Board} from "../common/interfaces/IBoard";

export class Designer {
    private fetcher: AxiosInstance;
    private fetchService: FetchService;

    constructor(fetch: FetchService) {
        this.fetchService = fetch;
        this.fetcher = fetch.fetcher;
    }

    public publishLiveBoard(boardId: number, withGoOnline: boolean = true): Promise<Board> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .post<any>(`/api/v1/boards/${boardId}/publish`, {with_go_online: withGoOnline})
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not publish live board", e);
                    reject(e);
                });
        });
    }

    /**
     * Gets the image gallery for given types
     *
     * @param {ImageGalleryParams} payload
     * @returns {GalleryImage[]} an array of GalleryImage
     */
    private getImageGallery(payload: ImageGalleryParams): Promise<GalleryImage[]> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .get<GalleryImage[]>("/api/v1/image_gallery", {params: {...keysToSnakeCase(payload)}})
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not get image gallery", e);
                    reject(e);
                });
        });
    }

    public getBannerImageGallery(): Promise<GalleryImage[]> {
        return this.getImageGallery({
            organizationId: this.fetchService.organizationId,
            bankCategory: "banners",
            type: "campaign",
        });
    }

    public getMobileImageGallery(): Promise<GalleryImage[]> {
        return this.getImageGallery({
            organizationId: this.fetchService.organizationId,
            bankCategory: "mobile_banners",
            type: "campaign",
        });
    }

    public getIconsImageGallery(): Promise<GalleryImage[]> {
        return this.getImageGallery({
            organizationId: this.fetchService.organizationId,
            bankCategory: "icons",
            type: "campaign",
        });
    }

    public getLogosImageGallery(): Promise<GalleryImage[]> {
        return this.getImageGallery({
            organizationId: this.fetchService.organizationId,
            bankCategory: "logos",
            type: "campaign",
        });
    }

    /**
     * When searching the web for an image
     *
     * @param {string} query
     * @returns {GalleryImage[]} an array of GalleryImage
     */
    getQueryImageGallery(query: string): Promise<GalleryImage[]> {
        return this.getImageGallery({type: "search", query});
    }

    /**
     * Fetches all the parameters required to upload a file
     *
     * @param {string} uploadType the type of file to be uploaded
     * @returns {UploadUrlResponseV1} UploadUrlResponse
     */
    public getImageUploadUrl(uploadType: string): Promise<UploadUrlResponseV1> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .post("/api/v1/upload_urls", {type: uploadType})
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not get upload url", e);
                    reject(e);
                });
        });
    }

    // Forms
    /**
     * Gets all forms of a board
     *
     * @param {number} boardId
     * @returns {Record<string, FormV1>} an object of id and FormResponse
     */
    getForms(boardId: number): Promise<Record<string, FormV1>> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .get<Record<string, FormV1>>(`api/v1/boards/${boardId}/forms`)
                .then(result => resolve(result.data))
                .catch(e => {
                    console.error("could not get forms", e);
                    reject(e);
                });
        });
    }

    /**
     * Create a new form
     *
     * @param {number} boardId
     * @param {FormV1} form
     * @returns {FormV1} the form after it's been saved (include id)
     */
    createForm(boardId: number, form: FormV1): Promise<FormV1> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .post<FormV1>(`api/v1/boards/${boardId}/forms`, keysToSnakeCase(form))
                .then(result => resolve(result.data))
                .catch(e => {
                    console.error("could not save form", e);
                    reject(e);
                });
        });
    }

    /**
     * Update new form
     *
     * @param {number} boardId
     * @param {FormV1} form
     * @returns {FormV1} the form after it's been saved (include id)
     */
    updateForm(boardId: number, form: FormV1): Promise<FormV1> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .put<FormV1>(`api/v1/boards/${boardId}/forms`, keysToSnakeCase(form))
                .then(result => resolve(result.data))
                .catch(e => {
                    console.error("could not save form", e);
                    reject(e);
                });
        });
    }

    //Campaign elements
    private getCampaignElements(
        boardId: number,
        elementType: CampaignElementsTypes,
    ): Promise<CampaignElementResponseV1> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .get<CampaignElementResponseV1>(`prism/${boardId}/campaign_elements`, {
                    params: {element_type: elementType},
                })
                .then(result => resolve(result.data))
                .catch(e => {
                    console.error("could not get campaign elements", e);
                    reject(e);
                });
        });
    }

    /**
     * Gets all of the organization's footers
     *
     * @param {number} boardId
     * @returns {CampaignElementResponseV1} on object of all of the footers and the default
     */
    getFooters(boardId): Promise<CampaignElementResponseV1> {
        return this.getCampaignElements(boardId, CampaignElementsTypes.footer);
    }

    /**
     *  Gets all of the organization's privacy messages (cookie consent)
     *
     * @param {number} boardId
     * @returns {CampaignElementResponseV1} on object of all of the privacy messages and the default
     */
    getPrivacyMessages(boardId): Promise<CampaignElementResponseV1> {
        return this.getCampaignElements(boardId, CampaignElementsTypes.privacy_message);
    }

    /**
     * Gets all of the organization's form privacy messages
     *
     * @param {number} boardId
     * @returns {CampaignElementResponseV1} on object of all of the form privacy messages and the default
     */
    getFormPrivacyMessages(boardId): Promise<CampaignElementResponseV1> {
        return this.getCampaignElements(boardId, CampaignElementsTypes.form_privacy_message);
    }

    /**
     * Gets the privacy setting og the organization
     * @param {number} organizationId
     * @returns {PrivacySettingsResponseV1} PrivacySettingsResponse
     */
    getPrivacySettings(organizationId: number): Promise<PrivacySettingsResponseV1> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .get<PrivacySettingsResponseV1>(`/api/v1/organizations/${organizationId}/settings/privacy`)
                .then(result => resolve(result.data))
                .catch(e => {
                    console.error("could not get privacy settings", e);
                    reject(e);
                });
        });
    }

    /**
     * Gets all email templates of a board
     *
     * @param {number} boardId
     * @returns {Record<string, EmailTemplateV1>} an object of id and EmailTemplateResponse
     */
    getEmailTemplates(boardId: number): Promise<Record<string, EmailTemplateV1>> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .get<Record<string, EmailTemplateV1>>(`api/v1/boards/${boardId}/email_templates`)
                .then(result => resolve(result.data))
                .catch(e => {
                    console.error("could not get email templates", e);
                    reject(e);
                });
        });
    }

    /**
     * Return if a board has personalization
     *
     * @param {number} organizationId
     * @param {number} boardId
     * @returns {BoardHasPersonalizationResponseV1} BoardHasPersonalizationResponse
     */
    getBoardHasPersonalization(organizationId: number, boardId: number): Promise<BoardHasPersonalizationResponseV1> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .get<BoardHasPersonalizationResponseV1>(
                    `api/v1/organizations/${organizationId}/settings/personalizations`,
                    {params: {board_id: boardId}},
                )
                .then(result => resolve(result.data))
                .catch(e => {
                    console.error("could not get personalization setting", e);
                    reject(e);
                });
        });
    }

    /**
     * Get which features are enables for an organization. Not all features are relevant to the designer
     *
     * @param {number} organizationId
     * @returns {FeatureSettingsResponseV1} FeatureSettingsResponse
     */
    getFeatureSettings(organizationId: number): Promise<FeatureSettingsResponseV1> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .get<FeatureSettingsResponseV1>(`/api/v1/organizations/${organizationId}/settings/features`)
                .then(result => resolve(result.data))
                .catch(e => {
                    console.error("could not get feature settings", e);
                    reject(e);
                });
        });
    }

    /**
     * Get the personalization for the board
     *
     * @param {number} boardId
     * @returns {PersonalizationV1} Personalization
     */
    getPersonalization(boardId: number): Promise<PersonalizationV1> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .get<PersonalizationV1>(`/prism/${boardId}/personalization`)
                .then(result => resolve(result.data))
                .catch(e => {
                    console.error("could not get personalization", e);
                    reject(e);
                });
        });
    }

    /**
     * Saves personalizations
     *
     * @param {number} boardId
     * @param {PersonalizationV1} personalization
     * @returns {PersonalizationV1} Personalization
     */
    savePersonalization(boardId: number, personalization: PersonalizationV1): Promise<PersonalizationV1> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .put<PersonalizationV1>(`/prism/${boardId}/personalization`, personalization)
                .then(result => resolve(result.data))
                .catch(e => {
                    console.error("could not save personalization", e);
                    reject(e);
                });
        });
    }

    saveLiveBoard(boardId: number, config: BoardConfig): Promise<any> {
        return this.fetcher.put(`/api/v1/boards/${boardId}/layout/${config.id}`, {
            layout: config,
            theme_id: null,
        });
    }

    getLiveBoardConfig(boardId: number, configId: number): Promise<any> {
      return new Promise((resolve, reject) => {
          return this.fetcher.get(`/api/v1/boards/${boardId}/layout/${configId}`)
              .then(result => resolve(result.data));
      });
    }

    /**
     * searches board contacts
     *
     * @param {number} boardId
     * @param {string} query
     * @returns {UserV1[]} Users array
     */
    searchBoardContacts(boardId: number, query: string): Promise<UserV1[]> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .get<UserV1[]>("/api/v1/search/board_contacts", {
                    params: {
                        board_id: boardId,
                        query: query,
                    },
                })
                .then(result => resolve(result.data))
                .catch(e => {
                    console.error("could not get board contacts", e);
                    reject(e);
                });
        });
    }
}
