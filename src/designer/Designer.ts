import {
    GenerateWidgetsTextsRequest, GenGenerateResponseV1, GenRephraseResponseV1,
    GenRephraseWidgetsTextsRequest, GenTranslateResponseV1, GenTranslateWidgetsTextsRequest
} from "../common/interfaces/IGenerationTypes";

export * from "./IDesignerTypes";
import {type AxiosInstance, type AxiosResponse} from "axios";
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
    PublishedUnpublishedConfig,
    ConfigSavedConflict,
    ConfigSavedSuccess,
    MergeTagAttribute,
    MergeTagValue,
    VideoGalleryParams,
    GalleryVideo,
    Theme,
    MergeTagFilters,
    type ChatConversationDataV2,
    type personalGalleryMediaParams
} from "./IDesignerTypes";
import {BoardConfig, Board} from "../common/interfaces/IBoard";
import {SectionListItem, CustomSectionListItem} from "../common/interfaces/ISection";

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
    private getImageGallery(payload: ImageGalleryParams | VideoGalleryParams): Promise<GalleryImage[]> {
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

    public createPersonalGalleryMedia(payload: personalGalleryMediaParams): Promise<GalleryImage | GalleryVideo> {
        const params = {
            ...payload,
            isPersonal: true,
            organizationId: this.fetchService.organizationId
        };

        return new Promise((resolve, reject) => {
            this.fetcher
                .post<GalleryImage | GalleryVideo>("/api/v1/organization_images", keysToSnakeCase(params))
                .then(result => {
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not create organization image", e);
                    reject(e);
                });
        });
    }

    public deletePersonalGalleryMedia(id: number): Promise<void> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .delete(`/api/v1/organization_images/${id}`)
                .then(() => {
                    resolve();
                })
                .catch(e => {
                    console.error("could not delete organization image", e);
                    reject(e);
                });
        });
    }

    public getVideosGallery(): Promise<GalleryVideo[]> {
        return this.getImageGallery({
            organizationId: this.fetchService.organizationId,
            bankCategory: "videos",
            type: "video"
        });
    }

    public getImagesImageGallery(): Promise<GalleryImage[]> {
        return this.getImageGallery({
            organizationId: this.fetchService.organizationId,
            bankCategory: "images",
            type: "designer",
            category: 'images'
        });
    }

    public getBannersImageGallery(): Promise<GalleryImage[]> {
        return this.getImageGallery({
            organizationId: this.fetchService.organizationId,
            bankCategory: "banners",
            type: "designer",
            category: 'banners'
        });
    }

    public getPersonalVideosGallery(): Promise<GalleryVideo[]> {
        return this.getImageGallery({
            organizationId: this.fetchService.organizationId,
            bankCategory: "videos",
            type: "video",
            isPersonal: true
        });
    }

    public getPersonalImageGallery(): Promise<GalleryImage[]> {
        return this.getImageGallery({
            organizationId: this.fetchService.organizationId,
            bankCategory: "images",
            type: "campaign",
            isPersonal: true
        });
    }

    public getMobileImageGallery(): Promise<GalleryImage[]> {
        return this.getImageGallery({
            organizationId: this.fetchService.organizationId,
            bankCategory: "mobile_banners",
            type: "designer",
            category: "mobile"
        });
    }

    public getIconsImageGallery(): Promise<GalleryImage[]> {
        return this.getImageGallery({
            organizationId: this.fetchService.organizationId,
            bankCategory: "icons",
            type: "designer",
            category: 'icons'
        });
    }

    public getLogosImageGallery(): Promise<GalleryImage[]> {
        return this.getImageGallery({
            organizationId: this.fetchService.organizationId,
            bankCategory: "logos",
            type: "designer",
            category: 'logos'
        });
    }

    /**
     * When searching the web for an image
     *
     * @param {string} query
     * @returns {GalleryImage[]} an array of GalleryImage
     */
    public searchImageGallery(query: string, count?: number): Promise<GalleryImage[]> {
        return this.getImageGallery({type: "search", query, count: count || 20});
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
    getForms(boardId: number, selectedFormId?: number): Promise<Record<string, FormV1>> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .get<Record<string, FormV1>>(`api/v1/boards/${boardId}/forms`, { params: { additional_form_id: selectedFormId } })
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
     * @param {number} formId
     * @param {FormV1} form
     * @returns {FormV1} the form after it's been saved (include id)
     */
    updateForm(boardId: number, formId: number, form: FormV1): Promise<FormV1> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .put<FormV1>(`api/v1/boards/${boardId}/forms/${formId}`, keysToSnakeCase(form))
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

    saveLiveBoard(
        boardId: number,
        config: BoardConfig,
    ): Promise<{status: number; data: ConfigSavedConflict | ConfigSavedSuccess}> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .put(`/api/v1/boards/${boardId}/config`, {
                    config: config,
                })
                .then(result => resolve({status: result.status, data: result.data}))
                .catch(e => {
                    if (e.response?.status === 409 || e.response?.status === 406) {
                        const reason = e.response?.status === 409 ? "conflict" : "unacceptable";
                        console.warn(`could not save - ${reason}`);
                        resolve({status: e.response.status, data: (e.response as AxiosResponse).data});
                    } else {
                        console.error("could not save liveBoard config", e);
                        reject(e);
                    }
                });
        });
    }

    getLiveBoardConfig(boardId: number): Promise<PublishedUnpublishedConfig> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .get(`/api/v1/boards/${boardId}/config`)
                .then(result => {
                    result.data.published_hash = result.data.unpublished_config.meta.newHash;
                    resolve(result.data);
                })
                .catch(e => {
                    console.error("could not save get liveBoard config", e);
                    reject(e);
                });
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

    /**
     * gets board merge tags
     *
     * @param {number} boardId
     * @param {MergeTagFilters} filters
     * @returns {MergeTagAttribute[]} merge tags array
     */
    public getMergeTags(
        organizationId: number,
        boardId: number,
        filters: MergeTagFilters
    ): Promise<MergeTagAttribute[]> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .get<MergeTagAttribute[]>(`/api/v1/organizations/${organizationId}/merge_tags`, {
                    params: {
                        board_id: boardId,
                        filters: filters
                    }
                })
                .then(result => resolve(result.data))
                .catch(e => {
                    console.error("could not get merge tags", e);
                    reject(e);
                });
        });
    }


    /**
     * gets merge tag lookup values
     *
     * @param {number} organizationId
     * @param {number} mergeTagId
     * @returns {<Record<number, MergeTagValue[]>>} array of values per merge tag id
     */
    public getMergeTagValues(
        organizationId: number,
        mergeTagId: number,
    ): Promise<Record<number, MergeTagValue[]>> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .get<Record<number, MergeTagValue[]>>(`/api/v1/merge_tags/${mergeTagId}/merge_tags_lookups`, {
                    params: {organization_id: organizationId},
                })
                .then(result => resolve(result.data))
                .catch(e => {
                    console.error("could not get merge tag values", e);
                    reject(e);
                });
        });
    }

    public getDesignerThemes(
        boardId: number
    ): Promise<Record<number, Theme>> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .get<Record<number, Theme>>(`/api/v1/boards/${boardId}/designer_themes`)
                .then(result => resolve(result.data))
                .catch(e => {
                    console.error("could not get designer themes", e);
                    reject(e);
                });
        });
    }

    public generateWidgetsText(generateParams: GenerateWidgetsTextsRequest): Promise<GenGenerateResponseV1> {
        const apiCallFunc = (resolve, reject, guid) => {
            this.fetcher
                .post<any>(`/api/v1/boards/generation/widgets_texts`, { ...generateParams, guid })
                .then(result => resolve(result))
                .catch(e => {
                    console.error("could not generate widgets texts", e);
                    reject(e);
                });
        };
        return this.fetchService.withPartialContent(apiCallFunc, 500, 90) as Promise<any>;
    }

    public rephraseWidgetText(generateParams: GenRephraseWidgetsTextsRequest): Promise<GenRephraseResponseV1> {
        const apiCallFunc = (resolve, reject, guid) => {
            this.fetcher
                .post<any>(`/api/v1/boards/rephrase/widgets_texts`, { ...generateParams, guid })
                .then(result => resolve(result))
                .catch(e => {
                    console.error("could not rephrase widgets texts", e);
                    reject(e);
                });
        };
        return this.fetchService.withPartialContent(apiCallFunc, 500, 90) as Promise<any>;
    }

    public translateWidgetText(generateParams: GenTranslateWidgetsTextsRequest): Promise<GenTranslateResponseV1> {
        const apiCallFunc = (resolve, reject, guid) => {
            this.fetcher
                .post<any>(`/api/v1/boards/translate/widgets_texts`, { ...generateParams, guid })
                .then(result => resolve(result))
                .catch(e => {
                    console.error("could not rephrase widgets texts", e);
                    reject(e);
                });
        };
        return this.fetchService.withPartialContent(apiCallFunc, 500, 90) as Promise<any>;
    }

    getCustomSections(): Promise<CustomSectionListItem[]> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .get(`/api/v1/custom_sections`)
                .then(result => resolve(result.data))
                .catch(e => {
                    console.error("could not get saved sections", e);
                    reject(e);
                });
        });
    }

    getCustomFloatingWidgets(): Promise<CustomSectionListItem[]> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .get(`/api/v1/custom_sections/floating_widgets`)
                .then(result => resolve(result.data))
                .catch(e => {
                    console.error("could not get saved sections", e);
                    reject(e);
                });
        });
    }

    createCustomSection(section: SectionListItem): Promise<CustomSectionListItem> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .post(`/api/v1/custom_sections`, section)
                .then(result => resolve(result.data))
                .catch(e => {
                    console.error("could not save section", e);
                    reject(e);
                });
        });
    }

    deleteCustomSection(customSectionId: number): Promise<CustomSectionListItem> {
        return new Promise((resolve, reject) => {
            this.fetcher
                .delete(`/api/v1/custom_sections/${customSectionId}`)
                .then(result => resolve(result.data))
                .catch(e => {
                    console.error("could not delete section", e);
                    reject(e);
                }
            );
        });
    }

    updateCustomSection(customSectionId: number, section: CustomSectionListItem): Promise<CustomSectionListItem>  {
        return new Promise((resolve, reject) => {
            this.fetcher
                .put(`/api/v1/custom_sections/${customSectionId}`, section)
                .then(result => resolve(result.data))
                .catch(e => {
                    console.error("could not update section", e);
                    reject(e);
                }
            );
        });
    }


    async createOrUpdateChatConversation(boardId, widgetId, conversationData: ChatConversationDataV2 = {}): Promise<void> {
        return this.fetchService.fetcher.post("/api/v2/boards/chat/conversations", {
            board_id: boardId,
            widget_id: widgetId,
            ...conversationData
        });
    }
}
