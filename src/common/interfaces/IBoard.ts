import {IOldGeneral} from "./oldBoardTypes/IOldGeneral";
import {SectionConfig} from "./ISection";
import {WidgetConfig} from "./IWidget";
import {LitElement} from "lit";
import {LiveWidget} from "../LiveWidget";
import {FloatPos, GridPos} from "./IPositions";

export type BoardConfig = {
    boardId: string;
    meta: IOldGeneral;
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
    addScriptForWidget(w: WidgetConfig): Promise<WidgetConfig>;

    get widgets(): WidgetConfig[];
    getWidget(id: string): WidgetConfig;
}
