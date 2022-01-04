export declare enum ImageGalleryTypes {
    campaign = "campaign",
    imageBank = "image_bank",
    search = "search"
}
export declare enum ImageBankType {
    folloze = "folloze",
    organization = "organization"
}
export declare enum ImageBankCategory {
    all = 0,
    banners = 1,
    mobile_banners = 2,
    thumbnails = 3,
    icons = 4,
    logos = 5
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
};
export declare type ImageGalleryParams = {
    type: ImageGalleryTypes;
    query?: string;
    organizationId?: number;
    bankCategory?: ImageBankCategory;
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
    data: {
        form_title?: string;
        submit_label?: string;
        success_message?: string;
        fields?: Record<string, FormField>;
        script?: string;
        auto_fill?: string;
        munchkin_id?: string;
        form_id?: string;
        base_url?: string;
        custom_script?: string;
    };
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
export declare type FormPrivacyMessageResponseV1 = {
    id: number;
    element_id: number;
    name: string;
    state: number;
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
export declare type CampaignElementResponseV1 = {
    data: Record<string, FootersResponseV1 | PrivacyMessageResponseV1 | FormPrivacyMessageResponseV1>;
    default_id: number;
};
export {};
