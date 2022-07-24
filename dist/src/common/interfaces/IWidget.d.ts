import { FloatPos, GridPos } from "./IPositions";
import { BackgroundImage } from "./ISection";
export interface LiveConfig {
    id: string;
    data: any;
}
export interface GridConfig {
    sectionId: string;
    position: GridPos;
}
export interface LoadableConfig {
    widgetTag: string;
    widgetScripts: string;
}
export interface WidgetConfig extends LiveConfig, GridConfig, LoadableConfig {
}
export interface RibbonConfig extends LiveConfig, GridConfig {
    data: {
        background: string | BackgroundImage | any;
        backgroundMobile: string | BackgroundImage | any;
    };
}
export interface FloatingWidgetConfig extends LiveConfig, LoadableConfig {
    floatPos?: FloatPos;
    triggers: Array<{
        page: string;
        on: any;
    }>;
    pages: string[];
    trigger: any;
}
