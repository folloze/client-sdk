import {GridPos} from "./IPositions";
import {WidgetConfig} from "./IWidget";

export type SectionConfig = {
    position: GridPos;
    background: string; // url(/images/GreenBtn.svg) 50% 50% no-repeat rgb(255, 0, 0);
    widgets: WidgetConfig[];
}
