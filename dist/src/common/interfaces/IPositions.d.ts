declare type Pos = {
    x: number;
    y: number;
};
export declare type GridPos = {
    rowStart: number;
    colStart: number;
    rowEnd: number;
    colEnd: number;
    layer?: number;
    span?: number;
    spanMin?: number;
    spanMax?: number;
    padding?: Pos;
};
export declare type FloatPos = {
    vertical: "top" | "middle" | "bottom";
    horizontal: "start" | "middle" | "end";
    pos?: Pos;
};
export {};
