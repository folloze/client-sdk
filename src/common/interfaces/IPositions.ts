export type Pos2d = {
    x: number;
    y: number;
}

// by order top, right, bottom, left
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

    padding?: cssPos
    minHeight?: string;
}

export type FloatPos = {
    vertical: "top" | "middle" | "bottom";
    horizontal: "start" | "middle" | "end";

    // pos (if exists) will take precedence over the common vertical / horizontal
    pos?: cssPos
}



