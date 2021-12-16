import { FloatPos, GridPos } from "./IPositions";
export declare type WidgetConfig = {
    id: string;
    section: number;
    position: GridPos | FloatPos;
    widgetTag: string;
    widgetScripts: string;
    data: any;
};
