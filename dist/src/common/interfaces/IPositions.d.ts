export declare type GridPos = {
    rowStart: number;
    colStart: number;
    rowEnd: number;
    colEnd: number;
    span?: number;
    spanMin?: number;
    spanMax?: number;
};
export declare type FloatPos = {
    vertical: "top" | "middle" | "bottom";
    horizontal: "start" | "middle" | "end";
    pos?: {
        x: number;
        y: number;
    };
};
