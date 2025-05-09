import {SectionConfig} from "./ISection";
import {FloatingWidgetConfig, GridConfig, LiveConfig, LoadableConfig, RibbonConfig, WidgetConfig} from "./IWidget";
import {LitElement} from "lit";
import {LiveWidget} from "../LiveWidget";
import {IPersonalizationConfig} from "./IPersonalization";
import {FlzEvent} from "../FlzEvent";
import {ThemeOverride, ThemeOverrideRules} from "./IThemeBuilder";
import {GenerationConfig, PageGenerationConfig} from "./IGenerationTypes";

export interface RibbonElement extends LitElement {
    config: RibbonConfig;
    data: RibbonConfig["data"];

    incomingEvents(e: FlzEvent);
}

export interface FloatWidgetElement extends LitElement {
    config: FloatingWidgetConfig;
    data: FloatingWidgetConfig["data"];
}
export interface LiveElement extends LitElement {
    config: LiveConfig;
    data: LiveConfig["data"];
}
export interface GridElement extends LitElement {
    config: LiveConfig & GridConfig;
    data: LiveConfig["data"] | RibbonConfig["data"];
}
export interface LoadableElement extends LitElement {
    config: LoadableConfig;
    data: LoadableConfig["data"];
}

export type BoardConfig = {
    id: number;
    meta: null | {
        savedTime?: Date;
        localSaveTime?: number; // unix time
        originHash?: string;
        newHash?: string;
        // publishedHash?: string; - maybe we dont need it on the meta?? - saving it can cause problems
        currentPageName?: string;
        clearCacheBefore?: string; // iso date
    };
    theme?: {
        id: number;
        override?: ThemeOverride;
        overrideRules?: ThemeOverrideRules;
    };
    pages: Record<string, PageConfig>;
    floatingWidgets?: Record<string, FloatingWidgetConfig>;
    personalization?: IPersonalizationConfig;
    generationConfig?: GenerationConfig;
};

export type PageConfig = {
    name: "default" | string;
    displayName?: string;
    grid: {
        maxWidth: string; // 1024px ?
        gap: {x: string; y: string};
        columns: {
            colNum: number; // 12 by default should not change after initial setup.
            colWidth: string; // default should be 'auto' or '1fr'
        };
        rows: {
            rowNum: number; // this should change every time a section is added.
            rowHeight: string; // this should always be immutable "40px"
        };
    };
    pageMeta?: {
        // if true tells the server to skip this page to the default page if the lead is known
        skipPageIfKnownLead?: boolean;
    };
    sections: Record<string, SectionConfig>;
    widgets: Record<string, WidgetConfig>;
    ribbons: Record<string, RibbonConfig>;
};

export interface ILiveBoard extends LitElement {
    config: BoardConfig;
    currentPage: PageConfig;
    widgetsEl: LiveWidget[];
    configHash: string;
    boardId: number;
    widgetScriptsLoadMap: Map<string, string>;

    getGridStyling(): string;
    setRows(n: number): void;
    preRender(): void;
    refresh(): void;
    addScriptForWidget(w: LoadableConfig): Promise<LoadableConfig | void>;
    generateConfigHash(): string;
    autoUpgradeWidgets(): void;
    setForceUpdate(): void;
    setPageByName(str: string): void;
    getCurrentPageName(): string;

    registerFloatingWidgetsTriggers(): void;
    unRegisterFloatingWidgetsTriggers(): void;

    turnOnPersonalization(): void;
    turnOffPersonalization(): void;

    set isWidgetsLoaded(value: boolean);
    get isWidgetsLoaded(): boolean;

    set personalizationResolved(result: {[key: string]: boolean} | undefined);
    get personalizationResolved(): {[key: string]: boolean} | undefined;

    get pages(): PageConfig[];
    get sections(): SectionConfig[];

    get widgets(): WidgetConfig[];
    get widgetElements(): LiveWidget[];

    get floatingWidgets(): FloatingWidgetConfig[];
    get floatingWidgetElements(): LiveWidget[];

    get ribbons(): RibbonConfig[];

    getLiveConfigById(id: string): LiveConfig;
    getLoadableConfigById(id: string): LoadableConfig;
    getGridConfigById(id: string): GridConfig;

    getWidgetEl(id: string): LiveWidget;
    getRibbonEl(id: string): RibbonElement;
    getLiveEl(id: string): LiveElement;
    getFloatEl(id: string): FloatWidgetElement | undefined;

    getWidgetConfig(id: string): WidgetConfig;
    getRibbonConfig(id: string): RibbonConfig;
    getFloatingWidgetConfig(id: string): FloatingWidgetConfig;

    getAllLiveElements(): LiveElement[];
    getAllLoadableElements(): LoadableElement[];
    getAllRibbonElements(): RibbonElement[];
    getAllGridElements(): GridElement[];
    getAllWidgetsElements(): LiveWidget[];

    getSection(id: string): SectionConfig;
    getRibbonBySection(sectionId: string): RibbonConfig | undefined;

    notifyWidgets(event: FlzEvent): void;

    themeOverrideReload(): void;

    isBoardReady(): boolean;
}

export const BOARD_GOALS = [
    "Product/Solution Overview",
    "Content Nurturing",
    "Account Based Page",
    "Landing Page",
    "Event Registration",
];

export const DEFAULT_PAGE_GENERATION_CONFIG: PageGenerationConfig = {
    board: {
        goal: BOARD_GOALS[0]
    },
    widgets: {}
};

export type PageName = "default" | "registration" | string;

export type Board = {
    allow_embedding?: boolean;
    id: number;
    auto_upgrade_widgets?: boolean;
    integrations: {
        allow_append_params?: boolean;
        eloqua?: object;
        ga?: object;
        marketo?: object;
        ms_crm?: object;
        pardot?: object;
    };
    is_ssl: boolean;
    name: string;
    seo_title: string;
    online_items_count: number;
    organization_id: number;
    privacy?: {
        cookie_management: "internal" | "external";
        element_id: number;
        personal_info_concealment: boolean;
        privacy_warning_check: boolean;
        regulated_countries_only: boolean;
    };
    slug: string;
    landing_page: PageName;
    config: BoardConfig;
    config_info: {
        state: "draft" | "published" | "unpublished changes";
        published_hash: string;
    };
    activation_state: {
        online: boolean;
    };
    is_v3_live: boolean;
    // only in designer
    public_link?: string;
    review_status?: {
        approved: boolean;
    };
};
