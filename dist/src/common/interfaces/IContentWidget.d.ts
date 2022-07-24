export interface ContentWidgetConfig {
    sources: SourcesConfig;
    item_viewer: FlzVItemViewerSettings;
}
export interface SourcesConfig {
    categories?: string[];
    sort: "popular" | "newest" | "order_on_board";
    options?: "dynamic" | "manual";
    id?: number;
}
export interface FlzVItemViewerSettings {
    design: "classic" | "lightbox";
    allow_download: boolean;
    allow_likes?: boolean;
}
