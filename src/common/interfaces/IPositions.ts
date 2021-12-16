export type GridPos = {
    rowStart: number;
    colStart: number;
    rowEnd: number;
    colEnd: number;

    layer?: number;
    span?: number;
    spanMin?: number;
    spanMax?: number;
}

export type FloatPos = {
    vertical: "top" | "middle" | "bottom";
    horizontal: "start" | "middle" | "end";

    // pos (if exists) will take precedence over the common vertical / horizontal
    pos?: {
        x: number,
        y: number,
    }
}
