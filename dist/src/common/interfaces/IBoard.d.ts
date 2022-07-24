import { SectionConfig } from "./ISection";
import { FloatingWidgetConfig, GridConfig, LiveConfig, LoadableConfig, RibbonConfig, WidgetConfig } from "./IWidget";
import { LitElement } from "lit";
import { LiveWidget } from "../LiveWidget";
import { FloatPos, GridPos } from "./IPositions";
export declare type RibbonElement = LitElement & RibbonConfig;
export declare type FloatWidgetElement = LitElement & FloatingWidgetConfig;
export declare type LiveElement = LitElement & LiveConfig;
export declare type LoadableElement = LitElement & LoadableConfig;
export declare type BoardConfig = {
    id: number;
    meta: null | {
        savedTime?: Date;
        localSaveTime?: number;
        originHash?: string;
        newHash?: string;
        currentPageName?: string;
    };
    pages: Record<string, PageConfig>;
    floatingWidgets?: Record<string, FloatingWidgetConfig>;
};
export declare type PageConfig = {
    name: "default" | string;
    displayName?: string;
    grid: {
        maxWidth: string;
        gap: {
            x: string;
            y: string;
        };
        columns: {
            colNum: number;
            colWidth: string;
        };
        rows: {
            rowNum: number;
            rowHeight: string;
        };
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
    getGridStyling(): string;
    positionToGridArea(p: GridPos): string;
    getWidgetPos(p: GridPos | FloatPos): string;
    setRows(n: number): void;
    preRender(): void;
    refresh(): void;
    addScriptForWidget(w: WidgetConfig): Promise<WidgetConfig | void>;
    generateConfigHash(): string;
    autoUpgradeWidgets(): void;
    setForceUpdate(): void;
    setPageByName(str: string): void;
    getCurrentPageName(): string;
    registerFloatingWidgetsTriggers(): void;
    unRegisterFloatingWidgetsTriggers(): void;
    get pages(): PageConfig[];
    get sections(): SectionConfig[];
    get widgets(): WidgetConfig[];
    get widgetElements(): LiveWidget[];
    get floatingWidgets(): FloatingWidgetConfig[];
    get floatingWidgetElements(): LiveWidget[];
    get ribbons(): RibbonConfig[];
    get ribbonElements(): FloatWidgetElement[];
    getLiveConfigById(id: string): LiveConfig;
    getLoadableConfigById(id: string): LoadableConfig;
    getGridConfigById(id: string): GridConfig;
    getWidgetEl(id: string): LiveWidget;
    getRibbonEl(id: string): RibbonElement;
    getFloatEl(id: string): FloatWidgetElement;
    getLiveEl(id: string): LiveElement;
    getWidgetConfig(id: string): WidgetConfig;
    getRibbonConfig(id: string): RibbonConfig;
    getFloatingWidgetConfig(id: string): FloatingWidgetConfig;
    getAllLiveElements(): LiveElement[];
    getAllLoadableElements(): LoadableElement[];
    getSection(id: string): SectionConfig;
    getRibbonBySection(sectionId: string): RibbonConfig;
}
export declare type Board = {
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
    landing_page: "registration";
    config: BoardConfig;
    config_info: {
        state: "draft" | "published" | "unpublished changes";
        published_hash: string;
    };
    activation_state: {
        online: boolean;
    };
};
