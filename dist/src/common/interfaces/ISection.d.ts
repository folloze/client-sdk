import { GridPos } from "./IPositions";
import { FlzEditableImageData } from "../../designer/IDesignerTypes";
import { WidgetConfig } from "./IWidget";
export declare type SectionType = "header" | "footer" | "body";
export declare type SectionConfig = {
    id: string;
    name: string;
    type: SectionType;
};
export declare type SectionListItem = {
    category: string;
    type: SectionType;
    config: PredefinedSection;
    description: string;
    image: string;
    name: string;
};
export declare type PredefinedSection = {
    sections: Record<string, SectionConfig>;
    widgets?: Record<string, WidgetConfig>;
    ribbons?: Record<string, RibbonConfig>;
};
export declare type BackgroundImage = {
    image: FlzEditableImageData;
    position: string;
    size: "cover" | "contain" | string;
    repeat: string;
};
export declare type RibbonConfig = {
    id: string;
    sectionId: string;
    position: GridPos;
    background: string | BackgroundImage | any;
    backgroundMobile: string | BackgroundImage | any;
};
