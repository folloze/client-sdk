import { FlzEditableImageData } from "../../designer/IDesignerTypes";
import { FloatingWidgetConfig, RibbonConfig, WidgetConfig } from "./IWidget";
export declare type AddListItem = {
    category: string;
    type: string;
    config: any;
    description: string;
    image: string;
    name: string;
};
export interface SectionListItem extends AddListItem {
    type: SectionType;
    config: PredefinedSection;
}
export interface WidgetListItem extends AddListItem {
    type: WidgetType;
    config: WidgetConfig | FloatingWidgetConfig;
}
export declare type SectionType = "header" | "footer" | "body";
export declare type WidgetType = "contact-card" | string;
export declare type PredefinedSection = {
    sections: Record<string, SectionConfig>;
    widgets?: Record<string, WidgetConfig>;
    ribbons?: Record<string, RibbonConfig>;
};
export declare type SectionConfig = {
    id: string;
    name?: string;
    type?: SectionType;
};
export declare type BackgroundImage = {
    image: FlzEditableImageData;
    position: string;
    size: "cover" | "contain" | string;
    repeat: string;
};
