import { FloatPos, GridPos } from "./IPositions";
export declare type WidgetConfig = {
    id: string;
    sectionId: string;
    position: GridPos;
    widgetTag: string;
    widgetScripts: string;
    data: any;
};
export interface FloatingWidgetConfig extends WidgetConfig {
    floatPos?: FloatPos;
    triggers: Array<{
        page: string;
        on: any;
    }>;
    pages: string[];
    trigger: any;
}
