import {IOldGeneral} from "./oldBoardTypes/IOldGeneral";
import {SectionConfig} from "./ISection";
import {WidgetConfig} from "./IWidget";

export type IBoardConfig = {
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
    sections: SectionConfig[];
    widgets: WidgetConfig[];
};
