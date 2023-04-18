import { FloatingWidgetConfig } from "../interfaces/IWidget";
import { GridPos } from "../interfaces/IPositions";
export declare function floatingPosStrToPercent(str: any): any;
export declare function getFloatingWidgetPosition(fwc: FloatingWidgetConfig): string;
export declare function positionToGridArea(p: GridPos): string;
export declare function getWidgetStyleByPosition(p: GridPos): string;
