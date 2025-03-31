export interface IOldGeneral {
    ga: Ga;
    ssl: boolean;
    eloqua: Eloqua;
    favicon: Favicon;
    marketo: Marketo;
    privacy: Privacy;
    board_id: number;
    munchkin: Munchkin;
    password: Password;
    greetings: Greetings;
    demandbase?: any;
    theme_color: string;
    localization: Localization;
    cookie_management: string;
    image_bank_config: ImageBankConfig;
    ms_crm_integration: MsCrmIntegration;
}
export interface Ga {
    code: string;
    active: boolean;
}
export interface Eloqua {
    active: boolean;
    campaign_identifier: string;
    cookie_matching_enabled: boolean;
}
export interface Favicon {
    url: string;
    show: boolean;
}
export interface Marketo {
    is_enabled: boolean;
    program_name: string;
}
export interface PrivacyWarningOptions {
    id: number;
    link: string;
    name: string;
    state: number;
    is_top: boolean;
    message: string;
    can_close: boolean;
    custom_id: number;
    element_id: number;
    description: string;
    is_standard: boolean;
}
export interface Privacy {
    privacy_warning_check: boolean;
    privacy_warning_options: PrivacyWarningOptions;
    regulated_countries_only: boolean;
    personal_info_concealment: boolean;
}
export interface Munchkin {
    active: boolean;
}
export interface Password {
    show: boolean;
    text?: any;
}
export interface Greetings {
    show: boolean;
    text: string;
    show_title: boolean;
    opening_text?: any;
    salutation_text?: any;
}
export interface Localization {
    locale: string;
    enabled: boolean;
    locale_method: number;
}
export interface ImageBankConfig {
    icons: string;
    logos: string;
    banners: string;
    thumbnails: string;
    mobile_banners: string;
    images: string;
}
export interface MsCrmIntegration {
    is_enabled: boolean;
}
