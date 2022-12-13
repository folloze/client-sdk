import {ItemResponseV2, LeadResponseV1, OpenItemViewerPayload} from "../../liveboard/ILiveboardTypes";
import {Board, BoardConfig} from "./IBoard";
import {PredefinedSection} from "./ISection";

export type DataProviders = "six_sense" | "dnb" | "demandbase_legacy" | "demandbase_one";

export type InitialState = {
    lead: Lead | LeadResponseV1;
    board: Board;
    layout: BoardConfig;
    privacy_settings: {
        cookie_management?: string;
        privacy_warning_provider?: string;
        disable_share_button_on_board?: boolean;
    };
    locale: string; // "en-US"
    session_guid: string; // needs to be in all requests to the server in header: "folloze-session-guid"
    data_service?: {
        type: DataProviders;
        api_key: string;
    };
    itemViewerData?: OpenItemViewerPayload; // in case we land on item viewer

    // if exists we should replace pii (personal identifiable information) url parameters & add the token to url
    token?: string;

    sections?: Section[];
    org_header_config: {
        logo: {
            url: string;
            with_padding: boolean;
        };
        social: {
            email: boolean;
        };
        tagline: string;
    };
    footers: Record<string, Footer>;
    features: {
        personalization: boolean;
        multiPages?: boolean;
    };
    user?: User;
    privacy_messages: PrivacyMessage[];
    item_viewer: {
        current?: ItemResponseV2;
        history?: Record<string, OpenItemViewerPayload>;
        items?: Record<string, ItemResponseV2>;
    };
    contact_card_info: ContactCardInfo;
};

export interface Organization {
    id: number;
    name: string;
    logo_url?: any;
    company: string;
    favicon_url: string;
    domain_settings: {
        selected: string;
        external_domain: {
            data: Array<{
                domain: string;
                is_depricated: string;
            }>;
            primary: string;
        };
    };
    file_provider_type: string;
    ssl: boolean;
    customer_type: string;
    customer_status: string;
    oem_type?: any;
    permissions: Permissions;
    members_count: number;
    not_found_page_configuration: NotFoundPageConfiguration;
    show_company_directory: boolean;
    default_system_role: number;
    show_pending_approval: boolean;
    accounts_dashboard_configuration: {
        show_internal_accounts: boolean;
    };
    integrations: Integrations;
    privacy: Privacy;
}

export interface User {
    id: number;
    name: string;
    last_name: string;
    email: string;
    headline: string;
    industry: string;
    home_guide_watched?: unknown;
    prism_guide_watched?: unknown;
    liveboard_identity_enabled: boolean;
    organization: Organization;
    photo: string;
    sign_in_count: number;
    is_registered: boolean;
    custom_attributes: unknown;
    errors: unknown;
    permissions: Permissions2;
    company: string;
    twitter: string;
    linkedin: string;
    phone: string;
    sfdc_bcc_email: string;
    timezone: string;
    bio_settings: BioSettings;
    is_admin: boolean;
    is_organization_editor: boolean;
    is_sfdc_admin: boolean;
    is_super_admin: boolean;
    team_name: string;
    organization_system_role: string;
    can_use_u3: boolean;
}

export interface Section {
    category: string;
    description: string;
    name: string;
    image: string;
    config: PredefinedSection;
    type: string;
}

export interface Footer {
    id: number;
    element_id: number;
    name: string;
    description: string;
    state: number;
    is_standard: boolean;
    logo: {
        show: boolean;
    };
    text?: any;
    labels?: any;
    background_color: string;
    text_color: {
        type: number;
        color: string;
    };
    tracking_consent?: any;
    is_disabled?: any;
}

export interface PrivacyMessage {
    id: number;
    element_id: number;
    name: string;
    description: string;
    state?: number;
    is_standard?: boolean;
    is_top: boolean;
    message: string;
    link: string;
    can_close: boolean;
}

export interface Lead {
    id: number;
    name: string;
    email: string;
    last_name: string;
    company: string;
    anon_guest: boolean;
    group_user: boolean;
}

export interface Integrations {
    ga?: unknown;
    eloqua?: unknown;
    ms_crm?: unknown;
    pardot?: unknown;
    marketo?: unknown;
    allow_append_params?: unknown;
}

export interface Privacy {
    cookie_management: string;
    privacy_warning_check: boolean;
    regulated_countries_only: boolean;
    all_boards_external: boolean;
}

export interface NotFoundPageConfiguration {
    logo: string;
    is_enabled?: any;
    company_url: string;
    organization_name: string;
}

export interface Permissions {
    change_custom_domain: boolean;
    items_limit: boolean;
    seo: boolean;
    set_group_board: boolean;
    ms_crm_integration: boolean;
    app_sso_login: boolean;
    board_embedding: boolean;
    personalization: boolean;
    analytics_dashboards: boolean;
    send_blast: boolean;
    live_event: boolean;
    chat: boolean;
    email_callbacks_subscription: boolean;
    advanced_reports: boolean;
    articles: boolean;
    accounts_dashboard: {
        show_internal_accounts: boolean;
        is_enabled: boolean;
    };
    unlimited_templates: {
        templates_limit: number;
        is_enabled: boolean;
    };
    bot_detection: boolean;
}

export interface ContactCardInfo {
    id: number;
    name: string;
    last_name: string;
    email: string;
    headline: string;
    industry: string;
    home_guide_watched?: any;
    prism_guide_watched?: any;
    liveboard_identity_enabled: boolean;
    organization: Organization;
    photo: string;
    sign_in_count: number;
    is_registered: boolean;
    custom_attributes: unknown;
    errors: unknown;
    permissions: Permissions2;
    company: string;
    twitter: string;
    linkedin: string;
    phone: string;
    sfdc_bcc_email: string;
    timezone: string;
    bio_settings: BioSettings;
    is_admin: boolean;
    is_organization_editor: boolean;
    is_sfdc_admin: boolean;
    is_super_admin: boolean;
    team_name: string;
    organization_system_role: string;
    can_use_u3: boolean;
}

export interface BioSettings {
    email: boolean;
    content: string;
    twitter: boolean;
    linkedin: boolean;
}

export interface Permissions2 {
    can_edit_sfdc: boolean;
    edit_domain_settings: boolean;
    can_approve_board: boolean;
    can_add_content_items: boolean;
    can_manage_u3_board_templates: boolean;
    can_create_campaigns: boolean;
}