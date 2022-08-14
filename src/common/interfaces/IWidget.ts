import {ruleId} from "./IPersonalization";
import {FloatPos, GridPos} from "./IPositions";
import {BackgroundImage} from "./ISection";

export type closable = {close: () => void};

export interface LiveConfig {
    id: string;
    data: any;
    personalization?: {
        rulesBatchId: string;
        rulesData: Record<ruleId, {data: any}>;
    };
}

export interface GridConfig extends LiveConfig {
    sectionId: string;
    position: GridPos;
}

export interface LoadableConfig extends LiveConfig {
    widgetTag: string; // 'folloze-header-hor' | 'header' | 'gallery' | 'banner' ...
    widgetScripts: string; // url to the widget CDN | lib
}

export interface WidgetConfig extends LiveConfig, GridConfig, LoadableConfig {}

export interface RibbonConfig extends LiveConfig, GridConfig, LoadableConfig {}

export interface FloatingWidgetConfig extends LiveConfig, LoadableConfig {
    floatPos?: FloatPos;

    // todo: we dont necessarily need both options for temporary use
    // option 1
    triggers: Array<{page: string; on: any}>;

    // option 2
    pages: string[];
    trigger: any;
}
