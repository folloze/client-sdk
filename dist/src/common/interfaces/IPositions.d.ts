export type Pos2d = {
    x: number;
    y: number;
};
export type cssPos = [number, number, number, number];
export type GridPos = {
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
type Vertical = "top" | "middle" | "bottom";
type Horizontal = "start" | "middle" | "end";
export type FloatPos = {
    pos?: {
        top?: number | string;
        right?: number | string;
        bottom?: number | string;
        left?: number | string;
    };
    padding?: {
        top?: string;
        right?: string;
        bottom?: string;
        left?: string;
    };
    isFixedToViewPort?: boolean;
    originPoint?: [Horizontal, Vertical];
};
export {};
