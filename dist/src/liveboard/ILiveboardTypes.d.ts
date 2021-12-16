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
export declare type SnapshotUrlResponseV1 = {
    link_url: string;
    snapshot_url: string;
};
