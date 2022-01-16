import {PrivacySettings} from '../common/ISharedTypes';

export enum ImageGalleryTypes {
    campaign = "campaign",
    imageBank = "image_bank",
    search = "search"
}

export enum ImageBankType {
    folloze = "folloze",
    organization = "organization"
}

export enum ImageBankCategory {
    all = 0,
    banners = 1,
    mobile_banners,
    thumbnails,
    icons,
    logos
}

export enum CampaignElementsTypes {
    footer = 1,
    privacy_message,
    form_privacy_message
}

export type GalleryImage = {
    url: string,
    fit: string,
    id?: number,
    displayable_section?: string,
    transformation?: object, //TODO
    viewed?: boolean
}

export type ImageGalleryParams = {
    type: ImageGalleryTypes,
    query?: string, // search
    organizationId?: number, // imageBank This is for cross org users in image bank (agencies, super admins, etc)
    bankCategory?: ImageBankCategory, // imageBank
}

export type ImageBankResponseV1 = {
    icons: ImageBankType,
    logos: ImageBankType,
    banners: ImageBankType,
    thumbnails: ImageBankType,
    mobile_banners: ImageBankType
}

export type UploadUrlResponseV1 = {
    file_name: string,
    method: string,
    params: {
        api_key: string,
        signature: string,
        timestamp: number
    },
    get_url: string,
    put_url: string
}

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
}

type FormField = {
    label: string,
    order: number,
    placeholder: string,
    state: string,
    type: string
}

export type FormV1 = {
    id: number,
    name: string,
    board_id: number,
    organization_id: number,
    state: number,
    form_type: number,
    data: {
        // both classic and external
        form_title?: string,
        submit_label?: string,
        success_message?: string
        // for type classic (1)
        fields?: Record<string, FormField>, // the field's name and properties. There will always be an 'email' field
        // for type external (2)
        script?: string,
        auto_fill?: string,
        // for type marketo (3)
        munchkin_id?: string,
        form_id?: string,
        base_url?: string,
        custom_script?: string
    }
}

type Label = {
    text: string,
    url: string
}

type Checkbox = {
    label: string,
    name: string,
    is_required: boolean
}

export type FootersResponseV1 = {
    id: number,
    element_id: number,
    name: string,
    description: string,
    state: number,
    is_standard: boolean,
    logo: {
        show: boolean,
        url?: string
    },
    text: string,
    labels: Label[],
    background_color: string,
    show_in_item_view: boolean,
    text_color: {
        type: number,
        color: string
    },
    tracking_consent: {
        show: boolean,
        button_label?: string,
        dialog_button_label?: string,
        dialog_text?: string
    }
  } 


export type PrivacyMessageResponseV1 = {
    id: number,
    element_id: number,
    name: string,
    description: string,
    state: number,
    is_standard: boolean,
    is_top: boolean,
    message: string,
    link: string,
    can_close: boolean
}

export type FormPrivacyMessageResponseV1 = {
    id: number,
    element_id: number,
    name: string,
    state: number,
    is_standard: boolean,
    message: {
        html: string
    },
    text_area: {
        html: string
    },
    checkbox_area: {
        threshold: number,
        label: string,
        checkboxes: Checkbox[]
    }
}

export type CampaignElementResponseV1 = {
    data: Record<string, FootersResponseV1|PrivacyMessageResponseV1|FormPrivacyMessageResponseV1>,
    default_id: number
}

export type PrivacySettingsResponseV1 = PrivacySettings

export type BoardHasPersonalizationResponseV1 = {
    personalization: boolean
}