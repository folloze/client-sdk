import { GridPos } from "./IPositions";
import { FlzEditableImageData } from "../../designer/IDesignerTypes";
export declare type SectionType = "header" | "footer" | "body";
export declare type SectionConfig = {
    id: string;
    name: string;
    type: SectionType;
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
