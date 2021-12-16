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