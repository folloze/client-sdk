import {PrivacySettings} from "../common/ISharedTypes";
import {BoardConfig} from "../common/interfaces/IBoard";

export type ImageGalleryTypes = "campaign" | "search" | "icon" | "bing" | "unsplash";

export enum CampaignElementsTypes {
    footer = 1,
    privacy_message,
    form_privacy_message,
}

export type GalleryImage = {
    url: string;
    fit: string;
    optimized_url?: string;
    id?: number;
    displayable_section?: string;
    transformation?: ImageTransformation;
    viewed?: boolean;
    bankCategory?: ImageBankCategoryType; // todo: not implemented in serverside
    galleryType?: ImageGalleryTypes; // todo: not implemented in serverside
    maxWidth?: number;
    maxHeight?: number;
    photo_attribution?: PhotoAttribution;
    gallery_service?: "bing" | "unsplash",
    error?: string
};

declare type PhotoAttribution = {
    url: string,
    first_name: string,
    last_name: string
}

export type ImageTransformation = {
    crop: {
        x: number;
        y: number;
        crop?: string; // "crop"
        unit?: string; // "%"
        width: number;
        aspect?: number;
        height: number;
        radius: string | number;
    };
    shape?: "square" | "rectangle" | "circle" | "none";
    artisticFilter?: string;
    flipY?: boolean;
    flipX?: boolean;
    tint?: {
        color: string;
        alpha: number;
    };
};

export type StringPosition =
    | "top-left"
    | "top-center"
    | "top-right"
    | "middle-left"
    | "middle-center"
    | "middle-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";

export type ImageBankCategoryType = "banners" | "mobile_banners" | "thumbnails" | "icons" | "logos" | "uploads";

export type FlzEditableImageData = {
    url: string;
    bankCategory: ImageBankCategoryType;
    optimized_url?: string;
    transformation?: ImageTransformation;
    position?: StringPosition;
    link?: string;
    open_in_new_window?: boolean;
    alt?: string;
    maxWidth?: number;
    maxHeight?: number;
    photo_attribution?: PhotoAttribution;
    gallery_service?: "bing" | "unsplash",
};

export type ImageGalleryParams = {
    type: ImageGalleryTypes;
    query?: string; // search in bing / unsplash
    organizationId?: number; // imageBank This is for cross org users in image bank (agencies, super admins, etc)
    bankCategory?: ImageBankCategoryType; // imageBank
    count?: number;
    photoId?: string;
};

export type UploadUrlResponseV1 = {
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

export type FormField = {
    label: string;
    order: number;
    placeholder: string;
    state: string;
    type: string;
    dependent_field?: DependentField;
    selection_values?: SelectInputValue[] | Record<string, SelectInputValue[]>;
};

type DependentField = {
    name: string,
    values: string[]
};

type SelectInputValue = {
    id: string,
    label: string
};

export type FormV1 = {
    id: number;
    name: string;
    board_id: number;
    organization_id: number;
    state: number;
    form_type: number;
    data: FormDataV1;
};

export type FormDataV1 = {
    form_type?: number;
    name?: string,
    // both classic and external
    form_title?: string;
    submit_label?: string;
    success_message?: string;
    submit_redirect_url?: string;
    // for type classic (1)
    fields?: Record<string, FormField>; // the field's name and properties. There will always be an 'email' field
    // for type external (2)
    script?: string;
    auto_fill?: boolean;
    // for type marketo (3)
    munchkin_id?: string;
    form_id?: string;
    base_url?: string;
    custom_script?: string;
};

type Label = {
    text: string;
    url: string;
};

type Checkbox = {
    label: string;
    name: string;
    is_required: boolean;
};

export type FootersResponseV1 = {
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

export type PrivacyMessageResponseV1 = {
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

export type FormPrivacyMessageDataV1 = {
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

export type FormPrivacyMessageResponseV1 = {
    id: number;
    element_id: number;
    name: string;
    state: number;
    is_standard: FormPrivacyMessageDataV1["is_standard"];
    message: FormPrivacyMessageDataV1["message"];
    text_area: FormPrivacyMessageDataV1["text_area"];
    checkbox_area: FormPrivacyMessageDataV1["checkbox_area"];
};

export type CampaignElementResponseV1 = {
    data: Record<string, FootersResponseV1 | PrivacyMessageResponseV1 | FormPrivacyMessageResponseV1>;
    default_id: number;
};

export type PrivacySettingsResponseV1 = PrivacySettings;

export type BoardHasPersonalizationResponseV1 = {
    personalization: boolean;
};

export type FeatureSettingsResponseV1 = {
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

export type BoardHasItemsResponseV1 = {
    has_items: boolean;
};

export type PersonalizationV1 = {
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

export type EmailTemplateV1 = {
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

export type UserV1 = {
    id: number;
    name: string;
    email: string;
    bio_settings: object;
    linkedin: object;
    twitter: object;
    image: string;
};

export type ConfigSavedConflict = {
    msg: string;
    config: BoardConfig;
    published_hash: string;
    is_board_online: boolean;
    user: UserV1;
};

export type ConfigSavedSuccess = {
    config: BoardConfig;
    published_hash: string;
    is_board_online: boolean;
};

export type PublishedUnpublishedConfig = {
    published_config: BoardConfig;
    unpublished_config: BoardConfig;
    published_hash: string;
    is_board_online: boolean;
};

export type MergeTagAttribute = {
    id: number;
    is_enabled: boolean;
    label: string;
    name: string;
    provider: string;
    allow_text_replacement: boolean;
    allow_user_input: boolean;
}

export type MergeTagValue = {
    id: string;
    name: string;
}