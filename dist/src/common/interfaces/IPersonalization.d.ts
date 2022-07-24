import { FloatingWidgetConfig, RibbonConfig, WidgetConfig } from "./IWidget";
import { LiveWidget } from "../LiveWidget";
export declare type PersonalizationElement = {
    id: string;
    type: "widget" | "ribbon" | "floating";
    config: WidgetConfig | RibbonConfig | FloatingWidgetConfig;
    element: LiveWidget;
};
