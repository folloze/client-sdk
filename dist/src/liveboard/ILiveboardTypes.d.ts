import { PrivacySettings } from '../common/ISharedTypes';
export declare type BoardResponseV1 = {
    id: number;
    slug: string;
    online_items_count: number;
    organization_id: number;
    name: string;
    is_ssl: boolean;
};
export declare type BoardSellerResponseV1 = {
    name: string;
    last_name: string;
    email: string;
    phone: string;
    headline: string;
    company: string;
    photo: string;
    twitter: string;
    linkedin: string;
};
export declare type CategoryResponseV2 = {
    id: number;
    slug: string;
    name: string;
    category_type: number;
    parent_category_id: number;
    board_id: number;
    url: string;
    items_count: number;
    subcategories_ids: number[];
    description: string;
    images: object[];
};
export declare type CategoriesResponseV2 = {
    categories_ids: number[];
    data: Record<string, CategoryResponseV2>;
};
export declare type UserChatResponseV1 = {
    token: string;
    chat_id: number;
};
export declare type Image = {
    id: number;
    url: string;
    fit: string;
    transformation: object;
    displayable_section?: string;
};
export declare type ItemsParams = {
    boardId: number;
    categoryId: number;
    search: string;
    page?: number;
    perPage?: number;
};
export declare type JourneyItemParams = {
    query?: string;
    categoryId?: number;
    boardId?: number;
};
export declare type ItemResponseV2 = {
    id: number;
    name: string;
    description: string;
    views_count: number;
    image: Image;
    item_type: string;
    item_source: number;
    likes_count: number;
    category_ids: number[];
    category_item_data: {
        id: number;
        position: number;
    }[];
    link_url: string;
    status: number;
    slug: string;
    is_gated?: boolean;
    open_in_new_tab?: boolean;
};
export declare type ItemsResponseV2 = {
    item_ids: number[];
    data: Record<string, ItemResponseV2>;
    most_viewed_item_id: number;
    items_count?: number;
    total_pages?: number;
    current_page?: number;
    per_page?: number;
};
export declare type HasItemResponseV2 = {
    has_items: boolean;
};
declare type User = {
    user_id: number;
    name: string;
    email: string;
    bio_settings: {
        email: boolean;
        content: string;
        twitter: boolean;
        linkedin: boolean;
    };
    linkedin: string;
    twitter: string;
    image: string;
};
declare type ArticleItem = {
    article_id: number;
    status: number;
    has_unpublished_changes: boolean;
    content_item_id: number;
    images: Image[];
    header_settings: {
        position: number;
    };
    title: string;
    author: {
        value: number;
        should_display: boolean;
    };
    author_user: User;
    bio_settings: {
        should_display: boolean;
    };
    published_at: {
        value: string;
        should_display: boolean;
    };
    read_time: {
        value: 1;
        should_display: boolean;
    };
    body: string;
    published_data?: object;
};
export declare type JourneyItem = {
    journey_index: number;
    category_id: number;
    category_slug: string;
    category_name: string;
    slug: string;
    liked_by_user: boolean;
    is_gated: boolean;
    content_item_id: number;
    description: string;
    id: number;
    name: string;
    image: {
        url: string;
        fit: string;
    };
    item_type: string;
    item_source: number;
    file_viewer_type?: string;
    link_url?: string;
    snapshot_url?: string;
    secured?: boolean;
    open_in_new_tab?: boolean;
    article?: ArticleItem;
};
export declare type JourneyItemsResponseV2 = {
    items: Record<string, JourneyItem>;
    items_count: number;
    journey_index: number;
    next_item_index: number;
    prev_item_index: number;
};
export declare type SnapshotUrlResponseV1 = {
    link_url: string;
    snapshot_url: string;
};
export declare type ItemAnalysisResponseV1 = {
    secured: boolean;
};
export declare type ItemFileMetadataResponseV1 = {
    preview_metadata: {
        url?: string;
        file_id?: number;
        access_token?: number;
    };
};
export declare type ItemDownloadUrlSuccessResponseV2 = {
    download_url: string;
};
export declare type ItemDownloadUrlFailedResponseV2 = {
    text: string;
};
export declare type CookieConsentParams = {
    leadId: number;
    constentOrigin: string;
    isoCode: string;
};
export declare type CtaParams = {
    cta: {
        area: string;
        label?: string;
    };
    email: string;
    formId: number;
    type: string;
    message?: string;
    formFields?: string[];
    name?: string;
    lastName?: string;
    link?: string;
    invitee?: string;
};
export declare type CtaResponseV1 = {
    id: number;
    email: string;
    name: string;
    last_name: string;
    anon_guest: boolean;
    company?: string;
    group_user: boolean;
};
export declare type GeoLocationResponseV1 = {
    city: string;
    continent: string;
    country: string;
    country_code: string;
    state: string;
};
export declare type LeadResponseV1 = {
    id: number;
    name: string;
    email: string;
    last_name: string;
    company: string;
    anon_guest: boolean;
};
export declare type LiveEventUrlsResponseV2 = {
    meeting_url?: string;
    api_params?: {
        name: string;
        mn: string;
        email: string;
        pwd: string;
        role: string;
        lang: string;
        signature: string;
        china: string;
        apiKey: string;
    };
    rich_client_desktop_url?: string;
    rich_client_mobile_url?: string;
};
export declare type OrganizationSettingsResponseV1 = {
    privacy: PrivacySettings;
};
export declare type SessionResonseV1 = {
    guid: string;
};
export {};
