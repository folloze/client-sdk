import { FloatPos, GridPos } from "./IPositions";
export declare type IWidget = {
    id: string;
    position: GridPos | FloatPos;
    widgetTag: string;
    widgetScripts: string[];
    data: any;
};
