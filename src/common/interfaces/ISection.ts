import {GridPos} from "./IPositions";
import {FlzEditableImageData} from "../../designer/IDesignerTypes";

export type SectionType = "header" | "footer" | "body";

export type SectionConfig = {
    id: string;
    name: string;
    type: SectionType;
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
