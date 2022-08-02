export interface ContentWidgetConfig {
    sources: SourcesConfig;
    item_viewer: FlzVItemViewerSettings;
}
export interface SourcesConfig {
    categories?: number[];
    sort: "popular" | "newest" | "order_on_board";
    options?: "dynamic" | "manual";
    id?: number;
    all_items_categories?: {
        visible: boolean;
        name: string;
        description: string;
    };
}
export interface FlzVItemViewerSettings {
    design: "classic" | "lightbox";
    allow_download: boolean;
    allow_likes?: boolean;
}
