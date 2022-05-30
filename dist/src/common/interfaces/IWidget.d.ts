import { FloatPos, GridPos } from "./IPositions";
export declare type WidgetConfig = {
    id: string;
    sectionId: string;
    position: GridPos;
    widgetTag: string;
    widgetScripts: string;
    data: any;
    floatPos?: FloatPos;
};
