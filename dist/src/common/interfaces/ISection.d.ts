import { GridPos } from "./IPositions";
export declare type SectionConfig = {
    id: string;
};
export declare type BackgroundImage = {
    image: string;
    position: string;
    size: "cover" | "contain" | string;
    repeat: string;
};
export declare type RibbonConfig = {
    id: string;
    sectionId: string;
    position: GridPos;
    background: string | BackgroundImage | any;
};
