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
    message?: string, //message cta
    formFields?: string[], //form/share cta
    name?: string, //form/share cta
    lastName?: string, //form/share cta
    link?: string, //link cta
    invitee?: string //share cta
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
