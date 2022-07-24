import {FloatPos, GridPos} from "./IPositions";
import {BackgroundImage} from "./ISection";

export interface LiveConfig {
    id: string;
    data: any;
}

export interface GridConfig {
    sectionId: string;
    position: GridPos;
}

export interface LoadableConfig {
    widgetTag: string; // 'folloze-header-hor' | 'header' | 'gallery' | 'banner' ...
    widgetScripts: string; // url to the widget CDN | lib
}

export interface WidgetConfig extends LiveConfig, GridConfig, LoadableConfig {}

export interface RibbonConfig extends LiveConfig, GridConfig {
    data: {
        background: string | BackgroundImage | any; // url(/images/GreenBtn.svg) 50% 50% no-repeat rgb(255, 0, 0);
        backgroundMobile: string | BackgroundImage | any;
    };
}

export interface FloatingWidgetConfig extends LiveConfig, LoadableConfig {
    floatPos?: FloatPos;

    // todo: we dont necessarily need both options for temporary use
    // option 1
    triggers: Array<{page: string; on: any}>;

    // option 2
    pages: string[];
    trigger: any;
}
