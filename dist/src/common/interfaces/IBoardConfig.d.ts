import { IOldGeneral } from "./oldBoardTypes/IOldGeneral";
import { ISection } from "./ISection";
import { IWidget } from "./IWidget";
export declare type IBoardConfig = {
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
    sections: ISection[];
    widgets: IWidget[];
};
