import { ruleId } from "./IPersonalization";
import { FloatPos, GridPos } from "./IPositions";
import { BackgroundImage } from "./ISection";
export declare type closable = {
    close: () => void;
};
export interface LiveConfig {
    id: string;
    data: any;
    personalization?: {
        rulesBatchId: string;
        rulesData: Record<ruleId, {
            data: any;
        }>;
    };
}
export interface GridConfig extends LiveConfig {
    sectionId: string;
    position: GridPos;
}
export interface LoadableConfig extends LiveConfig {
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
