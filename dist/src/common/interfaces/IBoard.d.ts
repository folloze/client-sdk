import { IOldGeneral } from "./oldBoardTypes/IOldGeneral";
import { SectionConfig } from "./ISection";
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
    sections: SectionConfig[];
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
}
