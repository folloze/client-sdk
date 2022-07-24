import {FloatPos, GridPos} from "./IPositions";
import {BackgroundImage} from "./ISection";

export interface LiveElement {
    id: string;
    data: any;
}

export interface GridElement {
    sectionId: string;
    position: GridPos;
}

export interface LoadableElement {
    widgetTag: string; // 'folloze-header-hor' | 'header' | 'gallery' | 'banner' ...
    widgetScripts: string; // url to the widget CDN | lib
}

export interface WidgetConfig extends LiveElement, GridElement, LoadableElement {}

export interface RibbonConfig extends LiveElement, GridElement {
    data: {
        background: string | BackgroundImage | any; // url(/images/GreenBtn.svg) 50% 50% no-repeat rgb(255, 0, 0);
        backgroundMobile: string | BackgroundImage | any;
    };
}

export interface FloatingWidgetConfig extends LiveElement, LoadableElement {
    floatPos?: FloatPos;

    // todo: we dont necessarily need both options for temporary use
    // option 1
    triggers: Array<{page: string; on: any}>;

    // option 2
    pages: string[];
    trigger: any;
}
