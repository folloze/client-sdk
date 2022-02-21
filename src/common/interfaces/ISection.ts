import {GridPos} from "./IPositions";

export type SectionConfig = {
    id: string;
}

export type BackgroundImage = {
    image: string,
    position: string,
    size: "cover" | "contain" | string,
    repeat: string
}

export type RibbonConfig = {
    id: string;
    sectionId: string;
    position: GridPos;
    background: string | BackgroundImage | any; // url(/images/GreenBtn.svg) 50% 50% no-repeat rgb(255, 0, 0);
}
