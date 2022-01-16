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
export declare type FloatPos = {
    vertical: "top" | "middle" | "bottom";
    horizontal: "start" | "middle" | "end";
    pos?: cssPos;
};
