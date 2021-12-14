// no reference to the list of items??
// interesting - its in an items table connected with the boardId -> meaning there can be only one!

export interface IOldItems {
    show: boolean;
    title: Title;
    gating: Gating;
    show_home: boolean;
    show_likes: boolean;
    show_views: boolean;
    leading_item: LeadingItem;
    block_download: boolean;
    category_theme: string;
    show_item_type: boolean;
    show_search_box: boolean;
    show_item_description: boolean;
}

export interface Title {
    text?: any;
    title?: any;
}

export interface Metadata {
    form_id?: any;
}

export interface Gating {
    form?: any;
    show: boolean;
    metadata: Metadata;
    is_mandatory: boolean;
    privacy_message?: any;
}

export interface LeadingItem {
    id?: any;
    show: boolean;
}
