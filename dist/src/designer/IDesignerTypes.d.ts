import { PrivacySettings } from "../common/ISharedTypes";
import { BoardConfig } from "../common/interfaces/IBoard";
export declare enum ImageGalleryTypes {
    campaign = "campaign",
    icon = "icon",
    search = "search"
}
export declare enum ImageBankType {
    folloze = "folloze",
    organization = "organization"
}
export declare enum ImageBankCategory {
    banners = "banners",
    mobile_banners = "mobile_banners",
    thumbnails = "thumbnails",
    icons = "icons",
    logos = "logos"
}
export declare enum CampaignElementsTypes {
    footer = 1,
    privacy_message = 2,
    form_privacy_message = 3
}
export declare type GalleryImage = {
    url: string;
    fit: string;
    id?: number;
    displayable_section?: string;
    transformation?: object;
    viewed?: boolean;
    bankCategory?: ImageBankCategory;
};
export declare type StringPosition = "top-left" | "top-center" | "top-right" | "middle-left" | "middle-center" | "middle-right" | "bottom-left" | "bottom-center" | "bottom-right";
export declare type ImageBankCategoryType = "banners" | "mobile_banners" | "thumbnails" | "icons" | "logos" | "uploads";
export declare type FlzEditableImageData = {
    url: string;
    bankCategory: ImageBankCategoryType;
    position?: StringPosition;
    link?: string;
    open_in_new_window?: boolean;
    alt?: string;
};
export declare type ImageGalleryParams = {
    bank_category?: ImageBankCategory;
    type: ImageGalleryTypes;
    organization_id?: number;
    query?: string;
};
export declare type ImageBankResponseV1 = {
    icons: ImageBankType;
    logos: ImageBankType;
    banners: ImageBankType;
    thumbnails: ImageBankType;
    mobile_banners: ImageBankType;
};
export declare type UploadUrlResponseV1 = {
    file_name: string;
    method: string;
    params: {
        api_key: string;
        signature: string;
        timestamp: number;
    };
    get_url: string;
    put_url: string;
};
export declare type CloudinaryUploadResult = {
    asset_id: string;
    public_id: string;
    version: number;
    version_id: string;
    signature: string;
    width: number;
    height: number;
    format: string;
    resource_type: string;
    created_at: Date;
    tags: any[];
    bytes: number;
    type: string;
    etag: string;
    placeholder: boolean;
    url: string;
    secure_url: string;
    access_mode: string;
    original_filename: string;
    original_extension: string;
    api_key: string;
};
declare type FormField = {
    label: string;
    order: number;
    placeholder: string;
    state: string;
    type: string;
};
export declare type FormV1 = {
    id: number;
    name: string;
    board_id: number;
    organization_id: number;
    state: number;
    form_type: number;
    data: FormDataV1;
};
export declare type FormDataV1 = {
    form_type?: number;
    form_title?: string;
    submit_label?: string;
    success_message?: string;
    submit_redirect_url?: string;
    fields?: Record<string, FormField>;
    script?: string;
    auto_fill?: boolean;
    munchkin_id?: string;
    form_id?: string;
    base_url?: string;
    custom_script?: string;
};
declare type Label = {
    text: string;
    url: string;
};
declare type Checkbox = {
    label: string;
    name: string;
    is_required: boolean;
};
export declare type FootersResponseV1 = {
    id: number;
    element_id: number;
    name: string;
    description: string;
    state: number;
    is_standard: boolean;
    logo: {
        show: boolean;
        url?: string;
    };
    text: string;
    labels: Label[];
    background_color: string;
    show_in_item_view: boolean;
    text_color: {
        type: number;
        color: string;
    };
    tracking_consent: {
        show: boolean;
        button_label?: string;
        dialog_button_label?: string;
        dialog_text?: string;
    };
};
export declare type PrivacyMessageResponseV1 = {
    id: number;
    element_id: number;
    name: string;
    description: string;
    state: number;
    is_standard: boolean;
    is_top: boolean;
    message: string;
    link: string;
    can_close: boolean;
};
export declare type FormPrivacyMessageDataV1 = {
    is_standard: boolean;
    message: {
        html: string;
    };
    text_area: {
        html: string;
    };
    checkbox_area: {
        threshold: number;
        label: string;
        checkboxes: Checkbox[];
    };
};
export declare type FormPrivacyMessageResponseV1 = {
    id: number;
    element_id: number;
    name: string;
    state: number;
    is_standard: FormPrivacyMessageDataV1["is_standard"];
    message: FormPrivacyMessageDataV1["message"];
    text_area: FormPrivacyMessageDataV1["text_area"];
    checkbox_area: FormPrivacyMessageDataV1["checkbox_area"];
};
export declare type CampaignElementResponseV1 = {
    data: Record<string, FootersResponseV1 | PrivacyMessageResponseV1 | FormPrivacyMessageResponseV1>;
    default_id: number;
};
export declare type PrivacySettingsResponseV1 = PrivacySettings;
export declare type BoardHasPersonalizationResponseV1 = {
    personalization: boolean;
};
export declare type FeatureSettingsResponseV1 = {
    accounts_dashboard: boolean;
    advanced_reports: boolean;
    analytics_dashboards: boolean;
    app_sso_login: boolean;
    articles: boolean;
    board_embedding: boolean;
    change_custom_domain: boolean;
    chat: boolean;
    email_callbacks_subscription: boolean;
    enable_seo: boolean;
    items_limit: boolean;
    live_event: boolean;
    ms_crm_integration: boolean;
    personalization: boolean;
    set_group_board: boolean;
};
export declare type BoardHasItemsResponseV1 = {
    has_items: boolean;
};
export declare type PersonalizationV1 = {
    auto_assign_inviter: object;
    campaign: {
        banner: object;
        contact_card: object;
        footer: object;
        general: object;
        header: object;
        items: object;
        promotion: object;
    };
    is_enabled: boolean;
};
export declare type EmailTemplateV1 = {
    id: number;
    name: string;
    board_id: number;
    created_by: {
        id: number;
        full_name: string;
    };
    created_at: Date;
    updated_at: Date;
    is_default: boolean;
    invitation_type: number;
    subject: string;
    text: string;
    logo: string;
    template: boolean;
};
export declare type UserV1 = {
    id: number;
    name: string;
    email: string;
    bio_settings: object;
    linkedin: object;
    twitter: object;
    image: string;
};
export declare type LayoutSavedConflict = {
    msg: string;
    layout: BoardConfig;
    user: UserV1;
};
export {};
