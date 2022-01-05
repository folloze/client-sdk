import {FloatPos, GridPos} from "./IPositions";


export type WidgetConfig = {
    id: string;
    sectionId: string;
    position: GridPos | FloatPos;
    widgetTag: string; // 'folloze-header-hor' | 'header' | 'gallery' | 'banner' ...
    widgetScripts: string; // url to the widget CDN | lib
    data: any;
}
