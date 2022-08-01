import {GridPos} from "./IPositions";
import {FlzEditableImageData} from "../../designer/IDesignerTypes";
import {FloatingWidgetConfig, WidgetConfig} from "./IWidget";

export type AddListItem = {
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

export type SectionType = "header" | "footer" | "body";
export type WidgetType = "contact-card" | string;

export type PredefinedSection = {
    sections: Record<string, SectionConfig>;
    widgets?: Record<string, WidgetConfig>;
    ribbons?: Record<string, RibbonConfig>;
};

export type SectionConfig = {
    id: string;
    name?: string;
    type?: SectionType;
};

export type BackgroundImage = {
    image: FlzEditableImageData;
    position: string;
    size: "cover" | "contain" | string;
    repeat: string;
};

export type RibbonConfig = {
    id: string;
    sectionId: string;
    position: GridPos;
    background: string | BackgroundImage | any; // url(/images/GreenBtn.svg) 50% 50% no-repeat rgb(255, 0, 0);
    backgroundMobile: string | BackgroundImage | any;
    optimizedForMobile?: boolean
};
