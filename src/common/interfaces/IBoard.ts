import {RibbonConfig, SectionConfig} from "./ISection";
import {WidgetConfig} from "./IWidget";
import {LitElement} from "lit";
import {LiveWidget} from "../LiveWidget";
import {FloatPos, GridPos} from "./IPositions";
import {ClientSDK} from "../../sdk";

export type BoardConfig = {
    id: number,
    meta: {
        savedTime: Date;
    };
    grid: {
        maxWidth: string; // 1024px ?
        gap: { x: string, y: string };
        columns: {
            colNum: number; // 12 by default should not change after initial setup.
            colWidth: string; // default should be 'auto' or '1fr'
        }
        rows: {
            rowNum: number; // this should change every time a section is added.
            rowHeight: string; // this should always be immutable "40px"
        }
    };
    sections: Record<string, SectionConfig>;
    widgets: Record<string, WidgetConfig>;
    ribbons: Record<string, RibbonConfig>;
};

export interface ILiveBoard extends LitElement {
    boardId: number;
    board: Board;
    config: BoardConfig;
    widgetsEl: LiveWidget[];
    configHash: string;
    sdk: ClientSDK;

    getGridStyling(): string;
    positionToGridArea(p: GridPos): string;
    getWidgetPos(p: GridPos | FloatPos): string;
    setRows(n: number): void;
    preRender(): void;
    refresh(): void;
    addScriptForWidget(w: WidgetConfig): Promise<WidgetConfig|void>;
    generateConfigHash(): string;

    get widgets(): WidgetConfig[];
    get widgetElements(): LiveWidget[];
    get sections(): SectionConfig[];
    get ribbons(): RibbonConfig[];
    getWidget(id: string): WidgetConfig;
    getWidgetEl(id: string): LiveWidget
    getSection(id: string): SectionConfig;
    getRibbon(id: string): RibbonConfig;
    getRibbonBySection(sectionId: string): RibbonConfig;
}

export type Board = {
    allow_embedding?: boolean;
    id: number;
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
    state: "draft" | "published" | "unpublished changes";
};