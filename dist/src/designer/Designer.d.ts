import { GenerateWidgetsTextsFromScratchRequest, GenGenerateResponseV1, GenRephraseResponseV1, GenRephraseWidgetsTextsRequest, GenTranslateResponseV1, GenTranslateWidgetsTextsRequest, GenerateWidgetsTextsFromPromptRequest, GenTextFromFile, GenTextFromUrl, GenTextResponse } from "../common/interfaces/IGenerationTypes";
export * from "./IDesignerTypes";
import { FetchService } from "../common/FetchService";
import { GalleryImage, UploadUrlResponseV1, FormV1, CampaignElementResponseV1, PrivacySettingsResponseV1, BoardHasPersonalizationResponseV1, FeatureSettingsResponseV1, PersonalizationV1, EmailTemplateV1, UserV1, PublishedUnpublishedConfig, ConfigSavedConflict, ConfigSavedSuccess, MergeTagAttribute, MergeTagValue, GalleryVideo, Theme, VideoAIVoice, VideoAIAvatar, VideoAIGenerateRequest, VideoAIGenerateResponse, MergeTagFilters, type ChatConversationDataV2, type personalGalleryMediaParams } from "./IDesignerTypes";
import { BoardConfig, Board } from "../common/interfaces/IBoard";
import { SectionListItem, CustomSectionListItem } from "../common/interfaces/ISection";
export declare class Designer {
    private fetcher;
    private fetchService;
    constructor(fetch: FetchService);
    publishLiveBoard(boardId: number, withGoOnline?: boolean): Promise<Board>;
    /**
     * Gets the image gallery for given types
     *
     * @param {ImageGalleryParams} payload
     * @returns {GalleryImage[]} an array of GalleryImage
     */
    private getImageGallery;
    createPersonalGalleryMedia(payload: personalGalleryMediaParams): Promise<GalleryImage | GalleryVideo>;
    deletePersonalGalleryMedia(id: number): Promise<void>;
    getVideosGallery(): Promise<GalleryVideo[]>;
    getImagesImageGallery(): Promise<GalleryImage[]>;
    getBannersImageGallery(): Promise<GalleryImage[]>;
    getPersonalVideosGallery(): Promise<GalleryVideo[]>;
    getPersonalImageGallery(): Promise<GalleryImage[]>;
    getMobileImageGallery(): Promise<GalleryImage[]>;
    getIconsImageGallery(): Promise<GalleryImage[]>;
    getLogosImageGallery(): Promise<GalleryImage[]>;
    getThumbnailsImageGallery(): Promise<GalleryImage[]>;
    /**
     * When searching the web for an image
     *
     * @param {string} query
     * @returns {GalleryImage[]} an array of GalleryImage
     */
    searchImageGallery(query: string, count?: number): Promise<GalleryImage[]>;
    /**
     * Fetches all the parameters required to upload a file
     *
     * @param {string} uploadType the type of file to be uploaded
     * @returns {UploadUrlResponseV1} UploadUrlResponse
     */
    getImageUploadUrl(uploadType: string): Promise<UploadUrlResponseV1>;
    /**
     * Gets all forms of a board
     *
     * @param {number} boardId
     * @returns {Record<string, FormV1>} an object of id and FormResponse
     */
    getForms(boardId: number, selectedFormId?: number): Promise<Record<string, FormV1>>;
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
     * @param {number} formId
     * @param {FormV1} form
     * @returns {FormV1} the form after it's been saved (include id)
     */
    updateForm(boardId: number, formId: number, form: FormV1): Promise<FormV1>;
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
     * Gets all email templates of a board
     *
     * @param {number} boardId
     * @returns {Record<string, EmailTemplateV1>} an object of id and EmailTemplateResponse
     */
    getEmailTemplates(boardId: number): Promise<Record<string, EmailTemplateV1>>;
    /**
     * Return if a board has personalization
     *
     * @param {number} organizationId
     * @param {number} boardId
     * @returns {BoardHasPersonalizationResponseV1} BoardHasPersonalizationResponse
     */
    getBoardHasPersonalization(organizationId: number, boardId: number): Promise<BoardHasPersonalizationResponseV1>;
    /**
     * Get which features are enables for an organization. Not all features are relevant to the designer
     *
     * @param {number} organizationId
     * @returns {FeatureSettingsResponseV1} FeatureSettingsResponse
     */
    getFeatureSettings(organizationId: number): Promise<FeatureSettingsResponseV1>;
    /**
     * Get the personalization for the board
     *
     * @param {number} boardId
     * @returns {PersonalizationV1} Personalization
     */
    getPersonalization(boardId: number): Promise<PersonalizationV1>;
    /**
     * Saves personalizations
     *
     * @param {number} boardId
     * @param {PersonalizationV1} personalization
     * @returns {PersonalizationV1} Personalization
     */
    savePersonalization(boardId: number, personalization: PersonalizationV1): Promise<PersonalizationV1>;
    saveLiveBoard(boardId: number, config: BoardConfig): Promise<{
        status: number;
        data: ConfigSavedConflict | ConfigSavedSuccess;
    }>;
    getLiveBoardConfig(boardId: number): Promise<PublishedUnpublishedConfig>;
    /**
     * searches board contacts
     *
     * @param {number} boardId
     * @param {string} query
     * @returns {UserV1[]} Users array
     */
    searchBoardContacts(boardId: number, query: string): Promise<UserV1[]>;
    /**
     * gets board merge tags
     *
     * @param {number} boardId
     * @param {MergeTagFilters} filters
     * @returns {MergeTagAttribute[]} merge tags array
     */
    getMergeTags(organizationId: number, boardId: number, filters: MergeTagFilters): Promise<MergeTagAttribute[]>;
    /**
     * gets merge tag lookup values
     *
     * @param {number} organizationId
     * @param {number} mergeTagId
     * @returns {<Record<number, MergeTagValue[]>>} array of values per merge tag id
     */
    getMergeTagValues(organizationId: number, mergeTagId: number): Promise<Record<number, MergeTagValue[]>>;
    getDesignerThemes(boardId: number): Promise<Record<number, Theme>>;
    generateWidgetsTextFromScratch(generateParams: GenerateWidgetsTextsFromScratchRequest): Promise<GenGenerateResponseV1>;
    generateWidgetsTextFromScratchWithBoardId(boardId: number, generateParams: GenerateWidgetsTextsFromScratchRequest): Promise<GenGenerateResponseV1>;
    generateWidgetsTextFromPrompt(boardId: number, generateParams: GenerateWidgetsTextsFromPromptRequest): Promise<GenGenerateResponseV1>;
    rephraseWidgetText(generateParams: GenRephraseWidgetsTextsRequest): Promise<GenRephraseResponseV1>;
    rephraseWidgetTextWithBoardId(boardId: number, generateParams: GenRephraseWidgetsTextsRequest): Promise<GenRephraseResponseV1>;
    translateWidgetText(generateParams: GenTranslateWidgetsTextsRequest): Promise<GenTranslateResponseV1>;
    getCustomSections(): Promise<CustomSectionListItem[]>;
    getCustomFloatingWidgets(): Promise<CustomSectionListItem[]>;
    createCustomSection(section: SectionListItem): Promise<CustomSectionListItem>;
    deleteCustomSection(customSectionId: number): Promise<CustomSectionListItem>;
    updateCustomSection(customSectionId: number, section: CustomSectionListItem): Promise<CustomSectionListItem>;
    createOrUpdateChatConversation(boardId: any, widgetId: any, conversationData?: ChatConversationDataV2): Promise<void>;
    getVideoAIVoices(): Promise<VideoAIVoice[]>;
    getVideoAIAvatars(): Promise<VideoAIAvatar[]>;
    generateVideoAI(request: VideoAIGenerateRequest): Promise<VideoAIGenerateResponse>;
    getVideoAIStatus(id: string): Promise<VideoAIGenerateResponse>;
    generateTextFromFile(boardId: number, generateParams: GenTextFromFile): Promise<GenTextResponse>;
    generateTextFromUrl(boardId: number, generateParams: GenTextFromUrl): Promise<GenTextResponse>;
}
