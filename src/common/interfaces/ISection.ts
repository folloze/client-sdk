import {GridPos} from "./IPositions";

export type SectionConfig = {
    id: string;
}

export type RibbonConfig = {
    id: string;
    sectionId: string;
    position: GridPos;
    background: string; // url(/images/GreenBtn.svg) 50% 50% no-repeat rgb(255, 0, 0);
}
