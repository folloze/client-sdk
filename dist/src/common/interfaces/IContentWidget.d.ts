export interface ContentWidgetConfig {
    sources: SourcesConfig;
    item_viewer: FlzVItemViewerSettings;
}
export interface SourcesConfig {
    category_ids?: number[];
    sort: "popular" | "newest" | "order_on_board";
    options?: "dynamic" | "manual";
    item_id?: number;
    all_items_categories?: {
        visible: boolean;
        name: string;
        description: string;
    };
    virtual_category?: {
        item_ids: number[];
    };
}
export interface FlzVItemViewerSettings {
    design: "classic" | "lightbox";
    allow_download: boolean;
    allow_likes?: boolean;
}
