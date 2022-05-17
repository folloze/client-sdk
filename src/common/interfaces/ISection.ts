import {GridPos} from "./IPositions";
import {FlzEditableImageData} from "../../designer/IDesignerTypes";
import {WidgetConfig} from "./IWidget";

export type SectionType = "header" | "footer" | "body";

export type SectionConfig = {
    id: string;
    name: string;
    type: SectionType;
};

export type SectionListItem = {
    category: string;
    type: SectionType;
    config: PredefinedSection;
    description: string;
    image: string;
    name: string;
};

export type PredefinedSection = {
    sections: Record<string, SectionConfig>;
    widgets?: Record<string, WidgetConfig>;
    ribbons?: Record<string, RibbonConfig>;
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
};
