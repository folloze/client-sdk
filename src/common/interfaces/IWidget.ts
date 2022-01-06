import {FloatPos, GridPos} from "./IPositions";
import {LiveWidget} from "../LiveWidget";


export type WidgetConfig = {
    id: string;
    sectionId: string;
    position: GridPos;
    widgetTag: string; // 'folloze-header-hor' | 'header' | 'gallery' | 'banner' ...
    widgetScripts: string; // url to the widget CDN | lib
    data: any;
    element?: LiveWidget;
    floatPos?: FloatPos;
}
