export declare type Pos2d = {
    x: number;
    y: number;
};
export declare type cssPos = [number, number, number, number];
export declare type GridPos = {
    rowStart: number;
    colStart: number;
    rowEnd: number;
    colEnd: number;
    layer?: number;
    span?: number;
    spanMin?: number;
    spanMax?: number;
    padding?: cssPos;
    minHeight?: string;
};
declare type Vertical = "top" | "middle" | "bottom";
declare type Horizontal = "start" | "middle" | "end";
export declare type FloatPos = {
    pos: [number, number];
    isFixedToViewPort?: boolean;
    originPoint?: [Horizontal, Vertical];
};
export {};
