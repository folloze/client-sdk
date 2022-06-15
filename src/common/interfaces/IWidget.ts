import {FloatPos, GridPos} from "./IPositions";

export type WidgetConfig = {
    id: string;
    sectionId: string;
    position: GridPos;
    widgetTag: string; // 'folloze-header-hor' | 'header' | 'gallery' | 'banner' ...
    widgetScripts: string; // url to the widget CDN | lib
    data: any;
};

export interface FloatingWidgetConfig extends WidgetConfig {
    floatPos?: FloatPos;

    // todo: we dont necessarily need both options for temporary use
    // option 1
    triggers: Array<{page: string; on: any}>;

    // option 2
    pages: string[];
    trigger: any;
}
