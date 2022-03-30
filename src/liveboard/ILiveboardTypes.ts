import {FormDataV1, FormPrivacyMessageDataV1} from "./../designer/IDesignerTypes";
import {PrivacySettings} from '../common/ISharedTypes';

export type BoardResponseV1 = {
    id: number,
    slug: string,
    online_items_count: number,
    organization_id: number,
    name: string,
    is_ssl: boolean
}

export type BoardSellerResponseV1 = {
    name: string,
    last_name: string,
    email: string,
    phone: string,
    headline: string,
    company: string,
    photo: string,
    twitter: string,
    linkedin: string
}

export type CategoryResponseV2 = {
    id: number,
    slug: string,
    name: string,
    category_type: number,
    parent_category_id: number,
    board_id: number,
    url: string,
    items_count: number,
    subcategories_ids: number[],
    description: string,
    images: object[] //TODO: what is the structure of images
}

export type CategoriesResponseV2 = {
    categories_ids: number[],
    data: Record<string, CategoryResponseV2>
}

export type UserChatResponseV1 = {
    token: string,
    chat_id: number
}

export type Image = {
    id: number,
    url: string,
    fit: string,
    transformation: object, // TODO
    displayable_section?: string
}

export type ItemsParams = {
    boardId: number,
    category?: number,
    multiCategories?: number[][], // [[1,2], [3,4]] - returns all items that are in (1 or 2) and in (3 or 4)
    // always send the categories scope
    categoriesScope?: number[], // if specified will limit the result to include only items from those categories
    search?: string,
    sorter?: string,
    filter?: {
        type: string,
        num_items: number
    },
    // defaults are handled in the server
    page?: number,
    perPage?: number,
}

// minimixed data for the item relevant for the item viewer
export type OpenItemViewerPayload = {
    id: number;
    slug: string;
    name: string;
    description: string;
    item_source: number;
    item_type: string;
    is_gated: boolean;
    category?: {
        id: number;
        slug: string;
    },
    multiCategories?: number[][], // [[1,2], [3,4]] - returns all items that are in (1 or 2) and in (3 or 4)
    // always send the categories scope
    categoriesScope?: number[], // if specified will limit the result to include only items from those categories
    search?: string,
    sorter?: string,
    filter?: {
        type: string,
        num_items: number
    },
}

export type JourneyItemParams = {
    query?: string,
    categoryId?: number,
    boardId?: number
}

export type ItemResponseV2 = {
    id: number,
    category_ids: number[],
    category_item_data: {id: number, position: number}[],
    description: string,
    image: any, //TODO - Rotem fill the gap
    is_gated: boolean | null,
    item_source: number,
    item_type: string,
    likes_count: number,
    link_url: string | null,
    name: string,
    slug: string,
    status: number,
    views_count: number,
    open_in_new_tab: string | null
}

export type ItemsResponseV2 = {
    item_ids: number[],
    data: Record<string, ItemResponseV2>,
    most_viewed_item_id: number,
    items_count?: number,
    total_pages?: number,
    current_page?: number,
    per_page?: number
}

export type HasItemResponseV2 = {
    has_items: boolean
}

type User = {
    user_id: number,
    name: string,
    email: string,
    bio_settings: {
        email: boolean,
        content: string,
        twitter: boolean,
        linkedin: boolean
    },
    linkedin: string,
    twitter: string,
    image: string
}

type ArticleItem = {
    article_id: number,
    status: number,
    has_unpublished_changes: boolean,
    content_item_id: number,
    images: Image[],
    header_settings: {
        position: number
    },
    title: string,
    author: {
        value: number,
        should_display: boolean
    },
    author_user: User,
    bio_settings: {
        should_display: boolean
    },
    published_at: {
        value: string,
        should_display: boolean
    },
    read_time: {
        value: 1,
        should_display: boolean
    },
    body: string,
    published_data?: object// todo
}

export type JourneyItem = {
    journey_index: number,
    category_id: number,
    category_slug: string,
    category_name: string,
    slug: string,
    liked_by_user: boolean,
    is_gated: boolean,
    content_item_id: number,
    description: string,
    id: number,
    name: string,
    image: {
        url: string,
        fit: string
    },
    item_type: string,
    item_source: number
    file_viewer_type?: string, //for file or box
    //link item
    link_url?: string,
    snapshot_url?: string,
    secured?: boolean
    open_in_new_tab?: boolean,
    //article
    article?: ArticleItem
}

export type JourneyItemsResponseV2 = {
    items: Record<string, JourneyItem>, // current, previous and next items
    items_count: number,
    journey_index: number,
    next_item_index: number,
    prev_item_index: number
}

export type SnapshotUrlResponseV1 = {
    link_url: string,
    snapshot_url: string
}

export type ItemAnalysisResponseV1 = {
    secured: boolean
}

export type ItemFileMetadataResponseV1 = {
    preview_metadata: {
        url?: string, //every provider but box
        file_id?: number, //box
        access_token?: number //box
    }
}

export type ItemDownloadUrlSuccessResponseV2 = {
    download_url: string,
}

export type ItemDownloadUrlFailedResponseV2 = {
    text: string
}


export type CookieConsentParams = {
    leadId: number,
    constentOrigin: string,
    isoCode: string
}

export type CtaParams = {
    cta: {
        area: string,
        label?: string
    },
    email: string,
    formId: number,
    type: string,
    message?: string,       // message cta
    formFields?: string[],  // array of the names of fields (only keys)
    name?: string,          // form/share cta
    lastName?: string,      // form/share cta
    link?: string,          // link cta
    invitee?: string        // share cta
}

export type CtaResponseV1 = {
    id: number,
    email: string,
    name: string,
    last_name: string,
    anon_guest: boolean,
    company?: string,
    group_user: boolean,
}

export type GeoLocationResponseV1 = {
    city: string,
    continent: string,
    country: string,
    country_code: string,
    state: string
}

export type LeadResponseV1 = {
    id: number,
    name: string,
    email: string,
    last_name: string,
    company: string,
    anon_guest: boolean
}

export type LiveEventUrlsResponseV2 = {
    meeting_url?: string, //stream
    //zoom
    api_params?: {
        name: string,
        mn: string,
        email: string,
        pwd: string,
        role: string,
        lang: string,
        signature: string,
        china: string,
        apiKey: string
    },
    rich_client_desktop_url?: string,
    rich_client_mobile_url?: string
}

export type OrganizationSettingsResponseV1 = {
    privacy: PrivacySettings
}

export type SessionResonseV1 = {
    guid: string
}

export type FormMetadataDataV1 = {
    form: FormDataV1,
    privacy_message: FormPrivacyMessageDataV1
}
