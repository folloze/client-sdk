export declare type BoardResponseV1 = {
    id: number;
    slug: string;
    online_items_count: number;
    organization_id: number;
    name: string;
    is_ssl: boolean;
};
export declare type BoardSellerV1 = {
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
export declare type CategoryV2 = {
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
export declare type CategoriesV2 = {
    category_ids: number[];
    data: Record<string, CategoryV2>;
};
