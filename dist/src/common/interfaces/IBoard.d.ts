import { IOldGeneral } from "./oldBoardTypes/IOldGeneral";
import { RibbonConfig, SectionConfig } from "./ISection";
import { WidgetConfig } from "./IWidget";
import { LitElement } from "lit";
import { LiveWidget } from "../LiveWidget";
import { FloatPos, GridPos } from "./IPositions";
export declare type BoardConfig = {
    boardId: string;
    meta: IOldGeneral;
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
    exampleConfig: BoardConfig;
    config: BoardConfig;
    widgetsEl: LiveWidget[];
    getGridStyling(): string;
    positionToGridArea(p: GridPos): string;
    getWidgetPos(p: GridPos | FloatPos): string;
    setRows(n: number): void;
    preRender(): void;
    refresh(): void;
    addScriptForWidget(w: WidgetConfig): Promise<WidgetConfig | void>;
    get widgets(): WidgetConfig[];
    get sections(): SectionConfig[];
    get ribbons(): RibbonConfig[];
    getWidget(id: string): WidgetConfig;
    getWidgetEl(id: string): LiveWidget;
    getSection(id: string): SectionConfig;
    getRibbon(id: string): RibbonConfig;
    getRibbonBySection(sectionId: string): RibbonConfig;
}
