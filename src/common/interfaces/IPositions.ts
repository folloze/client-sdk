type Pos = {
    x: number,
    y: number,
}

export type GridPos = {
    rowStart: number;
    colStart: number;
    rowEnd: number;
    colEnd: number;

    layer?: number;
    span?: number;
    spanMin?: number;
    spanMax?: number;
    padding?: Pos
}

export type FloatPos = {
    vertical: "top" | "middle" | "bottom";
    horizontal: "start" | "middle" | "end";

    // pos (if exists) will take precedence over the common vertical / horizontal
    pos?: Pos
}
