import {FloatPos, GridPos} from "./IPositions";


export type IWidget = {
    id: string;
    position: GridPos | FloatPos;
    widgetTag: string; // 'folloze-header-hor' | 'header' | 'gallery' | 'banner' ...
    widgetScripts: string[]; // url to the widget CDN | lib
    data: any;
}
