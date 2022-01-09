import { FloatPos, GridPos } from "./IPositions";
import { LiveWidget } from "../LiveWidget";
export declare type WidgetConfig = {
    id: string;
    sectionId: string;
    position: GridPos;
    widgetTag: string;
    widgetScripts: string;
    data: any;
    element?: LiveWidget;
    floatPos?: FloatPos;
};
