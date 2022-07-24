import { FloatPos, GridPos } from "./IPositions";
import { BackgroundImage } from "./ISection";
export interface LiveElement {
    id: string;
    data: any;
}
export interface GridElement {
    sectionId: string;
    position: GridPos;
}
export interface LoadableElement {
    widgetTag: string;
    widgetScripts: string;
}
export interface WidgetConfig extends LiveElement, GridElement, LoadableElement {
}
export interface RibbonConfig extends LiveElement, GridElement {
    data: {
        background: string | BackgroundImage | any;
        backgroundMobile: string | BackgroundImage | any;
    };
}
export interface FloatingWidgetConfig extends LiveElement, LoadableElement {
    floatPos?: FloatPos;
    triggers: Array<{
        page: string;
        on: any;
    }>;
    pages: string[];
    trigger: any;
}
