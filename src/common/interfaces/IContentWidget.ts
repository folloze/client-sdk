export interface ContentWidgetConfig {
    sources: SourcesConfig;
    item_viewer: FlzVItemViewerSettings;
}

export interface SourcesConfig {
    flz_category_ids?: number[];
    sort: "popular" | "newest" | "order_on_board";
    options?: "dynamic" | "manual";
    flz_item_id?: number;
    all_items_categories?: {
        visible: boolean;
        name: string;
        description: string;
    },
    virtual_category?: {
        flz_item_ids: number[];
    }
}

export interface FlzVItemViewerSettings {
    design: "classic" | "lightbox";
    allow_download: boolean;
    allow_likes?: boolean;
    lead_journey?: {
        type: "curated" | "ai",
        layout: "arrow" | "bottom",
        disableScrollingAnimation: boolean
    }
}
